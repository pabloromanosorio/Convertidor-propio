# Creating Word Documents with docx.js

This guide covers how to create .docx files using the `docx` npm package.

## Setup

```typescript
import { Document, Packer, Paragraph, TextRun } from "docx";
import * as fs from "fs";
```

## Text and Formatting

### Basic Text
Use `TextRun` for styling within paragraphs.

```typescript
new Paragraph({
    children: [
        new TextRun("Hello World"),
        new TextRun({
            text: "Bold",
            bold: true,
        }),
        new TextRun({
            text: "Italic",
            italics: true,
        }),
    ],
});
```

### Alignment
```typescript
import { AlignmentType } from "docx";

new Paragraph({
    text: "Centered Text",
    alignment: AlignmentType.CENTER,
});
```

## Lists (Critical Rules)

**NEVER** use unicode bullets (•) or manual numbers (1.). You MUST use the `numbering` configuration.

### Bullet List
```typescript
new Paragraph({
    text: "Bullet Item",
    bullet: {
        level: 0, // Indentation level
    },
});
```

### Numbered List
To use numbered lists, you must define a `numbering` config in the Document options and reference it.

## Tables

Tables require DXA (twips) width definitions. Use `columnWidths` array at table level + individual cell widths.

**CRITICAL:** Use `WidthType.DXA` with twips (1440 = 1 inch). Letter page usable width = 9360 DXA (with 1" margins).

**Precomputed Column Widths:**
- **2 equal columns:** `columnWidths: [4680, 4680]`
- **3 equal columns:** `columnWidths: [3120, 3120, 3120]`

```typescript
import { Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType } from "docx";

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

new Table({
    columnWidths: [4680, 4680], // Set column widths at table level
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    borders: cellBorders,
                    width: { size: 4680, type: WidthType.DXA },
                    shading: { fill: "D5E8F0", type: ShadingType.CLEAR }, // ALWAYS use ShadingType.CLEAR
                    children: [new Paragraph("Cell 1")],
                }),
                new TableCell({
                    borders: cellBorders,
                    width: { size: 4680, type: WidthType.DXA },
                    children: [new Paragraph("Cell 2")],
                }),
            ],
        }),
    ],
});
```

**CRITICAL:** Always use `ShadingType.CLEAR` for cell shading - never `ShadingType.SOLID` (causes black background).

## Images

Images must be converted to Buffer first.

```typescript
const image = Media.addImage(doc, buffer, width, height);
```

## Generating the File

```typescript
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
```