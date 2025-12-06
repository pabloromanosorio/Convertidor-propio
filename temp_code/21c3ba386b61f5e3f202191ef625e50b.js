```javascript
return [
    // 1. DocuSign Header
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                color: "000000",
                size: 16, // Smaller size for ID
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 2. Company Header (Table for alignment and underline)
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
                                        color: "000000",
                                        size: 22,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                            top: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
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
                                        color: "000000",
                                        size: 22,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                            top: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 3. Clause 15.4
    new Paragraph({
        children: [
            new TextRun({
                text: "15.4. Seller further certifies that:",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 200 },
    }),

    // 4. Sub-clauses (Indented)
    new Paragraph({
        indent: { left: 720 }, // Indent for 15.4.1
        children: [
            new TextRun({
                text: "15.4.1 the Seller is not an entity that is owned 50% or more in the aggregate by one or more SDNs;",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 100 },
    }),
    new Paragraph({
        indent: { left: 720 },
        children: [
            new TextRun({
                text: "15.4.2 none of Seller’s subsidiaries is an SDN or owned 50% or more in the aggregate by one or more SDNs;",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 100 },
    }),
    new Paragraph({
        indent: { left: 720 },
        children: [
            new TextRun({
                text: "15.4.3 Seller will immediately notify the Buyer in writing if there will be or is a change in ownership or other circumstance so as to result in inclusion of the Seller or any of its subsidiaries or shareholders on the SDN list or owned 50% or more in the aggregate by one or more SDNs.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 200 },
    }),

    // 5. Indented Paragraph following 15.4.3
    new Paragraph({
        indent: { left: 720 },
        children: [
            new TextRun({
                text: "Seller understands and agrees that an SDN status of the Seller or Seller’s shareholders or subsidiaries may be considered as a Force Majeure event that gives the Buyer the right to immediately cease the purchase of the Equipment and terminate the Contract with the Seller with no liability.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 300 },
    }),

    // 6. Clause 15.5
    new Paragraph({
        children: [
            new TextRun({
                text: "15.5. The Seller represents that in performing of this Contract it will refrain from subcontracting any services to individuals or entities identified on a restricted party listing or subject to sanctions by a Sanction Authority, SDNs (as defined above) or persons owned 50% or more by SDNs, including but not limited to transporters, shipping lines, agents, brokers, distributors, warehouses, insurance companies, banks and financial institutions.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 300 },
    }),

    // 7. Clause 15.6
    new Paragraph({
        children: [
            new TextRun({
                text: "15.6. In case of sanctions on purchase, transfer, exportation or re-exportation, processing or transforming or other actions on the Equipment being introduced or reintroduced by Sanctions Authorities, the Buyer may be required to immediately cease procurement of the Equipment and wind down operations according to timeline prescribed by the Sanctions Authorities. In such event the Buyer has the right to immediately cease purchase of the Equipment and terminate the Contract with no liability, by sending a notice to the Seller.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 400 },
    }),

    // 8. Section 16 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "16. OTHER CONDITIONS",
                bold: true,
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 200 },
    }),

    // 9. Clause 16.1
    new Paragraph({
        children: [
            new TextRun({
                text: "16.1. The Seller and the Buyer declare that they shall act in good faith and shall exercise sound commercial judgment in the realization of this Contract.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 200 },
    }),

    // 10. Clause 16.2
    new Paragraph({
        children: [
            new TextRun({
                text: "16.2. Any changes to this Contract shall be made in written form and shall be approved by the Seller and the Buyer, otherwise being null and void. The Buyer and the Seller exclude any possibility to change the content of this Contract in the form of oral Contract.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        spacing: { after: 200 },
    }),

    // 11. Initials Image Placeholder (Right aligned)
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

    new Paragraph({ text: "" }), // Spacer

    // 12. Footer Table
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
                                        color: "000000",
                                        size: 22,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 21",
                                        bold: true,
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
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