```javascript
return [
    // --- HEADER LOGO (Simulated with Text) ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "Universidad del",
                font: "Arial",
                size: 20,
                color: "C00000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "Rosario",
                font: "Arial",
                size: 36,
                bold: true,
                color: "C00000",
            }),
        ],
    }),

    // --- MAIN TITLE ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "EL SUSCRITO DIRECTOR DE LA OFICINA DE REGISTRO ACADÉMICO DEL",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
            new TextRun({
                text: "\nCOLEGIO MAYOR DE NUESTRA SEÑORA DEL ROSARIO",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- CERTIFICA ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "CERTIFICA:",
                font: "Arial",
                size: 24,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- CERTIFICATION BODY ---
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "Que ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "HEIDY MARCELA MONTES HERNÁNDEZ",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
            new TextRun({
                text: " con Cédula de Ciudadanía No. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "1022400028",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
            new TextRun({
                text: " cursó las siguientes asignaturas correspondientes al programa ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "FISIOTERAPIA",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
            new TextRun({
                text: ", habiendo obtenido las siguientes calificaciones finales:",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- PERIOD HEADER ---
    new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [
            new TextRun({
                text: "SEGUNDO PERÍODO DEL AÑO 2013",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- GRADES TABLE ---
    new Table({
        columnWidths: [3500, 1800, 800, 800, 800, 1660],
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        shading: { fill: "B22222", type: ShadingType.CLEAR },
                        width: { size: 3500, type: WidthType.DXA },
                        children: [new Paragraph({ children: [new TextRun({ text: "Nombre asignatura", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        shading: { fill: "B22222", type: ShadingType.CLEAR },
                        width: { size: 1800, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Calificación", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        shading: { fill: "B22222", type: ShadingType.CLEAR },
                        width: { size: 800, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Aprobó", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        shading: { fill: "B22222", type: ShadingType.CLEAR },
                        width: { size: 800, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C. Teór.", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        shading: { fill: "B22222", type: ShadingType.CLEAR },
                        width: { size: 800, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C. Prác.", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        shading: { fill: "B22222", type: ShadingType.CLEAR },
                        width: { size: 1660, type: WidthType.DXA },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tipología", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                ],
            }),
            // Row 1
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "CONSTITUCIÓN POLITICA E INSTRUCCIÓN CIVICA", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3,8 (tres,ocho)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOFÍSICA", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "TALLER DE EXPRESIÓN CORPORAL", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5,0 (cinco,cero)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "SOCIOLOGÍA DE LA FISIOTERAPIA", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOQUÍMICA", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,0 (cuatro,cero)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "COMPETENCIA DE LECTURA PROFUNDA", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,9 (cuatro,nueve)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "PSICOLOGÍA GENERAL", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5,0 (cinco,cero)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 8
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOLOGÍA", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "TALLER DE CULTURA ROSARISTA", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "APROBADA", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
            // Row 10
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "SKILLS IN ENGLISH FOR HEALTH SCIENCE STUDENTS", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3,9 (tres,nueve)", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true })] })] }),
                    new TableCell({ width: { size: 1660, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ELECTIVA", font: "Arial", size: 16, bold: true })] })] }),
                ],
            }),
        ],
    }),

    // --- AVERAGE ---
    new Paragraph({
        spacing: { before: 300, after: 300 },
        children: [
            new TextRun({
                text: "PROMEDIO DEL PERÍODO ACADÉMICO: 4,27",
                font: "Arial",
                size: 20,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- COURSE DESCRIPTION 1 ---
    new Paragraph({
        indent: { left: 720 },
        spacing: { after: 100 },
        children: [
            new TextRun({
                text: "CONSTITUCIÓN POLITICA E INSTRUCCIÓN CIVICA",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        indent: { left: 720 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "Identifica en la constitución colombiana un acuerdo político fundamental que al interior de un estado democrático participativo y pluralista, represente la máxima expresión normativa, reconoce en el ciudadano la residencia de la soberanía y garantiza a los asociados derechos individuales y libertades públicas.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- COURSE DESCRIPTION 2 ---
    new Paragraph({
        indent: { left: 720 },
        spacing: { after: 100 },
        children: [
            new TextRun({
                text: "BIOFÍSICA",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        indent: { left: 720 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "En esta asignatura se estudian aspectos que permiten comprender la dinámica corporal y los factores que inciden en el proceso de salud de los individuos desde referentes conceptuales en física. El estudiante podrá reconocer, comprender, analizar y aplicar críticamente los fundamentos de la física, en el cuerpo humano, identificando las posibilidades que genera en el cuidado de la salud y en la relación del individuo con el entorno.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- FOOTER LAYOUT (Table for alignment) ---
    new Table({
        columnWidths: [3120, 3120, 3120],
        width: { size: 9360, type: WidthType.DXA },
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
                    // Left Column: Page Number + Logos Text
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: "Hoja 1 de 22", font: "Arial", size: 20, color: "000000" })],
                            }),
                            new Paragraph({
                                spacing: { before: 200 },
                                children: [
                                    new TextRun({ text: "CAPR", bold: true, color: "C00000", font: "Arial", size: 16 }),
                                    new TextRun({ text: "\nCanadian Alliance of Physiotherapy Regulators", color: "000000", font: "Arial", size: 12 }),
                                ],
                            }),
                            new Paragraph({
                                spacing: { before: 100 },
                                children: [
                                    new TextRun({ text: "ACORP", bold: true, color: "C00000", font: "Arial", size: 16 }),
                                    new TextRun({ text: "\nAlliance canadienne des organismes de réglementation de la physiothérapie", color: "000000", font: "Arial", size: 12 }),
                                ],
                            }),
                        ],
                    }),
                    // Center Column: Digital Signature
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Digitally signed by", font: "Arial", size: 20, color: "000000" }),
                                    new TextRun({ text: "\nDheman Abdi", font: "Arial", size: 24, bold: true, color: "000000" }),
                                    new TextRun({ text: "\nReason: 22 pages", font: "Arial", size: 20, color: "000000" }),
                                    new TextRun({ text: "\nDate: 2025.12.11 12:35:37", font: "Arial", size: 20, color: "000000" }),
                                    new TextRun({ text: "\n-05'00'", font: "Arial", size: 20, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    // Right Column: Address
                    new TableCell({
                        width: { size: 3120, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({ text: "Sede Principal: Calle 12c N° 6 – 25 Bogotá, Colombia", font: "Arial", size: 16, color: "C00000", bold: true }),
                                    new TextRun({ text: "\nConexión UR: (571) 4225321 – 018000511888", font: "Arial", size: 16, color: "C00000", bold: true }),
                                    new TextRun({ text: "\nwww.urosario.edu.co", font: "Arial", size: 16, color: "C00000", bold: true }),
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