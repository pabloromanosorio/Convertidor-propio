
/**
 * Test script to reproduce tag leakage issues
 */

// --- Code from src/translator.js ---

/**
 * Parse text with [b], [i], [u] tags into segments
 * Returns array: [{ text: "string", tags: Set(['b', 'u']) }]
 * Handles simple nesting.
 */
function parseTaggedText(text) {
    const segments = [];

    // Tokenize by tags (allow whitespace inside, e.g. [ b ])
    const tokenRegex = /(\[\s*\/?\s*(?:b|i|u)\s*\])/g;
    const parts = text.split(tokenRegex);

    let activeTags = new Set();
    const isTagRegex = /^\[\s*(b|i|u)\s*\]$/; // Case sensitive?
    const isCloseTagRegex = /^\[\s*\/\s*(b|i|u)\s*\]$/; // Case sensitive?

    for (const part of parts) {
        if (!part) continue;

        const openMatch = part.match(isTagRegex);
        const closeMatch = part.match(isCloseTagRegex);

        if (openMatch) {
            // Opening tag (e.g. [b])
            activeTags.add(openMatch[1]); // 'b'
        } else if (closeMatch) {
            // Closing tag (e.g. [/b])
            activeTags.delete(closeMatch[1]); // 'b'
        } else {
            // Text content
            // CLEANUP: Strip any trailing partial tags that regex missed
            let cleanPart = part.replace(/\[\s*\/?\s*(?:b|i|u)?\s*$/i, '');

            if (cleanPart) {
                segments.push({
                    text: cleanPart,
                    tags: new Set(activeTags) // Clone current state
                });
            }
        }
    }

    return segments;
}

/**
 * Distribute translation text to nodes based on matching formatting tags
 * Falls back to ratio distribution if tags don't match well
 */
function distributeByTags(textNodes, translation) {
    // 1. Parse translation into formatted segments
    const tagSegments = parseTaggedText(translation);

    // Quick check: If no tags found in translation, return null (trigger fallback)
    const hasTags = tagSegments.some(s => s.tags.size > 0);
    if (!hasTags) return null;

    // 2. Prepare text streams
    const streams = new Map(); // key: "b,u", value: string

    for (const seg of tagSegments) {
        const key = Array.from(seg.tags).sort().join(',');
        const currentText = streams.get(key) || '';
        streams.set(key, currentText + seg.text);
    }

    return streams; // Modified to just return streams for inspection
}


// --- Test Cases ---

function runTest(name, docNodes, translation) {
    console.log(`\n--- Test: ${name} ---`);
    console.log(`Translation: "${translation}"`);

    // Check Parse Result
    const parsed = parseTaggedText(translation);
    console.log("Parsed Segments:", JSON.stringify(parsed.map(s => ({ text: s.text, tags: Array.from(s.tags) }))));

    // Check Distribute Result (mocking nodes)
    const streams = distributeByTags(docNodes, translation);
    if (streams) {
        console.log("Streams:", Object.fromEntries(streams));
    } else {
        console.log("Streams: NULL (Fallback triggered)");
    }

    // Check Fallback Cleanup Regex
    const cleanFallback = translation.replace(/\[\s*\/?\s*(?:b|i|u)\s*\]/gi, '');
    console.log(`Fallback Cleanup Result: "${cleanFallback}"`);
}

// Mock nodes (irrelevant for stream extraction really, but good for context)
const mockNodes = [{ text: "foo", formatting: { bold: true } }];

// Scenarios
runTest("Normal Lowercase", mockNodes, "Hola [b]Mundo[/b]");
runTest("Uppercase Tags", mockNodes, "Hola [B]Mundo[/B]"); // Suspected failure
runTest("Mixed Case Tags", mockNodes, "Hola [B]Mundo[/b]");
runTest("Space in Tags", mockNodes, "Hola [ b ]Mundo[/ b ]");
runTest("Unbalanced/Broken", mockNodes, "Hola [b]Mundo");
runTest("Malformed", mockNodes, "Hola [bMundo");

