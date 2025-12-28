```javascript
return [
    // --- Page Number ---
    new Paragraph({
        children: [
            new TextRun({
                text: "Page 37",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- Heading: Technical Description ---
    new Paragraph({
        children: [
            new TextRun({
                text: "Technical Description",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- Bullet List (Manual) ---
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "•\tStandard ladder with guardrails for safe operation.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "•\tRidges for enhanced strength and airtightness.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "•\tMid panel includes a slope for drainage; mid and lower cones have viewing ports secured with sealant strips for superior sealing, strength, and visibility.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "•\tStandard components undergo a specialized galvanizing process; rubber gaskets remain functional for up to 10 years.", font: "Arial", size: 22, color: "000000" }),
        ],
        spacing: { after: 400 }, // Space before next section (skipping image as per rules)
    }),

    // --- Heading: Product Parameters ---
    new Paragraph({
        children: [
            new TextRun({
                text: "Product Parameters",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- Table ---
    new Table({
        columnWidths: [900, 2200, 1565, 1565, 1565, 1565], // Total ~9360 DXA
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // --- Header Row ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S/N", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 2200, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Nominal outside diameter (lower cone angle)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Actual diameter", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Height H", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Volume (m³)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Number of legs", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 1 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        rowSpan: 3,
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 2200, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ø 1.8m", font: "Arial", size: 22, color: "000000" })] }),
                            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "67*", font: "Arial", size: 22, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1834", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4.4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 2 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 2", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1834", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6.8", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 3 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 3", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1834", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "9.2", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 4 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        rowSpan: 4,
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 2200, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ø 2.7m", font: "Arial", size: 22, color: "000000" })] }),
                            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "60*", font: "Arial", size: 22, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2750", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "11.7", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 5 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 2", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2750", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "16.9", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 6 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 3", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2750", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "22.1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 7 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "7", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2750", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "27.3", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 8 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        rowSpan: 4,
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 2200, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ø 3.6m", font: "Arial", size: 22, color: "000000" })] }),
                            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "60*", font: "Arial", size: 22, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3668", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "24.5", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 9 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "9", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 2", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3668", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "33.8", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 10 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "10", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 3", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3668", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "43.1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // --- Row 11 ---
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 900, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "11", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer 4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3668", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "52.4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        width: { size: 1565, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
        ],
    }),

    // --- Footer Text ---
    new Paragraph({
        spacing: { before: 200 },
        children: [
            new TextRun({
                text: "The conversion between the volume and tonnage of galvanized sheet silo is calculated according to the density of 0.65t/m³: tonnage = volume *0.65t/m³.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
];
```