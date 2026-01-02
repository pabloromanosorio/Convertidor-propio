const { generateText } = require('../providers');

/**
 * Stage 4: External Research Agent (The "Google" Step)
 * 1. Takes parameters (Ambiguous Term, Context).
 * 2. Generates a Search Query.
 * 3. EXECUTES Search (Mocked for now).
 * 4. Synthesizes findings into a Definition.
 */

// MOCK SEARCH FUNCTION (To be replaced by real API later)
async function mockSearchWeb(query) {
    console.log(`[🔎 MOCK SEARCH] Querying: "${query}"`);
    // Simulate latency
    await new Promise(r => setTimeout(r, 800));

    // Simulate results based on query content
    if (query.includes("DPU")) {
        return `
        Results for DPU:
        1. DPU (Data Processing Unit) - NVIDIA's new class of programmable processor.
        2. Delivered Place Unloaded (DPU) - Incoterms 2020 rule.
        3. DPU - Disease Prevention Unit.
        `;
    }
    if (query.includes("SLA")) {
        return `
        Results for SLA:
        1. Service Level Agreement (SLA) - A commitment between a service provider and a client.
        2. SLA Printing - Stereolithography apparatus.
        `;
    }
    return "No relevant results found.";
}

/**
 * The Research Loop
 * @param {string} term - The term to research (e.g., "DPU")
 * @param {string} context - The sentence where it appeared
 * @returns {object} - { definition, source, confidence }
 */
async function researchTerm(term, context) {
    // 1. Generate Search Query (LLM)
    const queryPrompt = `
    You are an Expert Researcher.
    Goal: Find the definition of "${term}" as used in this specific context: "${context}".
    Constraint: IGNORE auto-generated dictionaries (Linguee, Reverso, Glosbe). Prioritize official documentation, government sites, or primary corporate pages.
    Output: A single optimized Google Search Query (e.g. "site:gov.co DPU Incoterms definition" or "DPU meaning logistics -site:linguee.com").
    `;
    let query = await generateText(queryPrompt, { model: "gemini-2.0-flash" });
    if (query.text) query = query.text; // Handle object return
    query = query.replace(/"/g, '').trim(); // Clean up

    // 2. Execute Search (Tool Call)
    const searchResults = await mockSearchWeb(query);

    // 3. Synthesize Answer (RAG)
    const synthesisPrompt = `
    You are a Lead Terminologist.
    
    TERM: "${term}"
    Context: "${context}"
    Search Results: ${JSON.stringify(searchResults)}

    Analyze these results. Synthesize a definition.
    CRITICAL: Ignore any source that looks like an SEO-spam dictionary or machine translation (e.g. Linguee snippets often have low quality).
    If the search results are from low-quality domains, mark confidence as LOW.
    
    Based *only* on the search results, define "${term}" for this specific context.
    If the search results identify multiple meanings (e.g. Medical vs Legal), use the CONTEXT to pick the right one.
    
    Return JSON:
    {
        "definition": "The exact definition...",
        "expanded_form": "Full expansion if acronym (or null)",
        "source": "Citation from search results",
        "confidence": "HIGH" | "LOW" (Low if ambiguous)
    }
    `;

    try {
        let response = await generateText(synthesisPrompt, { model: "gemini-2.0-flash" });
        if (response.text) response = response.text; // Handle object return
        const jsonStr = response.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error("Research Synthesis Failed:", e);
        return { definition: "Research failed", confidence: "LOW" };
    }
}

/**
 * Batch Processor
 * @param {string[]} terms - List of terms to research
 * @param {string} fullText - Full document text (to find context)
 */
async function researchBatch(terms, fullText) {
    const results = {};

    for (const term of terms) {
        // Find context (simple regex find)
        const sentenceRegex = new RegExp(`[^.?!]*${term}[^.?!]*[.?!]`);
        const match = fullText.match(sentenceRegex);
        const context = match ? match[0].trim() : "Context not found.";

        console.log(`Checking ${term}...`);
        results[term] = await researchTerm(term, context);
    }
    return results;
}

module.exports = { researchBatch, researchTerm };
