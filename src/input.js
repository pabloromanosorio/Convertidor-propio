const path = require('path');
const fs = require('fs').promises;
const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);
const { execSync } = require('child_process');

function checkLibreOffice() {
    try {
        // Check for soffice command (macOS/Linux)
        execSync('soffice --version', { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
}

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.tiff', '.bmp'];

async function normalizeInput(filePath) {
    const ext = path.extname(filePath).toLowerCase();

    // PDF is already in standard format
    if (ext === '.pdf') return { path: filePath, type: 'pdf' };

    // Images are accepted directly
    if (IMAGE_EXTENSIONS.includes(ext)) {
        return { path: filePath, type: 'image' };
    }

    // DOC/DOCX requires conversion to PDF first
    if (ext === '.docx' || ext === '.doc') {
        if (!checkLibreOffice()) {
            console.warn("⚠️  LibreOffice (soffice) not found. Cannot convert DOCX to PDF.");
            throw new Error("LibreOffice not found. Please convert your DOCX to PDF manually or install LibreOffice.");
        }

        console.log("🔄 Normalizing DOCX to PDF for Vision analysis...");
        const docxBuf = await fs.readFile(filePath);
        const pdfBuf = await libre.convertAsync(docxBuf, '.pdf', undefined);
        const outPath = filePath.replace(ext, '.pdf');
        await fs.writeFile(outPath, pdfBuf);
        return { path: outPath, type: 'pdf' };
    }

    throw new Error(`Unsupported file type (${ext}). Use PDF, DOCX, or Images (${IMAGE_EXTENSIONS.join(', ')}).`);
}

module.exports = { normalizeInput };
