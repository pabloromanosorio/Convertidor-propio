```javascript
return [
    // --- DocuSign Header ---
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

    // --- Header Table (Company Names) ---
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
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
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        borders: {
                            bottom: { style: "single", size: 12, color: "000000" },
                            top: { style: "none" },
                            left: { style: "none" },
                            right: { style: "none" },
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                        borders: {
                            bottom: { style: "single", size: 12, color: "000000" },
                            top: { style: "none" },
                            left: { style: "none" },
                            right: { style: "none" },
                        },
                    }),
                ],
            }),
        ],
    }),

    // --- Spacer ---
    new Paragraph({ text: "", spacing: { after: 200 } }),

    // --- Body Text Fragment ---
    new Paragraph({
        indent: { left: 720 }, // Indented to match text block of subsequent items
        children: [
            new TextRun({
                text: "of parts replacement the warranty period for the Equipment shall be extended by the period when the part was defective until it was successfully replaced and installed.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- 7.9 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "7.9.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Buyer is entitled to rescind the Contract if the Seller fails to remedy in reasonable time the defects or to supply suitable spares. Par. 12.6 shall apply respectively.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- 7.10 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "7.10.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Seller shall guarantee the supply of spare parts for the Equipment it delivers, for the period of minimum 10 (ten) years.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- 8. Header ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "8.\t",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "TRANSPORT AND NOTIFICATION OF READINESS",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- 8.1 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "8.1.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Seller shall provide to the Buyer at least twenty-one (21) days before delivery, the following information:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // --- 8.1 List Items (a-d) ---
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "a)\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "number of the Contract;", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "b)\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "the Equipment’s description with Harmonized Code (HSCODE);", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "c)\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "estimated net/gross weight, size, and number of cases (the final data shall be provided by the Seller five (5) days before scheduled delivery);", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "d)\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "date of delivery.", font: "Arial", size: 22, color: "000000" }),
        ],
        spacing: { after: 200 },
    }),

    // --- 8.2 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "8.2.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "After dispatch the Seller shall immediately deliver to the Buyer the following documents:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // --- 8.2 List Items (a-b) ---
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "a)\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "invoice and specification, and", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 360 },
        children: [
            new TextRun({ text: "b)\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "packing list.", font: "Arial", size: 22, color: "000000" }),
        ],
        spacing: { after: 200 },
    }),

    // --- 8.3 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "8.3.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Seller agrees to cooperate with forwarders and carriers nominated by the Buyer for shipment of the Equipment.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- 8.4 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "8.4.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Seller represents and warrants that it shall be fully liable for non-fulfilment or improper fulfilment of the provisions set forth above. The Seller shall reimburse to the Buyer any and all costs, charges, fees, penalties etc. borne by the Buyer as a result and in case of a breach by the Seller of the aforementioned obligations and commitments.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- 8.5 ---
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "8.5.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "After dispatch the Seller shall immediately deliver all original documents: invoice, packing list and Certificate of Origin to the Buyer by courier to below address: Attn: Mrs. Sylwia Kutnik sylwia.kutnik@canpack.com.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // --- Signature Placeholder ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Signature DS/U]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // --- Footer Table ---
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
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
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        borders: {
                            top: { style: "single", size: 12, color: "000000" },
                            bottom: { style: "none" },
                            left: { style: "none" },
                            right: { style: "none" },
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 15",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                        borders: {
                            top: { style: "single", size: 12, color: "000000" },
                            bottom: { style: "none" },
                            left: { style: "none" },
                            right: { style: "none" },
                        },
                    }),
                ],
            }),
        ],
    }),
];
```