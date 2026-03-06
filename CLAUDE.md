# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Document conversion and translation application that:
- Converts PDF/images to DOCX with AI-powered layout replication using Vision LLMs
- Translates DOCX documents between English and Spanish (Colombian variant) with format preservation
- Supports multiple LLM providers: Gemini, Claude, OpenAI, Moonshot (Kimi)

## Commands

```bash
npm install      # Install dependencies
npm start        # Start server at http://localhost:3002
```

**Required environment variables** (see `.env.example`):
- `GEMINI_API_KEY`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `MOONSHOT_API_KEY`

**System dependencies**:
- `pdftoppm` (via Homebrew or /usr/local/bin) - PDF→Image conversion
- Java 8+ - Required for OpenXLIFF (XLIFF-based translation)
- LibreOffice (optional) - DOCX→PDF normalization

## Architecture

### Server Entry Point
[server.js](server.js) - Express app (port 3002) with routes:
- `POST /api/convert` - PDF/Image → DOCX conversion
- `POST /api/translate-docx` - DOCX translation (XLIFF or legacy)
- `POST /api/convert-and-translate` - Combined pipeline
- `GET /api/logs` - SSE stream for real-time progress

### Core Pipelines

**PDF→DOCX Conversion** ([src/index_v2.js](src/index_v2.js)):
1. PDF pages → PNG images (200 DPI via pdftoppm)
2. Vision LLM analyzes each page's visual layout
3. LLM generates JavaScript code using `docx` library
4. Sandboxed execution creates DOCX document
5. Smart caching by MD5 hash of `PROMPT_VERSION`

**DOCX Translation** ([src/translator.js](src/translator.js)):
1. Extracts semantic blocks from DOCX XML (paragraphs, tables, headings)
2. Chunks text by semantic boundaries (NOT character count)
3. Maintains 2000-char context overlap between chunks
4. LLM translates text, patches back into XML
5. Preserves 100% formatting (styles, colors, fonts)

**XLIFF Translation** ([src/xliff/](src/xliff/)):
- Wraps OpenXLIFF (Java) for DOCX↔XLIFF conversion
- Higher layout fidelity than legacy regex-based approach
- Falls back to legacy method if Java unavailable

### Provider Abstraction
[src/providers.js](src/providers.js) - Unified interface for all LLM providers:
- `generateWithVision(imageBuffers, prompt, model)` - Vision prompts
- `generateTextOnly(prompt, model)` - Text-only (translation)
- Lazy initialization based on available API keys
- Provider-specific image format handling

### Supporting Modules
- [src/pricing.js](src/pricing.js) - Token cost tracking per model
- [src/middleware.js](src/middleware.js) - PDF↔Image conversion wrapper
- [src/renderer_v2.js](src/renderer_v2.js) - Sandboxed docx code execution
- [src/analyzer/](src/analyzer/) - Terminology analysis pipeline (Extract → Verify → Research → Ingest)

### Frontend
- [public/index.html](public/index.html) - Drag-and-drop UI with model selector
- [public/script.js](public/script.js) - SSE listener for real-time logs, preset management
- Translation presets stored in [translation_presets.json](translation_presets.json)

## Key Design Decisions

1. **Vision LLM for PDF→DOCX**: Preserves original layout better than text extraction + re-rendering
2. **Semantic Chunking**: Groups text by meaning, not character count → better translation coherence
3. **XML-Level Translation**: LLM never sees XML tags, cannot corrupt document structure
4. **XLIFF as Preferred Method**: Phase A implementation prioritizes 100% layout preservation
5. **Multi-Provider Support**: Users choose based on availability, quality, and cost

## Configuration

**Server timeout**: 1 hour (3600000 ms) for large file translations
**SSE heartbeat**: 15 seconds to prevent proxy timeouts
**Upload sanitization**: Spaces removed, special characters filtered via multer
