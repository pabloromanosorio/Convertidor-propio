```javascript
return [
    // 1. Top Document ID
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

    // 2. Header Table (Company Names)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NIL },
            bottom: { style: BorderStyle.NIL },
            left: { style: BorderStyle.NIL },
            right: { style: BorderStyle.NIL },
            insideVertical: { style: BorderStyle.NIL },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
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
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
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
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 3. Main Content Table (Using 3 columns to handle indentation levels: 7.x, 7.x.x, Text)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NIL },
            bottom: { style: BorderStyle.NIL },
            left: { style: BorderStyle.NIL },
            right: { style: BorderStyle.NIL },
            insideVertical: { style: BorderStyle.NIL },
            insideHorizontal: { style: BorderStyle.NIL },
        },
        rows: [
            // 7.4
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.4.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Seller warrants that its Services shall be performed by competent personnel and shall be of professional quality consistent with generally accepted industry standards for performance of such services.",
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
            // Spacer Row
            new TableRow({ children: [new TableCell({ columnSpan: 3, children: [new Paragraph("")] })] }),
            
            // 7.5
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.5.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Seller further guarantees proper functioning with the stated efficiency of the delivered Equipment, proper faultless material, reliable serviceable design and full continuous conformity of the Equipment with requirements of this Contract and Enclosures hereto, for the period of eighteen (18) months from the date of signing the Final Acceptance Test Protocol for each piece of Equipment separately, provided that the result of the Final Acceptance Test is positive. The warranty period shall begin no later than two hundred fifty (250) days from the delivery date if the Final Acceptance Test for the given piece of Equipment was not successfully performed due to the Buyer’s fault.",
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
            // Spacer Row
            new TableRow({ children: [new TableCell({ columnSpan: 3, children: [new Paragraph("")] })] }),

            // 7.6
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.6.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "Any non-conformity of the Equipment with this Contract and Enclosures, representations or warranties of the Seller, shall be deemed as defect of the Equipment.",
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
            // Spacer Row
            new TableRow({ children: [new TableCell({ columnSpan: 3, children: [new Paragraph("")] })] }),

            // 7.7
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.7.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "In the event of a claim by the Buyer under the provisions of this warranty, the Buyer shall notify the Seller as follows:",
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
            // Spacer Row
            new TableRow({ children: [new TableCell({ columnSpan: 3, children: [new Paragraph("")] })] }),

            // 7.7.1 (Indented)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [new Paragraph("")] }), // Empty indent
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.7.1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 82, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Buyer shall notify the Seller, by a confirmed e-mail (to the e-mail address:",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "carolyn.crouch@stollemachinery.com) of the claim;",
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
            // Spacer Row
            new TableRow({ children: [new TableCell({ columnSpan: 3, children: [new Paragraph("")] })] }),

            // 7.7.2 (Indented)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [new Paragraph("")] }),
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.7.2", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 82, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Buyer shall deliver, in writing (including e-mail) to the Seller, detailed information clearly defining the item(s) claimed under this warranty.",
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
            // Spacer Row
            new TableRow({ children: [new TableCell({ columnSpan: 3, children: [new Paragraph("")] })] }),

            // 7.8
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.8.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "Upon receipt of the notice of warranty claim from the Buyer, in accordance with par. 7.7 above, the Seller shall respond as follows:",
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
            // Spacer Row
            new TableRow({ children: [new TableCell({ columnSpan: 3, children: [new Paragraph("")] })] }),

            // 7.8.1 (Indented)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [new Paragraph("")] }),
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.8.1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 82, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Seller shall respond to the Buyer’s claim as quickly as possible, however, not later than within forty-eight (48) hours from receipt of the detailed account of the claim (as defined above) to determine what corrective action, if any, is required.",
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
            // Spacer Row
            new TableRow({ children: [new TableCell({ columnSpan: 3, children: [new Paragraph("")] })] }),

            // 7.8.2 (Indented)
            new TableRow({
                children: [
                    new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [new Paragraph("")] }),
                    new TableCell({
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "7.8.2", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 82, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "If any item is found to be defective during or before the warranty period, the Buyer shall be entitled to demand the Seller immediately, but not later than within forty-five (45) days from receipt of the claim, to repair or replace the defective item and carry out any other necessary work to ensure that the terms of the Contract are fulfilled at no cost to the Buyer. The Seller shall inter alia cover all replacement costs incurred by the Buyer due to defects. In case",
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

    // 4. Signature Placeholder (Bottom Right)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 5. Footer Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NIL },
            bottom: { style: BorderStyle.NIL },
            left: { style: BorderStyle.NIL },
            right: { style: BorderStyle.NIL },
            insideVertical: { style: BorderStyle.NIL },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { top: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
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
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { top: { style: BorderStyle.SINGLE, size: 12, color: "000000" } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 14",
                                        bold: true,
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
];
```