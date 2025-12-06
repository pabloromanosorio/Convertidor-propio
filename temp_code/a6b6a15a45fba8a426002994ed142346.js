```javascript
return [
    // 1. Top DocuSign ID
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                color: "000000",
                size: 16, // Smaller size for ID
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 2. Header Table (Stolle / Canpack)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 3. ITEM II Header
    new Paragraph({
        indent: { left: 720 }, // Indent
        children: [
            new TextRun({
                text: "ITEM II.",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
            }),
        ],
    }),

    // 4. Paragraph S
    new Paragraph({
        indent: { left: 720, hanging: 360 }, // Hanging indent for "S."
        children: [
            new TextRun({
                text: "S. One (1) Stolle Specially Designed Sixteen (16) out (269ml) Fit Cup Die Set complete with Stolle supplied carbide tooling for production of cups. Die set to incorporate ",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
            new TextRun({
                text: "Patented Progressive Piston (non-sequential forming or blanking)",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
            }),
            new TextRun({
                text: " for reduction of press loads and vibrations and increased tool life.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 5. Subheader "Die set to include..."
    new Paragraph({
        indent: { left: 1080 }, // Indented further
        children: [
            new TextRun({
                text: "Die set to include the following:",
                font: "Arial",
                color: "000000",
                size: 22,
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
    }),

    // 6. List Items (Using Hyphens visually as per image)
    // Note: Using Paragraphs with hanging indent to simulate the hyphen list style shown in the image
    // strictly adhering to "Arial", "000000", size 22.
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Pneumatic stock plate assemblies with anti-rotation piston retainer assemblies", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({ text: "" }), // Slight gap shown in image

    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Gun drilled die set for removal of die holder stock plate air fittings", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Hard chrome plated stock plates", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Internal scrap cutter assembly", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Stolle's patented ", font: "Arial", color: "000000", size: 22 }),
            new TextRun({ text: "Progressive Piston and Cylinder", font: "Arial", color: "000000", size: 22, bold: true }),
            new TextRun({ text: " arrangement with S-7 shock steel components", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- One (1) piece outer guide pin assemblies with automatic lubrication features", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- One (1) piece inner guide pin assemblies with automatic lubrication features", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Nylon entrance rails with stand-alone stock guides", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Complete set of carbide wear tools including cut edges, blank and draw pad.", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Hydraulic assist package on inner punch for installation of die", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Inner draw punch adapters", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Registered, fixed blank and draw die retainers aligned to outer die shoe concentric to within .0005”", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Die set designed and machined for .020” web F/B – L/R", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Cup markers for marking the sheet prior to the blank and draw operation", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Die set machined for non-round cut edges and blank and draw dies", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Necessary mounting bolts and fasteners", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "- Indicating fixture", font: "Arial", color: "000000", size: 22 }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 7. Paragraph T
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({
                text: "T. One (1) lot Sixteen (16) out air cup conveyor package with bottom mount sensors",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    // 8. Vertical Spacing to push footer down
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 9. Signature Image Placeholder (Right Aligned)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    // 10. Footer Table (Enclosure / Page No)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // The horizontal line
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 2",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),
];
```