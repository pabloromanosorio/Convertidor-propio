```javascript
return [
    // SECTION 14 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 14. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Indemnification of Directors",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
        spacing: { before: 200, after: 200 },
    }),
    // SECTION 14 Body
    new Paragraph({
        children: [
            new TextRun({
                text: "The Corporation shall indemnify any Director, whether or not then in office (including his/her executor, administrator and heirs), who is or was a party, or is threatened to be made a party, to any threatened, pending or completed action, suit or proceeding, whether criminal, civil, administrative or investigative, including all appeals, by reason of the fact that he or she is or was a Director of the Corporation, to the extent permitted by the Non-profit Corporations Laws of New York.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 400 },
    }),

    // SECTION 15 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 15. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Compensation for Directors.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
        spacing: { after: 200 },
    }),
    // SECTION 15 Body
    new Paragraph({
        children: [
            new TextRun({
                text: "The Directors of the Corporation shall not, solely by virtue of their positions as Directors, be entitled to receive, directly or indirectly, any salary, compensation or emolument from the Corporation, unless authorized by the concurring vote of two-thirds (2/3) of the Directors present and entitled to vote. Nothing in this provision shall prevent an employee or consultant of the Corporation who is also a Director, from receiving fair compensation for services rendered to the Corporation.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 400 },
    }),

    // SECTION 16 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 16. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Emergency Actions.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
        spacing: { after: 200 },
    }),
    // SECTION 16 Body 1
    new Paragraph({
        children: [
            new TextRun({
                text: "Whenever it becomes necessary for the Corporation to take an action under circumstances in which it is not possible for the Board to meet to consider the action in advance, an Emergency Action can be taken if and when the following conditions are met: 1] The Chair of the Board, the President/Chief Executive Officer, or any three (3) Directors provide(s) written notice describing the proposed action to all Board members; and 2] At least the number of Directors who would have been required to vote on the action had it been presented at a full meeting of the Board, consent to the stated action in writing, whether by facsimile, e-mail or in another writing.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
    }),
    // SECTION 16 Body 2
    new Paragraph({
        children: [
            new TextRun({
                text: "Any and all Emergency Actions taken pursuant to this Section shall be reviewed at the next regular meeting of the Board, and a copy of the written notice, together with the written consents thereto, shall be filed with the minutes of the Board.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 800 },
    }),

    // ARTICLE III Header
    new Paragraph({
        children: [
            new TextRun({
                text: "ARTICLE III",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
    }),
    // Officers Header
    new Paragraph({
        children: [
            new TextRun({
                text: "Officers",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
    }),

    // SECTION 1 Header (Article III)
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Election, Tenure and Compensation.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: UnderlineType.SINGLE,
                },
            }),
        ],
        spacing: { after: 200 },
    }),
    // SECTION 1 Body
    new Paragraph({
        children: [
            new TextRun({
                text: "The Officers of the Corporation shall be Chair of the Board, Vice Chair of the Board, Board Secretary, Treasurer/Chair of Finance Committee, Chair of the Governance & Nominating Committee, Chair of the Audit Committee, and chairs of other approved committees. The Board from time to time may consider it necessary for the proper conduct of the business of the Corporation to appoint other officers from the Board or from Executive Management for the proper conduct of the business of the Corporation.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 800 },
    }),

    // Page Number
    new Paragraph({
        children: [
            new TextRun({
                text: "4",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
    }),
];
```