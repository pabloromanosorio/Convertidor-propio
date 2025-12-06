```javascript
return [
    // 1. DocuSign ID (Small text at top)
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

    // 2. Header Table (Company Names with Bottom Border)
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
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        borders: {
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    // Spacer
    new Paragraph({ text: "", spacing: { after: 200 } }),

    // 3. Introductory Sentence
    new Paragraph({
        children: [
            new TextRun({
                text: "The above mentioned law and Convention shall be applicable also in case of dispute.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
        indent: { left: 720 }, // Indented slightly
    }),

    // 4. Paragraph 10.2
    new Paragraph({
        children: [
            new TextRun({
                text: "10.2. In case of any dispute arising out of interpretation or realization of this Contract, or regarding its validity, the Parties agree to use every endeavor to resolve it amicably. In case of no solution being found within two (2) months from the commencement of such negotiations following the notice of one Party requesting the other to start negotiations, the Parties agree that all disputes or claims arising out of or in connection with this contract including disputes relating to its validity, breach, termination or nullity shall be finally settled under the Rules of Arbitration of the International Arbitral Centre of the Austrian Federal Economic Chamber in Vienna (Vienna Rules) by three arbitrators appointed in accordance with the said Rules. The language of arbitration shall be English language. The place of arbitration shall be Vienna. Each of the Parties regards the verdict of the Arbitration Court as final and waives any right of challenge against it under any jurisdiction and shall be obliged to execute it voluntarily.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 300 },
    }),

    // 5. Heading 11
    new Paragraph({
        children: [
            new TextRun({
                text: "11. PACKING",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 6. Paragraph 11.1
    new Paragraph({
        children: [
            new TextRun({
                text: "11.1. The Seller shall be responsible for adequate packing and protection of the Equipment suitable for road, air or sea transport. The cost of this is included in the Total Price.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200 },
    }),

    // 7. Paragraph 11.2
    new Paragraph({
        children: [
            new TextRun({
                text: "11.2. The wood used in the process of packing and preparing the Equipment for the transport has to be fumigated in accordance with the Regulation of Wood Packaging Material in International Trade - Revision of ISPM No. 15. Pallet and crate description shall be in line with provisions of aforementioned Regulation.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200 },
    }),

    // 8. Paragraph 11.3
    new Paragraph({
        children: [
            new TextRun({
                text: "11.3. In case of non - conformance with provisions of the above-mentioned Regulation, the Seller shall be obligated to cover additional costs connected with the import procedures associated with the use of improperly prepared wood.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 300 },
    }),

    // 9. Heading 12
    new Paragraph({
        children: [
            new TextRun({
                text: "12. START UP AND COMMISSIONING",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 10. Paragraph 12.1
    new Paragraph({
        children: [
            new TextRun({
                text: "12.1. The Seller is obliged to send his technician within four (4) weeks after being notified by the Buyer that the Equipment as indicated in par. 1.1 above, is ready for installation, start-up and commissioning.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200 },
    }),

    // 11. Paragraph 12.2
    new Paragraph({
        children: [
            new TextRun({
                text: "12.2. Following the conclusion of the commissioning period, the Final Acceptance Test for the Equipment shall be run and the Final Acceptance Test Protocol shall be signed upon a successful Final",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200 },
    }),

    // 12. Signature Placeholder (Right aligned, before footer)
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder - Signature Box]",
                font: "Arial",
                size: 16,
                color: "000000",
                italics: true,
            }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { after: 100 },
    }),

    // 13. Footer Table (Contract No and Page No with Top Border)
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
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 17",
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
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),
];
```