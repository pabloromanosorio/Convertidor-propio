```javascript
return [
    // --- Top ID ---
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

    // --- Header Table ---
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
            top: { style: BorderStyle.NONE },
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
                                        text: "STOLLE MACHINERY COMPANY LLC",
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
                                        text: "CANPACK COLOMBIA S.A.S.",
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

    new Paragraph({ text: "" }), // Spacer

    // --- 4.1.1 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 }, // Hanging indent for numbering
        children: [
            new TextRun({ text: "4.1.1.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "20% of the Price of the Equipment as per 1.1.1 and 1.1.2 - down payment by means of wire transfer not later than on January 15", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "th", font: "Arial", size: 22, color: "000000", superScript: true }),
            new TextRun({ text: " 2026 and of the Equipment as per 1.1.3 and 1.1.4 - down payment by means of wire transfer not later than on March 1", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "st", font: "Arial", size: 22, color: "000000", superScript: true }),
            new TextRun({ text: " 2026;", font: "Arial", size: 22, color: "000000" }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- 4.1.2 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "4.1.2.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "70% of the price of individual piece of Equipment as specified in par. 3.3 - by means of wire transfer within ninety (90) days from the delivery of the respective piece of Equipment as per par. 2.1 against properly issued shipping documents;", font: "Arial", size: 22, color: "000000" }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- Paragraph under 4.1.2 ---
    new Paragraph({
        indent: { left: 720 }, // Indented to match text body
        children: [
            new TextRun({
                text: "The Buyer shall have the right not to effect the abovementioned payments until the Seller provides the Buyer with all properly issued documents.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- 4.1.3 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "4.1.3.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "10% of the individual piece of Equipment as specified in par. 3.3 – by means of wire transfer:", font: "Arial", size: 22, color: "000000" }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- 4.1.3.1 ---
    new Paragraph({
        indent: { left: 1440, hanging: 900 }, // Deeper indent
        children: [
            new TextRun({ text: "4.1.3.1.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "against the presentation of the Final Acceptance Test Protocol for the given piece of Equipment, executed at the plant in the Place of Destination, accepted by Project Manager – Mr Miroslaw Hawran or Mr Pawel Michalowski or Mr Lukasz Dobrzanski, against the invoice issued after the Final Acceptance Test Protocol for each piece of Equipment; or",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- 4.1.3.2 ---
    new Paragraph({
        indent: { left: 1440, hanging: 900 },
        children: [
            new TextRun({ text: "4.1.3.2.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "in the circumstances described in par. 12.5, against the presentation of Conditional Acceptance Test Protocol for the given piece of Equipment, executed at the plant in the Place of Destination, accepted by Project Manager – Mr Mirosław Hawran or Mr Pawel Michalowski or Mr Lukasz Dobrzanski, against the invoice issued after the Conditional Acceptance Test Protocol for each piece of Equipment.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- 4.2 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "4.2.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "All payments to the Seller are to be made as per the banking instructions attached as per Enclosure No. 4.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- 4.3 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "4.3.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "Seller declares that:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- 4.3.1 ---
    new Paragraph({
        indent: { left: 1440, hanging: 900 },
        children: [
            new TextRun({ text: "4.3.1.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "Original invoice indicating country of origin, specification, Harmonized CODE (HSCODE), net weight and gross weight of each equipment/item should be shown on invoice and packing list. Prior to sending the original invoice, the draft of the invoice, packing list should be sent to the Buyer by email first on sylwia.kutnik@canpack.com to check and confirm the draft. Once confirmed all original documents are required to be sent to the Buyer as per the address mentioned in par. 8.5;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // --- Footer Table ---
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
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
                                        text: "PAGE NO. 9",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            // Placeholder for the signature image overlapping the footer
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "[IMAGE placeholder]",
                                        font: "Arial",
                                        size: 16,
                                        color: "000000",
                                        italics: true,
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