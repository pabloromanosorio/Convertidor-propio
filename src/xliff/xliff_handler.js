/**
 * XLIFF Handler Module
 * 
 * Provides functions to convert DOCX to/from XLIFF using OpenXLIFF.
 * This is the "surgery" layer - it handles file structure while
 * the translator.js handles the actual translation logic.
 */

const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { DOMParser, XMLSerializer } = require('xmldom');

// OpenXLIFF paths - using absolute path for proper module loading
const OPENXLIFF_HOME = path.resolve(__dirname, '../../reference_code/OpenXLIFF');
const OPENXLIFF_LIB = path.join(OPENXLIFF_HOME, 'lib');

// Java 21 path (required for OpenXLIFF's class version 65.0)
const JAVA21_PATH = '/opt/homebrew/opt/openjdk@21/bin/java';

// XLIFF namespaces
const XLIFF_12_NS = 'urn:oasis:names:tc:xliff:document:1.2';
const XLIFF_20_NS = 'urn:oasis:names:tc:xliff:document:2.0';

/**
 * Check if Java is available
 */
function checkJavaInstalled() {
    try {
        const result = spawnSync('java', ['-version'], { encoding: 'utf-8' });
        if (result.error) {
            throw new Error('Java is not installed. Please install Java 11 or newer.');
        }
        return true;
    } catch (error) {
        throw new Error('Java is not installed. Please install Java 11 or newer.');
    }
}

/**
 * Convert DOCX to XLIFF using OpenXLIFF
 * 
 * @param {string} docxPath - Path to input DOCX file
 * @param {string} outputDir - Directory to write XLIFF and skeleton
 * @param {string} srcLang - Source language code (e.g., 'en')
 * @returns {string} Path to generated XLIFF file
 */
function convertToXliff(docxPath, outputDir, srcLang = 'en') {
    checkJavaInstalled();

    const xliffPath = path.join(outputDir, 'source.xlf');

    // Build command using module path (same as convert.sh does)
    const cmd = [
        JAVA21_PATH,
        '--module-path', OPENXLIFF_LIB,
        '-m', 'openxliff/com.maxprograms.converters.Convert',
        '-file', docxPath,
        '-srcLang', srcLang,
        '-xliff', xliffPath,
        '-embed',  // Embed skeleton in XLIFF (self-contained file)
        '-2.1',    // Use XLIFF 2.1
        '-paragraph' // Paragraph segmentation
    ];

    console.log(`[XLIFF] Converting DOCX to XLIFF...`);
    console.log(`[XLIFF] Command: ${cmd.join(' ')}`);

    try {
        const result = spawnSync(cmd[0], cmd.slice(1), {
            encoding: 'utf-8',
            stdio: ['pipe', 'pipe', 'pipe'],
            cwd: OPENXLIFF_HOME  // Run from OpenXLIFF directory for catalog access
        });
        if (result.status !== 0) {
            throw new Error(result.stderr || result.stdout || 'Unknown error');
        }
    } catch (error) {
        throw new Error(`OpenXLIFF conversion failed: ${error.message}`);
    }

    if (!fs.existsSync(xliffPath)) {
        throw new Error(`XLIFF file was not created at ${xliffPath}`);
    }

    console.log(`[XLIFF] Created: ${xliffPath}`);
    return xliffPath;
}

function extractXliffSegments(xliffPath) {
    const xml = fs.readFileSync(xliffPath, 'utf-8');
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    const xliffVersion = doc.documentElement.getAttribute('version');

    if (xliffVersion === '2.1' || xliffVersion === '2.0') {
        return extractXliff2Segments(doc);
    } else {
        return extractXliff12Segments(doc);
    }
}

/**
 * Extract translatable segments from XLIFF 2.x file
 */
function extractXliff2Segments(doc) {
    const units = doc.getElementsByTagName('unit');
    const segments = [];

    for (let i = 0; i < units.length; i++) {
        const unit = units[i];
        const unitId = unit.getAttribute('id');

        const segmentElems = unit.getElementsByTagName('segment');
        for (let j = 0; j < segmentElems.length; j++) {
            const segmentElem = segmentElems[j];
            const segId = segmentElem.getAttribute('id') || j.toString();

            const sourceElem = segmentElem.getElementsByTagName('source')[0];
            if (!sourceElem) continue;

            const sourceText = getElementText(sourceElem);
            if (!sourceText || !sourceText.trim()) continue;

            const targetElem = segmentElem.getElementsByTagName('target')[0];
            const targetText = targetElem ? getElementText(targetElem) : null;

            segments.push({
                unitId: unitId,
                segId: segId,
                id: segmentElems.length === 1 ? unitId : `${unitId}-${segId}`,
                source: sourceText,
                target: targetText,
                version: '2.1'
            });
        }
    }

    console.log(`[XLIFF] Extracted ${segments.length} segments (v2.1)`);
    return segments;
}

/**
 * Extract translatable segments from XLIFF 1.2 file (LEGACY)
 */
function extractXliff12Segments(doc) {
    const transUnits = doc.getElementsByTagName('trans-unit');
    const segments = [];

    for (let i = 0; i < transUnits.length; i++) {
        const unit = transUnits[i];
        const id = unit.getAttribute('id');

        const sourceElem = unit.getElementsByTagName('source')[0];
        if (!sourceElem) continue;

        const sourceText = getElementText(sourceElem);
        if (!sourceText || !sourceText.trim()) continue;

        const targetElem = unit.getElementsByTagName('target')[0];
        const targetText = targetElem ? getElementText(targetElem) : null;

        segments.push({
            id: id,
            source: sourceText,
            target: targetText,
            version: '1.2'
        });
    }

    console.log(`[XLIFF] Extracted ${segments.length} segments (v1.2)`);
    return segments;
}

/**
 * Get text content from an XLIFF element, preserving inline tags as text
 * OpenXLIFF uses <bpt>, <ept>, <ph> for inline formatting
 */
function getElementText(element) {
    let text = '';
    const childNodes = element.childNodes;

    for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        if (node.nodeType === 3) {  // Text node
            text += node.nodeValue;
        } else if (node.nodeType === 1) {  // Element node
            // For inline tags like <bpt>, <ept>, <ph>, include them as-is
            const serializer = new XMLSerializer();
            text += serializer.serializeToString(node);
        }
    }

    return text;
}

function mergeXliffTranslations(xliffPath, segments) {
    const xml = fs.readFileSync(xliffPath, 'utf-8');
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    const xliffVersion = doc.documentElement.getAttribute('version');

    if (xliffVersion === '2.1' || xliffVersion === '2.0') {
        return mergeXliff2Translations(xliffPath, doc, segments);
    } else {
        return mergeXliff12Translations(xliffPath, doc, segments);
    }
}

/**
 * Merge translations into XLIFF 2.x
 */
function mergeXliff2Translations(xliffPath, doc, segments) {
    const segmentMap = new Map(segments.map(s => [s.id, s]));
    const units = doc.getElementsByTagName('unit');
    let updatedCount = 0;

    for (let i = 0; i < units.length; i++) {
        const unit = units[i];
        const unitId = unit.getAttribute('id');
        const segmentElems = unit.getElementsByTagName('segment');

        for (let j = 0; j < segmentElems.length; j++) {
            const segmentElem = segmentElems[j];
            const segId = segmentElem.getAttribute('id') || j.toString();
            const id = segmentElems.length === 1 ? unitId : `${unitId}-${segId}`;
            const segment = segmentMap.get(id);

            if (segment && segment.target) {
                let targetElem = segmentElem.getElementsByTagName('target')[0];
                if (!targetElem) {
                    targetElem = doc.createElementNS(XLIFF_20_NS, 'target');
                    segmentElem.appendChild(targetElem);
                }

                // Set the translated text
                setXliffElementContent(doc, targetElem, segment.target);
                updatedCount++;
            }
        }
    }

    saveXliff(xliffPath, doc);
    console.log(`[XLIFF] Updated ${updatedCount} segments (v2.1)`);
    return xliffPath;
}

/**
 * Merge translations into XLIFF 1.2
 */
function mergeXliff12Translations(xliffPath, doc, segments) {
    const segmentMap = new Map(segments.map(s => [s.id, s]));
    const transUnits = doc.getElementsByTagName('trans-unit');
    let updatedCount = 0;

    for (let i = 0; i < transUnits.length; i++) {
        const unit = transUnits[i];
        const id = unit.getAttribute('id');
        const segment = segmentMap.get(id);

        if (segment && segment.target) {
            let targetElem = unit.getElementsByTagName('target')[0];

            if (!targetElem) {
                targetElem = doc.createElementNS(XLIFF_12_NS, 'target');
                const sourceElem = unit.getElementsByTagName('source')[0];
                if (sourceElem && sourceElem.nextSibling) {
                    unit.insertBefore(targetElem, sourceElem.nextSibling);
                } else {
                    unit.appendChild(targetElem);
                }
            }

            setXliffElementContent(doc, targetElem, segment.target);
            updatedCount++;
        }
    }

    saveXliff(xliffPath, doc);
    console.log(`[XLIFF] Updated ${updatedCount} segments (v1.2)`);
    return xliffPath;
}

/**
 * Helper to set element content from tagged translation
 */
function setXliffElementContent(doc, element, content) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    // Sanitize text to prevent invalid XML chars
    content = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, '');

    try {
        // Wrap content to parse as XML fragment
        const fragmentXml = `<root>${content}</root>`;
        const parsed = new DOMParser().parseFromString(fragmentXml, 'text/xml');
        const root = parsed.documentElement;

        for (let j = 0; j < root.childNodes.length; j++) {
            element.appendChild(doc.importNode(root.childNodes[j], true));
        }
    } catch (e) {
        element.textContent = content;
    }
}

/**
 * Helper to save XLIFF doc
 */
function saveXliff(xliffPath, doc) {
    const serializer = new XMLSerializer();
    const updatedXml = serializer.serializeToString(doc);
    fs.writeFileSync(xliffPath, updatedXml, 'utf-8');
}

/**
 * Convert XLIFF back to DOCX using OpenXLIFF
 * 
 * @param {string} xliffPath - Path to translated XLIFF file
 * @param {string} outputPath - Path for output DOCX
 * @returns {string} Path to created DOCX
 */
function convertToDocx(xliffPath, outputPath) {
    checkJavaInstalled();

    // Build command using module path
    // -unapproved flag is required to merge translations that aren't marked as approved
    const cmd = [
        JAVA21_PATH,
        '--module-path', OPENXLIFF_LIB,
        '-m', 'openxliff/com.maxprograms.converters.Merge',
        '-xliff', xliffPath,
        '-target', outputPath,
        '-unapproved'  // Accept translations even if not marked as approved
    ];

    console.log(`[XLIFF] Converting XLIFF to DOCX...`);

    try {
        const result = spawnSync(cmd[0], cmd.slice(1), {
            encoding: 'utf-8',
            stdio: ['pipe', 'pipe', 'pipe'],
            cwd: OPENXLIFF_HOME
        });
        if (result.status !== 0) {
            throw new Error(result.stderr || result.stdout || 'Unknown error');
        }
    } catch (error) {
        throw new Error(`OpenXLIFF merge failed: ${error.message}`);
    }

    if (!fs.existsSync(outputPath)) {
        throw new Error(`DOCX file was not created at ${outputPath}`);
    }

    console.log(`[XLIFF] Created: ${outputPath}`);
    return outputPath;
}

/**
 * Format segments into chunks for translation
 * Groups XLIFF segments to stay under token limits (~50k tokens)
 * 
 * IMPORTANT: Always respects segment boundaries - never splits a segment
 * 
 * Token estimation: ~4 chars per token average
 * 50k tokens * 4 = ~200k chars (safe upper bound)
 * 
 * @param {Array<{id: string, source: string}>} segments 
 * @param {number} maxCharsPerChunk - Maximum characters per chunk (default: 200000 ≈ 50k tokens)
 * @returns {Array<{segments: Array, startIdx: number, endIdx: number}>}
 */
function createChunksFromSegments(segments, maxCharsPerChunk = 200000) {
    const chunks = [];
    let currentChunk = { segments: [], startIdx: 0, charCount: 0 };

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        const segmentLength = segment.source.length;

        // If adding this segment would exceed limit, start new chunk
        if (currentChunk.charCount + segmentLength > maxCharsPerChunk && currentChunk.segments.length > 0) {
            currentChunk.endIdx = i - 1;
            chunks.push(currentChunk);
            currentChunk = { segments: [], startIdx: i, charCount: 0 };
        }

        currentChunk.segments.push(segment);
        currentChunk.charCount += segmentLength;
    }

    // Add final chunk
    if (currentChunk.segments.length > 0) {
        currentChunk.endIdx = segments.length - 1;
        chunks.push(currentChunk);
    }

    // Second pass: Add context
    const CONTEXT_CHARS = 500;

    for (let i = 0; i < chunks.length; i++) {
        // Context from previous chunk
        if (i > 0) {
            const prevChunk = chunks[i - 1];
            // Take the last N chars from the previous chunk
            let collected = '';
            for (let j = prevChunk.segments.length - 1; j >= 0; j--) {
                collected = prevChunk.segments[j].source + '\n' + collected;
                if (collected.length >= CONTEXT_CHARS) break;
            }
            chunks[i].contextPrevious = collected.slice(-CONTEXT_CHARS);
        }

        // Context to next chunk
        if (i < chunks.length - 1) {
            const nextChunk = chunks[i + 1];
            // Take the first N chars from the next chunk
            let collected = '';
            for (let j = 0; j < nextChunk.segments.length; j++) {
                collected += nextChunk.segments[j].source + '\n';
                if (collected.length >= CONTEXT_CHARS) break;
            }
            chunks[i].contextNext = collected.slice(0, CONTEXT_CHARS);
        }
    }

    console.log(`[XLIFF] Created ${chunks.length} chunks from ${segments.length} segments`);
    return chunks;
}

/**
 * Combine multiple XLIFF files into one
 */
function joinXliffFiles(xliffFiles, outputPath) {
    if (xliffFiles.length <= 1) return xliffFiles[0];

    const cmd = [
        JAVA21_PATH,
        '--module-path', OPENXLIFF_LIB,
        '-m', 'openxliff/com.maxprograms.converters.Join',
        '-target', outputPath,
        '-files', xliffFiles.join(',')
    ];

    console.log(`[XLIFF] Joining ${xliffFiles.length} XLIFF files...`);

    try {
        const result = spawnSync(cmd[0], cmd.slice(1), {
            encoding: 'utf-8',
            cwd: OPENXLIFF_HOME
        });
        if (result.status !== 0) {
            throw new Error(result.stderr || result.stdout || 'Join failed');
        }
    } catch (error) {
        throw new Error(`OpenXLIFF Join failed: ${error.message}`);
    }

    return outputPath;
}

/**
 * Validate XLIFF file using OpenXLIFF Checker
 */
function validateXliff(xliffPath) {
    const cmd = [
        JAVA21_PATH,
        '--module-path', OPENXLIFF_LIB,
        '-m', 'openxliff/com.maxprograms.validation.XliffChecker',
        '-file', xliffPath
    ];

    console.log(`[XLIFF] Validating XLIFF...`);

    try {
        const result = spawnSync(cmd[0], cmd.slice(1), {
            encoding: 'utf-8',
            cwd: OPENXLIFF_HOME
        });

        // XliffChecker might return 0 even with warnings, but shouldn't return errors
        if (result.status !== 0) {
            console.warn(`[XLIFF] Validation warnings/errors: ${result.stderr || result.stdout}`);
            return false;
        }
        return true;
    } catch (error) {
        console.error(`[XLIFF] Validation failed: ${error.message}`);
        return false;
    }
}

module.exports = {
    convertToXliff,
    extractXliffSegments,
    mergeXliffTranslations,
    convertToDocx,
    createChunksFromSegments,
    checkJavaInstalled,
    joinXliffFiles,
    validateXliff
};
