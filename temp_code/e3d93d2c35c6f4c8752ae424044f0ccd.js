```javascript
return [
    // 1. Top Document ID
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

    // 2. Header (Company Names) - Using Borderless Table for alignment
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
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
    new Paragraph({ text: "" }),

    // 3. Section Title
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 4: TOOLS & FIXTURES",
                font: "Arial",
                size: 28, // 14pt
                bold: true,
                color: "000000", // Strict rule: Must be black
            }),
        ],
        spacing: { before: 200, after: 200 },
    }),

    // 4. Data Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Selected", font: "Arial", size: 22, bold: true, italics: true, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Logistics", font: "Arial", size: 22, bold: true, italics: true, color: "000000" })] })],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Price (USD)", font: "Arial", size: 22, bold: true, italics: true, color: "000000" })] })],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Qty.", font: "Arial", size: 22, bold: true, italics: true, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Row 1
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Mandatory Tools & Fixtures", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "$19,340.00", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Recommended Additional Tools & Fixtures", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "$20,450.00", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Punch Cross Hatch Machine", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({ children: [], width: { size: 20, type: WidthType.PERCENTAGE } }),
                    new TableCell({ children: [], width: { size: 10, type: WidthType.PERCENTAGE } }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Pride Guardian II Portable Unit", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({ children: [], width: { size: 20, type: WidthType.PERCENTAGE } }),
                    new TableCell({ children: [], width: { size: 10, type: WidthType.PERCENTAGE } }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // 5. Subsection Title
    new Paragraph({
        children: [
            new TextRun({
                text: "III. Two (2) Standard 36MRT Decorator with 8 ink stations",
                font: "Arial",
                size: 24,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { before: 300, after: 200 },
    }),

    // 6. Image Placeholder
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 7. Signature Box (Approximation)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "DS / CC",
                font: "Arial",
                size: 16,
                color: "000000",
                bold: true,
            }),
        ],
        spacing: { after: 100 },
    }),

    // 8. Footer (Table with Top Border)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6 },
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
                                        size: 20, // 10pt
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 13",
                                        font: "Arial",
                                        size: 20, // 10pt
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),
];
```