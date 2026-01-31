# PaddleOCR-VL-1.5 Investigation Report

**Date:** January 31, 2026
**Branch:** `claude/investigate-paddleocr-81DRF`
**Purpose:** Evaluate PaddleOCR-VL-1.5 for document conversion in Convertidor Propio

---

## Executive Summary

**PaddleOCR-VL-1.5** is a promising alternative/supplement to the current LLM vision approach. Released January 29, 2026, it achieves **94.5% accuracy** on document parsing with only 0.9B parameters - outperforming massive models like Qwen3-VL-235B and Gemini-3 Pro on document-specific tasks.

### Key Findings

| Aspect | Current System | PaddleOCR-VL-1.5 |
|--------|---------------|------------------|
| **Approach** | LLM generates docx.js code | VLM extracts structured data → Markdown/JSON |
| **Cost** | ~$0.05-0.15/page (API calls) | Free (local) or low-cost (hosted) |
| **Speed** | ~5-15s/page | ~1-3s/page (GPU) |
| **Accuracy** | Variable by model | 94.5% on OmniDocBench |
| **Output** | docx.js code → DOCX | Markdown/JSON → needs conversion |
| **Tables** | Direct DOCX tables | Markdown tables → needs conversion |
| **Runtime** | Node.js | Python (requires bridge) |

**Recommendation:** PaddleOCR-VL-1.5 is viable for a hybrid approach or as a cost-effective alternative. Integration would require a Python microservice.

---

## 1. What is PaddleOCR-VL-1.5?

A **0.9B parameter Vision-Language Model** from Baidu/PaddlePaddle specifically designed for document parsing. It's a significant upgrade from traditional OCR, combining:

- **PP-DocLayoutV3**: Layout analysis with polygon detection
- **Native Resolution Visual Encoder**: Handles high-res document images
- **ERNIE-4.5-0.3B**: Lightweight language model for text understanding

### Supported Tasks

1. **Document Parsing** - Full page extraction to Markdown/JSON
2. **OCR** - Text recognition with position coordinates
3. **Table Recognition** - Complex table structure extraction
4. **Formula Recognition** - Mathematical formula detection (LaTeX output)
5. **Chart Recognition** - Chart data extraction
6. **Seal Recognition** (NEW in 1.5) - Chinese seal/stamp detection
7. **Text Spotting** (NEW in 1.5) - Text-line localization with polygons

### Key Innovations in v1.5

- **Irregular Box Localization**: First model supporting polygon detection for skewed/folded documents
- **Cross-page Features**: Automatic table merging and heading recognition across pages
- **Real-world Robustness**: 92% accuracy on scanning, folding, tilting, screen capture scenarios

---

## 2. Comparison with Current System

### Current Architecture (Convertidor Propio)

```
PDF → pdftoppm (200 DPI PNG) → LLM Vision (Gemini/Claude/OpenAI)
                                    ↓
                              docx.js code generation
                                    ↓
                              Sandbox execution → DOCX
```

**Strengths:**
- Direct DOCX output with precise formatting
- Flexible prompt engineering for edge cases
- Multi-provider redundancy

**Weaknesses:**
- Expensive API calls (~$0.05-0.15/page)
- Rate limits and latency
- Inconsistent results between providers
- Code generation can fail validation

### PaddleOCR-VL-1.5 Architecture

```
PDF → Image → PaddleOCR-VL-1.5
                    ↓
            Markdown/JSON output
                    ↓
            Post-processing → DOCX
```

**Strengths:**
- Free (local deployment) or very low cost
- Consistent, deterministic output
- Purpose-built for documents (94.5% accuracy)
- Fast batch processing
- Handles skewed/folded documents

**Weaknesses:**
- Python-only (needs bridge for Node.js)
- Requires GPU for optimal performance
- Markdown output needs DOCX conversion
- Less flexible for custom formatting rules

---

## 3. Integration Options

### Option A: Full Replacement

Replace the LLM vision step entirely with PaddleOCR-VL-1.5.

```
PDF → Images → PaddleOCR Python Service → Markdown
                                              ↓
                                    markdown-to-docx (Node.js)
```

**Pros:** Lowest cost, fastest, most consistent
**Cons:** Loses fine-grained docx.js control, requires Markdown→DOCX converter

### Option B: Hybrid Pre-processing

Use PaddleOCR for initial extraction, LLM for code generation.

```
PDF → Images → PaddleOCR → Structured Text + Layout JSON
                                    ↓
                    LLM (with extracted text as context)
                                    ↓
                            docx.js code
```

**Pros:** Best of both worlds - accurate OCR + flexible code generation
**Cons:** Still has LLM costs (but reduced token usage)

### Option C: Fallback System

Use PaddleOCR by default, fall back to LLM for complex pages.

```
PDF → Images → PaddleOCR → Confidence Check
                    ↓              ↓
            (High conf)      (Low conf)
                    ↓              ↓
              Markdown      LLM Vision
                    ↓              ↓
                    → Merge → DOCX
```

**Pros:** Cost optimization, handles edge cases
**Cons:** More complex logic, inconsistent output formats

---

## 4. Technical Implementation

### Python Microservice Setup

```python
# paddleocr_service.py
from flask import Flask, request, jsonify
from paddleocr import PaddleOCRVL
import base64
import tempfile
import os

app = Flask(__name__)
pipeline = PaddleOCRVL()

@app.route('/parse', methods=['POST'])
def parse_document():
    data = request.json

    # Handle base64 image or file path
    if 'image_base64' in data:
        with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as f:
            f.write(base64.b64decode(data['image_base64']))
            image_path = f.name
    else:
        image_path = data['image_path']

    try:
        output = pipeline.predict(image_path)
        result = {
            'markdown': output[0].to_markdown(),
            'json': output[0].to_json(),
            'success': True
        }
    except Exception as e:
        result = {'success': False, 'error': str(e)}
    finally:
        if 'image_base64' in data:
            os.unlink(image_path)

    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5001)
```

### Node.js Client Integration

```javascript
// src/paddleocr_client.js
const axios = require('axios');
const fs = require('fs');

const PADDLEOCR_URL = process.env.PADDLEOCR_URL || 'http://localhost:5001';

async function parseWithPaddleOCR(imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64 = imageBuffer.toString('base64');

    const response = await axios.post(`${PADDLEOCR_URL}/parse`, {
        image_base64: base64
    }, {
        timeout: 60000
    });

    if (!response.data.success) {
        throw new Error(`PaddleOCR failed: ${response.data.error}`);
    }

    return {
        markdown: response.data.markdown,
        json: response.data.json
    };
}

module.exports = { parseWithPaddleOCR };
```

### Markdown to DOCX Conversion

For converting PaddleOCR's Markdown output to DOCX:

```javascript
// Using pandoc (most reliable)
const { execSync } = require('child_process');

function markdownToDocx(markdown, outputPath) {
    const tempMd = '/tmp/temp_doc.md';
    fs.writeFileSync(tempMd, markdown);
    execSync(`pandoc ${tempMd} -o ${outputPath}`);
    return outputPath;
}

// OR using unified/remark ecosystem
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkDocx = require('remark-docx');
```

---

## 5. Hardware Requirements

### Minimum (CPU - Slow)
- 8GB RAM
- Any modern CPU
- ~10-30s per page

### Recommended (GPU)
- NVIDIA GPU with 4GB+ VRAM
- CUDA 11.8+ or ROCm 6.0+
- ~1-3s per page

### Production (Docker)
```bash
# NVIDIA GPU
docker run --rm --gpus all -p 5001:5001 \
  paddlepaddle/paddleocr-genai-server:latest-nvidia-gpu

# AMD GPU (ROCm)
docker run --rm --device=/dev/kfd --device=/dev/dri -p 5001:5001 \
  paddlepaddle/paddleocr-genai-server:latest-rocm
```

---

## 6. Benchmarks & Accuracy

### OmniDocBench v1.5 Results

| Model | Overall | Text-Edit | Formula-CDM | Table-TEDS |
|-------|---------|-----------|-------------|------------|
| **PaddleOCR-VL-1.5** | **94.5%** | 0.035 | 94.21% | 92.76% |
| Gemini-3 Pro | 89.2% | 0.052 | 88.4% | 87.1% |
| Qwen3-VL-235B | 91.1% | 0.041 | 90.2% | 89.5% |
| MinerU 2.5 | 85.3% | 0.068 | 82.1% | 84.2% |

### Real-World Robustness (Real5-OmniDocBench)

| Scenario | PaddleOCR-VL-1.5 | Previous SOTA |
|----------|------------------|---------------|
| Scanning | 93.2% | 84.1% |
| Folding | 89.8% | 78.2% |
| Tilting | 91.7% | 77.5% |
| Screen Capture | 94.1% | 88.3% |
| Lighting Changes | 91.4% | 82.6% |

---

## 7. Cost Analysis

### Current System (Per 100 Pages)

| Provider | Cost/Page | 100 Pages |
|----------|-----------|-----------|
| Gemini-3 Pro | ~$0.05 | $5.00 |
| Claude Opus | ~$0.15 | $15.00 |
| GPT-4o | ~$0.08 | $8.00 |

### PaddleOCR-VL-1.5 (Per 100 Pages)

| Deployment | Cost/Page | 100 Pages |
|------------|-----------|-----------|
| Local GPU | ~$0.001 (electricity) | $0.10 |
| Cloud GPU (A100) | ~$0.005 | $0.50 |
| Baidu API | ~$0.01 | $1.00 |

**Potential Savings:** 80-95% cost reduction

---

## 8. Limitations & Considerations

### What PaddleOCR-VL-1.5 Does Well
- Standard document layouts
- Tables (even complex merged cells)
- Mathematical formulas
- Multi-language text
- Skewed/damaged documents

### What It May Struggle With
- Highly stylized/artistic layouts
- Handwritten text (limited support)
- Very low resolution images
- Non-standard document types

### Integration Challenges
1. **Language Bridge**: Python ↔ Node.js communication
2. **Markdown Fidelity**: Converting Markdown tables to DOCX tables with exact formatting
3. **GPU Dependency**: Optimal performance requires GPU
4. **Formatting Precision**: Current system's docx.js approach allows finer control

---

## 9. Recommendation

### For Convertidor Propio

**Recommended Approach: Hybrid (Option B)**

1. **Phase 1 (Quick Win):**
   - Deploy PaddleOCR-VL-1.5 as a microservice
   - Use it for text extraction (OCR accuracy boost)
   - Continue using LLM for docx.js code generation
   - Benefit: Reduced token costs, better OCR accuracy

2. **Phase 2 (Cost Optimization):**
   - Develop Markdown→DOCX converter for simple documents
   - Use PaddleOCR-only path for standard layouts
   - Fall back to LLM for complex pages
   - Benefit: Major cost reduction (80%+)

3. **Phase 3 (Full Migration):**
   - Build comprehensive Markdown→docx.js converter
   - Retire LLM vision for conversion
   - Keep LLM only for translation
   - Benefit: Near-zero conversion costs

### Implementation Priority

```
[HIGH] Set up PaddleOCR Python microservice
[HIGH] Create Node.js client wrapper
[MED]  Develop Markdown→DOCX converter
[MED]  Add confidence scoring for fallback logic
[LOW]  GPU infrastructure setup
```

---

## 10. Next Steps

1. **Prototype**: Create minimal PaddleOCR microservice
2. **Test**: Run on sample documents from Convertidor Propio
3. **Benchmark**: Compare output quality vs current system
4. **Integrate**: Implement chosen integration pattern
5. **Deploy**: Set up GPU infrastructure for production

---

## References

- [PaddleOCR-VL-1.5 HuggingFace](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.5)
- [PaddleOCR Official Documentation](http://www.paddleocr.ai/main/en/index.html)
- [arXiv Paper: 2601.21957](https://arxiv.org/abs/2601.21957)
- [AMD ROCm Integration Guide](https://www.amd.com/en/developer/resources/technical-articles/2026/unlocking-high-performance-document-parsing-of-paddleocr-vl-1-5-.html)
