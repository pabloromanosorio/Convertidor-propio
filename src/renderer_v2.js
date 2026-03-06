const docx = require('docx');
const { Document, Packer, Paragraph, Table, LevelFormat, AlignmentType } = docx;
const fs = require('fs');

/**
 * Strips illegal XML characters that can corrupt Word documents.
 */
function sanitizeText(text) {
    if (typeof text !== 'string') return text;
    // Remove control characters except tab, newline, and carriage return
    // Word for Mac is very sensitive to these.
    return text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, '');
}

function executeGeminiCode(codeString) {
    try {
        let cleanCode = codeString;

        // 1. Extract content from markdown code blocks
        // Matches ```js ... ``` or ```javascript ... ``` or just ``` ... ```
        const markdownMatch = codeString.match(/```(?:javascript|js)?\s*([\s\S]*?)\s*```/i);
        if (markdownMatch && markdownMatch[1]) {
            cleanCode = markdownMatch[1].trim();
        } else {
            // Fallback: simple replace
            cleanCode = codeString.replace(/```javascript/gi, '').replace(/```js/g, '').replace(/```/g, '').trim();
        }

        // 2. Aggressive cleanup: Remove lines starting with '**' or '##'
        cleanCode = cleanCode.split('\n').filter(line => !line.trim().startsWith('**') && !line.trim().startsWith('##')).join('\n');

        // 3. If code starts with "const children =", remove it and return children
        if (cleanCode.includes("const children =")) {
            cleanCode += "; return children;";
        }

        // 4. Wrap in return if it looks like just an array "[ ... ]"
        // Improved: Also handle IIFEs (Immediately Invoked Function Expressions) like (() => { ... })()
        cleanCode = cleanCode.trim();
        if (cleanCode.startsWith('[') && cleanCode.endsWith(']')) {
            cleanCode = `return ${cleanCode};`;
        } else if (cleanCode.startsWith('(') && (cleanCode.endsWith(')()') || cleanCode.endsWith('();'))) {
            // It's an IIFE, so we need to return its result
            cleanCode = `return ${cleanCode};`;
        }

        // 5. Prepare Sandbox with ALL docx exports
        const sandboxNames = Object.keys(docx);
        const sandboxValues = Object.values(docx);

        // 6. Execute in a sandbox where docx elements are global
        console.log("----- GLM DEBUG CODE START -----");
        console.log(cleanCode);
        console.log("----- GLM DEBUG CODE END -----");
        const func = new Function(...sandboxNames, cleanCode);
        const children = func(...sandboxValues);

        if (!children || !Array.isArray(children)) {
            throw new Error("Generated code did not return an array of children.");
        }

        // 7. POST-PROCESS: Recursive Sanitization & Formatting Enforcement
        const processNode = (node) => {
            if (!node) return;

            // If it's a TextRun (has 'text' property)
            if (node.text !== undefined) {
                node.color = "000000";
                node.font = "Arial";
                node.text = sanitizeText(node.text);
            }

            // Recurse into all object properties
            for (const key in node) {
                if (typeof node[key] === 'object' && node[key] !== null) {
                    processNode(node[key]);
                }
            }
        };

        // processNode is disabled to prevent corruption of docx objects
        // children.forEach(child => processNode(child));

        return children;
    } catch (e) {
        console.error("❌ Code Execution Failed:", e);
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
        numbering: {
            config: [
                {
                    reference: "bullet-list",
                    levels: [
                        { level: 0, format: LevelFormat.BULLET, text: "\u13AC", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
                        { level: 1, format: LevelFormat.BULLET, text: "\u25CB", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
                    ],
                },
                {
                    reference: "numbered-list",
                    levels: [
                        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
                        { level: 1, format: LevelFormat.LOWER_LETTER, text: "%2.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
                    ],
                },
            ],
        },
        sections: [{
            properties: {
                page: {
                    size: {
                        width: 12240,  // Letter: 8.5in
                        height: 15840, // Letter: 11in
                    },
                    margin: {
                        top: 720,  // Narrow margins (0.5 inch) to maximize content width
                        right: 720,
                        bottom: 720,
                        left: 720,
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

module.exports = { generateDocxV2, executeGeminiCode, sanitizeText };
