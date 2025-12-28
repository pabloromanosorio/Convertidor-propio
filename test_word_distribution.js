/**
 * Test word distribution across text nodes with preserved spacing
 */

// Simulate the patching logic
function distributeTranslation(textNodes, translation) {
    const nonWhitespaceNodes = [];
    const whitespaceNodes = [];

    for (let i = 0; i < textNodes.length; i++) {
        const node = textNodes[i];
        if (node.text.trim().length === 0) {
            whitespaceNodes.push({ index: i, node });
        } else {
            nonWhitespaceNodes.push({ index: i, node });
        }
    }

    const words = translation.split(/\s+/).filter(w => w.length > 0);
    const nonWhiteCount = nonWhitespaceNodes.length;

    console.log('\nInput:');
    console.log('  Text nodes:', textNodes.map(n => `"${n.text}"`).join(' + '));
    console.log('  Translation:', `"${translation}"`);
    console.log('  Words:', words);
    console.log('  Non-whitespace nodes:', nonWhiteCount);

    const results = [];

    // Distribute translated words across non-whitespace nodes
    for (let i = 0; i < nonWhiteCount; i++) {
        const { index, node } = nonWhitespaceNodes[i];

        const startWord = Math.floor(i * words.length / nonWhiteCount);
        const endWord = Math.floor((i + 1) * words.length / nonWhiteCount);
        let nodeText = words.slice(startWord, endWord).join(' ');

        // Preserve leading/trailing spaces from original node
        const originalLeading = node.text.match(/^\s+/)?.[0] || '';
        const originalTrailing = node.text.match(/\s+$/)?.[0] || '';

        if (originalLeading) nodeText = originalLeading + nodeText;
        if (originalTrailing) nodeText = nodeText + originalTrailing;

        results.push({
            originalNode: node.text,
            words: words.slice(startWord, endWord),
            finalText: nodeText
        });
    }

    console.log('\nDistribution:');
    results.forEach((r, i) => {
        console.log(`  Node ${i}: "${r.originalNode}" → words [${r.words.join(', ')}] → "${r.finalText}"`);
    });

    // Include whitespace nodes in final output
    const allResults = [];
    let nonWhiteIdx = 0;
    for (let i = 0; i < textNodes.length; i++) {
        const node = textNodes[i];
        if (node.text.trim().length === 0) {
            // Whitespace node - keep as-is
            allResults.push(node.text);
        } else {
            // Non-whitespace node - use distributed translation
            allResults.push(results[nonWhiteIdx].finalText);
            nonWhiteIdx++;
        }
    }

    console.log('\nFinal output (with whitespace nodes):');
    const final = allResults.join('');
    console.log(`  "${final}"`);

    return final;
}

// Test Case 1: Spanish with trailing space in first node
console.log('='.repeat(70));
console.log('TEST 1: Spanish text with bold (space after first word)');
console.log('='.repeat(70));

const textNodes1 = [
    { text: "obtuvo las " },  // Spanish "obtained the" with trailing space
    { text: "siguientes calificaciones" },  // "following grades"
    { text: " finales:" }  // " final:"
];

const translation1 = "obtained the following final grades:";
const result1 = distributeTranslation(textNodes1, translation1);

console.log('\nProblem: First node has trailing space, but in English we need it elsewhere');
console.log('Expected: "obtained the following final grades:"');
console.log(`Got:      "${result1}"`);
console.log('Correct:', result1 === "obtained the following final grades:");

// Test Case 2: What if LLM translates with different word count?
console.log('\n' + '='.repeat(70));
console.log('TEST 2: Translation has fewer words than nodes');
console.log('='.repeat(70));

const textNodes2 = [
    { text: "That " },
    { text: "HEIDY" },
    { text: " " },  // Whitespace node between names
    { text: "MARCELA" },
    { text: " took" }
];

const translation2 = "That HEIDY MARCELA took";  // Correct translation
const result2 = distributeTranslation(textNodes2, translation2);

console.log('\nExpected: "That HEIDY MARCELA took"');
console.log(`Got:      "${result2}"`);
console.log('Correct:', result2 === "That HEIDY MARCELA took");
