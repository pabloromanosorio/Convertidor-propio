```javascript
const border = { style: BorderStyle.SINGLE, size: 1, color: "000000" };
const cellBorders = { top: border, bottom: border, left: border, right: border };
const clearShading = { fill: "FFFFFF", type: ShadingType.CLEAR };

// Helper to create a standard text run
const createText = (text, bold = false, size = 22) => 
    new TextRun({ text: text, font: "Arial", size: size, color: "000000", bold: bold });

// Helper to create a table cell
const createCell = (text, width, colSpan = 1, rowSpan = 1, align = AlignmentType.CENTER) => 
    new TableCell({
        borders: cellBorders,
        width: { size: width, type: WidthType.DXA },
        shading: clearShading,
        columnSpan: colSpan,
        rowSpan: rowSpan,
        verticalAlign: "center",
        children: [
            new Paragraph({
                alignment: align,
                children: [createText(text)]
            })
        ]
    });

// Column widths
const table1Widths = [2500, 1372, 1372, 1372, 1372, 1372];
const table3Widths = [1200, 3800, 2180, 2180]; // Total 9360

return [
    // --- Section 1: Top Table Fragment ---
    new Table({
        columnWidths: table1Widths,
        rows: [
            new TableRow({
                children: [
                    createCell("Feed quantity (g)", table1Widths[0]),
                    createCell("530", table1Widths[1]),
                    createCell("610", table1Widths[2]),
                    createCell("640", table1Widths[3]),
                    createCell("770", table1Widths[4]),
                    createCell("850", table1Widths[5]),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // --- Section 2: Header Text ---
    new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [createText("Feed Quantity of 14-grill External Adjustable Feed Pan", true, 24)],
    }),

    // --- Section 3: Second Table ---
    new Table({
        columnWidths: table1Widths,
        rows: [
            new TableRow({
                children: [
                    createCell("Gear", table1Widths[0]),
                    createCell("1", table1Widths[1]),
                    createCell("2", table1Widths[2]),
                    createCell("3", table1Widths[3]),
                    createCell("4", table1Widths[4]),
                    createCell("5", table1Widths[5]),
                ],
            }),
            new TableRow({
                children: [
                    createCell("Feed quantity (g)", table1Widths[0]),
                    createCell("830", table1Widths[1]),
                    createCell("845", table1Widths[2]),
                    createCell("1090", table1Widths[3]),
                    createCell("1280", table1Widths[4]),
                    createCell("1320", table1Widths[5]),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // --- Section 4: List Section ---
    new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [createText("45 Auger Feeding System For Males", true, 24)],
    }),
    new Paragraph({
        children: [createText("•  A Italian-brand motor is employed for drive. It has an aluminum alloy housing providing fast heat dissipation, no rust and protection grade of IP55;")],
    }),
    new Paragraph({
        children: [createText("•  The auger is made of imported high-performance. material, with stable performance;")],
    }),
    new Paragraph({
        children: [createText("•  The feed pan includes nine-grill and five-grill types, and each feed pan is for 8-10 chickens;")],
    }),
    new Paragraph({
        children: [createText("•  Manual lifting or electric lifting are options for lifting, convenient for adjusting the height of feed line;")],
    }),

    new Paragraph({ text: "" }), // Spacer

    // --- Section 5: Product Parameters Header ---
    new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [createText("Product Parameters", true, 24)],
    }),

    // --- Section 6: Product Parameters Table ---
    new Table({
        columnWidths: table3Widths,
        rows: [
            // Row 1
            new TableRow({
                children: [
                    createCell("Auger Feedline Specification", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("45 Weld Pipe", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    createCell("Feed Pipe Diameter (mm)", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("Ø 45", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    createCell("Feed Pipe Thickness (mm)", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("1.2", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    createCell("Feed Pipe Material", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("Hot galvanized pipe", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 5 (Motor Start)
            new TableRow({
                children: [
                    createCell("Motor", table3Widths[0], 1, 6, AlignmentType.CENTER), // RowSpan 6
                    createCell("Voltage (V)", table3Widths[1], 1, 1, AlignmentType.CENTER),
                    createCell("380", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    createCell("Frequency (Hz)", table3Widths[1], 1, 1, AlignmentType.CENTER),
                    createCell("50", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    createCell("Protection Class", table3Widths[1], 1, 1, AlignmentType.CENTER),
                    createCell("IP55", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 8 (Split values)
            new TableRow({
                children: [
                    createCell("Power (kw)", table3Widths[1], 1, 1, AlignmentType.CENTER),
                    createCell("0.75", table3Widths[2], 1, 1, AlignmentType.CENTER),
                    createCell("1.1", table3Widths[3], 1, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    createCell("Speed Ratio", table3Widths[1], 1, 1, AlignmentType.CENTER),
                    createCell("1:5", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 10 (Motor End)
            new TableRow({
                children: [
                    createCell("Output Speed (r/min)", table3Widths[1], 1, 1, AlignmentType.CENTER),
                    createCell("290", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 11
            new TableRow({
                children: [
                    createCell("Horizontal Delivery Capacity (kg/h)", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("450", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 12 (Split values)
            new TableRow({
                children: [
                    createCell("Max Delivery Distance (m)", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("120", table3Widths[2], 1, 1, AlignmentType.CENTER),
                    createCell("140", table3Widths[3], 1, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 13
            new TableRow({
                children: [
                    createCell("Feed Pipe Length (mm)", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("3040", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 14
            new TableRow({
                children: [
                    createCell("Auger Outer Diameter (mm)", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("36.8", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
            // Row 15
            new TableRow({
                children: [
                    createCell("Auger Inner Diameter (mm)", table3Widths[0] + table3Widths[1], 2, 1, AlignmentType.CENTER),
                    createCell("20.8", table3Widths[2] + table3Widths[3], 2, 1, AlignmentType.CENTER),
                ],
            }),
        ],
    }),
];
```