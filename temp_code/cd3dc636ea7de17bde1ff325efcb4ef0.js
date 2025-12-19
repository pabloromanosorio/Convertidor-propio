```javascript
return [
    // --- Header Section ---
    // Top disclaimer text
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "A black and white copy of this document is not official.",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
    }),
    // Header Image / Logo Placeholder
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "[IMAGE placeholder: State of Florida Graphic]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    // "State of Florida" (Approximated as text since arc text is not standard in basic docx paragraphs)
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 100, after: 100 },
        children: [
            new TextRun({
                text: "State of Florida",
                font: "Arial",
                bold: true,
                size: 48, // 24pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "Department of State",
                font: "Arial",
                bold: true,
                size: 28, // 14pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [
            new TextRun({
                text: "APOSTILLE",
                font: "Arial",
                bold: true,
                size: 36, // 18pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "(Convention de La Haye du 5 octobre 1961)",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
    }),

    // --- Item 1 ---
    new Paragraph({
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "1. Country:   ",
                font: "Arial",
                bold: true,
                size: 24,
                color: "000000",
            }),
            new TextRun({
                text: "United States of America",
                font: "Arial",
                bold: true,
                size: 24,
                color: "000000",
            }),
        ],
    }),

    // --- "This public document" ---
    new Paragraph({
        spacing: { after: 200 },
        indent: { left: 720 }, // Indent to align visually
        children: [
            new TextRun({
                text: "This public document",
                font: "Arial",
                bold: true,
                size: 24,
                color: "000000",
            }),
        ],
    }),

    // --- Items 2, 3, 4 (Table for alignment) ---
    new Table({
        columnWidths: [4500, 4860], // Split width for label vs value
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Row for Item 2
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 4500, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "2. has been signed by", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 4860, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Veronica De La Cadena", font: "Arial", bold: true, underline: { type: "single" }, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Row for Item 3
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 4500, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "3. acting in the capacity of", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 4860, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "Notary Public of Florida", font: "Arial", bold: true, underline: { type: "single" }, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Row for Item 4
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 4500, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "4. bears the seal/stamp of", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 4860, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "Notary Public, State of Florida", font: "Arial", bold: true, underline: { type: "single" }, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    // --- "Certified" ---
    new Paragraph({
        spacing: { before: 300, after: 300 },
        indent: { left: 4000 }, // Indent to center-ish relative to content
        children: [
            new TextRun({
                text: "Certified",
                font: "Arial",
                bold: true,
                size: 28,
                color: "000000",
            }),
        ],
    }),

    // --- Items 5, 6, 7, 8 (Table for alignment) ---
    new Table({
        columnWidths: [2000, 7360], // Narrower label column for "at", "the", "by"
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Row for Item 5
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 2000, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "5. at", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 7360, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Tallahassee, Florida", font: "Arial", bold: true, underline: { type: "single" }, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Row for Item 6
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 2000, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "6. the", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 7360, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "Second day of December, A.D., 2025", font: "Arial", bold: true, underline: { type: "single" }, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Row for Item 7
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 2000, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "7. by", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 7360, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "Secretary of State, State of Florida", font: "Arial", bold: true, underline: { type: "single" }, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Row for Item 8
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 2000, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "8. No.", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 7360, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "2025-245386", font: "Arial", bold: true, underline: { type: "single" }, size: 24, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    // --- Bottom Section (Seal and Signature) ---
    new Paragraph({ text: "" }), // Spacer
    new Table({
        columnWidths: [4680, 4680],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    // Left Column: Seal
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "9. Seal/Stamp:", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { before: 200 },
                                children: [new TextRun({ text: "[IMAGE placeholder: Gold Seal]", font: "Arial", size: 20, color: "000000" })],
                            }),
                        ],
                    }),
                    // Right Column: Signature
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        verticalAlign: "bottom",
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [new TextRun({ text: "10. Signature:", font: "Arial", bold: true, size: 24, color: "000000" })],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                spacing: { before: 200, after: 100 },
                                children: [new TextRun({ text: "[IMAGE placeholder: Signature]", font: "Arial", size: 20, color: "000000" })],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "Secretary of State", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    // --- Footer Code ---
    new Paragraph({
        spacing: { before: 400 },
        children: [
            new TextRun({
                text: "DSDE 99 (2/12)",
                font: "Arial",
                size: 18, // 9pt
                color: "000000",
            }),
        ],
    }),
];
```