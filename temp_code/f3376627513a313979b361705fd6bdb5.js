```javascript
return [
    // 1. DocuSign ID (Top Header)
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

    // 2. Company Header (2 Columns)
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
                                alignment: AlignmentType.LEFT,
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

    // 3. Main Content Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Selected",
                                        font: "Arial",
                                        size: 24,
                                        bold: true,
                                        italics: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 90, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Electrical Options",
                                        font: "Arial",
                                        size: 24,
                                        bold: true,
                                        italics: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 1
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "IEC (inch frame) ABB ", font: "Arial", size: 22, color: "000000" }), new TextRun({ text: "(Alternate Standard Equipment, Required for CE)", font: "Arial", size: 22, italics: true, color: "000000" })] })] }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Fortress interlock solenoid latching guard switches", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "No motor controls on HMI", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4 pole main circuit breaker", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "65 kAIC rated main panel", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Rittal control panel air conditioner", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "DC Power Supplies sized for 200% of Load", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 8
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Rittal control panel", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Remove Interconnect cables between panel & machine", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 10
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Screw terminal for control and power ", font: "Arial", size: 22, color: "000000" }), new TextRun({ text: "(Included w/ CE certification)", font: "Arial", size: 22, italics: true, color: "000000" })] })] }),
                ],
            }),
            // Row 11
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "EU wire color standard ", font: "Arial", size: 22, color: "000000" }), new TextRun({ text: "(Included w/ CE certification)", font: "Arial", size: 22, italics: true, color: "000000" })] })] }),
                ],
            }),
            // Row 12
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Permatex Partex Type PA wire labels", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 13 (Checked)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Short Can Sensor: Sencon 487 programmable Smart Prox.", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 14
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Short Can Sensor: Steel Cans – Sencon # 11-267-03", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 15 (Checked)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Inch Station $1,900.00 each", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 16
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Non-Standard Wire Colors", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 17 (Complex - Utility Monitoring)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Utility Monitoring Package: $7,440.00 each", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Consists of:", font: "Arial", size: 20, italics: true, color: "000000" })],
                            }),
                            new Paragraph({
                                bullet: { level: 0 },
                                children: [new TextRun({ text: "Allen Bradley series 1408 Power Monitor 1000", font: "Arial", size: 20, italics: true, color: "000000" })],
                            }),
                            new Paragraph({
                                bullet: { level: 0 },
                                children: [new TextRun({ text: "IFM Efector SD series compressed air flow & vacuum flow monitor for Trimmer", font: "Arial", size: 20, italics: true, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 18 (Complex - Allen Bradley)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Allen Bradley Articulated Pendant $8,000.00 each", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Consists of:", font: "Arial", size: 20, italics: true, color: "000000" })],
                            }),
                            new Paragraph({
                                bullet: { level: 0 },
                                children: [new TextRun({ text: "StrongArm articulated pendant (floor or overhead mount)", font: "Arial", size: 20, italics: true, color: "000000" })],
                            }),
                            new Paragraph({
                                bullet: { level: 0 },
                                children: [new TextRun({ text: "Allen Bradley Panel View Plus 700 on Ethernet", font: "Arial", size: 20, italics: true, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 19 (Complex - Additional Language - Red Text)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Additional Language (Manual & Tags) Each ", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "(Specify on – Project Details)", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Equipment manuals can be provided in English, German, ",
                                        font: "Arial",
                                        size: 20,
                                        italics: true,
                                        color: "FF0000",
                                    }),
                                    new TextRun({
                                        text: "Spanish",
                                        font: "Arial",
                                        size: 20,
                                        italics: true,
                                        color: "FF0000",
                                        highlight: "yellow",
                                    }),
                                    new TextRun({
                                        text: ", French, Portuguese or Chinese for no additional cost. Manual translations in all other languages may incur additional charges.",
                                        font: "Arial",
                                        size: 20,
                                        italics: true,
                                        color: "FF0000",
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

    // 4. Footer
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
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
                                        size: 20,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 12",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "[IMAGE placeholder: Signature Box]",
                                        font: "Arial",
                                        size: 16,
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