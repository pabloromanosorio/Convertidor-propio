return [
    // 1. Top Document ID
    new Paragraph({
        children: [
            new TextRun({
                text: "Docusign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 2. Header Table (Stolle / Canpack)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
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
                        borders: { bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        font: "Arial",
                                        bold: true,
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        bold: true,
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

    // 3. Intro Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "the Equipment is ready. Then the Equipment shall again be subject of a Preliminary Acceptance Test. Nevertheless, the above does not exclude the Seller’s liability for not delivering the Equipment on time.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. Item 5.5
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "5.5.", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "After the Preliminary Acceptance Test, when the Equipment meets the contractual requirements, an authorized representative of the Buyer shall sign the respective Preliminary Acceptance Test Protocol confirming the preliminary acceptance of the Equipment. For avoidance of doubt the Preliminary Acceptance Test shall not be deemed as the confirmation of the compliance of the Equipment with any performance criteria specified in the Contract. The Buyer may authorize an engineering company to carry-out the buy-off procedure in its name.",
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

    // 5. Item 5.6
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "5.6.", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Should it be ascertained in the process of any of the Preliminary Acceptance Test carried out in the presence of the Buyer or Buyer’s representative that the Equipment is defective or does not comply with the contractual terms, the Seller shall eliminate such defects. After elimination of the defects the Equipment shall undergo a repeated Preliminary Acceptance Test.",
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

    // 6. Item 5.7
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "5.7.", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Seller may perform the Preliminary Acceptance Test on its own, if the Buyer informs the Seller in advance, in writing that it waives its right to participate in the Preliminary Acceptance Test and accept the Preliminary Acceptance Test Protocol.",
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

    // 7. Item 5.8
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "5.8.", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Seller shall provide the Buyer with training of the Buyer’s employees concerning operating and servicing of the Equipment. The price for training is included in the Total Price. The training can be accomplished according to Seller’s training program provided that the Seller shall accept modifications of that program proposed by the Buyer, if they are of standard nature and do not impose any extraordinary burden on the Seller. The training in Seller’s facility shall involve classroom sessions and „hands on” practice with Equipment and tooling. The training shall cover: Theory, Functions of Components, Setup Procedure, Operations, Tooling, Electrical Controls, Preventive Maintenance, Safety, Lubrication, Troubleshooting, Specification and Quality Control.",
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

    // 8. Heading 6
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "6.", font: "Arial", bold: true, size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "PENALTY CLAUSE",
                                        font: "Arial",
                                        bold: true,
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

    // 9. Item 6.1
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "6.1.", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "If the Seller fails to meet the time of delivery specified in par. 2.1 hereof, the Seller shall pay the penalty as follows:",
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

    // 10. Item (i)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT, // Align (i) to right of the number column
                                children: [new TextRun({ text: "(i)  ", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "First week of delay – grace period;",
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

    new Paragraph({ text: "" }), // Large Spacer
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 11. Footer Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
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
                        borders: { top: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CONTRACT NO. 25-149",
                                        font: "Arial",
                                        bold: true,
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { top: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 11",
                                        font: "Arial",
                                        bold: true,
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

    // 12. Signature Placeholder (Bottom Right)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Signature Box]",
                font: "Arial",
                size: 16,
                color: "000000",
                italics: true,
            }),
        ],
    }),
];