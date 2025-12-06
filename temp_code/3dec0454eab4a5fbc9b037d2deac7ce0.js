return [
    // 1. Top Document ID
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

    // 2. Header with Company Names (Using Table for alignment)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
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
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        underline: {
                                            type: UnderlineType.SINGLE,
                                            color: "000000",
                                        },
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        underline: {
                                            type: UnderlineType.SINGLE,
                                            color: "000000",
                                        },
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { before: 200, after: 200 } }),

    // 3. Bullet List Items
    new Paragraph({
        children: [
            new TextRun({
                text: "Adjustments: ",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: "A complete description of each adjustment, including the timing of each function, the proper setting for all utilities, flow rates, proper tooling settings and electrical timing diagrams.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: {
            level: 0,
        },
    }),

    new Paragraph({
        children: [
            new TextRun({
                text: "Troubleshooting: ",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: " A complete listing of operational problems, their cause and the remedy, as well as the resulting effect on the finished product.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: {
            level: 0,
        },
    }),

    new Paragraph({
        children: [
            new TextRun({
                text: "Operation and Maintenance: ",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: "A complete comprehensive set of start up, operating and shut down instructions shall be included. This section shall also cover required schedules of routine maintenance lubrication. A schematic of the lubrication system shall be provided indicating all points of lubrication. A recommended type and supplier of lubricating materials shall be included. Recommendations for preventative maintenance frequency and special tasks shall also be included.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: {
            level: 0,
        },
    }),

    // 4. Clause 1.6 (Using indentation to align with bullets, as it is a specific clause number)
    new Paragraph({
        children: [
            new TextRun({
                text: "1.6.\t",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "A list of recommended spare parts for one (1) year of operation shall be provided to the Buyer ten weeks (10) from the receipt by the Seller from the Buyer, the Buyer’s product drawing (can/cups) Drawings with specification.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: {
            left: 720, // Indent to match bullet text alignment
            hanging: 360,
        },
        spacing: { before: 200 },
    }),

    // 5. Spacer to push footer to bottom (simulated)
    new Paragraph({
        text: "",
        spacing: { before: 5000 },
    }),

    // 6. Signature Image Placeholder
    new Paragraph({
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { after: 100 },
    }),

    // 7. Footer (Line and Text)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "ENCLOSURE NO. 2 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 100,
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 2",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 100,
                        },
                    }),
                ],
            }),
        ],
    }),
];