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
    }),

    new Paragraph({ text: "" }), // Spacer

    // 2. Header (Stolle / Canpack) - Underlined via Table Borders
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE }, // We apply border to cells for the underline effect
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { bottom: { style: BorderStyle.SINGLE, size: 6 } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        borders: { bottom: { style: BorderStyle.SINGLE, size: 6 } },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
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

    new Paragraph({ text: "" }), // Spacer

    // 3. Intro Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "211/202, 35.5cl x 211/202, 33cl x 211/202, 26,9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202 aluminum can manufacturing system which nominal output shall be 4000 cans per minute (CPM).",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. Main Content Table (Used for hanging indent layout of numbered items)
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
            // Item 1.4
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "1.4", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Equipment shall comply with the Technical Specification agreed between the Seller and the Buyer and contained in Enclosure No. 1 hereto, constituting an integral part hereof.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({ text: "" }), // Spacing between items
                        ],
                    }),
                ],
            }),
            // Item 1.5
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "1.5", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Technical Specification as per par. 1.4 shall be submitted to the Buyer’s engineering company as indicated in par. 16.14 and shall be confirmed by the Buyer’s engineering company. The Seller shall be fully responsible for the execution of this confirmation. In case of any problems from the side of the Buyer’s engineering company, the Seller shall notify the Buyer about it in writing.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({ text: "" }),
                        ],
                    }),
                ],
            }),
            // Item 1.6
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "1.6", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Equipment controls shall be Allen-Bradley Control Logix and/or Compact Logic with Ethernet Interface for Line Control and a second Ethernet Interface for HMI and internal VFD communication. The Seller represents and guarantees that it has a perpetual, worldwide and irrevocable right to use the above Allen-Bradley Control Logix in order to use, operate and sell the Equipment and to grant the Buyer the right to operate, use and transfer the rights to the Equipment as per this Contract.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({ text: "" }),
                        ],
                    }),
                ],
            }),
            // Item 1.7
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "1.7", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Electrical system shall be 440V/3ph/60Hz, 4 wires (L1, L2, L3, GND), 3 pole disconnect.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({ text: "" }),
                        ],
                    }),
                ],
            }),
            // Item 1.8 (Complex with sub-items)
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "1.8", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Equipment shall conform to:",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            // Nested Table for 1.8.1 and 1.8.2 to handle indentation
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
                                                width: { size: 10, type: WidthType.PERCENTAGE },
                                                verticalAlign: VerticalAlign.TOP,
                                                children: [new Paragraph({ children: [new TextRun({ text: "1.8.1", font: "Arial", size: 22, color: "000000" })] })],
                                            }),
                                            new TableCell({
                                                width: { size: 90, type: WidthType.PERCENTAGE },
                                                children: [
                                                    new Paragraph({
                                                        children: [
                                                            new TextRun({
                                                                text: "EU “New Approach” Directives (including, without limitation, 2006/42/EC Machinery Directive and 2014/30/UE Electromagnetic Compatibility Directive), and be CE marked; and",
                                                                font: "Arial",
                                                                size: 22,
                                                                color: "000000",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    new TableRow({
                                        children: [
                                            new TableCell({
                                                width: { size: 10, type: WidthType.PERCENTAGE },
                                                verticalAlign: VerticalAlign.TOP,
                                                children: [new Paragraph({ children: [new TextRun({ text: "1.8.2", font: "Arial", size: 22, color: "000000" })] })],
                                            }),
                                            new TableCell({
                                                width: { size: 90, type: WidthType.PERCENTAGE },
                                                children: [
                                                    new Paragraph({
                                                        children: [
                                                            new TextRun({
                                                                text: "the Regulatory Standards as provided for in Colombian labor legislation, including but not limited to the RETIE (Reglamento Técnico de Instalaciones Eléctricas) standard.",
                                                                font: "Arial",
                                                                size: 22,
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
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The relevant declarations of conformity and/or certificates confirming the Equipment’s conformity with the abovementioned standards and norms shall be provided to the Buyer on or before the delivery date and within the Total Price.",
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                ],
                            }),
                            new Paragraph({ text: "" }),
                        ],
                    }),
                ],
            }),
            // Item 1.9
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        verticalAlign: VerticalAlign.TOP,
                        children: [new Paragraph({ children: [new TextRun({ text: "1.9", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        width: { size: 92, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "The Seller shall provide to the Buyer the following services: supervision service during installation, start-up and commissioning and performing Final Acceptance Test of the Equipment (“Services”). The Services may be performed by the Seller or by Seller’s affiliated company (“Provider”), if so, ordered by the Buyer, but in any such case the Seller remains fully liable for performance of the Services and remains the only entity entitled to receive fee for performance of the Services. The Seller represents and warrants to the Buyer, that any services ordered in relation to this",
                                        font: "Arial",
                                        size: 22,
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

    new Paragraph({ text: "" }), // Spacer

    // 5. Footer (Contract No / Page No) with Top Border
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6 },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
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
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
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
                                        text: "PAGE NO. 3",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
                                    }),
                                    // Image placeholder for the stamp in the corner
                                    new TextRun({
                                        text: "\n[IMAGE placeholder]",
                                        font: "Arial",
                                        size: 16,
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