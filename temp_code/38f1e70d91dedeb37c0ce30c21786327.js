```javascript
const borderStyle = { style: BorderStyle.SINGLE, size: 1, color: "000000" };
const cellBorders = { top: borderStyle, bottom: borderStyle, left: borderStyle, right: borderStyle };
const noBorders = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };

return [
    // Page 24
    new Paragraph({
        children: [
            new TextRun({
                text: "Page 24",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // Technical Description
    new Paragraph({
        children: [
            new TextRun({
                text: "Technical Description",
                font: "Arial",
                size: 24,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // List Item 1
    new Paragraph({
        children: [
            new TextRun({
                text: "• The water front parts is equipped with a double-layer filter, witch can effectively filter impurities in water.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 360, hanging: 360 },
    }),

    // List Item 2
    new Paragraph({
        children: [
            new TextRun({
                text: "• The separate recoil line allows to accurately record how much water the chickens drink.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 360, hanging: 360 },
    }),

    // List Item 3
    new Paragraph({
        children: [
            new TextRun({
                text: "• The pressure regulator can be adjusted so as to adjust the nipple’s water output, to meet the needs of the chicken’s different age, and with a recoil knob (manual/automatic), easy to flush water line.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 360, hanging: 360 },
    }),

    // List Item 4
    new Paragraph({
        children: [
            new TextRun({
                text: "• The drinking nipples are double sealed structure, and they can flow by both 360 degrees side knocking and by top knocking, which ensure that chickens can drink water at any position. There are two kinds of drinking nipples, the red and the yellow, which are respectively used for breeding chicken and broiler feeding. The red nipples’ average water flow is 18mL /min at 20cm water pressure, and the yellow nipples’ average water flow is 34 mL /min at 20cm water pressure.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 360, hanging: 360 },
    }),

    // List Item 5
    new Paragraph({
        children: [
            new TextRun({
                text: "• The drinking pipes with retractable hermaphrodite connectors can relieve stress caused by thermal expansion and contraction, preventing damage to the pipe.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 360, hanging: 360 },
    }),

    // List Item 6
    new Paragraph({
        children: [
            new TextRun({
                text: "• The tube end is equipped with transparent steel wire hose and centralized drain line for easy observation of water level and flushing water line.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 360, hanging: 360 },
        spacing: { after: 200 },
    }),

    // Spacer for image area
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    // Paragraph with bullet (Item 7)
    new Paragraph({
        children: [
            new TextRun({
                text: "• There are two kinds of drinking nipples (red and yellow) for feeding breeders and broilers respectively. Water can come out from the upper top by laterally tapping in any direction within 360°. Its water flow can be adjusted according to water pressure to meet the drinking demands of the poultry of different ages in days.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 360, hanging: 360 },
        spacing: { after: 400 },
    }),

    // Technical parameters Header
    new Paragraph({
        children: [
            new TextRun({
                text: "Technical parameters",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // Data Table
    new Table({
        columnWidths: [1500, 3000, 4860],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 1500, type: WidthType.DXA },
                        borders: cellBorders,
                        shading: { fill: "F2F2F2", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S/N", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3000, type: WidthType.DXA },
                        borders: cellBorders,
                        shading: { fill: "F2F2F2", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Category", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 4860, type: WidthType.DXA },
                        borders: cellBorders,
                        shading: { fill: "F2F2F2", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Feeding capacity", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 1
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 1500, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3000, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Broiler", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 4860, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8- 12 birds/Unit", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 1500, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3000, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Duck", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 4860, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "10 birds/Unit", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 1500, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3000, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Breeder", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 4860, type: WidthType.DXA },
                        borders: cellBorders,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "10 bird/Unit", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // Footer Table (Red Background)
    new Table({
        columnWidths: [7000, 2360],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 7000, type: WidthType.DXA },
                        shading: { fill: "E25228", type: ShadingType.CLEAR },
                        borders: noBorders,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "QINGDAO BIG HERDSMAN MACHINERY CO.,LTD", font: "Arial", size: 24, bold: true, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Add: Yuehe road, Konggang industrial park, Qingdao city,", font: "Arial", size: 18, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Shandong Province, PR China", font: "Arial", size: 18, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Tel: +86-532-8493 3988", font: "Arial", size: 18, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Website: www.bigherdsman.com", font: "Arial", size: 18, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 2360, type: WidthType.DXA },
                        shading: { fill: "E25228", type: ShadingType.CLEAR },
                        borders: noBorders,
                        verticalAlign: AlignmentType.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "SCAN QR CODE ON WECHAT", font: "Arial", size: 14, color: "000000" })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),
];
```