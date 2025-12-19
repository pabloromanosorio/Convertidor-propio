return [
    // --- HEADER SECTION (Layout Table) ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [5616, 3744], // ~60% / 40% split
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
                    // Left Column: Logo & Address
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "[IMAGE: LabCorp Logo]", font: "Arial", color: "000000", size: 22 }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Laboratory Corporation of America", font: "Arial", color: "000000", bold: true, size: 28 }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "P.O. Box 2230 Burlington, NC 27216 USA  Telephone: (513) 985-9777   ", font: "Arial", color: "000000", size: 18 }),
                                    new TextRun({ text: "Reporte de Relación", font: "Arial", color: "000000", size: 18 }),
                                ],
                            }),
                        ],
                    }),
                    // Right Column: Account Info
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Información de la Cuenta", font: "Arial", color: "000000", bold: true, underline: { type: "single" }, size: 20 }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Núm. de Cuenta: ", font: "Arial", color: "000000", size: 18 }),
                                    new TextRun({ text: "32901500", font: "Arial", color: "000000", bold: true, size: 18 }),
                                ],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Burlington Español Pvt. Cases", font: "Arial", color: "000000", size: 18 })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Referencia 1:", font: "Arial", color: "000000", size: 18 })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Referencia 2:", font: "Arial", color: "000000", size: 18 })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Referencia 3:", font: "Arial", color: "000000", size: 18 })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "BURLINGTON, NC 27215", font: "Arial", color: "000000", size: 18 })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 200 } }), // Spacer

    // --- CASE NUMBER ---
    new Paragraph({
        children: [
            new TextRun({ text: "LabCorp Núm. de Caso   ", font: "Arial", color: "000000", bold: true, size: 22 }),
            new TextRun({ text: "C1G-060405", font: "Arial", color: "000000", bold: true, size: 22 }),
        ],
        spacing: { after: 200 },
    }),

    // --- DATA TABLE ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [2000, 2500, 1800, 1500, 1560], // 5 Columns to handle layout
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
        },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Relación", font: "Arial", color: "000000", bold: true, underline: { type: "single" }, size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Nombre", font: "Arial", color: "000000", bold: true, underline: { type: "single" }, size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }), // Spacer/ID col
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Raza", font: "Arial", color: "000000", bold: true, underline: { type: "single" }, size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Date Collected", font: "Arial", color: "000000", bold: true, underline: { type: "single" }, size: 20 })] })] }),
                ],
            }),
            // Row 1: Madre
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Madre", font: "Arial", color: "000000", size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "██████████", font: "Arial", color: "000000", size: 20 })] })] }), // Redacted
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "59B-1031-0", font: "Arial", color: "000000", size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Blanco(a)", font: "Arial", color: "000000", size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Septiembre 08, 2025", font: "Arial", color: "000000", size: 20 })] })] }),
                ],
            }),
            // Row 2: Niño
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Niño(a)", font: "Arial", color: "000000", size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "██████████", font: "Arial", color: "000000", size: 20 })] })] }), // Redacted
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "59B-1032-0", font: "Arial", color: "000000", size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Septiembre 08, 2025", font: "Arial", color: "000000", size: 20 })] })] }),
                ],
            }),
            // Row 3: Presunto Padre
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Presunto Padre", font: "Arial", color: "000000", size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "██████████", font: "Arial", color: "000000", size: 20 })] })] }), // Redacted
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "59B-1033-0", font: "Arial", color: "000000", size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Blanco(a)", font: "Arial", color: "000000", size: 20 })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Septiembre 08, 2025", font: "Arial", color: "000000", size: 20 })] })] }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 400 } }), // Large Spacer

    // --- CONCLUSION SECTION ---
    new Paragraph({
        children: [
            new TextRun({ text: "Conclusión:", font: "Arial", color: "000000", bold: true, underline: { type: "single" }, size: 22 }),
        ],
        spacing: { after: 100 },
    }),

    // Stats Line
    new Paragraph({
        children: [
            new TextRun({ text: "Indice Paternidad Combinado: 3,619,557 a 1", font: "Arial", color: "000000", size: 22 }),
            new TextRun({ text: "\t\tProbabilidad de Paternidad: 99.99% (Probabilidad Previa = 0.5)", font: "Arial", color: "000000", size: 22 }),
        ],
        tabStops: [{ position: 4680, type: "left" }], // Tab stop for alignment
        spacing: { after: 200 },
    }),

    // Narrative 1
    new Paragraph({
        children: [
            new TextRun({ text: "El presunto padre, ", font: "Arial", color: "000000", size: 22 }),
            new TextRun({ text: "██████████", font: "Arial", color: "000000", size: 22 }), // Redacted name
            new TextRun({ text: " no puede ser excluido como el padre biológico del niño(a) ", font: "Arial", color: "000000", size: 22 }),
            new TextRun({ text: "██████████", font: "Arial", color: "000000", size: 22 }), // Redacted name
            new TextRun({ text: ", debido a que ellos comparten marcadores genéticos. Utilizando los sistemas arriba mencionados, la probabilidad de paternidad es 99.99%, cuando se compara con un hombre no analizado y sin parentesco.", font: "Arial", color: "000000", size: 22 }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200 },
    }),

    // Narrative 2
    new Paragraph({
        children: [
            new TextRun({ text: "Yo, el Director firmante, habiendo sido debidamente juramentado, para declarar que yo he leído el precedente reporte del análisis de las muestras de los individuos arriba mencionados, firmado por mí, y bajo pena de sanción por perjurio, creo que los hechos y resultados presentados son verdaderos y correctos.", font: "Arial", color: "000000", size: 22 }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 400 },
    }),

    // --- SIGNATURES & NOTARY ---
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4680, 4680],
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
                    // Left: Director Signature
                    new TableCell({
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "[IMAGE: Signature]", font: "Arial", color: "000000", size: 22 })] }),
                            new Paragraph({
                                children: [new TextRun({ text: "__________________________", font: "Arial", color: "000000", size: 22 })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Jang Eun Cho, PhD", font: "Arial", color: "000000", size: 22 })],
                            }),
                            new Paragraph({ text: "" }),
                            new Paragraph({
                                children: [new TextRun({ text: "State of North Carolina", font: "Arial", color: "000000", size: 22 })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "County of Alamance", font: "Arial", color: "000000", size: 22 })],
                            }),
                        ],
                    }),
                    // Right: Notary Box
                    new TableCell({
                        children: [
                            new Table({
                                width: { size: 100, type: WidthType.PERCENTAGE },
                                columnWidths: [4000],
                                rows: [
                                    new TableRow({
                                        children: [
                                            new TableCell({
                                                borders: {
                                                    top: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                                                    bottom: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                                                    left: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                                                    right: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                                                },
                                                children: [
                                                    new Paragraph({
                                                        children: [new TextRun({ text: "DAPHNE B. COCHRAN", font: "Arial", color: "000000", size: 24 })],
                                                        alignment: AlignmentType.CENTER,
                                                    }),
                                                    new Paragraph({
                                                        children: [new TextRun({ text: "NOTARY PUBLIC", font: "Arial", color: "000000", size: 22 })],
                                                        alignment: AlignmentType.CENTER,
                                                    }),
                                                    new Paragraph({
                                                        children: [new TextRun({ text: "ALAMANCE COUNTY", font: "Arial", color: "000000", size: 22 })],
                                                        alignment: AlignmentType.CENTER,
                                                    }),
                                                    new Paragraph({
                                                        children: [new TextRun({ text: "North Carolina", font: "Arial", color: "000000", size: 22 })],
                                                        alignment: AlignmentType.CENTER,
                                                    }),
                                                    new Paragraph({
                                                        children: [new TextRun({ text: "My Commission Expires FEBRUARY 1, 2028", font: "Arial", color: "000000", size: 20 })],
                                                        alignment: AlignmentType.CENTER,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 200 } }),

    // Notary Statement
    new Paragraph({
        children: [
            new TextRun({ text: "I, ", font: "Arial", color: "000000", size: 22 }),
            new TextRun({ text: "DAPHNE B COCHRAN", font: "Arial", color: "000000", bold: true, size: 22 }),
            new TextRun({ text: ", certify that Jang Eun Cho, PhD personally came before me this day and acknowledged that he (or she) is an employee of Laboratory Corporation of America Holdings, a corporation, and that as an employee being authorized to do so, executed the foregoing on behalf of the corporation.", font: "Arial", color: "000000", size: 22 }),
        ],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200 },
    }),

    // Date and Notary Signature
    new Paragraph({
        children: [
            new TextRun({ text: "Subscribed and sworn to [or affirmed] before me this ", font: "Arial", color: "000000", size: 22 }),
            new TextRun({ text: "19 SEP 2025", font: "Arial", color: "000000", bold: true, size: 24 }),
            new TextRun({ text: " at Burlington, NC.", font: "Arial", color: "000000", size: 22 }),
        ],
        spacing: { after: 200 },
    }),

    new Paragraph({
        children: [
            new TextRun({ text: "[IMAGE: Notary Signature]", font: "Arial", color: "000000", size: 22 }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({ text: "Notary Public", font: "Arial", color: "000000", size: 20 }),
        ],
        spacing: { after: 400 },
    }),

    // --- FOOTER ---
    new Paragraph({
        children: [
            new TextRun({ text: "Laboratory Corporation of America Holdings esta' acreditado por la AABB.", font: "Arial", color: "000000", size: 18 }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { before: 400 },
    }),
    new Paragraph({
        children: [
            new TextRun({ text: "Página 2 de 2", font: "Arial", color: "000000", bold: true, size: 18 }),
        ],
        alignment: AlignmentType.CENTER,
    }),
];