/**
 * Test formatting detection and analysis
 * Run with: node test_formatting_detection.js
 */

// Copy the functions from translator.js
function detectRunFormatting(runXml) {
    const formatting = {
        bold: false,
        italic: false,
        underline: false
    };

    // Check for run properties <w:rPr>
    const rPrMatch = runXml.match(/<w:rPr>([\s\S]*?)<\/w:rPr>/);
    if (!rPrMatch) return formatting;

    const rPr = rPrMatch[1];

    // Bold: <w:b/> or <w:b w:val="true"/> or <w:b w:val="1"/>
    formatting.bold = /<w:b[\s\/>]/.test(rPr) || /<w:b\s+w:val="(true|1)"/.test(rPr);

    // Italic: <w:i/> or <w:i w:val="true"/> or <w:i w:val="1"/>
    formatting.italic = /<w:i[\s\/>]/.test(rPr) || /<w:i\s+w:val="(true|1)"/.test(rPr);

    // Underline: <w:u w:val="..."/> (any underline style)
    formatting.underline = /<w:u\s+w:val="[^"]*"/.test(rPr);

    return formatting;
}

function analyzeSegmentFormatting(textNodes) {
    if (!textNodes || textNodes.length === 0) {
        return { hasFormatting: false };
    }

    // Collect formatted words from all text nodes
    const formattedParts = {
        bold: [],
        italic: [],
        underline: []
    };

    for (const node of textNodes) {
        if (!node.formatting) continue;

        const trimmedText = node.text.trim();
        if (trimmedText.length === 0) continue; // Skip whitespace-only nodes

        if (node.formatting.bold) formattedParts.bold.push(trimmedText);
        if (node.formatting.italic) formattedParts.italic.push(trimmedText);
        if (node.formatting.underline) formattedParts.underline.push(trimmedText);
    }

    // Build description
    const descriptions = [];
    if (formattedParts.bold.length > 0) {
        descriptions.push(`bold on "${formattedParts.bold.join(' ')}"`);
    }
    if (formattedParts.italic.length > 0) {
        descriptions.push(`italic on "${formattedParts.italic.join(' ')}"`);
    }
    if (formattedParts.underline.length > 0) {
        descriptions.push(`underline on "${formattedParts.underline.join(' ')}"`);
    }

    if (descriptions.length === 0) {
        return { hasFormatting: false };
    }

    return {
        hasFormatting: true,
        description: descriptions.join(', ')
    };
}

function extractTextRunsFromBlock(blockXml, blockStartPos) {
    const texts = [];

    // First, extract all runs to get formatting context
    const runRegex = /<w:r\b[^>]*>([\s\S]*?)<\/w:r>/g;
    let runMatch;

    while ((runMatch = runRegex.exec(blockXml)) !== null) {
        const runXml = runMatch[0];
        const runContent = runMatch[1];
        const runStart = runMatch.index;

        // Detect formatting for this run
        const formatting = detectRunFormatting(runXml);

        // Extract text nodes within this run
        const textRegex = /<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>/g;
        let textMatch;

        while ((textMatch = textRegex.exec(runContent)) !== null) {
            const text = textMatch[1];
            // Keep ALL text nodes, even whitespace-only ones
            if (text !== undefined && text !== null) {
                texts.push({
                    text: text,
                    formatting: formatting, // NEW: formatting metadata
                    localStart: runStart + textMatch.index,
                    localEnd: runStart + textMatch.index + textMatch[0].length,
                    globalStart: blockStartPos + runStart + textMatch.index,
                    globalEnd: blockStartPos + runStart + textMatch.index + textMatch[0].length,
                    fullMatch: textMatch[0]
                });
            }
        }
    }

    return texts;
}

console.log('='.repeat(70));
console.log('TEST 1: Bold formatting detection');
console.log('='.repeat(70));

const testXml1 = `
<w:p>
    <w:r><w:t>That HEIDY MARCELA </w:t></w:r>
    <w:r><w:rPr><w:b/></w:rPr><w:t>MONTES HERNÁNDEZ</w:t></w:r>
    <w:r><w:t> with Citizenship ID No. 1022400028</w:t></w:r>
</w:p>
`;

const textNodes1 = extractTextRunsFromBlock(testXml1, 0);
console.log('\nExtracted text nodes:');
textNodes1.forEach((node, i) => {
    console.log(`  Node ${i}: "${node.text}" - bold: ${node.formatting.bold}, italic: ${node.formatting.italic}`);
});

const formatting1 = analyzeSegmentFormatting(textNodes1);
console.log('\nFormatting analysis:');
console.log(`  Has formatting: ${formatting1.hasFormatting}`);
if (formatting1.hasFormatting) {
    console.log(`  Description: ${formatting1.description}`);
}

console.log('\nExpected: bold on "MONTES HERNÁNDEZ"');
console.log(`Result: ${formatting1.hasFormatting ? 'PASS ✓' : 'FAIL ✗'}`);

console.log('\n' + '='.repeat(70));
console.log('TEST 2: Multiple formatting types');
console.log('='.repeat(70));

const testXml2 = `
<w:p>
    <w:r><w:t>Normal text </w:t></w:r>
    <w:r><w:rPr><w:b/></w:rPr><w:t>bold text</w:t></w:r>
    <w:r><w:t> and </w:t></w:r>
    <w:r><w:rPr><w:i/></w:rPr><w:t>italic text</w:t></w:r>
    <w:r><w:t> and </w:t></w:r>
    <w:r><w:rPr><w:u w:val="single"/></w:rPr><w:t>underlined</w:t></w:r>
</w:p>
`;

const textNodes2 = extractTextRunsFromBlock(testXml2, 0);
console.log('\nExtracted text nodes:');
textNodes2.forEach((node, i) => {
    const formats = [];
    if (node.formatting.bold) formats.push('bold');
    if (node.formatting.italic) formats.push('italic');
    if (node.formatting.underline) formats.push('underline');
    console.log(`  Node ${i}: "${node.text}" - [${formats.join(', ') || 'none'}]`);
});

const formatting2 = analyzeSegmentFormatting(textNodes2);
console.log('\nFormatting analysis:');
console.log(`  Has formatting: ${formatting2.hasFormatting}`);
if (formatting2.hasFormatting) {
    console.log(`  Description: ${formatting2.description}`);
}

console.log('\nExpected: bold on "bold text", italic on "italic text", underline on "underlined"');
console.log(`Result: ${formatting2.hasFormatting ? 'PASS ✓' : 'FAIL ✗'}`);

console.log('\n' + '='.repeat(70));
console.log('TEST 3: No formatting');
console.log('='.repeat(70));

const testXml3 = `
<w:p>
    <w:r><w:t>Just plain text</w:t></w:r>
    <w:r><w:t> with no formatting</w:t></w:r>
</w:p>
`;

const textNodes3 = extractTextRunsFromBlock(testXml3, 0);
const formatting3 = analyzeSegmentFormatting(textNodes3);

console.log('\nFormatting analysis:');
console.log(`  Has formatting: ${formatting3.hasFormatting}`);
console.log('\nExpected: No formatting detected');
console.log(`Result: ${!formatting3.hasFormatting ? 'PASS ✓' : 'FAIL ✗'}`);

console.log('\n' + '='.repeat(70));
console.log('TEST 4: Simulating the "obtainedthe" case with bold');
console.log('='.repeat(70));

const testXml4 = `
<w:p>
    <w:r><w:t>obtuvo las</w:t></w:r>
    <w:r><w:rPr><w:b/></w:rPr><w:t>siguientes</w:t></w:r>
    <w:r><w:t>calificaciones</w:t></w:r>
</w:p>
`;

const textNodes4 = extractTextRunsFromBlock(testXml4, 0);
console.log('\nSpanish text nodes:');
textNodes4.forEach((node, i) => {
    console.log(`  Node ${i}: "${node.text}" - bold: ${node.formatting.bold}`);
});

const formatting4 = analyzeSegmentFormatting(textNodes4);
console.log('\nFormatting analysis:');
console.log(`  Has formatting: ${formatting4.hasFormatting}`);
if (formatting4.hasFormatting) {
    console.log(`  Description: ${formatting4.description}`);
}

console.log('\nThis would be sent to LLM with:');
console.log(`  text: "obtuvo las siguientes calificaciones"`);
console.log(`  formatting: "${formatting4.description}"`);
console.log('\nLLM should translate to: "obtained the following grades"');
console.log('  with bold preserved on "following" (semantic equivalent of "siguientes")');
