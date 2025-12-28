```javascript
return [
    // ARTICLE VI
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 240 },
        children: [
            new TextRun({
                text: "ARTICLE VI",
                font: "Arial",
                size: 24,
                color: "000000"
            })
        ]
    }),

    // Miscellaneous Provisions
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 },
        children: [
            new TextRun({
                text: "Miscellaneous Provisions",
                font: "Arial",
                size: 24,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" }
            })
        ]
    }),

    // SECTION 1. Fiscal Year.
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                size: 24,
                color: "000000"
            }),
            new TextRun({
                text: "Fiscal Year.",
                font: "Arial",
                size: 24,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" }
            })
        ]
    }),

    // Fiscal Year Body Text
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 480 },
        children: [
            new TextRun({
                text: "The fiscal year of the Corporation shall end on the last day of September.",
                font: "Arial",
                size: 24,
                color: "000000"
            })
        ]
    }),

    // SECTION 2. Notices.
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "SECTION 2. ",
                font: "Arial",
                size: 24,
                color: "000000"
            }),
            new TextRun({
                text: "Notices.",
                font: "Arial",
                size: 24,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" }
            })
        ]
    }),

    // Notices Body Text
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 720 },
        children: [
            new TextRun({
                text: "Any Director or Officer may waive any notice required to be given under these Bylaws, and attendance at or participation in any meeting shall constitute such a waiver, unless the Officer or Director specially appears solely for the purpose of contesting notice.",
                font: "Arial",
                size: 24,
                color: "000000"
            })
        ]
    }),

    // ARTICLE VII
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 240 },
        children: [
            new TextRun({
                text: "ARTICLE VII",
                font: "Arial",
                size: 24,
                color: "000000"
            })
        ]
    }),

    // Amendments
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 },
        children: [
            new TextRun({
                text: "Amendments",
                font: "Arial",
                size: 24,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" }
            })
        ]
    }),

    // SECTION 1. Amendment of Bylaws.
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                size: 24,
                color: "000000"
            }),
            new TextRun({
                text: "Amendment of Bylaws.",
                font: "Arial",
                size: 24,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" }
            })
        ]
    }),

    // Amendments Body Text
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 480 },
        children: [
            new TextRun({
                text: "The Bylaws may be amended, repealed or altered in whole or in part by an affirmative vote of a majority of the Voting Directors present at a quorum meeting; provided, that in each instance, notice of the substance of any proposed change is given to all Voting Directors at least ten (10) days in advance of the meeting at which the vote on such change will be held.",
                font: "Arial",
                size: 24,
                color: "000000"
            })
        ]
    }),

    // Final Paragraph
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 1440 },
        children: [
            new TextRun({
                text: "The above written Bylaws of the Corporation was approved by the Board of Directors of Counterpart International, Inc. on November 9, 2023. This version of the bylaws supersedes all previous versions.",
                font: "Arial",
                size: 24,
                color: "000000"
            })
        ]
    }),

    // Page Number
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
            new TextRun({
                text: "9",
                font: "Arial",
                size: 24,
                color: "000000"
            })
        ]
    })
];
```