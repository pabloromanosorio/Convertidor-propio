return [
    // 1. Top Document ID
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // Smaller size for ID
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 2. Header with Company Names (Using Table for alignment)
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
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
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
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
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 3. Hyphenated List (Simulated with text indentation as these are not standard bullets)
    ...[
        "One (1) piece outer guide pin assemblies with automatic lubrication features",
        "One (1) piece inner guide pin assemblies with automatic lubrication features",
        "Nylon entrance rails with stand-alone stock guides",
        "Complete set of carbide wear tools including cut edges, blank and draw pad.",
        "Hydraulic assist package on inner punch for installation of die",
        "Inner draw punch adapters",
        "Registered, fixed blank and draw die retainers aligned to outer die shoe concentric to within .0005”",
        "Die set designed and machined for .020” web F/B – L/R",
        "Cup markers for marking the sheet prior to the blank and draw operation",
        "Die set machined for non-round cut edges and blank and draw dies",
        "Necessary mounting bolts and fasteners",
        "Indicating fixture"
    ].map(text => new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "- " + text, font: "Arial", size: 22, color: "000000" })
        ]
    })),

    new Paragraph({ text: "" }), // Spacer

    // 4. Item Z
    new Paragraph({
        children: [
            new TextRun({
                text: "Z. One (1) lot Thirteen (13) out air cup conveyor package with bottom mount sensors",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 5. Item VI Heading (Highlighted)
    new Paragraph({
        children: [
            new TextRun({
                text: "ITEM VI: COIL HANDLING EQUIPMENT (Set up Initial Configuration)",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
                underline: { type: UnderlineType.SINGLE, color: "000000" },
                highlight: "yellow",
            }),
        ],
    }),

    // 6. Subheading A1
    new Paragraph({
        children: [
            new TextRun({
                text: "A1. Coil Handling Equipment",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 7. Bullet List
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Perfecto Model UTH308074 Traversing Upender", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Perfecto Model LC30NR Coil Car", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "(1) Perfecto Model RD308074M Double End Uncoiler", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "(1) Perfecto Model MS74 Material Stand", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Interconnect Cables", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({
                text: "weight Scale",
                font: "Arial",
                size: 22,
                color: "000000",
                highlight: "yellow",
            }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "CE Certification", font: "Arial", size: 22, color: "000000" })],
    }),

    // 8. Note
    new Paragraph({
        children: [
            new TextRun({ text: "Note: ", font: "Arial", size: 22, color: "000000", bold: true }),
            new TextRun({ text: "Weight Scale does not go trough PLC. It has its own readout and will show up on HMI", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 9. C1 Heading (Highlighted)
    new Paragraph({
        children: [
            new TextRun({
                text: "C1. Die Set Safety Turnover Unit",
                font: "Arial",
                size: 22,
                color: "000000",
                highlight: "yellow",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // 10. Description Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "The fixture is designed to turn over all 3 plates of the die set individually. For loading the plates into the DIE plate cradle adaptor bars are used. The frame is lifted and placed over the die plate with a forklift truck, to allow accessibility if required the lifting pockets have been made detachable.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer
    new Paragraph({ text: "" }), // Spacer
    new Paragraph({ text: "" }), // Spacer

    // 11. Signature Image Placeholder (Right aligned)
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
    }),

    // 12. Footer Table
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // Top line visible
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
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
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        bold: true,
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
                                        text: "PAGE NO. 5",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        bold: true,
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