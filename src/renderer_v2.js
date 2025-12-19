const docx = require('docx');
const { Document, Packer, Paragraph, Table } = docx;
const fs = require('fs');

function executeGeminiCode(codeString) {
    try {
        // 1. Strip markdown fences and bold markers if outside strings (heuristic)
        let cleanCode = codeString.replace(/```javascript/gi, '').replace(/```js/g, '').replace(/```/g, '').trim();

        // 2. Aggressive cleanup: Remove lines starting with '**' or '##'
        cleanCode = cleanCode.split('\n').filter(line => !line.trim().startsWith('**') && !line.trim().startsWith('##')).join('\n');

        // 2.5 CRITICAL: Remove Word-incompatible numbering features that break strict XML parsers
        // These replacements convert complex list structures to simple indented paragraphs

        // Replace placeholder numId strings with nothing (completely remove numbering)
        cleanCode = cleanCode.replace(/["']\{my-numbered-list-\d+\}["']/g, '""');
        cleanCode = cleanCode.replace(/["']\{my-bullet-list-\d+\}["']/g, '""');
        cleanCode = cleanCode.replace(/\{my-numbered-list-\d+\}/g, '""');
        cleanCode = cleanCode.replace(/\{my-bullet-list-\d+\}/g, '""');

        // Remove entire numbering property blocks (handles nested objects)
        cleanCode = cleanCode.replace(/numbering\s*:\s*\{[\s\S]*?reference\s*:[\s\S]*?\}\s*,?\s*/g, '');

        // Remove numPr blocks entirely
        cleanCode = cleanCode.replace(/numPr\s*:\s*\{[\s\S]*?\}\s*,?\s*/g, '');

        // Remove pStyle: "ListParagraph" references
        cleanCode = cleanCode.replace(/pStyle\s*:\s*["']ListParagraph["']\s*,?\s*/g, '');

        // Remove bullet/numbering object patterns  
        cleanCode = cleanCode.replace(/bullet\s*:\s*\{[\s\S]*?\}\s*,?\s*/g, '');

        // 3. If code starts with "const children =", remove it and return children
        if (cleanCode.includes("const children =")) {
            cleanCode += "; return children;";
        }

        // 4. Wrap in return if it looks like just an array "[ ... ]"
        if (cleanCode.trim().startsWith('[') && cleanCode.trim().endsWith(']')) {
            cleanCode = `return ${cleanCode};`;
        }

        // 5. Prepare Sandbox with ALL docx exports
        const sandboxNames = Object.keys(docx);
        const sandboxValues = Object.values(docx);

        // 6. Execute
        const func = new Function(...sandboxNames, cleanCode);
        const children = func(...sandboxValues);

        if (!children || !Array.isArray(children)) {
            throw new Error("Generated code did not return an array of children.");
        }

        return children;
    } catch (e) {
        console.error("❌ Code Execution Failed:", e);
        // console.error("--- Offending Code ---\n", codeString);
        throw new Error(`Invalid AI Code: ${e.message}`);
    }
}

async function generateDocxV2(codeString, outputPath) {
    const children = executeGeminiCode(codeString);

    const doc = new Document({
        creator: "Gemini PDF Converter",
        description: "Converted from PDF",
        compatibility: {
            doNotExpandShiftReturn: true,
            growAutofit: true,
        },
        sections: [{
            properties: {
                page: {
                    size: {
                        width: 12240,  // Letter: 8.5in
                        height: 15840, // Letter: 11in
                    },
                    margin: {
                        top: 1440,
                        right: 1440,
                        bottom: 1440,
                        left: 1440,
                    },
                },
            },
            children: children
        }]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Saved V2 Doc to ${outputPath}`);
    return outputPath;
}

module.exports = { generateDocxV2, executeGeminiCode };
