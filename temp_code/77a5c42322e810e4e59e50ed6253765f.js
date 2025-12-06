```javascript
return [
    // 1. Top ID (Small text)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 2. Header: Company Names with Bottom Border (Underline effect)
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
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: {
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
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
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: {
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                    }),
                ],
            }),
        ],
    }),

    // 3. Content Title
    new Paragraph({
        children: [
            new TextRun({
                text: "G1: Critical Spares 13-out (473cl)",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
        spacing: { before: 400, after: 200 },
    }),

    // 4. Bulleted List
    new Paragraph({
        children: [
            new TextRun({
                text: "(3) Cut-Edge",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "(3) Blank & Draw Die",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "(3) Draw Pad",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "(3) Die Center",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Set of Seals",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
    }),

    // 5. Vertical Spacer (to push footer to bottom)
    new Paragraph({
        children: [],
        spacing: { before: 8000 },
    }),

    // 6. Signature Placeholder (Right aligned)
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
        spacing: { after: 100 },
    }),

    // 7. Footer (Table with Top Border)
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
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 7",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                    }),
                ],
            }),
        ],
    }),
];
```