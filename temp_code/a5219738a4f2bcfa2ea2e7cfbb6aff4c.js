```javascript
return [
    // 1. DocuSign Header
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

    // 2. Company Names Header (Table for alignment)
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
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE },
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
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE },
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

    // 3. Red Box Table (Description)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "990000" },
            bottom: { style: BorderStyle.SINGLE, size: 12, color: "990000" },
            left: { style: BorderStyle.SINGLE, size: 12, color: "990000" },
            right: { style: BorderStyle.SINGLE, size: 12, color: "990000" },
            insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
            insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
        },
        rows: [
            // Header Row: Description
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Description",
                                        font: "Arial",
                                        size: 24,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Data Rows
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "INSIDE SPRAY SYSTEMS", font: "Arial", size: 22, bold: true, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Individual Tall Cabinet ISMs", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "DG 250 inside sprays", font: "Arial", size: 22, bold: true, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Dual gun", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Speed", font: "Arial", size: 22, bold: true, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Estimated machine speed is 350CPM on 211 Can Diameter, max Can speed is Spray Time and Can Size dependent", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Piping, air, vacuum and spray", font: "Arial", size: 22, bold: true, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Customer Supplied", font: "Arial", size: 22, color: "FF0000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Pumps", font: "Arial", size: 22, bold: true, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "EP Pumps Included", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Can Height (max)", font: "Arial", size: 22, bold: true, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "710", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Can Diameter", font: "Arial", size: 22, bold: true, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "211", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Platform", font: "Arial", size: 22, bold: true, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Customer Supplied", font: "Arial", size: 22, color: "FF0000" })] })] }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. Features Header
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "FEATURES",
                font: "Arial",
                size: 28,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 5. Features Table (Using 3 columns to accommodate the bottom section)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // MECHANICAL FEATURES
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 3,
                        children: [new Paragraph({ children: [new TextRun({ text: "MECHANICAL FEATURES:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                    }),
                ],
            }),
            // Rows (Col 2 spans 2 cells)
            ...[
                ["Guards", "Stainless Steel Glass enclosed, and interlocked"],
                ["Filter", "Dual filter supplied"],
                ["Gearbox", "Camco index"],
                ["Pumps", "Nordson EP Pumps"],
                ["Starwheels", "Solid, UHMW"],
                ["Gun Mounts", "Swing away"],
                ["Exhaust", "Transition Only"],
                ["Guns", "Nordson MEGII Guns (2)"],
            ].map(row => new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: row[0], font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: row[1], font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            })),
            // Platform (Red)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Platform", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: "Customer Supplied", font: "Arial", size: 22, color: "FF0000" })] })] }),
                ],
            }),
            // More standard rows
            ...[
                ["Heater/ Cooler", "Dual Zone TCU"],
                ["Vacuum filter", "Included"],
                ["Can stop", "Included"],
                ["Vacuum saver valve", "Included"],
                ["Operator manual", "One standard manual- Electronic Copy"],
            ].map(row => new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: row[0], font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: row[1], font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            })),
            // Nozzles (Red)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Nozzles", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: "Included (Customer to supply part numbers)", font: "Arial", size: 22, color: "FF0000" })] })] }),
                ],
            }),

            // ELECTRICAL FEATURES
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 3,
                        children: [new Paragraph({ children: [new TextRun({ text: "ELECTRICAL FEATURES:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                    }),
                ],
            }),
            // Electrical Rows
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Panel", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: "Hoffman panel sized for quoted number of machines", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Indented items
            ...[
                ["- Controls", "Allen Bradley Control, Nordson gun drivers"],
                ["- Timers", "PLC"],
                ["- Relays", "Allen Bradley 700 series"],
                ["- Drives", "Allen Bradley"],
            ].map(row => new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ indent: { left: 200 }, children: [new TextRun({ text: row[0], font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: row[1], font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            })),
            // More Electrical
            ...[
                ["Controls", "Allen Bradley Control, Nordson gun drivers"],
                ["Operator panel (HMI)", "Pushbutton station at each machine"],
                ["Motors", "1 HP main drive, 1/3 HP spinner drive"],
                ["Gun drivers", "Nordson"],
            ].map(row => new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: row[0], font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ columnSpan: 2, children: [new Paragraph({ children: [new TextRun({ text: row[1], font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            })),

            // ELECTRICS (3 Column Section)
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 3,
                        children: [new Paragraph({ children: [new TextRun({ text: "ELECTRICS:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Line", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "As specified", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Control", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "24 VDC", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer
    new Paragraph({ text: "" }), // Spacer

    // 6. Signature Image Placeholder
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true,
            }),
        ],
    }),

    // 7. Footer Text (Table for alignment)
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
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
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
                                        text: "PAGE NO. 17",
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
];
```