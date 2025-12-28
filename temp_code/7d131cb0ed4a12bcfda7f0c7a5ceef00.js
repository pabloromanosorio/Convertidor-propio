return [
    new Paragraph({
        children: [
            new TextRun({
                text: "Illuminance simulation",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: {
            after: 200,
        },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "• The average illuminance reaches 100 lux.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        indent: {
            left: 4680, // Indented to the right half of the page to replicate position under the heatmap
        },
        spacing: {
            before: 2000, // Spacing to account for the height of the ignored image
            after: 200,
        },
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "• The average illuminance reaches 100 lux.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
];