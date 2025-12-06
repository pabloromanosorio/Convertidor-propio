```javascript
return [
    // 1. DocuSign Envelope ID (Top Left, Small)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                size: 16,
                color: "000000",
            }),
        ],
    }),

    // 2. Header (Table with two columns, underlined text)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
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
                                        bold: true,
                                        underline: {
                                            type: UnderlineType.SINGLE,
                                            color: "000000",
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
                                        bold: true,
                                        underline: {
                                            type: UnderlineType.SINGLE,
                                            color: "000000",
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

    // Spacer
    new Paragraph({
        children: [],
    }),

    // 3. Clause 1 (Subject)
    new Paragraph({
        numbering: {
            reference: "contract-numbering", // Assumed existing reference
            level: 0,
        },
        children: [
            new TextRun({
                text: "SUBJECT OF THE CONTRACT",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
    }),

    // 4. Clause 1.1
    new Paragraph({
        numbering: {
            reference: "contract-numbering",
            level: 1,
        },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "The Seller shall sell to the Buyer the following Equipment (hereinafter collectively referred to as “",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Equipment",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: "”), as specified in detail in Enclosure No. 1 hereto, for one of the Buyer’s aluminium beverage can manufacturing lines located in South America:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 5. Clause 1.1.1
    new Paragraph({
        numbering: {
            reference: "contract-numbering",
            level: 2,
        },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "One (1) Dynaform 165 Cupping System with One (1) Sixteen (16) outs Die Set for 26.9cl Cansize, One (1) Fifteen (15) outs Die Set for 33cl Cansize, One (1) Fourteen (14) outs Die Set for 35.5cl Cansize, Thirteen (13) outs Dei Set for 47.3cl Cansize and complete coil handling system with Die set safety turnover unit and Critical Spares;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 6. Clause 1.1.2
    new Paragraph({
        numbering: {
            reference: "contract-numbering",
            level: 2,
        },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Two (2) 36MRT Concord Decorators with 8 ink stations to run the following can sizes: 47,3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26,9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 7. Clause 1.1.3
    new Paragraph({
        numbering: {
            reference: "contract-numbering",
            level: 2,
        },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Ten (10) individual DG250 Tall Cabinet Spray with Controls for fourteen machines to run the following can sizes: 47,3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26,9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 8. Clause 1.1.4
    new Paragraph({
        numbering: {
            reference: "contract-numbering",
            level: 2,
        },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Nine (9) B626 Bodymakers to run the following can sizes: 47,3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26,9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 9. Clause 1.2
    new Paragraph({
        numbering: {
            reference: "contract-numbering",
            level: 1,
        },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "If the Equipment contains any program necessary to operate it, or if any such program is not included but needed, the Seller shall deliver such program together with the Equipment and hereby grants to the Buyer a world-wide, irrevocable and non-exclusive right in perpetuity to use such program in order to operate the Equipment, to modify and/or substitute it or parts of it within scope necessary to adjust it to the modification of the technological line (however, the safety portion of the software shall not be released to be modified), a component of which the Equipment shall constitute, and to dispose of rights to the program within the scope of any disposals of the Equipment (i.e. sale, rent, lease, donation). The program and the rights over such program granted as described hereinabove are included into the Total Price. Whenever the term Equipment is used hereunder it also means the program necessary to operate the Equipment, including but not limited to representations and warranties hereunder as regards the Equipment.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // 10. Clause 1.3
    new Paragraph({
        numbering: {
            reference: "contract-numbering",
            level: 1,
        },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "The Equipment as per par. 1.1 shall constitute components of a D & I beer and beverage 47,3cl x",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Spacer
    new Paragraph({ children: [] }),

    // Signature Placeholder (Right aligned, before footer)
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

    // 11. Footer (Table with top border)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: {
                style: BorderStyle.SINGLE,
                size: 6,
                color: "000000",
            },
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
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "CONTRACT NO. 25-149",
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
                                        text: "PAGE NO. 2",
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