```javascript
const borderStyle = { style: BorderStyle.SINGLE, size: 1, color: "000000" };
const cellBorders = { top: borderStyle, bottom: borderStyle, left: borderStyle, right: borderStyle };
const fontStyle = "Arial";
const fontSize = 22; // 11pt
const headerSize = 24; // 12pt

// Helper to create standard text runs
const createText = (text, bold = false, size = fontSize) => {
    return new TextRun({
        text: text,
        font: fontStyle,
        size: size,
        color: "000000",
        bold: bold,
    });
};

// Helper for table cells
const createCell = (text, width, colSpan = 1, align = AlignmentType.CENTER) => {
    return new TableCell({
        width: { size: width, type: WidthType.DXA },
        columnSpan: colSpan,
        borders: cellBorders,
        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
        verticalAlign: "center",
        children: [
            new Paragraph({
                alignment: align,
                children: [createText(text)],
            }),
        ],
    });
};

return [
    // Page Number
    new Paragraph({
        children: [createText("Page 32")],
    }),
    new Paragraph({ text: "" }), // Spacer

    // Title 1
    new Paragraph({
        children: [createText("Main Feed Line", true, headerSize)],
    }),
    new Paragraph({ text: "" }),

    // List 1
    new Paragraph({
        children: [createText("• Italian-brand motor, aluminum alloy body, IP55-protected.")],
    }),
    new Paragraph({
        children: [createText("• Auger imported for stable performance.")],
    }),
    new Paragraph({
        children: [createText("• Nylon bends with reinforced inner arcs for wear resistance and sealing.")],
    }),
    new Paragraph({
        children: [createText("• Each relay station is angle-adjustable with an inspection port and sight window for easy maintenance.")],
    }),
    new Paragraph({ text: "" }),

    // Title 2
    new Paragraph({
        children: [createText("Product Parameters", true, headerSize)],
    }),
    new Paragraph({ text: "" }),

    // Table 1
    // Structure: 5 columns based on the split in row 2 and 3.
    // Col 1: Label, Col 2: "125", Col 3: "0.75/2100", Col 4: "1.1/3000", Col 5: "75"
    // Widths: Label ~3000, Data cols ~1590 each. Total ~9360.
    new Table({
        columnWidths: [3000, 1590, 1590, 1590, 1590],
        rows: [
            // Row 1
            new TableRow({
                children: [
                    createCell("Specification of auger feed line", 3000, 1, AlignmentType.LEFT),
                    createCell("125", 1590),
                    createCell("90", 3180, 2), // Spans cols 3 & 4
                    createCell("75", 1590),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    createCell("Motor power", 3000, 1, AlignmentType.LEFT),
                    createCell("1.5", 1590),
                    createCell("0.75", 1590),
                    createCell("1.1", 1590),
                    createCell("0.75", 1590),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    createCell("Feeding capacity", 3000, 1, AlignmentType.LEFT),
                    createCell("5500", 1590),
                    createCell("2100", 1590),
                    createCell("3000", 1590),
                    createCell("1400", 1590),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    createCell("Maximum conveying distance", 3000, 1, AlignmentType.LEFT),
                    createCell("25", 1590),
                    createCell("40", 3180, 2), // Spans cols 3 & 4
                    createCell("60", 1590),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // Title 3
    new Paragraph({
        children: [createText("Chain Pain Main Feed Line", true, headerSize)],
    }),
    new Paragraph({ text: "" }),

    // Description Paragraph
    new Paragraph({
        children: [createText("The feed line moves in the feeding pipe through the chain, and the nylon chain pan molded on the chain drives the feed to move in the feeding pipe, and the feed is transported from the silo or manual feed box dragged by the chain along the feeding pipe to feed drop ports, so as to achieve the purpose of automatic feed.")],
    }),
    new Paragraph({ text: "" }),

    // List 2
    new Paragraph({
        children: [createText("•The drive system is provided with overload protection, which can effectively prevent motor stalling and chain damage due to pulling;")],
    }),
    new Paragraph({
        children: [createText("•The chain pan is made of modified nylon, with high wear resistance and not easy to be shifted;")],
    }),
    new Paragraph({
        children: [createText("•The corner is made of antirust material, firm and durable.")],
    }),
    new Paragraph({ text: "" }),

    // Title 4
    new Paragraph({
        children: [createText("Product Parameters", true, headerSize)],
    }),
    new Paragraph({ text: "" }),

    // Table 2
    // Structure: 4 columns based on the split in row 4 and 6.
    // Col 1: Label, Col 2: "4/250", Col 3: "2.2/120", Col 4: "1.5/300"
    // Widths: Label ~3500, Data cols ~1950 each. Total ~9350.
    new Table({
        columnWidths: [3500, 1950, 1950, 1950],
        rows: [
            // Row 1
            new TableRow({
                children: [
                    createCell("Feeding pipe diameter (mm)", 3500, 1, AlignmentType.LEFT),
                    createCell("Ø 101.6", 3900, 2), // Spans cols 2 & 3
                    createCell("Ø 60", 1950),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    createCell("Feeding pipe wall thickness (mm)", 3500, 1, AlignmentType.LEFT),
                    createCell("2.0", 3900, 2), // Spans cols 2 & 3
                    createCell("1.5", 1950),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    createCell("Feeding pipe material", 3500, 1, AlignmentType.LEFT),
                    createCell("Hot galvanized pipe", 3900, 2), // Spans cols 2 & 3
                    createCell("Hot galvanized pipe", 1950),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    createCell("Driving power (kw)", 3500, 1, AlignmentType.LEFT),
                    createCell("4", 1950),
                    createCell("2.2", 1950),
                    createCell("1.5", 1950),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    createCell("Maximum feeding capacity (kg/h)", 3500, 1, AlignmentType.LEFT),
                    createCell("5000", 3900, 2), // Spans cols 2 & 3
                    createCell("1500", 1950),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    createCell("Maximum conveying distance (m)", 3500, 1, AlignmentType.LEFT),
                    createCell("250", 1950),
                    createCell("120", 1950),
                    createCell("300", 1950),
                ],
            }),
        ],
    }),
];
```