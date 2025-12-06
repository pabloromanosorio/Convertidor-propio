```javascript
return [
    // 1. DocuSign ID (Small text at top)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // 2. Header Table (Company Names)
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 400 } }), // Spacer

    // 3. ITEM II.
    new Paragraph({
        children: [
            new TextRun({
                text: "ITEM II.",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
        spacing: { after: 200 },
    }),

    // 4. Paragraph S.
    new Paragraph({
        children: [
            new TextRun({
                text: "S. One (1) Stolle Specially Designed Sixteen (16) out (269ml) Fit Cup Die Set complete with Stolle supplied carbide tooling for production of cups. Die set to incorporate ",
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
        spacing: { after: 400 },
    }),

    // 5. Subheader "Die set to include..."
    new Paragraph({
        children: [
            new TextRun({
                text: "Die set to include the following:",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
        spacing: { after: 200 },
    }),

    // 6. List Items (Using bullet configuration as per rules)
    // Item 1
    new Paragraph({
        children: [
            new TextRun({
                text: "Pneumatic stock plate assemblies with anti-rotation piston retainer assemblies",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
        spacing: { after: 200 },
    }),

    // Item 2
    new Paragraph({
        children: [
            new TextRun({
                text: "Gun drilled die set for removal of die holder stock plate air fittings",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 3
    new Paragraph({
        children: [
            new TextRun({
                text: "Hard chrome plated stock plates",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 4
    new Paragraph({
        children: [
            new TextRun({
                text: "Internal scrap cutter assembly",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 5 (Contains Bold)
    new Paragraph({
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
        bullet: { level: 0 },
    }),

    // Item 6
    new Paragraph({
        children: [
            new TextRun({
                text: "One (1) piece outer guide pin assemblies with automatic lubrication features",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 7
    new Paragraph({
        children: [
            new TextRun({
                text: "One (1) piece inner guide pin assemblies with automatic lubrication features",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 8
    new Paragraph({
        children: [
            new TextRun({
                text: "Nylon entrance rails with stand-alone stock guides",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 9
    new Paragraph({
        children: [
            new TextRun({
                text: "Complete set of carbide wear tools including cut edges, blank and draw pad.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 10
    new Paragraph({
        children: [
            new TextRun({
                text: "Hydraulic assist package on inner punch for installation of die",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 11
    new Paragraph({
        children: [
            new TextRun({
                text: "Inner draw punch adapters",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 12
    new Paragraph({
        children: [
            new TextRun({
                text: "Registered, fixed blank and draw die retainers aligned to outer die shoe concentric to within .0005”",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 13
    new Paragraph({
        children: [
            new TextRun({
                text: "Die set designed and machined for .020” web F/B – L/R",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 14
    new Paragraph({
        children: [
            new TextRun({
                text: "Cup markers for marking the sheet prior to the blank and draw operation",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 15
    new Paragraph({
        children: [
            new TextRun({
                text: "Die set machined for non-round cut edges and blank and draw dies",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 16
    new Paragraph({
        children: [
            new TextRun({
                text: "Necessary mounting bolts and fasteners",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // Item 17
    new Paragraph({
        children: [
            new TextRun({
                text: "Indicating fixture",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
        spacing: { after: 400 },
    }),

    // 7. Paragraph T.
    new Paragraph({
        children: [
            new TextRun({
                text: "T. One (1) lot Sixteen (16) out air cup conveyor package with bottom mount sensors",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 800 },
    }),

    // 8. Signature Placeholder
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
        spacing: { after: 200 },
    }),

    // 9. Footer Table (Line and Text)
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
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        verticalAlign: "center",
                        margins: { top: 200 }, // Space between line and text
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 2",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        verticalAlign: "center",
                        margins: { top: 200 },
                    }),
                ],
            }),
        ],
    }),
];
```