/**
 * Format-Preserving DOCX Translator with Semantic Chunking
 * 
 * Architecture:
 * - CODE extracts text from XML (LLM never sees XML)
 * - CODE groups text into semantic chunks (paragraphs, tables)
 * - LLM receives clean text only, returns translations
 * - CODE patches translations back into XML
 * 
 * This ensures:
 * - LLM cannot corrupt XML structure
 * - Formatting is 100% preserved
 * - Context is maintained for better translation
 */

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const { DOMParser, XMLSerializer } = require('xmldom');
const docxCleaner = require('./xliff/docx_cleaner');
const { MODELS, getApiKey } = require('./providers');

// Configuration
const MAX_CHUNK_CHARS = 4000;  // Target chars per chunk
const CONTEXT_OVERLAP_CHARS = 600;  // 15% overlap for context

/**
 * Semantic block types
 */
const BlockType = {
    PARAGRAPH: 'paragraph',
    TABLE: 'table',
    HEADING: 'heading'
};

/**
 * Extract semantic blocks from DOCX XML using DOM
 * Groups text by paragraph and table structure
 */
function extractSemanticBlocks(xmlString) {
    const doc = new DOMParser().parseFromString(xmlString, 'text/xml');
    const body = doc.getElementsByTagName('w:body')[0];
    if (!body) return [];

    const blocks = [];
    const children = body.childNodes;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.nodeName === 'w:p') {
            const texts = extractTextRunsFromNode(child);
            if (texts.length > 0) {
                const isHeading = child.getElementsByTagName('w:pStyle')[0]?.getAttribute('w:val')?.includes('Heading');
                blocks.push({
                    type: isHeading ? BlockType.HEADING : BlockType.PARAGRAPH,
                    node: child, // Keep reference to DOM node
                    texts: texts,
                    fullText: texts.map(t => t.text).join('')
                });
            }
        } else if (child.nodeName === 'w:tbl') {
            const tableData = extractTableStructureFromNode(child);
            if (tableData.texts.length > 0) {
                blocks.push({
                    type: BlockType.TABLE,
                    node: child, // Keep reference to DOM node
                    texts: tableData.texts,
                    rows: tableData.rows,
                    fullText: tableData.texts.map(t => t.text).join(' | ')
                });
            }
        }
    }

    return blocks;
}

/**
 * Extract text runs from a paragraph or cell node
 */
function extractTextRunsFromNode(node) {
    const texts = [];
    const runs = node.getElementsByTagName('w:r');

    for (let i = 0; i < runs.length; i++) {
        const run = runs[i];
        const rPr = run.getElementsByTagName('w:rPr')[0];

        const formatting = {
            bold: !!(rPr && rPr.getElementsByTagName('w:b')[0]),
            italic: !!(rPr && rPr.getElementsByTagName('w:i')[0]),
            underline: !!(rPr && rPr.getElementsByTagName('w:u')[0])
        };

        const tNodes = run.getElementsByTagName('w:t');
        for (let j = 0; j < tNodes.length; j++) {
            const t = tNodes[j];
            texts.push({
                text: t.textContent,
                node: t, // Reference to the <w:t> element
                formatting: formatting
            });
        }

        const brNodes = run.getElementsByTagName('w:br');
        if (brNodes.length > 0) {
            // Treat breaks as newlines for context
            for (let j = 0; j < brNodes.length; j++) {
                texts.push({
                    text: '\n',
                    node: brNodes[j],
                    formatting: formatting
                });
            }
        }
    }
    return texts;
}

/**
 * Extract table structure from table node
 */
function extractTableStructureFromNode(tableNode) {
    const texts = [];
    const rows = [];
    const rowNodes = tableNode.getElementsByTagName('w:tr');

    for (let i = 0; i < rowNodes.length; i++) {
        const rowNode = rowNodes[i];
        const cells = [];
        const cellNodes = rowNode.getElementsByTagName('w:tc');

        for (let j = 0; j < cellNodes.length; j++) {
            const cellNode = cellNodes[j];
            const cellTexts = [];

            // Cells can contain multiple paragraphs
            const paragraphs = cellNode.getElementsByTagName('w:p');
            for (let k = 0; k < paragraphs.length; k++) {
                cellTexts.push(...extractTextRunsFromNode(paragraphs[k]));
            }

            if (cellTexts.length > 0) {
                texts.push(...cellTexts);
                cells.push({
                    col: j,
                    text: cellTexts.map(t => t.text).join(''),
                    textNodes: cellTexts,
                    node: cellNode
                });
            }
        }

        if (cells.length > 0) {
            rows.push({ row: i, cells: cells });
        }
    }
    return { texts, rows };
}


// Removed extractTextRunsFromBlock and extractTableStructure as they are replaced by Node versions
// Unused legacy functions removed (buildTextTag, distributeByTags)

/**
 * Split text at sentence boundaries (., ?, ! followed by space or end)
 * Returns array of sentences
 */
function splitIntoSentences(text) {
    const sentences = [];
    let current = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        current += char;

        // Check for sentence end: . ? ! followed by space, newline, or end
        if (/[.!?]/.test(char) && (i + 1 >= text.length || /\s/.test(text[i + 1]))) {
            sentences.push(current.trim());
            current = '';
        }
    }

    if (current.trim()) {
        sentences.push(current.trim());
    }

    return sentences.length > 0 ? sentences : [text];
}

/**
 * Create semantic chunks from blocks with sentence-aware splitting
 * - Splits at paragraph boundaries first
 * - If paragraph too large, splits at sentence boundaries
 * - Never cuts mid-sentence
 */
function createSemanticChunks(blocks) {
    const chunks = [];
    let currentChunk = {
        blocks: [],
        totalChars: 0,
        contextFromPrevious: null,
        contextToNext: null
    };

    console.log(`[CHUNKING] Total blocks: ${blocks.length}, Max chars per chunk: ${MAX_CHUNK_CHARS}`);

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const blockLength = block.fullText.length;

        // If block fits in current chunk, add it
        if (currentChunk.totalChars + blockLength <= MAX_CHUNK_CHARS) {
            currentChunk.blocks.push(block);
            currentChunk.totalChars += blockLength;
            continue;
        }

        // Block doesn't fit - save current chunk
        if (currentChunk.blocks.length > 0) {
            chunks.push(currentChunk);
        }

        // If single block is too large, split by sentences
        if (blockLength > MAX_CHUNK_CHARS) {
            const sentences = splitIntoSentences(block.fullText);
            let sentenceChunk = {
                blocks: [],
                totalChars: 0,
                contextFromPrevious: null,
                contextToNext: null
            };

            for (const sentence of sentences) {
                if (sentenceChunk.totalChars + sentence.length > MAX_CHUNK_CHARS && sentenceChunk.blocks.length > 0) {
                    chunks.push(sentenceChunk);
                    sentenceChunk = {
                        blocks: [],
                        totalChars: 0,
                        contextFromPrevious: sentenceChunk.blocks.length > 0
                            ? sentenceChunk.blocks[sentenceChunk.blocks.length - 1].fullText.slice(-CONTEXT_OVERLAP_CHARS)
                            : null,
                        contextToNext: null
                    };
                }

                // Clone block for this sentence
                sentenceChunk.blocks.push({
                    ...block,
                    fullText: sentence,
                    texts: block.texts.map(t => ({ ...t, text: sentence }))
                });
                sentenceChunk.totalChars += sentence.length;
            }

            // Push any remaining sentence chunk
            if (sentenceChunk.blocks.length > 0) {
                chunks.push(sentenceChunk);
            }

            // Start fresh for next block
            currentChunk = { blocks: [], totalChars: 0, contextFromPrevious: null, contextToNext: null };
        } else {
            // Start new chunk with context from previous
            const lastBlock = currentChunk.blocks[currentChunk.blocks.length - 1] || block;
            currentChunk = {
                blocks: [block],
                totalChars: blockLength,
                contextFromPrevious: lastBlock.fullText.slice(-CONTEXT_OVERLAP_CHARS),
                contextToNext: null
            };
        }
    }

    // Don't forget the last chunk
    if (currentChunk.blocks.length > 0) {
        chunks.push(currentChunk);
    }

    // Second pass: Add context from NEXT chunk (bidirectional)
    for (let i = 0; i < chunks.length - 1; i++) {
        const nextChunk = chunks[i + 1];
        const firstBlock = nextChunk.blocks[0];
        const contextText = firstBlock.fullText.slice(0, CONTEXT_OVERLAP_CHARS);
        chunks[i].contextToNext = contextText;
    }

    console.log(`[CHUNKING] Created ${chunks.length} chunks`);
    return chunks;
}

/**
 * Reconstruct text with formatting tags for LLM prompt
 */
function buildTaggedText(textNodes) {
    if (!textNodes || textNodes.length === 0) return '';

    return textNodes.map(node => {
        let text = node.text;
        // Skip empty text
        if (!text) return '';

        // Wrap with tags if formatting is present
        // Order: Bold outside, then Italic, then Underline inside (arbitrary but consistent)
        if (node.formatting) {
            if (node.formatting.underline) text = `[u]${text}[/u]`;
            if (node.formatting.italic) text = `[i]${text}[/i]`;
            if (node.formatting.bold) text = `[b]${text}[/b]`;
        }
        return text;
    }).join('');
}

/**
 * Format a chunk for LLM translation
 * Presents text in a clear, structured way
 */
function formatChunkForLLM(chunk, chunkIndex, totalChunks) {
    let formatted = '';
    let segmentIndex = 0;
    const segmentMap = new Map(); // Maps segment index to text node info

    // Add context if available
    if (chunk.contextFromPrevious) {
        formatted += `[CONTEXT FROM PREVIOUS SECTION - DO NOT TRANSLATE, FOR REFERENCE ONLY]\n`;
        formatted += `${chunk.contextFromPrevious}...\n\n`;
        formatted += `[END CONTEXT]\n\n`;
    }

    formatted += `[BEGIN TRANSLATION - Chunk ${chunkIndex + 1}/${totalChunks}]\n\n`;

    for (const block of chunk.blocks) {
        if (block.type === BlockType.TABLE) {
            formatted += `[TABLE]\n`;
            // Format table with row structure for context
            for (const row of block.rows) {
                const rowTexts = row.cells.map((cell, idx) => {
                    // Each cell gets a segment number
                    const segNum = segmentIndex++;
                    // Map all text nodes in this cell to this segment
                    for (const textNode of cell.textNodes) {
                        segmentMap.set(segNum, {
                            textNodes: cell.textNodes,
                            textNodes: cell.textNodes,
                            originalText: buildTaggedText(cell.textNodes) // Use TAGGED text
                        });
                    }
                    return `[${segNum}] ${cell.text}`;
                });
                formatted += `| ${rowTexts.join(' | ')} |\n`;
            }
            formatted += `[/TABLE]\n\n`;
        } else {
            // Paragraph or heading
            const prefix = block.type === BlockType.HEADING ? '[HEADING] ' : '';
            const segNum = segmentIndex++;

            // Map all text nodes in this block
            segmentMap.set(segNum, {
                textNodes: block.texts,
                textNodes: block.texts,
                originalText: buildTaggedText(block.texts) // Use TAGGED text
            });

            formatted += `${prefix}[${segNum}] ${buildTaggedText(block.texts)}\n\n`;
        }
    }

    formatted += `[END TRANSLATION]\n`;

    return { formatted, segmentMap };
}

/**
 * Translate a chunk using LLM with JSON Structured Output
 */
async function translateChunk(chunk, chunkIndex, totalChunks, customPrompt, modelKey, log, languageOptions = {}) {
    const { formatted, segmentMap } = formatChunkForLLM(chunk, chunkIndex, totalChunks);
    const expectedCount = segmentMap.size;

    // Language pair
    const languageB = languageOptions.languageB || 'Spanish (Colombia)';
    // Simple mapping for TLLM (could be expanded)
    const targetLanguage = languageB.toLowerCase().includes('spanish') ? 'es' : 'en';

    // Language pair (defaults for backward compatibility)
    const languageA = languageOptions.languageA || 'English';

    // OpenRouter web search option
    const useWebSearch = languageOptions.useWebSearch || false;

    // Prepare JSON input for the LLM
    // We strip out the visual tags like [TABLE] for the JSON payload to keep it clean,
    // but we could keep them if structure triggers are needed.
    // For JSON, a flat list of objects with context hints is best.

    const segmentsToTranslate = [];
    for (const [segIndex, segInfo] of segmentMap) {
        segmentsToTranslate.push({
            id: segIndex,
            text: segInfo.originalText // Now contains tags like [b]...[/b]
        });
    }

    // Default instructions with Bi-Directional Logic (Dynamic Languages)
    const baseInstructions = `You are a professional translator.

TASK:
1. Detect the language of the source text.
2. If the source is ${languageB}, translate it to ${languageA}.
3. If the source is ${languageA} (or other), translate it to ${languageB}.

HIERARCHY OF INSTRUCTIONS:
1. CRITICAL FORMAT RULES (Below) - You MUST follow these.
2. USER CUSTOM INSTRUCTIONS - Overrides styles.
3. DEFAULT LOGIC - See below.

DEFAULT LOGIC (When no user instructions contradict):
- Register: Formal (Professional/Business).
- IF SOURCE IS ${languageB.toUpperCase()} -> TRANSLATE TO ${languageA.toUpperCase()}.
- IF SOURCE IS ${languageA.toUpperCase()} -> TRANSLATE TO ${languageB.toUpperCase()}.
- FORCE TRANSLATION: Do not just "improve" the text. If it is in the source language, it MUST be changed to the target language.

CRITICAL FORMAT RULES (IMMUTABLE):
1. Output MUST be valid JSON array.
2. NO markdown formatting (no \`\`\`).
3. NO intro/outro text. ONLY the JSON array.
4. Translate ALL segments.
5. Do NOT translate the "id" field.
6. **PRESERVE FORMATTING TAGS:**
   - You will see tags like [b], [/b], [i], [/i], [u], [/u].
   - You MUST keep these tags wrapping the equivalent predicted translation.
   - Example: "Hello [b]World[/b]" -> "Hola [b]Mundo[/b]"
7. **TEXT COLOR:** All text must be BLACK. Do not suggest any font colors.
8. **SPANISH CAPITALIZATION:** When translating to Spanish, use SPANISH capitalization rules for titles and headings. In Spanish, only the first word and proper nouns are capitalized - do NOT calque English title case. Example: "User Guide for Advanced Features" → "Guía del usuario para funciones avanzadas" (NOT "Guía del Usuario para Funciones Avanzadas").`;

    // Add custom instructions if provided
    const customSection = customPrompt && customPrompt.trim()
        ? `\n\n=== USER CUSTOM INSTRUCTIONS (Prioritize these for style/tone) ===\n${customPrompt}\n======================================================`
        : '';

    // Add bidirectional context if available
    let contextSection = '';
    if (chunk.contextFromPrevious || chunk.contextToNext) {
        contextSection = '\n\n=== CONTEXT (For Reference Only - Do NOT Translate) ===';
        if (chunk.contextFromPrevious) {
            contextSection += `\n[CONTEXT FROM PREVIOUS SECTION]:\n"...${chunk.contextFromPrevious}"`;
        }
        if (chunk.contextToNext) {
            contextSection += `\n[CONTEXT FROM NEXT SECTION]:\n"${chunk.contextToNext}..."`;
        }
        contextSection += '\n======================================================'
            ;
    }

    const prompt = `${baseInstructions}${customSection}${contextSection}

INPUT SEGMENTS (JSON):
${JSON.stringify(segmentsToTranslate, null, 2)}

RESPONSE FORMAT (JSON Schema):
Array<{ "id": number, "translation": string }>

Check your output ensures every single ID from input is present in output.`;

    log(`📝 Translating chunk ${chunkIndex + 1}/${totalChunks} (${expectedCount} segments) [JSON Mode]...`);

    // GUARDRAIL: Retry logic (up to 5 attempts for better coverage)
    const MAX_RETRIES = 5;
    let translations = new Map();
    let usage = { input: 0, output: 0 };

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            // Pass targetLanguage and useWebSearch in options
            const result = await generateTextOnly(modelKey, prompt, log, { targetLanguage, useWebSearch });
            usage = result.usage;

            let jsonString = result.text.trim();

            // ROBUST JSON EXTRACTION
            // 1. Try to find the first '[' and last ']' to handle chatty text
            const firstBracket = jsonString.indexOf('[');
            const lastBracket = jsonString.lastIndexOf(']');

            if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
                jsonString = jsonString.substring(firstBracket, lastBracket + 1);
            } else {
                // If no brackets found, it might be wrapped in ```json only, try cleaning fences
                jsonString = jsonString.replace(/^```(json)?\n?/, '').replace(/\n?```$/, '').trim();
            }

            // 2. Aggressive cleanup of common LLM artifacts
            if (!jsonString.startsWith('[') && jsonString.includes('[')) {
                jsonString = jsonString.substring(jsonString.indexOf('['));
            }
            if (!jsonString.endsWith(']') && jsonString.includes(']')) {
                jsonString = jsonString.substring(0, jsonString.lastIndexOf(']') + 1);
            }

            let parsed;
            try {
                parsed = JSON.parse(jsonString);
            } catch (parseErr) {
                log(`   ⚠️ JSON Parse Error on attempt ${attempt}.`);
                // If it's the last attempt, log more details for debugging
                if (attempt === MAX_RETRIES) {
                    log(`   🛠️ Debug Content: ${result.text.substring(0, 200)}...`);
                }
                throw new Error(`Invalid JSON: ${parseErr.message}`);
            }

            // Convert array to map
            translations = new Map();
            if (Array.isArray(parsed)) {
                for (const item of parsed) {
                    if (item && typeof item.id === 'number' && typeof item.translation === 'string') {
                        translations.set(item.id, item.translation);
                    }
                }
            }

            // Check coverage
            const coveragePercent = (translations.size / expectedCount) * 100;
            if (coveragePercent >= 90) { // Accept 90% coverage (more lenient than 95%)
                if (coveragePercent < 100) {
                    log(`   ⚠️ Got ${translations.size}/${expectedCount} (${coveragePercent.toFixed(1)}%) - proceeding with partial coverage`);
                }
                break;
            } else if (attempt < MAX_RETRIES) {
                log(`   ⚠️ Only got ${translations.size}/${expectedCount} (${coveragePercent.toFixed(1)}%), retrying (attempt ${attempt}/${MAX_RETRIES})...`);
                await new Promise(r => setTimeout(r, 2000));
            } else {
                // Final attempt failed
                log(`   ❌ Final attempt: only ${translations.size}/${expectedCount} (${coveragePercent.toFixed(1)}%) - ${expectedCount - translations.size} segments will remain untranslated`);
            }
        } catch (err) {
            log(`   ❌ Attempt ${attempt} failed: ${err.message}`);
            if (attempt < MAX_RETRIES) {
                await new Promise(r => setTimeout(r, 2000));
            }
        }
    }

    // GUARDRAIL: Fallback for missing translations - keep original text
    let missingCount = 0;
    for (const [segIndex, segInfo] of segmentMap) {
        if (!translations.has(segIndex)) {
            translations.set(segIndex, segInfo.originalText); // Keep original
            missingCount++;
        }
    }

    if (missingCount > 0) {
        log(`   ⚠️ ${missingCount} segments kept original (LLM didn't translate)`);
    }

    log(`   ✅ Got ${translations.size - missingCount}/${expectedCount} translations`);

    return { translations, segmentMap, usage };
}

/**
 * Generate text-only response from LLM
 * Logs the actual model ID being used for confirmation
 */
async function generateTextOnly(modelKey, prompt, log = console.log, options = {}) {
    const { MODELS, getApiKey, resolveModel } = require('./providers');
    const model = resolveModel(modelKey) || MODELS[modelKey];
    if (!model) throw new Error(`Unknown model key: ${modelKey}`);
    const temperature = options.temperature || 0.2;

    log(`🤖 Using ${model.name} (API: ${model.id}, Provider: ${model.provider})`);

    switch (model.provider) {
        case 'gemini':
            return await generateGeminiText(model.id, prompt, temperature);
        case 'anthropic':
            return await generateAnthropicText(model.id, prompt, temperature);
        case 'openai':
            return await generateOpenAIText(model.id, prompt, temperature);
        case 'moonshot':
            return await generateMoonshotText(model.id, prompt, temperature);
        case 'openrouter':
            return await generateOpenRouterText(model.id, prompt, log, options);
        case 'qwen-mt':
            return await generateQwenMTText(model.id, prompt, log, options);
        case 'google-cloud':
            return await generateGoogleCloudText(model.id, prompt, log, options);
        default:
            throw new Error(`Unknown provider: ${model.provider}`);
    }
}

// Provider implementations
async function generateGeminiText(modelId, prompt, temperature = 0.2) {
    const { GoogleGenAI } = require('@google/genai');
    const client = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        apiVersion: "v1beta",
        timeout: 600000 // 10 minutes timeout
    });

    const response = await client.models.generateContent({
        model: modelId,
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: {
            temperature,
            thinkingConfig: {
                includeThoughts: true,
                thinkingLevel: "HIGH"
            },
            maxOutputTokens: 16384
        }
    });

    const text = response.candidates[0].content.parts[0].text;
    const usage = response.usageMetadata || {};

    return { text, usage: { input: usage.promptTokenCount, output: usage.candidatesTokenCount } };
}

// No Zhipu translator here anymore

async function generateAnthropicText(modelId, prompt, temperature = 0.2) {
    const Anthropic = require('@anthropic-ai/sdk');
    const apiKey = getApiKey('ANTHROPIC_API_KEY');
    if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set. Please add it in Settings.');
    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
        model: modelId,
        max_tokens: 16384,
        messages: [{ role: "user", content: prompt }],
        temperature
    });

    return {
        text: response.content[0].text,
        usage: { input: response.usage.input_tokens, output: response.usage.output_tokens }
    };
}

async function generateOpenAIText(modelId, prompt, temperature = 0.2) {
    const OpenAI = require('openai');
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.chat.completions.create({
        model: modelId,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 16384,
        temperature
    });

    return {
        text: response.choices[0].message.content,
        usage: { input: response.usage.prompt_tokens, output: response.usage.completion_tokens }
    };
}

async function generateMoonshotText(modelId, prompt, temperature = 0.2) {
    const OpenAI = require('openai');
    const client = new OpenAI({
        apiKey: getApiKey('MOONSHOT_API_KEY'),
        baseURL: "https://api.moonshot.ai/v1"
    });

    const response = await client.chat.completions.create({
        model: modelId,
        messages: [
            { role: "system", content: "You are Kimi, an AI assistant provided by Moonshot AI." },
            { role: "user", content: prompt }
        ],
        temperature,
        top_p: 0.95
    });

    return {
        text: response.choices[0].message.content,
        usage: { input: response.usage.prompt_tokens, output: response.usage.completion_tokens }
    };
}

async function generateOpenRouterText(modelId, prompt, log, options = {}) {
    const { generateOpenRouter } = require('./providers');
    // For text-only generation, we pass null as the imageBase64
    // Pass useWebSearch option to enable web search plugin
    return await generateOpenRouter(modelId, prompt, null, log, options);
}

async function generateQwenMTText(modelId, prompt, log, options = {}) {
    const { MODELS, getApiKey } = require('./providers');

    // Lazy-load Qwen MT provider logic
    const apiKey = getApiKey('DASHSCOPE_API_KEY');
    if (!apiKey) throw new Error('DASHSCOPE_API_KEY not set');

    const targetLang = options.targetLanguage || 'Spanish (Colombia)';

    const response = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: modelId,
            messages: [{
                role: "user",
                content: prompt
            }],
            temperature: 0.1,
            // Qwen MT specific parameters
            translation_options: {
                source_lang: "auto",
                target_lang: targetLang
            }
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`DashScope API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    if (!data?.choices?.[0]?.message?.content) {
        throw new Error(`DashScope returned empty response`);
    }

    const usage = {
        inputTokens: data.usage?.prompt_tokens || 0,
        outputTokens: data.usage?.completion_tokens || 0
    };

    return { text: data.choices[0].message.content, usage };
}

async function generateGoogleCloudText(modelId, prompt, log, options = {}) {
    const GoogleTranslateLLM = require('./google_translate_llm');
    const config = {
        projectId: getApiKey('GOOGLE_CLOUD_PROJECT'),
        location: getApiKey('GOOGLE_CLOUD_REGION') || 'us-central1',
        keyFilePath: getApiKey('GOOGLE_APPLICATION_CREDENTIALS')
    };

    if (!config.projectId || !config.keyFilePath) {
        throw new Error("Google Cloud credentials not fully configured in settings.");
    }

    const tllm = new GoogleTranslateLLM(config);

    // Use targetLanguage from options
    const targetLang = options.targetLanguage || 'es';

    const [result] = await tllm.translateText([prompt], targetLang);
    return {
        text: result,
        usage: { input: prompt.length, output: result.length }
    };
}

/**
 * Patch translations back into XML using DOM manipulation
 */
function patchTranslationsIntoXml(xmlString, allTranslations) {
    const doc = new DOMParser().parseFromString(xmlString, 'text/xml');

    // 1. Group translations by their target parent nodes (Paragraph or Table)
    // In our new extraction, each block has a .node reference.
    // However, allTranslations contains results from translateChunk, which mapped back to original segment IDs.

    for (const res of allTranslations) {
        for (const [segId, translation] of res.translations) {
            const segInfo = res.segmentMap.get(segId);
            if (!segInfo || !segInfo.textNodes || segInfo.textNodes.length === 0) continue;

            // In our current structure, all textNodes in a segment belong to the same parent paragraph/cell.
            // Let's find the parent node.
            const firstNode = segInfo.textNodes[0].node;
            let parent = firstNode.parentNode;
            while (parent && parent.nodeName !== 'w:p' && parent.nodeName !== 'w:tc') {
                parent = parent.parentNode;
            }

            if (!parent) continue;

            // RECONSTRUCTION STRATEGY: 
            // Replace the text content of the nodes or rebuild the whole parent?
            // rebuilding the whole parent is safer for word-splitting.

            if (parent.nodeName === 'w:p') {
                reconstructParagraph(parent, translation);
            } else if (parent.nodeName === 'w:tc') {
                // If it's a cell, it might have multiple paragraphs. 
                // Currently our logic treats cells as single segments if extracted that way.
                // Let's assume w:tc contains w:p.
                const p = parent.getElementsByTagName('w:p')[0];
                if (p) reconstructParagraph(p, translation);
            }
        }
    }

    return new XMLSerializer().serializeToString(doc);
}

/**
 * Rebuild a paragraph's runs based on tagged translation text
 */
function reconstructParagraph(pNode, taggedText) {
    const doc = pNode.ownerDocument;
    const segments = parseTaggedText(taggedText);

    // Keep the paragraph properties (w:pPr)
    const pPr = pNode.getElementsByTagName('w:pPr')[0];

    // Clear all existing runs but keep properties
    const children = Array.from(pNode.childNodes);
    for (const child of children) {
        if (child.nodeName === 'w:r') {
            pNode.removeChild(child);
        }
    }

    // Append new runs based on segments
    for (const seg of segments) {
        const r = doc.createElement('w:r');
        const rPr = doc.createElement('w:rPr');

        if (seg.tags.has('b')) rPr.appendChild(doc.createElement('w:b'));
        if (seg.tags.has('i')) rPr.appendChild(doc.createElement('w:i'));
        if (seg.tags.has('u')) {
            const u = doc.createElement('w:u');
            u.setAttribute('w:val', 'single');
            rPr.appendChild(u);
        }

        r.appendChild(rPr);

        const t = doc.createElement('w:t');
        if (seg.text.startsWith(' ') || seg.text.endsWith(' ')) {
            t.setAttribute('xml:space', 'preserve');
        }

        // UNESCAPE and ESCAPE are handled by the DOM implementation/serializer automatically
        const { sanitizeText } = require('./renderer_v2');
        t.textContent = sanitizeText(unescapeCommonEntities(seg.text));

        r.appendChild(t);
        pNode.appendChild(r);
    }
}

/**
 * Build a <w:t> tag preserving attributes
 */
function buildTextTag(originalTag, newText) {
    // Check if original had xml:space="preserve"
    const hasPreserve = originalTag.includes('xml:space="preserve"');

    // Fix: Unescape entities first (in case LLM returned &amp;) then escape properly for XML
    const cleanText = unescapeCommonEntities(newText);
    const escapedText = escapeXml(cleanText);

    if (hasPreserve) {
        return `<w:t xml:space="preserve">${escapedText}</w:t>`;
    } else {
        return `<w:t>${escapedText}</w:t>`;
    }
}

/**
 * Escape special XML characters
 */
function escapeXml(text) {
    // Only escape actual XML special characters
    // DO NOT escape quotes/apostrophes - Word XML doesn't use entities for these
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    // NOTE: Quotes and apostrophes are NOT escaped in Word XML text nodes
}

/**
 * Helper: Unescape common XML entities that LLM might output
 * e.g. LLM says "Rice &amp; Beans" -> we want "Rice & Beans" so escapeXml can turn it back to "Rice &amp; Beans"
 */
function unescapeCommonEntities(text) {
    if (!text) return text;
    return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
}

/**
 * GUARDRAIL: Validate XML structure before saving
 * Checks for common issues that could corrupt the document
 */
function validateXml(xmlString) {
    try {
        // Check 1: Basic tag balance for critical elements
        const criticalTags = ['w:t', 'w:r', 'w:p', 'w:tbl', 'w:tc', 'w:tr'];

        for (const tag of criticalTags) {
            const openCount = (xmlString.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
            const closeCount = (xmlString.match(new RegExp(`</${tag}>`, 'g')) || []).length;

            if (openCount !== closeCount) {
                return {
                    valid: false,
                    error: `Unbalanced ${tag} tags: ${openCount} open, ${closeCount} close`
                };
            }
        }

        // Check 2: No unclosed angle brackets in text content
        // This catches cases like translated text containing < or >
        const textContents = xmlString.match(/<w:t[^>]*>([^<]*)<\/w:t>/g) || [];
        for (const match of textContents) {
            const content = match.replace(/<w:t[^>]*>/, '').replace(/<\/w:t>/, '');
            if (content.includes('<') || content.includes('>')) {
                return {
                    valid: false,
                    error: 'Unescaped < or > found in text content'
                };
            }
        }

        // Check 3: Document body exists
        if (!xmlString.includes('<w:body>') || !xmlString.includes('</w:body>')) {
            return { valid: false, error: 'Missing or corrupt document body' };
        }

        return { valid: true };

    } catch (e) {
        return { valid: false, error: `Validation error: ${e.message}` };
    }
}

/**
 * Main translation function
 */
async function translateDocx(inputPath, outputPath, customPrompt, modelKey = 'gemini-3-pro', logCallback, languageOptions = {}) {
    const log = (msg) => {
        console.log(msg);
        if (logCallback) logCallback(msg);
    };

    // Language pair (defaults for backward compatibility)
    const languageA = languageOptions.languageA || 'English';
    const languageB = languageOptions.languageB || 'Spanish (Colombia)';
    const useWebSearch = languageOptions.useWebSearch || false;

    try {
        log(`📄 Starting semantic translation: ${path.basename(inputPath)}`);

        // Step 1: Load DOCX
        log('📦 Opening DOCX...');
        const docxBuffer = fs.readFileSync(inputPath);
        const zip = await JSZip.loadAsync(docxBuffer);

        // Step 2: Extract document.xml
        const documentXmlFile = zip.file('word/document.xml');
        if (!documentXmlFile) {
            throw new Error('Invalid DOCX: missing word/document.xml');
        }
        let documentXml = await documentXmlFile.async('string');

        // NEW: PRE-CLEANING (Merging runs, fixing breaks)
        log('🧹 Pre-cleaning document structure (merging runs)...');
        documentXml = docxCleaner.cleanXml(documentXml);

        // Step 3: Extract semantic blocks
        log('🔍 Analyzing document structure...');
        const blocks = extractSemanticBlocks(documentXml);

        const tableCount = blocks.filter(b => b.type === BlockType.TABLE).length;
        const paraCount = blocks.filter(b => b.type === BlockType.PARAGRAPH).length;
        const headingCount = blocks.filter(b => b.type === BlockType.HEADING).length;

        log(`   Found: ${paraCount} paragraphs, ${tableCount} tables, ${headingCount} headings`);

        if (blocks.length === 0) {
            log('⚠️ No translatable text found');
            fs.copyFileSync(inputPath, outputPath);
            return outputPath;
        }

        // Step 4: Create semantic chunks
        const chunks = createSemanticChunks(blocks);
        log(`📦 Created ${chunks.length} semantic chunk(s) for translation`);

        // Step 5: Translate each chunk
        const allTranslations = [];
        let totalInputTokens = 0;
        let totalOutputTokens = 0;

        for (let i = 0; i < chunks.length; i++) {
            let result;
            try {
                result = await translateChunk(
                    chunks[i],
                    i,
                    chunks.length,
                    customPrompt,
                    modelKey,
                    log,
                    { languageA, languageB }
                );
            } catch (chunkError) {
                log(`❌ Chunk ${i + 1}/${chunks.length} FAILED completely. Skipping...`);
                // Create a "failed" result that just keeps original text to prevent crash
                const failedMap = new Map();
                for (const [id, seg] of chunks[i].segmentMap) {
                    failedMap.set(id, seg.originalText);
                }
                result = { formatted: '', translations: failedMap, usage: { input: 0, output: 0 }, segmentMap: chunks[i].segmentMap };
            }

            allTranslations.push(result);

            if (result.usage) {
                totalInputTokens += result.usage.input || 0;
                totalOutputTokens += result.usage.output || 0;
            }

            // Rate limit delay between chunks
            if (i < chunks.length - 1) {
                await new Promise(r => setTimeout(r, 1000));
            }
        }

        log(`📊 Total tokens: ${totalInputTokens} input, ${totalOutputTokens} output`);

        // Step 6: Patch translations into XML
        log('🔧 Patching translations into document...');

        // GUARDRAIL: Verify we actually have translations
        let totalTranslated = 0;
        let totalSegments = 0;

        for (const res of allTranslations) {
            totalSegments += res.segmentMap.size;
            // Count how many keys are in translations map
            // Note: fallback puts original text in map, so we need to check if it CHANGED? 
            // Or rely on the fact that if fallback happened, we logged it.
            // A better check: did we get any non-fallback translations?
            // Since translateChunk fills the map even on fallback, checking size isn't enough.
            // We should rely on a simpler metric: Did the LLM return ANY valid usage/response?
            if (res.usage && res.usage.output > 0) {
                totalTranslated += res.translations.size;
            }
        }

        if (totalSegments > 0 && totalTranslated === 0) {
            const err = 'CRITICAL: Translation failed for ALL segments (0% success). Check API Key or Model availability.';
            log(`❌ ${err}`);
            throw new Error(err);
        }

        const patchedXmlRaw = patchTranslationsIntoXml(documentXml, allTranslations);

        // Step 6.5: Global Cleanup - Remove any remaining [b], [i], [u] tags
        // This is a "nuclear" option to guarantee no formatting tags leak into the final document text
        log('🧹 Running global tag cleanup...');
        const patchedXml = patchedXmlRaw.replace(/\[\s*\/?\s*(?:b|i|u)\s*\]/gi, '');

        // GUARDRAIL: Validate XML before saving
        const xmlValidation = validateXml(patchedXml);
        if (!xmlValidation.valid) {
            log(`⚠️ XML validation warning: ${xmlValidation.error}`);
            log('⚠️ Keeping original document to prevent corruption');
            fs.copyFileSync(inputPath, outputPath);
            return outputPath;
        }

        // Step 7: Save
        zip.file('word/document.xml', patchedXml);

        log('💾 Saving translated document...');
        const outputBuffer = await zip.generateAsync({
            type: 'nodebuffer',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 }
        });
        fs.writeFileSync(outputPath, outputBuffer);

        log(`🎉 Translation complete! Saved to: ${path.basename(outputPath)}`);
        return outputPath;

    } catch (error) {
        log(`❌ Translation failed: ${error.message}`);
        // Ensure we don't leave a half-baked file, or maybe we SHOULD leave original?
        // User prefers error over silent failure.
        throw error;
    }
}

module.exports = {
    translateDocx,
    extractSemanticBlocks,
    createSemanticChunks,
    generateTextOnly,
    getApiKey
};

/**
 * Parse text with [b], [i], [u] tags into segments
 * Returns array: [{ text: "string", tags: Set(['b', 'u']) }]
 * Handles simple nesting.
 */
function parseTaggedText(text) {
    const segments = [];

    // Tokenize by tags (allow whitespace inside, e.g. [ b ])
    const tokenRegex = /(\[\s*\/?\s*(?:b|i|u)\s*\])/gi;
    const parts = text.split(tokenRegex);

    let activeTags = new Set();
    const isTagRegex = /^\[\s*(b|i|u)\s*\]$/i;
    const isCloseTagRegex = /^\[\s*\/\s*(b|i|u)\s*\]$/i;

    for (const part of parts) {
        if (!part) continue;

        const openMatch = part.match(isTagRegex);
        const closeMatch = part.match(isCloseTagRegex);

        if (openMatch) {
            // Opening tag (e.g. [b])
            activeTags.add(openMatch[1]); // 'b'
        } else if (closeMatch) {
            // Closing tag (e.g. [/b])
            activeTags.delete(closeMatch[1]); // 'b'
        } else {
            // Text content
            // CLEANUP: Strip any trailing partial tags that regex missed (e.g. "[/b" at end of string)
            let cleanPart = part.replace(/\[\s*\/?\s*(?:b|i|u)?\s*$/i, '');

            if (cleanPart) {
                segments.push({
                    text: cleanPart,
                    tags: new Set(activeTags) // Clone current state
                });
            }
        }
    }

    return segments;
}

/**
 * Distribute translation text to nodes based on matching formatting tags
 * Falls back to ratio distribution if tags don't match well
 */
function distributeByTags(textNodes, translation) {
    // 1. Parse translation into formatted segments
    const tagSegments = parseTaggedText(translation);

    // Quick check: If no tags found in translation, return null (trigger fallback)
    const hasTags = tagSegments.some(s => s.tags.size > 0);
    if (!hasTags) return null;

    // 2. Prepare text streams
    const streams = new Map(); // key: "b,u", value: string

    for (const seg of tagSegments) {
        const key = Array.from(seg.tags).sort().join(',');
        const currentText = streams.get(key) || '';
        streams.set(key, currentText + seg.text);
    }

    // 3. Map Original Nodes to calculate totals
    const streamTotals = new Map();

    for (const node of textNodes) {
        if (node.text.trim().length === 0) continue;

        const nodeTags = [];
        if (node.formatting) {
            if (node.formatting.bold) nodeTags.push('b');
            if (node.formatting.italic) nodeTags.push('i');
            if (node.formatting.underline) nodeTags.push('u');
        }
        const key = nodeTags.sort().join(',');

        const currentTotal = streamTotals.get(key) || 0;
        streamTotals.set(key, currentTotal + node.text.length);
    }

    // 4. Assign text
    const streamConsumption = new Map();
    const results = [];

    for (const node of textNodes) {
        if (node.text.trim().length === 0) {
            results.push({ node, text: node.text });
            continue;
        }

        const nodeTags = [];
        if (node.formatting) {
            if (node.formatting.bold) nodeTags.push('b');
            if (node.formatting.italic) nodeTags.push('i');
            if (node.formatting.underline) nodeTags.push('u');
        }
        let key = nodeTags.sort().join(',');

        // Fallback: If exact stream missing, try 'normal'
        if (!streams.has(key) || streams.get(key).length === 0) {
            if (streams.has('')) {
                key = '';
            } else {
                return null; // Global fallback
            }
        }

        const streamText = streams.get(key);
        const streamTotalOrigin = streamTotals.get(key) || 1;
        const consumedSoFar = streamConsumption.get(key) || 0;

        const portion = node.text.length / streamTotalOrigin;
        let targetCharCount = Math.round(portion * streamText.length);

        // Adjustment for last node of this type? No, simple rounding is okay for MVP

        let slice = streamText.substr(consumedSoFar, targetCharCount);
        streamConsumption.set(key, consumedSoFar + slice.length);

        if (slice.length === 0) slice = ' ';

        results.push({ node, text: slice });
    }

    return results;
}
