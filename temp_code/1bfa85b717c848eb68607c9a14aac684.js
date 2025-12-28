```javascript
return [
    // --- Header Section ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "Page 1 of 1",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Penn State Law Official Transcript",
                font: "Arial",
                size: 28, // Slightly larger for title
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }), // Spacer

    // --- Student Info Table ---
    new Table({
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        columnWidths: [4680, 4680],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Name:          Maria Diaz Moreno", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "SSN: ***-**-XXXX", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Student ID:    911559841", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Birthdate (MM/DD): 12/04", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: "Print Date      06/30/2025", font: "Arial", size: 22, color: "000000" })] })],
                    }),
                    new TableCell({
                        children: [new Paragraph({ text: "" })],
                    }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // --- Degrees Awarded ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Degrees Awarded",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Table({
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        columnWidths: [3120, 3120, 3120],
        rows: [
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Degree", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Master of Laws", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Confer Date", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "05/17/2025", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Plan:", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Law (LLM)", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // --- Fall 2024 Header ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Beginning of Penn State Law Record",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Fall 2024",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ children: [new TextRun({ text: "Program:          Penn State Law (LLM)", font: "Arial", size: 22, color: "000000" })] }),
    new Paragraph({ children: [new TextRun({ text: "Plan:                 Law (LLM) Major", font: "Arial", size: 22, color: "000000" })] }),
    new Paragraph({ text: "" }),

    // --- Fall 2024 Course Table ---
    new Table({
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        columnWidths: [1500, 3860, 1000, 1000, 1000, 1000],
        rows: [
            // Header
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Course", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Description", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Attempted", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Earned", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Grade", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Points", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Rows
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "LLM 900", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Intro US Legal Sys", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "CR", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "LLM 901", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "LLM LEG AN WR", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "CR", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PSLFY 903", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "RES PROCEDURE", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "B", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PSLFY 905", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "CONTRACTS", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "B", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // --- Fall 2024 Summary Table ---
    new Table({
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        columnWidths: [2000, 800, 1560, 1250, 1250, 1250, 1250],
        rows: [
            // Summary Header
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ text: "" })], columnSpan: 3 }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Attempted", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Earned", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "GPA Units", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Points", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Term GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Term GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.130", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Term Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "10.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "31.340", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Transfer Term GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Term GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Combined Term GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Combined Term GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.130", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Comb Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "10.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "31.340", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.130", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Cum Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "10.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "31.340", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Transfer Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Combined Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Combined Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.130", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Comb Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "10.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "31.340", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // --- Spring 2025 Header ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Spring 2025",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ children: [new TextRun({ text: "Program:          Penn State Law (LLM)", font: "Arial", size: 22, color: "000000" })] }),
    new Paragraph({ children: [new TextRun({ text: "Plan:                 Law (LLM) Major", font: "Arial", size: 22, color: "000000" })] }),
    new Paragraph({ text: "" }),

    // --- Spring 2025 Course Table ---
    new Table({
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        columnWidths: [1500, 3860, 1000, 1000, 1000, 1000],
        rows: [
            // Header
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Course", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Description", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Attempted", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Earned", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Grade", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Points", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Rows
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "INTR 971", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "INTERNATIONAL LAW", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "B+", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "9.990", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "LWPER 950", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Law and (In)equity", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "CR", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PRORP 934", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PRO R P", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "B", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "9.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PSLFY 920", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "CON LAW I", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "B", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "9.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PSLFY 920", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "PROPERTY", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "4.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "A-", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "14.680", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // --- Spring 2025 Summary Table ---
    new Table({
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        columnWidths: [2000, 800, 1560, 1250, 1250, 1250, 1250],
        rows: [
            // Summary Header
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ text: "" })], columnSpan: 3 }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Attempted", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Earned", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "GPA Units", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Points", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Term GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Term GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.360", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Term Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "14.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "14.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "13.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "43.660", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Transfer Term GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Term GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Combined Term GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Combined Term GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.360", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Comb Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "14.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "14.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "13.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "43.660", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.260", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Cum Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "23.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "75.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Transfer Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Combined Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Combined Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.260", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Comb Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "23.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "75.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // --- Career Totals ---
    new Table({
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
        },
        columnWidths: [2000, 800, 1560, 1250, 1250, 1250, 1250],
        rows: [
            // Summary Header
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ text: "" })], columnSpan: 3 }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Attempted", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Earned", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "GPA Units", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Points", bold: true, font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Penn State Law Career Totals
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Penn State Law Career Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.260", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Comb Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "23.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "75.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.260", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Cum Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "23.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "75.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Transfer Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ text: "" })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Transfer Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "0.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
            // Combined Cum GPA
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Combined Cum GPA", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3.260", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Comb Totals", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "26.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "23.000", font: "Arial", size: 22, color: "000000" })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "75.000", font: "Arial", size: 22, color: "000000" })] })] }),
                ],
            }),
        ],
    }),
    new Paragraph({ text: "" }),

    // --- Footer ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "End of Penn State Law Official Transcript",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({
        children: [
            new TextRun({
                text: "[Seal: SEE ATTACHED]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "[Signature]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "Robert A. Kubat",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        children: [
            new TextRun({
                text: "University Registrar",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "[Seal: PENNSYLVANIA STATE UNIVERSITY 1855]",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
];
```