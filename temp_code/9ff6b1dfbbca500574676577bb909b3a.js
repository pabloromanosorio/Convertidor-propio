```javascript
return [
    // Title: AC Dimmable Light Bulb
    new Paragraph({
        children: [
            new TextRun({
                text: "AC Dimmable Light Bulb",
                font: "Arial",
                size: 28, // 14pt for header
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 200 },
    }),

    // List Item 1
    new Paragraph({
        children: [
            new TextRun({
                text: "• AC220V 10W, 3000K color temperature, no stroboscopic, high luminous efficiency.",
                font: "Arial",
                size: 22, // 11pt body
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // List Item 2
    new Paragraph({
        children: [
            new TextRun({
                text: "• Highly durable, with high heat dissipation materials, IP67. Lifespan >= 50,000 hrs, light decay within 3 years <= 10%.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // List Item 3
    new Paragraph({
        children: [
            new TextRun({
                text: "• Uniform lighting, high light transmittance, broader illumination, no pressure drop at both ends.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // List Item 4
    new Paragraph({
        children: [
            new TextRun({
                text: "• Color temperature and power customizable.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // Section Header: Scheme Design
    new Paragraph({
        children: [
            new TextRun({
                text: "Scheme Design",
                font: "Arial",
                size: 24, // 12pt for sub-header
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // Section Header: Illuminate simulation
    new Paragraph({
        children: [
            new TextRun({
                text: "Illuminate simulation",
                font: "Arial",
                size: 24,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // Final List Item
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
```