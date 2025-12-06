```javascript
return [
    // 1. DocuSign ID (Top Left, small font)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // Smaller than body (8pt)
                color: "000000",
            }),
        ],
    }),

    // 2. Header: Company Names (Left and Right aligned on same line)
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

    // Spacer
    new Paragraph({ text: "" }),

    // 3. ITEM III
    new Paragraph({
        children: [
            new TextRun({
                text: "ITEM III:",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
    }),

    // 4. Paragraph U (Mixed formatting)
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "U. One (1) Stolle Specially Designed Fifteen (15) out (33cl) Standard Cup Die Set complete with Stolle supplied carbide tooling for production of cups. Die set to incorporate ",
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

    // Spacer
    new Paragraph({ text: "" }),

    // 5. Sub-header (Underlined)
    new Paragraph({
        indent: { left: 720 }, // Indented to match list visual
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

    // 6. List Items (Using bullet configuration as per rules)
    new Paragraph({
        text: "Pneumatic stock plate assemblies with anti-rotation piston retainer assemblies",
        bullet: { level: 0 },
        children: [new TextRun({ text: "Pneumatic stock plate assemblies with anti-rotation piston retainer assemblies", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Gun drilled die set for removal of die holder stock plate air fittings", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Hard chrome plated stock plates", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Internal scrap cutter assembly", font: "Arial", size: 22, color: "000000" })],
    }),
    // List item with bold text
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Stolle’s patented ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Progressive Piston and Cylinder", font: "Arial", size: 22, color: "000000", bold: true }),
            new TextRun({ text: " arrangement with S-7 shock steel components", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "One (1) piece outer guide pin assemblies with automatic lubrication features", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "One (1) piece inner guide pin assemblies with automatic lubrication features", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Nylon entrance rails with stand-alone stock guides", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Complete set of carbide wear tools including cut edges, blank and draw pad.", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Hydraulic assist package on inner punch for installation of die", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Inner draw punch adapters", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Registered, fixed blank and draw die retainers aligned to outer die shoe concentric to within .0005”", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Die set designed and machined for .020” web F/B – L/R", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Cup markers for marking the sheet prior to the blank and draw operation", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Die set machined for non-round cut edges and blank and draw dies", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Necessary mounting bolts and fasteners", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Indicating fixture", font: "Arial", size: 22, color: "000000" })],
    }),

    // Spacer
    new Paragraph({ text: "" }),

    // 7. Paragraph V
    new Paragraph({
        children: [
            new TextRun({
                text: "V.  One (1) lot Fifteen (15) out air cup conveyor package with bottom mount sensors",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Spacer to push footer down (simulated)
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 8. Signature Placeholder (Right aligned)
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

    // 9. Footer Table (Line and Text)
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
                        // Top border creates the horizontal line
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                        },
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
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 3",
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