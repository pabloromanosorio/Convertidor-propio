```javascript
return [
    // 1. DocuSign Header
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

    // 2. Logo / Header Text (Right Aligned)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "COUNTERPART",
                font: "Arial",
                size: 36, // 18pt
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
                size: 28, // 14pt
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
                color: "000000",
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
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // 3. Document Title
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
        spacing: { after: 400 },
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
        spacing: { after: 240 },
    }),

    // 5. Intro Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "On behalf of Counterpart International (Counterpart), I, Ann Hudock, DPhil, President and Chief Executive Officer, delegate Gwendolyn Appel the authority to financially and legally commit Counterpart and incur liabilities on its behalf for the following categories of commitment with the assigned threshold and on the condition that the review and clearance process outlined on the DOA process spreadsheet was followed:",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
    }),

    // 6. Main Table
    new Table({
        columnWidths: [6000, 3360], // Approx 65% / 35% split
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Row 1
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Proposals and Concept Notes with budget amounts", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Concept Notes/Expressions of Interest/Letters of Interest with no budget amounts", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Teaming Agreements and Pre-Teaming Agreements", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "All Procurement of Goods and Services", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "All Grant Agreements (local and INGO)", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "All Commitments, including awards/contracts and modifications", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Non-Monetary Value Agreements, including MOUs", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
            // Row 8
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Representations & Certifications, SF424s and other corporate statements or commitments", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 6000, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Expense Authorizations", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Unlimited threshold", font: "Arial", size: 22, color: "000000" })] })],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
        ],
    }),

    // 7. Scope Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "The scope of this Delegation of Authority is limited Gwendolyn Appel’s, Chief Operating Officer’s responsibilities, Counterpart’s billable and organizational overhead budgets.",
                font: "Arial",
                size: 22, // 11pt
                color: "000000",
            }),
        ],
        spacing: { before: 240, after: 240 },
    }),

    // 8. Effective Date Paragraph
    new Paragraph({
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

    // 9. Signatures Table (Borderless)
    new Table({
        columnWidths: [4680, 4680],
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
        },
        rows: [
            new TableRow({
                children: [
                    // Left Signature Block
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Signed by:", font: "Arial", size: 16, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "[Signature]", font: "Arial", size: 24, color: "000000" })],
                                spacing: { before: 100, after: 100 },
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Ann Hudock, DPhil, President and Chief", font: "Arial", size: 22, color: "000000" })],
                                border: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
                                spacing: { before: 60 },
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Executive Officer", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Date: ", font: "Arial", size: 22, color: "000000" }), new TextRun({ text: "3/22/2025 | 11:50 EDT", font: "Courier New", size: 20, color: "000000" })],
                                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
                                spacing: { before: 240 },
                            }),
                        ],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                    // Right Signature Block
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Acknowledged and agreed:", font: "Arial", size: 22, color: "000000" })],
                                spacing: { after: 120 },
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Signed by:", font: "Arial", size: 16, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "[Signature]", font: "Arial", size: 24, color: "000000" })],
                                spacing: { before: 100, after: 100 },
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Gwendolyn Appel", font: "Arial", size: 22, color: "000000" })],
                                border: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
                                spacing: { before: 60 },
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Chief Operating Officer", font: "Arial", size: 22, color: "000000" })],
                            }),
                            new Paragraph({
                                children: [new TextRun({ text: "Date: ", font: "Arial", size: 22, color: "000000" }), new TextRun({ text: "3/22/2025 | 12:05 EDT", font: "Courier New", size: 20, color: "000000" })],
                                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
                                spacing: { before: 240 },
                            }),
                        ],
                        shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                    }),
                ],
            }),
        ],
    }),
];
```