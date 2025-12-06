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
        spacing: { after: 400 },
    }),

    // 2. Header Table (Stolle / Canpack)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: "none" },
            bottom: { style: "none" },
            left: { style: "none" },
            right: { style: "none" },
            insideVertical: { style: "none" },
            insideHorizontal: { style: "none" },
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
                                        bold: true,
                                        underline: { type: "single" },
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
                                        bold: true,
                                        underline: { type: "single" },
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

    // 3. Intro Sentence
    new Paragraph({
        children: [
            new TextRun({
                text: "the Equipment according to this Contract with no additional costs for the Buyer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { before: 400, after: 400 },
        alignment: AlignmentType.CENTER,
    }),

    // 4. Section 7 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "7.\tSELLER'S GUARANTEE AND WARRANTY",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
        indent: {
            left: 720, // Indent for text
            hanging: 720, // Hanging indent for number
        },
        tabStops: [
            { type: "left", position: 720 },
        ],
        spacing: { after: 300 },
    }),

    // 5. Clause 7.1
    new Paragraph({
        children: [
            new TextRun({
                text: "7.1.\tThe Seller warrants to the Buyer that the Equipment and Services furnished by the Seller shall conform to performance specifications and requirements as stated in this Contract and Enclosures hereto, shall be in compliance with representations made under Section 1 hereof, shall be in compliance with current technological knowledge and the latest good technological standards, and shall be suitable for its intended purpose, as defined in this Contract, and free of any defects. The Equipment delivered hereunder shall be brand new and shall not contain any used components whatsoever.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: {
            left: 720,
            hanging: 720,
        },
        tabStops: [
            { type: "left", position: 720 },
        ],
        spacing: { after: 300 },
    }),

    // 6. Clause 7.2
    new Paragraph({
        children: [
            new TextRun({
                text: "7.2.\tThe Seller warrants and guarantees that the Equipment and all parts thereof (including, but not limited to, any program as described under par. 1.2 hereof) may be used by the Buyer for manufacturing of its products and such a use on an industrial scale will not violate any intellectual property rights of any third party, including (but not limited to) patents and industrial designs relating to any apparatus being a part of the Equipment and/or to any method and/or process applied in connection with the use of such an apparatus and/or product which may be manufactured with the use of such an apparatus. In particular, the Buyer shall not be restricted in:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: {
            left: 720,
            hanging: 720,
        },
        tabStops: [
            { type: "left", position: 720 },
        ],
        spacing: { after: 300 },
    }),

    // 7. Clause 7.2.1 (Nested)
    new Paragraph({
        children: [
            new TextRun({
                text: "7.2.1\tmanufacturing its products using the apparatus being a part of the Equipment or using any method or process applied in connection with the use of such an apparatus;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: {
            left: 1440, // Double indent
            hanging: 720,
        },
        tabStops: [
            { type: "left", position: 1440 },
        ],
        spacing: { after: 300 },
    }),

    // 8. Clause 7.2.2 (Nested)
    new Paragraph({
        children: [
            new TextRun({
                text: "7.2.2\tsale or disposal of such products (including rent, lease, donation) on any market.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: {
            left: 1440,
            hanging: 720,
        },
        tabStops: [
            { type: "left", position: 1440 },
        ],
        spacing: { after: 300 },
    }),

    // 9. Clause 7.3
    new Paragraph({
        children: [
            new TextRun({
                text: "7.3.\tThe Seller further warrants to the Buyer that the Equipment and Services furnished by the Seller under this Contract shall be suitable for their intended purpose – i.e. easy integration into the technological line for production of aluminium can bodies: 47,3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26,9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202 aluminum can manufacturing system which nominal output shall be 4000 cans per minute (CPM). The Equipment to be purchased by the Buyer hereunder shall constitute a part of designated line, but the intended purpose of each part is to enable (not to disable or prevent) to achieve the expected as well as described capacity and quality.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: {
            left: 720,
            hanging: 720,
        },
        tabStops: [
            { type: "left", position: 720 },
        ],
        spacing: { after: 400 },
    }),

    // 10. Signature Image Placeholder (Right Aligned)
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { after: 100 },
    }),

    // 11. Footer Table (Contract No / Page No)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: "single", size: 6, color: "000000" }, // Line above footer
            bottom: { style: "none" },
            left: { style: "none" },
            right: { style: "none" },
            insideVertical: { style: "none" },
            insideHorizontal: { style: "none" },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CONTRACT NO. 25-149",
                                        font: "Arial",
                                        size: 22, // 11pt
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        verticalAlign: "center",
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 13",
                                        font: "Arial",
                                        size: 22, // 11pt
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        verticalAlign: "center",
                    }),
                ],
            }),
        ],
    }),
];
```