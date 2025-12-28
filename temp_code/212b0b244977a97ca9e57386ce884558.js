```javascript
return [
    // --- HEADER ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "COMMONWEALTH OF PENNSYLVANIA",
                font: "Arial",
                size: 28, // 14pt
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "DEPARTMENT OF STATE",
                font: "Arial",
                size: 28, // 14pt
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // --- MAIN TABLE ---
    new Table({
        columnWidths: [1600, 3080, 1600, 3080], // Total 9360 DXA (approx 4 columns)
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // ROW 1: APOSTILLE Header
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 4,
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "APOSTILLE", font: "Arial", size: 28, bold: true, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "(Convention de La Haye du 5 octobre 1961)", font: "Arial", size: 22, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 2: 1. Country
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "1.      Country:", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         Pais / Pays:", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "UNITED STATES OF AMERICA", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 3: 2. Signed by
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "2.      This public document has been signed by", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         Este documento público ha sido firmado por", font: "Arial", size: 18, color: "000000" }),
                                    new TextRun({ text: "\n         Ce document public a été signé par", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "LACEY J VANDEVANDER", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 4: 3. Capacity
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "3.      acting in the capacity of", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         quien actúa en calidad de", font: "Arial", size: 18, color: "000000" }),
                                    new TextRun({ text: "\n         agissant en qualité de", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "NOTARY PUBLIC", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 5: 4. Seal/Stamp of
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "4.      bears the seal/stamp of", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         lleva el sello/timbre de", font: "Arial", size: 18, color: "000000" }),
                                    new TextRun({ text: "\n         porte le sceau/timbre de", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "LACEY J VANDEVANDER , NOTARY PUBLIC, BLAIR COUNTY, COMMONWEALTH OF PENNSYLVANIA", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 6: CERTIFIED Header
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 4,
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "CERTIFIED", font: "Arial", size: 24, bold: true, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "Certificado / Attesté", font: "Arial", size: 20, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 7: 5. at | Harrisburg | 6. on the | Date
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "5.      at", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         en / à", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 3080, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "HARRISBURG, PENNSYLVANIA", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "6.      on the", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         en el / sur le", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 3080, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "10TH DAY OF JULY, 2025", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 8: 7. by
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "7.      by", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         por / par", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "ALBERT SCHMIDT, SECRETARY OF THE COMMONWEALTH OF PENNSYLVANIA", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 9: 8. No.
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "8.      No.:", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         Número:", font: "Arial", size: 18, color: "000000" }),
                                    new TextRun({ text: "\n         Nombre:", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 4680, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "202531236", font: "Arial", size: 22, bold: true, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // ROW 10: 9. Seal | Seal Img | 10. Signature | Sig Img
            new TableRow({
                height: { value: 2000, rule: "atLeast" }, // Make row taller for seal/sig
                children: [
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "9.      Seal/Stamp", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         Sello/Timbre", font: "Arial", size: 18, color: "000000" }),
                                    new TextRun({ text: "\n         Sceau/Timbre", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 3080, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "[Seal: COMMONWEALTH OF PENNSYLVANIA DEPARTMENT OF STATE]", font: "Arial", size: 16, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "10.    Signature", font: "Arial", size: 22, color: "000000" }),
                                    new TextRun({ text: "\n         Firma", font: "Arial", size: 18, color: "000000" }),
                                    new TextRun({ text: "\n         Signature", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 3080, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                        },
                        verticalAlign: "center",
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "[Signature]", font: "Arial", size: 16, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: "Albert Schmidt", font: "Arial", size: 22, color: "000000" }),
                                ],
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
            new TextRun({
                text: "To verify this document, please go to https://www.notaries.pa.gov/Pages/Search.aspx and insert the number 202531236",
                font: "Arial",
                size: 18,
                color: "000000",
                bold: true,
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Para verificar este documento, visite https://www.notaries.pa.gov/Pages/Search.aspx e ingrese el número 202531236",
                font: "Arial",
                size: 16,
                color: "000000",
                bold: true,
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Pour vérifier ce document, veuillez vous rendre sur le site https://www.notaries.pa.gov/Pages/Search.aspx et insérer le numéro 202531236",
                font: "Arial",
                size: 16,
                color: "000000",
                bold: true,
            }),
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
            new TextRun({
                text: "This certificate constitutes an Apostille under the ",
                font: "Arial",
                size: 18,
                color: "000000",
            }),
            new TextRun({
                text: "Hague Convention of 5 October 1961 Abolishing the Requirement of Legalisation for Foreign Public Documents",
                font: "Arial",
                size: 18,
                bold: true,
                italics: true,
                color: "000000",
            }),
            new TextRun({
                text: ", only if the Convention is in force between the United States and the country where it is to be presented.",
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
                text: "If not an Apostille, this certificate remains subject to applicable additional authentication requirements.",
                font: "Arial",
                size: 18,
                color: "000000",
            }),
        ],
    }),
];
```