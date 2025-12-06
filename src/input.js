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

async function normalizeToPdf(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.pdf') return filePath;

    if (ext === '.docx' || ext === '.doc') {
        if (!checkLibreOffice()) {
             // Fallback: Check if we are on macOS and can maybe use QuickLook or just fail gracefully
             console.warn("⚠️  LibreOffice (soffice) not found. Cannot convert DOCX to PDF.");
             console.warn("👉 Please install LibreOffice: 'brew install --cask libreoffice'");
             throw new Error("LibreOffice not found. Please convert your DOCX to PDF manually or install LibreOffice.");
        }

        console.log("🔄 Normalizing DOCX to PDF for Vision analysis...");
        const docxBuf = await fs.readFile(filePath);
        const pdfBuf = await libre.convertAsync(docxBuf, '.pdf', undefined);
        const outPath = filePath.replace(ext, '.pdf');
        await fs.writeFile(outPath, pdfBuf);
        return outPath;
    }
    throw new Error("Unsupported file type. Use PDF or DOCX.");
}

module.exports = { normalizeToPdf };
