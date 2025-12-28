```javascript
return [
    // --- HEADER SECTION ---
    // Logo representation (Top Right)
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "Universidad del",
                font: "Arial",
                size: 20,
                color: "D12329", // University Red
                break: 1,
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
                size: 32,
                bold: true,
                color: "D12329",
            }),
        ],
    }),

    // Main Title
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "EL SUSCRITO DIRECTOR DE LA OFICINA DE REGISTRO ACADÉMICO DEL",
                font: "Arial",
                size: 22, // 11pt
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

    // Certifica
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "CERTIFICA:",
                font: "Arial",
                size: 24, // 12pt
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // Main Body Text
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

    // Period Header
    new Paragraph({
        spacing: { after: 100 },
        children: [
            new TextRun({
                text: "SEGUNDO PERÍODO DEL AÑO 2013",
                font: "Arial",
                size: 20,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- GRADES TABLE ---
    new Table({
        columnWidths: [3600, 1600, 800, 800, 800, 1760], // Total ~9360 DXA
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            // Header Row
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 3600, type: WidthType.DXA },
                        shading: { fill: "B02A30", type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: "Nombre asignatura", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 1600, type: WidthType.DXA },
                        shading: { fill: "B02A30", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Calificación", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 800, type: WidthType.DXA },
                        shading: { fill: "B02A30", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Aprobó", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 800, type: WidthType.DXA },
                        shading: { fill: "B02A30", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C. Teór.", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 800, type: WidthType.DXA },
                        shading: { fill: "B02A30", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C. Prác.", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                    new TableCell({
                        width: { size: 1760, type: WidthType.DXA },
                        shading: { fill: "B02A30", type: ShadingType.CLEAR },
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tipología", color: "FFFFFF", bold: true, font: "Arial", size: 18 })] })],
                    }),
                ],
            }),
            // Row 1
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "CONSTITUCIÓN POLITICA E INSTRUCCIÓN CIVICA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3,8 (tres,ocho)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 2
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOFÍSICA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 3
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "TALLER DE EXPRESIÓN CORPORAL", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5,0 (cinco,cero)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 4
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "SOCIOLOGÍA DE LA FISIOTERAPIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 5
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOQUÍMICA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,0 (cuatro,cero)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 6
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "COMPETENCIA DE LECTURA PROFUNDA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,9 (cuatro,nueve)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 7
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "PSICOLOGÍA GENERAL", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5,0 (cinco,cero)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 8
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "BIOLOGÍA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4,1 (cuatro,uno)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 9
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "TALLER DE CULTURA ROSARISTA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "APROBADA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OBLIGATORIA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
            // Row 10
            new TableRow({
                children: [
                    new TableCell({ width: { size: 3600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "SKILLS IN ENGLISH FOR HEALTH SCIENCE STUDENTS", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3,9 (tres,nueve)", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "S", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                    new TableCell({ width: { size: 1760, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ELECTIVA", font: "Arial", size: 16, bold: true, color: "000000" })] })] }),
                ],
            }),
        ],
    }),

    // Average
    new Paragraph({
        spacing: { before: 200, after: 200 },
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

    // --- COURSE DESCRIPTIONS ---
    // Course 1
    new Paragraph({
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
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "Identifica en la constitución colombiana un acuerdo político fundamental que al interior de un estado democrático participativo y pluralista, represente la máxima expresión normativa, reconoce en el ciudadano la residencia de la soberanía y garantiza a los asociados derechos individuales y libertades públicas.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Course 2
    new Paragraph({
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

    // --- FOOTER ---
    new Paragraph({
        children: [
            new TextRun({
                text: "Hoja 1 de 22",
                font: "Arial",
                size: 20,
                color: "000000",
            }),
        ],
    }),

    // Footer Table (Signature and Address)
    new Table({
        columnWidths: [5000, 4360],
        width: { size: 9360, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
        },
        rows: [
            new TableRow({
                children: [
                    // Signature Cell
                    new TableCell({
                        width: { size: 5000, type: WidthType.DXA },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "CAPR ACORP", color: "D12329", bold: true, font: "Arial", size: 16 }),
                                    new TextRun({ text: "\nDigitally signed by", color: "000000", font: "Arial", size: 18 }),
                                    new TextRun({ text: "\nDheman Abdi", color: "000000", font: "Arial", size: 20, bold: true }),
                                    new TextRun({ text: "\nReason: 22 pages", color: "000000", font: "Arial", size: 18 }),
                                    new TextRun({ text: "\nDate: 2025.12.11 12:35:37", color: "000000", font: "Arial", size: 18 }),
                                    new TextRun({ text: "\n-05'00'", color: "000000", font: "Arial", size: 18 }),
                                ],
                            }),
                        ],
                    }),
                    // Address Cell
                    new TableCell({
                        width: { size: 4360, type: WidthType.DXA },
                        verticalAlign: "bottom",
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({ text: "Sede Principal: Calle 12c N° 6 – 25 Bogotá, Colombia", color: "D12329", font: "Arial", size: 16, bold: true }),
                                    new TextRun({ text: "\nConexión UR: (571) 4225321 – 018000511888", color: "D12329", font: "Arial", size: 16, bold: true }),
                                    new TextRun({ text: "\nwww.urosario.edu.co", color: "D12329", font: "Arial", size: 16, bold: true }),
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