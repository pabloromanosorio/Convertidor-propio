```javascript
return [
    // 1. DocuSign ID (Top Left, Small)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                color: "000000",
                size: 16, // 8pt
            }),
        ],
        spacing: { after: 200 },
    }),

    // 2. Header Line (Company Names with Bottom Border)
    new Paragraph({
        children: [
            new TextRun({
                text: "STOLLE MACHINERY COMPANY LLC",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
            new TextRun({
                text: "\tCANPACK COLOMBIA S.A.S.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        tabStops: [
            {
                type: TabStopType.RIGHT,
                position: 9500, // Adjust for right alignment
            },
        ],
        border: {
            bottom: {
                color: "000000",
                space: 5,
                style: BorderStyle.SINGLE,
                size: 6,
            },
        },
        spacing: { after: 200 },
    }),

    // 3. Title "Change parts"
    new Paragraph({
        text: "Change parts",
        alignment: AlignmentType.CENTER,
        heading: HeadingLevel.HEADING_2,
        children: [
            new TextRun({
                text: "Change parts",
                font: "Arial",
                color: "000000",
                size: 24,
            }),
        ],
        spacing: { after: 100 },
    }),

    // 4. Main Data Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            // --- SECTION 1 ---
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Change Parts Size", bold: true, font: "Arial", color: "000000", size: 22 })] })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        children: [new Paragraph({ children: [new TextRun({ text: "211 diameter", font: "Arial", color: "000000", size: 22 })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "211x355", font: "Arial", color: "000000", size: 22 })] })],
                    }),
                ],
            }),
            // Sub-Header Row
            new TableRow({
                children: [
                    new TableCell({ children: [] }), // Empty
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Qty", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Extended", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),
            // Data Rows Section 1
            ...[
                ["Adjustable infeed", "$17,000", "2", "$34,000"],
                ["Mandrels light wt. self-align", "$820", "76", "$62,320"],
                ["Quick change pockets set 36 mandrel", "$9,900", "2", "$19,800"],
                ["Applicator roll tire 1 ea.", "$2,300", "2", "$4,600"],
                ["Gravure roll", "$5,400", "0", "$0"],
                ["Fountain", "$8,500", "0", "$0"],
                ["Tooling", "$2,100", "2", "$4,200"],
            ].map(row => new TableRow({
                children: row.map(text => new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: text, font: "Arial", color: "000000", size: 22 })] })]
                }))
            })),
            // Total Row Section 1
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Total", font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$124,920", font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),

            // --- SECTION 2 ---
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Change Parts Size", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: "Addational 211 size", font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "211x33", font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Qty", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Extended", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),
            ...[
                ["Mandrels light wt. self-align", "$820", "76", "$62,320"],
                ["Quick change pockets set of 36", "$9,900", "2", "$19,800"],
                ["Applicator roll tire 1 ea.", "$2,300", "2", "$4,600"],
            ].map(row => new TableRow({
                children: row.map(text => new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: text, font: "Arial", color: "000000", size: 22 })] })]
                }))
            })),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Total", font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$86,720", font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),

            // --- SECTION 3 ---
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Change Parts Size", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: "sleek and slim", font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "211x473", font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Qty", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Extended", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),
            ...[
                ["Mandrels light wt. self-align", "$820", "76", "$62,320"],
                ["Quick change pockets set of 36", "$9,900", "2", "$19,800"],
                ["Applicator roll tire 1 ea.", "$2,300", "2", "$4,600"],
            ].map(row => new TableRow({
                children: row.map(text => new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: text, font: "Arial", color: "000000", size: 22 })] })]
                }))
            })),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Total", font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$86,720", font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),

            // --- SECTION 4 ---
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Change Parts Size", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: "Lengh sleek and slim", font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "204x269 (202)", font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Qty", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Extended", bold: true, font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),
            ...[
                ["Mandrels light wt. self-align", "$870", "76", "$66,120"],
                ["Quick change pockets set of 36.", "$9,900", "0", "$0"],
                ["Applicator roll tire 1 ea.", "$2,300", "0", "$0"],
            ].map(row => new TableRow({
                children: row.map(text => new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: text, font: "Arial", color: "000000", size: 22 })] })]
                }))
            })),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Total", font: "Arial", color: "000000", size: 22 })] })] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$66,120", font: "Arial", color: "000000", size: 22 })] })] }),
                ],
            }),
        ],
    }),

    // 5. Section IV Header
    new Paragraph({
        children: [
            new TextRun({
                text: "IV. DG 250 Inside Spray Machines",
                bold: true,
                font: "Arial",
                color: "000000",
                size: 24,
            }),
        ],
        spacing: { before: 400, after: 200 },
    }),

    // 6. Signature Image Placeholder
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { after: 100 },
    }),

    // 7. Footer Line
    new Paragraph({
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
            new TextRun({
                text: "\tPAGE NO. 15",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
        tabStops: [
            {
                type: TabStopType.RIGHT,
                position: 9500,
            },
        ],
        border: {
            top: {
                color: "000000",
                space: 5,
                style: BorderStyle.SINGLE,
                size: 6,
            },
        },
        spacing: { before: 100 },
    }),
];
```