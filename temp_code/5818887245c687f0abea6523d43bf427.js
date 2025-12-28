```javascript
return [
    // --- HEADER SECTION (2-Column Table for Left/Right Alignment) ---
    new Table({
        columnWidths: [5000, 4360],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    // Left Column: Department Info
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 5000, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "STATE OF NEW YORK", font: "Arial", size: 18, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { after: 100 },
                                children: [new TextRun({ text: "DEPARTMENT OF STATE", font: "Arial", size: 28, color: "000000" })], // Larger font for title
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "ONE COMMERCE PLAZA", font: "Arial", size: 18, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "99 WASHINGTON AVENUE", font: "Arial", size: 18, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "ALBANY, NY 12231-0001", font: "Arial", size: 18, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "WWW.DOS.NY.GOV", font: "Arial", size: 18, color: "000000" })],
                            }),
                        ],
                    }),
                    // Right Column: Officials
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 4360, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({ text: "KATHY HOCHUL", font: "Arial", size: 18, color: "000000" }),
                                    new TextRun({ text: "\nGOVERNOR", font: "Arial", size: 16, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                spacing: { before: 240 }, // Gap between officials
                                children: [
                                    new TextRun({ text: "ROBERT J. RODRIGUEZ", font: "Arial", size: 18, color: "000000" }),
                                    new TextRun({ text: "\nSECRETARY OF STATE", font: "Arial", size: 16, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),

    // --- FILER INFORMATION ---
    new Paragraph({
        spacing: { before: 720 }, // Large gap after header
        children: [
            new TextRun({ text: "Filer: ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "ANN HUDOCK", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 720 }, // Indented address block
        children: [new TextRun({ text: "COUNTERPART INTERNATIONAL, INC.", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        indent: { left: 720 },
        children: [new TextRun({ text: "1919 PENNSYLVANIA AVENUE, NW SUITE 425", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        indent: { left: 720 },
        children: [new TextRun({ text: "WASHINGTON, DC, 20006, USA", font: "Arial", size: 22, color: "000000" })],
    }),

    // --- BODY TEXT ---
    new Paragraph({
        spacing: { before: 480 },
        children: [new TextRun({ text: "Your document has been filed by the Department of State.", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        spacing: { before: 120 },
        children: [new TextRun({ text: "We have attached the official filing receipt and related document(s) for the following entity:", font: "Arial", size: 22, color: "000000" })],
    }),

    // --- DATA TABLE (DOS ID / Entity Name) ---
    // Using a borderless table to align the labels and values perfectly
    new Table({
        columnWidths: [2500, 6860],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 2500, type: WidthType.DXA },
                        children: [new Paragraph({ spacing: { before: 240 }, children: [new TextRun({ text: "DOS ID:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 6860, type: WidthType.DXA },
                        children: [new Paragraph({ spacing: { before: 240 }, children: [new TextRun({ text: "183848", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 2500, type: WidthType.DXA },
                        children: [new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "Entity Name:", font: "Arial", size: 22, bold: true, color: "000000" })] })],
                    }),
                    new TableCell({
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        width: { size: 6860, type: WidthType.DXA },
                        children: [new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "COUNTERPART INTERNATIONAL, INC.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
        ],
    }),

    // --- INSTRUCTION BULLET ---
    new Paragraph({
        spacing: { before: 360 },
        indent: { left: 360, hanging: 360 }, // Hanging indent for bullet alignment
        children: [
            new TextRun({ text: "•  ", font: "Arial", size: 22, color: "000000" }), // Manual bullet
            new TextRun({ text: "Retain this letter and attachment(s) for your records. The Department of State does not mail additional copies of the filing receipt or related attachment(s).", font: "Arial", size: 22, color: "000000" }),
        ],
    }),

    // --- CONTACT INFORMATION ---
    new Paragraph({
        spacing: { before: 360 },
        children: [new TextRun({ text: "Contact Information", font: "Arial", size: 22, bold: true, color: "000000" })],
    }),
    new Paragraph({
        indent: { left: 360, hanging: 360 },
        children: [
            new TextRun({ text: "•  ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Department of State: Email the Division of Corporations at corporations@dos.ny.gov.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({
        indent: { left: 360, hanging: 360 },
        children: [
            new TextRun({ text: "•  ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Department of Taxation and Finance: Visit https://www.tax.ny.gov/help/contact for self-help options and telephone numbers.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),

    // --- FOOTER (LOGO REPRESENTATION) ---
    // Representing the graphical logo with text as per instructions for non-standard images
    new Paragraph({
        spacing: { before: 1440 }, // Push to bottom
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({ text: "NEW YORK STATE OF OPPORTUNITY.  |  ", font: "Arial", size: 20, bold: true, color: "000000" }),
            new TextRun({ text: "Department of State", font: "Arial", size: 24, bold: true, color: "000000" }),
        ],
    }),
];
```