const { generateText } = require('../providers');

/**
 * Ingester Module
 * Digests "Passive Knowledge" (Style Guides, Reference Docs) into "Active Rules".
 */

const SYSTEM_PROMPT = `
You are an Expert Translation Architect.
Your task is to analyze a "Style Guide" or "Reference Document" and extract structured rules.

OUTPUT FORMAT (JSON ONLY):
{
  "tone": "Formal, Technical, etc.",
  "dos": ["Always use 'Cliente' for 'Customer'", "Use 'Usted'"],
  "donts": ["Never use 'Usuario'", "No passive voice"],
  "formatting": ["Dates: DD/MM/YYYY", "Currency: $1.000,00"],
  "glossary_candiates": {
     "SourceTerm": "TargetTerm" 
  }
}
Ignore generic text. Extract ONLY specific, actionable constraints.
`;

/**
 * Ingess a style guide text and returns structured rules.
 * @param {string} textContent - The raw text of the style guide (PDF/TXT content).
 * @param {object} options - Optional { model: 'gemini-2.0-flash' }
 */
async function ingestStyleGuide(textContent, options = {}) {
    const model = options.model || 'gemini-2.0-flash';

    const userPrompt = `
    Analyze the following Text and extract Translation Rules.
    
    TEXT CONTENT:
    """
    ${textContent.substring(0, 30000)} 
    """
    (Text truncated to 30k chars for safety)
    `;

    try {
        console.log(`[📥 INGESTER] Analyzing Style Guide (${textContent.length} chars)...`);
        let response = await generateText(SYSTEM_PROMPT + "\n" + userPrompt, { model });

        if (response.text) response = response.text;

        // Clean JSON
        const jsonStr = response.replace(/```json/g, '').replace(/```/g, '').trim();
        const rules = JSON.parse(jsonStr);

        console.log(`[✅ INGESTER] Extracted ${rules.dos?.length || 0} DOs and ${rules.donts?.length || 0} DON'Ts.`);
        return rules;

    } catch (error) {
        console.error("[❌ INGESTER] Failed:", error);
        return { error: error.message };
    }
}

/**
 * FUTURE: ingestAlignment(sourceText, targetText)
 * To extracting glossary from previous translations (bilingual alignment).
 */

module.exports = { ingestStyleGuide };
