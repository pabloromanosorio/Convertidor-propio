```javascript
return [
    // 1. DocuSign ID (Top Left, Small)
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

    // 2. Header Line (Company Names with Underline/Border)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // The solid line across
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
                                        size: 20,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE },
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
                                        underline: { type: UnderlineType.SINGLE },
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

    // 3. Enclosure Title
    new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 4 TO CONTRACT NO. 25-149",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // 4. Logo Section (Stolle Machinery Co, LLC + Logo Placeholder)
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
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Stolle Machinery Co, LLC",
                                        font: "Arial",
                                        size: 36, // 18pt
                                        bold: true,
                                        color: "000000", // Greyish in image, but rule says 000000
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
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
                        ],
                        width: { size: 40, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    // 5. NOTICE Title
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 240, after: 240 },
        children: [
            new TextRun({
                text: "NOTICE",
                font: "Arial",
                size: 28,
                bold: true,
                underline: { type: UnderlineType.SINGLE },
                color: "000000",
            }),
        ],
    }),

    // 6. Salutation
    new Paragraph({
        spacing: { after: 120 },
        children: [
            new TextRun({
                text: "Dear Stolle Machinery Customers:",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // 7. Intro Text
    new Paragraph({
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "When making payments to Stolle Machinery Company, LLC, Please use the following information:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 8. Addresses Table (Checks vs Courier)
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
                    // Left Column: Checks
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "SEND CHECKS ONLY TO:",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
                                        color: "000000",
                                    }),
                                ],
                                spacing: { after: 120 },
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Stolle Machinery Company, LLC",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "7329 Solution Center",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Chicago, IL 60677-7003",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    // Right Column: Courier
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "FOR REMITS BY NEXTDAY COURIER:",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
                                        color: "000000",
                                    }),
                                ],
                                spacing: { after: 120 },
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Stolle Machinery Co, LLC",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Lockbox Number 777329",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "350 East Devon Avenue",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Itasca, IL 60143",
                                        font: "Arial",
                                        size: 20,
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

    // 9. Dotted Separator
    new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [
            new TextRun({
                text: "...................................................................................................................................................................",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 10. Wire Transfer Header
    new Paragraph({
        spacing: { after: 120 },
        children: [
            new TextRun({
                text: "SEND WIRE TRANSFERS TO:",
                font: "Arial",
                size: 22,
                bold: true,
                underline: { type: UnderlineType.SINGLE },
                color: "000000",
            }),
        ],
    }),

    // 11. Wire Transfer Details Table
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
            // Bank Address
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "BANK ADDRESS:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "SUMITOMO MITSUI BANKING CORP. LOS ANGELES", font: "Arial", size: 22, bold: true, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "601 S. Figueroa Street, Suite 1800", font: "Arial", size: 22, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Los Angeles, CA 90017", font: "Arial", size: 22, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "U.S.A", font: "Arial", size: 22, color: "000000" })] }),
                        ],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Account No
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "ACCOUNT NO.", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "4531689170", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // ABA Route No (Wires)
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "ABA ROUTE NO.", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "122041594 (Wires)", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // ABA Route No (ACH)
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "ABA ROUTE NO.", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "122041594 (ACH)", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Note
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "*** When using an ACH payment method, please provide details of payment to your account representative)",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                                spacing: { before: 120, after: 120 },
                            }),
                        ],
                    }),
                ],
            }),
            // Benefit
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "BENEFIT:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Stolle Machinery Company, LLC", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // SWIFT
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "S.W.I.F.T", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "SMBCUS33", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    // 12. Review Note
    new Paragraph({
        spacing: { before: 300, after: 200 },
        children: [
            new TextRun({
                text: "PLEASE REVIEW ALL YOUR RECORDS AND CORRECT.",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // 13. Signature Section
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Rodrigo Pizani",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Corporate Executive V.P. Finance",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Stolle Machinery Company",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // 14. Footer
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
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
                                        text: "ENCLOSURE NO. 4 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 1",
                                        font: "Arial",
                                        size: 20,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "DS\nCC",
                                        font: "Arial",
                                        size: 16,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),
];
```