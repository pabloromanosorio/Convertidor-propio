```javascript
return [
    // Paragraph 1: Continuation text
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Appointment and removal of independent committee members shall follow the rules set forth in Article II, Section 10 and Article II, Section 12. Such independent Committee members will not be considered members of the Corporation’s Board of Directors. The specific responsibilities and authorities of the Subsidiary Committees are laid out in their respective charters. In the event that the subsidiary is sold or closed, the standing committee for that subsidiary shall be immediately dissolved.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 }, // ~12pt spacing
    }),

    // Section 7 Header
    new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
            new TextRun({
                text: "SECTION 7. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Executive Committee",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
            new TextRun({
                text: ".",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { before: 240, after: 240 },
    }),

    // Paragraph 2: The Executive Committee...
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "The Executive Committee shall be a standing committee composed of all committee chairs of the Board of Directors of Counterpart International, and the Chair of the Board of Directors. The Executive Committee shall be responsible for: (i) exercising the powers and authority of the Board of Directors during the intervals between meetings of the Board, when, based on the business needs of the Company, it is desirable for the Board to meet but the convening of a special Board meeting is not warranted as determined by the Chair of the Board.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
    }),

    // Paragraph 3: The authority of the Committee...
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "The authority of the Committee is limited by resolution of the Board of Directors, the By-laws of the Company and the Business Corporation Laws of the State of New York. The Executive Committee may not (a) amend the Company’s Articles of Incorporation; (b) amend or repeal the By-laws of the Company; (c) adopt an agreement of merger or consolidation; (d) approve the sale, lease or exchange of any all of the corporate property and assets; (e) dissolve the corporation; (f) amend or rescind previous resolutions adopted by the Board of Directors.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 720 }, // Large gap before Article V
    }),

    // Article V Header
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "ARTICLE V",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
    }),

    // Article Title
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "Counterpart Offices Outside the United States",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
        spacing: { after: 480 },
    }),

    // Section 1 Header
    new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Establishing Offices",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
            new TextRun({
                text: ".",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
    }),

    // Paragraph 4: Approval by majority...
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Approval by majority vote of the Board of Directors is required for establishment of any new office of the Corporation outside of the United States. Once that approval is given, the Secretary of the Board is authorized to represent the full Board to foreign Governments to meet all registration requirements, including establishment of bank accounts and assignment of bank signatories. Two executive signatures are required on any powers of attorney and bank signatory authority assigned to non-executive employees. A complete list of offices, country registrations, bank accounts, and powers of attorney will be maintained by management.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 240 },
    }),

    // Section 2 Header
    new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
            new TextRun({
                text: "SECTION 2. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Closing Offices",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
            new TextRun({
                text: ".",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { before: 240, after: 240 },
    }),

    // Paragraph 5: Management is authorized...
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Management is authorized to close any Corporation office outside of the United States without Board approval. To the extent that Board approvals are required by foreign governments and banks to close offices, registration, or bank accounts, the Secretary of the Board is authorized to represent the full Board in those matters.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        spacing: { after: 1440 }, // Large gap to push page number down
    }),

    // Page Number
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "8",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
];
```