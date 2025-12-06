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

Tables require strict width definitions.

```typescript
import { Table, TableRow, TableCell, WidthType } from "docx";

new Table({
    width: {
        size: 100,
        type: WidthType.PERCENTAGE,
    },
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph("Hello")],
                    width: {
                        size: 50,
                        type: WidthType.PERCENTAGE,
                    },
                }),
            ],
        }),
    ],
});
```

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