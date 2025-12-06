```javascript
return [
    // 1. DocuSign Envelope ID (Top Left, Small)
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

    // 2. Header with Company Names (Underlined, Split Left/Right)
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
                                        underline: {},
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
                                        underline: {},
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

    // 3. Section Title (Bold, Large, Centered/Left)
    // Note: Rule 1 requires color "000000" despite image showing blue.
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "SECTION 2: ADDITIONAL MACHINE OPTIONS",
                font: "Arial",
                size: 28, // 14pt
                bold: true,
                color: "000000", 
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. Main Options Table
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
                                        size: 22,
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
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Mechanical Options",
                                        font: "Arial",
                                        size: 22,
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
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Stripper: LPT Ceramic (Lieb)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Interconnecting crossover gravity trackwork with SS guard $25,345.00 each", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Redraw Sleeve: Ceramic Face", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Domer Assembly: CMB Domer Assembly $12,000.00 each", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Domer Spring: Yellow (Ram Control)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Domer Spring: Red (Low Shock)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Domer Spring: Blue (High Strength)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 8
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☒", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Foundation Anchor assembly template", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Hydraulic Cart with locking casters", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 10
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Pride Guardian On Machine", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 11 (Complex Content)
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "☐", font: "Arial", size: 28, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Machine Certifications: (i.e. CE, NR12, UL, GCC)",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Standun Bodymaker Machine Certification is your guarantee of compliance with the Directives on the approximation of the laws of the Member States relating to machinery for any specific certification requested.",
                                        font: "Arial",
                                        size: 20, // Slightly smaller
                                        italics: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Consists of:",
                                        font: "Arial",
                                        size: 20,
                                        italics: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            // List items simulated with indentation and checkmark char
                            new Paragraph({
                                indent: { left: 720 }, // 0.5 inch
                                children: [
                                    new TextRun({ text: "✓  Machine Safety Assessment and Performance Evaluation", font: "Arial", size: 20, italics: true, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                indent: { left: 720 },
                                children: [
                                    new TextRun({ text: "✓  EMC Performance Evaluation; Audible Performance Levels Testing", font: "Arial", size: 20, italics: true, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                indent: { left: 720 },
                                children: [
                                    new TextRun({ text: "✓  Dual Language Translations for display & PB legend plates", font: "Arial", size: 20, italics: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 5. Signature Placeholder (Bottom Right)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                color: "000000",
            }),
        ],
    }),

    // 6. Footer
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 11",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
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