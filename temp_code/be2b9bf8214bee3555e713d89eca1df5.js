```javascript
return [
    // 1. DocuSign Envelope ID (Top Left, Small)
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
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "STOLLE MACHINERY COMPANY LLC",
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
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
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        bold: true,
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
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

    // Spacer
    new Paragraph({ text: "" }),

    // 3. Section 15 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "15. SANCTIONS CLAUSE",
                bold: true,
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { before: 400, after: 200 },
    }),

    // 4. Section 15.1
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 }, // Hanging indent for "15.1."
        children: [
            new TextRun({
                text: "15.1. The Seller understands that sale, purchase, transfer, exportation or re-exportation, processing or transforming or other actions related to the Equipment, including transfer, exportation or re-exportation of the final product manufactured from the Equipment, may be subject to export control and embargo laws, imposed, administered or enforced from time to time by the United States, the United Nations Security Council, the European Union, the United Kingdom, the country of incorporation of a Seller or Buyer, or the respective governmental institutions of any of the foregoing including, without limitation, HM's Treasury, the Office of Foreign Assets Control of the US Department of the Treasury, the US Department of Commerce, the US Department of State and any other agency of the US government and the respective governmental institutions of the country of incorporation of the Buyer (“Sanctions Authorities”).",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 5. Section 15.2
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "15.2. The Seller will not knowingly import or purchase, directly or indirectly, any Equipment or components of the Equipment from any person (individual or entity) sanctioned by Sanctions Authorities or from any country on which the Sanctions Authorities imposed sanctions or embargo or requires an export license or governmental authorization without first obtaining such a license or authorization. For compliance with this clause, the following websites may assist the Seller in determining whether there exist restrictions:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 6. Subsections 15.2.1 - 15.2.3
    new Paragraph({
        indent: { left: 1440, hanging: 720 }, // Indented further
        children: [
            new TextRun({
                text: "15.2.1 In respect to US Sanctions: https://www.trade.gov/data-visualization/csl-search;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 720 },
        children: [
            new TextRun({
                text: "15.2.2 In respect to EU Sanctions: https://www.sanctionsmap.eu/;",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        indent: { left: 1440, hanging: 720 },
        children: [
            new TextRun({
                text: "15.2.3 In respect to UK Sanctions: https://sanctionssearchapp.ofsi.hmtreasury.gov.uk/.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 7. Paragraph following 15.2.3
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720 }, // Aligned with the text block of 15.2
        children: [
            new TextRun({
                text: "The Seller confirms that it understands and acknowledges that the above-referenced websites are not the only source of information about the restrictions on export and it will consult with other sources and its legal counsel for obtaining advice on the restrictions.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // 8. Section 15.3
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: 720, hanging: 720 },
        children: [
            new TextRun({
                text: "15.3. The Seller confirms that as of the date of this Contract, the Seller has not been convicted of violating any criminal statute, been debarred, subject to an indictment, or otherwise charged with violating criminal statutes, or declared ineligible to contract with or to receive a license or other form of authorization or approval from any Sanctions Authorities, or subject to a policy of denial, suspension or revocation, identified on a restricted party list or generally ineligible to be involved in activities with the Buyer , and/or identified as a sanctioned person under the laws of European Union or other Sanctions Authorities (“SDN”/”Specially Designated Nationals”).",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // 9. Signature Image Placeholder (Right aligned)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true,
            }),
        ],
        spacing: { after: 100 },
    }),

    // 10. Footer Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" }, // The line above footer
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 20",
                                        bold: true,
                                        font: "Arial",
                                        size: 22,
                                        color: "000000",
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
];
```