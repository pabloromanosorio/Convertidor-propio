```javascript
return [
    // 1. Top DocuSign ID
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

    // 2. Header Table (Stolle / Canpack)
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                                        underline: { type: UnderlineType.SINGLE, color: "000000" },
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

    // 3. Main Intro Paragraph
    new Paragraph({
        children: [
            new TextRun({
                text: "Standard Electrical Features of a Standun Bodymaker include:",
                font: "Arial",
                size: 22,
                color: "000000",
                bold: true,
            }),
            new TextRun({
                text: "\nAllen Bradley Safety PLC, high-speed logic functionality integrated in PLC program, interconnect cables between panel & machine (100 ft.), capable of operating in 50-degree C ambient temperature with NEMA frame motors, Brady heat shrink wire markers, & power wires will be sized according to load.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. "Includes:"
    new Paragraph({
        children: [
            new TextRun({
                text: "Includes:",
                font: "Arial",
                size: 22,
                color: "000000",
                italics: true,
            }),
        ],
    }),

    // 5. Bulleted List
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley Control Logix L8ES & L8SP PLC", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Studio5000 Version 31 program, and FactoryTalkView Machine Edition Version 8.2", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "(2) 1756-EN2T Ethernet modules: (1) Line Control/Data Collection & HMI, (1) VFD's and Point I/O", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Integrated Programmable Limit Switch functionality using AMCI 8213 Resolver Interface module", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "AMCI HT-400 Resolver", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 1734 series Point Guard I/O modules using CIP Safety protocol over Ethernet/IP (mounted on machine and operator console)", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Main Circuit Breaker: Allen Bradley 140 Series w/ flange mounted cable operator", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "24V DC Power Supply: Allen Bradley 1606 series w/ 3 phase input", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Door Mounted Network Interface: Grace Port with Ethernet & 5-amp GFCI service outlet", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 700S-CF & 100S-C series safety control relays & contactors", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 700-CF & 100-C series non-safety control relays and contactors", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 140M Series motor circuit protection", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 1492 / 1489 Series circuit breakers as appropriate", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Pilz 777949 for AC Drive applications Back EMF style for Trimmer motion detection", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Electrically Timed Air Strip (MAC 56 series solenoid valve)", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Main Drive VFD: Allen Bradley PowerFlex 755 with Safe-Off feature & Ethernet/IP", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Trimmer Drive VFD: Allen Bradley PowerFlex 525with Safe-Off feature & Ethernet/IP", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Hoffman Spectracool control panel air conditioner", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Hoffman NEMA type 12 control panel", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Sencon smart prox w/ BCM 387 module short can sensor", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Euchner CET-AR solenoid latching guard switches", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 194E series with black/gray lockable handle & aux contact machine mounted motor disconnects", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 800TC series (30mm) pushbuttons & LED indicators", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Sourcing (PNP) 24VDC sensor wiring standard", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Inductive prox sensors: Turck", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Pressure Sensing: IFM Efector PP series – I/O Device Link", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Flow Sensing: IFM Efector SM & SI series flow meters", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Status Beacon (24V DC): Allen Bradley 856T (Red / Amber / Green)", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Terminal blocks (sized according to wire gauge and load requirements): spring cage on control (Allen Bradley 1492-L series), screw terminal for power (Allen Bradley 1492-J series)", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Floor standing operator console – Allen Bradley Panel View Plus 7 Standard 1000 HMI on Ethernet", font: "Arial", size: 22, color: "000000" })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Motors: NEMA (inch frame) Toshiba EQP III – Main Frame 75HP / Main Pump 15HP / Recirculation Pump 2HP", font: "Arial", size: 22, color: "000000" })],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 6. Signature Image Placeholder (Bottom Right)
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

    // 7. Footer Table
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
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
                        width: { size: 50, type: WidthType.PERCENTAGE },
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
                    }),
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 10",
                                        font: "Arial",
                                        size: 22,
                                        bold: true,
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