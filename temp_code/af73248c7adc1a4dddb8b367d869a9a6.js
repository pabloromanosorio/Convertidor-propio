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
        spacing: { after: 200 },
    }),

    // 2. Header Company Names (Table for alignment)
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
                    }),
                ],
            }),
        ],
    }),

    new Paragraph({ text: "", spacing: { after: 200 } }), // Spacer

    // 3. Main Title
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "ENCLOSURE NO. 2 TO CONTRACT NO. 25-149",
                font: "Arial",
                size: 24, // 12pt
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 4. Section 1
    new Paragraph({
        children: [
            new TextRun({
                text: "1.\tThe Seller shall provide to the Buyer the following documentation for the Equipment:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720, hanging: 360 }, // Hanging indent to simulate list
        spacing: { after: 120 },
    }),

    // 5. Section 1.1
    new Paragraph({
        children: [
            new TextRun({
                text: "1.1.\tThe General Arrangement Drawings shall show general arrangements of the equipment, and piping, wiring and method of assembly. These drawings will be returned to the Seller marked „Accepted” or „Revision Required”. In case of revision of the drawings by the Buyer is required, the Seller shall agree the drawings with the Buyer and obtain its acceptance. Acceptance of the drawings will, in no way, relieve the Seller from the responsibility of supplying properly designed Equipment in compliance with the specification indicated in the Contract and Enclosures thereto on the delivery date indicated in the Contract. In the event of acceptance the drawing by the Buyer, no changes shall be made to the general arrangement of the Equipment covered by the Contract without written notification to the Buyer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080, hanging: 500 },
        spacing: { after: 120 },
    }),

    // 6. Section 1.2
    new Paragraph({
        children: [
            new TextRun({
                text: "1.2.\tAfter acceptance by the Buyer the Seller shall provide to the Buyer two (2) sets of the Documentation defined in point 1.1.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080, hanging: 500 },
        spacing: { after: 120 },
    }),

    // 7. Section 1.3
    new Paragraph({
        children: [
            new TextRun({
                text: "1.3.\tValidated Drawings: Upon receipt of General Arrangement marked „Accepted” by the Buyer, the Seller shall submit two (2) sets of validated electrical and mechanical drawings to the Buyer. The following are to be received by the Buyer no later than 12 weeks after signature of this Contract.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080, hanging: 500 },
        spacing: { after: 120 },
    }),

    // 8. Bullets under 1.3
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
        bullet: { level: 1 }, // Using docx bullet feature
        spacing: { after: 50 },
    })),

    // 9. Text after bullets
    new Paragraph({
        children: [
            new TextRun({
                text: "If there are revisions requested by the Buyer of validated drawings, the Seller shall supply updated drawing within 4 weeks from „Revision Requested”.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1080 },
        spacing: { after: 200 },
    }),

    // 10. Section 1.4
    new Paragraph({
        children: [
            new TextRun({
                text: "1.4.\tFinal As Built Drawings:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720, hanging: 360 },
        spacing: { after: 120 },
    }),

    // 11. Section 1.4.1
    new Paragraph({
        children: [
            new TextRun({
                text: "1.4.1.\tUpon delivery of equipment as agreed upon in the Contract, the Seller shall supply the Buyer with one (1) set of all electrical and mechanical drawings and the Equipment PLC program to represent the Equipment „as built”, four weeks after Equipment ship date.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 1440, hanging: 600 },
        spacing: { after: 200 },
    }),

    // 12. Section 1.5
    new Paragraph({
        children: [
            new TextRun({
                text: "1.5.\tOperation and Maintenance Manual Requirements:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: { left: 720, hanging: 360 },
        spacing: { after: 120 },
    }),

    // 13. Text under 1.5
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
        spacing: { after: 120 },
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
        spacing: { after: 120 },
    }),

    // 14. Bullet under 1.5
    new Paragraph({
        children: [
            new TextRun({
                text: "Description: ",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: "A detailed description of the Equipment function and sequence of operation of Equipment.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        bullet: { level: 1 },
        spacing: { after: 200 },
    }),

    // 15. Signature / Initials Image Placeholder
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Initials Box]",
                font: "Arial",
                size: 18,
                color: "000000",
                italics: true,
            }),
        ],
        spacing: { after: 100 },
    }),

    // 16. Footer
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" }, // Thick top line
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
                                        size: 20, // 10pt
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
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 1",
                                        font: "Arial",
                                        size: 20, // 10pt
                                        bold: true,
                                        color: "000000",
                                    }),
                                ],
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