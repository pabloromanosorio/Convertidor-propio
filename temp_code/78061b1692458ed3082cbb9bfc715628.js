```javascript
return [
    // 1. DocuSign ID (Small text at top)
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

    // 2. Header Table (Company Names)
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
            insideHorizontal: { style: BorderStyle.NONE },
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
                                        underline: { type: UnderlineType.SINGLE },
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                                        underline: { type: UnderlineType.SINGLE },
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 200 } }), // Spacer

    // 3. Main Title
    new Paragraph({
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                font: "Arial",
                size: 24, // 12pt
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 4. Section I Title
    new Paragraph({
        indent: { left: 360 },
        children: [
            new TextRun({
                text: "I.  Cupping System Rated 350 S.P.M. and typical operating speed of 285-300 S.P.M pending Die progression",
                font: "Arial",
                size: 24, // 12pt
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 300 },
    }),

    // 5. Item I Subheader
    new Paragraph({
        children: [
            new TextRun({
                text: "ITEM I: CUPPING SYSTEM EQUIPMENT DESCRIPTION",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE },
                allCaps: true,
            }),
        ],
        spacing: { after: 200 },
    }),

    // 6. List Items (A - R)
    // Using hanging indent to simulate list structure visually
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "A. One (1) Perfecto swing away, high-speed servo feed assembly", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "B. One (1) Feed mounted Apex Unist Lubricator", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "C. One (1) new DACH 165 Minster high-speed, double-action, Dynamically Balanced Hydro Statically Guided Cupping Press with hydraulic brake/clutch assembly.", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "D. One (1) floor Mounted Hydraulic Press lubrication and clutch system", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "E. One (1) set of four (4) press vibro pads", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    // Highlighted Item F
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "F. ", font: "Arial", size: 22, color: "000000" }),
            new TextRun({ text: "Stainless Steel air conveyor blower assembly", font: "Arial", size: 22, color: "000000", highlight: "yellow" })
        ],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "G. One (1) electrical control package. Complete electronic control package with Allen Bradley Control Logix. The control console and motor starter cabinet are included with this package.", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    // Highlighted Item H
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "H. ", font: "Arial", size: 22, color: "000000", highlight: "yellow" }),
            new TextRun({ text: "Strong Arm Electrical Control Console System", font: "Arial", size: 22, color: "000000", highlight: "yellow" })
        ],
        spacing: { after: 120 },
    }),
    // Highlighted Item I
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "I.  ", font: "Arial", size: 22, color: "000000", highlight: "yellow" }),
            new TextRun({ text: "Rittal or Hoffman Equivalent MCC enclosure with AC unit", font: "Arial", size: 22, color: "000000", highlight: "yellow" })
        ],
        spacing: { after: 120 },
    }),
    // Highlighted Item J
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [
            new TextRun({ text: "J.  ", font: "Arial", size: 22, color: "000000", highlight: "yellow" }),
            new TextRun({ text: "Power Monitor System", font: "Arial", size: 22, color: "000000", highlight: "yellow" })
        ],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "K. One (1) lot guards for the press front, back and sides. Electrical interlock is provided to prevent the operation of press when protection devices are not in place.", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "L. One (1) lot press wiring. This item covers the labor and material for wiring base press junction boxes as received from the press manufacturer in order to provide the operational functions. Includes remote operation functions, top stop and E-stop push buttons on both the front and back of press.", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "M. One (1) lot press pneumatic plumbing. Labor and material required to completely plumb the base press in order to provide the necessary pneumatic functions required for the die design.", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "N. One (1) sets of die roll in rails", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "O. One (1) swing-away scrap hood for die", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "P. One (1) lot rigging, assembly and labor to include set up of system at our Canton site and operate at commercial speeds for customer acceptance.", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "Q. One (1) lot system documentation to include, buy off acceptance settings, equipment and die manuals, assembly drawings and bills of materials.", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 120 },
    }),
    new Paragraph({
        indent: { left: 720, hanging: 360 },
        children: [new TextRun({ text: "R. One (1) Magnetic Quad Clamping for inner slide with controls and safeties for quick die removal.", font: "Arial", size: 22, color: "000000" })],
        spacing: { after: 300 },
    }),

    // 7. Signature Placeholder
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder: DS Signature Box]",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true,
            }),
        ],
        spacing: { after: 100 },
    }),

    // 8. Footer Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12 }, // Thicker top border
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
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        verticalAlign: "center",
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
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        verticalAlign: "center",
                    }),
                ],
            }),
        ],
    }),
];
```