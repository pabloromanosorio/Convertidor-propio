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

**CRITICAL: NEVER** output hardcoded unicode bullets (•, -, *) or manual numbers (1., A., i.) inside the `text` field of `TextRun`.
You MUST use the Document's predefined `numbering` configuration. Word automatically renders the bullet and number sequence.

### Bullet List
```typescript
new Paragraph({
    numbering: {
        reference: "bullet-list",
        level: 0, // 0 for base level, 1 for nested
    },
    // DO NOT include "• " or "- " in the text!
    children: [new TextRun("Clean bullet item text")],
});
```

### Numbered List
```typescript
// To use numbered lists, you must reference the "numbered-list" config
new Paragraph({
    numbering: {
        reference: "numbered-list",
        level: 0, 
    },
    // DO NOT include "1. " or "a) " in the text!
    children: [new TextRun("Clean numbered item text")],
});
```

## Tables

Tables require strict width definitions using DXA (twips).

**CRITICAL:** Do NOT use `WidthType.PERCENTAGE` - it produces corrupt OOXML in docx v9.x.
Always use `WidthType.DXA` with twips (1 inch = 1440 twips).

**Full page width:** 9360 twips (with 1-inch margins on Letter size)

**Precomputed Column Widths:**
- **2 equal columns:** `columnWidths: [4680, 4680]`
- **3 equal columns:** `columnWidths: [3120, 3120, 3120]`
- **Unequal columns:** `columnWidths: [2000, 7360]`

```typescript
import { Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType } from "docx";

// ALWAYS inline borders and properties. NEVER declare 'const' variables inside your returned array!
new Table({
    columnWidths: [4680, 4680], // ALWAYS Set column widths at table level
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                    },
                    width: { size: 4680, type: WidthType.DXA },
                    shading: { fill: "D5E8F0", type: ShadingType.CLEAR }, // ALWAYS use ShadingType.CLEAR
                    children: [new Paragraph("Cell 1")],
                }),
                new TableCell({
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