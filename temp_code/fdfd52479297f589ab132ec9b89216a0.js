```javascript
return [
    // 1. DocuSign ID (Top Left, Small)
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

    // 2. Header (Stolle / Canpack) - Underlined, Split Left/Right
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
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
                                        size: 22,
                                        color: "000000",
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

    // 3. Title "Change parts"
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Change parts",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 4. Table 1
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // Header Row 1
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Change Parts Size", bold: true, font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "211 diameter", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "211x355", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Header Row 2
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Qty", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Extended", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Data Rows
            ...[
                ["Adjustable infeed", "$17,000", "2", "$34,000"],
                ["Mandrels light wt. self-align", "$820", "76", "$62,320"],
                ["Quick change pockets set 36 mandrel", "$9,900", "2", "$19,800"],
                ["Applicator roll tire 1 ea.", "$2,300", "2", "$4,600"],
                ["Gravure roll", "$5,400", "0", "$0"],
                ["Fountain", "$8,500", "0", "$0"],
                ["Tooling", "$2,100", "2", "$4,200"],
            ].map(row => new TableRow({
                children: row.map(text => new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: text, font: "Arial", size: 22, color: "000000" })] })]
                }))
            })),
            // Total Row
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Total", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$124,920", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 5. Table 2
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Change Parts Size", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Addational 211 size", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "211x33", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Qty", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Extended", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            ...[
                ["Mandrels light wt. self-align", "$820", "76", "$62,320"],
                ["Quick change pockets set of 36", "$9,900", "2", "$19,800"],
                ["Applicator roll tire 1 ea.", "$2,300", "2", "$4,600"],
            ].map(row => new TableRow({
                children: row.map(text => new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: text, font: "Arial", size: 22, color: "000000" })] })]
                }))
            })),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Total", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$86,720", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 6. Table 3
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Change Parts Size", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "sleek and slim", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "211x473", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Qty", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Extended", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            ...[
                ["Mandrels light wt. self-align", "$820", "76", "$62,320"],
                ["Quick change pockets set of 36", "$9,900", "2", "$19,800"],
                ["Applicator roll tire 1 ea.", "$2,300", "2", "$4,600"],
            ].map(row => new TableRow({
                children: row.map(text => new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: text, font: "Arial", size: 22, color: "000000" })] })]
                }))
            })),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Total", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$86,720", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 7. Table 4
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Change Parts Size", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Lengh sleek and slim", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "204x269 (202)", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Qty", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Extended", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            ...[
                ["Mandrels light wt. self-align", "$870", "76", "$66,120"],
                ["Quick change pockets set of 36.", "$9,900", "0", "$0"],
                ["Applicator roll tire 1 ea.", "$2,300", "0", "$0"],
            ].map(row => new TableRow({
                children: row.map(text => new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: text, font: "Arial", size: 22, color: "000000" })] })]
                }))
            })),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Total", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$66,120", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 8. Section Header
    new Paragraph({
        children: [
            new TextRun({
                text: "IV. DG 250 Inside Spray Machines",
                bold: true,
                font: "Arial",
                size: 24, // Slightly larger
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 9. Signature Placeholder
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true
            })
        ]
    }),

    new Paragraph({ text: "" }),

    // 10. Footer Line
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000" } },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                                        bold: true,
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000" } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 15",
                                        bold: true,
                                        font: "Arial",
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
];
```