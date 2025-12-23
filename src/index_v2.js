require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { normalizeToPdf } = require('./input');
const { pdfToImages } = require('./middleware');
const { generateDocxV2, executeGeminiCode } = require('./renderer_v2');
const { generateWithVision, MODELS, getConfiguredProviders } = require('./providers');

// --- CONFIGURATION ---
const DEFAULT_MODEL = 'gemini-3-pro'; // Can be overridden per request

// Load the Manual
const DOCX_MANUAL = fs.readFileSync(path.join(__dirname, '../docs/docx-js.md'), 'utf-8');

const crypto = require('crypto');

// ... (imports)

// Cache Helper
function getCachePath(imagePath) {
    const hash = crypto.createHash('md5').update(imagePath).digest('hex');
    return path.join(__dirname, '../temp_code', `${hash}.js`);
}

async function analyzePageV2(log, imagePath, pageNum, modelKey = DEFAULT_MODEL) {
    const cachePath = getCachePath(imagePath + modelKey); // Include model in cache key

    // 1. Smart Cache Check
    if (fs.existsSync(cachePath)) {
        try {
            const cachedCode = fs.readFileSync(cachePath, 'utf-8');
            // Validate the cached code before trusting it
            executeGeminiCode(cachedCode);
            log(`⚡ [Page ${pageNum}] Cache Hit & Verified!`);
            return cachedCode;
        } catch (cacheErr) {
            log(`⚠️ [Page ${pageNum}] Cache found but corrupt/invalid (${cacheErr.message}). Regenerating...`);
            fs.unlinkSync(cachePath); // Auto-delete bad cache
        }
    }

    const imageBuffer = fs.readFileSync(imagePath).toString('base64');

    const prompt = `
    You are an expert developer using the 'docx' (JavaScript) library.
    Your task is to write a valid JavaScript code snippet that defines an array of document children (Paragraphs, Tables) to visually replicate the provided image.

    --- DOCUMENTATION (STRICTLY FOLLOW THESE RULES) ---
    ${DOCX_MANUAL}
    ---------------------------------------------------

    --- CRITICAL FORMATTING RULES ---
    1. **TEXT COLOR:** ALL TextRun objects MUST explicitly set 'color: "000000"'.
    2. **FONTS:** Use "Arial" for all text. Size 22 (11pt) body, larger for headers.
    3. **TABLES:** Use DXA (twips) widths with columnWidths array:
       - columnWidths: [4680, 4680] for 2 cols, [3120, 3120, 3120] for 3 cols
       - Cell width: { size: 4680, type: WidthType.DXA }
       - ALWAYS use ShadingType.CLEAR if setting cell shading
    4. **CELLS:** If shading needed, use: shading: { fill: "FFFFFF", type: ShadingType.CLEAR }
    5. **IMAGES/SIGNATURES:**
       - If you see a **SIGNATURE**, insert a Paragraph with text "[Signature]".
       - If you see a **SEAL/STAMP**, insert a Paragraph with text "[Seal: <text content of seal>]".
       - DO NOT create generic placeholders like "[Image]" for other graphics. Ignore them unless they contain readable text.
    6. **LISTS - CRITICAL:** Do NOT use numbering, numPr, bullet, or ListParagraph features.
       Instead, create lists manually using plain Paragraphs with the number/bullet as text:
       - For numbered: new Paragraph({ children: [new TextRun({ text: "1. First item", ... })] })
       - For bullets: new Paragraph({ children: [new TextRun({ text: "• Item", ... })] })
    
    --- CRITICAL TEXT EXTRACTION RULES (GLOBAL) ---
    1. **NO TRUNCATION:** NEVER shorten long text with "..." or ellipses. Write the FULL text exactly as it appears in the image.
    2. **VERBATIM:** Do not interpret, summarize, or correct grammar. act as a strict OCR machine for text content.
    3. **LONG STRINGS:** If a cell or line contains a long name (e.g. Course Title, Description), type the WHOLE string, no matter how long.

    --- CRITICAL TABLE HANDLING RULES ---
    1. **MERGED CELLS:** Identify headers or cells that span multiple columns or rows.
       - Use \`columnSpan: N\` (e.g., \`columnSpan: 2\`) for cells spreading horizontally.
       - Use \`rowSpan: N\` (e.g., \`rowSpan: 2\`) for cells spreading vertically.
       - Ensure the grid structure remains consistent.
    2. **ROW DISCIPLINE:**
       - First, COUNT the total number of rows visible in the table.
       - Create a TableRow for EVERY SINGLE ROW you counted.
       - DO NOT skip any rows, even if the table is very long.
    - If a table has 20 rows, your code MUST have exactly 20 TableRow objects
    - Double-check your row count before generating the code
    - Include ALL data cells, even if text is small or partially visible
    
    --- OUTPUT REQUIREMENTS ---
    1. Output ONLY valid JavaScript code. No explanation text outside code blocks.
    2. The code must evaluate to an ARRAY of 'docx' objects (Paragraph, Table, etc.).
    3. Assume all 'docx' classes (Paragraph, TextRun, Table, WidthType, AlignmentType, etc.) are globally available in scope. Do NOT import them.
    4. **RETURN FORMAT:**
       return [
          new Paragraph({ children: [ new TextRun({ text: "Text", color: "000000", font: "Arial" }) ] }),
          new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, ... })
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
            // Use unified provider API
            const code = await generateWithVision(modelKey, prompt, imageBuffer, log);

            // 3. VALIDATION STEP
            try {
                executeGeminiCode(code); // Try to compile/run it in sandbox
                // If successful:
                fs.writeFileSync(cachePath, code);
                log(`💾 [Page ${pageNum}] Code generated, verified, and saved.`);
                return code;
            } catch (validationErr) {
                throw new Error(`Generated code failed validation: ${validationErr.message}`);
            }

        } catch (e) {
            log(`❌ [Page ${pageNum}] Attempt ${attempts} failed: ${e.message}`);
            if (attempts === MAX_RETRIES) {
                log(`💀 [Page ${pageNum}] All attempts failed. Skipping page.`);
                return null; // Give up on this page so the doc can still generate
            }
            // Wait a bit before retry
            await new Promise(r => setTimeout(r, 2000));
        }
    }
}
async function convertDocumentV2(inputFile, pageRange, outputDir, logCallback, modelKey = DEFAULT_MODEL) {
    const log = (msg) => {
        console.log(msg);
        if (logCallback) logCallback(msg);
    };

    try {
        const modelName = MODELS[modelKey]?.name || modelKey;
        log(`🚀 [V2] Starting Code-Generation Conversion for ${inputFile}`);
        log(`📊 Model: ${modelName} | Pages: ${pageRange || 'All'}`);
        const pdfPath = await normalizeToPdf(inputFile);
        const images = await pdfToImages(pdfPath, pageRange);

        const BATCH_SIZE = 3; // Safe starting point for Paid Tier (approx 10 RPM limit)
        const allChildrenCode = new Array(images.length); // Pre-allocate to maintain order

        // Process in batches
        for (let i = 0; i < images.length; i += BATCH_SIZE) {
            const batch = images.slice(i, i + BATCH_SIZE);
            log(`... Processing Batch ${Math.floor(i / BATCH_SIZE) + 1} (Pages ${i + 1}-${Math.min(i + BATCH_SIZE, images.length)})...`);

            // Map batch to promises
            const promises = batch.map((imagePath, index) => {
                const pageNum = i + index + 1;
                return analyzePageV2(log, imagePath, pageNum, modelKey)
                    .then(code => {
                        log(`✅ Page ${pageNum} Analysis Complete`);
                        return { index: i + index, code };
                    })
                    .catch(err => {
                        log(`❌ Failed Page ${pageNum}: ${err.message}`);
                        return { index: i + index, code: null }; // Handle error gracefully?
                    });
            });

            // Wait for ALL in this batch
            const results = await Promise.all(promises);

            // Store results in correct order
            results.forEach(r => {
                if (r.code) allChildrenCode[r.index] = r.code;
            });

            // Rate Limit Delay between batches (if not last batch)
            if (i + BATCH_SIZE < images.length) {
                log("... Pausing 5s between batches...");
                await new Promise(r => setTimeout(r, 5000));
            }
        }

        // Filter out failed pages
        const validCode = allChildrenCode.filter(c => c !== null && c !== undefined);

        log("... Executing Generated Code...");
        const { executeGeminiCode } = require('./renderer_v2');
        const { Document, Packer } = require('docx');

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
                // Add a page break between pages?
                // finalChildren.push(new Paragraph({ children: [new PageBreak()] })); 
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

        // Use original filename (remove extension, add _converted suffix)
        const inputBasename = path.basename(inputFile, path.extname(inputFile));
        const outputPath = path.join(outputDir || path.dirname(inputFile), `${inputBasename}_converted.docx`);
        const buffer = await Packer.toBuffer(doc);
        fs.writeFileSync(outputPath, buffer);

        log(`🎉 V2 Conversion Success! Saved to ${path.basename(outputPath)}`);
        return outputPath;

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
