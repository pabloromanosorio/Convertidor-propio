```javascript
return [
    // 1. Header
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "FORM OF AFFIDAVIT",
                font: "Arial",
                size: 36, // 18pt
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 400 } }), // Spacing

    // 2. Location
    new Paragraph({
        children: [
            new TextRun({
                text: "Commonwealth of Pennsylvania",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "County of Centre",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 400 } }), // Spacing

    // 3. Body Text
    new Paragraph({
        alignment: AlignmentType.BOTH, // Justified
        children: [
            new TextRun({
                text: "Before me, the undersigned notary public, personally appeared ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Robert A. Kubat, University Registrar",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
            new TextRun({
                text: " to me known or proven, who being duly sworn according to law, doth depose and say ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "the attached official transcript for Maria Diaz Moreno, dated 06/30/2025 is a certified official transcript issued by The Pennsylvania State University",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
            new TextRun({
                text: " and further deponent sayeth not.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 800 } }), // Spacing

    // 4. Signatures and Notary Section (Layout Table to push content right)
    new Table({
        columnWidths: [3120, 6240], // ~1/3 empty left, ~2/3 content right
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Row 1: Affiant Signature
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [],
                    }),
                    new TableCell({
                        width: { size: 6240, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "[Signature]",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "________________________________________",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Signature of Affiant",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 2: Spacing
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        width: { size: 6240, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [new Paragraph({ text: "", spacing: { after: 400 } })],
                    }),
                ],
            }),
            // Row 3: Notary Date
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [],
                    }),
                    new TableCell({
                        width: { size: 6240, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Sworn to and subscribed before me this",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                spacing: { before: 200, after: 200 },
                                children: [
                                    new TextRun({
                                        text: "   2   ",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                    }),
                                    new TextRun({
                                        text: " day of ",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                    new TextRun({
                                        text: "   July   ",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                    }),
                                    new TextRun({
                                        text: " 20 ",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                    new TextRun({
                                        text: "25",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 4: Notary Signature
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [],
                    }),
                    new TableCell({
                        width: { size: 6240, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "[Signature]",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "________________________________________",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Lacey J. Vandevander",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Notary Public",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            // Row 5: Seal Box
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [],
                    }),
                    new TableCell({
                        width: { size: 6240, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        children: [
                            new Table({
                                width: { size: 100, type: WidthType.PERCENTAGE },
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
                                                shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                                                children: [
                                                    new Paragraph({
                                                        alignment: AlignmentType.CENTER,
                                                        children: [new TextRun({ text: "Commonwealth of Pennsylvania - Notary Seal", font: "Arial", size: 16, color: "000000" })],
                                                    }),
                                                    new Paragraph({
                                                        alignment: AlignmentType.CENTER,
                                                        children: [new TextRun({ text: "Lacey J. Vandevander, Notary Public", font: "Arial", size: 16, color: "000000" })],
                                                    }),
                                                    new Paragraph({
                                                        alignment: AlignmentType.CENTER,
                                                        children: [new TextRun({ text: "Blair County", font: "Arial", size: 16, color: "000000" })],
                                                    }),
                                                    new Paragraph({
                                                        alignment: AlignmentType.CENTER,
                                                        children: [new TextRun({ text: "My commission expires December 8, 2028", font: "Arial", size: 16, color: "000000" })],
                                                    }),
                                                    new Paragraph({
                                                        alignment: AlignmentType.CENTER,
                                                        children: [new TextRun({ text: "Commission number 1387944", font: "Arial", size: 16, color: "000000" })],
                                                    }),
                                                    new Paragraph({
                                                        alignment: AlignmentType.CENTER,
                                                        children: [new TextRun({ text: "Member, Pennsylvania Association of Notaries", font: "Arial", size: 16, color: "000000" })],
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
];
```