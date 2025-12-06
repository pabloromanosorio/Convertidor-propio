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

    // 2. Header Names (Stolle / Canpack)
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
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
                                        font: "Arial",
                                        size: 22,
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
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
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

    new Paragraph({ text: "" }),

    // 3. Body Text (Continuation)
    new Paragraph({
        children: [
            new TextRun({
                text: "in applicable legislation and is ordered by final and legally binding judicial verdict or decision of other authority and solely to the limit of the requested verdict or decision, each of them issued within the framework of competences of respective authorities.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indentation: { left: 720 }, // Indented to match image
    }),

    new Paragraph({ text: "" }),

    // 4. Section 16.14
    new Paragraph({
        children: [
            new TextRun({
                text: "16.14. The Buyer’s engineering company to prepare the complete technology of producing two - piece beer and beverage cans and to cooperate with the Seller in all aspects of this Contract is:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 5. Address Block
    new Paragraph({
        indentation: { left: 720 },
        children: [
            new TextRun({
                text: "ROESLEIN & ASSOCIATES, INC.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        indentation: { left: 720 },
        children: [
            new TextRun({
                text: "9200   SON ROAD, SUITE 200",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        indentation: { left: 720 },
        children: [
            new TextRun({
                text: "ST. LOUIS, MISSOURI 63126-1528, USA.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 6. Section 16.15
    new Paragraph({
        children: [
            new TextRun({
                text: "16.15. The Buyer shall be entitled to assign any and all Buyer’s rights hereunder to any Buyer’s related entity. In case of sale or transfer of the Equipment to Buyers related entity, such Buyer’s related entity shall be entitled to perform any and all Buyer’s rights hereunder and raise claims towards the Seller as the Buyer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 7. Closing Paragraphs
    new Paragraph({
        children: [
            new TextRun({
                text: "The Parties to this Contract hereby declare that they are legal entities capable of independently Contracting binding obligations according to the law.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    new Paragraph({
        children: [
            new TextRun({
                text: "IN WITNESS WHEREOF, the Parties have signed this Contract on the date first above written. The persons signing below, on behalf of the Parties in a representative capacity expressly warrant that they have the appropriate authority to execute and bind this Contract on behalf of their respective principals or organizations.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 8. Signatures Table
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
            // Row 1: Top Signatures
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "[IMAGE placeholder]", font: "Arial", color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "4F30549010D84FF...",
                                        font: "Arial",
                                        size: 16,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [
                                    new TextRun({
                                        text: "THE BUYER - CANPACK Colombia S.A.S.",
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
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "[IMAGE placeholder]", font: "Arial", color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "BFB2165E88BE435...",
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
            // Spacer Row
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph("")] }),
                ],
            }),
            // Row 2: Bottom Signatures
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "[IMAGE placeholder]", font: "Arial", color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "6B46BBFACE1E4CA...",
                                        font: "Arial",
                                        size: 16,
                                        color: "000000",
                                    }),
                                    new TextRun({
                                        text: "\tVice President Sales",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                                tabStops: [{ position: 3000, type: TabStopType.LEFT }],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [
                                    new TextRun({
                                        text: "THE SELLER – STOLLE MACHINERY COMPANY",
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
                        verticalAlign: VerticalAlign.BOTTOM,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Signed by:",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
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
                                                width: { size: 30, type: WidthType.PERCENTAGE },
                                                children: [
                                                    new Paragraph({
                                                        children: [
                                                            new TextRun({ text: "[IMAGE placeholder]", font: "Arial", color: "000000" }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            new TableCell({
                                                width: { size: 70, type: WidthType.PERCENTAGE },
                                                verticalAlign: VerticalAlign.CENTER,
                                                children: [
                                                    new Paragraph({
                                                        children: [
                                                            new TextRun({
                                                                text: "30-Jul-2025 | 6:25 AM MDT",
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
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 9. Footer
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
                                        text: "CONTRACT NO. 25-149",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
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
                                        text: "PAGE NO. 24",
                                        bold: true,
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
];
```