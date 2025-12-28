/**
 * Reproduce the "obtainedthe" bug
 */

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
    console.log('  Text nodes:', textNodes.map((n, i) => `[${i}]"${n.text}"`).join(' '));
    console.log('  Translation:', `"${translation}"`);
    console.log('  Words:', words);

    const results = [];

    // First, handle whitespace-only nodes (keep them as-is)
    for (const { node } of whitespaceNodes) {
        console.log(`  Whitespace node: "${node.text}" → keep as-is`);
    }

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

        console.log(`  Node ${index}: "${node.text}" → [${words.slice(startWord, endWord).join(', ')}] → "${nodeText}"`);

        results.push({ index, text: nodeText });
    }

    // Reconstruct in original order
    const allResults = [];
    let resultIdx = 0;
    let whiteIdx = 0;

    for (let i = 0; i < textNodes.length; i++) {
        const node = textNodes[i];
        if (node.text.trim().length === 0) {
            allResults.push(node.text);
        } else {
            allResults.push(results[resultIdx].text);
            resultIdx++;
        }
    }

    console.log('\nFinal output:');
    console.log(`  "${allResults.join('')}"`);

    return allResults.join('');
}

// REPRODUCE THE BUG
console.log('='.repeat(70));
console.log('BUG REPRODUCTION: "obtainedthe" instead of "obtained the"');
console.log('='.repeat(70));

// Spanish: "obtuvo las " + "siguientes" + " calificaciones"
// English should be: "obtained the " + "following" + " grades"
// But what if nodes are: "obtuvo" + " las " + "siguientes calificaciones"?

const bugCase = [
    { text: "obtuvo" },           // No trailing space!
    { text: " las " },             // Leading AND trailing space
    { text: "siguientes calificaciones" }  // No leading space!
];

const translation = "obtained the following grades";

const result = distributeTranslation(bugCase, translation);

console.log('\nExpected: "obtained the following grades"');
console.log(`Got:      "${result}"`);
console.log('BUG:', result === "obtained the following grades" ? 'FIXED ✓' : 'PRESENT ✗');

// What's happening:
// Node 0 "obtuvo" has NO trailing space → gets "obtained" (no trailing space)
// Node 1 " las " has leading+trailing space → gets " the "
// Node 2 "siguientes calificaciones" has NO leading space → gets "following grades"
// Result: "obtained" + " the " + "following grades" = "obtained the following grades"
// BUT if the distribution is wrong, we might get "obtainedthe following grades"

console.log('\n' + '='.repeat(70));
console.log('WORSE CASE: No spaces anywhere');
console.log('='.repeat(70));

const worseCase = [
    { text: "obtuvo las" },      // No trailing space
    { text: "siguientes" },       // No leading/trailing space
    { text: "calificaciones" }    // No leading space
];

const result2 = distributeTranslation(worseCase, translation);

console.log('\nExpected: "obtained the following grades"');
console.log(`Got:      "${result2}"`);
console.log('BUG:', result2 === "obtained the following grades" ? 'FIXED ✓' : 'PRESENT ✗');
