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

Tables require strict width definitions using DXA (twips).

**CRITICAL:** Do NOT use `WidthType.PERCENTAGE` - it produces corrupt OOXML in docx v9.x.
Always use `WidthType.DXA` with twips (1 inch = 1440 twips).

**Full page width:** 9026 twips (with 1-inch margins on A4)

```typescript
import { Table, TableRow, TableCell, WidthType } from "docx";

new Table({
    width: {
        size: 9026,  // Full page width in twips
        type: WidthType.DXA,
    },
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph("Hello")],
                    width: {
                        size: 4513,  // Half width (9026/2)
                        type: WidthType.DXA,
                    },
                }),
            ],
        }),
    ],
});
```

**Common widths (twips):** Full=9026, Half=4513, Third=3009, Two-thirds=6017, Quarter=2256

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