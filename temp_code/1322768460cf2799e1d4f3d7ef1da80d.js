```javascript
return [
    // 1. DocuSign ID (Top Left, Small)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // 2. Header Table (Stolle / Canpack)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE, size: 0, color: "auto" },
            bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
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
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 400 } }), // Spacer

    // 3. Section 9 Title
    new Paragraph({
        children: [
            new TextRun({
                text: "9.  FORCE MAJEURE",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
    }),

    // 4. Paragraph 9.1 (Using Table for layout to simulate hanging indent of specific legal numbering)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "9.1.", font: "Arial", size: 22, color: "000000" })],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Parties to the Contract shall be released from the responsibility for failure to perform or non-perfect performance in case of force majeure. The following events, beyond the Parties control are to be considered as Force Majeure: a natural phenomenon that is not reasonably foreseeable, embargo, war, requisition, pandemic, acts of war, embargoes or governmental restrictions; provided the Parties have exercised reasonable diligence to avoid such events.",
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
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 240 } }), // Spacer

    // 5. Paragraph 9.2
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "9.2.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Force Majeure event shall exclude the liability of the Party concerned to such extent only that is excusable by the nature of the Force Majeure event and the duration thereof. Any penalties or payment constraints that would be imposed shall be delayed or extended by the amount of time the Force Majeure circumstances are in effect and reasonably mitigate possible damages. Additionally, the affected Party shall provide the other Party with a proposed schedule of actions to be undertaken by this Party in order to mitigate the effects the Force Majeure event on the performance of this Contract for the consideration of the other Party.",
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
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 240 } }), // Spacer

    // 6. Paragraph 9.3
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "9.3.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "The Parties shall show utmost care if the Force Majeure event occurs to minimize impact of the Force Majeure event on execution of the present Contract.",
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
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 240 } }), // Spacer

    // 7. Paragraph 9.4
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "9.4.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "If the event of Force Majeure occurs, the First Party (the party incapable of perfect performance) shall immediately notify the Second Party in writing, stating the nature of the Force Majeure event, the date of occurrence and the estimated length of the delay caused by the event, the reasons for the event of Force Majeure preventing the First Party from, or delaying that Party in performing its obligations under this Contract.",
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
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 240 } }), // Spacer

    // 8. Paragraph 9.5
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "9.5.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "Upon completion of the event of Force Majeure the Party affected must as soon as reasonably practicable recommence the performance of its obligations under this Contract. Nevertheless, if the Force Majeure event prevents perfect performance of the First Party longer than three months, the Second Party shall have the right to rescind the Contract. In such case the Parties shall return each other everything what has been rendered hereunder.",
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
        ],
    }),
    new Paragraph({ text: "", spacing: { after: 400 } }), // Spacer

    // 9. Section 10 Title
    new Paragraph({
        children: [
            new TextRun({
                text: "10. THE LAW OF THE CONTRACT",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
    }),

    // 10. Paragraph 10.1
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "10.1.", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.JUSTIFIED,
                                children: [
                                    new TextRun({
                                        text: "All matters not regulated in this Contract shall be governed by the provisions of United Nations Convention on Contracts for the International Sale of Goods and Austrian Substantive Law.",
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
        ],
    }),

    // 11. Image Placeholder (Initials)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                color: "000000",
                font: "Arial",
                size: 22,
                italics: true
            })
        ],
        spacing: { before: 200, after: 100 }
    }),

    // 12. Footer Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE }, // The image has a line, handled by cell borders below
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000" } },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CONTRACT NO. 25-149",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000" } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 16",
                                        bold: true,
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
        ],
    }),
];
```