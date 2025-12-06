```javascript
return [
    // 1. Top DocuSign ID
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // Smaller size for ID
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 2. Header Names with Underline (Simulated via Table with Bottom Border)
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
            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // The horizontal line
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    // 3. Contract Number
    new Paragraph({
        spacing: { before: 600, after: 400 },
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

    // 4. Date and Time Line (Layout Table)
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
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "concluded in Centennial, CO, USA on July 29th, 2025.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 65, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "30-Jul-2025 | 6:25 AM MDT",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 35, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    // 5. "by and between:"
    new Paragraph({
        spacing: { before: 400, after: 200 },
        children: [
            new TextRun({
                text: "by and between:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 6. Seller Paragraph
    new Paragraph({
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "STOLLE MACHINERY COMPANY LLC",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: ", a limited liability company organized and existing under the laws of the State of Colorado, with the registered address at 6949 South Potomac St. Centennial, CO 80112-4036, USA, hereinafter called the “",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Seller",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "”, duly represented by:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 7. Seller Representative
    new Paragraph({
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "Ms. Carolyn Crouch – Vice President, authorised to solely represent the Seller,",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 8. "and"
    new Paragraph({
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "and",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 9. Buyer Paragraph
    new Paragraph({
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "CANPACK Colombia S.A.S.",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: ", a corporation existing and duly organized in accordance with the laws of Colombia, registered in the Chamber of Commerce the 26th of September of 2017 under the number 02262465 of the book IX, identified with NIT. 901121179, address: Tocancipa (Cundinamarca), Km 1.5 Via Briceno – Zipaquira Vereda Verganzo S. Tibitoc, Colombia, hereinafter referred to as the “",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Buyer",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "”, duly represented by:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 10. Buyer Representatives
    new Paragraph({
        spacing: { after: 100 },
        children: [
            new TextRun({
                text: "Mr. Camilo Ernesto Perez Bustos - General Manager, and",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        spacing: { after: 600 },
        children: [
            new TextRun({
                text: "Mr. William Peña – Operational Manager.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 11. Recitals
    new Paragraph({
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "Having in mind the good repute of the Seller on the market, the position of the Buyer being the supplier of containers to demanding first class clients and a development of a successful co-operation, the Parties have concluded the following Contract:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 12. Signature Placeholder (Right aligned)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { before: 400, after: 100 },
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 13. Footer Line and Text (Simulated via Table with Top Border)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // The horizontal line
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                spacing: { before: 100 },
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                spacing: { before: 100 },
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 1",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
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
];
```