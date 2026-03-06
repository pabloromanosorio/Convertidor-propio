# JSON Rendering Architecture Plan

## Executive Summary
The current PDF-to-DOCX conversion process relies on the LLM (Gemini) generating raw, executable JavaScript code using the `docx` library syntax. This approach is highly expressive but suffers from three major flaws that directly contribute to high API costs:

1. **High Output Token Usage**: Writing JavaScript syntax (`new Paragraph({ children: [ new TextRun(...) ] })`) is extremely token-heavy compared to structured data formats like JSON. Since `gemini-3-pro` charges $12 per 1M output tokens, the cost of generating boilerplate code per page quickly adds up.
2. **High Input Token Usage (The Manual)**: Because the LLM needs to know exactly how to write valid `docx` code, the entirety of `docs/docx-js.md` (~3.2KB, roughly 800-1000 tokens) must be prepended to *every single page request*. Over a 38-page document, this is 38,000 input tokens wasted just on repeating the API manual.
3. **Syntax Errors & Silent Retries**: Generating executable code is prone to syntax errors (e.g., placing variable declarations inside array literals, missing commas). When `index_v2.js` catches a syntax error via `executeGeminiCode`, it silenty retries up to 3 times. This means you are paying the premium output token price 2-3 times for a single page just to discard the malformed code.

## Proposed Solution: JSON Structured Outputs

We will transition the prompt to request a strict JSON array representing the document structure, which will then be parsed and rendered locally into `docx` objects by `renderer_v2.js`.

### 1. Define the JSON Schema
The `middleware.js` file already contains a `LayoutSchema` powered by Zod which perfectly describes this intent. We will formalize a lightweight JSON schema that the LLM must follow. 

Example LLM Output:
```json
[
  {
    "type": "paragraph",
    "spacing": { "before": 200, "after": 200 },
    "alignment": "center",
    "runs": [
      { "text": "ASOPAGOS s.a.", "bold": true, "size": 24 }
    ]
  },
  {
    "type": "table",
    "columnWidths": [3500, 5860],
    "rows": [
      {
        "cells": [
          { "width": 3500, "blocks": [{ "type": "paragraph", "runs": [{ "text": "RAZÓN SOCIAL :" }] }] },
          { "width": 5860, "blocks": [{ "type": "paragraph", "runs": [{ "text": "PABLO MIGUEL ROMAN OSORIO" }] }] }
        ]
      }
    ]
  }
]
```

### 2. Update the Prompt (`index_v2.js`)
- **Remove** the injection of `docs/docx-js.md`.
- **Remove** instructions about writing JavaScript.
- **Add** instructions to output strict JSON conforming to the schema.
- **Enable JSON Mode** if supported by the provider SDKs, or rely on robust regex extraction similar to the `translator.js` chunk logic.

### 3. Build the Local Renderer (`renderer_v2.js` / `middleware.js`)
Currently, `executeGeminiCode(codeString)` uses `new Function` to execute the string. We will replace this with `renderJsonToDocx(jsonArray)`.
This function will iterate through the JSON objects and instantiate the real `docx` classes (`Paragraph`, `TextRun`, `Table`, `TableRow`, `TableCell`) locally.

```javascript
function renderJsonToDocx(blocks) {
    const docxObjects = [];
    for (const block of blocks) {
        if (block.type === 'paragraph') {
            docxObjects.push(new Paragraph({
               alignment: block.alignment,
               spacing: block.spacing,
               children: block.runs.map(run => new TextRun({
                   text: run.text,
                   bold: run.bold,
                   size: run.size || 20,
                   color: "000000",
                   font: "Arial"
               }))
            }));
        } else if (block.type === 'table') {
            // ... Table rendering logic ...
        }
    }
    return docxObjects;
}
```

### 4. Optimize Cost & Speed
- Because JSON is far less token-heavy, the conversion process will be significantly cheaper.
- Because JSON generation is extremely reliable for modern LLMs compared to full code generation, the 3x retry loop in `index_v2.js` will almost never trigger, saving massive amounts of wasted API calls.
- Because the input prompt is smaller, time-to-first-token will decrease, speeding up the entire batch process.

## Implementation Steps

1. **Create `src/json_renderer.js`**: Implement the mapping logic from JSON to `docx` elements.
2. **Modify `src/index_v2.js`**: Update `analyzePageV2` to use the new JSON prompt and call the new JSON renderer instead of `executeGeminiCode`.
3. **Delete/Archive `docs/docx-js.md`**: This manual will no longer be needed in the codebase payload.
4. **Test with `test_renderer.js`**: Verify that complex nested tables and paragraphs map correctly from JSON.

## Estimated Cost Savings
- **Input Tokens**: ~80% reduction per page.
- **Output Tokens**: ~40-60% reduction per page (due to escaping JS verbosity).
- **Retries**: Near 100% reduction in syntax-related retries.
- **Total Expected Savings**: Conversions should cost roughly 1/3rd to 1/4th of their current price on `gemini-3-pro`.
