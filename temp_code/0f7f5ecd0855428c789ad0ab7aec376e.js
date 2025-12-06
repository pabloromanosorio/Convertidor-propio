```javascript
return [
    // 1. Top Document ID
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

    // 2. Header: Company Names (Underlined, Left/Right aligned)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
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
                                        underline: { type: UnderlineType.SINGLE },
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
                                        underline: { type: UnderlineType.SINGLE },
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

    // 3. First Body Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "The fixture must be fixed to the floor while it is being used for safety and a safe floor area must be marked around the fixture. It is supplied with predrilled holes and the floor fixing to attach it.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. Image Placeholder (Inside a table to mimic the border box)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "[IMAGE placeholder]",
                                        font: "Arial",
                                        size: 22,
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

    new Paragraph({ text: "" }), // Spacer

    // 5. Second Body Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "The project cost is based on existing engineering. If the scope of the project is altered by the customer, Stolle reserves the right to adjust the cost and/or delivery schedule to accommodate the changes. If the customer is to incur additional expense for the project, Stolle will submit an estimate for approval prior to proceeding. Note, shipping charges to be prepaid and invoiced. Work will not begin work on this project until a correct (hard copy) purchase order payment is received.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 6. List Section D1
    new Paragraph({
        children: [
            new TextRun({
                text: "D1: Critical Spares-15 Out (269) FIT",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
    }),
    new Paragraph({
        text: "(3) Cut-Edge",
        bullet: { level: 0 },
        style: "ListParagraph", // Optional, helps with default spacing
    }),
    new Paragraph({
        text: "(3) Blank & Draw Die",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "(3) Draw Pad",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "(3) Die Center",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Set of Seals",
        bullet: { level: 0 },
    }),

    new Paragraph({ text: "" }), // Spacer

    // 7. List Section E1
    new Paragraph({
        children: [
            new TextRun({
                text: "E1: Critical Spares 15-out 33cl",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
    }),
    new Paragraph({
        text: "(3) Cut-Edge",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "(3) Blank & Draw Die",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "(3) Draw Pad",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "(3) Die Center",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Set of Seals",
        bullet: { level: 0 },
    }),

    new Paragraph({ text: "" }), // Spacer

    // 8. List Section F1
    new Paragraph({
        children: [
            new TextRun({
                text: "F1: Critical Spares 14-out (355cl)",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
    }),
    new Paragraph({
        text: "(3) Cut-Edge",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "(3) Blank & Draw Die",
        bullet: { level: 0 },
    }),
    new Paragraph({ text: "" }), // Gap in list as seen in image
    new Paragraph({
        text: "(3) Draw Pad",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "(3) Die Center",
        bullet: { level: 0 },
    }),
    new Paragraph({
        text: "Set of Seals",
        bullet: { level: 0 },
    }),

    new Paragraph({ text: "" }), // Spacer
    new Paragraph({ text: "" }), // Spacer

    // 9. Signature Box (Approximation)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "DS",
                font: "Arial",
                size: 16,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "CC", // Signature placeholder
                font: "Arial",
                size: 24,
                color: "000000",
                italics: true,
            }),
        ],
    }),

    // 10. Footer (Line and Text)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // The horizontal line
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
                                        size: 20, // Slightly smaller for footer
                                        color: "000000",
                                        bold: true,
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
                                        text: "PAGE NO. 6",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                        bold: true,
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