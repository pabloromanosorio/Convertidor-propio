const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle, ShadingType } = require('docx');
const fs = require('fs');

function generateDocx(json, outputPath) {
    const children = [];

    json.blocks.forEach(block => {
        if (block.type === 'paragraph' || block.type === 'generic_zone' || block.type === 'list_item') {
            
            let runsData = block.runs || [];
            
            // Handle Generic Zones / Signatures
            if (block.type === 'generic_zone') {
                // If prompt returns [Signature], keep it. If generic content, force black.
                runsData = [{ 
                    text: block.content, 
                    bold: true, 
                    size: 22 // 11pt
                }];
            }

            const runs = runsData.map(r => new TextRun({
                text: r.text,
                bold: r.bold,
                italics: r.italic,
                underline: r.underline ? { type: "single" } : undefined,
                size: r.size ? r.size : 22, // Default 11pt (22 half-points)
                font: "Arial",
                color: "000000" // Force Black
            }));

            // Handle Lists Prefix
            if (block.type === 'list_item') {
                 if (block.list_type === 'bullet') {
                     runs.unshift(new TextRun({ text: "• ", font: "Arial", color: "000000" })); 
                 } else {
                     runs.unshift(new TextRun({ text: "1. ", font: "Arial", color: "000000" })); 
                 }
            }

            children.push(new Paragraph({
                alignment: AlignmentType[block.alignment?.toUpperCase()] || AlignmentType.LEFT,
                indent: { left: (block.indent_level || (block.level || 0)) * 720 },
                children: runs,
                spacing: { after: block.spacing_after ? 200 : 0 }
            }));
        } 
        else if (block.type === 'table') {
            const pageWidth = 9000; // Approx printable width in DXA
            const totalRatio = block.column_ratios.reduce((a, b) => a + b, 0);
            
            const rows = block.rows.map(row => new TableRow({
                children: row.cells.map((cell, idx) => {
                    const ratio = block.column_ratios[idx] || 1;
                    const cellWidth = (ratio / totalRatio) * pageWidth;
                    
                    return new TableCell({
                        width: { size: cellWidth, type: WidthType.DXA },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, // Force Transparent/White
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        },
                        children: [new Paragraph({ 
                            children: [new TextRun({
                                text: cell.content,
                                font: "Arial",
                                color: "000000",
                                size: 22
                            })] 
                        })]
                    });
                })
            }));
            
            children.push(new Table({ rows }));
        }
    });

    const doc = new Document({ sections: [{ children }] });
    Packer.toBuffer(doc).then(buffer => fs.writeFileSync(outputPath, buffer));
    console.log(`✅ Saved to ${outputPath}`);
}

module.exports = { generateDocx };
