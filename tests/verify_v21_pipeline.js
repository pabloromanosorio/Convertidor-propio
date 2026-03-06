const { convertToXliff, extractXliffSegments, mergeXliffTranslations, convertToDocx, validateXliff } = require('../src/xliff/xliff_handler');
const fs = require('fs');
const path = require('path');

async function verifyBulletproofPipeline() {
    const docxPath = path.join(__dirname, 'xliff_test_input.docx');
    const tempDir = path.join(__dirname, 'v21_test');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    console.log("--- STEP 1: Conversion to XLIFF 2.1 ---");
    const xliffPath = convertToXliff(docxPath, tempDir, 'en');
    console.log(`Created: ${xliffPath}`);

    console.log("\n--- STEP 2: Extraction ---");
    const segments = extractXliffSegments(xliffPath);
    console.log(`Extracted ${segments.length} segments.`);
    segments.forEach(s => console.log(`[${s.id}] Source: ${s.source}`));

    console.log("\n--- STEP 3: Simulated Translation (preserving tags) ---");
    segments.forEach(s => {
        // Simple "translation" that preserves <ph> tags
        s.target = `[TRADUCIDO] ${s.source}`;
    });

    console.log("\n--- STEP 4: Merging ---");
    mergeXliffTranslations(xliffPath, segments);
    console.log("Merged translations into XLIFF.");

    console.log("\n--- STEP 5: Validation ---");
    const isValid = validateXliff(xliffPath);
    console.log(`Is XLIFF valid? ${isValid}`);

    console.log("\n--- STEP 6: Conversion back to DOCX ---");
    const outPath = path.join(tempDir, 'output_v21.docx');
    convertToDocx(xliffPath, outPath);
    console.log(`Created: ${outPath}`);

    if (fs.existsSync(outPath)) {
        console.log("\n✅ Pipeline SUCCESS");
    } else {
        console.log("\n❌ Pipeline FAILED");
    }
}

verifyBulletproofPipeline().catch(console.error);
