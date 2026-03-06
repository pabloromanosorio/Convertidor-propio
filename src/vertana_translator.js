/**
 * Vertana-based Translator
 * 
 * Uses Vertana library for context-aware translation with:
 * - Dynamic glossary accumulation
 * - Chunk context propagation for consistency
 * - Custom instructions support
 * 
 * Works alongside the existing XLIFF translator as an alternative engine.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
require('dotenv').config(); // Ensure .env is loaded for API keys

// Vertana and AI SDK imports (ESM compatibility)
let translate, google, searchWeb, fetchWebPage;

async function initVertana() {
    if (!translate) {
        const facadeModule = await import('@vertana/facade');
        translate = facadeModule.translate;
    }
    if (!google) {
        const googleModule = await import('@ai-sdk/google');
        google = googleModule.google;
    }
    // Import web context sources (for web search and page fetching)
    if (!searchWeb) {
        const contextWebModule = await import('@vertana/context-web');
        searchWeb = contextWebModule.searchWeb;
        fetchWebPage = contextWebModule.fetchWebPage;
    }
}

// Import XLIFF utilities for document handling
const {
    convertToXliff,
    extractXliffSegments,
    mergeXliffTranslations,
    convertToDocx,
    checkJavaInstalled
} = require('./xliff/xliff_handler');

const { getApiKey } = require('./providers');

/**
 * Translate a DOCX file using Vertana library
 *
 * @param {string} inputPath - Path to input DOCX
 * @param {string} outputPath - Path for translated DOCX
 * @param {string} customPrompt - User's custom translation prompt (additionalInstructions)
 * @param {object} options - Translation options
 * @param {string} options.model - Model key (e.g., 'gemini-3-pro')
 * @param {string} options.languageA - Source language (e.g., 'English')
 * @param {string} options.languageB - Target language (e.g., 'Spanish (Colombia)')
 * @param {function} options.logCallback - Callback for progress logging
 * @param {object} options.glossary - Optional glossary object { term: translation }
 * @returns {Promise<{success: boolean, outputPath: string}>}
 */
async function translateDocxWithVertana(inputPath, outputPath, customPrompt, options = {}) {
    // Initialize ESM modules
    await initVertana();

    const log = (msg) => {
        console.log(msg);
        if (options.logCallback) options.logCallback(msg);
    };

    // Language pair (defaults for backward compatibility)
    const languageA = options.languageA || 'English';
    const languageB = options.languageB || 'Spanish (Colombia)';

    log(`\n━━━ VERTANA TRANSLATION ━━━`);
    log(`📄 Input: ${path.basename(inputPath)}`);
    log(`📄 Output: ${path.basename(outputPath)}`);
    log(`🌐 Languages: ${languageA} → ${languageB}`);
    log(`🧠 Engine: Vertana (Context-Aware)`);

    // Get API key for Gemini (Vertana uses AI SDK)
    const apiKey = getApiKey('GEMINI_API_KEY');
    if (!apiKey) {
        throw new Error('GEMINI_API_KEY not configured. Vertana requires an AI SDK provider.');
    }

    // Set API key for AI SDK Google provider
    process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;

    // Create temp directory for processing
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vertana-'));
    log(`📁 Temp directory: ${tempDir}`);

    try {
        // Step 1: Convert DOCX to XLIFF for segment extraction
        log(`\n[Step 1/4] Extracting text segments...`);
        const xliffPath = convertToXliff(inputPath, tempDir, 'en');
        log(`✅ Segments extracted`);

        // Step 2: Extract segments from XLIFF
        log(`\n[Step 2/4] Parsing segments...`);
        const segments = extractXliffSegments(xliffPath);
        log(`✅ Found ${segments.length} translatable segments`);

        if (segments.length === 0) {
            throw new Error('No translatable segments found in document');
        }

        // Step 3: Translate using Vertana
        log(`\n[Step 3/4] Translating with Vertana...`);

        // Combine all segment sources for Vertana (it handles chunking internally)
        const sourceText = segments.map(s => `[${s.id}] ${s.source}`).join('\n\n');

        // Build Vertana glossary from options
        const vertanaGlossary = [];
        if (options.glossary && typeof options.glossary === 'object') {
            for (const [original, translated] of Object.entries(options.glossary)) {
                vertanaGlossary.push({ original, translated });
            }
        }

        // Determine target locale
        const targetLocale = mapLanguageToLocale(languageB);

        // Map UI model key to AI SDK model name
        const modelKey = options.model || 'gemini-3-pro';
        const aiSdkModelName = mapModelKeyToAiSdk(modelKey);
        log(`🤖 Model: ${aiSdkModelName}`);

        // Configure Vertana model
        const model = google(aiSdkModelName);

        // Enable web search option (can be disabled via options)
        const enableWebSearch = options.enableWebSearch !== false;

        // Timeout for translation (default 60 seconds per chunk, can be slow with web search)
        const timeoutMs = options.timeoutMs || 60000;

        log(`🔍 Web search: ${enableWebSearch ? 'Enabled (DuckDuckGo Lite)' : 'Disabled'}`);
        log(`⏱️ Timeout: ${timeoutMs / 1000}s per translation`);

        // Helper to run translation with timeout
        async function runTranslation(useWebSearch) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

            try {
                const result = await translate(
                    model,
                    targetLocale,
                    sourceText,
                    {
                        sourceLanguage: mapLanguageToLocale(languageA),
                        domain: inferDomain(customPrompt),
                        tone: 'formal',
                        mediaType: 'text/plain',
                        additionalInstructions: buildVertanaInstructions(customPrompt, languageA, languageB),
                        glossary: vertanaGlossary.length > 0 ? vertanaGlossary : undefined,
                        dynamicGlossary: true,
                        contextSources: useWebSearch ? [searchWeb, fetchWebPage] : undefined,
                        signal: controller.signal,
                        onProgress: (progress) => {
                            if (progress.stage === 'translating') {
                                const pct = Math.round(progress.progress * 100);
                                if (pct % 20 === 0) {
                                    log(`  📊 Progress: ${pct}%`);
                                }
                            } else if (progress.stage === 'gatheringContext') {
                                log(`  🌐 Gathering web context...`);
                            }
                        }
                    }
                );
                clearTimeout(timeoutId);
                return result;
            } catch (error) {
                clearTimeout(timeoutId);
                throw error;
            }
        }

        // Try with web search first, fallback to no web search if timeout
        let result;
        try {
            result = await runTranslation(enableWebSearch);
        } catch (error) {
            if (error.name === 'AbortError' && enableWebSearch) {
                log(`⚠️ Translation timed out with web search, retrying without...`);
                result = await runTranslation(false);
            } else {
                throw error;
            }
        }

        log(`✅ Vertana translation complete`);
        log(`📊 Tokens used: ${result.tokenUsed}`);
        log(`⏱️ Processing time: ${Math.round(result.processingTime)}ms`);

        // Parse Vertana response and assign to segments
        parseAndAssignTranslations(segments, result.text, log);

        // Count translated segments
        const translatedCount = segments.filter(s => s.target).length;
        log(`✅ Translated ${translatedCount}/${segments.length} segments`);

        // Step 4: Merge translations back and convert to DOCX
        log(`\n[Step 4/4] Merging translations...`);
        mergeXliffTranslations(xliffPath, segments);
        convertToDocx(xliffPath, outputPath);
        log(`✅ Translated DOCX created`);

        // Cleanup temp directory
        fs.rmSync(tempDir, { recursive: true, force: true });

        return {
            success: true,
            outputPath,
            tokensUsed: result.tokenUsed,
            processingTime: result.processingTime,
            accumulatedGlossary: result.accumulatedGlossary
        };

    } catch (error) {
        // Cleanup on error
        try {
            fs.rmSync(tempDir, { recursive: true, force: true });
        } catch (e) { }

        log(`\n❌ Vertana Error: ${error.message}`);
        throw error;
    }
}

/**
 * Build Vertana-compatible instructions from custom prompt
 */
function buildVertanaInstructions(customPrompt, languageA, languageB) {
    const baseInstructions = `
SEGMENT FORMAT:
- Each segment is prefixed with an ID like [tu1], [tu2], etc.
- Translate ONLY the text after the ID, preserving the ID prefix exactly.
- Output each translation on its own line with the ID prefix.

LANGUAGE DETECTION:
- If the source is ${languageB}, translate to ${languageA}.
- If the source is ${languageA} (or other), translate to ${languageB}.

FORMATTING RULES:
- Preserve any inline tags like <bpt>, <ept>, <ph> exactly in their correct positions.
- Preserve leading and trailing spaces exactly as provided.
- All text must be BLACK. Do not describe or suggest any font colors.

SPANISH CAPITALIZATION:
- When translating to Spanish, use SPANISH capitalization rules for titles and headings.
- In Spanish, only the first word and proper nouns are capitalized - do NOT calque English title case.
- Example: "User Guide for Advanced Features" should be "Guía del usuario para funciones avanzadas" (NOT "Guía del Usuario para Funciones Avanzadas").
`.trim();

    if (customPrompt && customPrompt.trim()) {
        return `${baseInstructions}\n\nCUSTOM INSTRUCTIONS:\n${customPrompt}`;
    }

    return baseInstructions;
}

/**
 * Map language name to BCP 47 locale
 */
function mapLanguageToLocale(language) {
    const languageLower = language.toLowerCase();

    if (languageLower.includes('spanish') && languageLower.includes('colombia')) {
        return 'es-CO';
    } else if (languageLower.includes('spanish') && languageLower.includes('spain')) {
        return 'es-ES';
    } else if (languageLower.includes('spanish') && languageLower.includes('mexico')) {
        return 'es-MX';
    } else if (languageLower.includes('spanish')) {
        return 'es';
    } else if (languageLower.includes('english') && languageLower.includes('uk')) {
        return 'en-GB';
    } else if (languageLower.includes('english')) {
        return 'en';
    } else if (languageLower.includes('portuguese') && languageLower.includes('brazil')) {
        return 'pt-BR';
    } else if (languageLower.includes('portuguese')) {
        return 'pt';
    } else if (languageLower.includes('french') && languageLower.includes('canada')) {
        return 'fr-CA';
    } else if (languageLower.includes('french')) {
        return 'fr';
    } else if (languageLower.includes('german')) {
        return 'de';
    } else if (languageLower.includes('italian')) {
        return 'it';
    } else if (languageLower.includes('chinese') && languageLower.includes('traditional')) {
        return 'zh-TW';
    } else if (languageLower.includes('chinese')) {
        return 'zh-CN';
    } else if (languageLower.includes('japanese')) {
        return 'ja';
    } else if (languageLower.includes('korean')) {
        return 'ko';
    }

    // Fallback: return as-is (might work if it's already a locale)
    return language;
}

/**
 * Map UI model key to AI SDK model name
 * UI uses friendlier names, AI SDK needs the actual model identifier
 */
function mapModelKeyToAiSdk(modelKey) {
    const modelMap = {
        // Gemini 3.x models (preview)
        'gemini-3-pro': 'gemini-3-pro-preview',
        'gemini-3-flash': 'gemini-3-flash-preview',
        // Gemini 2.x models (fallback)
        'gemini-2-pro': 'gemini-2.0-pro',
        'gemini-2-flash': 'gemini-2.0-flash',
        // Direct pass-through for other models
    };

    return modelMap[modelKey] || modelKey;
}

/**
 * Infer domain from custom prompt
 */
function inferDomain(customPrompt) {
    if (!customPrompt) return undefined;

    const promptLower = customPrompt.toLowerCase();

    if (promptLower.includes('medical') || promptLower.includes('clinical') || promptLower.includes('hiv') || promptLower.includes('pharma')) {
        return 'medical';
    } else if (promptLower.includes('legal') || promptLower.includes('contract') || promptLower.includes('law')) {
        return 'legal';
    } else if (promptLower.includes('financial') || promptLower.includes('bank') || promptLower.includes('accounting')) {
        return 'financial';
    } else if (promptLower.includes('technical') || promptLower.includes('software') || promptLower.includes('engineering')) {
        return 'technical';
    } else if (promptLower.includes('marketing') || promptLower.includes('advertising')) {
        return 'marketing';
    }

    return undefined;
}

/**
 * Parse Vertana response and assign translations to segments
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
            const translation = match[2];

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
 * Check if Vertana translation is available
 */
function isVertanaAvailable() {
    try {
        // Check if Java is available (needed for XLIFF extraction)
        checkJavaInstalled();
        // Check if API key is configured
        const apiKey = getApiKey('GEMINI_API_KEY');
        return !!apiKey;
    } catch (e) {
        return false;
    }
}

module.exports = {
    translateDocxWithVertana,
    isVertanaAvailable
};
