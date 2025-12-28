```javascript
return [
    // SECTION 9
    new Paragraph({
        spacing: { before: 400, after: 200 },
        children: [
            new TextRun({
                text: "SECTION 9. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "Voting.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: "single"
                }
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "At all meetings of the Board, each Director present shall have one vote. When voting on the election of Directors, each existing Director shall have one vote for each position to be filled, provided however, that a Director who is up for re-election, shall not be eligible to vote on his/her position. There shall be no cumulative voting.",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
        ],
    }),

    // SECTION 10
    new Paragraph({
        spacing: { before: 300, after: 200 },
        children: [
            new TextRun({
                text: "SECTION 10. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "Election/Appointment of Directors.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: "single"
                }
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
        children: [
            new TextRun({
                text: "The Board shall elect a Governance and Nominating Committee comprised of at least two (2) members with the Committee Chair to be elected by the Board. The Committee shall perform the functions set forth in Article IV, Section 2 of these Bylaws regarding the qualification and nomination of Directors.",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "The Board shall hold Director elections at the end of each year for those positions that are open or Directors whose terms are ending, subject to exclusion by term limits. Directors shall be elected by the majority vote of those Directors present and eligible to vote.",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
        ],
    }),

    // SECTION 11
    new Paragraph({
        spacing: { before: 300, after: 200 },
        children: [
            new TextRun({
                text: "SECTION 11. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "Vacancies.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: "single"
                }
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "Any vacancy occurring on the Board by death, resignation, or otherwise shall be filled by a qualified individual as specified by the Governance and Nominating Committee and elected by a majority vote of the remaining Directors. If an interim Director is chosen, the Director shall hold office for the remainder of the unexpired term of his or her predecessor. Provided the minimum number of Directors of the Board is maintained, a vacancy may remain unfilled until the next Board election and treated as all other Board vacancies.",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
        ],
    }),

    // SECTION 12
    new Paragraph({
        spacing: { before: 300, after: 200 },
        children: [
            new TextRun({
                text: "SECTION 12. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "Removal of Directors.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: "single"
                }
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "At any duly authorized meeting of the Board, any Director may be removed, with or without cause, providing that written notice is given that the removal of one or more Directors will be considered at that meeting, and providing that the majority of the remaining Directors then entitled to vote at an election of Directors votes in favor of the removal.",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
        ],
    }),

    // SECTION 13
    new Paragraph({
        spacing: { before: 300, after: 200 },
        children: [
            new TextRun({
                text: "SECTION 13. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "Removal of Directors in the Event of Dissolution.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: {
                    type: "single"
                }
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 300 },
        children: [
            new TextRun({
                text: "In the event that the Corporation is dissolved in accordance with its governing laws, the entire Board shall be removed automatically, effective simultaneously with the dissolution to the extent permitted by law.",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
        ],
    }),

    // Footer Page Number
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 800 },
        children: [
            new TextRun({
                text: "3",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
        ],
    }),
];
```