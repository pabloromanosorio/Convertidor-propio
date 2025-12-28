```javascript
return [
    // --- Page Number ---
    new Paragraph({
        children: [
            new TextRun({
                text: "Page 26",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // --- Main Title ---
    new Paragraph({
        children: [
            new TextRun({
                text: "45 Broiler Auger Feeding System",
                font: "Arial",
                size: 28, // Larger for header
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // --- Bullet List (Manual) ---
    new Paragraph({
        children: [
            new TextRun({
                text: "•\tA Italian-brand motor is employed for drive. It has an aluminum alloy housing providing fast heat dissipation, no rust and protection grade of IP55;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "•\tThe auger is made of imported high-performance material, with stable performance;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "•\tThe feed pan includes two types: 14-grill internal adjustable and external adjustable types, and the breeding capacity is about 170 kg/ pan;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "•\tManual lifting or electric lifting are options for lifting, convenient for adjusting the height of feed line;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // --- Section Header ---
    new Paragraph({
        children: [
            new TextRun({
                text: "Product Parameters",
                font: "Arial",
                size: 24,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- Table 1: Product Parameters ---
    // Grid Strategy: 4 Columns to handle the split in "Power" and "Max Delivery Distance" rows.
    // Col 1: Motor Label (Narrow)
    // Col 2: Parameter Name (Wide)
    // Col 3: Value 1 (Medium)
    // Col 4: Value 2 (Medium)
    // Total Width: 9360 DXA
    new Table({
        columnWidths: [1000, 3680, 2340, 2340],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Row 1
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Auger Feedline Specification", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "45 Weld Pipe", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Feed Pipe Diameter (mm)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Ø 45", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Feed Pipe Thickness (mm)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "1.2", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Feed Pipe Material", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Hot galvanized pipe", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 5 (Motor Start)
            new TableRow({
                children: [
                    new TableCell({
                        rowSpan: 6,
                        width: { size: 1000, type: WidthType.DXA },
                        verticalAlign: "center",
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Motor", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.LEFT })],
                    }),
                    new TableCell({
                        width: { size: 3680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Voltage (V)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "380", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Frequency (Hz)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "50", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Protection Class", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "IP55", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 8 (Power - Split Values)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Power (kw)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        width: { size: 2340, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "0.75", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        width: { size: 2340, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "1.1", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Speed Ratio", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "1:5", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 10
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Output Speed (r/min)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "290", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 11
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Horizontal Delivery Capacity (kg/h)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "450", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 12 (Max Delivery Distance - Split Values)
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Max Delivery Distance (m)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        width: { size: 2340, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "120", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        width: { size: 2340, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "140", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 13
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Feed Pipe Length (mm)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "3040", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 14
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Auger Outer Diameter (mm)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "36.8", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 15
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Auger Inner Diameter (mm)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "20.8", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 16
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Auger Cross - section Width (mm)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "8", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 17
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Auger Cross - section Thickness (mm)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "3.85", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
            // Row 18
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Auger Pitch (mm)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "44.45", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })],
                    }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // --- Section Header 2 ---
    new Paragraph({
        children: [
            new TextRun({
                text: "Feed Quantity of 14-grill Internal Adjustable Feed Pan",
                font: "Arial",
                size: 24,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- Table 2: Feed Quantity ---
    // 6 Columns
    new Table({
        columnWidths: [1560, 1560, 1560, 1560, 1560, 1560],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Row 1
            new TableRow({
                children: [
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Gear", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "2", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "3", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "4", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "5", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Feed quantity (g)", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "260", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "275", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "360", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "400", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "520", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Gear", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "6", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "7", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "8", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "9", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                    new TableCell({ width: { size: 1560, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, shading: { fill: "FFFFFF", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "10", font: "Arial", size: 22, color: "000000" })], alignment: AlignmentType.CENTER })] }),
                ],
            }),
        ],
    }),
];
```