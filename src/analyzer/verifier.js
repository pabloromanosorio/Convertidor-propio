const { generateText } = require('../providers');

/**
 * Stage 2: Semantic Verification (The Brain)
 * Takes raw candidates from Stage 1 and uses LLM to:
 * 1. Filter out noise (generic words).
 * 2. Identify defined vs undefined acronyms.
 * 3. Flag terms that need external research.
 * 
 * @param {object} candidates - Output from extractor.js
 * @param {string} contextSnippet - First ~2k chars of document for context
 */
async function verifyCandidates(candidates, contextSnippet) {
    const SYSTEM_PROMPT = `
    You are a Lead Terminologist. Review these extracted candidates from a technical document.
    
    --- DOCUMENT CONTEXT ---
    ${contextSnippet.substring(0, 2000)}...
    ------------------------

    --- CANDIDATES ---
    ${JSON.stringify(candidates, null, 2)}
    ------------------

    YOUR TASK:
    1. Filter: Remove generic words (e.g., "The Team", "London") and obvious junk. Keep only Domain-Specific Terms.
    2. Acronym Check: For each acronym, is it defined in the text? If NO, mark as "needs_research".
    3. Consistency: Group variations (e.g., "Service Level Agreement" and "SLA").

    Return INVALID JSON will crash the system. Return ONLY valid JSON:
    {
        "glossary": {
            "SLA": { "definition": "Service Level Agreement", "source": "text", "category": "Acronym" },
            "Apex Labs": { "definition": "Organization mentioned in text", "source": "text", "category": "Entity" }
        },
        "research_queue": [
            "DPU" 
        ]
    }
    `;

    try {
        let response = await generateText(SYSTEM_PROMPT, { model: "gemini-2.0-flash" });
        if (response.text) response = response.text; // Handle object return

        // Clean JSON
        const jsonStr = response.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error("Verifier Logic Failed:", e);
        return { glossary: [], research_queue: [] }; // Fail safe
    }
}

module.exports = { verifyCandidates };
