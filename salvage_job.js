const fs = require('fs');
const path = require('path');
const { Document, Packer } = require('docx');
const { executeGeminiCode } = require('./src/renderer_v2');

async function salvage() {
    const cacheDir = path.join(__dirname, 'temp_code');
    if (!fs.existsSync(cacheDir)) {
        console.error("No temp_code directory found!");
        return;
    }

    console.log("🔍 Scanning temp_code for cached pages...");
    const files = fs.readdirSync(cacheDir).filter(f => f.endsWith('.js'));
    
    if (files.length === 0) {
        console.error("No cached code files found.");
        return;
    }

    console.log(`found ${files.length} code snippets.`);

    // We need to sort them to make sense.
    // Problem: The filenames are HASHES. We lost the page order!
    // "hash.js" tells us nothing about page number.
    // 
    // CRITICAL REALIZATION: Without the mapping of "Page 1 -> Hash", we cannot assemble the pages in order.
    // 
    // EXCEPT: We might be able to re-derive the hash if we have the images.
    // Let's try to match images in 'uploads/temp_frames' to the hashes.

    const framesDir = path.join(__dirname, 'uploads/temp_frames');
    const images = fs.readdirSync(framesDir).filter(f => f.endsWith('.png'));
    
    // Group images by document (prefix)
    // We'll assume the most recent file is the one we want.
    // Sort by time?
    const latestImage = images.map(f => ({ name: f, time: fs.statSync(path.join(framesDir, f)).mtime.getTime() }))
                              .sort((a, b) => b.time - a.time)[0];
    
    if (!latestImage) {
        console.error("No images found to reconstruct order.");
        return;
    }

    // Extract base name (e.g. "1234-DocName-46.png" -> "1234-DocName")
    const baseName = latestImage.name.substring(0, latestImage.name.lastIndexOf('-'));
    console.log(`🎯 Reconstructing document from images matching: ${baseName}`);

    const sortedImages = images
        .filter(f => f.startsWith(baseName))
        .sort((a, b) => {
            const getNum = (n) => parseInt(n.match(/-(\d+)\.png$/)[1]);
            return getNum(a) - getNum(b);
        });

    const crypto = require('crypto');
    let finalChildren = [];
    let successCount = 0;

    for (const imgFile of sortedImages) {
        const imgPath = path.join(framesDir, imgFile);
        const hash = crypto.createHash('md5').update(imgPath).digest('hex');
        const codePath = path.join(cacheDir, `${hash}.js`);

        if (fs.existsSync(codePath)) {
            try {
                const code = fs.readFileSync(codePath, 'utf-8');
                const children = executeGeminiCode(code);
                finalChildren = finalChildren.concat(children);
                successCount++;
                process.stdout.write('.');
            } catch (e) {
                console.error(`\n❌ Failed to process ${imgFile} (Cache Corrupt):`, e.message);
            }
        } else {
            // Missing page
            process.stdout.write('X');
        }
    }

    console.log(`\n✅ Recovered ${successCount} / ${sortedImages.length} pages.`);

    if (finalChildren.length > 0) {
        const doc = new Document({
            sections: [{ children: finalChildren }]
        });
        const buffer = await Packer.toBuffer(doc);
        const outName = `Salvaged_${Date.now()}.docx`;
        fs.writeFileSync(outName, buffer);
        console.log(`🎉 Saved to ${outName}`);
    } else {
        console.log("⚠️ No valid pages to save.");
    }
}

salvage();
