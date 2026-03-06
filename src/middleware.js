const path = require('path');
const fs = require('fs');
const pdfPoppler = require('pdf-poppler');
const { z } = require('zod');

const { execFile } = require('child_process');
const util = require('util');
const execFileAsync = util.promisify(execFile);

// --- A. IMAGE CONVERSION ---
async function pdfToImages(pdfPath, pageRange) {
    const outDir = path.join(path.dirname(pdfPath), 'temp_frames');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    const baseName = path.basename(pdfPath, '.pdf');
    const outPrefix = path.join(outDir, baseName);

    // 1. Cleanup old frames for this specific BASENAME to avoid "dirty" page counts
    const existingOldFrames = fs.readdirSync(outDir)
        .filter(file => file.startsWith(baseName + '-') && file.endsWith('.png'));

    if (existingOldFrames.length > 0) {
        console.log(`[pdfToImages] Cleaning up ${existingOldFrames.length} old frames for "${baseName}"`);
        existingOldFrames.forEach(f => fs.unlinkSync(path.join(outDir, f)));
    }

    console.log(`[pdfToImages] Starting conversion of "${pdfPath}" using native pdftoppm...`);
    const startTime = Date.now();

    try {
        // ... (pdftoppm execution)
        const args = ['-png', '-r', '200', pdfPath, outPrefix];

        let binPath = 'pdftoppm';
        if (fs.existsSync('/opt/homebrew/bin/pdftoppm')) binPath = '/opt/homebrew/bin/pdftoppm';
        else if (fs.existsSync('/usr/local/bin/pdftoppm')) binPath = '/usr/local/bin/pdftoppm';

        console.log(`[pdfToImages] Executing: ${binPath} ${args.join(' ')}`);
        await execFileAsync(binPath, args);

    } catch (e) {
        console.error("[pdfToImages] Error during native conversion:", e);
        throw new Error(`Failed to convert PDF to images: ${e.message}`);
    }

    console.log(`[pdfToImages] Finished conversion in ${Date.now() - startTime}ms`);

    // 2. STRICT matching to ensure we don't pick up unrelated files (e.g. "1.pdf" matching "10.pdf" or "176...")
    const pageRegex = new RegExp(`^${baseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-\\d+\\.png$`);

    let allFiles = fs.readdirSync(outDir)
        .filter(file => pageRegex.test(file))
        .map(file => path.join(outDir, file));

    // Parse Page Numbers from filenames
    const fileMap = allFiles.map(f => {
        const match = f.match(/-(\d+)\.png$/);
        return {
            path: f,
            page: match ? parseInt(match[1]) : -1
        };
    }).filter(item => item.page !== -1)
        .sort((a, b) => a.page - b.page);

    // Filter by Page Range if provided
    if (pageRange) {
        const pagesToKeep = new Set();
        // Parse "1-3, 5"
        const parts = pageRange.split(',').map(p => p.trim());
        parts.forEach(part => {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(n => parseInt(n));
                for (let i = start; i <= end; i++) pagesToKeep.add(i);
            } else {
                pagesToKeep.add(parseInt(part));
            }
        });

        console.log(`[pdfToImages] Filtering pages: ${Array.from(pagesToKeep).join(', ')}`);
        return fileMap.filter(item => pagesToKeep.has(item.page)).map(item => item.path);
    }

    return fileMap.map(item => item.path);
}

// --- B. ZOD SCHEMA (The "Contract") ---
// Enhanced schema to include Lists
const LayoutSchema = z.object({
    _layout_reasoning: z.string().describe("Internal monologue about structure"),
    document_settings: z.object({
        orientation: z.enum(['portrait', 'landscape']).default('portrait')
    }),
    blocks: z.array(z.discriminatedUnion("type", [
        // Paragraph Block
        z.object({
            type: z.literal("paragraph"),
            alignment: z.enum(["left", "center", "right", "justify"]).optional(),
            indent_level: z.number().default(0),
            spacing_after: z.boolean().optional(),
            runs: z.array(z.object({
                text: z.string(),
                bold: z.boolean().optional(),
                italic: z.boolean().optional(),
                underline: z.boolean().optional(),
                size: z.number().optional() // Estimate: 24 = 12pt
            }))
        }),
        // List Block (Bulleted/Numbered)
        z.object({
            type: z.literal("list_item"),
            // Relaxed: Allow any string, renderer handles mapping
            list_type: z.string().default("bullet"),
            level: z.number().default(0), // Indentation level
            runs: z.array(z.object({
                text: z.string(),
                bold: z.boolean().optional(),
                italic: z.boolean().optional(),
                underline: z.boolean().optional(),
                size: z.number().optional()
            }))
        }),
        // Table Block
        z.object({
            type: z.literal("table"),
            column_ratios: z.array(z.number()), // e.g. [1, 3]
            rows: z.array(z.object({
                is_header: z.boolean().optional(),
                cells: z.array(z.object({
                    content: z.string(),
                    shading: z.enum(["clear", "gray"]).optional(),
                    align: z.enum(["left", "center", "right"]).optional()
                }))
            }))
        }),
        // Generic Zone (Escape Hatch)
        z.object({
            type: z.literal("generic_zone"),
            content: z.string(),
            visual_note: z.string().optional()
        })
    ]))
});

module.exports = { pdfToImages, LayoutSchema };
