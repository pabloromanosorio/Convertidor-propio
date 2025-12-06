```javascript
return [
    // 1. Top DocuSign ID (Small text)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // 8pt
                color: "000000",
            }),
        ],
    }),

    // 2. Header with Company Names (2-column borderless table)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
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
                                alignment: AlignmentType.LEFT,
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

    // 3. Image Placeholder
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. Document Title
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "DG 250 Inside Spray Machines",
                font: "Arial",
                size: 24, // Slightly larger
                bold: true,
                underline: { type: UnderlineType.SINGLE, color: "000000" },
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 5. Bulleted List
    // Helper function to create list items to ensure consistent formatting
    ...[
        ["DG 250 Inside Spray Machines - ", "Ten single machines"],
        ["Starwheels- two per machine- ", "UHMW solid starwheel"],
        ["Guns- two per machine - ", "Nordson MEG II"],
        ["Lacquer Pressure Control - ", "Nordson Spray Pressure Control w/ Dual Filters for Ten machines"],
        ["Rittal 5 Bay Control Pnl with A/C - ", "Included"],
        ["iTrax - ", "Nordson Itrax SC and SM modules for Fourteen (14) machines"],
        ["iTrax Discharge Can Stops - ", "Included for Ten (10) machines"],
        ["iTrax PRx (Servo Pressure Regs & Transducers) - ", "Included for Ten (10) Machines"],
        ["Control Panel - ", "Single Panel for Fourteen (14) machines"],
        ["Cards – ", "Two (2) Ethernet Cards"],
        ["Pumps – ", "Two (2) Dual Nordson EP pump w Stands & VFDs"],
        ["Nordson Inkdot on machines – ", "not included"],
        ["Nordson Inkdot Controls – ", "not included"],
        ["Spray Material Day Tank - ", "Customer Supplied"],
        ["Exhaust System Transition - ", "Included for Ten (10) machines"],
        ["Piping, wires, cables and wire ways - ", "Customer Supplied"],
        ["Spinner Motor VFD’s - ", "Included for Fourteen (14) machines"],
        ["Spray Gun Nozzles - ", "Included (Customer to supply part numbers)"],
        ["Heater/TCU - ", "Dual Zone TCU Included"],
        ["Utility Monitoring (Power, Air & Vac) - ", "Included"],
        ["204 Change Parts (26.9cl) - ", "Included for Ten machines"],
        ["Set-Up Gauges - ", "Included for 204 and 211 Can Diameters"],
        ["65 KAIC Main Disconnect - ", "Included"],
        ["Can count logic - ", "Included"],
        ["Tropicalized Motors - ", "Included"],
    ].map(([normalText, italicText]) => 
        new Paragraph({
            bullet: { level: 0 },
            children: [
                new TextRun({
                    text: normalText,
                    font: "Arial",
                    size: 22,
                    color: "000000",
                }),
                new TextRun({
                    text: italicText,
                    font: "Arial",
                    size: 22,
                    color: "000000",
                    italics: true,
                }),
            ],
        })
    ),

    new Paragraph({ text: "" }), // Spacer

    // 6. Footer (Table with Top Border to simulate the line)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // The line above footer
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
                        width: { size: 60, type: WidthType.PERCENTAGE },
                        margins: { top: 200 }, // Add some padding from the line
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 40, type: WidthType.PERCENTAGE },
                        margins: { top: 200 },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 16",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
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