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

    // 2. Header (Company Names with Underline/Border)
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
            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // Thick bottom line
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    // Spacer
    new Paragraph({
        children: [],
        spacing: { before: 240, after: 240 },
    }),

    // 3. Clause 16.3
    new Paragraph({
        children: [
            new TextRun({
                text: "16.3. In case of discrepancy between this Contract and the law applicable, the provisions of this Contract shall prevail. If any provision or provisions of this Contract shall be held to be illegal, invalid or unenforceable, the legality, validity or enforceability of the remaining provisions shall not be in any way affected or impaired thereby. In case of any discrepancy between the Contract and the Enclosures attached hereof, the provisions of this Contract shall prevail and the order shall be as follows: the Contract and then the Enclosures.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
        alignment: AlignmentType.BOTH,
    }),

    // 4. Clause 16.4
    new Paragraph({
        children: [
            new TextRun({
                text: "16.4. This Contract rescinds all previously made arrangements between the Parties, both written and verbal, which are in breach or contrary with its provisions. The Seller and the Buyer state that apart from this Contract there are no other Contracts between them and that this Contract regulates all the matters agreed between the Seller and the Buyer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
        alignment: AlignmentType.BOTH,
    }),

    // 5. Clause 16.5
    new Paragraph({
        children: [
            new TextRun({
                text: "16.5. The Seller shall indemnify and hold the Buyer harmless from and against all lawsuits, actions, legal proceedings, claims, damages and expenses of whatsoever kind (including attorney's fees and expenses) arising out of any breach by the Seller of any rights of any third party (hereunder copyrights, registered trademarks, patents or whatsoever) to the Equipment (including program, Documentation and any part thereof) and/or tooling supplied under this Contract and/or out of a breach of any such rights of a third party in connection with a method and/or process applied and/or products manufactured as a result of the use of such an Equipment or tooling. In addition to the foregoing indemnification, it is agreed and understood that the Seller shall, at its cost and expense, defend, indemnify, protect and hold the Buyer harmless from and against any and all claims arising out of or related to: a breach of applicable law, covenant, representation or warranty set forth in the Contract; a breach of relevant data protection legislation; the activities or omissions of the Seller, its employees, agents or subcontractors, in connection with the Contract, including but not limited to, negligence, wrongful act or misrepresentation, errors or omissions. The obligations under this clause shall survive the expiry or termination of the Contract. Should any of the above mentioned claims be filed against the Buyer or reported to him, the Buyer shall promptly notify the Seller thereof. In such a case the Seller shall have the right to participate in the legal proceedings, provided that in case of a voluntary acceptance of the claim, amicable settlement or the like imposing any obligation on the Buyer to pay, the Seller shall provide the Buyer with appropriate funds to secure payment in advance.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
        alignment: AlignmentType.BOTH,
    }),

    // 6. Clause 16.6
    new Paragraph({
        children: [
            new TextRun({
                text: "16.6. Without affecting any other right or remedy available to it, the Buyer may terminate this Contract on giving not less than 30-days written notice to the Seller. In such case the Seller shall promptly",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 120 },
        alignment: AlignmentType.BOTH,
    }),

    // 7. Initials / Signature Box (Right Aligned Image Placeholder)
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
        spacing: { after: 120 },
    }),

    // 8. Footer (Contract No / Page No with Top Border)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // Thick top line
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
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
                        verticalAlign: "center",
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 22",
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
                        verticalAlign: "center",
                    }),
                ],
            }),
        ],
    }),
];