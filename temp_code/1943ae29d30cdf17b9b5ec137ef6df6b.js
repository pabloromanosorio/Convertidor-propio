```javascript
return [
    // 1. DocuSign ID (Small text at top)
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

    // 2. Header: Company Names (Layout using a borderless table)
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
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
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
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
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

    new Paragraph({ text: "" }), // Spacer

    // 3. Description Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
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
            // Row: INSIDE SPRAY SYSTEMS
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "INSIDE SPRAY SYSTEMS", font: "Arial", size: 22, color: "000000", bold: true })] })],
                        width: { size: 40, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Individual Tall Cabinet ISMs", font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Row: DG 250
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "DG 250 inside sprays", font: "Arial", size: 22, color: "000000", bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Dual gun", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row: Speed
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Speed", font: "Arial", size: 22, color: "000000", bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Estimated machine speed is 350CPM on 211 Can Diameter, max Can speed is Spray Time and Can Size dependent", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row: Piping...
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Piping, air, vacuum and spray", font: "Arial", size: 22, color: "000000", bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Customer Supplied", font: "Arial", size: 22, color: "FF0000" })] })],
                    }),
                ],
            }),
            // Row: Pumps
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Pumps", font: "Arial", size: 22, color: "000000", bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "EP Pumps Included", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row: Can Height
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Can Height (max)", font: "Arial", size: 22, color: "000000", bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "710", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row: Can Diameter
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Can Diameter", font: "Arial", size: 22, color: "000000", bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "211", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row: Platform
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Platform", font: "Arial", size: 22, color: "000000", bold: true })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Customer Supplied", font: "Arial", size: 22, color: "FF0000" })] })],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. FEATURES Header
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

    // 5. Features Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // MECHANICAL FEATURES Header
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "MECHANICAL FEATURES:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                        width: { size: 40, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Rows for Mechanical Features
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
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: row[1], font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            })),
            // Platform (Red text)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Platform", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Customer Supplied", font: "Arial", size: 22, color: "FF0000" })] })] }),
                ]
            }),
            // Heater/Cooler
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Heater/ Cooler", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Dual Zone TCU", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            // Vacuum filter
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Vacuum filter", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            // Can stop
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Can stop", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            // Vacuum saver valve
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Vacuum saver valve", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            // Operator manual
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Operator manual", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "One standard manual- Electronic Copy", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            // Nozzles (Red text)
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Nozzles", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Included (Customer to supply part numbers)", font: "Arial", size: 22, color: "FF0000" })] })] }),
                ]
            }),

            // ELECTRICAL FEATURES Header
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "ELECTRICAL FEATURES:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                    }),
                    new TableCell({ children: [] }),
                ],
            }),
            // Electrical Rows
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Panel", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Hoffman panel sized for quoted number of machines", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "   - Controls", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Allen Bradley Control, Nordson gun drivers", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "   - Timers", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PLC", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "   - Relays", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Allen Bradley 700 series", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "   - Drives", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Allen Bradley", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Controls", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Allen Bradley Control, Nordson gun drivers", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Operator panel (HMI)", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Pushbutton station at each machine", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Motors", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1 HP main drive, 1/3 HP spinner drive", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Gun drivers", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Nordson", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),

            // ELECTRICS Header
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "ELECTRICS:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                    }),
                    new TableCell({ children: [] }),
                ],
            }),
            // Electrics Rows
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Line", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "As specified", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Control", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "24 VDC", font: "Arial", size: 22, color: "000000" })] })] }),
                ]
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 6. Signature Placeholder
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

    // 7. Footer (Borderless Table)
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),
];
```