require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { normalizeInput } = require('./input');
const { pdfToImages } = require('./middleware');
const { generateDocxV2, executeGeminiCode } = require('./renderer_v2');
const { LevelFormat, AlignmentType } = require('docx');
const { generateWithVision, MODELS, getConfiguredProviders } = require('./providers');
const { calculateCost, aggregateCosts, formatCost } = require('./pricing');

// --- CONFIGURATION ---
const DEFAULT_MODEL = 'gemini-3-pro'; // Can be overridden per request

// Load the Manual
const DOCX_MANUAL = fs.readFileSync(path.join(__dirname, '../docs/docx-js.md'), 'utf-8');

const crypto = require('crypto');

// ... (imports)

// 14. PROMPT VERSIONING (Auto-Invalidate Cache on Change)
const PROMPT_VERSION = "v2.10-list-margin-continuity"; // Bumped to force balanced layout regen and native lists

// Cache Helper
function getCachePath(imagePath) {
    // Include PROMPT_VERSION in hash so changes to logic automatically invalidate old cache
    const hash = crypto.createHash('md5').update(imagePath + PROMPT_VERSION).digest('hex');
    return path.join(__dirname, '../temp_code', `${hash}.js`);
}

async function analyzePageV2(log, imagePath, pageNum, modelKey = DEFAULT_MODEL, options = {}) {
    const cachePath = getCachePath(imagePath + modelKey);

    // 1. Smart Cache Check
    if (fs.existsSync(cachePath)) {
        try {
            const cachedCode = fs.readFileSync(cachePath, 'utf-8');
            // Validate the cached code before trusting it
            executeGeminiCode(cachedCode);
            log(`⚡ [Page ${pageNum}] Cache Hit & Verified!`);
            return { code: cachedCode, usage: null }; // No usage for cached results
        } catch (cacheErr) {
            log(`⚠️ [Page ${pageNum}] Cache found but corrupt/invalid (${cacheErr.message}). Regenerating...`);
            fs.unlinkSync(cachePath); // Auto-delete bad cache
        }
    }

    const imageBuffer = fs.readFileSync(imagePath).toString('base64');

    const isZhipu = modelKey.includes('glm') || modelKey.includes('zhipu');
    const zhipuInstructions = isZhipu ? `
    --- SPECIAL RULES FOR GLM MODELS ---
    1. **LAYOUT STRATEGY:** If the page has a sidebar or columns, YOU MUST usage a ONE single MASTER TABLE with invisible borders to structure the page.
       - Row 1, Cell 1: Left Column Content
       - Row 1, Cell 2: Right Column Sidebar
    2. **TABLE WIDTHS:** Always use \`size: 5000, type: WidthType.PERCENTAGE\` for full width.
    ------------------------------------
    ` : '';

    const prompt = `
    ${zhipuInstructions}
    You are an expert developer using the 'docx' (JavaScript) library.
    Your task is to write a valid JavaScript code snippet that defines an array of document children (Paragraphs, Tables) to visually replicate the provided image.

    --- DOCUMENTATION (STRICTLY FOLLOW THESE RULES) ---
    ${DOCX_MANUAL}
    ---------------------------------------------------

    --- CRITICAL FORMATTING RULES ---
    1. **NO BACKGROUND COLORS (CRITICAL):** 
       - **STRICTLY PROHIBITED:** Do not use 'shading', 'fill', 'highlight', or 'background' properties on Paragraphs, Tables, Rows, Cells, or TextRuns.
       - **ALWAYS** default to transparent/white background.
       - If the image has a colored background (e.g. grey headers), **IGNORE IT** and produce plain white background.
    2. **TEXT COLOR (STRICT):**
       - **ALL TEXT MUST BE BLACK.**
       - set \`color: "000000"\` on **EVERY** TextRun.
       - Do NOT use red, blue, or any other color, even if the image has colored text.
    3. **BODY SIZE (STRICT RANGE 10-12pt):**
       - **NORMAL TEXT:** Use \`size: 20\` (10pt).
       - **HEADERS/EMPHASIS:** Use \`size: 24\` (12pt) MAX. **DO NOT EXCEED SIZE 24.**
    4. **BOLD & ITALICS (STRICT):**
       - You MUST preserve bold and italic formatting exactly as seen in the image.
       - Split TextRuns where formatting changes (e.g., "Normal **Bold** Normal").
    5. **FONT FAMILY:** Set \`font: "Arial"\` for **EVERY** TextRun. Do not use default fonts.
    6. **VERTICAL ALIGNMENT & SPACING (CRITICAL FOR PDF LAYOUT):**
       - You MUST use paragraph spacing to imitate the vertical rhythm and whitespace of the original document.
       - Estimate the correct twips for \`spacing: { before: X, after: Y }\` based on the visual gaps in the image.
       - Increase spacing proportionally for headers or large vertical empty spaces.
       - DO NOT use empty Paragraphs to simulate line breaks; explicitly define \`spacing\`.
    7. **TABLES (STRICT DXA WIDTHS & GRIDS):** 
       - **CRITICAL:** \`WidthType.PERCENTAGE\` is PROHIBITED.
       - **USE DXA:** Always use \`WidthType.DXA\` for both table \`width\` and cell \`width\`.
       - **PAGE WIDTH:** A full page is 9360 DXA.
       - **COLUMN WIDTHS ARRAY:** You MUST define a \`columnWidths\` array on every Table (e.g., \`columnWidths: [4680, 4680]\`).
       - Every \`TableCell\` MUST have a \`width: { size: X, type: WidthType.DXA }\` property exactly matching its column logic.
    8. **TABLE CELLS:** NEVER use cell shading. Do NOT add any 'shading' property to table cells.
    9. **IMAGES/SIGNATURES:**
       - If you see a **SIGNATURE**, insert a Paragraph with text "[Signature]".
       - If you see a **SEAL/STAMP**, insert a Paragraph with text "[Seal: <text content of seal>]".
       - DO NOT create generic placeholders like "[Logo]".
    10. **LISTS & INDENTATION - STRICT WORD LISTS (CRITICAL FOR MULTI-PAGE CONTINUITY):**
       - **NEVER** output hardcoded bullets (•, -) or manual numbers (1., 2.) in the text. You MUST use Word's native numbering so the sequence continues properly across pages.
       - For bullets: \`new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [...] })\`
       - For numbered: \`new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [...] })\`
       - **STANDARD PARAGRAPHS MUST NOT BE INDENTED:** Normal body text must have 0 left-indentation so text aligns perfectly globally. ONLY use \`indent: { left: X }\` for blockquotes or deeply nested list items that visibly differ from the main text body margin. Do NOT guess micro-indents for standard paragraphs.
    
    --- CRITICAL TEXT EXTRACTION RULES (GLOBAL) ---
    1. **NO TRUNCATION:** NEVER shorten long text with "..." or ellipses. Write the FULL text exactly as it appears in the image.
    2. **VERBATIM:** Do not interpret, summarize, or correct grammar. Act as a strict OCR machine.
    3. **LONG STRINGS:** If a cell or line contains a long name (e.g. Course Title), type the WHOLE string, no matter how long.

    --- CRITICAL TABLE HANDLING (GRID STRATEGY) ---
    1. **GRID MODEL:** Imagine a perfect grid overlay on the table.
    2. **CONSISTENCY:** If the header has 4 columns/slots, EVERY row below MUST account for 4 slots (using cells or spans).
    3. **ROW DISCIPLINE:**
       - Count visible rows exactly.
       - Create a TableRow for EACH visible row.
       - DO NOT skip rows.
    ${options.exactLayout ? `
    --- EXACT LAYOUT MODE (ENABLED) ---
    CRITICAL: Replicate the EXACT visual layout of the original page:
    1. **SPACING:** Use precise spacing values to match vertical positioning:
       - Use 'spacing: { before: X, after: Y }' on Paragraphs (values in twips, 1pt = 20 twips)
       - Estimate spacing based on visual gaps in the image
    2. **INDENTATION:** Match horizontal positioning:
       - Use 'indent: { left: X }' for left-aligned content (values in twips)
       - Use 'indent: { firstLine: X }' for first-line indents
    3. **ALIGNMENT:** Match text alignment exactly:
       - Use AlignmentType.LEFT, CENTER, RIGHT, or JUSTIFIED as needed
    4. **FONT SIZES:** Vary font sizes to match visual hierarchy:
       - Estimate sizes based on relative text sizes in the image
       - Use exact values like size: 24 (12pt), size: 28 (14pt), size: 32 (16pt), size: 48 (24pt)
    5. **LINE BREAKS:** Add empty paragraphs or use 'spacing' to create visual gaps
    6. **TABLE POSITIONING:** Match table widths and column proportions exactly
    ` : ''}
    --- OUTPUT REQUIREMENTS ---
    1. Output ONLY valid JavaScript code. No explanation text outside code blocks.
    2. The code must evaluate to an ARRAY of 'docx' objects (Paragraph, Table, etc.).
    3. Assume all 'docx' classes (Paragraph, TextRun, Table, WidthType, AlignmentType, etc.) are globally available in scope. Do NOT import them.
    4. **CRITICAL SYNTAX RULE:** You are returning an Array literal (\`return [...]\`). You CANNOT place variable declarations (\`const x = ...\`) directly inside the array elements. Inline all properties.
    5. **RETURN FORMAT:**
       return [
          new Paragraph({ children: [ 
             new TextRun({ text: "Normal ", color: "000000", font: "Arial" }),
             new TextRun({ text: "Bold Text", bold: true, color: "000000", font: "Arial" }) 
          ] }),
          new Table({ columnWidths: [9360], width: { size: 9360, type: WidthType.DXA }, ... })
       ];

    Analyze the image and write the code:
    `;

    const requestId = Math.random().toString(36).substring(7);
    const modelName = MODELS[modelKey]?.name || modelKey;

    // 2. Auto-Retry Loop (Self-Healing)
    let attempts = 0;
    const MAX_RETRIES = 3;

    while (attempts < MAX_RETRIES) {
        attempts++;
        log(`🧠 [Page ${pageNum}] [Req: ${requestId}] Sending to ${modelName} (Attempt ${attempts}/${MAX_RETRIES})...`);

        try {
            // Use unified provider API - now returns { text, usage }
            const result = await generateWithVision(modelKey, prompt, imageBuffer, log, options);
            const code = result.text;
            const usage = result.usage;

            // 3. VALIDATION STEP
            try {
                executeGeminiCode(code); // Try to compile/run it in sandbox
                // If successful:
                fs.writeFileSync(cachePath, code);
                log(`💾 [Page ${pageNum}] Code generated, verified, and saved.`);
                return { code, usage };
            } catch (validationErr) {
                // Log the confusing code for debugging
                log(`❌ [Page ${pageNum}] Validation Failed. Raw Code (first 500 chars): ${code.substring(0, 500)}...`);
                // Write full code to a debug file
                const fs = require('fs');
                fs.writeFileSync(`failed_code_page_${pageNum}.js`, code);

                throw new Error(`Generated code failed validation: ${validationErr.message}`);
            }

        } catch (e) {
            log(`❌ [Page ${pageNum}] Attempt ${attempts} failed: ${e.message}`);
            if (attempts === MAX_RETRIES) {
                log(`💀 [Page ${pageNum}] All attempts failed. Skipping page.`);
                return { code: null, usage: null }; // Give up on this page so the doc can still generate
            }
            // Wait a bit before retry
            await new Promise(r => setTimeout(r, 2000));
        }
    }
}
async function convertDocumentV2(inputFile, pageRange, outputDir, logCallback, modelKey = DEFAULT_MODEL, options = {}) {
    const { addPageBreaks = false, exactLayout = false } = options;
    const log = (msg) => {
        console.log(msg);
        if (logCallback) logCallback(msg);
    };

    try {
        const modelName = MODELS[modelKey]?.name || modelKey;
        log(`🚀 [V2] Starting Code-Generation Conversion for ${inputFile}`);
        log(`📊 Model: ${modelName} | Pages: ${pageRange || 'All'}`);
        const normalized = await normalizeInput(inputFile);

        let images;
        if (normalized.type === 'pdf') {
            images = await pdfToImages(normalized.path, pageRange);
        } else {
            // Case for direct images (JPG, PNG, etc.)
            images = [normalized.path];
            log(`🖼️ Input detected as image. Using direct vision analysis.`);
        }

        const BATCH_SIZE = 10; // Increased for faster generation (monitor API rate limits)
        const allChildrenCode = new Array(images.length); // Pre-allocate to maintain order
        const allUsageData = []; // Track usage for cost calculation

        // Process in batches
        for (let i = 0; i < images.length; i += BATCH_SIZE) {
            const batch = images.slice(i, i + BATCH_SIZE);
            log(`... Processing Batch ${Math.floor(i / BATCH_SIZE) + 1} (Pages ${i + 1}-${Math.min(i + BATCH_SIZE, images.length)})...`);

            // Map batch to promises
            const promises = batch.map((imagePath, index) => {
                const pageNum = i + index + 1;
                return analyzePageV2(log, imagePath, pageNum, modelKey, options)
                    .then(result => {
                        log(`✅ Page ${pageNum} Analysis Complete`);
                        return { index: i + index, code: result.code, usage: result.usage };
                    })
                    .catch(err => {
                        log(`❌ Failed Page ${pageNum}: ${err.message}`);
                        return { index: i + index, code: null, usage: null }; // Handle error gracefully?
                    });
            });

            // Wait for ALL in this batch
            const results = await Promise.all(promises);

            // Store results in correct order and collect usage
            results.forEach(r => {
                if (r.code) allChildrenCode[r.index] = r.code;
                if (r.usage) allUsageData.push(r.usage);
            });

            // Rate Limit Delay between batches (if not last batch)
            if (i + BATCH_SIZE < images.length) {
                log("... Pausing 2s between batches...");
                await new Promise(r => setTimeout(r, 2000));
            }
        }

        // Filter out failed pages
        const validCode = allChildrenCode.filter(c => c !== null && c !== undefined);

        log("... Executing Generated Code...");
        const { executeGeminiCode } = require('./renderer_v2');
        const { Document, Packer, Paragraph, PageBreak } = require('docx');

        let finalChildren = [];
        // validCode is now array of strings? No, I updated it to be filter(c => c).
        // Wait, the batch logic returned { index, code }.
        // Let's check the 'validCode' definition in previous turn.
        // 'const validCode = allChildrenCode.filter(c => c !== null && c !== undefined);'
        // 'allChildrenCode' was populated with 'r.code' which IS THE STRING.
        // So we lost the index mapping in 'validCode'.

        // Fix: Iterate over allChildrenCode with index
        for (let i = 0; i < allChildrenCode.length; i++) {
            const code = allChildrenCode[i];
            if (!code) continue; // Failed download/analysis

            try {
                const pageChildren = executeGeminiCode(code);
                finalChildren = finalChildren.concat(pageChildren);

                // Add page break after each page (except the last one)
                if (addPageBreaks && i < allChildrenCode.length - 1) {
                    finalChildren.push(new Paragraph({ children: [new PageBreak()] }));
                }
            } catch (execErr) {
                log(`❌ Failed to render Page ${i + 1}: ${execErr.message}. Content skipped.`);
                // Optional: Delete cache for this page?
                // We don't have the image path here easily to delete the cache.
                // But at least the process won't crash entirely!
            }
        }

        // Generate Final Doc
        log("... Packing Document...");
        const doc = new Document({
            creator: "Gemini PDF Converter",
            description: "Converted from PDF",
            title: path.basename(inputFile, path.extname(inputFile)),
            // Word-compatible settings
            compatibility: {
                doNotExpandShiftReturn: true,
                growAutofit: true,
            },
            // Numbering configuration for proper Word lists
            numbering: {
                config: [
                    {
                        reference: "bullet-list",
                        levels: [{
                            level: 0,
                            format: LevelFormat.BULLET,
                            text: "•",
                            alignment: AlignmentType.LEFT,
                            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
                        }, {
                            level: 1,
                            format: LevelFormat.BULLET,
                            text: "○",
                            alignment: AlignmentType.LEFT,
                            style: { paragraph: { indent: { left: 1440, hanging: 360 } } }
                        }]
                    },
                    {
                        reference: "numbered-list",
                        levels: [{
                            level: 0,
                            format: LevelFormat.DECIMAL,
                            text: "%1.",
                            alignment: AlignmentType.LEFT,
                            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
                        }, {
                            level: 1,
                            format: LevelFormat.LOWER_LETTER,
                            text: "%2.",
                            alignment: AlignmentType.LEFT,
                            style: { paragraph: { indent: { left: 1440, hanging: 360 } } }
                        }]
                    }
                ]
            },
            sections: [{
                properties: {
                    page: {
                        size: {
                            // Letter size: 8.5in x 11in (in twips: 1 inch = 1440 twips)
                            width: 12240,  // 8.5 * 1440
                            height: 15840, // 11 * 1440
                        },
                        margin: {
                            top: 1440,    // 1 inch
                            right: 1440,  // 1 inch
                            bottom: 1440, // 1 inch
                            left: 1440,   // 1 inch
                        },
                    },
                },
                children: finalChildren
            }]
        });

        // Use original filename (remove extension, keep original name)
        const inputBasename = path.basename(inputFile, path.extname(inputFile));
        const outputPath = path.join(outputDir || path.dirname(inputFile), `${inputBasename}.docx`);
        const buffer = await Packer.toBuffer(doc);
        fs.writeFileSync(outputPath, buffer);

        log(`🎉 V2 Conversion Success! Saved to ${path.basename(outputPath)}`);

        // Calculate total cost
        const totalUsage = allUsageData.reduce(
            (acc, u) => ({
                inputTokens: acc.inputTokens + (u.inputTokens || 0),
                outputTokens: acc.outputTokens + (u.outputTokens || 0)
            }),
            { inputTokens: 0, outputTokens: 0 }
        );
        const cost = calculateCost(modelKey, totalUsage.inputTokens, totalUsage.outputTokens);
        log(`💰 Cost: ${formatCost(cost.totalCost)} (${totalUsage.inputTokens.toLocaleString()} in / ${totalUsage.outputTokens.toLocaleString()} out tokens)`);

        return { outputPath, cost };

    } catch (e) {
        log(`❌ Error: ${e.message}`);
        console.error(e);
        throw e;
    }
}

// CLI Entry
if (require.main === module) {
    const inputFile = process.argv[2];
    const pageRange = process.argv[3];
    // Pass null for callback because convertDocumentV2 already console.logs
    convertDocumentV2(inputFile, pageRange, null, null);
}

module.exports = { convertDocumentV2 };
