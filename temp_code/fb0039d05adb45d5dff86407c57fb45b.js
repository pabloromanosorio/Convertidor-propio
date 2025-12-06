```javascript
return [
    // 1. Top Header: DocuSign ID (Small text)
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

    // 2. Header Table: Company Names with Bottom Border (Horizontal Line)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // The horizontal line
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
                                        size: 22, // 11pt
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE, color: "000000" }
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
                                        size: 22, // 11pt
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE, color: "000000" }
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    // 3. Section Title
    new Paragraph({
        spacing: { before: 400, after: 400 },
        indent: { left: 720 }, // Indented approx 0.5 inch
        children: [
            new TextRun({
                text: "II. Nine (9) STANDUN BOBYMAKERS",
                font: "Arial",
                bold: true,
                size: 24, // 12pt
                color: "000000",
            }),
        ],
    }),

    // 4. Machine Image Placeholder
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 200, after: 200 },
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                color: "000000",
            }),
        ],
    }),

    // 5. Vertical Spacer (to push footer down)
    new Paragraph({
        spacing: { before: 6000 }, // Large vertical gap
        children: [],
    }),

    // 6. Signature Box (Floating Right "DS / CC")
    new Table({
        alignment: AlignmentType.RIGHT,
        width: { size: 8, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "DS",
                                        font: "Arial",
                                        size: 10, // 5pt
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "CC",
                                        font: "Arial",
                                        italics: true,
                                        size: 20,
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

    // 7. Footer Table: Enclosure Info and Page Number with Top Border
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // The horizontal line
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [
                                    new TextRun({
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        bold: true,
                                        size: 20, // 10pt
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                spacing: { before: 100 },
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 8",
                                        font: "Arial",
                                        bold: true,
                                        size: 20, // 10pt
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