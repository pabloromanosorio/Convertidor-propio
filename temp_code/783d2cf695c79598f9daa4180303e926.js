```javascript
return [
    // Paragraph 1 (Continuation)
    new Paragraph({
        children: [
            new TextRun({
                text: "process for qualification and nomination of Directors and submit these to the Board for approval. The Governance and Nominating Committee is charged with facilitating the annual goal setting process with the President/CEO; annual assessment of the Board’s performance and overseeing the review of these Bylaws every two years.",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 }
    }),

    // Paragraph 2
    new Paragraph({
        children: [
            new TextRun({
                text: "Members of the Governance and Nominating Committee shall recuse themselves from discussion and deliberations concerning their own reelection to the Board.",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 480 }
    }),

    // SECTION 3 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 3. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "The Audit Committee.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE }
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 }
    }),

    // SECTION 3 Body
    new Paragraph({
        children: [
            new TextRun({
                text: "The Audit Committee shall be a standing committee of at least two (2) Board members. The Committee shall be responsible for overseeing all areas of enterprise risk management for the Corporation and its subsidiaries. Areas of focus will include accounting policies and practices, internal controls, internal and external audit functions, security, reputational risk, and other forms of enterprise risk as identified by the Board of Directors. In terms of the annual independent audit, the Audit Committee shall also be responsible for (i) coordinating an annual independent audit of the Corporation’s finances and compliance with applicable US laws and regulations; (ii) recommending an outside auditor for approval by the Board; (iii) reviewing the results of the annual audit with the auditors and timely submission of the financial statements, audit report, management letters, and IRS Form 990 to the Board for approval. These duties shall extend to all wholly owned subsidiaries of the Corporation.",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 480 }
    }),

    // SECTION 4 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 4. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "The Finance Committee.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE }
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 }
    }),

    // SECTION 4 Body
    new Paragraph({
        children: [
            new TextRun({
                text: "The Finance Committee shall be a standing committee of at least two (2) Board members. The Finance Committee shall be responsible for overseeing all areas of corporate finance for the Corporation and its subsidiaries, equity and debt financings, cash management, banking activities and relationships, and investments. The Finance Committee shall undertake an annual review of the Corporation’s overhead budget and make a recommendation to the entire Board on approval of Management’s budget. It shall also undertake regular assessment of the Corporation’s financial health, review the organization’s financial key performance indicators, and provide a summary to the full Board, including recommendations for Board action as required. These duties shall extend to all wholly owned subsidiaries of the Corporation.",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 480 }
    }),

    // SECTION 5 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 5. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "The Development Committee.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE }
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 }
    }),

    // SECTION 5 Body
    new Paragraph({
        children: [
            new TextRun({
                text: "The Development Committee shall be a standing committee of at least two (2) Board members. The principal purpose of the Committee shall be to assist the Board and advise Management regarding the generation of unrestricted funds.",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 480 }
    }),

    // SECTION 6 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 6. ",
                font: "Arial",
                size: 22,
                color: "000000"
            }),
            new TextRun({
                text: "Committees of Wholly-Owned Subsidiaries.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE }
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 }
    }),

    // SECTION 6 Body
    new Paragraph({
        children: [
            new TextRun({
                text: "For each wholly owned subsidiary of the Corporation, a standing committee shall be formed to ensure proper governance of that subsidiary in light of the unique products, services, and risks facing that business entity. The subsidiary’s Committee shall include at least two (2) members of the Counterpart International Board and the Counterpart CEO as a voting member. A subsidiary Committee may include independent members who are not Counterpart International Directors, so long as such independent members remain in the minority on the Committee.",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 720 } // Larger space before page number
    }),

    // Page Number
    new Paragraph({
        children: [
            new TextRun({
                text: "7",
                font: "Arial",
                size: 22,
                color: "000000"
            })
        ],
        alignment: AlignmentType.CENTER
    })
];
```