```javascript
return [
    // 1. Top ID (Small text)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000"
            })
        ]
    }),

    new Paragraph({ text: "" }), // Spacer

    // 2. Header Table (Company Names with underline)
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
            insideHorizontal: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" } // Underline effect
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
                                        color: "000000"
                                    })
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000"
                                    })
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 3. Section Title
    new Paragraph({
        children: [
            new TextRun({
                text: "G1: Critical Spares 13-out (473cl)",
                font: "Arial",
                bold: true,
                size: 24, // 12pt
                color: "000000"
            })
        ],
        spacing: { before: 200, after: 200 }
    }),

    // 4. Bulleted List
    new Paragraph({
        children: [new TextRun({ text: "(3) Cut-Edge", font: "Arial", size: 22, color: "000000" })],
        bullet: { level: 0 }
    }),
    new Paragraph({
        children: [new TextRun({ text: "(3) Blank & Draw Die", font: "Arial", size: 22, color: "000000" })],
        bullet: { level: 0 }
    }),
    new Paragraph({
        children: [new TextRun({ text: "(3) Draw Pad", font: "Arial", size: 22, color: "000000" })],
        bullet: { level: 0 }
    }),
    new Paragraph({
        children: [new TextRun({ text: "(3) Die Center", font: "Arial", size: 22, color: "000000" })],
        bullet: { level: 0 }
    }),
    new Paragraph({
        children: [new TextRun({ text: "Set of Seals", font: "Arial", size: 22, color: "000000" })],
        bullet: { level: 0 }
    }),

    // 5. Large Vertical Spacer to push footer to bottom
    new Paragraph({
        text: "",
        spacing: { after: 8000 } // Large spacing to simulate page height
    }),

    // 6. Signature Placeholder (Right aligned)
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { after: 100 }
    }),

    // 7. Footer Table (Line above, Enclosure info, Page number)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // Line above footer
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE }
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
                                        bold: true,
                                        size: 20, // 10pt
                                        color: "000000"
                                    })
                                ],
                                alignment: AlignmentType.LEFT,
                                spacing: { before: 100 }
                            }),
                        ],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 7",
                                        font: "Arial",
                                        bold: true,
                                        size: 20, // 10pt
                                        color: "000000"
                                    })
                                ],
                                alignment: AlignmentType.RIGHT,
                                spacing: { before: 100 }
                            }),
                        ],
                        width: { size: 40, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    })
];
```