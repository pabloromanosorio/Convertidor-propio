# LLM Configuration Parameters

This document tracks all the specialized configurations used for the LLMs within the application. Parameters should be documented here when tuned to serve as a baseline for future optimizations.

## 1. Visual Conversion Settings (`src/providers.js`)
Used when submitting PDFs / Images to an LLM (typically Gemini) to write Document layout code.

- **Objective:** Highly accurate structural replication (DXA grids, precise text wrapping), outputting a JavaScript script.
- **Current Defaults (Gemini 3.1 Pro)**:
  - `temperature`: `0.1` (Keep low for deterministic JS syntax)
  - `thinkingConfig`: Enabled
    - `thinkingLevel`: `"DEFAULT"` (Medium). Previously set to "HIGH", but that heavily consumed tokens during the reasoning phase before outputting the massive JS bundle array, leading to unexpected truncation errors.
  - `maxOutputTokens`: `65536` (Max allowed by the model, to guarantee the code isn't clipped midway through a large document).

## 2. Text Translation Settings (`src/translator.js`)
Used when parsing extracted text strings and submitting them to the LLM (typically Gemini or specialized translate models) for localization to Spanish/English.

- **Objective:** Deep semantic understanding, preserving legal and corporate nuances within bidirectional translations. Outputs JSON arrays containing ID-translation pairs.
- **Current Defaults (Gemini 3.1 Pro)**:
  - `temperature`: `0.2` (Provides slight creative freedom for natural phrasing but remains tightly grounded).
  - `thinkingConfig`: Enabled
    - `thinkingLevel`: `"HIGH"`. Because this is text generation (not massive raw JS bundles), the token overhead is acceptable and crucial for high-quality legal/corporate translations.
  - `maxOutputTokens`: `16384` (Sufficient for chunking and returning the translation JSON maps).
