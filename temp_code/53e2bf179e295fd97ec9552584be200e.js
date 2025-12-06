```javascript
return [
    // 1. DocuSign ID (Top Header)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                color: "000000",
                size: 16, // Smaller font for ID
            }),
        ],
    }),

    // 2. Company Header (Underlined Names)
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
                                        color: "000000",
                                        size: 22,
                                        underline: { type: UnderlineType.SINGLE },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
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

    // 3. Enclosure Title
    new Paragraph({
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 4 TO CONTRACT NO. 25-149",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. Logo Section
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
                                        text: "Stolle Machinery Co, LLC",
                                        font: "Arial",
                                        color: "000000",
                                        size: 36, // Larger for logo text
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
                                        text: "[IMAGE placeholder]",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    // 5. NOTICE
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 400 },
        children: [
            new TextRun({
                text: "NOTICE",
                font: "Arial",
                color: "000000",
                size: 28,
                bold: true,
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),

    // 6. Salutation
    new Paragraph({
        children: [
            new TextRun({
                text: "Dear Stolle Machinery Customers:",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
            }),
        ],
    }),

    new Paragraph({
        children: [
            new TextRun({
                text: "When making payments to Stolle Machinery Company, LLC, Please use the following information:",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 7. Addresses (Two Columns)
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
                    // Left Column: Checks
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "SEND CHECKS ONLY TO:",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
                                    }),
                                ],
                            }),
                            new Paragraph({
                                spacing: { before: 200 },
                                children: [
                                    new TextRun({
                                        text: "Stolle Machinery Company, LLC",
                                        font: "Arial",
                                        color: "000000",
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "7329 Solution Center",
                                        font: "Arial",
                                        color: "000000",
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Chicago, IL 60677-7003",
                                        font: "Arial",
                                        color: "000000",
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    // Right Column: Courier
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "FOR REMITS BY NEXTDAY COURIER:",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
                                    }),
                                ],
                            }),
                            new Paragraph({
                                spacing: { before: 200 },
                                children: [
                                    new TextRun({
                                        text: "Stolle Machinery Co, LLC",
                                        font: "Arial",
                                        color: "000000",
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Lockbox Number 777329",
                                        font: "Arial",
                                        color: "000000",
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "350 East Devon Avenue",
                                        font: "Arial",
                                        color: "000000",
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Itasca, IL 60143",
                                        font: "Arial",
                                        color: "000000",
                                        size: 20,
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

    // 8. Separator Dots
    new Paragraph({
        spacing: { before: 300, after: 300 },
        children: [
            new TextRun({
                text: "................................................................................................................................................................................",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    // 9. Wire Transfer Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SEND WIRE TRANSFERS TO:",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),

    // 10. Wire Transfer Details Table
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
            // Bank Address
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "BANK ADDRESS:", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                    new TableCell({
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "SUMITOMO MITSUI BANKING CORP. LOS ANGELES", font: "Arial", color: "000000", size: 22, bold: true })] }),
                            new Paragraph({ children: [new TextRun({ text: "601 S. Figueroa Street, Suite 1800", font: "Arial", color: "000000", size: 22, bold: true })] }),
                            new Paragraph({ children: [new TextRun({ text: "Los Angeles, CA 90017", font: "Arial", color: "000000", size: 22, bold: true })] }),
                            new Paragraph({ children: [new TextRun({ text: "U.S.A", font: "Arial", color: "000000", size: 22, bold: true })] }),
                        ],
                    }),
                ],
            }),
            // Account No
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "ACCOUNT NO.", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "4531689170", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                ],
            }),
            // ABA Wires
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "ABA ROUTE NO.", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "122041594 (Wires)", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                ],
            }),
            // ABA ACH
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "ABA ROUTE NO.", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "122041594 (ACH)", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                ],
            }),
            // Note
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        children: [new Paragraph({ children: [new TextRun({ text: "*** When using an ACH payment method, please provide details of payment to your account representative)", font: "Arial", color: "000000", size: 20, bold: true })] })],
                    }),
                ],
            }),
            // Benefit
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "BENEFIT:", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Stolle Machinery Company, LLC", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                ],
            }),
            // SWIFT
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "S.W.I.F.T", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "SMBCUS33", font: "Arial", color: "000000", size: 22, bold: true })] })],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 11. Review Note
    new Paragraph({
        children: [
            new TextRun({
                text: "PLEASE REVIEW ALL YOUR RECORDS AND CORRECT.",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 12. Signature Section
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder]", // Signature Image
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Rodrigo Pizani",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Corporate Executive V.P. Finance",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Stolle Machinery Company",
                font: "Arial",
                color: "000000",
                size: 22,
                bold: true,
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer
    new Paragraph({ text: "" }), // Spacer

    // 13. Footer
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
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
                                        text: "ENCLOSURE NO. 4 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 1",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "[IMAGE placeholder]", // DS/CC Box
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
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