```javascript
return [
    // Paragraph 1: Continuation of previous text
    new Paragraph({
        children: [
            new TextRun({
                text: "Board in books provided for that purpose, and he or she shall perform such other duties as may be assigned to him or her by the Board. He or she shall have custody of the seal of the Corporation and shall affix the same to all instruments requiring it, when authorized by the Board, and shall attest the same. He or she shall have the authority to certify resolutions on behalf of the Board of Directors. In general, the Secretary shall perform all the duties generally incident to the office of Secretary and shall be accountable to the Board of Directors.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
    }),

    // Section 5 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 5. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Treasurer/Chair of Finance Committee of the Board.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
        spacing: { before: 240, after: 240 },
    }),

    // Paragraph 2: Treasurer duties
    new Paragraph({
        children: [
            new TextRun({
                text: "The Chair of the Finance Committee of the Board of Directors shall serve as Treasurer and oversee regular financial reports to the Board of Directors. The Treasurer shall assure that the CEO and Chief Financial Officer (CFO) have custody of all the funds and securities of the Corporation, and he or she shall keep full and accurate account of receipts and disbursements in books belonging to the Corporation and its subsidiaries and render accounts thereof at least annually, and whenever else required by the Board. The Treasurer shall perform all the duties generally incident to the duties of the Finance Committee as stated by these bylaws. The Treasurer shall be accountable to the Board of Directors.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
    }),

    // Section 6 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 6. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Vice Presidents, Assistant Secretaries and/or Treasurers.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
        spacing: { before: 240, after: 240 },
    }),

    // Paragraph 3: Vice Presidents duties
    new Paragraph({
        children: [
            new TextRun({
                text: "Any Vice Presidents, Assistant Secretaries and/or Assistant Treasurers shall perform the duties generally assigned by the respective Secretary or Treasurer, and/or the Board; and in the absence of the respective Officer, shall fulfill the duties and responsibilities of the Office. Vice Presidents, Assistant Secretaries and/or Assistant Treasurers shall be accountable to the Officer who appoints them and to the Board to the same extent as the appointing Officer.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 720 }, // Large gap before Article IV
    }),

    // Article IV Header
    new Paragraph({
        children: [
            new TextRun({
                text: "ARTICLE IV",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
    }),

    // Committees Subheader
    new Paragraph({
        children: [
            new TextRun({
                text: "Committees",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 },
    }),

    // Section 1 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 1. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "Authority to Appoint.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
        spacing: { after: 240 },
    }),

    // Paragraph 4: Authority to Appoint
    new Paragraph({
        children: [
            new TextRun({
                text: "The Chair of the Board, subject to approval of a majority of the Board, shall have authority to appoint standing and/or ad hoc Committees, and to delegate authority to those committees, or to dissolve the same. Committees may be comprised of Board members, Officers, employees or other persons, except for the Executive Committee which will be comprised only of Board members. Every committee shall be chaired by a current member of the Board.",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 240 },
    }),

    // Section 2 Header
    new Paragraph({
        children: [
            new TextRun({
                text: "SECTION 2. ",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
            new TextRun({
                text: "The Governance and Nominating Committee.",
                font: "Arial",
                size: 22,
                color: "000000",
                underline: { type: UnderlineType.SINGLE, color: "000000" },
            }),
        ],
        spacing: { before: 240, after: 240 },
    }),

    // Paragraph 5: Governance Committee
    new Paragraph({
        children: [
            new TextRun({
                text: "The Governance and Nominating Committee shall be a standing committee of at least two (2) Board members. Its responsibilities include recruiting, screening and recommending candidates for Director, recommending the composition of the board and its committees, and developing the annual slate of Officers for approval by the Board. The Committee shall develop the criteria and",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 720 },
    }),

    // Footer Page Number
    new Paragraph({
        children: [
            new TextRun({
                text: "6",
                font: "Arial",
                size: 22,
                color: "000000",
            }),
        ],
        alignment: AlignmentType.CENTER,
    }),
];
```