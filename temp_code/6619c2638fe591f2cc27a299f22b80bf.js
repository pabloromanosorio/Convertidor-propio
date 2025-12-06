```javascript
return [
    // DocuSign Header
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
    }),

    // Header Table (Companies)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
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
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // Title
    new Paragraph({
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 2 TO CONTRACT NO. 25-149",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
    }),

    // 1.
    new Paragraph({
        children: [
            new TextRun({
                text: "The Seller shall provide to the Buyer the following documentation for the Equipment:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        numbering: { reference: "contract-list", level: 0 },
        alignment: AlignmentType.JUSTIFIED,
    }),

    // 1.1.
    new Paragraph({
        children: [
            new TextRun({
                text: "The General Arrangement Drawings shall show general arrangements of the equipment, and piping, wiring and method of assembly. These drawings will be returned to the Seller marked „Accepted” or „Revision Required”. In case of revision of the drawings by the Buyer is required, the Seller shall agree the drawings with the Buyer and obtain its acceptance. Acceptance of the drawings will, in no way, relieve the Seller from the responsibility of supplying properly designed Equipment in compliance with the specification indicated in the Contract and Enclosures thereto on the delivery date indicated in the Contract. In the event of acceptance the drawing by the Buyer, no changes shall be made to the general arrangement of the Equipment covered by the Contract without written notification to the Buyer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        numbering: { reference: "contract-list", level: 1 },
        alignment: AlignmentType.JUSTIFIED,
    }),

    // 1.2.
    new Paragraph({
        children: [
            new TextRun({
                text: "After acceptance by the Buyer the Seller shall provide to the Buyer two (2) sets of the Documentation defined in point 1.1.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        numbering: { reference: "contract-list", level: 1 },
        alignment: AlignmentType.JUSTIFIED,
    }),

    // 1.3.
    new Paragraph({
        children: [
            new TextRun({
                text: "Validated Drawings: Upon receipt of General Arrangement marked „Accepted” by the Buyer, the Seller shall submit two (2) sets of validated electrical and mechanical drawings to the Buyer. The following are to be received by the Buyer no later than 12 weeks after signature of this Contract.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        numbering: { reference: "contract-list", level: 1 },
        alignment: AlignmentType.JUSTIFIED,
    }),

    // Bullets under 1.3
    ...[
        "Panel Wiring Schematics",
        "Equipment Wiring Schematics",
        "Control Panels, Dimensions and Locations",
        "Power Panels, Dimensions and Locations",
        "Junction Boxes, Dimensions and Locations",
        "Miscellaneous Electrical Panels, Dimensions and Locations",
        "All Additional Miscellaneous Electrical Drawings Not Previously Addressed",
        "Bolt hole Patterns, Size and Dimensions Layout and Gross Weight of Equipment Within Ten (10) Percent",
        "Can Conveyance Interface Locations (Outfeed and Infeed), as Applicable",
        "Utility Connections (Pipe Size and Well Defined Locations), For Vacuum and compressed Air, Water, Hot Water, Caustic/Chemical, Lubes, Electrical, etc., as required.",
        "Installation Drawing and Equipment Assembly Technical information"
    ].map(text => new Paragraph({
        children: [new TextRun({ text: text, font: "Arial", size: 22, color: "000000" })],
        bullet: { level: 0 },
        indent: { left: 1440 }, // Visual indentation to match nested look
    })),

    // Text after bullets
    new Paragraph({
        children: [
            new TextRun({
                text: "If there are revisions requested by the Buyer of validated drawings, the Seller shall supply updated drawing within 4 weeks from „Revision Requested”.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720 }, // Align with 1.3 text
        alignment: AlignmentType.JUSTIFIED,
    }),

    // 1.4.
    new Paragraph({
        children: [
            new TextRun({
                text: "Final As Built Drawings:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        numbering: { reference: "contract-list", level: 1 },
        spacing: { before: 200 },
    }),

    // 1.4.1.
    new Paragraph({
        children: [
            new TextRun({
                text: "Upon delivery of equipment as agreed upon in the Contract, the Seller shall supply the Buyer with one (1) set of all electrical and mechanical drawings and the Equipment PLC program to represent the Equipment „as built”, four weeks after Equipment ship date.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        numbering: { reference: "contract-list", level: 2 },
        alignment: AlignmentType.JUSTIFIED,
    }),

    // 1.5.
    new Paragraph({
        children: [
            new TextRun({
                text: "Operation and Maintenance Manual Requirements:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        numbering: { reference: "contract-list", level: 1 },
        spacing: { before: 200 },
    }),

    // Text under 1.5
    new Paragraph({
        children: [
            new TextRun({
                text: "The Seller shall provide to the Buyer three (3) sets of operation and maintenance manuals for each type of Equipment ordered in Spanish and English Language, to be received no later than six (6) weeks after buy – off of the Equipment:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720 },
        alignment: AlignmentType.JUSTIFIED,
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "The above shall include, but not be limited to, the following:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720 },
    }),

    // Bullet under 1.5
    new Paragraph({
        children: [
            new TextRun({
                text: "Description: A detailed description of the Equipment function and sequence of operation of Equipment.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 0 },
        indent: { left: 1440 },
    }),

    new Paragraph({ text: "" }), // Spacer

    // Signature Image Placeholder
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
    }),

    // Footer Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
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
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 1",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
    }),
];
```