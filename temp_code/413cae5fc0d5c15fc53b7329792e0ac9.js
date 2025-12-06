```javascript
return [
    // 1. Top Document ID
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

    // 2. Header Table (Company Names with underline)
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
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            top: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
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
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            top: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 200 } }), // Spacer

    // 3. Continuation Text (No. 2...)
    new Paragraph({
        children: [
            new TextRun({
                text: "No. 2 and any other documentation provided by the Seller with respect to this Contract , including but not limited to representations and warranties hereunder as regards the Equipment,",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720 }, // Indented to match body of list items
        spacing: { after: 200 },
    }),

    // 4. List Item m)
    new Paragraph({
        children: [
            new TextRun({
                text: "m)\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "the Equipment shall be in compliance with all applicable laws, including, without limitation, all federal, state and local laws, ordinances, regulations, standards, rules, requirements, and policies, administrative rulings, court judgements and decrees, and all amendments thereto, including those imposed by any governmental or regulatory authority and any local regulatory requirements and all applicable industry standards which apply from time to time to the supply or use or re-sale of the Equipment in those countries where this Contract will be performed, including but not limited to regulations related to protection of environment, health and safety in Colombia,",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720, hanging: 360 },
        spacing: { after: 200 },
    }),

    // 5. List Item n)
    new Paragraph({
        children: [
            new TextRun({
                text: "n)\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "the services provided by the Seller shall be in compliance with statutory regulations related to health and safety rules (including protective clothing for Seller’s technicians and other employees) in the place where services are performed; the Seller shall instruct its employees about the abovementioned statutory regulations,",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720, hanging: 360 },
        spacing: { after: 200 },
    }),

    // 6. List Item o)
    new Paragraph({
        children: [
            new TextRun({
                text: "o)\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "the Seller shall observe all applicable laws and standards on discrimination at work (sex, race, ethnic background, religion, world-view, disability, age, sexual orientation) and it shall not make use of slave or children labor.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720, hanging: 360 },
        spacing: { after: 200 },
    }),

    // 7. Section 2. DELIVERY TIME
    new Paragraph({
        children: [
            new TextRun({
                text: "2.\t",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "DELIVERY TIME",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720, hanging: 360 },
        spacing: { after: 200 },
    }),

    // 8. Section 2.1
    new Paragraph({
        children: [
            new TextRun({
                text: "2.1.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Equipment specified in par. 1.1 hereof shall be delivered FCA, with the following schedule:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080, hanging: 500 },
        spacing: { after: 200 },
    }),

    // 9. Section 2.1.1
    new Paragraph({
        children: [
            new TextRun({
                text: "2.1.1.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Equipment specified in par. 1.1.1, 1.1.2 FCA Seller’s plant Centennial US, according to Incoterms 2020 and 1.1.4 FCA Seller’s plant Brazil, according to Incoterms 2020 on or before August 24, 2026, and",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1800, hanging: 720 },
        spacing: { after: 200 },
    }),

    // 10. Section 2.1.2
    new Paragraph({
        children: [
            new TextRun({
                text: "2.1.2.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Equipment specified in par. 1.1.3 FCA Seller’s plant Brazil on or before August 31, 2026.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1800, hanging: 720 },
        spacing: { after: 200 },
    }),

    // 11. Section 2.2
    new Paragraph({
        children: [
            new TextRun({
                text: "2.2.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Buyer shall not be obliged to pick the Equipment up earlier than on the abovementioned dates. The Parties agree that time of delivery is of the essence.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080, hanging: 500 },
        spacing: { after: 200 },
    }),

    // 12. Section 2.3
    new Paragraph({
        children: [
            new TextRun({
                text: "2.3.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Equipment shall only be delivered after having passed the Preliminary Acceptance Test specified in Section 5 of this Contract with a positive result.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080, hanging: 500 },
        spacing: { after: 200 },
    }),

    // 13. Section 2.4
    new Paragraph({
        children: [
            new TextRun({
                text: "2.4.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Seller shall deliver Documentation as per Enclosure No. 2.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080, hanging: 500 },
        spacing: { after: 200 },
    }),

    // 14. Section 2.5
    new Paragraph({
        children: [
            new TextRun({
                text: "2.5.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The term „delivery” shall mean the date of delivery of last piece of Equipment, so that the Equipment and each part thereof has been delivered to the Buyer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080, hanging: 500 },
        spacing: { after: 400 },
    }),

    // 15. Signature Image Placeholder (Right Aligned)
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

    // 16. Footer Table
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
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 6",
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
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
                    }),
                ],
            }),
        ],
    }),
];
```