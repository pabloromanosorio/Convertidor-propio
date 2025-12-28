```javascript
return [
    // --- HEADER ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "COMMONWEALTH OF PENNSYLVANIA",
                bold: true,
                font: "Arial",
                size: 28, // 14pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "DEPARTMENT OF STATE",
                bold: true,
                font: "Arial",
                size: 28, // 14pt
                color: "000000",
            }),
        ],
    }),

    // --- MAIN TABLE ---
    // Strategy: 6 Columns to accommodate the split in Row 6 (5. at... | 6. on the...)
    // Col 1: Num (Left)
    // Col 2: Label (Left)
    // Col 3: Value (Left)
    // Col 4: Num (Right)
    // Col 5: Label (Right)
    // Col 6: Value (Right)
    new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [400, 1600, 2680, 400, 1600, 2680],
        rows: [
            // --- ROW 0: APOSTILLE HEADER ---
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 6,
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 2, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "APOSTILLE",
                                        bold: true,
                                        font: "Arial",
                                        size: 24,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "(Convention de La Haye du 5 octobre 1961)",
                                        font: "Arial",
                                        size: 20,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 1: Country ---
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "1.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "Country:", font: "Arial", size: 20, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Pais / Pays:", font: "Arial", size: 16, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 4,
                        width: { size: 7360, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "UNITED STATES OF AMERICA", font: "Arial", size: 22, color: "000000", bold: true })],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 2: Signed by ---
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "2.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "This public document has been signed by", font: "Arial", size: 18, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Este documento público ha sido firmado por", font: "Arial", size: 14, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Ce document public a été signé par", font: "Arial", size: 14, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 4,
                        width: { size: 7360, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "LACEY J VANDEVANDER", font: "Arial", size: 22, color: "000000", bold: true })],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 3: Capacity ---
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "3.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "acting in the capacity of", font: "Arial", size: 18, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "quien actua en calidad de", font: "Arial", size: 14, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "agissant en qualité de", font: "Arial", size: 14, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 4,
                        width: { size: 7360, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "NOTARY PUBLIC", font: "Arial", size: 22, color: "000000", bold: true })],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 4: Seal/Stamp of ---
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "4.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "bears the seal/stamp of", font: "Arial", size: 18, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "lleva el sello/timbre de", font: "Arial", size: 14, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "porte le sceau/timbre de", font: "Arial", size: 14, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 4,
                        width: { size: 7360, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "LACEY J VANDEVANDER , NOTARY PUBLIC, BLAIR COUNTY, COMMONWEALTH OF PENNSYLVANIA", font: "Arial", size: 22, color: "000000", bold: true })],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 5: CERTIFIED ---
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 6,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "CERTIFIED", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "Certificado / Attesté", font: "Arial", size: 16, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 6: At / On the ---
            new TableRow({
                children: [
                    // Col 1: 5.
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "5.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    // Col 2: at
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "at", font: "Arial", size: 20, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "en / à", font: "Arial", size: 16, color: "000000" })] }),
                        ],
                    }),
                    // Col 3: Harrisburg
                    new TableCell({
                        width: { size: 2680, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "HARRISBURG, PENNSYLVANIA", font: "Arial", size: 22, color: "000000", bold: true })],
                            }),
                        ],
                    }),
                    // Col 4: 6.
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "6.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    // Col 5: on the
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "on the", font: "Arial", size: 20, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "en el / sur le", font: "Arial", size: 16, color: "000000" })] }),
                        ],
                    }),
                    // Col 6: Date
                    new TableCell({
                        width: { size: 2680, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "10TH DAY OF JULY, 2025", font: "Arial", size: 22, color: "000000", bold: true })],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 7: By ---
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "7.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "by", font: "Arial", size: 20, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "por / par", font: "Arial", size: 16, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 4,
                        width: { size: 7360, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "ALBERT SCHMIDT, SECRETARY OF THE COMMONWEALTH OF PENNSYLVANIA", font: "Arial", size: 20, color: "000000", bold: true })],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 8: No ---
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "8.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "No.:", font: "Arial", size: 20, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Número", font: "Arial", size: 16, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Nombre", font: "Arial", size: 16, color: "000000" })] }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 4,
                        width: { size: 7360, type: WidthType.DXA },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "202531237", font: "Arial", size: 22, color: "000000", bold: true })],
                            }),
                        ],
                    }),
                ],
            }),

            // --- ROW 9: Seal and Signature ---
            new TableRow({
                children: [
                    // Col 1: 9.
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "9.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    // Col 2+3: Seal Label + Image
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4280, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "Seal/Stamp", font: "Arial", size: 20, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Sello/Timbre", font: "Arial", size: 16, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Sceau/Timbre", font: "Arial", size: 16, color: "000000" })] }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                spacing: { before: 200, after: 200 },
                                children: [
                                    new TextRun({ text: "[Seal: COMMONWEALTH OF PENNSYLVANIA DEPARTMENT OF STATE]", font: "Arial", size: 16, color: "000000", bold: true })
                                ]
                            }),
                        ],
                    }),
                    // Col 4: 10.
                    new TableCell({
                        width: { size: 400, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "10.", font: "Arial", size: 20, color: "000000" })] })],
                    }),
                    // Col 5+6: Signature Label + Image
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4280, type: WidthType.DXA },
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "Signature", font: "Arial", size: 20, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Firma", font: "Arial", size: 16, color: "000000" })] }),
                            new Paragraph({ children: [new TextRun({ text: "Signature", font: "Arial", size: 16, color: "000000" })] }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                spacing: { before: 400, after: 100 },
                                children: [
                                    new TextRun({ text: "[Signature]", font: "Arial", size: 20, color: "000000", italics: true })
                                ]
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "Albert Schmidt", font: "Arial", size: 20, color: "000000" })
                                ]
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    // --- FOOTER TEXT ---
    new Paragraph({
        spacing: { before: 200 },
        children: [
            new TextRun({ text: "To verify this document, please go to ", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: "https://www.notaries.pa.gov/Pages/Search.aspx", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: " and insert the number ", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: "202531237", font: "Arial", size: 16, color: "000000", bold: true }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({ text: "Para verificar este documento, visite ", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: "https://www.notaries.pa.gov/Pages/Search.aspx", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: " e ingrese el número ", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: "202531237", font: "Arial", size: 16, color: "000000", bold: true }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({ text: "Pour vérifier ce document, veuillez vous rendre sur le site ", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: "https://www.notaries.pa.gov/Pages/Search.aspx", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: " et insérer le numéro ", font: "Arial", size: 16, color: "000000", bold: true }),
            new TextRun({ text: "202531237", font: "Arial", size: 16, color: "000000", bold: true }),
        ],
    }),

    new Paragraph({
        spacing: { before: 200 },
        children: [
            new TextRun({
                text: "This certificate only certifies the authenticity of the signature and the capacity of the person who has signed the public document, and, where appropriate, the identity of the seal or stamp which the public document bears.",
                font: "Arial",
                size: 18,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        spacing: { before: 100 },
        children: [
            new TextRun({
                text: "This certificate does not certify the content of the document for which it was issued.",
                font: "Arial",
                size: 18,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        spacing: { before: 100 },
        children: [
            new TextRun({
                text: "This certificate is not valid for use anywhere within the United States of America, its territories or possessions.",
                font: "Arial",
                size: 18,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        spacing: { before: 100 },
        children: [
            new TextRun({ text: "This certificate constitutes an Apostille under the ", font: "Arial", size: 18, color: "000000" }),
            new TextRun({ text: "Hague Convention of 5 October 1961 Abolishing the Requirement of Legalisation for Foreign Public Documents", font: "Arial", size: 18, color: "000000", bold: true, italics: true }),
            new TextRun({ text: ", only if the Convention is in force between the United States and the country where it is to be presented.", font: "Arial", size: 18, color: "000000" }),
        ],
    }),
    new Paragraph({
        spacing: { before: 100 },
        children: [
            new TextRun({
                text: "If not an Apostille, this certificate remains subject to applicable additional authentication requirements.",
                font: "Arial",
                size: 18,
                color: "000000",
            }),
        ],
    }),
];
```