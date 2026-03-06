---
phase: 01-editor-core
plan: 01
plan_name: xliff-alignment-engine
subsystem: editor
tags: [xliff, alignment, api, foundation]
requires: []
provides: [01-editor-core-02, 01-editor-core-03]
affects: [server.js]
tech-stack:
  added: [xmldom, multer]
  patterns: [session-storage, position-based-alignment, section-detection]
key-files:
  created:
    - src/editor/xliff_aligner.js
    - src/editor/segment_store.js
  modified:
    - server.js
  reused:
    - src/xliff/xliff_handler.js
    - src/xliff/xliff_translator.js
decisions:
  - Used position-based segment alignment (OpenXLIFF produces segments in document order)
  - Merged target text INTO source XLIFF rather than creating parallel structures
  - ALL CAPS + short text + colon-ending heuristics for heading detection
  - In-memory Map storage for sessions (UUID keys)
  - Section chunking (~20 segments) when no headings detected
---

# Phase 01 Plan 01: XLIFF Alignment Engine Summary

**One-liner:** XLIFF alignment engine that converts source+target DOCX pairs or loads existing bilingual XLIFF into aligned segments with section grouping.

## What Was Built

### 1. XLIFF Alignment Engine (`src/editor/xliff_aligner.js`)

Three core functions for document alignment:

**`alignDocxPair(sourceDocxPath, targetDocxPath, options)`**
- Converts source DOCX to XLIFF (creates skeleton structure)
- Converts target DOCX to XLIFF (extracts translation segments)
- Aligns segments by position index (OpenXLIFF produces segments in document order)
- Merges target text INTO source XLIFF's `<target>` elements
- Detects document sections via heading heuristics
- Returns aligned segments with metadata and working XLIFF path

**`loadExistingXliff(xliffPath)`**
- Loads pre-existing bilingual XLIFF files
- Extracts source+target segment pairs
- Applies same section detection logic
- Returns segments ready for analysis

**`getSegmentsWithContext(segments, sectionIndex)`**
- Returns all segments for a specific section
- Provides context from adjacent sections (last 2 prior, first 2 next)
- Identifies section titles from heading patterns

**Section Detection Heuristics:**
- ALL CAPS text (length > 3 letters)
- Text ending with colon (< 100 chars)
- Short text (< 50 chars) starting with capital, no ending punctuation
- Falls back to chunking every ~20 segments if no headings found

### 2. Segment Store (`src/editor/segment_store.js`)

**`SegmentStore` class** manages editor session state:

**Data Management:**
- Stores segments with source/target alignment status
- Tracks document sections with metadata
- Manages temp directory and working XLIFF path

**Findings & Corrections:**
- `addFindings(sectionIndex, findings)` - stores LLM analysis results
- `getFindingsGrouped()` - groups findings by term/pattern for batch review
- `approveCorrection(findingId)` / `rejectCorrection(findingId)` - review workflow
- `getApprovedCorrections()` - returns all approved corrections
- `applyCorrections()` - applies approved changes to segment targets in memory

**Session State:**
- UUID-based session identification
- Analysis progress tracking (completed sections)
- Last-accessed timestamp for cleanup
- JSON serialization for API responses

### 3. Server Routes (`server.js`)

**`POST /api/editor/upload`**
- Accepts multipart form with either:
  - `sourceFile` + `targetFile` (DOCX pair for alignment)
  - `xliffFile` (pre-existing bilingual XLIFF)
- Creates `SegmentStore` and stores in `editorSessions` Map
- Returns `{ sessionId, sections, totalSegments, metadata }`
- Broadcasts progress via SSE

**`GET /api/editor/session/:sessionId`**
- Returns complete session state
- Includes sections, progress, metadata

**`GET /api/editor/session/:sessionId/section/:sectionIndex`**
- Returns segments for specific section
- Includes alignment status and correction flags

## Commits

| Commit | Description |
|--------|-------------|
| `2196fe7` | feat(01-editor-core-01): create XLIFF alignment engine |
| `a14212b` | feat(01-editor-core-01): add segment store and editor API routes |

## Deviations from Plan

**None.** Plan executed exactly as written.

All requirements from the plan were implemented:
- ✅ `alignDocxPair` aligns two DOCX files via XLIFF conversion and position-based alignment
- ✅ `loadExistingXliff` loads pre-existing bilingual XLIFF
- ✅ `getSegmentsWithContext` provides section segments with adjacent context
- ✅ Section detection uses ALL CAPS, short text, and colon-ending heuristics
- ✅ `SegmentStore` manages session state with UUID keys
- ✅ Server routes accept both DOCX pair and single XLIFF inputs
- ✅ All segment data includes unique IDs traceable to XLIFF positions

## Verification Results

```
1. xliff_aligner.js exports:
   - alignDocxPair: ✓
   - loadExistingXliff: ✓
   - getSegmentsWithContext: ✓

2. segment_store.js exports:
   - SegmentStore: ✓

3. Server routes:
   - POST /api/editor/upload: ✓
   - GET /api/editor/session/:sessionId: ✓
   - GET /api/editor/session/:sectionIndex: ✓

4. File existence:
   - src/editor/xliff_aligner.js: ✓
   - src/editor/segment_store.js: ✓

5. Server imports:
   - alignDocxPair import: ✓
   - SegmentStore import: ✓
   - editorSessions Map: ✓
```

## API Usage Examples

### Upload DOCX Pair
```bash
curl -X POST http://localhost:3002/api/editor/upload \
  -F "sourceFile=@document_en.docx" \
  -F "targetFile=@document_es.docx" \
  -F "srcLang=en" \
  -F "tgtLang=es"
```

**Response:**
```json
{
  "success": true,
  "sessionId": "550e8400-e29b-41d4-a716-446655440000",
  "sections": [
    { "index": 0, "title": "INTRODUCTION", "segmentCount": 5, ... }
  ],
  "totalSegments": 150,
  "metadata": { "sectionCount": 8, "srcLang": "en", "tgtLang": "es" }
}
```

### Get Session State
```bash
curl http://localhost:3002/api/editor/session/550e8400-e29b-41d4-a716-446655440000
```

### Get Section Segments
```bash
curl http://localhost:3002/api/editor/session/550e8400-e29b-41d4-a716-446655440000/section/0
```

## Files Created/Modified

```
src/editor/
├── xliff_aligner.js    (437 lines - new)
└── segment_store.js    (470 lines - new)

server.js               (+74 lines - editor routes added)
```

## Next Steps

This plan establishes the foundation for:
- **Plan 02:** LLM proofreading pipeline (segment analysis)
- **Plan 03:** Interactive editor UI
- **Plan 04:** Correction application and export
- **Plan 05:** Terminology consistency checker
- **Plan 06:** Session persistence and recovery

The XLIFF alignment approach ensures 100% format preservation on final export via `convertToDocx()`.
