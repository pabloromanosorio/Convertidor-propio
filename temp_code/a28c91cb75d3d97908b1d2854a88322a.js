```javascript
return [
    // 1. DocuSign ID (Top Left, Small)
    new Paragraph({
        children: [
            new TextRun({
                text: "DocuSign Envelope ID: D1328ABD-166C-40C3-9485-A06A729A7BB7",
                font: "Arial",
                color: "000000",
                size: 16, // 8pt
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 2. Header: Company Names (Borderless Table for alignment)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NONE, size: 0, color: "auto" },
            bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
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
                                        color: "000000",
                                        size: 22,
                                        underline: {
                                            type: UnderlineType.SINGLE,
                                            color: "000000",
                                        },
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "CANPACK COLOMBIA S.A.S.",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        underline: {
                                            type: UnderlineType.SINGLE,
                                            color: "000000",
                                        },
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
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
                color: "000000",
                size: 22,
                bold: true,
            }),
            new TextRun({
                text: " Allen Bradley Safety PLC, high-speed logic functionality integrated in PLC program, interconnect cables between panel & machine (100 ft.), capable of operating in 50-degree C ambient temperature with NEMA frame motors, Brady heat shrink wire markers, & power wires will be sized according to load.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 4. "Includes:" Subheader
    new Paragraph({
        children: [
            new TextRun({
                text: "Includes:",
                font: "Arial",
                color: "000000",
                size: 22,
                italics: true,
            }),
        ],
    }),

    // 5. The List
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley Control Logix L8ES & L8SP PLC", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Studio5000 Version 31 program, and FactoryTalkView Machine Edition Version 8.2", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "(2) 1756-EN2T Ethernet modules: (1) Line Control/Data Collection & HMI, (1) VFD’s and Point I/O", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Integrated Programmable Limit Switch functionality using AMCI 8213 Resolver Interface module", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "AMCI HT-400 Resolver", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 1734 series Point Guard I/O modules using CIP Safety protocol over Ethernet/IP (mounted on machine and operator console)", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Main Circuit Breaker: Allen Bradley 140 Series w/ flange mounted cable operator", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "24V DC Power Supply: Allen Bradley 1606 series w/ 3 phase input", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Door Mounted Network Interface: Grace Port with Ethernet & 5-amp GFCI service outlet", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 700S-CF & 100S-C series safety control relays & contactors", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 700-CF & 100-C series non-safety control relays and contactors", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 140M Series motor circuit protection", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 1492 / 1489 Series circuit breakers as appropriate", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Pilz 777949 for AC Drive applications Back EMF style for Trimmer motion detection", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Electrically Timed Air Strip (MAC 56 series solenoid valve)", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Main Drive VFD: Allen Bradley PowerFlex 755 with Safe-Off feature & Ethernet/IP", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Trimmer Drive VFD: Allen Bradley PowerFlex 525with Safe-Off feature & Ethernet/IP", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Hoffman Spectracool control panel air conditioner", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Hoffman NEMA type 12 control panel", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Sencon smart prox w/ BCM 387 module short can sensor", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Euchner CET-AR solenoid latching guard switches", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 194E series with black/gray lockable handle & aux contact machine mounted motor disconnects", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Allen Bradley 800TC series (30mm) pushbuttons & LED indicators", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Sourcing (PNP) 24VDC sensor wiring standard", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Inductive prox sensors: Turck", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Pressure Sensing: IFM Efector PP series – I/O Device Link", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Flow Sensing: IFM Efector SM & SI series flow meters", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Status Beacon (24V DC): Allen Bradley 856T (Red / Amber / Green)", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Terminal blocks (sized according to wire gauge and load requirements): spring cage on control (Allen Bradley 1492-L series), screw terminal for power (Allen Bradley 1492-J series)", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Floor standing operator console – Allen Bradley Panel View Plus 7 Standard 1000 HMI on Ethernet", font: "Arial", color: "000000", size: 22 })],
    }),
    new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ text: "Motors: NEMA (inch frame) Toshiba EQP III – Main Frame 75HP / Main Pump 15HP / Recirculation Pump 2HP", font: "Arial", color: "000000", size: 22 })],
    }),

    new Paragraph({ text: "" }), // Spacer

    // 6. Signature Placeholder (Right aligned)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "[IMAGE placeholder]",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    // 7. Footer (Table with Top Border)
    new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                            bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
                            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
                            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "ENCLOSURE NO. 1 TO CONTRACT NO. 25-149",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                    }),
                    new TableCell({
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
                            bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
                            left: { style: BorderStyle.NONE, size: 0, color: "auto" },
                            right: { style: BorderStyle.NONE, size: 0, color: "auto" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "PAGE NO. 10",
                                        font: "Arial",
                                        color: "000000",
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                    }),
                ],
            }),
        ],
    }),
];
```