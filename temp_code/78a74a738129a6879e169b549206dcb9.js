```javascript
return [
    // --- HEADER ---
    // Simulating the "Universidad del Rosario" logo text at top right
    new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
            new TextRun({
                text: "Universidad del",
                font: "Arial",
                size: 20, // 10pt
                color: "D9232E", // Red color from image
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
                size: 36, // 18pt
                bold: true,
                color: "D9232E",
            }),
        ],
    }),

    // --- MAIN TITLE ---
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "Continuación del ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "CERTIFICADO DE HEIDY MARCELA MONTES HERNÁNDEZ",
                font: "Arial",
                size: 22,
                bold: true,
                color: "000000",
            }),
        ],
    }),

    // --- ITEM 1: TALLER DE EXPRESIÓN CORPORAL ---
    new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [
            new TextRun({
                text: "TALLER DE EXPRESIÓN CORPORAL",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "El taller busca generar en el estudiante un espacio vivencial y reflexivo sobre el fenómeno de la corporalidad humana, propiciando una mejor comprensión del cuerpo humano, como experiencia vivida y recurso expresivo-comunicativo.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- ITEM 2: SOCIOLOGÍA DE LA FISIOTERAPIA ---
    new Paragraph({
        spacing: { before: 240, after: 100 },
        children: [
            new TextRun({
                text: "SOCIOLOGÍA DE LA FISIOTERAPIA",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Esta asignatura pretende favorecer en el proceso de formación del fisioterapeuta, la construcción de sentidos de identidad con la profesión y con el sistema social al que pertenece; así como, el afianzamiento de su actuar como ciudadano. Se estudia la historia, las acciones y los campos de desempeño del fisioterapeuta, empleando métodos sociológicos de enfoques comprehensivos y complejos.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- ITEM 3: BIOQUÍMICA ---
    new Paragraph({
        spacing: { before: 240, after: 100 },
        children: [
            new TextRun({
                text: "BIOQUÍMICA",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "La formación básica de los profesionales de la salud, demanda el conocimiento, la comprensión y el análisis crítico de los procesos que ocurren en los organismos vivos. En esta asignatura se estudian aspectos del metabolismo que en su relación con la vida, generan posibilidades de desarrollo, en la configuración de los individuos y su relación con el entorno.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- ITEM 4: COMPETENCIA DE LECTURA PROFUNDA ---
    new Paragraph({
        spacing: { before: 240, after: 100 },
        children: [
            new TextRun({
                text: "COMPETENCIA DE LECTURA PROFUNDA",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Esta asignatura proveerá al estudiante oportunidades significativas para desarrollar estrategias para la comprensión de diferentes textos universitarios, iniciar el uso de un discurso científico y mejorar sus habilidades para aprender en la vida universitaria, usar pensamiento crítico y desarrollar actitudes de confianza y satisfacción hacia su propio proceso de comprensión de lectura.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- ITEM 5: PSICOLOGÍA GENERAL ---
    new Paragraph({
        spacing: { before: 240, after: 100 },
        children: [
            new TextRun({
                text: "PSICOLOGÍA GENERAL",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "La inclusión de Psicología General en el curriculum del núcleo básico en la formación de los estudiantes de la Facultad de Rehabilitación busca proveer elementos básicos para la comprensión de los aspectos psicológicos que intervienen en cualquier encuentro humano y, en particular, en el ejercicio de su práctica profesional.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- ITEM 6: BIOLOGÍA ---
    new Paragraph({
        spacing: { before: 240, after: 100 },
        children: [
            new TextRun({
                text: "BIOLOGÍA",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Trata del concepto de la biologia general, función celular, composicion histológica de los tejidos fundamentales de los seres vivos.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- ITEM 7: TALLER DE CULTURA ROSARISTA ---
    new Paragraph({
        spacing: { before: 240, after: 100 },
        children: [
            new TextRun({
                text: "TALLER DE CULTURA ROSARISTA",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Asignatura obligatoria para los estudiantes que ingresaron a la universidad hasta el primer periodo académico de 2015.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // --- FOOTER SECTION ---
    // Page Number
    new Paragraph({
        spacing: { before: 600, after: 200 },
        children: [
            new TextRun({
                text: "Hoja 2 de 22",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Footer Table for Logos (Left) and Address (Right)
    new Table({
        columnWidths: [5000, 4360], // Approx split
        width: { size: 9360, type: WidthType.DXA },
        rows: [
            new TableRow({
                children: [
                    // Left Cell: CAPR and ACORP text representation
                    new TableCell({
                        width: { size: 5000, type: WidthType.DXA },
                        borders: {
                            top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                            bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                            left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                            right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CAPR ",
                                        font: "Arial",
                                        size: 24,
                                        bold: true,
                                        color: "D9232E", // Reddish logo text
                                    }),
                                    new TextRun({
                                        text: "Canadian Alliance of Physiotherapy Regulators",
                                        font: "Arial",
                                        size: 14,
                                        color: "666666",
                                    }),
                                ],
                            }),
                            new Paragraph({
                                spacing: { before: 60 },
                                children: [
                                    new TextRun({
                                        text: "ACORP ",
                                        font: "Arial",
                                        size: 24,
                                        bold: true,
                                        color: "D9232E",
                                    }),
                                    new TextRun({
                                        text: "Alliance canadienne des organismes de réglementation de la physiothérapie",
                                        font: "Arial",
                                        size: 14,
                                        color: "666666",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    // Right Cell: Address
                    new TableCell({
                        width: { size: 4360, type: WidthType.DXA },
                        verticalAlign: "center",
                        borders: {
                            top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                            bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                            left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                            right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: "Sede Principal: Calle 12c N° 6 – 25 Bogotá, Colombia",
                                        font: "Arial",
                                        size: 16,
                                        bold: true,
                                        color: "D9232E",
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
                                        bold: true,
                                        color: "D9232E",
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
                                        bold: true,
                                        color: "D9232E",
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