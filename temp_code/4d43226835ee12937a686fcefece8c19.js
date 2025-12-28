```javascript
return [
    // Header: Page Number and Slogan
    new Table({
        columnWidths: [2000, 5360, 2000],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 2000, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Page 61", font: "Arial", size: 20, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 5360, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "Simple / Reliable / Green / Efficient", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 2000, type: WidthType.DXA },
                        children: [new Paragraph("")],
                    }),
                ],
            }),
        ],
    }),

    // Spacer (representing the space taken by the image)
    new Paragraph({
        text: "",
        spacing: { before: 240, after: 240 },
    }),

    // Title: LIGHTING SYSTEM
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 200, after: 200 },
        children: [
            new TextRun({
                text: "LIGHTING SYSTEM",
                font: "Arial",
                size: 28,
                color: "000000",
            }),
        ],
    }),

    // Body Paragraph 1
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "The lighting system includes a variety of lighting solutions such as light bulbs, fluorescent tubes and dimmers under both AC and DC voltages, which is suitable for multiple breeding scenarios.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Body Paragraph 2
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "This lighting system is suitable for broiler and duck breeding, and optimizes livestock growth, age of sexual maturity, egg weight and egg production irvarious environments by accurately adiusting the brightness of the lamp.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Footer Section (Text extracted from footer graphic)
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 200, after: 100 },
        children: [
            new TextRun({
                text: "WEBSITE",
                font: "Arial",
                size: 18,
                color: "000000",
            }),
        ],
    }),

    new Table({
        columnWidths: [4680, 4680],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 4680, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "bigherdsman@bigherdsman.com", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "BIGHERDSMAN", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 4680, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({ text: "POULTRY PRODUCTION", font: "Arial", size: 20, color: "000000", bold: true }),
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