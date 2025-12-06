require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
const { normalizeToPdf } = require('./input');
const { pdfToImages } = require('./middleware');
const { generateDocxV2, executeGeminiCode } = require('./renderer_v2');

// --- CONFIGURATION ---
const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, apiVersion: "v1alpha" });
const MODEL_NAME = "gemini-3-pro-preview"; 

// Load the Manual
const DOCX_MANUAL = fs.readFileSync(path.join(__dirname, '../docs/docx-js.md'), 'utf-8');

const crypto = require('crypto');

// ... (imports)

// Cache Helper
function getCachePath(imagePath) {
    const hash = crypto.createHash('md5').update(imagePath).digest('hex');
    return path.join(__dirname, '../temp_code', `${hash}.js`);
}

async function analyzePageV2(log, imagePath, pageNum) {
    const cachePath = getCachePath(imagePath);
    
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
    3. **TABLES:** Use DXA (twips) for widths, NEVER use WidthType.PERCENTAGE:
       - Table: width: { size: 9026, type: WidthType.DXA } (full page)
       - Cells: 4513 (half), 3009 (third), 6017 (two-thirds), 2256 (quarter)
    4. **CELLS:** Do NOT set shading/fill for cells. Keep them transparent.
    5. **IMAGES:** If you see an image, insert a placeholder Paragraph "[IMAGE placeholder]".
    
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
    
    // 2. Auto-Retry Loop (Self-Healing)
    let attempts = 0;
    const MAX_RETRIES = 3;

    while (attempts < MAX_RETRIES) {
        attempts++;
        log(`🧠 [Page ${pageNum}] [Req: ${requestId}] Sending to Gemini 3.0 (Attempt ${attempts}/${MAX_RETRIES})...`);
        
        try {
            const response = await client.models.generateContent({
                model: MODEL_NAME,
                contents: [
                    { 
                        role: "user", 
                        parts: [
                            { text: prompt }, 
                            { 
                                inlineData: { mimeType: "image/png", data: imageBuffer }, 
                                mediaResolution: { level: "media_resolution_medium" } 
                            }
                        ]
                    }
                ],
                config: {
                    thinkingConfig: { 
                        includeThoughts: true,
                        thinkingLevel: "HIGH"
                    },
                    temperature: 0.1 + (attempts * 0.1) // Increase temp slightly on retries to get different results
                }
            });

            const candidate = response.candidates[0];
            // Find non-thought part
            let textPart = candidate.content.parts.find(p => !p.thought);
            if (!textPart) textPart = candidate.content.parts[candidate.content.parts.length - 1];
            
            const code = textPart.text;

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
async function convertDocumentV2(inputFile, pageRange, outputDir, logCallback) {
    const log = (msg) => {
        console.log(msg);
        if (logCallback) logCallback(msg);
    };

    try {
        log(`🚀 [V2] Starting Code-Generation Conversion for ${inputFile} (Pages: ${pageRange || 'All'})...`);
        const pdfPath = await normalizeToPdf(inputFile);
        const images = await pdfToImages(pdfPath, pageRange);
        
        const BATCH_SIZE = 3; // Safe starting point for Paid Tier (approx 10 RPM limit)
        const allChildrenCode = new Array(images.length); // Pre-allocate to maintain order

        // Process in batches
        for (let i = 0; i < images.length; i += BATCH_SIZE) {
            const batch = images.slice(i, i + BATCH_SIZE);
            log(`... Processing Batch ${Math.floor(i/BATCH_SIZE) + 1} (Pages ${i+1}-${Math.min(i+BATCH_SIZE, images.length)})...`);

            // Map batch to promises
            const promises = batch.map((imagePath, index) => {
                const pageNum = i + index + 1;
                return analyzePageV2(log, imagePath, pageNum)
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
                log(`❌ Failed to render Page ${i+1}: ${execErr.message}. Content skipped.`);
                // Optional: Delete cache for this page?
                // We don't have the image path here easily to delete the cache.
                // But at least the process won't crash entirely!
            }
        }

        // Generate Final Doc
        log("... Packing Document...");
        const doc = new Document({
            sections: [{
                children: finalChildren
            }]
        });

        const timestamp = Date.now();
        const outputPath = path.join(outputDir || path.dirname(inputFile), `Converted_V2_${timestamp}.docx`);
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
