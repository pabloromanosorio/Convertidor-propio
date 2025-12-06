```javascript
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

    // 2. Header with Company Names (Underlined via Table Bottom Border)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE, size: 0, color: "auto" },
            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // The underline effect
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
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
                                        size: 20,
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
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        size: 20,
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

    new Paragraph({ text: "" }), // Spacer

    // 3. Section Header (Blue)
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 1: STANDARD BODYMAKER DESCRIPTION",
                font: "Arial",
                size: 28, // 14pt
                bold: true,
                color: "0070C0", // Blue from image
            }),
        ],
    }),

    // 4. Intro Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "The Standun is the only Bodymaker designed for easy conversion to produce the most popular beverage can sizes up to 500ml. Production speeds determined by the tool pack length, can diameter, Bodymaker mechanical configuration, as well as plant process controls.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 5. Specifications Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Description", font: "Arial", size: 22, color: "000000", italics: true, bold: true })] })],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "B6-B7", font: "Arial", size: 22, color: "000000", italics: true, bold: true })] })],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Data Rows
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Stroke", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "24 inches", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Width", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "6 feet", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Height", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "7 feet", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Length", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "13 feet, 5 inches", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Weight", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "19,500 pounds", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Foundation", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Floor Level", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Speed", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Up to 300-400 strokes per minute (See Note 1 below)", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Toolpack Length", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "TBD", font: "Arial", size: 22, color: "0070C0" })] })] }), // Blue TBD
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Can Diameter", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "211 and 204", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Max. Untrimmed Can Height (aluminum)", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "TBD", font: "Arial", size: 22, color: "0070C0" })] })] }), // Blue TBD
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 6. Mechanical Features Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "Standard Mechanical Features of a Standun Bodymaker include:",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Equipment runs a single diameter length can for aluminum with one set of lifting swivel hoists, can discharge conveyor, foundation mounting hardware, and built to CE safety standards with English language signs/literature.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 7. Red Note
    new Paragraph({
        children: [
            new TextRun({
                text: "*Note 1 – The Standun Bodymaker speed is rated in Strokes Per Minute (SPM). This is the Engineered MAX Speed the Mechanical Systems in the Machine are rated to. This Rating is WITHOUT the process inputs or material in the plant. And those items will ultimately determine the OPERATIONAL Speed of the machine. And it is the plants resposibility to determine the most efficent Speed during Operation in the plant.",
                font: "Arial",
                size: 18, // Slightly smaller
                color: "FF0000", // Red
                italics: true,
                bold: true,
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 8. Includes List
    new Paragraph({
        children: [
            new TextRun({
                text: "Includes:",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
    }),
    // List Items (Using bullet config as per rules, though image has ticks)
    new Paragraph({
        text: "Mist Collection Point",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Flanged Ram",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Pride Domer Assembly",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Pneumatic Clutch Brake (Goizper)",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Poly Insert Type Stripper",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Pride Modular Tool Pack",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "On-Machine Hydraulic Package",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Carbide Face Fixed Redraw Sleeve",
        bullet: { level: 0 },
    }),

    new Paragraph({ text: "" }),

    // 9. Red Instruction
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Customer should select one (1) option for each category below:",
                font: "Arial",
                size: 22,
                color: "FF0000",
                italics: true,
                bold: true,
            }),
        ],
    }),

    // 10. Selection Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            // Headers
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Machine Hydraulics:", font: "Arial", size: 22, color: "000000", bold: true, italics: true })] })],
                        width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ram:", font: "Arial", size: 22, color: "000000", bold: true, italics: true })] })],
                        width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Trimmer Type:", font: "Arial", size: 22, color: "000000", bold: true, italics: true })] })],
                        width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Content
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "On-Machine Hydraulics to be provided ", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "unless", font: "Arial", size: 22, color: "000000", underline: {} }),
                                    new TextRun({ text: " noted.", font: "Arial", size: 22, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Flange Ram is provided for 2.5” and 2” can diameters ", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "unless", font: "Arial", size: 22, color: "000000", underline: {} }),
                                    new TextRun({ text: " noted.", font: "Arial", size: 22, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "☐ Stolle", font: "Arial", size: 22, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "☐ Belvac", font: "Arial", size: 22, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "☐ CMB", font: "Arial", size: 22, color: "000000" })] }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 11. Signature Placeholder
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

    // 12. Footer
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
            bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
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
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        size: 22,
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
                                        text: "PAGE NO. 9",
                                        font: "Arial",
                                        size: 22,
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
```