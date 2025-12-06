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
        spacing: { after: 200 },
    }),

    // 2. Header Table (Company Names)
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

    // Spacer
    new Paragraph({ text: "", spacing: { after: 200 } }),

    // 3. Item 4.3.2
    new Paragraph({
        indent: { left: 1440, hanging: 720 }, // Indented deeper than main list
        children: [
            new TextRun({
                text: "4.3.2.\tpacking list will be provided with every shipment.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 300 },
    }),

    // 4. Section 5 Header
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "5.\tINSPECTION AND TESTING. TRAINING OF THE BUYER'S PERSONNEL",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
        spacing: { after: 200 },
    }),

    // 5. Item 5.1
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "5.1.\tIt is the Seller’s obligation to perform with positive result before the delivery of the Equipment, a Preliminary Acceptance Test of the Equipment with participation of the Buyer or the Buyer’s representative. The Preliminary Acceptance Test shall be deemed as performed with positive result only when the Preliminary Acceptance Test Protocol confirming the preliminary acceptance of the Equipment is signed by the Buyer or the Buyer’s representative. The Preliminary Acceptance Test of the Equipment shall be carried out at the Seller’s premises prior to shipment. The Buyer or the Buyer’s representatives shall have the right to inspect the Equipment before the Preliminary Acceptance Test.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 6. Item 5.2
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "5.2.\tThe inspection of the Equipment shall be carried out at the Seller's plant in the operation and servicing of all offered Equipment.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 7. Paragraph under 5.2 (Indented to match text)
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720 }, // Aligned with the text of 5.2
        children: [
            new TextRun({
                text: "The Buyer shall supply free of charge to the Seller for performance of the Preliminary Acceptance Test a minimum amount of 10,000 lbs coil of body stock for the Equipment as per par. 1.1. to facilitate the Preliminary Acceptance Test run. These materials shall be at the Seller’s plant one (1) month before the agreed date of the Preliminary Acceptance Test. The Seller shall inform the Buyer about estimate date of the Preliminary Acceptance Test no later than three (3) months in advance to enable the Buyer to deliver the materials. Any quantity of body stock or cans not used during the Preliminary Acceptance Test run shall be returned to the Buyer at the time of Equipment shipment. All scrap (and the value of the scrap) generated from this Preliminary Acceptance Test run shall become the property of the Seller.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 8. Item 5.3
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "5.3.\tThe Seller's notification of the readiness of the Equipment for the inspection, training and the Preliminary Acceptance Test (also referred to as the „buy–off”) shall be received by the Buyer not later than twenty-one (21) days prior to the beginning of the Preliminary Acceptance Test and training period.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 9. Item 5.4
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "5.4.\tIn the event the Seller confirms the readiness of the Equipment for „buy–off”, and after the arrival of the Buyer or the Buyer’s representatives at the Seller’s plant, the Equipment should not be ready to be „bought-off”, the Seller shall pay for reasonable travel and living expenses to allow the Buyer or its representatives to stay at the Seller’s plant or leave and return to conclude the „buy-off” when",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 10. Signature Placeholder (Image overlay in source)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Signature Box]",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true,
            }),
        ],
        spacing: { after: 100 },
    }),

    // 11. Footer Table with Top Border
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // The horizontal line
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
                                        text: "CONTRACT NO. 25-149",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        verticalAlign: "center",
                        margins: { top: 100 },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 10",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        verticalAlign: "center",
                        margins: { top: 100 },
                    }),
                ],
            }),
        ],
    }),
];
```