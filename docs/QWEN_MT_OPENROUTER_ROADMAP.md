# Qwen MT Integration & OpenRouter Fix Roadmap

## 1. Project Context
This application is a document conversion and translation utility designed to convert PDFs/images to DOCX, and subsequently translate DOCX files while preserving formatting and layout. It relies heavily on an LLM pipeline with an API abstraction layer (`src/providers.js`) supporting various models like Gemini, Claude, Kimi, and OpenRouter. It was requested to introduce Alibaba Cloud's Qwen MT translation engine to augment translation performance, and to fix the existing OpenRouter implementation that was reportedly failing.

## 2. Research & Findings
### OpenRouter Issue:
- **Observation:** OpenRouter was failing for text-only API calls.
- **Root Cause Analysis:** The `generateOpenRouter` function strictly formatted the `content` property of the message payload as an array containing `{ type: "text", text: prompt }`. While OpenAI-compatible endpoints generally tolerate array-based content payloads for vision-capable models, many standard text models configured on OpenRouter reject arrays for text-only inputs, resulting in HTTP 400 Bad Request errors.
- **Resolution:** Modified the payload constructor. If there is no image provided, `content` is now passed as a simple string, restoring compatibility with text-only OpenRouter models.

### Qwen MT Integration:
- **Research on Qwen MT:** Alibaba Cloud recently exposed specialized translation LLMs under the Qwen MT banner (`qwen-mt-plus` and `qwen-mt-turbo`). 
- **Endpoint specifics:** Accessible via DashScope (Alibaba Cloud Model Studio) using standard OpenAI-compatible endpoints or native DashScope REST endpoints (`https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`).
- **Characteristics:** Built specifically for professional machine translation tasks with features like Terminology Intervention, Translation Memory, and highly controllable terminology bounds.
- **Provider Map:** We need to map DashScope credentials (`DASHSCOPE_API_KEY`) and implement a dedicated translation handler in the provider and translation interfaces.

## 3. Requirements Checklist
- [x] Identify the root cause of OpenRouter failures and fix the message payload schema for text-only generations.
- [x] Research Alibaba Cloud DashScope `qwen-mt` documentation.
- [x] Add Qwen MT translation models to `MODELS` constant in `src/providers.js`.
- [x] Implement DashScope HTTP request handlers (`generateQwenMTText`) for Qwen MT models.
- [x] Expose Qwen MT options to the UI by updating `public/index.html` (adding an API key setting).
- [x] Bind DashScope UI settings in `public/script.js` to persist and interact with the backend `/api/settings`.

## 4. Execution Roadmap (Done ✅)
1. **Fix OpenRouter Implementation**
   - Modified `generateOpenRouter()` in `src/providers.js` to dynamically fallback to string `content` if `imageBase64` is null.
2. **Implement Qwen MT Provider backend**
   - In `src/providers.js`, added `qwen-mt-turbo` and `qwen-mt-plus` to `MODELS`.
   - Handled DashScope `DASHSCOPE_API_KEY` lazy loading.
3. **Connect to Translator Pipeline**
   - Implemented `generateQwenMTText()` logic in `src/translator.js`.
   - Registered `qwen-mt` switch case in `generateTextOnly()` dispatcher.
4. **UI/UX Updates**
   - Added `DashScope (Qwen MT)` password input row in `public/index.html` settings modal.
   - Updated `public/script.js` map references (`keyInputs`, `keyStatuses`, `providerKeyMap`) to parse and persist the DashScope key.

## 5. Next Steps / Recommendations
- Test with an active DashScope API key using complex technical DOCX files to benchmark Terminology accuracy vs Kimi.
- Currently, Qwen MT's `system` message prompt features Terminology constraints. Future roadmap could add Terminology Glossary (`translation_memory.json`) directly into the Qwen MT payload.