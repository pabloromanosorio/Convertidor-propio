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
const { MODELS } = require('./providers');

// Configuration
const MAX_CHUNK_CHARS = 12000;  // Target chars per chunk (leaves room for prompt)
const CONTEXT_OVERLAP_CHARS = 2000;  // Include this much from previous chunk for context (16.7% overlap for better coherence)

/**
 * Semantic block types
 */
const BlockType = {
    PARAGRAPH: 'paragraph',
    TABLE: 'table',
    HEADING: 'heading'
};

/**
 * QA Pass Prompt Template
 * Used for second-pass quality review
 */
const QA_PROMPT = `You are a Translation QA Reviewer for Spanish (Colombian).

TASK: Review each {id, original, translation} and return ONLY corrections.

ADEQUACY CHECK (accuracy issues):
- Mistranslations (wrong meaning)
- Omissions (missing content)
- Untranslated text

FLUENCY CHECK (readability issues):
- Grammar/spelling errors
- Unnatural phrasing
- Missing accent marks (á, é, í, ó, ú, ñ)

TERMINOLOGY CHECK:
- Same source term → same target term throughout
{USER_GLOSSARY_SECTION}

OUTPUT FORMAT (strict JSON):
[
  { "id": 0, "translation": "corrected text here" },
  { "id": 5, "translation": "another correction" }
]

CRITICAL RULES:
- Return [] (empty array) if NO corrections needed
- Only include segments that NEED changes
- Do NOT include explanations or commentary
- Output ONLY the JSON array, nothing else`;

/**
 * Legal document reinforcement rules
 */
const LEGAL_REINFORCEMENT = `
LEGAL DOCUMENT RULES:
- Preserve defined terms exactly as specified in glossary
- Maintain formal register throughout (use "usted" form)
- Numbers: digits + text format "5 (cinco)"
- Dates: DD de [month] de YYYY format`;

/**
 * Fluency-Only QA Prompt (for pre-translated documents without source)
 */
const FLUENCY_ONLY_QA_PROMPT = `You are a Spanish (Colombian) Language Quality Reviewer.

CONTEXT: This document has already been translated (likely literally). Your job is to POLISH it, not rewrite it.

TASK: Review each segment for fluency issues ONLY. No source text available.

FLUENCY CHECK:
- Fix grammar errors
- Fix spelling errors  
- Add missing accent marks (á, é, í, ó, ú, ñ, ü)
- Smooth unnatural phrasing SLIGHTLY (preserve original meaning)
- Fix awkward sentence structure
- Ensure terminology consistency (same concept → same term)

CRITICAL RULES - DO NOT DEVIATE:
- Make MINIMAL changes - only what's necessary for fluency
- Do NOT rewrite or paraphrase - preserve the translator's word choices
- Adhere strictly to any glossary terms provided by user
- If a phrase is understandable but slightly awkward, LEAVE IT unless it's truly unnatural
- Your role is QA reviewer, NOT re-translator

OUTPUT FORMAT (strict JSON):
[
  { "id": 0, "translation": "corrected text here" },
  { "id": 5, "translation": "another correction" }
]

RULES:
- Return [] (empty array) if NO corrections needed
- Only include segments that NEED changes
- Do NOT include explanations or commentary
- Output ONLY the JSON array, nothing else`;

/**
 * Extract semantic blocks from DOCX XML
 * Groups text by paragraph and table structure
 * 
 * @param {string} xmlString - The document.xml content
 * @returns {Array<{type: string, texts: Array, startPos: number, endPos: number}>}
 */
function extractSemanticBlocks(xmlString) {
    const blocks = [];

    // Extract paragraphs with their text runs
    const paragraphRegex = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g;
    let match;

    while ((match = paragraphRegex.exec(xmlString)) !== null) {
        const paragraphXml = match[0];
        const startPos = match.index;
        const endPos = match.index + match[0].length;

        // Check if this paragraph is inside a table cell by looking for table structure
        // We need to check if we're between <w:tc> and </w:tc> tags
        const beforeText = xmlString.substring(0, startPos);
        const lastTcOpen = beforeText.lastIndexOf('<w:tc');
        const lastTcClose = beforeText.lastIndexOf('</w:tc>');

        // If the last <w:tc is after the last </w:tc>, we're inside a table cell
        if (lastTcOpen > lastTcClose) {
            continue; // Skip - this paragraph is inside a table cell, will be handled by table extraction
        }

        // Extract all text runs from this paragraph
        const texts = extractTextRunsFromBlock(paragraphXml, startPos);

        if (texts.length > 0) {
            // Check if it's a heading (has heading style)
            const isHeading = paragraphXml.includes('w:pStyle') &&
                (paragraphXml.includes('Heading') || paragraphXml.includes('Title'));

            blocks.push({
                type: isHeading ? BlockType.HEADING : BlockType.PARAGRAPH,
                texts: texts,
                fullText: texts.map(t => t.text).join(''),
                startPos: startPos,
                endPos: endPos
            });
        }
    }

    // Extract tables as complete units
    const tableRegex = /<w:tbl\b[^>]*>([\s\S]*?)<\/w:tbl>/g;

    while ((match = tableRegex.exec(xmlString)) !== null) {
        const tableXml = match[0];
        const startPos = match.index;
        const endPos = match.index + match[0].length;

        // Extract all text from table, preserving row/cell structure
        const tableData = extractTableStructure(tableXml, startPos);

        if (tableData.texts.length > 0) {
            blocks.push({
                type: BlockType.TABLE,
                texts: tableData.texts,
                rows: tableData.rows,  // Structured row data for context
                fullText: tableData.texts.map(t => t.text).join(' | '),
                startPos: startPos,
                endPos: endPos
            });
        }
    }

    // Sort blocks by position in document
    blocks.sort((a, b) => a.startPos - b.startPos);

    return blocks;
}

/**
 * Detect formatting properties from OOXML run
 * Analyzes <w:rPr> (run properties) to identify bold, italic, underline, etc.
 */
function detectRunFormatting(runXml) {
    const formatting = {
        bold: false,
        italic: false,
        underline: false
    };

    // Check for run properties <w:rPr>
    const rPrMatch = runXml.match(/<w:rPr>([\s\S]*?)<\/w:rPr>/);
    if (!rPrMatch) return formatting;

    const rPr = rPrMatch[1];

    // Bold: <w:b/> or <w:b w:val="true"/> or <w:b w:val="1"/>
    formatting.bold = /<w:b[\s\/>]/.test(rPr) || /<w:b\s+w:val="(true|1)"/.test(rPr);

    // Italic: <w:i/> or <w:i w:val="true"/> or <w:i w:val="1"/>
    formatting.italic = /<w:i[\s\/>]/.test(rPr) || /<w:i\s+w:val="(true|1)"/.test(rPr);

    // Underline: <w:u w:val="..."/> (any underline style)
    formatting.underline = /<w:u\s+w:val="[^"]*"/.test(rPr);

    return formatting;
}

/**
 * Analyze formatting across all text nodes in a segment
 * Returns a description to pass to the LLM for format-aware translation
 */
function analyzeSegmentFormatting(textNodes) {
    if (!textNodes || textNodes.length === 0) {
        return { hasFormatting: false };
    }

    // Collect formatted words from all text nodes
    const formattedParts = {
        bold: [],
        italic: [],
        underline: []
    };

    for (const node of textNodes) {
        if (!node.formatting) continue;

        const trimmedText = node.text.trim();
        if (trimmedText.length === 0) continue; // Skip whitespace-only nodes

        if (node.formatting.bold) formattedParts.bold.push(trimmedText);
        if (node.formatting.italic) formattedParts.italic.push(trimmedText);
        if (node.formatting.underline) formattedParts.underline.push(trimmedText);
    }

    // Build description
    const descriptions = [];
    if (formattedParts.bold.length > 0) {
        descriptions.push(`bold on "${formattedParts.bold.join(' ')}"`);
    }
    if (formattedParts.italic.length > 0) {
        descriptions.push(`italic on "${formattedParts.italic.join(' ')}"`);
    }
    if (formattedParts.underline.length > 0) {
        descriptions.push(`underline on "${formattedParts.underline.join(' ')}"`);
    }

    if (descriptions.length === 0) {
        return { hasFormatting: false };
    }

    return {
        hasFormatting: true,
        description: descriptions.join(', ')
    };
}

/**
 * Extract text runs from a paragraph or cell WITH formatting metadata
 * IMPORTANT: Preserves ALL text nodes, including whitespace-only ones
 * (spaces between formatted text like bold/italic are critical!)
 */
function extractTextRunsFromBlock(blockXml, blockStartPos) {
    const texts = [];

    // First, extract all runs to get formatting context
    const runRegex = /<w:r\b[^>]*>([\s\S]*?)<\/w:r>/g;
    let runMatch;

    while ((runMatch = runRegex.exec(blockXml)) !== null) {
        const runXml = runMatch[0];
        const runContent = runMatch[1];
        const runStart = runMatch.index;

        // Detect formatting for this run
        const formatting = detectRunFormatting(runXml);

        // Extract text nodes within this run
        const textRegex = /<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>/g;
        let textMatch;

        while ((textMatch = textRegex.exec(runContent)) !== null) {
            const text = textMatch[1];
            // Keep ALL text nodes, even whitespace-only ones
            if (text !== undefined && text !== null) {
                texts.push({
                    text: text,
                    formatting: formatting, // NEW: formatting metadata
                    localStart: runStart + textMatch.index,
                    localEnd: runStart + textMatch.index + textMatch[0].length,
                    globalStart: blockStartPos + runStart + textMatch.index,
                    globalEnd: blockStartPos + runStart + textMatch.index + textMatch[0].length,
                    fullMatch: textMatch[0]
                });
            }
        }
    }

    return texts;
}

/**
 * Extract table structure with row/column awareness
 */
function extractTableStructure(tableXml, tableStartPos) {
    const texts = [];
    const rows = [];

    // Extract each row
    const rowRegex = /<w:tr\b[^>]*>([\s\S]*?)<\/w:tr>/g;
    let rowMatch;
    let rowIndex = 0;

    while ((rowMatch = rowRegex.exec(tableXml)) !== null) {
        const rowXml = rowMatch[0];
        const rowStartPos = tableStartPos + rowMatch.index;
        const rowCells = [];

        // Extract each cell in the row
        const cellRegex = /<w:tc\b[^>]*>([\s\S]*?)<\/w:tc>/g;
        let cellMatch;
        let colIndex = 0;

        while ((cellMatch = cellRegex.exec(rowXml)) !== null) {
            const cellXml = cellMatch[0];
            const cellStartPos = rowStartPos + cellMatch.index;

            // Get text from cell
            const cellTexts = extractTextRunsFromBlock(cellXml, cellStartPos);
            const cellFullText = cellTexts.map(t => t.text).join('');

            if (cellTexts.length > 0) {
                texts.push(...cellTexts);
                rowCells.push({
                    col: colIndex,
                    text: cellFullText,
                    textNodes: cellTexts
                });
            }
            colIndex++;
        }

        if (rowCells.length > 0) {
            rows.push({
                row: rowIndex,
                cells: rowCells
            });
        }
        rowIndex++;
    }

    return { texts, rows };
}

/**
 * Create semantic chunks from blocks with bidirectional context overlap
 * Includes context from BOTH previous AND next chunks for better coherence
 */
function createSemanticChunks(blocks) {
    const chunks = [];
    let currentChunk = {
        blocks: [],
        totalChars: 0,
        contextFromPrevious: null,
        contextToNext: null  // NEW: bidirectional context
    };

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const blockLength = block.fullText.length;

        // If adding this block would exceed limit, start new chunk
        if (currentChunk.totalChars + blockLength > MAX_CHUNK_CHARS && currentChunk.blocks.length > 0) {
            // Save current chunk
            chunks.push(currentChunk);

            // Start new chunk with context from previous
            const lastBlock = currentChunk.blocks[currentChunk.blocks.length - 1];
            currentChunk = {
                blocks: [],
                totalChars: 0,
                // FIXED: Get the END of the previous block (suffix)
                contextFromPrevious: lastBlock.fullText.slice(-CONTEXT_OVERLAP_CHARS),
                contextToNext: null
            };
        }

        currentChunk.blocks.push(block);
        currentChunk.totalChars += blockLength;
    }

    // Don't forget the last chunk
    if (currentChunk.blocks.length > 0) {
        chunks.push(currentChunk);
    }

    // Second pass: Add context from NEXT chunk (bidirectional)
    for (let i = 0; i < chunks.length - 1; i++) {
        const nextChunk = chunks[i + 1];
        const firstBlock = nextChunk.blocks[0];

        // FIXED: Take the START of the first block of next chunk (prefix)
        const contextText = firstBlock.fullText.slice(0, CONTEXT_OVERLAP_CHARS);
        chunks[i].contextToNext = contextText;
    }

    return chunks;
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
                            originalText: cell.text
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
                originalText: block.fullText
            });

            formatted += `${prefix}[${segNum}] ${block.fullText}\n\n`;
        }
    }

    formatted += `[END TRANSLATION]\n`;

    return { formatted, segmentMap };
}

/**
 * Translate a chunk using LLM with JSON Structured Output
 */
async function translateChunk(chunk, chunkIndex, totalChunks, customPrompt, modelKey, log) {
    const { formatted, segmentMap } = formatChunkForLLM(chunk, chunkIndex, totalChunks);
    const expectedCount = segmentMap.size;

    // Prepare JSON input for the LLM
    // We strip out the visual tags like [TABLE] for the JSON payload to keep it clean,
    // but we could keep them if structure triggers are needed. 
    // For JSON, a flat list of objects with context hints is best.

    const segmentsToTranslate = [];
    let formattedSegmentCount = 0;
    for (const [segIndex, segInfo] of segmentMap) {
        // Analyze formatting from text nodes
        const formattingInfo = analyzeSegmentFormatting(segInfo.textNodes);

        const segment = {
            id: segIndex,
            text: segInfo.originalText
        };

        // Add formatting hints if any formatting detected
        if (formattingInfo.hasFormatting) {
            segment.formatting = formattingInfo.description;
            formattedSegmentCount++;
        }

        segmentsToTranslate.push(segment);
    }

    // Log if formatting was detected
    if (formattedSegmentCount > 0) {
        log(`   📐 Detected formatting in ${formattedSegmentCount}/${segmentMap.size} segments`);
    }

    // Default instructions with Bi-Directional Logic
    const baseInstructions = `You are a professional translator.

TASK:
1. Detect the language of the source text.
2. If the source is SPANISH, translate it to ENGLISH.
3. If the source is ENGLISH (or other), translate it to SPANISH (Colombian variant).

HIERARCHY OF INSTRUCTIONS:
1. CRITICAL FORMAT RULES (Below) - You MUST follow these.
2. USER CUSTOM INSTRUCTIONS - Overrides styles.
3. DEFAULT LOGIC - See below.

DEFAULT LOGIC (When no user instructions contradict):
- Register: Formal (Professional/Business).
- IF SOURCE IS SPANISH -> TRANSLATE TO ENGLISH.
- IF SOURCE IS ENGLISH -> TRANSLATE TO SPANISH (COLOMBIA).
- FORCE TRANSLATION: Do not just "improve" the text. If it is in the source language, it MUST be changed to the target language.

TRANSLATION QUALITY:
- Avoid "translationese" — use natural phrasing, not grammatically-correct-but-stilted translations.
- Prioritize common collocations in target language over literal word-for-word.
- Consider word connotation, not just dictionary definition.
- Restructure sentences to fit target language rhythm — don't copy source sentence structure.

FORMATTING PRESERVATION (IMPORTANT):
- Some segments have a "formatting" field indicating text formatting (bold, italic, underline).
- When translating, apply the SAME formatting to the semantically equivalent words in the target language.
- Example: If source is "obtuvo las **siguientes** calificaciones" (bold on "siguientes"),
  translate to "obtained the **following** grades" (bold on "following", the semantic equivalent).
- Maintain formatting on words that carry the same meaning/emphasis in the translation.
- If a segment has no "formatting" field, ignore this rule for that segment.

CRITICAL FORMAT RULES (IMMUTABLE):
1. Output MUST be valid JSON array.
2. NO markdown formatting (no \`\`\`).
3. NO intro/outro text. ONLY the JSON array.
4. Translate ALL segments.
5. Do NOT translate the "id" field.
6. Do NOT translate or copy the "formatting" field - it's for reference only.`;

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
            // Force JSON response mode if supported by provider
            const result = await generateTextOnly(modelKey, prompt, log);
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
                jsonString = jsonString.replace(/^```(json)?\n?/, '').replace(/\n?```$/, '');
            }

            let parsed;
            try {
                parsed = JSON.parse(jsonString);
            } catch (parseErr) {
                log(`   ⚠️ JSON Parse Error on attempt ${attempt}. Raw text (first 100 chars): ${result.text.substring(0, 100)}...`);
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
async function generateTextOnly(modelKey, prompt, log) {
    const model = MODELS[modelKey];
    if (!model) {
        const available = Object.keys(MODELS).join(', ');
        throw new Error(`Unknown model: ${modelKey}. Available: ${available}`);
    }

    // GUARDRAIL: Log exact model being used for confirmation
    log(`🤖 Using ${model.name} (API: ${model.id}, Provider: ${model.provider})`);

    switch (model.provider) {
        case 'gemini':
            return await generateGeminiText(model.id, prompt);
        case 'anthropic':
            return await generateAnthropicText(model.id, prompt);
        case 'openai':
            return await generateOpenAIText(model.id, prompt);
        default:
            throw new Error(`Unknown provider: ${model.provider}`);
    }
}

// Provider implementations
async function generateGeminiText(modelId, prompt) {
    const { GoogleGenAI } = require('@google/genai');
    const client = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        apiVersion: "v1beta"
    });

    const response = await client.models.generateContent({
        model: modelId,
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: { temperature: 0.2 }
    });

    const text = response.candidates[0].content.parts[0].text;
    const usage = response.usageMetadata || {};

    return { text, usage: { input: usage.promptTokenCount, output: usage.candidatesTokenCount } };
}

async function generateAnthropicText(modelId, prompt) {
    const Anthropic = require('@anthropic-ai/sdk');
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
        model: modelId,
        max_tokens: 16384,
        messages: [{ role: "user", content: prompt }]
    });

    return {
        text: response.content[0].text,
        usage: { input: response.usage.input_tokens, output: response.usage.output_tokens }
    };
}

async function generateOpenAIText(modelId, prompt) {
    const OpenAI = require('openai');
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.chat.completions.create({
        model: modelId,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 16384
    });

    return {
        text: response.choices[0].message.content,
        usage: { input: response.usage.prompt_tokens, output: response.usage.completion_tokens }
    };
}

/**
 * Extract glossary terms from user's custom prompt
 * Looks for GLOSSARY: section and parses "- term: translation" lines
 */
function extractGlossaryFromPrompt(customPrompt) {
    if (!customPrompt) return null;

    // Look for GLOSSARY section
    const glossaryMatch = customPrompt.match(/GLOSSARY:?\s*([\s\S]*?)(?=\n\n|$)/i);
    if (!glossaryMatch) return null;

    // Parse "- term: translation" lines
    const lines = glossaryMatch[1].split('\n');
    const terms = lines
        .map(line => line.match(/^[-•]\s*(.+?):\s*(.+)$/))
        .filter(Boolean)
        .map(m => `${m[1]} → ${m[2]}`);

    return terms.length > 0
        ? `GLOSSARY (from user):\n${terms.join('\n')}`
        : null;
}

/**
 * Check if prompt indicates legal document
 */
function isLegalDocument(customPrompt) {
    if (!customPrompt) return false;
    const lowerPrompt = customPrompt.toLowerCase();
    return lowerPrompt.includes('legal') ||
        lowerPrompt.includes('contract') ||
        lowerPrompt.includes('bylaws') ||
        lowerPrompt.includes('agreement');
}

/**
 * QA Pass: Review translations for quality issues
 * Uses chunking with context overlap for long documents
 * 
 * @param {Array} allTranslations - Results from Pass 1
 * @param {string} customPrompt - User's custom instructions (for glossary)
 * @param {string} modelKey - Model to use
 * @param {function} log - Logging callback
 * @returns {Object} - { correctionsMap, segmentToChunkMap }
 */
async function qaPassChunk(allTranslations, customPrompt, modelKey, log) {
    log(`\n🔍 Starting QA Pass (Pass 2)...`);

    // Configuration for QA chunking
    const MAX_QA_SEGMENTS = 80;      // Max segments per QA call
    const CONTEXT_OVERLAP_SEGS = 10; // Include 10 segments from previous chunk for context
    const MAX_RETRIES = 2;           // Retry failed chunks

    // Collect all original→translation pairs from Pass 1
    const allPairs = [];
    const segmentToChunkMap = new Map();

    for (let chunkIdx = 0; chunkIdx < allTranslations.length; chunkIdx++) {
        const { translations, segmentMap } = allTranslations[chunkIdx];

        for (const [segIndex, translation] of translations) {
            const segInfo = segmentMap.get(segIndex);
            if (!segInfo) continue;

            allPairs.push({
                id: segIndex,
                original: segInfo.originalText,
                translation: translation,
                chunkIdx: chunkIdx
            });
            segmentToChunkMap.set(segIndex, chunkIdx);
        }
    }

    if (allPairs.length === 0) {
        log(`   ⚠️ No segments to review`);
        return { correctionsMap: new Map(), segmentToChunkMap };
    }

    log(`   📊 Total segments to review: ${allPairs.length}`);

    // Build QA prompt template
    const glossarySection = extractGlossaryFromPrompt(customPrompt);
    const legalSection = isLegalDocument(customPrompt) ? LEGAL_REINFORCEMENT : '';
    const qaPromptText = QA_PROMPT
        .replace('{USER_GLOSSARY_SECTION}', glossarySection || '')
        + legalSection;

    // Create QA chunks with context overlap
    const qaChunks = [];
    for (let i = 0; i < allPairs.length; i += MAX_QA_SEGMENTS) {
        // Include overlap from previous chunk for context
        const startIdx = Math.max(0, i - CONTEXT_OVERLAP_SEGS);
        const endIdx = Math.min(allPairs.length, i + MAX_QA_SEGMENTS);

        qaChunks.push({
            segments: allPairs.slice(startIdx, endIdx),
            actualStartIdx: i,  // Where the "new" segments start (excluding context)
            actualEndIdx: endIdx
        });
    }

    log(`   📦 Split into ${qaChunks.length} QA chunk(s)`);

    // Process each QA chunk
    const allCorrections = new Map();
    let failedChunks = 0;

    for (let chunkNum = 0; chunkNum < qaChunks.length; chunkNum++) {
        const chunk = qaChunks[chunkNum];
        const chunkSegments = chunk.segments;

        // Build input for this chunk
        const inputSegments = chunkSegments.map(p => ({
            id: p.id,
            original: p.original,
            translation: p.translation
        }));

        const fullPrompt = `${qaPromptText}

CONTEXT: This is chunk ${chunkNum + 1} of ${qaChunks.length}. First ${CONTEXT_OVERLAP_SEGS} segments may be context from previous chunk.

INPUT SEGMENTS:
${JSON.stringify(inputSegments, null, 2)}`;

        // Try with retries
        let success = false;
        for (let attempt = 1; attempt <= MAX_RETRIES && !success; attempt++) {
            try {
                log(`   🔄 QA chunk ${chunkNum + 1}/${qaChunks.length} (${chunkSegments.length} segments)${attempt > 1 ? ` [retry ${attempt}]` : ''}`);

                const result = await generateTextOnly(modelKey, fullPrompt, log);

                // Parse response
                let jsonString = result.text.trim();
                const firstBracket = jsonString.indexOf('[');
                const lastBracket = jsonString.lastIndexOf(']');

                if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
                    jsonString = jsonString.substring(firstBracket, lastBracket + 1);
                }

                const corrections = JSON.parse(jsonString);

                if (!Array.isArray(corrections)) {
                    throw new Error('QA returned non-array response');
                }

                // Add corrections to map (only for segments in the "actual" range, not context)
                const actualIds = new Set(
                    allPairs.slice(chunk.actualStartIdx, chunk.actualEndIdx).map(p => p.id)
                );

                for (const item of corrections) {
                    if (typeof item.id === 'number' && typeof item.translation === 'string') {
                        // Only add if it's in the actual range (not context overlap)
                        if (actualIds.has(item.id)) {
                            allCorrections.set(item.id, item.translation);
                        }
                    }
                }

                success = true;

            } catch (err) {
                log(`   ⚠️ QA chunk ${chunkNum + 1} attempt ${attempt} failed: ${err.message}`);
                if (attempt === MAX_RETRIES) {
                    log(`   ❌ GUARDRAIL: QA chunk ${chunkNum + 1} FAILED after ${MAX_RETRIES} retries - segments ${chunk.actualStartIdx}-${chunk.actualEndIdx} not reviewed`);
                    failedChunks++;
                }
            }
        }
    }

    // Summary
    if (failedChunks > 0) {
        log(`   ⚠️ WARNING: ${failedChunks}/${qaChunks.length} QA chunks failed - some segments may not have been reviewed`);
    }

    if (allCorrections.size === 0) {
        log(`   ✅ QA Pass: All segments passed quality check`);
    } else {
        log(`   🔧 QA Pass: ${allCorrections.size}/${allPairs.length} segments improved`);
    }

    return { correctionsMap: allCorrections, segmentToChunkMap };
}

/**
 * Fluency-Only QA Pass for pre-translated documents
 * Uses chunking with context overlap for long documents
 * 
 * @param {Array} blocks - Extracted semantic blocks from DOCX
 * @param {string} customPrompt - User's custom instructions
 * @param {string} modelKey - Model to use
 * @param {function} log - Logging callback
 * @returns {Object} - { corrections, segments }
 */
async function fluencyOnlyQaPass(blocks, customPrompt, modelKey, log) {
    log(`\n📝 Starting Fluency-Only QA (no source text)...`);

    // Configuration
    const MAX_QA_SEGMENTS = 80;
    const CONTEXT_OVERLAP_SEGS = 10;
    const MAX_RETRIES = 2;

    // Build segments from blocks
    const segments = [];
    let segId = 0;

    for (const block of blocks) {
        for (const textNode of block.texts) {
            if (textNode.text.trim().length > 0) {
                segments.push({
                    id: segId,
                    text: textNode.text,
                    textNode: textNode
                });
                segId++;
            }
        }
    }

    if (segments.length === 0) {
        log(`   ⚠️ No text segments found`);
        return { corrections: new Map(), segments: [] };
    }

    log(`   📊 Total segments to review: ${segments.length}`);

    // Build prompt template
    const glossarySection = extractGlossaryFromPrompt(customPrompt);
    const legalSection = isLegalDocument(customPrompt) ? LEGAL_REINFORCEMENT : '';
    const promptText = FLUENCY_ONLY_QA_PROMPT + (glossarySection ? `\n\n${glossarySection}` : '') + legalSection;

    // Create chunks with context overlap
    const qaChunks = [];
    for (let i = 0; i < segments.length; i += MAX_QA_SEGMENTS) {
        const startIdx = Math.max(0, i - CONTEXT_OVERLAP_SEGS);
        const endIdx = Math.min(segments.length, i + MAX_QA_SEGMENTS);

        qaChunks.push({
            segments: segments.slice(startIdx, endIdx),
            actualStartIdx: i,
            actualEndIdx: endIdx
        });
    }

    log(`   📦 Split into ${qaChunks.length} QA chunk(s)`);

    // Process chunks
    const allCorrections = new Map();
    let failedChunks = 0;

    for (let chunkNum = 0; chunkNum < qaChunks.length; chunkNum++) {
        const chunk = qaChunks[chunkNum];
        const chunkSegments = chunk.segments;

        const inputData = chunkSegments.map(s => ({ id: s.id, text: s.text }));

        const fullPrompt = `${promptText}

CONTEXT: This is chunk ${chunkNum + 1} of ${qaChunks.length}. First ${CONTEXT_OVERLAP_SEGS} segments may be context from previous chunk.

INPUT SEGMENTS:
${JSON.stringify(inputData, null, 2)}`;

        let success = false;
        for (let attempt = 1; attempt <= MAX_RETRIES && !success; attempt++) {
            try {
                log(`   🔄 Fluency QA chunk ${chunkNum + 1}/${qaChunks.length} (${chunkSegments.length} segments)${attempt > 1 ? ` [retry ${attempt}]` : ''}`);

                const result = await generateTextOnly(modelKey, fullPrompt, log);

                let jsonString = result.text.trim();
                const firstBracket = jsonString.indexOf('[');
                const lastBracket = jsonString.lastIndexOf(']');

                if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
                    jsonString = jsonString.substring(firstBracket, lastBracket + 1);
                }

                const corrections = JSON.parse(jsonString);

                if (!Array.isArray(corrections)) {
                    throw new Error('QA returned non-array response');
                }

                // Only add corrections for actual range (not context)
                const actualIds = new Set(
                    segments.slice(chunk.actualStartIdx, chunk.actualEndIdx).map(s => s.id)
                );

                for (const item of corrections) {
                    if (typeof item.id === 'number' && typeof item.translation === 'string') {
                        if (actualIds.has(item.id)) {
                            allCorrections.set(item.id, item.translation);
                        }
                    }
                }

                success = true;

            } catch (err) {
                log(`   ⚠️ Fluency QA chunk ${chunkNum + 1} attempt ${attempt} failed: ${err.message}`);
                if (attempt === MAX_RETRIES) {
                    log(`   ❌ GUARDRAIL: Fluency QA chunk ${chunkNum + 1} FAILED - segments ${chunk.actualStartIdx}-${chunk.actualEndIdx} not reviewed`);
                    failedChunks++;
                }
            }
        }
    }

    // Summary
    if (failedChunks > 0) {
        log(`   ⚠️ WARNING: ${failedChunks}/${qaChunks.length} chunks failed - some segments not reviewed`);
    }

    if (allCorrections.size === 0) {
        log(`   ✅ Fluency QA: All segments passed quality check`);
    } else {
        log(`   🔧 Fluency QA: ${allCorrections.size}/${segments.length} segments improved`);
    }

    return { corrections: allCorrections, segments };
}

/**
 * Patch translations back into XML
 * Works by replacing text content in <w:t> tags at exact positions
 */
function patchTranslationsIntoXml(xmlString, allTranslations) {
    // Collect all text node replacements sorted by position (descending)
    const replacements = [];
    const processedPositions = new Set(); // Track positions to avoid duplicates

    for (const { translations, segmentMap } of allTranslations) {
        for (const [segIndex, translation] of translations) {
            const segInfo = segmentMap.get(segIndex);
            if (!segInfo) continue;

            // For segments with multiple text nodes (formatted text),
            // we put translated text in first node, clear others
            const textNodes = segInfo.textNodes;

            if (textNodes.length === 1) {
                // Simple case: one text node
                const node = textNodes[0];
                const posKey = `${node.globalStart}-${node.globalEnd}`;

                // Skip if we've already processed this exact position
                if (processedPositions.has(posKey)) {
                    continue;
                }
                processedPositions.add(posKey);

                replacements.push({
                    start: node.globalStart,
                    end: node.globalEnd,
                    original: node.fullMatch,
                    replacement: buildTextTag(node.fullMatch, translation)
                });
            } else {
                // Multiple text nodes: distribute translation while preserving spacing
                // Separate whitespace-only nodes (important for spacing between formatted text!)
                const nonWhitespaceNodes = [];
                const whitespaceNodes = [];

                for (let i = 0; i < textNodes.length; i++) {
                    const node = textNodes[i];
                    if (node.text.trim().length === 0) {
                        whitespaceNodes.push({ index: i, node });
                    } else {
                        nonWhitespaceNodes.push({ index: i, node });
                    }
                }

                // Distribute translated words only across non-whitespace nodes
                const words = translation.split(/\s+/).filter(w => w.length > 0);
                const nonWhiteCount = nonWhitespaceNodes.length;

                // First, handle whitespace-only nodes (keep them as-is)
                for (const { node } of whitespaceNodes) {
                    const posKey = `${node.globalStart}-${node.globalEnd}`;
                    if (processedPositions.has(posKey)) continue;
                    processedPositions.add(posKey);

                    replacements.push({
                        start: node.globalStart,
                        end: node.globalEnd,
                        original: node.fullMatch,
                        replacement: buildTextTag(node.fullMatch, node.text) // Keep original whitespace
                    });
                }

                // Distribute translated words across non-whitespace nodes
                for (let i = 0; i < nonWhiteCount; i++) {
                    const { index, node } = nonWhitespaceNodes[i];
                    const posKey = `${node.globalStart}-${node.globalEnd}`;

                    if (processedPositions.has(posKey)) continue;
                    processedPositions.add(posKey);

                    const startWord = Math.floor(i * words.length / nonWhiteCount);
                    const endWord = Math.floor((i + 1) * words.length / nonWhiteCount);
                    let nodeText = words.slice(startWord, endWord).join(' ');

                    // Preserve leading/trailing spaces from original node
                    const originalLeading = node.text.match(/^\s+/)?.[0] || '';
                    const originalTrailing = node.text.match(/\s+$/)?.[0] || '';

                    if (originalLeading) nodeText = originalLeading + nodeText;
                    if (originalTrailing) nodeText = nodeText + originalTrailing;

                    // CRITICAL FIX: Ensure space after each node except the last one
                    // This prevents "obtainedthe" bug when nodes don't have trailing spaces
                    const isLastNode = i === nonWhiteCount - 1;
                    const nextNodeIsWhitespace = !isLastNode && i + 1 < textNodes.length &&
                        textNodes.findIndex((n, idx) => idx > index && n.text.trim().length === 0) === index + 1;

                    if (!isLastNode && !originalTrailing && !nextNodeIsWhitespace) {
                        // Not the last node, no original trailing space, and next node is not whitespace
                        // Add a space to separate from next node
                        nodeText = nodeText + ' ';
                    }

                    // Ensure we don't end up with empty content
                    if (!nodeText || nodeText.trim() === '') {
                        nodeText = ' ';
                    }

                    replacements.push({
                        start: node.globalStart,
                        end: node.globalEnd,
                        original: node.fullMatch,
                        replacement: buildTextTag(node.fullMatch, nodeText)
                    });
                }
            }
        }
    }

    // Sort by position descending (so we don't mess up positions as we replace)
    replacements.sort((a, b) => b.start - a.start);

    // Apply replacements
    let result = xmlString;
    for (const r of replacements) {
        result = result.substring(0, r.start) + r.replacement + result.substring(r.end);
    }

    return result;
}

/**
 * Build a <w:t> tag preserving attributes
 */
function buildTextTag(originalTag, newText) {
    // Check if original had xml:space="preserve"
    const hasPreserve = originalTag.includes('xml:space="preserve"');
    const escapedText = escapeXml(newText);

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
 * @param {string} inputPath - Path to input DOCX
 * @param {string} outputPath - Path to output DOCX  
 * @param {string} customPrompt - User's custom instructions
 * @param {string} modelKey - Model to use
 * @param {function} logCallback - Logging callback
 * @param {object} options - Additional options
 * @param {boolean} options.enableQaPass - Enable QA second pass
 * @param {boolean} options.qaOnly - Skip translation, only run fluency QA
 */
async function translateDocx(inputPath, outputPath, customPrompt, modelKey = 'gemini-3-pro', logCallback, options = {}) {
    const { enableQaPass = false, qaOnly = false } = options;
    const log = (msg) => {
        console.log(msg);
        if (logCallback) logCallback(msg);
    };

    try {
        log(qaOnly
            ? `📝 Starting QA-only review: ${path.basename(inputPath)}`
            : `📄 Starting semantic translation: ${path.basename(inputPath)}`);

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

        // Step 3: Extract semantic blocks
        log('🔍 Analyzing document structure...');
        const blocks = extractSemanticBlocks(documentXml);

        const tableCount = blocks.filter(b => b.type === BlockType.TABLE).length;
        const paraCount = blocks.filter(b => b.type === BlockType.PARAGRAPH).length;
        const headingCount = blocks.filter(b => b.type === BlockType.HEADING).length;

        log(`   Found: ${paraCount} paragraphs, ${tableCount} tables, ${headingCount} headings`);

        if (blocks.length === 0) {
            log('⚠️ No text found');
            fs.copyFileSync(inputPath, outputPath);
            return outputPath;
        }

        // === QA-ONLY MODE ===
        if (qaOnly) {
            log('\n━━━ QA-ONLY MODE: Reviewing existing text ━━━');

            const qaResult = await fluencyOnlyQaPass(blocks, customPrompt, modelKey, log);

            if (qaResult.corrections.size > 0) {
                log('🔧 Patching corrections into document...');

                // Apply corrections to XML
                for (const [segId, correction] of qaResult.corrections) {
                    const segment = qaResult.segments.find(s => s.id === segId);
                    if (segment && segment.textNode) {
                        const { startPos, endPos } = segment.textNode;
                        const escapedCorrection = escapeXml(correction);
                        const tagMatch = documentXml.substring(startPos, endPos).match(/<w:t[^>]*>/);
                        if (tagMatch) {
                            const before = documentXml.substring(0, startPos);
                            const after = documentXml.substring(endPos);
                            documentXml = before + `${tagMatch[0]}${escapedCorrection}</w:t>` + after;
                        }
                    }
                }
            }

            // Validate and save
            const xmlValidation = validateXml(documentXml);
            if (!xmlValidation.valid) {
                log(`⚠️ XML validation warning: ${xmlValidation.error}`);
                fs.copyFileSync(inputPath, outputPath);
                return outputPath;
            }

            zip.file('word/document.xml', documentXml);
            log('💾 Saving reviewed document...');
            const outputBuffer = await zip.generateAsync({
                type: 'nodebuffer',
                compression: 'DEFLATE',
                compressionOptions: { level: 6 }
            });
            fs.writeFileSync(outputPath, outputBuffer);
            log(`🎉 QA review complete! Saved to: ${path.basename(outputPath)}`);
            return outputPath;
        }

        // === NORMAL TRANSLATION MODE ===
        // Step 4: Create semantic chunks
        const chunks = createSemanticChunks(blocks);
        log(`📦 Created ${chunks.length} semantic chunk(s) for translation`);

        // Step 5: Translate each chunk
        const allTranslations = [];
        let totalInputTokens = 0;
        let totalOutputTokens = 0;

        for (let i = 0; i < chunks.length; i++) {
            const result = await translateChunk(
                chunks[i],
                i,
                chunks.length,
                customPrompt,
                modelKey,
                log
            );

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

        // Step 6.5: Optional QA Pass (second pass for quality)
        if (enableQaPass) {
            const qaResult = await qaPassChunk(allTranslations, customPrompt, modelKey, log);

            if (qaResult && qaResult.correctionsMap && qaResult.correctionsMap.size > 0) {
                // Apply corrections to allTranslations
                for (const [segId, correctedTranslation] of qaResult.correctionsMap) {
                    const chunkIdx = qaResult.segmentToChunkMap.get(segId);
                    if (chunkIdx !== undefined && allTranslations[chunkIdx]) {
                        allTranslations[chunkIdx].translations.set(segId, correctedTranslation);
                    }
                }
            }
        }

        // Step 7: Patch translations into XML
        log('🔧 Patching translations into document...');
        const patchedXml = patchTranslationsIntoXml(documentXml, allTranslations);

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
    createSemanticChunks
};
