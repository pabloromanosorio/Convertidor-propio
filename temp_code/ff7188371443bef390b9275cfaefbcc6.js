```javascript
return [
    // --- HEADER SECTION ---
    new Table({
        columnWidths: [4680, 4680],
        rows: [
            new TableRow({
                children: [
                    // Left Column: Logo and Address
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "[IMAGE placeholder]", font: "Arial", color: "000000" }),
                                ]
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Laboratory Corporation of America", font: "Arial", bold: true, size: 24, color: "000000" }),
                                ]
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "P.O. Box 2230 Burlington, NC 27216 USA  Telephone: (513) 985-9777   Reporte de Relación", font: "Arial", size: 16, color: "000000" }),
                                ]
                            }),
                        ],
                    }),
                    // Right Column: Account Info
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "Información de la Cuenta", font: "Arial", bold: true, size: 20, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Núm. de Cuenta: 32901500", font: "Arial", size: 18, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Burlington Español Pvt. Cases", font: "Arial", size: 18, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Referencia 1:", font: "Arial", size: 18, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Referencia 2:", font: "Arial", size: 18, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Referencia 3:", font: "Arial", size: 18, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "BURLINGTON, NC 27215", font: "Arial", size: 18, color: "000000" })] }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // --- CASE NUMBER ---
    new Paragraph({
        children: [
            new TextRun({ text: "LabCorp Núm. de Caso   C1G-060405", font: "Arial", bold: true, size: 22, color: "000000" }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // --- SUBJECTS TABLE (Borderless) ---
    new Table({
        columnWidths: [2000, 3000, 2000, 2360],
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Relación", font: "Arial", bold: true, size: 20, color: "000000", underline: {} })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Nombre", font: "Arial", bold: true, size: 20, color: "000000", underline: {} })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Raza", font: "Arial", bold: true, size: 20, color: "000000", underline: {} })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Date Collected", font: "Arial", bold: true, size: 20, color: "000000", underline: {} })] })] }),
                ],
            }),
            // Row 1: Madre
            new TableRow({
                children: [
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Madre", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "[REDACTED] 59B-1031-0", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Blanco(a)", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Septiembre 08, 2025", font: "Arial", size: 20, color: "000000" })] })] }),
                ],
            }),
            // Row 2: Niño
            new TableRow({
                children: [
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Niño(a)", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "[REDACTED] 59B-1032-0", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Septiembre 08, 2025", font: "Arial", size: 20, color: "000000" })] })] }),
                ],
            }),
            // Row 3: Presunto Padre
            new TableRow({
                children: [
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Presunto Padre", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "[REDACTED] 59B-1033-0", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Blanco(a)", font: "Arial", size: 20, color: "000000" })] })] }),
                    new TableCell({ borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }, width: { size: 2360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Septiembre 08, 2025", font: "Arial", size: 20, color: "000000" })] })] }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- TABLE 1: Analisis de ADN ---
    new Paragraph({ children: [new TextRun({ text: "Analisis de ADN", font: "Arial", bold: true, size: 18, color: "000000" })] }),
    new Table({
        columnWidths: [600, 970, 970, 970, 970, 970, 970, 970, 970, 970],
        rows: [
            // Header
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "000000", type: ShadingType.CLEAR }, children: [new Paragraph("")] }),
                    ...["D3S1358", "D7S820", "vWA", "D12S391", "FGA", "D8S1179", "D21S11", "D18S51", "D13S317"].map(t => 
                        new TableCell({ width: { size: 970, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", bold: true, size: 16, color: "000000" })] })] })
                    )
                ]
            }),
            // Row M
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "M", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                    ...["15, 16", "9, 10", "14, 17", "18, 21", "22, 25", "8, 14", "29, 30", "12, 15", "11, 12"].map(t => 
                        new TableCell({ width: { size: 970, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                    )
                ]
            }),
            // Row N
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "N", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                    ...["14, 16", "9, 11", "14, 18", "18, 22", "21, 25", "8, 13", "29, 32.2", "12, 14", "9, 12"].map(t => 
                        new TableCell({ width: { size: 970, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                    )
                ]
            }),
            // Row PP
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                    ...["14, 15", "11, 12", "18, 20", "19, 22", "21, 25", "12, 13", "28, 31.2", "14, 15", "9, 14"].map(t => 
                        new TableCell({ width: { size: 970, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                    )
                ]
            }),
            // Row IP
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "IP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                    ...["4.08", "2.36", "7.48", "2.85", "1.54", "0.000032", "2.98", "6.85", ""].map(t => 
                        new TableCell({ width: { size: 970, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                    )
                ]
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- TABLE 2: Analisis de ADN ---
    new Paragraph({ children: [new TextRun({ text: "Analisis de ADN", font: "Arial", bold: true, size: 18, color: "000000" })] }),
    new Table({
        columnWidths: [600, 1095, 1095, 1095, 1095, 1095, 1095, 1095, 1095],
        rows: [
            // Header
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "000000", type: ShadingType.CLEAR }, children: [new Paragraph("")] }),
                    ...["D16S539", "TH01", "TPOX", "D2S1338", "D19S433", "D22S1045", "D2S441", "D10S1248"].map(t => 
                        new TableCell({ width: { size: 1095, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", bold: true, size: 16, color: "000000" })] })] })
                    )
                ]
            }),
            // Row M
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "M", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                    ...["10, 13", "6.1, 8", "8", "16, 23", "14", "15, 16", "10", "13, 14"].map(t => 
                        new TableCell({ width: { size: 1095, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                    )
                ]
            }),
            // Row N
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "N", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                    ...["12, 13", "6.1, 7", "8, 11", "23", "13, 14", "15", "10, 11", "13, 14"].map(t => 
                        new TableCell({ width: { size: 1095, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                    )
                ]
            }),
            // Row PP
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                    ...["12, 13", "7", "8, 11", "20, 23", "13, 14", "15", "10, 11", "12, 13"].map(t => 
                        new TableCell({ width: { size: 1095, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                    )
                ]
            }),
            // Row IP
            new TableRow({
                children: [
                    new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "IP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                    ...["1.68", "5.35", "1.92", "4.67", "2.07", "2.85", "1.47", "0.81"].map(t => 
                        new TableCell({ width: { size: 1095, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                    )
                ]
            }),
        ],
    }),

    new Paragraph({ text: "" }),

    // --- SPLIT TABLES: D6S1043 & ABI Y-Chromosome ---
    new Table({
        columnWidths: [2500, 6860],
        rows: [
            new TableRow({
                children: [
                    // LEFT TABLE (D6S1043)
                    new TableCell({
                        width: { size: 2500, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "Analisis de ADN", font: "Arial", bold: true, size: 18, color: "000000" })] }),
                            new Table({
                                columnWidths: [600, 1500],
                                rows: [
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "000000", type: ShadingType.CLEAR }, children: [new Paragraph("")] }),
                                        new TableCell({ width: { size: 1500, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "D6S1043", font: "Arial", bold: true, size: 16, color: "000000" })] })] })
                                    ]}),
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "M", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                                        new TableCell({ width: { size: 1500, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "18, 21", font: "Arial", size: 16, color: "000000" })] })] })
                                    ]}),
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "N", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                                        new TableCell({ width: { size: 1500, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "11, 18", font: "Arial", size: 16, color: "000000" })] })] })
                                    ]}),
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                                        new TableCell({ width: { size: 1500, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "11, 12", font: "Arial", size: 16, color: "000000" })] })] })
                                    ]}),
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "IP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                                        new TableCell({ width: { size: 1500, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1.65", font: "Arial", size: 16, color: "000000" })] })] })
                                    ]}),
                                ]
                            })
                        ]
                    }),
                    // RIGHT TABLE (Y-STR Part 1)
                    new TableCell({
                        width: { size: 6860, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "ABI Y-Chromosome", font: "Arial", bold: true, size: 18, color: "000000" })] }),
                            new Table({
                                columnWidths: [600, 894, 894, 894, 894, 894, 894, 894],
                                rows: [
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "000000", type: ShadingType.CLEAR }, children: [new Paragraph("")] }),
                                        ...["DYS456", "DYS389I", "DYS390", "DYS389II", "DYS458", "DYS19", "DYS393"].map(t => 
                                            new TableCell({ width: { size: 894, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", bold: true, size: 16, color: "000000" })] })] })
                                        )
                                    ]}),
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "N", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                                        ...["15", "13", "21", "30", "20", "15", "14"].map(t => 
                                            new TableCell({ width: { size: 894, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                                        )
                                    ]}),
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                                        ...["15", "13", "21", "30", "20", "15", "14"].map(t => 
                                            new TableCell({ width: { size: 894, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                                        )
                                    ]}),
                                    new TableRow({ children: [
                                        new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "IP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                                        new TableCell({ columnSpan: 7, width: { size: 6258, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3,625.00", font: "Arial", size: 16, color: "000000" })] })] })
                                    ]})
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }),

    new Paragraph({ text: "" }),

    // --- TABLE 4: ABI Y-Chromosome Continued ---
    new Paragraph({ children: [new TextRun({ text: "ABI Y-Chromosome", font: "Arial", bold: true, size: 18, color: "000000" })] }),
    new Table({
        columnWidths: [600, 970, 970, 970, 970, 970, 970, 970, 970, 970],
        rows: [
            new TableRow({ children: [
                new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "000000", type: ShadingType.CLEAR }, children: [new Paragraph("")] }),
                ...["DYS391", "DYS439", "DYS635", "DYS392", "Y-GATA-H4", "DYS437", "DYS438", "DYS448", "DYS570"].map(t => 
                    new TableCell({ width: { size: 970, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", bold: true, size: 16, color: "000000" })] })] })
                )
            ]}),
            new TableRow({ children: [
                new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "N", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                ...["10", "12", "22", "11", "10", "14", "11", "20", "18"].map(t => 
                    new TableCell({ width: { size: 970, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                )
            ]}),
            new TableRow({ children: [
                new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                ...["10", "12", "22", "11", "10", "14", "11", "20", "18"].map(t => 
                    new TableCell({ width: { size: 970, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                )
            ]}),
            new TableRow({ children: [
                new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "IP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                new TableCell({ columnSpan: 9, width: { size: 8730, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1.00", font: "Arial", size: 16, color: "000000" })] })] })
            ]})
        ]
    }),

    new Paragraph({ text: "" }),

    // --- TABLE 5: ABI Y-Chromosome Continued ---
    new Paragraph({ children: [new TextRun({ text: "ABI Y-Chromosome", font: "Arial", bold: true, size: 18, color: "000000" })] }),
    new Table({
        columnWidths: [600, 2190, 2190, 2190, 2190],
        rows: [
            new TableRow({ children: [
                new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "000000", type: ShadingType.CLEAR }, children: [new Paragraph("")] }),
                ...["DYS533", "DYS549", "DYS481", "DYS576"].map(t => 
                    new TableCell({ width: { size: 2190, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", bold: true, size: 16, color: "000000" })] })] })
                )
            ]}),
            new TableRow({ children: [
                new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "N", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                ...["12", "11", "25", "16"].map(t => 
                    new TableCell({ width: { size: 2190, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                )
            ]}),
            new TableRow({ children: [
                new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                ...["12", "11", "25", "16"].map(t => 
                    new TableCell({ width: { size: 2190, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: "Arial", size: 16, color: "000000" })] })] })
                )
            ]}),
            new TableRow({ children: [
                new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "IP", font: "Arial", bold: true, size: 16, color: "000000" })] })] }),
                new TableCell({ columnSpan: 4, width: { size: 8760, type: WidthType.DXA }, borders: { top: { style: BorderStyle.SINGLE, size: 2 }, bottom: { style: BorderStyle.SINGLE, size: 2 }, left: { style: BorderStyle.SINGLE, size: 2 }, right: { style: BorderStyle.SINGLE, size: 2 } }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1.00", font: "Arial", size: 16, color: "000000" })] })] })
            ]})
        ]
    }),

    new Paragraph({ text: "" }),

    // --- FOOTER ---
    new Paragraph({ children: [new TextRun({ text: "Conclusión:", font: "Arial", bold: true, size: 22, color: "000000", underline: {} })] }),
    new Paragraph({ children: [new TextRun({ text: "Ver Conclusión en Página 2.", font: "Arial", size: 22, color: "000000" })] }),

    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),

    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Laboratory Corporation of America Holdings esta' acreditado por la AABB.", font: "Arial", size: 18, color: "000000" })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Página 1 de 2", font: "Arial", bold: true, size: 20, color: "000000" })] }),
];
```