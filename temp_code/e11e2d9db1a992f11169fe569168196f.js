```javascript
return [
    // 1. Top ID
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

    // 2. Header Table (Company Names with Underline/Border)
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
                                        bold: true,
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        borders: {
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        bold: true,
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        borders: {
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                    }),
                ],
            }),
        ],
    }),

    // Spacer
    new Paragraph({ text: "", spacing: { after: 200 } }),

    // 3. Body Text (Continuation)
    new Paragraph({
        children: [
            new TextRun({
                text: "provide a written estimate of the cost and expenses incurred by the Seller under this Contact through the effective date of such termination, including, without limitation, costs for engineering and planning, costs for materials production and storage and the costs inherent to the resale of materials to third parties. In the event that such costs and expenses exceed amounts paid by the Buyer to the Seller hereunder to the termination date, the Buyer shall, within 30 (thirty) days of the effective date of such termination, reimburse the Seller for the amount of such excess, plus a 5% mark-up. There will be no reimbursement for any costs incurred by the Seller after the effective date of such termination.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.BOTH,
        spacing: { after: 200 },
    }),

    // 4. Clause 16.7
    new Paragraph({
        children: [
            new TextRun({
                text: "16.7. This Contract has been made in English language and may be executed by electronic signatures in one or more counterparts, each of which shall be deemed an original as against any Party whose signature appears thereon, but all of which together shall constitute one and the same instrument.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.BOTH,
        spacing: { after: 200 },
    }),

    // 5. Clause 16.8
    new Paragraph({
        children: [
            new TextRun({
                text: "16.8. The persons signing the Contract on behalf of the Buyer and the Seller are entitled to represent legally the companies and to enter into commitments in their names.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.BOTH,
        spacing: { after: 200 },
    }),

    // 6. Clause 16.9
    new Paragraph({
        children: [
            new TextRun({
                text: "16.9. Each Party shall cover all its own costs incurred in connection with drawing up and concluding this Contract.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.BOTH,
        spacing: { after: 200 },
    }),

    // 7. Clause 16.10
    new Paragraph({
        children: [
            new TextRun({
                text: "16.10. The Seller may not assign its rights under this Contract without prior written consent of the Buyer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.BOTH,
        spacing: { after: 200 },
    }),

    // 8. Clause 16.11
    new Paragraph({
        children: [
            new TextRun({
                text: "16.11. No general conditions of sales, general conditions of contracts or alike of any Party hereto shall be applicable.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.BOTH,
        spacing: { after: 200 },
    }),

    // 9. Clause 16.12
    new Paragraph({
        children: [
            new TextRun({
                text: "16.12. In case of merger, division or any other transformations of any Party as of the merger date, the successor i.e. the acquiring company or the new company shall assume all rights and duties resulting from the present Contract of the Party being acquired or the companies or partnerships merging by formation of a new company. As of the merger date, the acquiring company or the new company shall take over, all the Seller’s obligations resulting from this Contract.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.BOTH,
        spacing: { after: 200 },
    }),

    // 10. Clause 16.13
    new Paragraph({
        children: [
            new TextRun({
                text: "16.13. The Seller shall in no way whatsoever divulge or disclose to third parties any information, methodology or material about the Buyer or his affiliated, dominant or dependent companies or his contractor and which was received by the Seller in the course of negotiation or realization of the present Contract, unless express permission to do so is given in writing form representatives of the Buyer or disclosure of such information is required by mandatory legal provisions specified",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.BOTH,
        spacing: { after: 200 },
    }),

    // 11. Signature Placeholder (Right Aligned)
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

    // 12. Footer Table
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
                                        text: "CONTRACT NO. 25-149",
                                        font: "Arial",
                                        bold: true,
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 23",
                                        font: "Arial",
                                        bold: true,
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                    }),
                ],
            }),
        ],
    }),
];
```