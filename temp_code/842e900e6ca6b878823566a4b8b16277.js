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
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 400 } }), // Spacer

    // 3. First Paragraph (No Number)
    new Paragraph({
        children: [
            new TextRun({
                text: "Acceptance Test. The Final Acceptance Test shall be performed and Final Acceptance Test Protocol shall be signed. Separate Final Acceptance Test shall be conducted for each piece of Equipment listed in par. 1.1.1-1.1.4.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240 },
    }),

    // 4. Clause 12.3
    new Paragraph({
        children: [
            new TextRun({
                text: "12.3.\tDuring the Final Acceptance Test proper working of Equipment, product quality, efficiency and conformity to the contractual requirements will be measured. Final Acceptance Test shall last forty-eight (48) hours of continuous running and efficiency shall achieve at least the level of 85%.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 }, // Hanging indent to align text block
        spacing: { after: 240 },
    }),

    // 5. Clause 12.4
    new Paragraph({
        children: [
            new TextRun({
                text: "12.4.\tIf on the 10th day following the arrival of the Seller's technician to begin installation, start up and commissioning of any of the Equipment, the Final Acceptance Test has not been successfully completed due to circumstances attributable to the Seller, the Seller’s technician shall remain on site at the Seller’s expense for as long as it is necessary to complete the Final Acceptance Test successfully and sign and accept by the Buyer the Final Acceptance Test Protocol.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        spacing: { after: 240 },
    }),

    // 6. Clause 12.5
    new Paragraph({
        children: [
            new TextRun({
                text: "12.5.\tIf however the Equipment cannot achieve the contractual parameters and efficiency, as indicated in par. 12.3, due to the reasons attributable to the Buyer, and not in any way related to malfunctioning or defectiveness of the Equipment, the Parties may execute the Conditional Acceptance Test Protocol, stating that the Equipment did not achieve full conformity with the contractual requirements stated in the Contract, nevertheless the Seller has allowed its commercial use before the full conformity is achieved. In such circumstances, the Seller is obliged to again send his technician within two (2) weeks after being notified by the Buyer that the Equipment is ready to be subject to the Final Acceptance Test, at the Buyer’s expense. To avoid any doubt, the Contract is deemed to be duly performed by the Seller only when the Final Acceptance Test is executed.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        spacing: { after: 240 },
    }),

    // 7. Clause 12.6
    new Paragraph({
        children: [
            new TextRun({
                text: "12.6.\tIf due to the circumstances attributable to the Seller, the Seller cannot execute successfully the Final Acceptance Test for each piece of Equipment within thirty (30) days of arrival of the Seller's technician to the Buyer’s plant, it shall be deemed as a fundamental breach of the Contract. In that case, the Contract shall require an executive meeting between the Seller and the Buyer, including the Seller’s Executive Vice President and anyone else deemed necessary by the Seller to be in attendance for the executive review. The purpose of the review will be discussion centered around resolution of the problems and could include the possibility of Contract rescission. Should the Parties fail to agree on solution of problems that occurred within two (2) weeks upon lapse of the 30-day period mentioned above, the Buyer, without prejudice of any rights it may have under",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        spacing: { after: 240 },
    }),

    // 8. Signature Image Placeholder (Aligned Right, above footer)
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { after: 100 },
    }),

    // 9. Footer Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // Thick top border
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 18",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
        ],
    }),
];
```