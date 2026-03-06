# Vertana Translation Prompts

A simpler, single-pass translation approach with optional glossary support.

---

## Overview

Vertana uses a **single-call** approach (unlike Aphra's 5-step workflow).
It's designed for speed and consistency across chunks.

---

## System Prompt Builder

Vertana dynamically builds the system prompt based on options:

```typescript
function buildSystemPrompt(
  targetLanguage: Intl.Locale | string,
  options?: SystemPromptOptions,
): string {
  const parts: string[] = [
    "You are a professional translator.",
    `Translate the given text into ${targetLangName}.`,
    "Preserve the original meaning, tone, and nuance as accurately as possible.",
    "Output only the translated text without any explanations or notes.",
  ];

  // Optional additions based on options:
  if (options.sourceLanguage) {
    parts.push(`The source language is ${sourceLangName}.`);
  }

  if (options.tone) {
    parts.push(`Use a ${options.tone} tone in the translation.`);
  }

  if (options.domain) {
    parts.push(`This text is from the ${options.domain} domain. Use appropriate terminology.`);
  }

  if (options.mediaType) {
    parts.push(`The input is formatted as ${formatName}. Preserve the formatting structure.`);
  }

  if (options.context) {
    parts.push(`Additional context: ${options.context}`);
  }

  if (options.glossary) {
    parts.push("Use the following glossary for consistent terminology:\n" +
      glossaryLines.join("\n"));
  }

  return parts.join("\n\n");
}
```

---

## Available Options

| Option | Type | Description |
|--------|------|-------------|
| `sourceLanguage` | `string` | e.g., "en", "es-MX" |
| `targetLanguage` | `string` | e.g., "es", "fr-CA" |
| `tone` | `TranslationTone` | See below |
| `domain` | `string` | e.g., "legal", "medical", "marketing" |
| `mediaType` | `MediaType` | "text/plain", "text/html", "text/markdown" |
| `context` | `string` | Free-form context description |
| `glossary` | `Glossary[]` | Array of term mappings |

### Tone Options
- `formal`
- `informal`
- `technical`
- `casual`
- `professional`
- `literary`
- `journalistic`

### Glossary Format
```typescript
interface GlossaryEntry {
  original: string;      // Source term
  translated: string;    // Target term
  context?: string;      // Optional usage context
}
```

Example:
```json
[
  { "original": "Customer", "translated": "Cliente" },
  { "original": "Service Level Agreement", "translated": "Acuerdo de Nivel de Servicio", "context": "Legal contracts" }
]
```

---

## User Prompt Builder

### Basic
```typescript
function buildUserPrompt(text: string, title?: string): string {
  if (title != null) {
    return `Title: ${title}\n\n${text}`;
  }
  return text;
}
```

### With Context (for chunks)
```typescript
function buildUserPromptWithContext(
  text: string,
  previousChunks: readonly TranslatedChunk[],
): string {
  // Includes previous translations for consistency
  return `The following sections have already been translated. ` +
    `Maintain consistency in terminology, style, and tone with the previous translations.\n\n` +
    `${contextParts.join("\n\n")}\n\n` +
    `[Current section to translate]\n${text}`;
}
```

---

## Example Full Prompt

Given:
- targetLanguage: "es"
- sourceLanguage: "en"
- tone: "formal"
- domain: "legal"
- glossary: [{ original: "Party", translated: "Parte" }]

Generated System Prompt:
```
You are a professional translator.

Translate the given text into Spanish.

Preserve the original meaning, tone, and nuance as accurately as possible.

Output only the translated text without any explanations or notes.

The source language is English.

Use a formal tone in the translation.

This text is from the legal domain. Use appropriate terminology for this field.

Use the following glossary for consistent terminology:
  - "Party" → "Parte"
```

---

## Comparison: Aphra vs Vertana

| Feature | Aphra | Vertana |
|---------|-------|---------|
| Workflow | 5 steps (multi-pass) | 1 step (single-pass) |
| Self-correction | Yes (Critique → Refine) | No |
| Web search | Yes (Step 2) | No |
| Speed | ~15s/segment | ~3s/segment |
| Token cost | 5x | 1x |
| Glossary | Injected in Step 4-5 | Injected in system prompt |
| Best for | Critical documents | Bulk translation |
