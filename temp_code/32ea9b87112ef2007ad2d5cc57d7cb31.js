return [
    // 1. DocuSign Envelope ID (Small text at top)
    new Paragraph({
        children: [
            new TextRun({
                text: "Docusign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 2. Header Table (Company Names with Underline/Bottom Border)
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
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                    }),
                ],
            }),
        ],
    }),

    // 3. First Paragraph (Continuation text)
    new Paragraph({
        spacing: { before: 400, after: 200 },
        children: [
            new TextRun({
                text: "the law, shall be entitled to rescind the Contract. In case of rescission of the Contract, the Parties thereto shall return each other any property or money that have been delivered or paid. The Buyer shall return obtained elements of the Equipment on the basis EXW, Buyer’s plant where the Equipment is installed (Incoterms 2020). The rescission of the Contract shall be without any prejudice to any claim of either Party for indemnity because of breach of the Contract.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 4. Paragraph 12.7 (Hanging Indent simulation)
    new Paragraph({
        indent: { left: 720, hanging: 720 }, // Approx 0.5 inch hanging indent
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "12.7.\t",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "If, due to reasons attributable to the Buyer, following delivery of the Equipment pursuant to par. 2.1, the Equipment is being stored by the Buyer and the Parties are not able to perform the Final Acceptance Test and execute Final Acceptance Test Protocol (according to par. 12.2) or Conditional Acceptance Test Protocol (according to par. 12.5), the Seller shall have a right to request the Buyer to sign the Delivery Acceptance Protocol, template of which constitutes Enclosure No 5 hereto, containing confirmation of both Parties that the Equipment has been delivered, however it has not been installed, started-up or commissioned yet. In such case, the Buyer shall make payment specified in par. 4.1.3 within thirty (30) days following execution of the Delivery Acceptance Protocol. For the avoidance of doubt, each of the Parties agrees that releasing above payment by the Buyer does not in any way relieve the Seller from its responsibility for the compliance of the Equipment with the Contract and any and all Buyer’s rights related to the warranties granted by the Seller based on the Contract are maintained. The Buyer shall notify the Seller about the possibility to perform Final Acceptance Test and, in case of positive result, execute the Final Acceptance Test Protocol, once the Equipment is ready for installation, start-up and commissioning.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 5. Paragraph 2 (Hanging Indent simulation)
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "2\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Buyer’s representative responsible and authorized by the Buyer for verifying and accepting performance of the Equipment shall be Mr. Mirosław Hawran or Mr. Pawel Michalowski or Mr. Lukasz Dobrzanski.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 6. Section 13 Header
    new Paragraph({
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "13. CONTRACT COMING INTO EFFECT",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 7. Section 13 Body
    new Paragraph({
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "This Contract comes into full force and effect as of the execution date stated above.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 8. Section 14 Header
    new Paragraph({
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "14. PLACE OF FINAL DESTINATION",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 9. Section 14 Body
    new Paragraph({
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "The final destination of the Equipment (“Place of Destination”) shall be one of the Buyer’s manufacturing facilities located in South America. Exact location shall be provided by the Buyer one (1) month prior to date of delivery of the Equipment.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 10. Signature Placeholder (Right aligned)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 100 },
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Signature Box DS/U]",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true,
            }),
        ],
    }),

    // 11. Footer Table (Contract No / Page No with Top Border)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // The line above footer
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
                                        text: "PAGE NO. 19",
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