```javascript
return [
    // --- Top Header (DocuSign ID and Company Name) ---
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE, size: 0, color: "auto" },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // Line underneath
            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
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
                                        text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                                        font: "Arial",
                                        size: 16, // Smaller size for ID
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

    // --- Spacing ---
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // --- Title Section ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 200 },
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 5 TO CONTRACT No. 25-149",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "DELIVERY ACCEPTANCE PROTOCOL",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "in accordance with CONTRACT NO. 25-149",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- Date ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { before: 400, after: 400 },
        children: [
            new TextRun({
                text: "date..............",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- Buyer / Seller Info Table ---
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE, size: 0, color: "auto" },
            bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
        },
        rows: [
            new TableRow({
                children: [
                    // Buyer Column
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Buyer:", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "CANPACK Colombia S.A.S.", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "Tocancipa (Cundinamarca), Km 1.5 Via Briceno", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "Zipaquira Vereda Verganzo S. Tibitoc, Colombia", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    // Seller Column
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Seller:", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "STOLLE MACHINERY COMPANY LLC", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "6949 South Potomac St.", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [new TextRun({ text: "Centennial, CO 80112-4036, USA", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // --- Body Paragraphs ---
    new Paragraph({
        spacing: { before: 400, after: 200 },
        children: [
            new TextRun({
                text: "CANPACK Colombia S.A.S and STOLLE MACHINERY COMPANY LLC, hereinafter referred to as the “Parties”,",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "hereby confirm that the following pieces of the Equipment indicated in par. 1.1 of the Contract:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "have been delivered pursuant to par. 2.1 of the Contract, however they have not been installed, started-up or commissioned yet.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "Notwithstanding the above, the Parties agree that the Buyer shall make payment specified in par. 4.1.3 of the Contract, i.e. in the amount of 10% of the price of a piece of Equipment being subject to this Delivery Acceptance Protocol, within thirty (30) days following execution of this Delivery Acceptance Protocol, even though the Final Acceptance Test has not been performed as determined in Section 12 of the Contract No. 25-149.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "For the avoidance of doubt, the Parties agree that effecting by the Buyer of the above payment does not in any way relieve the Seller from its responsibility for the compliance of the Equipment with the Contract and that any and all Buyer’s rights related to the warranties granted by the Seller based on the Contract are maintained.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- Signatures Table ---
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE, size: 0, color: "auto" },
            bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
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
                                        text: "For CANPACK Colombia S.A.S",
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
                                children: [
                                    new TextRun({
                                        text: "For STOLLE MACHINERY COMPANY LLC",
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

    // --- Footer Image Placeholder ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { before: 600 },
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
];
```