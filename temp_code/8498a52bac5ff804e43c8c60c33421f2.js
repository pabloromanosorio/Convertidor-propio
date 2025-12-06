```javascript
return [
    // 1. Top DocuSign ID
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16, // Smaller font for ID
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 2. Header (Company Names) - Using Table for alignment
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                                        },
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
                                        underline: {
                                            type: UnderlineType.SINGLE,
                                        },
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

    // 3. Main Image Placeholder
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
        spacing: { before: 200, after: 200 },
    }),

    // 4. Title
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "DG 250 Inside Spray Machines",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
        spacing: { after: 200 },
    }),

    // 5. Bulleted List
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "DG 250 Inside Spray Machines - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Ten single machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Starwheels- two per machine- ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "UHMW solid starwheel", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Guns- two per machine - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Nordson MEG II", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Lacquer Pressure Control - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Nordson Spray Pressure Control w/ Dual Filters for Ten machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Rittal 5 Bay Control Pnl with A/C - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "iTrax - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Nordson Itrax SC and SM modules for Fourteen (14) machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "iTrax Discharge Can Stops - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included for Ten (10) machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "iTrax PRx (Servo Pressure Regs & Transducers) - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included for Ten (10) Machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Control Panel - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Single Panel for Fourteen (14) machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Cards – ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Two (2) Ethernet Cards", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Pumps – ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Two (2) Dual Nordson EP pump w Stands & VFDs", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Nordson Inkdot on machines – ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "not included", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Nordson Inkdot Controls – ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "not included", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Spray Material Day Tank - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Customer Supplied", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Exhaust System Transition - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included for Ten (10) machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Piping, wires, cables and wire ways - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Customer Supplied", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Spinner Motor VFD’s - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included for Fourteen (14) machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Spray Gun Nozzles - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included (Customer to supply part numbers)", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Heater/TCU - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Dual Zone TCU Included", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Utility Monitoring (Power, Air & Vac) - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "204 Change Parts (26.9cl) - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included for Ten machines", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Set-Up Gauges - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included for 204 and 211 Can Diameters", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "65 KAIC Main Disconnect - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Can count logic - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [
            new TextRun({ text: "Tropicalized Motors - ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Included", font: "Arial", size: 22, color: "000000", italics: true }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 6. Footer
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // Line above footer
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
                                        text: "PAGE NO. 16",
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
```