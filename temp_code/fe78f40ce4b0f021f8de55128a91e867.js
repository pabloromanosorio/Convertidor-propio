```javascript
return [
    // --- Header: University Name ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "The Pennsylvania State University",
                font: "Arial",
                size: 64, // Large header size (~32pt)
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- Seal Placeholder ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "[Seal: The Pennsylvania State University 1855]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- Intro Text ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "By Authority of the Board of Trustees",
                font: "Arial",
                size: 24, // ~12pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "and Upon Recommendation of the Faculty",
                font: "Arial",
                size: 24,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "Hereby Confers Upon",
                font: "Arial",
                size: 24,
                color: "000000",
            }),
        ],
    }),

    // --- Student Name ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "Maria Alejandra Diaz Moreno",
                font: "Arial",
                size: 48, // Large name (~24pt)
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- Degree Intro ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "the degree of",
                font: "Arial",
                size: 24,
                color: "000000",
            }),
        ],
    }),

    // --- Degree Title ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "Master of Laws",
                font: "Arial",
                size: 40, // ~20pt
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- School Name ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Penn State Law",
                font: "Arial",
                size: 28, // ~14pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [
            new TextRun({
                text: "The Dickinson Schools of Law",
                font: "Arial",
                size: 28,
                color: "000000",
            }),
        ],
    }),

    // --- Closing Statement ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [
            new TextRun({
                text: "In Testimony Whereof the Undersigned Have Subscribed Their Names",
                font: "Arial",
                size: 24,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 800 }, // Large space before signatures
        children: [
            new TextRun({
                text: "and Affixed the Seal of the University this Month of May, 2025.",
                font: "Arial",
                size: 24,
                color: "000000",
            }),
        ],
    }),

    // --- Signatures Table ---
    new Table({
        columnWidths: [3120, 3120, 3120], // 3 Equal columns for signatures
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    // --- Left Signature: Chair ---
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            bottom: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            left: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            right: { style: BorderStyle.NIL, size: 0, color: "auto" },
                        },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "[Signature]",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        italics: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "David Kleppinger",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Chair of the Board of Trustees",
                                        font: "Arial",
                                        size: 18,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    // --- Center Signature: President ---
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            bottom: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            left: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            right: { style: BorderStyle.NIL, size: 0, color: "auto" },
                        },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "[Signature]",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        italics: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Neeli Bendapudi",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "President of the University",
                                        font: "Arial",
                                        size: 18,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    // --- Right Signature: Provost ---
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            bottom: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            left: { style: BorderStyle.NIL, size: 0, color: "auto" },
                            right: { style: BorderStyle.NIL, size: 0, color: "auto" },
                        },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "[Signature]",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        italics: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Tracy L. Langkilde",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Interim Executive Vice President",
                                        font: "Arial",
                                        size: 18,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "and Provost of the University",
                                        font: "Arial",
                                        size: 18,
                                        color: "000000",
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