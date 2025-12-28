```javascript
return [
    // Top Note
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 }, // Visual gap before title
        children: [
            new TextRun({
                text: "As Approved by the Counterpart International Board of Directors on November 9, 2023",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Title: BYLAWS
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "BYLAWS",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Title: OF
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "OF",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Title: COUNTERPART INTERNATIONAL, INC.
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "COUNTERPART INTERNATIONAL, INC.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
    }),

    // Title: (A New York Non-profit Corporation)
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 720 }, // Large gap before Article I
        children: [
            new TextRun({
                text: "(A New York Non-profit Corporation)",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // ARTICLE I
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "ARTICLE I",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Members
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 },
        children: [
            new TextRun({
                text: "Members",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
    }),

    // ARTICLE I - SECTION 1 (Inline)
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 720 }, // Gap before Article II
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "No Members.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
            new TextRun({
                text: " Counterpart International, Inc. (the \"Corporation\") shall have no members.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // ARTICLE II
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "ARTICLE II",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Board of Directors
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 },
        children: [
            new TextRun({
                text: "Board of Directors",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
    }),

    // ARTICLE II - SECTION 1 Title
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "General Powers of Directors.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
    }),

    // ARTICLE II - SECTION 1 Body
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 480 },
        children: [
            new TextRun({
                text: "The Corporation’s Board of Directors (the \"Board\") shall exercise its power and authority to manage and direct the business and affairs of the Corporation in their entirety. The Board has the authority to appoint or remove the Chief Executive Officer of Counterpart International, Inc. and the Executive Directors of its subsidiaries, subject to the recommendation of that subsidiary’s Committee of the Board. The Board shall have full discretion and authority to engage in any business, adopt any policies and make any decisions that are in accordance with the Certificate of Incorporation, these Bylaws, and governing laws, all as they may be amended from time to time.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // ARTICLE II - SECTION 2 Title
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "SECTION 2. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Number of Directors.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
    }),

    // ARTICLE II - SECTION 2 Body
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 480 },
        children: [
            new TextRun({
                text: "This Corporation shall have no less than three (3) and no more than eighteen (18) Directors. The President/Chief Executive Officer of the Corporation shall be an ex officio member of the board without requirement for election and without voting rights. This position shall not count against the total number of directors for purposes of this section.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // ARTICLE II - SECTION 3 Title
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "SECTION 3. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Term of Office.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
    }),

    // ARTICLE II - SECTION 3 Body
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 720 },
        children: [
            new TextRun({
                text: "The standard term of office of each Director shall be three (3) years. The terms of the directors shall be staggered so that approximately one-third of the directors are elected annually. Directors shall not serve more than three consecutive three-year terms except in exceptional circumstances",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),

    // Footer Page Number
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "1",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
    }),
];
```