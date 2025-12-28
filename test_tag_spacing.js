/**
 * Debug script to test text extraction and spacing with formatted text
 * Run with: node test_tag_spacing.js
 */

const testXML = `
<w:p>
    <w:r><w:t>That HEIDY MARCELA </w:t></w:r>
    <w:r><w:rPr><w:b/></w:rPr><w:t>MONTES HERNÁNDEZ</w:t></w:r>
    <w:r><w:t> with Citizenship ID No. 1022400028 took the</w:t></w:r>
</w:p>
`;

// Extract text runs like the translator does
function extractTextRunsFromBlock(blockXml, blockStartPos) {
    const texts = [];
    const textRegex = /<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>/g;
    let match;

    while ((match = textRegex.exec(blockXml)) !== null) {
        const text = match[1];
        // Keep ALL text nodes, even whitespace-only ones
        if (text !== undefined && text !== null) {
            texts.push({
                text: text,
                localStart: match.index,
                localEnd: match.index + match[0].length,
                globalStart: blockStartPos + match.index,
                globalEnd: blockStartPos + match.index + match[0].length,
                fullMatch: match[0]
            });
        }
    }

    return texts;
}

console.log('Testing text extraction from formatted paragraph:');
console.log('='.repeat(60));

const blockStartPos = 0;
const textNodes = extractTextRunsFromBlock(testXML, blockStartPos);

console.log('\nExtracted text nodes:');
textNodes.forEach((node, i) => {
    console.log(`Node ${i}:`);
    console.log(`  Text: "${node.text}"`);
    console.log(`  Length: ${node.text.length}`);
    console.log(`  Is whitespace only: ${node.text.trim().length === 0}`);
    console.log(`  Full match: ${node.fullMatch}`);
    console.log();
});

console.log('Full text combined:');
const fullText = textNodes.map(n => n.text).join('');
console.log(`"${fullText}"`);

console.log('\n' + '='.repeat(60));
console.log('Expected: "That HEIDY MARCELA MONTES HERNÁNDEZ with Citizenship ID No. 1022400028 took the"');
console.log(`Actual:   "${fullText}"`);
console.log('Match:', fullText === "That HEIDY MARCELA MONTES HERNÁNDEZ with Citizenship ID No. 1022400028 took the");
