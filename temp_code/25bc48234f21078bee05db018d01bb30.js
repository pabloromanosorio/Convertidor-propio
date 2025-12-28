```javascript
return [
    // 1. Header
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "FORM OF AFFIDAVIT",
                font: "Arial",
                size: 36, // 18pt
                bold: true,
                color: "000000"
            })
        ],
        spacing: { after: 600 }
    }),

    // 2. Location
    new Paragraph({
        children: [
            new TextRun({
                text: "Commonwealth of Pennsylvania",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ]
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "County of Centre",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        spacing: { after: 600 }
    }),

    // 3. Body Text
    new Paragraph({
        alignment: AlignmentType.BOTH,
        children: [
            new TextRun({
                text: "Before me, the undersigned notary public, personally appeared ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "Robert A. Kubat, University Registrar",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" }
            }),
            new TextRun({
                text: ", to me known or proven, who being duly sworn according to law, doth depose and say ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "the attached document is an official diploma dated May, 2025, issued by The Pennsylvania State University to Maria Alejandra Diaz Moreno",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" }
            }),
            new TextRun({
                text: " and further deponent sayeth not.",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        spacing: { after: 800 }
    }),

    // 4. Affiant Signature Block (Right Aligned via Table)
    new Table({
        columnWidths: [4680, 4680],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    // Empty Left Column
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: []
                    }),
                    // Right Column with Signature
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "[Signature]",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000"
                                    })
                                ]
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                border: {
                                    top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }
                                },
                                children: [
                                    new TextRun({
                                        text: "Signature of Affiant",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }),

    new Paragraph({ text: "", spacing: { after: 400 } }), // Vertical Spacing

    // 5. Notary Block (Right Aligned via Table)
    new Table({
        columnWidths: [4680, 4680],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    // Empty Left Column
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: []
                    }),
                    // Right Column with Notary Info
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "Sworn to and subscribed before me this",
                                        font: "Arial",
                                        size: 22,
                                        italics: true,
                                        color: "000000"
                                    })
                                ]
                            }),
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "   2   ",
                                        font: "Arial",
                                        size: 22,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                        color: "000000"
                                    }),
                                    new TextRun({
                                        text: " day of ",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000"
                                    }),
                                    new TextRun({
                                        text: "   July   ",
                                        font: "Arial",
                                        size: 22,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                        color: "000000"
                                    }),
                                    new TextRun({
                                        text: " 20",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000"
                                    }),
                                    new TextRun({
                                        text: "25",
                                        font: "Arial",
                                        size: 22,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                        color: "000000"
                                    })
                                ],
                                spacing: { after: 300 }
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "[Signature]",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000"
                                    })
                                ]
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                border: {
                                    top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }
                                },
                                children: [
                                    new TextRun({
                                        text: "Notary Public",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000"
                                    })
                                ],
                                spacing: { after: 200 }
                            }),
                            // Seal Box (Nested Table for Border)
                            new Table({
                                width: { size: 100, type: WidthType.PERCENTAGE },
                                rows: [
                                    new TableRow({
                                        children: [
                                            new TableCell({
                                                borders: {
                                                    top: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                                                    bottom: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                                                    left: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                                                    right: { style: BorderStyle.SINGLE, size: 2, color: "000000" }
                                                },
                                                children: [
                                                    new Paragraph({
                                                        alignment: AlignmentType.CENTER,
                                                        children: [
                                                            new TextRun({ text: "Commonwealth of Pennsylvania - Notary Seal", font: "Arial", size: 14, bold: true, color: "000000", break: 1 }),
                                                            new TextRun({ text: "Lacey J. Vandevander, Notary Public", font: "Arial", size: 14, color: "000000", break: 1 }),
                                                            new TextRun({ text: "Blair County", font: "Arial", size: 14, color: "000000", break: 1 }),
                                                            new TextRun({ text: "My commission expires December 8, 2028", font: "Arial", size: 14, color: "000000", break: 1 }),
                                                            new TextRun({ text: "Commission number 1387944", font: "Arial", size: 14, color: "000000", break: 1 }),
                                                            new TextRun({ text: "Member, Pennsylvania Association of Notaries", font: "Arial", size: 14, color: "000000" })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
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