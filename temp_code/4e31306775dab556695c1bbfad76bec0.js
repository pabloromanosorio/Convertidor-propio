```javascript
return [
    new Paragraph({
        children: [
            new TextRun({
                text: "Page 31",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Simple / Reliable / Green / Efficient",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "MAIN FEED LINE",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { before: 200, after: 200 },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Spiral auger or chain-based system that transports feed from silos or bins to each sub-feeding line, achieving automatic feed distribution.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "WEBSITE",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "bigherdsman@bigherdsman.com",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "BIGHERDSMAN",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
        ],
        alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "POULTRY PRODUCTION",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true,
            }),
        ],
        alignment: AlignmentType.CENTER,
    }),
];
```