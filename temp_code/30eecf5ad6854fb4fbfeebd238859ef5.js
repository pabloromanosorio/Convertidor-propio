return [
    // 1. Document ID (Top Left, Small)
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

    // 2. Header (Stolle / Canpack) with Bottom Border
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // The line under the header
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
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
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 3. Main Content List (Using Table for layout to avoid manual numbering issues and ensure alignment)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
        },
        rows: [
            // Item f)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: "top",
                        children: [new Paragraph({ children: [new TextRun({ text: "f)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 95, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "no third party rights (including but not limited to patents and industrial designs relating to the Equipment) were infringed in connection with the development of the Equipment by the Seller and/or purchasing Equipment by the Buyer, with using the Equipment for manufacturing its products and/or by any method and/or process applied in connection with the use of the Equipment, process applied in connection with the use of the Equipment and/or the apparatus as the Equipment is a part of,",
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
            // Item g)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: "top",
                        children: [new Paragraph({ children: [new TextRun({ text: "g)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 95, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "no proceedings or disputes relating to the rights of the Seller to Equipment are being conducted or threatened and there are no grounds for the commencement of such proceedings or disputes,",
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
            // Item h)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: "top",
                        children: [new Paragraph({ children: [new TextRun({ text: "h)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 95, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "the Seller has the power to execute this Contract and to perform its obligations under this Contract and has taken all necessary action to authorize such execution and performance,",
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
            // Item i)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: "top",
                        children: [new Paragraph({ children: [new TextRun({ text: "i)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 95, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "execution and performance of the Contract by the Seller do not violate or conflict with any law applicable, any provision of its internal and/or corporate documents, any order or judgment of any court or other agency of government applicable to the Seller or any of its assets or any contractual restriction binding on or affecting it or any of its assets,",
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
            // Item j)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: "top",
                        children: [new Paragraph({ children: [new TextRun({ text: "j)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 95, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "the Seller’s commitments under this Contract constitute its legal, valid and binding obligations, enforceable in accordance with their respective terms (subject to applicable bankruptcy, reorganization, insolvency, moratorium or similar laws affecting creditors' rights generally and subject, as to enforceability, to equitable principles of general application),",
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
            // Item k)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: "top",
                        children: [new Paragraph({ children: [new TextRun({ text: "k)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 95, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "all information that is furnished in writing by or on behalf of the Seller to the Buyer is true, accurate and complete in every material respect,",
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
            // Item l)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: "top",
                        children: [new Paragraph({ children: [new TextRun({ text: "l)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 95, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "documentation to be delivered by the Seller according to the Enclosure No. 2 and any other documentation provided by the Seller with respect to this Contract (“Documentation”), will be complete (including all drawings, manuals), correct, true, valid and complying with the provisions of the present Contract, and that the Seller holds the exclusive and unrestricted copyright to the Documentation and no third parties’ rights, especially employees of the Seller or co-operators or alike, were and/or will be infringed in connection with the development, delivery of the Documentation to the Buyer and use of the Documentation. Upon the delivery the Documentation, within the Total Price, the Seller hereby grants to the Buyer unrestricted right to use it in order to operate the Equipment and dispose of rights to the Documentation within the scope of any disposals of the Equipment. Whenever the term Equipment is used hereunder it also means the Documentation necessary to operate the Equipment and given in Enclosure",
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

    // 4. Signature Image Placeholder (Right Aligned)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                color: "000000",
            }),
        ],
    }),

    // 5. Footer (Contract No / Page No) with Top Border
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // Line above footer
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
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
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 5",
                                        font: "Arial",
                                        bold: true,
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
];