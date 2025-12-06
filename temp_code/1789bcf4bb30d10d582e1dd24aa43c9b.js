```javascript
return [
    // 1. Header ID (Top Left)
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

    // 2. Company Header (Underlined, Bold)
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
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "STOLE MACHINERY COMPANY LLC",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE },
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

    // 3. First Data Table (211/202...)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({ children: [], width: { size: 15, type: WidthType.PERCENTAGE } }),
                    new TableCell({
                        width: { size: 55, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "211/202, 33cl x 211/202, 26,9cl x 204/202",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "and 204/200, in the future ready to 56.8cl x",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "211/202",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({ children: [], width: { size: 15, type: WidthType.PERCENTAGE } }),
                    new TableCell({ children: [], width: { size: 15, type: WidthType.PERCENTAGE } }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "19 396 648,00",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
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

    new Paragraph({ text: "" }),

    // 4. Section 3.4
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "3.4.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "The Parties agree that the fee for the Seller’s services (\"Service Fee\") shall be calculated according to the following rules:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 5. Service Rates Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 3,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "SYSTEM COMMISSIONING CONTRACT SERVICE RATES ELECTRICAL/MECHANICAL/TRAINING/START UP",
                                        font: "Arial",
                                        size: 16,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Sub-Header Row
            new TableRow({
                children: [
                    new TableCell({ children: [] }), // Empty corner
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Description",
                                        font: "Arial",
                                        size: 18,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Rate In USD /Day",
                                        font: "Arial",
                                        size: 18,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Day Rate - Weekdays
            new TableRow({
                children: [
                    new TableCell({
                        verticalMerge: VerticalMergeType.RESTART,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Day Rate (up to 12 hour working day)",
                                        font: "Arial",
                                        size: 18,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Weekdays", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "$1,448", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Day Rate - Saturday
            new TableRow({
                children: [
                    new TableCell({
                        verticalMerge: VerticalMergeType.CONTINUE,
                        children: [],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Saturday", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "$1,592", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Day Rate - Sunday
            new TableRow({
                children: [
                    new TableCell({
                        verticalMerge: VerticalMergeType.CONTINUE,
                        children: [],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Sunday/Holiday", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "$2,172 / $4,344", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Overtime - Weekdays
            new TableRow({
                children: [
                    new TableCell({
                        verticalMerge: VerticalMergeType.RESTART,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Overtime Hourly Rate",
                                        font: "Arial",
                                        size: 18,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Weekdays", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "$121/hr", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Overtime - Saturday
            new TableRow({
                children: [
                    new TableCell({
                        verticalMerge: VerticalMergeType.CONTINUE,
                        children: [],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Saturday", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "$133/hr", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Overtime - Sunday
            new TableRow({
                children: [
                    new TableCell({
                        verticalMerge: VerticalMergeType.CONTINUE,
                        children: [],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Sunday/Holiday", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "$181 / $362 /hr", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Travel
            new TableRow({
                children: [
                    new TableCell({ children: [] }), // Empty or merged? Image shows gray block.
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Travel time-per day", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "$1,448", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
            // Stand-by
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Stand-by day", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "Rate assigned above for particular day.", font: "Arial", size: 18, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 6. Section 3.5
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "3.5.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "The Buyer shall cover the cost of the Seller’s personnel roundtrip air ticket with the following conditions: for flights within one continent in economy class and for intercontinental flights in business class, per diem, and lodging in the place of installation of the Equipment. The Buyer is responsible for all ground transportation expense. The Buyer shall have the right, at the Buyer’s choice, to arrange adequate accommodation for the Seller’s personnel and settle related costs directly with the third-party providers.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 7. Section 3.6
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "3.6.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "The invoice for the Services shall be issued subject to the time sheet confirmed by the Buyer indicating the rates as per par. 3.4 and costs as per par. 3.5, if covered by the Seller, under condition that the Final or Conditional Acceptance Test is executed subject to Section 12 of this Contract. The Service Fee shall be paid within sixty (60) days following the date of receipt of the invoice by the Buyer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 8. Section 3.7
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "3.7.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "The Service Fee includes any and all federal, state or local sales, use, property, exercise, services or other taxes now or hereafter levied on the Seller.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 9. Section 4
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "4.\tPAYMENT TERMS",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // 10. Section 4.1
    new Paragraph({
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({ text: "4.1.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "The Total Price shall be paid by the Buyer to the Seller as follows:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // 11. Footer
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
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
                                        size: 22,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 8",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
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
    
    // Signature Placeholder (Bottom Right)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Signature DS/ll]",
                font: "Arial",
                size: 18,
                color: "000000",
            }),
        ],
    }),
];
```