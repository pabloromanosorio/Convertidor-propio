return [
    // Top Note
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [
            new TextRun({
                text: "As Approved by the Counterpart International Board of Directors on November 9, 2023",
                font: "Arial",
                color: "000000",
                size: 22, // 11pt
            }),
        ],
    }),

    // Title Block
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 400 },
        children: [
            new TextRun({
                text: "BYLAWS",
                font: "Arial",
                color: "000000",
                size: 24, // 12pt
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "OF",
                font: "Arial",
                color: "000000",
                size: 24,
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "COUNTERPART INTERNATIONAL, INC.",
                font: "Arial",
                color: "000000",
                size: 24,
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 800 },
        children: [
            new TextRun({
                text: "(A New York Non-profit Corporation)",
                font: "Arial",
                color: "000000",
                size: 24,
            }),
        ],
    }),

    // ARTICLE I
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 200 },
        children: [
            new TextRun({
                text: "ARTICLE I",
                font: "Arial",
                color: "000000",
                size: 24,
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "Members",
                font: "Arial",
                color: "000000",
                size: 24,
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),
    // Article I, Section 1 (Inline text)
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
            new TextRun({
                text: "No Members.",
                font: "Arial",
                color: "000000",
                size: 22,
                underline: { type: UnderlineType.SINGLE },
            }),
            new TextRun({
                text: " Counterpart International, Inc. (the \"Corporation\") shall have no members.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    // ARTICLE II
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 600, after: 200 },
        children: [
            new TextRun({
                text: "ARTICLE II",
                font: "Arial",
                color: "000000",
                size: 24,
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "Board of Directors",
                font: "Arial",
                color: "000000",
                size: 24,
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),

    // Article II, Section 1
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
            new TextRun({
                text: "General Powers of Directors.",
                font: "Arial",
                color: "000000",
                size: 22,
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "The Corporation’s Board of Directors (the \"Board\") shall exercise its power and authority to manage and direct the business and affairs of the Corporation in their entirety. The Board has the authority to appoint or remove the Chief Executive Officer of Counterpart International, Inc. and the Executive Directors of its subsidiaries, subject to the recommendation of that subsidiary’s Committee of the Board. The Board shall have full discretion and authority to engage in any business, adopt any policies and make any decisions that are in accordance with the Certificate of Incorporation, these Bylaws, and governing laws, all as they may be amended from time to time.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    // Article II, Section 2
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "SECTION 2. ",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
            new TextRun({
                text: "Number of Directors.",
                font: "Arial",
                color: "000000",
                size: 22,
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 400 },
        children: [
            new TextRun({
                text: "This Corporation shall have no less than three (3) and no more than eighteen (18) Directors. The President/Chief Executive Officer of the Corporation shall be an ex officio member of the board without requirement for election and without voting rights. This position shall not count against the total number of directors for purposes of this section.",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    // Article II, Section 3
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "SECTION 3. ",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
            new TextRun({
                text: "Term of Office.",
                font: "Arial",
                color: "000000",
                size: 22,
                underline: { type: UnderlineType.SINGLE },
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 600 },
        children: [
            new TextRun({
                text: "The standard term of office of each Director shall be three (3) years. The terms of the directors shall be staggered so that approximately one-third of the directors are elected annually. Directors shall not serve more than three consecutive three-year terms except in exceptional circumstances",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),

    // Footer Page Number
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400 },
        children: [
            new TextRun({
                text: "1",
                font: "Arial",
                color: "000000",
                size: 22,
            }),
        ],
    }),
];