return [
    // 1. Header: DocuSign ID
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 400 },
    }),

    // 2. Title
    new Paragraph({
        children: [
            new TextRun({
                text: "Enclosure no 3 to the contract 25-149",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
    }),

    // 3. Main Data Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            // Row 1
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "SMQ-07315.1", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "One (1) Dynaform 165 Cupping System with Two(2) sets of Fifteen (15) out (269ml) Fit Cup Die Set, Fifteen (15) out (33cl) Standard Cup Die Set, Fourteen (14) out (355ml) Cup Die Set, Thirteen (13) out (473ml) Standard Cup Die Set and complete coil handling system with Die set safety turnover unit and Critical Spares", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 45, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "5 885 310,00", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "5 885 310,00", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "SMQ-07316.0", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Two (2) 36MRT Concord Decorators with 8 ink stations set up for primary can 204x269ml with selected optional items and change parts 204/202x269, 211x33, 211x355, 211x473", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 45, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "2", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "2 802 080,00", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "5 604 160,00", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "SMQ-07358.0", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Ten (10) individual DG250 Tall Cabinet Spray with Controls for twelve machines to run 211x33cl, 35,5cl & 47,3cl Can Diameters", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 45, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "1 963 735,00", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "1 963 735,00", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "SMQ-07321.0", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Nine (9) B626 Bodymakers for primary can size 211x33cl and additional can size options 211x35,5cl, 211x47,3cl, 204x26,9cl", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 45, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "9", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "660 382,56", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "5 943 443,00", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.RIGHT })],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.BOTTOM,
                    }),
                ],
            }),
            // Row 5 (Total)
            new TableRow({
                children: [
                    new TableCell({
                        children: [], // Empty
                        width: { size: 15, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [], // Empty
                        width: { size: 45, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [], // Empty
                        width: { size: 5, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [], // Empty
                        width: { size: 15, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "19 396 648,00",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        highlight: "yellow", // Using text highlight to avoid cell shading rule violation
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    // 4. Signature Placeholder
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
        spacing: { before: 800 },
    }),
];