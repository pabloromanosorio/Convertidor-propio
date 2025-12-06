return [
    // --- DocuSign ID (Top Left) ---
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // Smaller font for ID
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // --- Header (Company Names with Underline) ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
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
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        borders: { bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        borders: { bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                    }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 400 } }), // Spacer

    // --- List Items (ii) - (vii) ---
    // Using Tables for layout to strictly avoid manual numbering issues and ensure alignment
    ...[
        { label: "(ii)", text: "Two weeks of delay – 0.5% of the Total Price;" },
        { label: "(iii)", text: "Three weeks of delay – Additional 0.5% of the Total Price so in total 1% of the Total Price;" },
        { label: "(iv)", text: "Four weeks of delay – Additional 1% of the Total Price so in total 2% of the Total Price;" },
        { label: "(v)", text: "Five weeks of delay – Additional 1% of the Total Price so in total 3% of the Total Price;" },
        { label: "(vi)", text: "Six weeks of delay – Additional 1% of the Total Price so in total 4% of the Total Price;" },
        { label: "(vii)", text: "Seven weeks of delay – Additional 1 % of the Total Price so in total 5% of the Total Price," },
    ].map(item => 
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
                            width: { size: 10, type: WidthType.PERCENTAGE },
                            children: [new Paragraph({ children: [new TextRun({ text: item.label, font: "Arial", size: 22, color: "000000" })] })],
                        }),
                        new TableCell({
                            width: { size: 90, type: WidthType.PERCENTAGE },
                            children: [new Paragraph({ children: [new TextRun({ text: item.text, font: "Arial", size: 22, color: "000000" })] })],
                        }),
                    ],
                }),
            ],
        })
    ),

    // --- Paragraph following list ---
    new Paragraph({
        indent: { left: 720 }, // Indent to match the text of the list above
        children: [
            new TextRun({
                text: "up to maximum five percent (5%) of the Total Price. Should the damage sustained by the Buyer exceed the amount of the penalty, the Buyer shall be entitled to claim the appropriate supplementary compensation.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { before: 200, after: 200 },
    }),

    // --- Section 6.2 ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "6.2.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 90, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "The Seller shall be exempt from the penalty indicated in par. 6.1. of this Contract, only if it proves that it has not been able to deliver the Equipment on time according to par. 2.1. of this Contract due to a shortage of components in the market caused directly by global supply chain disruptions impacting the global market of components required to manufacture the Equipment in an extraordinary way (the “", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "Global Supply Chain Crisis", bold: true, font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "”), provided that:", font: "Arial", size: 22, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    // --- Sub-list (i) under 6.2 ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({ width: { size: 10, type: WidthType.PERCENTAGE }, children: [] }), // Empty indentation
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "(i)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 80, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "such Global Supply Chain Crisis and the resulting delay in delivery of the Equipment could not have been controlled and predicted at the moment of signing of this Contract", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({
        indent: { left: 1440 }, // Double indent
        children: [new TextRun({ text: "and", font: "Arial", size: 22, color: "000000" })],
        spacing: { before: 100, after: 100 },
    }),

    // --- Sub-list (ii) under 6.2 ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({ width: { size: 10, type: WidthType.PERCENTAGE }, children: [] }),
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "(ii)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 80, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "the Seller has exercised its best efforts to avoid the consequences of such Global Supply Chain Crisis and the resulting delay in delivery of the Equipment", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({
        indent: { left: 1440 },
        children: [new TextRun({ text: "and", font: "Arial", size: 22, color: "000000" })],
        spacing: { before: 100, after: 100 },
    }),

    // --- Sub-list (iii) under 6.2 ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({ width: { size: 10, type: WidthType.PERCENTAGE }, children: [] }),
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "(iii)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 80, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "the Seller has as soon as possible notified the Buyer in writing about the delay in delivery of the Equipment, the exact reasons of delay and its likely or potential duration", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({
        indent: { left: 1440 },
        children: [new TextRun({ text: "and", font: "Arial", size: 22, color: "000000" })],
        spacing: { before: 100, after: 100 },
    }),

    // --- Sub-list (iv) under 6.2 ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({ width: { size: 10, type: WidthType.PERCENTAGE }, children: [] }),
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "(iv)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 80, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "the Seller has used its best endeavors to mitigate the effects of such delay on the Buyer.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 200 } }), // Spacer

    // --- Section 6.3 ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "6.3.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 90, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Seller hereby confirms that it has implemented an adequate contingency and disaster recovery plan outlining how it will manage the Global Supply Chain Crisis and any other factors that could disrupt the delivery of the Equipment to the Buyer, including but not limited to by securing substitute components of identical quality or alternative supply sources, to ensure that it delivers",
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

    // --- Signature Placeholder ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Signature Stamp]",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true,
            }),
        ],
        spacing: { before: 200, after: 200 },
    }),

    // --- Footer ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
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
                                        text: "CONTRACT NO. 25-149",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        borders: { top: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 12",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        borders: { top: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                    }),
                ],
            }),
        ],
    }),
];