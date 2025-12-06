return [
    // --- Header: DocuSign ID ---
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

    // --- Header: Company Names (Underlined) ---
    new Paragraph({
        tabStops: [
            { type: TabStopType.RIGHT, position: 9000 }, // Adjust position for right alignment
        ],
        children: [
            new TextRun({
                text: "STOLLE MACHINERY COMPANY LLC",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
                underline: { type: UnderlineType.SINGLE },
            }),
            new TextRun({
                text: "\t", // Tab to push next text to right
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "CANPACK COLOMBIA S.A.S.",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
        spacing: { after: 400 },
    }),

    // --- Section 3: PRICES ---
    new Paragraph({
        children: [
            new TextRun({
                text: "3.\tPRICES",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        indent: { hanging: 720, left: 720 }, // Hanging indent for numbering
        spacing: { after: 200 },
    }),

    // --- Clause 3.1 ---
    new Paragraph({
        children: [
            new TextRun({
                text: "3.1.\tThe Total Price for the Equipment is USD 19 396 648,00 (say: nineteen million three hundred ninety-six thousand six hundred forty-eight 00/100; “",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Total Price",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
            new TextRun({
                text: "”) as specified in detail in Enclosure No. 3.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: { hanging: 720, left: 720 },
        spacing: { after: 200 },
    }),

    // --- Clause 3.2 ---
    new Paragraph({
        children: [
            new TextRun({
                text: "3.2.\tThe Total Price shall be final and unchangeable and includes inter alia adequate packing as per Section 11 of this Contract. The Seller shall have no rights to demand supplementary payments or any price alterations.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        indent: { hanging: 720, left: 720 },
        spacing: { after: 200 },
    }),

    // --- Clause 3.3 ---
    new Paragraph({
        children: [
            new TextRun({
                text: "3.3.\tThe Total Price includes:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { hanging: 720, left: 720 },
        spacing: { after: 200 },
    }),

    // --- Main Table ---
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            // --- Header Row ---
            new TableRow({
                tableHeader: true,
                children: [
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "Item", bold: true, font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "Description", bold: true, font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "QTY", bold: true, font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "Price [USD]", bold: true, font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
            // --- Row 1: 1.1.1 ---
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "1.1.1", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ 
                                text: "One (1) Dynaform 165 Cupping System with One (1) Sixteen (16) outs Die Set for 26.9cl Cansize, One (1) Fifteen (15) outs Die Set for 33cl Cansize, One (1) Fourteen (14) outs Die Set for 35.5cl Cansize, Thirteen (13) outs Dei Set for 47.3cl Cansize and complete coil handling system with Die set safety turnover unit and Critical Spares", 
                                font: "Arial", size: 22, color: "000000" 
                            })],
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "5 885 310,00", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
            // --- Row 2: 1.1.2 ---
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "1.1.2", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ 
                                text: "Two (2) 36MRT Concord Decorators with 8 ink stations to run the following cansizes: 47,3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26,9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202", 
                                font: "Arial", size: 22, color: "000000" 
                            })],
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "2", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "5 604 160,00", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
            // --- Row 3: 1.1.3 ---
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "1.1.3", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ 
                                text: "Ten (10) individual DG250 Tall Cabinet Spray with Controls for fourteen machines to run the following cansizes: 47,3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26,9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202", 
                                font: "Arial", size: 22, color: "000000" 
                            })],
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "1 963 735,00", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
            // --- Row 4: 1.1.4 ---
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "1.1.4", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ 
                                text: "Nine (9) B626 Bodymakers to run the following cansizes: 47,3cl x 211/202, 35.5cl x", 
                                font: "Arial", size: 22, color: "000000" 
                            })],
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "9", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ 
                            children: [new TextRun({ text: "5 943 443,00", font: "Arial", size: 22, color: "000000" })],
                            alignment: AlignmentType.CENTER 
                        })],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
        ],
    }),

    // --- Signature Placeholder ---
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Signature DS/CC]",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true
            }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { before: 200, after: 100 },
    }),

    // --- Footer ---
    new Paragraph({
        tabStops: [
            { type: TabStopType.RIGHT, position: 9000 },
        ],
        children: [
            new TextRun({
                text: "CONTRACT NO. 25-149",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
            new TextRun({
                text: "\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "PAGE NO. 7",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        border: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
        },
        spacing: { before: 100 },
    }),
];