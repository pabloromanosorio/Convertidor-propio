/**
 * Test the fix for "obtainedthe" bug
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

        // CRITICAL FIX: Ensure space after each node except the last one
        const isLastNode = i === nonWhiteCount - 1;
        const nextNodeIsWhitespace = !isLastNode && i + 1 < textNodes.length &&
                                    textNodes.findIndex((n, idx) => idx > index && n.text.trim().length === 0) === index + 1;

        if (!isLastNode && !originalTrailing && !nextNodeIsWhitespace) {
            nodeText = nodeText + ' ';
        }

        console.log(`  Node ${index}: "${node.text}" → "${nodeText}" (added space: ${!isLastNode && !originalTrailing && !nextNodeIsWhitespace})`);

        results.push({ index, text: nodeText });
    }

    // Reconstruct in original order
    const allResults = [];
    let resultIdx = 0;

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

console.log('='.repeat(70));
console.log('TEST 1: Bug case - no spaces between nodes');
console.log('='.repeat(70));

const bugCase = [
    { text: "obtuvo las" },
    { text: "siguientes" },
    { text: "calificaciones" }
];

const translation1 = "obtained the following grades";
const result1 = distributeTranslation(bugCase, translation1);

console.log('\nExpected: "obtained the following grades"');
console.log(`Got:      "${result1}"`);
console.log(result1 === "obtained the following grades" ? '✓ FIXED' : '✗ STILL BROKEN');

console.log('\n' + '='.repeat(70));
console.log('TEST 2: With whitespace nodes between');
console.log('='.repeat(70));

const case2 = [
    { text: "obtuvo" },
    { text: " " },     // Whitespace node
    { text: "las" },
    { text: " " },     // Whitespace node
    { text: "siguientes" }
];

const translation2 = "obtained the following";
const result2 = distributeTranslation(case2, translation2);

console.log('\nExpected: "obtained the following"');
console.log(`Got:      "${result2}"`);
console.log(result2 === "obtained the following" ? '✓ CORRECT' : '✗ WRONG');

console.log('\n' + '='.repeat(70));
console.log('TEST 3: Original spaces preserved');
console.log('='.repeat(70));

const case3 = [
    { text: "obtuvo las " },   // Has trailing space
    { text: "siguientes" }      // No trailing space
];

const translation3 = "obtained the following";
const result3 = distributeTranslation(case3, translation3);

console.log('\nExpected: "obtained the following"');
console.log(`Got:      "${result3}"`);
console.log(result3 === "obtained the following" ? '✓ CORRECT' : '✗ WRONG');
