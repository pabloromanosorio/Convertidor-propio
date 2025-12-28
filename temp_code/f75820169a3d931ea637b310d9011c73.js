```javascript
return [
    // --- Header / Logo ---
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "Universidad del Rosario",
                font: "Arial",
                size: 24,
                color: "D9232E", // Matching the red logo color
                bold: true,
            }),
        ],
        spacing: { after: 400 },
    }),

    // --- Title ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "EL SUSCRITO DIRECTOR DE LA OFICINA DE REGISTRO ACADÉMICO DEL",
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
                text: "COLEGIO MAYOR DE NUESTRA SEÑORA DEL ROSARIO",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // --- Subtitle ---
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "CERTIFICA:",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // --- Certification Body ---
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
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
        spacing: { after: 300 },
    }),

    // --- Period Header ---
    new Paragraph({
        children: [
            new TextRun({
                text: "SEGUNDO PERÍODO DEL AÑO 2013",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // --- Grades Table ---
    new Table({
        columnWidths: [3360, 1800, 800, 800, 800, 1800], // Total ~9360 DXA
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3360, type: WidthType.DXA },
                        shading: { fill: "D9232E", type: ShadingType.CLEAR }, // Red header background
                        children: [new Paragraph({ children: [new TextRun({ text: "Nombre asignatura", bold: true, color: "FFFFFF", font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 1800, type: WidthType.DXA },
                        shading: { fill: "D9232E", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Calificación", bold: true, color: "FFFFFF", font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 800, type: WidthType.DXA },
                        shading: { fill: "D9232E", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Aprobó", bold: true, color: "FFFFFF", font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 800, type: WidthType.DXA },
                        shading: { fill: "D9232E", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C. Teór.", bold: true, color: "FFFFFF", font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 800, type: WidthType.DXA },
                        shading: { fill: "D9232E", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C. Prác.", bold: true, color: "FFFFFF", font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 1800, type: WidthType.DXA },
                        shading: { fill: "D9232E", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tipología", bold: true, color: "FFFFFF", font: "Arial", size: 18 })] })],
                    }),
                ],
            }),
            // Row 1
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "CONSTITUCIÓN POLITICA E INSTRUCCIÓN CIVICA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3,8 (tres,ocho)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOFÍSICA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "TALLER DE EXPRESIÓN CORPORAL", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5,0 (cinco,cero)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "SOCIOLOGÍA DE LA FISIOTERAPIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOQUÍMICA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,0 (cuatro,cero)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "COMPETENCIA DE LECTURA PROFUNDA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,9 (cuatro,nueve)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "PSICOLOGÍA GENERAL", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5,0 (cinco,cero)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 8
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOLOGÍA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "TALLER DE CULTURA ROSARISTA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "APROBADA", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
            // Row 10
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "SKILLS IN ENGLISH FOR HEALTH SCIENCE STUDENTS", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3,9 (tres,nueve)", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ELECTIVA", font: "Arial", size: 16, color: "000000" })] })] }),
                ],
            }),
        ],
    }),

    // --- Average ---
    new Paragraph({
        children: [
            new TextRun({
                text: "PROMEDIO DEL PERÍODO ACADÉMICO: ",
                font: "Arial",
                size: 20,
                color: "000000",
            }),
            new TextRun({
                text: "4,27",
                font: "Arial",
                size: 20,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { before: 200, after: 300 },
    }),

    // --- Description 1 ---
    new Paragraph({
        children: [
            new TextRun({
                text: "CONSTITUCIÓN POLITICA E INSTRUCCIÓN CIVICA",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Identifica en la constitución colombiana un acuerdo político fundamental que al interior de un estado democrático participativo y pluralista, represente la máxima expresión normativa, reconoce en el ciudadano la residencia de la soberanía y garantiza a los asociados derechos individuales y libertades públicas.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 300 },
    }),

    // --- Description 2 ---
    new Paragraph({
        children: [
            new TextRun({
                text: "BIOFÍSICA",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "En esta asignatura se estudian aspectos que permiten comprender la dinámica corporal y los factores que inciden en el proceso de salud de los individuos desde referentes conceptuales en física. El estudiante podrá reconocer, comprender, analizar y aplicar críticamente los fundamentos de la física, en el cuerpo humano, identificando las posibilidades que genera en el cuidado de la salud y en la relación del individuo con el entorno.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 400 },
    }),

    // --- Footer ---
    new Paragraph({
        children: [
            new TextRun({
                text: "Hoja 1 de 22",
                font: "Arial",
                size: 20,
                color: "000000",
            }),
        ],
        spacing: { after: 100 },
    }),

    // Footer Table for Signature and Address
    new Table({
        columnWidths: [4680, 4680],
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
                    // Signature Column
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Digitally signed by", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Dheman Abdi", font: "Arial", size: 24, bold: true, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Reason: 22 pages", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "Date: 2025.12.11 12:35:37", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "-05'00'", font: "Arial", size: 18, color: "000000" }),
                                ],
                            }),
                        ],
                    }),
                    // Address Column
                    new TableCell({
                        width: { size: 4680, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "Sede Principal: Calle 12c N° 6 – 25 Bogotá, Colombia",
                                        font: "Arial",
                                        size: 16,
                                        color: "D9232E", // Red footer text
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "Conexión UR: (571) 4225321 – 018000511888",
                                        font: "Arial",
                                        size: 16,
                                        color: "D9232E",
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "www.urosario.edu.co",
                                        font: "Arial",
                                        size: 16,
                                        color: "D9232E",
                                        bold: true,
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