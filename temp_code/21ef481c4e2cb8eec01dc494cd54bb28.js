```javascript
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

return [
    // Header: Page Number
    new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
            new TextRun({
                text: "Page 23",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ]
    }),

    // Header: Slogan
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Simple / Reliable / Green / Efficient",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ]
    }),

    new Paragraph({ text: "" }), // Spacing

    // Image Text Content (Logo extracted from image)
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "大牧人 Big Herdsman",
                font: "Arial",
                size: 28,
                bold: true,
                color: "000000"
            })
        ]
    }),

    new Paragraph({ text: "" }), // Spacing

    // Title (Verbatim typo "PULTRY")
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "PULTRY ROUND-PIPE DRINKING LINE",
                font: "Arial",
                size: 24,
                bold: true,
                color: "000000"
            })
        ]
    }),

    // Description
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Provides stable water flow and efficient filtration, offering a long service life.",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ]
    }),

    new Paragraph({ text: "" }), // Spacing
    new Paragraph({ text: "" }), // Spacing

    // Footer Content (Structured as a table to match layout)
    new Table({
        columnWidths: [3120, 3120, 3120],
        rows: [
            new TableRow({
                children: [
                    // Left: Contact Info
                    new TableCell({
                        borders: noBorders,
                        width: { size: 3120, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "bigherdsman@bigherdsman.com",
                                        font: "Arial",
                                        size: 18,
                                        color: "000000"
                                    })
                                ]
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "BIGHERDSMAN",
                                        font: "Arial",
                                        size: 18,
                                        bold: true,
                                        color: "000000"
                                    })
                                ]
                            })
                        ]
                    }),
                    // Center: Website
                    new TableCell({
                        borders: noBorders,
                        width: { size: 3120, type: WidthType.DXA },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "WEBSITE",
                                        font: "Arial",
                                        size: 18,
                                        color: "000000"
                                    })
                                ]
                            })
                        ]
                    }),
                    // Right: Slogan
                    new TableCell({
                        borders: noBorders,
                        width: { size: 3120, type: WidthType.DXA },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "POULTRY PRODUCTION",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        color: "000000"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
];
```