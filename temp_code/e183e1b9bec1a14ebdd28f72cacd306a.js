```javascript
return [
    // --- Header Section (DocuSign ID and Company Name) ---
    // Using a table to handle left/right alignment with a bottom border to simulate the header line
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
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
                                        size: 16, // Smaller font for header metadata
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
                                        size: 16,
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

    // Spacer
    new Paragraph({
        text: "",
        spacing: { after: 400 },
    }),

    // --- Main Titles ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 5 TO CONTRACT No. 25-149",
                bold: true,
                font: "Arial",
                size: 24, // Larger for title
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
                size: 24,
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

    // --- Date Field ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "date..............",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- Buyer / Seller Information Table ---
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
                    // Left Column: Buyer
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { after: 100 },
                                children: [
                                    new TextRun({
                                        text: "Buyer:",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CANPACK Colombia S.A.S.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Tocancipa (Cundinamarca), Km 1.5 Via Briceno",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Zipaquira Vereda Verganzo S. Tibitoc, Colombia",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    // Right Column: Seller
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { after: 100 },
                                children: [
                                    new TextRun({
                                        text: "Seller:",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
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
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "6949 South Potomac St.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Centennial, CO 80112-4036, USA",
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

    // Spacer
    new Paragraph({
        text: "",
        spacing: { after: 400 },
    }),

    // --- Body Paragraphs ---
    new Paragraph({
        spacing: { after: 200 },
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
        alignment: AlignmentType.JUSTIFIED,
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
        alignment: AlignmentType.JUSTIFIED,
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

    // --- Signatures Section ---
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

    // --- Bottom Right Image Placeholder ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { before: 400 },
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