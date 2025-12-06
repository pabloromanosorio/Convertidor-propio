return [
    // 1. Top ID (Small text)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 2. Company Header (Left and Right aligned via Tabs)
    new Paragraph({
        children: [
            new TextRun({
                text: "STOLLE MACHINERY COMPANY LLC",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
            new TextRun({
                text: "\t", // Tab to push next text to right
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "CANPACK COLOMBIA S.A.S.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
        tabStops: [
            {
                type: TabStopType.RIGHT,
                position: 9500, // Approximate right margin
            },
        ],
        spacing: { after: 400 },
    }),

    // 3. Main Title
    new Paragraph({
        children: [
            new TextRun({
                text: "STANDARD FEATURES",
                font: "Arial",
                size: 32, // 16pt
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // 4. Main Data Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            // Row 1: Header
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "STANDARD MECHANICAL FEATURES:", bold: true, font: "Arial", size: 22, color: "000000" })] })],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1. Can size operating speed", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2,200CPM 211X355ml", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2. Mandrels", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "36", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3. Mandrel material", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Light-weight steel self-aligning", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4. Mandrel trip", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Single mandrel (rotary trip)", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "5. Trip arm pivot", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Needle bearing with lube", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "6. Inkers", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "8 interchangeable with mechanical drive.", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 8
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "7. Inker cooling", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Inkers equipped to accept optional chillers", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "8. Oil cooling", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Ink station main frame & critical gearboxes", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 10
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "9. Infeed", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Air assist (5 HP blower) adjustable", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 11
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "10. Can stop", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Pneumatic", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 12
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "11. Plate cylinder", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Light weight magnetic", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 13
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12. Running registration", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 14
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "13. Blanket wheel", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12 segments", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 15
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "14. Overvarnish unit", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Reverse type 10 HP AC Vector Duty", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 16
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "15. Overvarnish pre-spin", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Flat Belt", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 17
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "16. Overvarnish day tank", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "8 gallon with pump", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 18
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "17. Transfer", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "36 suction heads", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 19
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "18. Oven drive clutch", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 20
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "19. Guards", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Interlocked", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 21
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "20.", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [] }),
                ],
            }),
            // Row 22: Electrical Header
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "STANDARD ELECTRICAL FEATURES:", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [] }),
                ],
            }),
            // Row 23
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1. Main Motor", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "100 HP AC TEBC – Inverter duty with mechanical drive inkers.", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 24
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2. Drive", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Allen Bradley power flex 755", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 25
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3. Logic", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Control Logix", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 26
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4. Timing Device", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PLS – integrated in PLC", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 27
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "5. Tropicalized motors", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 28
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "6. Interconnecting cables", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Row 29: Electrics Header
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "ELECTRICS:", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [] }),
                ],
            }),
            // Row 30
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "460V/3PH/60Hz or as specified by Buyer", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [] }),
                ],
            }),
        ],
    }),

    // 5. Signature Placeholder (Bottom Right)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { before: 400, after: 200 },
    }),

    // 6. Footer
    new Paragraph({
        border: {
            top: {
                style: BorderStyle.SINGLE,
                size: 6,
                color: "000000",
            },
        },
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                bold: true,
                font: "Arial",
                size: 20, // 10pt
                color: "000000",
            }),
            new TextRun({
                text: "\t",
                font: "Arial",
                size: 20,
                color: "000000",
            }),
            new TextRun({
                text: "PAGE NO. 14",
                bold: true,
                font: "Arial",
                size: 20,
                color: "000000",
            }),
        ],
        tabStops: [
            {
                type: TabStopType.RIGHT,
                position: 9500,
            },
        ],
        spacing: { before: 100 },
    }),
];