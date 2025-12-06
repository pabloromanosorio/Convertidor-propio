```javascript
return [
    // 1. DocuSign Header
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 2. Company Header (Table for alignment)
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
                                        size: 22,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE },
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
                                        size: 22,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE },
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

    // 3. ITEM IV Header
    new Paragraph({
        children: [
            new TextRun({
                text: "ITEM IV:",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
    }),

    // 4. Paragraph W
    new Paragraph({
        children: [
            new TextRun({
                text: "W. One (1) Stolle Specially Designed Fourteen (14) out (355ml) Cup Die Set complete with Stolle supplied carbide tooling for production of cups. Die set to incorporate ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Patented Progressive Piston (non-sequential forming or blanking)",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: " for reduction of press loads and vibrations and increased tool life.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // 5. Subheader IV
    new Paragraph({
        indent: { left: 720 }, // Indent ~0.5 inch
        children: [
            new TextRun({
                text: "Die set to include the following:",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),

    // 6. List for ITEM IV
    new Paragraph({
        text: "Pneumatic stock plate assemblies with anti-rotation piston retainer assemblies",
        bullet: { level: 0 },
        style: "ListParagraph", // Ensures standard list styling
    }),
    new Paragraph({
        text: "Gun drilled die set for removal of die holder stock plate air fittings",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Hard chrome plated stock plates",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Internal scrap cutter assembly",
        bullet: { level: 0 },
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({
                text: "Stolle’s patented ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Progressive Piston and Cylinder",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: " arrangement with S-7 shock steel components",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        text: "One (1) piece outer guide pin assemblies with automatic lubrication features",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "One (1) piece inner guide pin assemblies with automatic lubrication features",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Nylon entrance rails with stand-alone stock guides",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Complete set of carbide wear tools including cut edges, blank and draw pad.",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Hydraulic assist package on inner punch for installation of die",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Inner draw punch adapters",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Registered, fixed blank and draw die retainers aligned to outer die shoe concentric to within .0005”",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Die set designed and machined for .020” web F/B – L/R",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Cup markers for marking the sheet prior to the blank and draw operation",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Die set machined for non-round cut edges and blank and draw dies",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Necessary mounting bolts and fasteners",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Indicating fixture",
        bullet: { level: 0 },
    }),
    new Paragraph({ text: "" }),

    // 7. Paragraph X
    new Paragraph({
        children: [
            new TextRun({
                text: "X. One (1) lot Fourteen (14) out air cup conveyor package with bottom mount sensors",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // 8. ITEM V Header
    new Paragraph({
        children: [
            new TextRun({
                text: "ITEM V:",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
    }),

    // 9. Paragraph Y
    new Paragraph({
        children: [
            new TextRun({
                text: "Y. One (1) Stolle Specially Designed Thirteen (13) out (473ml) Standard Cup Die Set complete with Stolle supplied carbide tooling for production of cups. Die set to incorporate ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Patented Progressive Piston (non-sequential forming or blanking)",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: " for reduction of press loads and vibrations and increased tool life.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // 10. Subheader V
    new Paragraph({
        indent: { left: 720 },
        children: [
            new TextRun({
                text: "Die set to include the following:",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),

    // 11. List for ITEM V
    new Paragraph({
        text: "Pneumatic stock plate assemblies with anti-rotation piston retainer assemblies",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Gun drilled die set for removal of die holder stock plate air fittings",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Hard chrome plated stock plates",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Internal scrap cutter assembly",
        bullet: { level: 0 },
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({
                text: "Stolle’s patented ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Progressive Piston and Cylinder",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: " arrangement with S-7 shock steel components",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 12. Signature Placeholder
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 13. Footer Table (with top border line)
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
                                        size: 22,
                                        color: "000000",
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
                                        text: "PAGE NO. 4",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
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