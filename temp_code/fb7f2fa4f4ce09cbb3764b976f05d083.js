return [
    // 1. Top DocuSign ID
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

    // 2. Header: Stolle / Canpack (Using Table for alignment)
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
                                        underline: { type: "single" }
                                    })
                                ]
                            })
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE }
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
                                        underline: { type: "single" }
                                    })
                                ]
                            })
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE }
                    })
                ]
            })
        ]
    }),

    new Paragraph({ text: "" }), // Spacer

    // 3. Section Title
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 4: TOOLS & FIXTURES",
                font: "Arial",
                size: 28, // 14pt
                bold: true,
                color: "000000" // Enforcing black per strict rules, despite image showing blue
            })
        ],
        spacing: { before: 400, after: 200 }
    }),

    // 4. Main Data Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Selected", bold: true, italics: true, font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 15, type: WidthType.PERCENTAGE }
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Logistics", bold: true, italics: true, font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 50, type: WidthType.PERCENTAGE }
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Price (USD)", bold: true, italics: true, font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 25, type: WidthType.PERCENTAGE }
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Qty.", bold: true, italics: true, font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 10, type: WidthType.PERCENTAGE }
                    }),
                ]
            }),
            // Row 1
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 24, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Mandatory Tools & Fixtures", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "$19,340.00", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 24, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Recommended Additional Tools & Fixtures", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "$20,450.00", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 24, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Punch Cross Hatch Machine", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [] })] }),
                    new TableCell({ children: [new Paragraph({ children: [] })] }),
                ]
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 24, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Pride Guardian II Portable Unit", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [] })] }),
                    new TableCell({ children: [new Paragraph({ children: [] })] }),
                ]
            }),
        ]
    }),

    new Paragraph({ text: "" }), // Spacer

    // 5. Subsection Header
    new Paragraph({
        children: [
            new TextRun({
                text: "III. Two (2) Standard 36MRT Decorator with 8 ink stations",
                font: "Arial",
                size: 24, // 12pt
                bold: true,
                color: "000000"
            })
        ],
        spacing: { before: 400, after: 200 }
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
                italics: true
            })
        ],
        spacing: { after: 600 }
    }),

    // 7. Signature Box (Approximation)
    new Table({
        width: { size: 10, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.RIGHT,
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "DS", size: 16, font: "Arial", color: "000000" }),
                                    new TextRun({ text: "\nCC", size: 24, font: "Arial", color: "000000", italics: true }) // Simulated signature
                                ]
                            })
                        ],
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1 },
                            bottom: { style: BorderStyle.SINGLE, size: 1 },
                            left: { style: BorderStyle.SINGLE, size: 1 },
                            right: { style: BorderStyle.SINGLE, size: 1 },
                        }
                    })
                ]
            })
        ]
    }),

    // 8. Footer Line and Text
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // Thick top border acts as the separator line
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
                                        color: "000000"
                                    })
                                ]
                            })
                        ],
                        width: { size: 70, type: WidthType.PERCENTAGE }
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
                                        color: "000000"
                                    })
                                ]
                            })
                        ],
                        width: { size: 30, type: WidthType.PERCENTAGE }
                    })
                ]
            })
        ]
    })
];