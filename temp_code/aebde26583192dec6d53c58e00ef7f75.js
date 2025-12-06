```javascript
return [
    // 1. DocuSign Header
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

    // 2. Company Header (Table for Left/Right alignment)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
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
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
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
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
                    }),
                ],
            }),
        ],
    }),

    // 3. Main Title
    new Paragraph({
        spacing: { before: 400, after: 400 },
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                font: "Arial",
                size: 24, // 12pt
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // 4. Section I
    new Paragraph({
        indent: { left: 720, hanging: 360 }, // Hanging indent for "I."
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "I.\tCupping System Rated 350 S.P.M. and typical operating speed of 285-300 S.P.M pending Die progression",
                font: "Arial",
                size: 24,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // 5. Item I Subheader
    new Paragraph({
        indent: { left: 720 },
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "ITEM I: CUPPING SYSTEM EQUIPMENT DESCRIPTION",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
    }),

    // 6. List Items (A - R)
    // Note: Using hanging indent + tabs to simulate "A.", "B." etc. as specific numbering config is not available in snippet scope.
    
    // A
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "A.\tOne (1) Perfecto swing away, high-speed servo feed assembly", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // B
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "B.\tOne (1) Feed mounted Apex Unist Lubricator", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // C
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "C.\tOne (1) new DACH 165 Minster high-speed, double-action, Dynamically Balanced Hydro Statically Guided Cupping Press with hydraulic brake/clutch assembly.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // D
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "D.\tOne (1) floor Mounted Hydraulic Press lubrication and clutch system", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // E
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "E.\tOne (1) set of four (4) press vibro pads", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // F (Highlighted)
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "F.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "Stainless Steel air conveyor blower assembly",
                font: "Arial",
                size: 22,
                color: "000000",
                highlight: "yellow",
            }),
        ],
    }),
    // G
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "G.\tOne (1) electrical control package. Complete electronic control package with Allen Bradley Control Logix. The control console and motor starter cabinet are included with this package.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // H (Highlighted)
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "H.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "Strong Arm Electrical Control Console System",
                font: "Arial",
                size: 22,
                color: "000000",
                highlight: "yellow",
            }),
        ],
    }),
    // I (Highlighted)
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "I.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "Rittal or Hoffman Equivalent MCC enclosure with AC unit",
                font: "Arial",
                size: 22,
                color: "000000",
                highlight: "yellow",
            }),
        ],
    }),
    // J (Highlighted)
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "J.\t", font: "Arial", size: 22, color: "000000" }),
            new TextRun({
                text: "Power Monitor System",
                font: "Arial",
                size: 22,
                color: "000000",
                highlight: "yellow",
            }),
        ],
    }),
    // K
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "K.\tOne (1) lot guards for the press front, back and sides. Electrical interlock is provided to prevent the operation of press when protection devices are not in place.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // L
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "L.\tOne (1) lot press wiring. This item covers the labor and material for wiring base press junction boxes as received from the press manufacturer in order to provide the operational functions. Includes remote operation functions, top stop and E-stop push buttons on both the front and back of press.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // M
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "M.\tOne (1) lot press pneumatic plumbing. Labor and material required to completely plumb the base press in order to provide the necessary pneumatic functions required for the die design.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // N
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "N.\tOne (1) sets of die roll in rails", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // O
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "O.\tOne (1) swing-away scrap hood for die", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // P
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "P.\tOne (1) lot rigging, assembly and labor to include set up of system at our Canton site and operate at commercial speeds for customer acceptance.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // Q
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "Q.\tOne (1) lot system documentation to include, buy off acceptance settings, equipment and die manuals, assembly drawings and bills of materials.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),
    // R
    new Paragraph({
        indent: { left: 1080, hanging: 360 },
        spacing: { after: 120 },
        children: [
            new TextRun({ text: "R.\tOne (1) Magnetic Quad Clamping for inner slide with controls and safeties for quick die removal.", font: "Arial", size: 22, color: "000000" }),
        ],
    }),

    // 7. Signature Placeholder
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { before: 400, after: 100 },
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 8. Footer Line
    new Paragraph({
        border: {
            bottom: {
                color: "000000",
                space: 1,
                style: BorderStyle.SINGLE,
                size: 6,
            },
        },
        children: [], // Empty paragraph for the line
    }),

    // 9. Footer Text
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 1",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                        },
                    }),
                ],
            }),
        ],
    }),
];
```