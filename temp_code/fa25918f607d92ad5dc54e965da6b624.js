return [
    // 1. Header
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "FLORIDA NOTARIAL CERTIFICATE",
                bold: true,
                font: "Arial",
                color: "000000",
                size: 28 // 14pt
            }),
        ],
    }),

    // 2. Location Info
    new Paragraph({
        spacing: { before: 400 },
        children: [
            new TextRun({
                text: "STATE OF FLORIDA",
                bold: true,
                font: "Arial",
                color: "000000",
                size: 22 // 11pt
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "COUNTY OF MIAMI DADE",
                bold: true,
                font: "Arial",
                color: "000000",
                size: 22
            }),
        ],
    }),

    // 3. Body Text
    new Paragraph({
        spacing: { before: 400, after: 400 },
        children: [
            new TextRun({
                text: "On this 1st day of December, 2025, I attest that the preceding or attached document is a true, exact, complete, and unaltered two pages of LABCORP PATERNITY TEST RESULTS, presented to me by the document’s custodian,, and to the best of my knowledge, that the photocopied document is neither a vital record nor a public record, certified copies of which are available from an official source other than a notary public.",
                font: "Arial",
                color: "000000",
                size: 22
            }),
        ],
    }),

    // 4. Signature Section
    // Placeholder for the blue signature image
    new Paragraph({
        spacing: { before: 800 },
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Signature]",
                font: "Arial",
                color: "000000",
                size: 22,
                italics: true
            }),
        ],
    }),
    // Signature Line
    new Paragraph({
        children: [
            new TextRun({
                text: "___________________________________________________",
                font: "Arial",
                color: "000000",
                size: 22
            }),
        ],
    }),
    // Title below line
    new Paragraph({
        children: [
            new TextRun({
                text: "Florida Notary Public",
                font: "Arial",
                color: "000000",
                size: 22
            }),
        ],
    }),

    // 5. Stamp Section
    new Paragraph({
        spacing: { before: 600 },
        children: [
            new TextRun({
                text: "[IMAGE placeholder: Notary Seal - Veronica De La Cadena]",
                font: "Arial",
                color: "000000",
                size: 22,
                italics: true
            }),
        ],
    }),
];