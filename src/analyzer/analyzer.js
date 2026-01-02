const { extractCandidates } = require('./extractor');
const { verifyCandidates } = require('./verifier');
const { researchBatch, researchTerm } = require('./researcher');
const { ingestStyleGuide } = require('./ingester');

/**
 * Hybrid Analyzer Orchestrator
 * Coordinates: Extraction -> Verification -> Research -> Ingestion
 */

async function analyzeDocument(textSegment, options = {}) {
    console.log("--- 🕵️‍♂️ Starting Hybrid Analysis ---");
    const {
        styleGuideText = null,
        previousTranslation = null,
        domain = "General"
    } = options;

    const report = {
        glossary: {},
        styleRules: {},
        issues: [],
        timestamp: new Date().toISOString()
    };

    // --- Stage 1: Intelligent Extraction (Local NLP) ---
    console.log(`[Stage 1] Extracting candidates from ${textSegment.length} chars...`);
    const extraction = extractCandidates(textSegment);
    console.log(`   -> Found ${extraction.entities.length} entities, ${extraction.acronyms.length} acronyms.`);

    // --- Stage 2: Semantic Verification (LLM) ---
    console.log("[Stage 2] Verifying candidates with LLM...");
    const candidates = [
        ...extraction.entities.map(e => e.text),
        ...extraction.acronyms.map(a => a.text),
        ...extraction.nounPhrases.map(n => n.text)
    ];

    // De-duplicate
    const uniqueCandidates = [...new Set(candidates)];
    const verifiedData = await verifyCandidates(uniqueCandidates, textSegment);

    // Merge verified glossary
    if (verifiedData.glossary) {
        Object.assign(report.glossary, verifiedData.glossary);
    }

    // --- Stage 3: Research Gaps (Agentic Search) ---
    if (verifiedData.research_queue && verifiedData.research_queue.length > 0) {
        console.log(`[Stage 3] Researching ${verifiedData.research_queue.length} ambiguous terms...`);
        // Use the context from the segment for research
        const researchResults = await researchBatch(verifiedData.research_queue, textSegment);

        // Merge research results into glossary
        for (const [term, data] of Object.entries(researchResults)) {
            if (data.definition) {
                report.glossary[term] = {
                    definition: data.definition,
                    source: data.source,
                    confidence: data.confidence,
                    is_researched: true
                };
            }
        }
    }

    // --- Stage 4: Ingestion (Style Guides) ---
    if (styleGuideText) {
        console.log("[Stage 4] Ingesting Style Guide...");
        const styleRules = await ingestStyleGuide(styleGuideText);
        report.styleRules = styleRules;

        // Merge explicit glossary from style guide finding
        if (styleRules.glossary_candiates) {
            Object.assign(report.glossary, styleRules.glossary_candiates);
        }
    }

    console.log("--- ✅ Analysis Complete ---");
    return report;
}

module.exports = { analyzeDocument };
