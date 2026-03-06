const { DOMParser, XMLSerializer } = require('xmldom');

/**
 * DocxCleaner Utility
 * 
 * Inspired by Supervertaler's DocumentCleaner.
 * Cleans up word/document.xml by merging fragmented runs and fixing line breaks.
 */
class DocxCleaner {
    constructor() {
        this.parser = new DOMParser();
        this.serializer = new XMLSerializer();
    }

    /**
     * Clean the document XML string
     * @param {string} xmlString 
     * @returns {string}
     */
    cleanXml(xmlString) {
        const doc = this.parser.parseFromString(xmlString, 'text/xml');
        const paragraphs = doc.getElementsByTagName('w:p');

        for (let i = 0; i < paragraphs.length; i++) {
            this.cleanParagraph(paragraphs[i]);
        }

        return this.serializer.serializeToString(doc);
    }

    /**
     * Clean a single paragraph node
     * @param {Element} p 
     */
    cleanParagraph(p) {
        this.fixLineBreaks(p);
        this.mergeRuns(p);
        this.normalizeSpaces(p);
    }

    /**
     * Merge adjacent runs with identical formatting
     * @param {Element} p 
     */
    mergeRuns(p) {
        const children = p.childNodes;
        for (let i = 0; i < children.length - 1; i++) {
            const current = children[i];

            // Skip non-run elements or whitespace
            if (current.nodeName !== 'w:r') continue;

            // Find the NEXT element, skipping intermediate whitespace text nodes
            let nextIndex = i + 1;
            while (nextIndex < children.length && children[nextIndex].nodeType === 3 && !children[nextIndex].nodeValue.trim()) {
                nextIndex++;
            }

            if (nextIndex < children.length) {
                const next = children[nextIndex];
                if (next.nodeName === 'w:r') {
                    if (this.areFormattingEqual(current, next)) {
                        // Move all children from next run to current run, EXCEPT w:rPr
                        const nextSiblings = Array.from(next.childNodes);
                        for (const childNode of nextSiblings) {
                            if (childNode.nodeName !== 'w:rPr') {
                                current.appendChild(childNode);
                            }
                        }

                        // NEW: Merge adjacent <w:t> tags within the current run
                        this.mergeTextNodes(current);

                        // Remove the now-empty next run
                        p.removeChild(next);

                        // Also remove any intermediate whitespace we skipped
                        for (let j = i + 1; j < nextIndex; j++) {
                            p.removeChild(children[i + 1]);
                        }

                        // Re-check current against the new next
                        i--;
                    }
                }
            }
        }
    }

    /**
     * Merge adjacent w:t nodes within a run
     */
    mergeTextNodes(r) {
        const children = r.childNodes;
        for (let i = 0; i < children.length - 1; i++) {
            const current = children[i];
            const next = children[i + 1];

            if (current.nodeName === 'w:t' && next.nodeName === 'w:t') {
                current.textContent += next.textContent;
                r.removeChild(next);
                i--;
            }
        }
    }

    /**
     * Compare formatting properties (w:rPr) of two runs
     */
    areFormattingEqual(r1, r2) {
        const pr1 = r1.getElementsByTagName('w:rPr')[0];
        const pr2 = r2.getElementsByTagName('w:rPr')[0];

        if (!pr1 && !pr2) return true;
        if (!pr1 || !pr2) return false;

        // Simple deep comparison via serialization
        return this.serializer.serializeToString(pr1) === this.serializer.serializeToString(pr2);
    }

    /**
     * Replace mid-sentence manual line breaks with spaces
     */
    fixLineBreaks(p) {
        const brs = p.getElementsByTagName('w:br');
        // Convert to array because we might remove them
        const brArray = Array.from(brs);

        for (const br of brArray) {
            // Check context: what is before and after this break?
            // This is a bit complex in DOM, so we'll do a simple lowercase check for now.
            const nextText = this.getFollowingText(br);
            const prevText = this.getPrecedingText(br);

            if (nextText && /^[a-z]/.test(nextText.trim())) {
                // If next valid text starts with lowercase, it's likely a broken sentence
                const space = br.ownerDocument.createTextNode(' ');
                const t = br.ownerDocument.createElement('w:t');
                t.setAttribute('xml:space', 'preserve');
                t.appendChild(space);

                // Usually <w:br> is inside a <w:r>. Let's put a <w:t> there instead.
                const parent = br.parentNode;
                if (parent.nodeName === 'w:r') {
                    parent.replaceChild(t, br);
                }
            }
        }
    }

    /**
     * Ensure text nodes have xml:space="preserve" if they have leading/trailing spaces
     */
    normalizeSpaces(p) {
        const ts = p.getElementsByTagName('w:t');
        for (let i = 0; i < ts.length; i++) {
            const t = ts[i];
            const text = t.textContent;
            if (text.startsWith(' ') || text.endsWith(' ')) {
                t.setAttribute('xml:space', 'preserve');
            }
        }
    }

    getFollowingText(node) {
        let cur = node;
        while (cur) {
            if (cur.nextSibling) {
                cur = cur.nextSibling;
                const text = this.getNodeVisibleText(cur);
                if (text) return text;
            } else {
                cur = cur.parentNode;
                if (cur.nodeName === 'w:p') break;
            }
        }
        return null;
    }

    getPrecedingText(node) {
        let cur = node;
        while (cur) {
            if (cur.previousSibling) {
                cur = cur.previousSibling;
                const text = this.getNodeVisibleText(cur);
                if (text) return text;
            } else {
                cur = cur.parentNode;
                if (cur.nodeName === 'w:p') break;
            }
        }
        return null;
    }

    getNodeVisibleText(node) {
        if (node.nodeType === 3) return node.nodeValue;
        if (node.nodeName === 'w:t') return node.textContent;
        if (node.nodeName === 'w:r' || node.nodeName === 'w:p') {
            return node.textContent;
        }
        return null;
    }
}

module.exports = new DocxCleaner();
