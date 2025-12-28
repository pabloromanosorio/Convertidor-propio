```javascript
return [
    // 1. Header: DocuSign ID
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: A423CE5C-B25C-4EE4-9EE9-A8F5A4352CA0",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 2. Logo Placeholder (Text representation based on image)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "COUNTERPART",
                font: "Arial",
                size: 24, // 12pt
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "INTERNATIONAL",
                font: "Arial",
                size: 24, // 12pt
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "In partnership for",
                font: "Arial",
                size: 16, // 8pt
                color: "777777", // Greyish text in logo
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "results that last.",
                font: "Arial",
                size: 16, // 8pt
                color: "777777",
            }),
        ],
        spacing: { after: 400 },
    }),

    // 3. Title
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "DELEGATION OF AUTHORITY",
                font: "Arial",
                size: 28, // 14pt
                color: "000000",
            }),
        ],
        spacing: { before: 200, after: 400 },
    }),

    // 4. Addressee
    new Paragraph({
        children: [
            new TextRun({
                text: "Gwendolyn Appel",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Chief Operating Officer",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
        spacing: { after: 300 },
    }),

    // 5. Body Paragraph 1
    new Paragraph({
        alignment: AlignmentType.BOTH, // Justified
        children: [
            new TextRun({
                text: "On behalf of Counterpart International (Counterpart), I, Ann Hudock, DPhil, President and Chief Executive Officer, delegate Gwendolyn Appel the authority to financially and legally commit Counterpart and incur liabilities on its behalf for the following categories of commitment with the assigned threshold and on the condition that the review and clearance process outlined on the DOA process spreadsheet was followed:",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
        spacing: { after: 300 },
    }),

    // 6. Table
    new Table({
        columnWidths: [5616, 3744], // Approx 60% / 40% split of 9360 DXA
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Row 1
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Proposals and Concept Notes with budget amounts", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Concept Notes/Expressions of Interest/Letters of Interest with no budget amounts", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Teaming Agreements and Pre-Teaming Agreements", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "All Procurement of Goods and Services", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "All Grant Agreements (local and INGO)", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "All Commitments, including awards/contracts and modifications", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Non-Monetary Value Agreements, including MOUs", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 8
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Representations & Certifications, SF424s and other corporate statements or commitments", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5616, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Expense Authorizations", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 3744, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, left: { style: BorderStyle.SINGLE, size: 1, color: "000000" }, right: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
        ],
    }),

    // 7. Post-Table Paragraphs
    new Paragraph({
        alignment: AlignmentType.BOTH,
        children: [
            new TextRun({
                text: "The scope of this Delegation of Authority is limited Gwendolyn Appel’s, Chief Operating Officer’s responsibilities, Counterpart’s billable and organizational overhead budgets.",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
        spacing: { before: 300, after: 300 },
    }),

    new Paragraph({
        alignment: AlignmentType.BOTH,
        children: [
            new TextRun({
                text: "The effective date of this delegation is March 24, 2025, and shall run until the end of Gwendolyn Appel’s employment. This DOA supersedes any DOA previously issued by Counterpart.",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // 8. Signature Section (Using a borderless table for layout)
    new Table({
        columnWidths: [4680, 4680],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Header Row for Right Side
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Acknowledged and agreed:", font: "Arial", size: 22, color: "000000" })],
                                spacing: { after: 200 }
                            }),
                        ],
                    }),
                ],
            }),
            // Signature Block Row
            new TableRow({
                children: [
                    // Left Signature Block
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Signed by:", font: "Arial", size: 16, color: "000000", bold: true })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "[Signature]", font: "Arial", size: 24, color: "000000", italics: true })],
                                spacing: { before: 100, after: 100 }
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Ann Hudock, DPhil, President and Chief", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Executive Officer", font: "Arial", size: 22, color: "000000" })],
                                spacing: { after: 200 }
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Date: 3/22/2025 | 11:50 EDT", font: "Arial", size: 22, color: "000000" })],
                                border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, // Line under date
                                spacing: { after: 100 }
                            }),
                        ],
                    }),
                    // Right Signature Block
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Signed by:", font: "Arial", size: 16, color: "000000", bold: true })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "[Signature]", font: "Arial", size: 24, color: "000000", italics: true })],
                                spacing: { before: 100, after: 100 }
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Gwendolyn Appel", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Chief Operating Officer", font: "Arial", size: 22, color: "000000" })],
                                spacing: { after: 200 }
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Date: 3/22/2025 | 12:05 EDT", font: "Arial", size: 22, color: "000000" })],
                                border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, // Line under date
                                spacing: { after: 100 }
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),
];
```