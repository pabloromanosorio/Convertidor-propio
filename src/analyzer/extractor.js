const nlp = require('compromise');

/**
 * Stage 1: Brute Force & NLP Extraction
 * Analyzes text to find potential glossary terms, entities, and acronyms.
 * 
 * @param {string} text - The raw text of the document (or a large chunk)
 * @returns {object} - Categorized candidates
 */
function extractCandidates(text) {
    const doc = nlp(text);

    // 1. Named Entities (People, Places, Organizations)
    // Compromise is good at context: "Mr. Smith" -> Person, "Google Inc" -> Org
    const people = doc.people().out('array');
    const places = doc.places().out('array');
    const orgs = doc.organizations().out('array');

    // 2. Acronyms (Custom Logic + NLP)
    // Find terms that are 2-6 chars, all caps, no dots (or dots like U.S.A)
    const rawAcronyms = doc.acronyms().out('array');

    // 3. Technical Terms / Noun Phrases
    // We want "Adjective + Noun" (e.g., "Solar Panel") or "Noun + Noun" (e.g., "Data Base")
    // but NOT generic ones like "Good day".
    // Strategy: Grab all Noun Phrases, filter by length/capitalization later
    const nounPhrases = doc.nouns().out('frequency'); // Returns [{ normal: 'solar panel', count: 2 }, ...]

    // 4. Custom: Find "Capitalized Phrases" that NLP might miss
    // useful for specific project names "Project Apollo"
    const terms = [];
    doc.terms().json().forEach(t => {
        // t.terms[0].tags is usually an array of strings in .json() output
        const tags = t.terms[0].tags || [];
        if (tags.includes('TitleCase') && !tags.includes('Person') && !tags.includes('Place')) {
            terms.push(t.text);
        }
    });

    // Helper to clean punctuation (e.g. "Smith," -> "Smith")
    const clean = (arr) => [...new Set(arr.map(s => s.replace(/[.,;:]$/, '')))];

    // Flatten entities for the analyzer
    const flatEntities = [
        ...clean(people).map(t => ({ text: t, type: 'Person' })),
        ...clean(places).map(t => ({ text: t, type: 'Place' })),
        ...clean(orgs).map(t => ({ text: t, type: 'Organization' }))
    ];

    return {
        entities: flatEntities, // Now an Array, not an Object
        acronyms: clean(rawAcronyms).map(a => ({ text: a.replace(/[()]/g, ''), type: 'Acronym' })),
        nounPhrases: nounPhrases.map(n => ({ text: n.normal, count: n.count, type: 'NounPhrase' })),
        statInfo: {
            totalWords: doc.wordCount(),
            sentenceCount: doc.sentences().length
        }
    };
}

module.exports = { extractCandidates };
