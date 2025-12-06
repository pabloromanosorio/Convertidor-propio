const path = require('path');
const fs = require('fs');
const pdfPoppler = require('pdf-poppler');
const { z } = require('zod');

const { execFile } = require('child_process');
const util = require('util');
const execFileAsync = util.promisify(execFile);

// --- A. IMAGE CONVERSION ---
async function pdfToImages(pdfPath) {
    const outDir = path.join(path.dirname(pdfPath), 'temp_frames');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    const baseName = path.basename(pdfPath, '.pdf');
    const outPrefix = path.join(outDir, baseName);

    console.log(`[pdfToImages] Starting conversion of "${pdfPath}" using native pdftoppm...`);
    const startTime = Date.now();

    try {
        // Construct args: pdftoppm -png -r 200 input.pdf output_prefix
        const args = ['-png', '-r', '200', pdfPath, outPrefix];
        
        // Try to find pdftoppm in common locations
        let binPath = 'pdftoppm';
        if (fs.existsSync('/opt/homebrew/bin/pdftoppm')) {
            binPath = '/opt/homebrew/bin/pdftoppm';
        } else if (fs.existsSync('/usr/local/bin/pdftoppm')) {
            binPath = '/usr/local/bin/pdftoppm';
        }

        console.log(`[pdfToImages] Executing: ${binPath} ${args.join(' ')}`);
        
        await execFileAsync(binPath, args);
        
    } catch (e) {
        console.error("[pdfToImages] Error during native conversion:", e);
        throw new Error(`Failed to convert PDF to images: ${e.message}`);
    }
    
    console.log(`[pdfToImages] Finished conversion in ${Date.now() - startTime}ms`);

    // Filter only the generated pngs for this file
    // pdftoppm adds -1.png, -2.png, etc. or -01.png depending on version/page count.
    return fs.readdirSync(outDir)
        .filter(file => file.startsWith(baseName) && file.endsWith('.png'))
        .map(file => path.join(outDir, file))
        .sort((a, b) => {
             // Smart sort to handle page-1 vs page-10
             return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
        });
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
