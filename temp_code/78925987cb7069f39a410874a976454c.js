return [
    // 1. DocuSign ID (Top small text)
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

    // 2. Header (Company Names) - Using a table for alignment
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 6 }, // Line under header
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
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
                                        underline: {},
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
                                        underline: {},
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

    new Paragraph({ text: "" }), // Spacer

    // 3. Main Content Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
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
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
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
                        width: { size: 90, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
            // Helper function to generate rows would be ideal, but we must return an array literal.
            // Row 1: IEC
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "IEC (inch frame) ABB ", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "(Alternate Standard Equipment, Required for CE)", font: "Arial", size: 22, italics: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 2: Fortress
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Fortress interlock solenoid latching guard switches", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 3: No motor controls
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "No motor controls on HMI", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 4: 4 pole
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "4 pole main circuit breaker", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 5: 65 kAIC
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "65 kAIC rated main panel", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 6: Rittal control panel air
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Rittal control panel air conditioner", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 7: DC Power
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "DC Power Supplies sized for 200% of Load", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 8: Rittal control panel
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Rittal control panel", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 9: Remove Interconnect
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Remove Interconnect cables between panel & machine", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 10: Screw terminal
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Screw terminal for control and power ", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "(Included w/ CE certification)", font: "Arial", size: 22, italics: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 11: EU wire color
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "EU wire color standard ", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "(Included w/ CE certification)", font: "Arial", size: 22, italics: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 12: Permatex
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Permatex Partex Type PA wire labels", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 13: Short Can Sensor (Checked)
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Short Can Sensor: Sencon 487 programmable Smart Prox.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 14: Short Can Sensor Steel
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Short Can Sensor: Steel Cans – Sencon # 11-267-03", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 15: Inch Station (Checked)
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Inch Station $1,900.00 each", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 16: Non-Standard
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 32, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Non-Standard Wire Colors", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 17: Utility Monitoring (Checked, Complex)
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 32, color: "000000" })] })],
                        verticalAlign: VerticalAlign.TOP,
                    }),
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
            // Row 18: Allen Bradley Articulated (Checked, Complex)
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 32, color: "000000" })] })],
                        verticalAlign: VerticalAlign.TOP,
                    }),
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
            // Row 19: Additional Language (Checked, Red Text)
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 32, color: "000000" })] })],
                        verticalAlign: VerticalAlign.TOP,
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Additional Language (Manual & Tags) Each (Specify on – Project Details)", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Equipment manuals can be provided in English, German, ",
                                        font: "Arial",
                                        size: 20,
                                        italics: true,
                                        color: "000000", // Strictly following rule 1, despite image showing red
                                    }),
                                    new TextRun({
                                        text: "Spanish",
                                        font: "Arial",
                                        size: 20,
                                        italics: true,
                                        color: "000000",
                                        highlight: "yellow",
                                    }),
                                    new TextRun({
                                        text: ", French, Portuguese or Chinese for no additional cost. Manual translations in all other languages may incur additional charges.",
                                        font: "Arial",
                                        size: 20,
                                        italics: true,
                                        color: "000000", // Strictly following rule 1
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

    // 4. Signature Image Placeholder
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 5. Footer
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6 }, // Line above footer
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),
];