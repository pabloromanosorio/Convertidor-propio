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

        // CRITICAL: Calculate the offset of runContent within runXml
        // runContent is the capture group (inside <w:r>), so we need to add the opening tag length
        const openingTagLength = runXml.indexOf(runContent);

        // Check for formatting
        const isBold = /<w:b(?:\s|\/|>)/.test(runContent);
        const isItalic = /<w:i(?:\s|\/|>)/.test(runContent);
        const isUnderline = /<w:u(?:\s|\/|>)/.test(runContent);

        while ((textMatch = textRegex.exec(runContent)) !== null) {
            const text = textMatch[1];
            // Keep ALL text nodes, even whitespace-only ones
            if (text !== undefined && text !== null) {
                texts.push({
                    text: text,
                    localStart: runStart + openingTagLength + textMatch.index,
                    localEnd: runStart + openingTagLength + textMatch.index + textMatch[0].length,
                    globalStart: blockStartPos + runStart + openingTagLength + textMatch.index,
                    globalEnd: blockStartPos + runStart + openingTagLength + textMatch.index + textMatch[0].length,
                    fullMatch: textMatch[0],
                    formatting: { bold: isBold, italic: isItalic, underline: isUnderline }
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
async function translateChunk(chunk, chunkIndex, totalChunks, customPrompt, modelKey, log) {
    const { formatted, segmentMap } = formatChunkForLLM(chunk, chunkIndex, totalChunks);
    const expectedCount = segmentMap.size;

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

CRITICAL FORMAT RULES (IMMUTABLE):
1. Output MUST be valid JSON array.
2. NO markdown formatting (no \`\`\`).
3. NO intro/outro text. ONLY the JSON array.
4. Translate ALL segments.
5. Do NOT translate the "id" field.
6. **PRESERVE FORMATTING TAGS:** 
   - You will see tags like [b], [/b], [i], [/i], [u], [/u].
   - You MUST keep these tags wrapping the equivalent predicted translation.
   - Example: "Hello [b]World[/b]" -> "Hola [b]Mundo[/b]"`;

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
                // Multiple text nodes: distribute translation

                // STRATEGY 1: TAG MASKING (New, Precision Layout)
                // Attempt to distribute based on matching [b], [i], [u] tags
                const taggedDistribution = distributeByTags(textNodes, translation);

                if (taggedDistribution) {
                    // Success! We found matching streams. Apply them.
                    for (const item of taggedDistribution) {
                        const posKey = `${item.node.globalStart}-${item.node.globalEnd}`;
                        if (processedPositions.has(posKey)) continue;
                        processedPositions.add(posKey);

                        replacements.push({
                            start: item.node.globalStart,
                            end: item.node.globalEnd,
                            original: item.node.fullMatch,
                            replacement: buildTextTag(item.node.fullMatch, item.text)
                        });
                    }
                    continue; // Done with this segment
                }

                // STRATEGY 2: RATIO DISTRIBUTION (Fallback, Safe)
                // Separate whitespace-only nodes (important for spacing!)
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
 */
async function translateDocx(inputPath, outputPath, customPrompt, modelKey = 'gemini-3-pro', logCallback) {
    const log = (msg) => {
        console.log(msg);
        if (logCallback) logCallback(msg);
    };

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

/**
 * Parse text with [b], [i], [u] tags into segments
 * Returns array: [{ text: "string", tags: Set(['b', 'u']) }]
 * Handles simple nesting.
 */
function parseTaggedText(text) {
    const segments = [];
    
    // Tokenize by tags
    const tokenRegex = /(\[\/?(?:b|i|u)\])/g;
    const parts = text.split(tokenRegex);
    
    let activeTags = new Set();
    
    for (const part of parts) {
        if (!part) continue;
        
        if (/^\[(?:b|i|u)\]$/.test(part)) {
            // Opening tag
            const tag = part.slice(1, -1);
            activeTags.add(tag);
        } else if (/^\[\/(?:b|i|u)\]$/.test(part)) {
            // Closing tag
            const tag = part.slice(2, -1);
            activeTags.delete(tag);
        } else {
            // Text content
            segments.push({
                text: part,
                tags: new Set(activeTags) // Clone current state
            });
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
