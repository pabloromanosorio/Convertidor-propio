/**
 * XLIFF-based Translator
 * 
 * Uses OpenXLIFF for file structure handling while leveraging
 * the existing translateChunk() logic from translator.js
 * 
 * This is the PHASE A implementation:
 * - New: XLIFF-based extraction and merging (100% layout preservation)
 * - Unchanged: Current translation logic (single Gemini call per chunk)
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const {
    convertToXliff,
    extractXliffSegments,
    mergeXliffTranslations,
    convertToDocx,
    createChunksFromSegments,
    checkJavaInstalled,
    validateXliff,
    joinXliffFiles
} = require('./xliff_handler');

// Import the existing translation logic
const { generateTextOnly } = require('../translator');

/**
 * Translate a DOCX file using XLIFF-based extraction
 *
 * @param {string} inputPath - Path to input DOCX
 * @param {string} outputPath - Path for translated DOCX
 * @param {string} customPrompt - User's custom translation prompt
 * @param {string} modelKey - Model to use (e.g., 'gemini-3-pro')
 * @param {function} logCallback - Callback for progress logging
 * @param {object} languageOptions - Language pair { languageA, languageB }
 * @returns {Promise<{success: boolean, outputPath: string}>}
 */
async function translateDocxWithXliff(inputPath, outputPath, customPrompt, modelKey = 'gemini-3-pro', logCallback, languageOptions = {}) {
    const log = (msg) => {
        console.log(msg);
        if (logCallback) logCallback(msg);
    };

    // Language pair (defaults for backward compatibility)
    const languageA = languageOptions.languageA || 'English';
    const languageB = languageOptions.languageB || 'Spanish (Colombia)';
    const temperature = languageOptions.temperature || 0.2;

    log(`\n━━━ XLIFF-BASED TRANSLATION ━━━`);
    log(`📄 Input: ${inputPath}`);
    log(`📄 Output: ${outputPath}`);
    log(`🤖 Model: ${modelKey}`);
    log(`🌡️ Temperature: ${temperature}`);
    log(`🌐 Languages: ${languageA} ↔ ${languageB}`);

    // Create temp directory for XLIFF processing
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'xliff-'));
    log(`📁 Temp directory: ${tempDir}`);

    try {
        // Step 1: Convert DOCX to XLIFF
        log(`\n[Step 1/4] Converting DOCX to XLIFF...`);
        const xliffPath = convertToXliff(inputPath, tempDir, 'en');
        log(`✅ XLIFF created`);

        // Step 2: Extract segments
        log(`\n[Step 2/4] Extracting segments...`);
        const segments = extractXliffSegments(xliffPath);
        log(`✅ Found ${segments.length} translatable segments`);

        if (segments.length === 0) {
            throw new Error('No translatable segments found in document');
        }

        // Step 3: Translate segments in chunks
        log(`\n[Step 3/4] Translating segments...`);
        const chunks = createChunksFromSegments(segments, 40000);
        log(`📦 Processing ${chunks.length} chunk(s)`);

        for (let i = 0; i < chunks.length; i++) {
            const chunk = chunks[i];
            log(`\n  Chunk ${i + 1}/${chunks.length} (${chunk.segments.length} segments)`);

            // Build prompt for this chunk
            const chunkText = chunk.segments.map((s, idx) => `[${s.id}] ${s.source}`).join('\n\n');
            const fullPrompt = buildTranslationPrompt(
                chunkText,
                customPrompt,
                i + 1,
                chunks.length,
                chunk.contextPrevious,
                chunk.contextNext,
                { languageA, languageB }
            );

            // Retry logic for translation call
            let response = null;
            const MAX_RETRIES = 3;

            for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
                try {
                    // Translate using existing logic
                    const result = await generateTextOnly(modelKey, fullPrompt, log, { temperature });
                    response = result.text || result;
                    break; // Success
                } catch (e) {
                    log(`  ⚠️ Attempt ${attempt}/${MAX_RETRIES} failed: ${e.message}`);
                    if (attempt === MAX_RETRIES) throw e;
                    // Wait before retry (exponential backoff: 2s, 4s, 8s)
                    await new Promise(r => setTimeout(r, 2000 * Math.pow(2, attempt - 1)));
                }
            }

            log(`  📥 Received response from AI (${response.length} chars)`);
            if (response.length < 30) log(`  ⚠️ Response seems too short: "${response}"`);

            // Parse response and assign to segments
            parseAndAssignTranslations(chunk.segments, response, log);
        }

        // Count translated segments
        const translatedCount = segments.filter(s => s.target).length;
        log(`\n✅ Translated ${translatedCount}/${segments.length} segments`);

        // Step 4: Merge translations and convert back
        log(`\n[Step 4/4] Merging translations...`);
        mergeXliffTranslations(xliffPath, segments);

        // Validate before conversion
        log(`\n[Step 4b] Validating XLIFF integrity...`);
        const isValid = validateXliff(xliffPath);
        if (!isValid) {
            log(`⚠️ XLIFF validation found issues, proceeding with caution...`);
        } else {
            log(`✅ XLIFF is valid`);
        }

        convertToDocx(xliffPath, outputPath);
        log(`✅ Translated DOCX created`);

        // Cleanup temp directory
        fs.rmSync(tempDir, { recursive: true, force: true });

        return { success: true, outputPath };

    } catch (error) {
        // Cleanup on error
        try {
            fs.rmSync(tempDir, { recursive: true, force: true });
        } catch (e) { }

        log(`\n❌ Error: ${error.message}`);
        throw error;
    }
}

/**
 * Build the translation prompt for a chunk of segments
 */
function buildTranslationPrompt(segmentsText, customPrompt, chunkNum, totalChunks, contextPrevious, contextNext, languageOptions = {}) {
    // Language pair (defaults for backward compatibility)
    const languageA = languageOptions.languageA || 'English';
    const languageB = languageOptions.languageB || 'Spanish (Colombia)';

    const baseInstructions = `You are a professional translator.

TASK:
1. Detect the language of the source text.
2. If the source is ${languageB}, translate it to ${languageA}.
3. If the source is ${languageA} (or other), translate it to ${languageB}.
Preserve the segment IDs exactly as shown (e.g., [tu1], [tu2]).

RULES:
1. Translate ONLY the text after each [ID], not the ID itself.
2. Maintain the same formatting and structure.
3. **INLINE TAGS:** If a segment contains inline tags like <bpt>, <ept>, or <ph id="ph1"/>, you MUST preserve them exactly in their correct relative positions. These tags represent original document formatting.
4. Output each translation on its own line with the ID prefix.
5. **SPACE PRESERVATION:** Preserve leading and trailing spaces exactly as provided in the segment. DO NOT trim them.
6. **TEXT COLOR:** All text must be BLACK. Do not describe or suggest any font colors.
7. **SPANISH CAPITALIZATION:** When translating to Spanish, use SPANISH capitalization rules for titles and headings. In Spanish, only the first word and proper nouns are capitalized - do NOT calque English title case. Example: "User Guide for Advanced Features" should be "Guía del usuario para funciones avanzadas" (NOT "Guía del Usuario para Funciones Avanzadas").

${contextPrevious ? `CONTEXT (Previous text - DO NOT TRANSLATE):\n...${contextPrevious}\n` : ''}
${contextNext ? `CONTEXT (Next text - DO NOT TRANSLATE):\n${contextNext}...\n` : ''}

${customPrompt ? `CUSTOM INSTRUCTIONS:\n${customPrompt}\n` : ''}
SEGMENTS TO TRANSLATE (Chunk ${chunkNum}/${totalChunks}):

${segmentsText}

TRANSLATIONS:`;

    return baseInstructions;
}

/**
 * Parse LLM response and assign translations to segments
 */
function parseAndAssignTranslations(segments, response, log) {
    // Create a map of segment IDs
    const segmentMap = new Map(segments.map(s => [s.id, s]));

    // Try to parse response line by line
    const lines = response.split('\n').filter(line => line.trim());

    for (const line of lines) {
        // Match pattern like "[tu1] Translation text" or "[tu1]: Translation text"
        const match = line.match(/^\[([^\]]+)\][:\s]*(.*)/);
        if (match) {
            const id = match[1];
            const translation = match[2]; // Removed .trim()

            if (segmentMap.has(id) && translation !== undefined) {
                segmentMap.get(id).target = translation;
            }
        }
    }

    // Fallback: if structured parsing failed, try sequential assignment
    const assignedCount = segments.filter(s => s.target).length;
    if (assignedCount === 0 && lines.length >= segments.length) {
        log(`  ⚠️ Structured parsing failed, using sequential assignment`);
        for (let i = 0; i < segments.length; i++) {
            let translation = lines[i].replace(/^\[.*?\][:\s]*/, '');
            if (translation !== undefined && !translation.startsWith('TRANSLATIONS')) {
                segments[i].target = translation;
            }
        }
    }

    const finalCount = segments.filter(s => s.target).length;
    log(`  ✅ Assigned ${finalCount}/${segments.length} translations`);
}

/**
 * Check if XLIFF translation is available (Java installed)
 */
function isXliffAvailable() {
    try {
        checkJavaInstalled();
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = {
    translateDocxWithXliff,
    isXliffAvailable
};
