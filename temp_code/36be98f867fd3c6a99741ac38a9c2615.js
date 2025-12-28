```javascript
const border = { style: BorderStyle.SINGLE, size: 1, color: "000000" };
const cellBorders = { top: border, bottom: border, left: border, right: border };
const fontStyle = { font: "Arial", size: 22, color: "000000" };

// Helper to create a table cell
const createCell = (text, widthDXA) => {
    return new TableCell({
        borders: cellBorders,
        width: { size: widthDXA, type: WidthType.DXA },
        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
        verticalAlign: VerticalAlign.CENTER,
        children: [
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: text,
                        ...fontStyle
                    })
                ]
            })
        ]
    });
};

// Helper for section headers
const createHeader = (text) => {
    return new Paragraph({
        spacing: { before: 400, after: 200 },
        children: [
            new TextRun({
                text: text,
                ...fontStyle
            })
        ]
    });
};

// --- Table 1 ---
// 2 Columns, 50/50 split of page width (9360 DXA)
const t1Widths = [4680, 4680];
const table1 = new Table({
    columnWidths: t1Widths,
    rows: [
        new TableRow({
            children: [
                createCell("Auger Cross - section Width (mm)", t1Widths[0]),
                createCell("8", t1Widths[1])
            ]
        }),
        new TableRow({
            children: [
                createCell("Auger Cross - section Thickness (mm)", t1Widths[0]),
                createCell("3.85", t1Widths[1])
            ]
        }),
        new TableRow({
            children: [
                createCell("Auger Pitch (mm)", t1Widths[0]),
                createCell("44.45", t1Widths[1])
            ]
        })
    ]
});

// --- Header 1 ---
const header1 = createHeader("Feed Quantity of Nine-grill Feed Pan");

// --- Table 2 ---
// 9 Columns. Col 1 wider (2160), Cols 2-9 narrower (900). Total 9360.
const t2Widths = [2160, 900, 900, 900, 900, 900, 900, 900, 900];
const table2 = new Table({
    columnWidths: t2Widths,
    rows: [
        new TableRow({
            children: [
                createCell("Gear", t2Widths[0]),
                createCell("1", t2Widths[1]),
                createCell("2", t2Widths[2]),
                createCell("3", t2Widths[3]),
                createCell("4", t2Widths[4]),
                createCell("5", t2Widths[5]),
                createCell("6", t2Widths[6]),
                createCell("7", t2Widths[7]),
                createCell("8", t2Widths[8]),
            ]
        }),
        new TableRow({
            children: [
                createCell("Feed quantity (g)", t2Widths[0]),
                createCell("465", t2Widths[1]),
                createCell("500", t2Widths[2]),
                createCell("550", t2Widths[3]),
                createCell("590", t2Widths[4]),
                createCell("635", t2Widths[5]),
                createCell("680", t2Widths[6]),
                createCell("725", t2Widths[7]),
                createCell("770", t2Widths[8]),
            ]
        }),
        new TableRow({
            children: [
                createCell("Gear", t2Widths[0]),
                createCell("9", t2Widths[1]),
                createCell("10", t2Widths[2]),
                createCell("11", t2Widths[3]),
                createCell("12", t2Widths[4]),
                createCell("13", t2Widths[5]),
                createCell("14", t2Widths[6]),
                createCell("15", t2Widths[7]),
                createCell("16", t2Widths[8]),
            ]
        }),
        new TableRow({
            children: [
                createCell("Feed quantity (g)", t2Widths[0]),
                createCell("815", t2Widths[1]),
                createCell("875", t2Widths[2]),
                createCell("935", t2Widths[3]),
                createCell("995", t2Widths[4]),
                createCell("1060", t2Widths[5]),
                createCell("1125", t2Widths[6]),
                createCell("1190", t2Widths[7]),
                createCell("1260", t2Widths[8]),
            ]
        })
    ]
});

// --- Header 2 ---
const header2 = createHeader("Feed Quantity of Five-grill Breeder Feed Pan");

// --- Table 3 ---
// 6 Columns. Same widths as Table 2 to maintain alignment.
const t3Widths = [2160, 900, 900, 900, 900, 900];
const table3 = new Table({
    columnWidths: t3Widths,
    rows: [
        new TableRow({
            children: [
                createCell("Gear", t3Widths[0]),
                createCell("1", t3Widths[1]),
                createCell("2", t3Widths[2]),
                createCell("3", t3Widths[3]),
                createCell("4", t3Widths[4]),
                createCell("5", t3Widths[5]),
            ]
        }),
        new TableRow({
            children: [
                createCell("Feed quantity (g)", t3Widths[0]),
                createCell("750", t3Widths[1]),
                createCell("820", t3Widths[2]),
                createCell("900", t3Widths[3]),
                createCell("990", t3Widths[4]),
                createCell("1080", t3Widths[5]),
            ]
        }),
        new TableRow({
            children: [
                createCell("Gear", t3Widths[0]),
                createCell("6", t3Widths[1]),
                createCell("7", t3Widths[2]),
                createCell("8", t3Widths[3]),
                createCell("9", t3Widths[4]),
                createCell("10", t3Widths[5]),
            ]
        }),
        new TableRow({
            children: [
                createCell("Feed quantity (g)", t3Widths[0]),
                createCell("1170", t3Widths[1]),
                createCell("1270", t3Widths[2]),
                createCell("1380", t3Widths[3]),
                createCell("1490", t3Widths[4]),
                createCell("1600", t3Widths[5]),
            ]
        })
    ]
});

return [table1, header1, table2, header2, table3];
```