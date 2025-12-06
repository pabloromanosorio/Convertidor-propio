```javascript
return [
    // 1. DocuSign Envelope ID (Top Header)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 2. Header (Stolle / Canpack) with bottom border
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // Thick line
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

    // 3. Intro Paragraph
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Contract and performed by its affiliated companies are subject to the terms and conditions of this Contract, and that the Seller shall be liable for any acts and omissions of such Providers when performing services to the Buyer, in particular with respect to the terms on governing law and jurisdiction. The exact calculation of the fee for the Services shall be done according to provisions of par. 3.4. - 3.6. below.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. Clause 1.10 (Using Table for layout to handle "1.10" alignment)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
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
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "1.10",
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
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Seller is fully responsible for (i) providing a sufficient number of technicians in order to render the Services set forth herein, and (ii) adopting all necessary measures and incurring in all costs to obtain the applicable permissions or visas to allow the technicians to enter into and provide the services in the territory of the Colombia.",
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

    // 5. Clause 1.11
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
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
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "1.11",
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
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "Notwithstanding any provision of this Contract, the Seller undertakes to comply with all applicable labor and social security legislation while rendering to the Buyer any services whatsoever. The Seller undertakes, without any limitation to the foregoing, (i) to pay on time and according to applicable legislation any and all individuals employed for the rendering the service to the Buyer; (ii) to provide any individual employed for the rendering services to the Buyer with all applicable personal safety equipment and to inspect and assure its actual use by the individuals, and (iii) to assure that such individuals will comply fully with any and all safety instructions or policies of the Buyer. The Parties expressly acknowledge that this Contract does not create any employment relationship between Buyer and the Seller or individuals which are employed by the Seller for the rendering services. Hence, the Seller undertakes to immediately bear any and all costs, expenses, losses and damages in relation to lawsuits or administrative proceedings of any nature whatsoever, including but not limited to individual labor claims, that might be brought against the Seller in regard to these individuals.",
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

    // 6. Clause 1.12
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
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
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "1.12",
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
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Seller represents to the Buyer that:",
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

    // 7. List a-e (Using Table to simulate list structure without manual numbering in paragraph)
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
            // Item a)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [] }), // Indent
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "a)", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 87, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "the Equipment has been fully developed by the Seller,", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Item b)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [] }),
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "b)", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 87, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "the Seller has the full, clear, unencumbered and valid title to transfer the ownership of the Equipment to the Buyer,", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Item c)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [] }),
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "c)", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 87, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "the Equipment shall be manufactured in the USA,", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Item d)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [] }),
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "d)", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 87, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "no third persons, especially employees of the Seller or co-operators or alike, have any rights to the Equipment,", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Item e)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [] }),
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "e)", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 87, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "there are no circumstances restricting the Seller’s right to conclude this Contract according to the terms and conditions set forth in it,", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 8. Footer Table with Top Border
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // Thick line
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
                                        text: "PAGE NO. 4",
                                        font: "Arial",
                                        bold: true,
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            // Initials Image Placeholder
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "[IMAGE placeholder]",
                                        font: "Arial",
                                        size: 16,
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
```