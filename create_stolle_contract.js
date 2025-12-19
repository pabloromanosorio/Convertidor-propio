const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType,
        LevelFormat, BorderStyle, WidthType, ShadingType, VerticalAlign, PageBreak,
        Header, Footer, PageNumber } = require('docx');
const fs = require('fs');

// Table border style
const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "000000" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Times New Roman", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 28, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 0, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "main-sections",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 360 } } } }] },
      { reference: "sub-items",
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.LOWER_LETTER, text: "%2)", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 1080, hanging: 360 } } } }
        ] },
      { reference: "equipment-list",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "1.1.%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 540 } } } }] },
      { reference: "roman-list",
        levels: [{ level: 0, format: LevelFormat.LOWER_ROMAN, text: "(%1)", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "alpha-list",
        levels: [{ level: 0, format: LevelFormat.LOWER_LETTER, text: "%1)", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "STOLLE MACHINERY COMPANY LLC", bold: true, size: 20 }),
                   new TextRun({ text: "                    ", size: 20 }),
                   new TextRun({ text: "CANPACK COLOMBIA S.A.S.", bold: true, size: 20 })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun("CONTRACT NO. 25-149  PAGE NO. "), new TextRun({ children: [PageNumber.CURRENT] })]
      })] })
    },
    children: [
      // Title
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
        children: [new TextRun({ text: "STOLLE MACHINERY COMPANY LLC", bold: true, size: 28 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 },
        children: [new TextRun({ text: "CONTRACT NO. 25-149", bold: true, size: 28 })] }),

      // Introduction
      new Paragraph({ spacing: { after: 200 },
        children: [new TextRun("concluded in Centennial, CO, USA on July 29th, 2025.")] }),

      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("by and between:")] }),

      // Seller
      new Paragraph({ spacing: { after: 120 },
        children: [
          new TextRun({ text: "STOLLE MACHINERY COMPANY LLC,", bold: true }),
          new TextRun(" a limited liability company organized and existing under the laws of the State of Colorado, with the registered address at 6949 South Potomac St. Centennial, CO 80112-4036, USA, hereinafter called the "),
          new TextRun({ text: "\"Seller\",", bold: true }),
          new TextRun(" duly represented by:")
        ] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 200 },
        children: [new TextRun("Ms. Carolyn Crouch - Vice President, authorised to solely represent the Seller,")] }),

      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("and")] }),

      // Buyer
      new Paragraph({ spacing: { after: 120 },
        children: [
          new TextRun({ text: "CANPACK Colombia S.A.S.,", bold: true }),
          new TextRun(" a Corporation existing and duly organized in accordance with the laws of Colombia, registered in the Chamber of Commerce the 26th of September of 2017 under the number 02262465 of the book IX, identified with NIT. 901121179, address: Tocancipa (Cundinamarca), Km 1.5 Via Briceno - Zipaquira Vereda Verganzo S. Tibitoc, Colombia, hereinafter referred to as the "),
          new TextRun({ text: "\"Buyer\",", bold: true }),
          new TextRun(" duly represented by:")
        ] }),
      new Paragraph({ indent: { left: 720 }, children: [new TextRun("Mr. Camilo Ernesto Perez Bustos - General Manager, and")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 200 },
        children: [new TextRun("Mr. William Pena - Operational Manager.")] }),

      new Paragraph({ spacing: { after: 240 },
        children: [new TextRun("Having in mind the good repute of the Seller on the market, the position of the Buyer being the supplier of containers to demanding first class clients and a development of a successful co-operation, the Parties have concluded the following Contract:")] }),

      // SECTION 1: SUBJECT OF THE CONTRACT
      new Paragraph({ spacing: { before: 240, after: 120 },
        children: [new TextRun({ text: "1. SUBJECT OF THE CONTRACT", bold: true })] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.1. The Seller shall sell to the Buyer the following Equipment (hereinafter collectively referred to as "),
                   new TextRun({ text: "\"Equipment\"", bold: true }),
                   new TextRun("), as specified in detail in Enclosure No. 1 hereto, for one of the Buyer's aluminium beverage can manufacturing lines located in South America:")] }),

      new Paragraph({ indent: { left: 720 }, spacing: { after: 80 },
        children: [new TextRun("1.1.1. One (1) Dynaform 165 Cupping System with One (1) Sixteen (16) outs Die Set for 26.9cl Cansize, One (1) Fifteen (15) outs Die Set for 33cl Cansize, One (1) Fourteen (14) outs Die Set for 35.5cl Cansize, Thirteen (13) outs Die Set for 47.3cl Cansize and complete coil handling system with Die set safety turnover unit and Critical Spares;")] }),

      new Paragraph({ indent: { left: 720 }, spacing: { after: 80 },
        children: [new TextRun("1.1.2. Two (2) 36MRT Concord Decorators with 8 ink stations to run the following can sizes: 47.3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26.9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202;")] }),

      new Paragraph({ indent: { left: 720 }, spacing: { after: 80 },
        children: [new TextRun("1.1.3. Ten (10) individual DG250 Tall Cabinet Spray with Controls for fourteen machines to run the following can sizes: 47.3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26.9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202;")] }),

      new Paragraph({ indent: { left: 720 }, spacing: { after: 120 },
        children: [new TextRun("1.1.4. Nine (9) B626 Bodymakers to run the following can sizes: 47.3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26.9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.2. If the Equipment contains any program necessary to operate it, or if any such program is not included but needed, the Seller shall deliver such program together with the Equipment and hereby grants to the Buyer a world-wide, irrevocable and non-exclusive right in perpetuity to use such program in order to operate the Equipment, to modify and/or substitute it or parts of it within scope necessary to adjust it to the modification of the technological line (however, the safety portion of the software shall not be released to be modified), a component of which the Equipment shall constitute, and to dispose of rights to the program within the scope of any disposals of the Equipment (i.e. sale, rent, lease, donation). The program and the rights over such program granted as described hereinabove are included into the Total Price. Whenever the term Equipment is used hereunder it also means the program necessary to operate the Equipment, including but not limited to representations and warranties hereunder as regards the Equipment.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.3. The Equipment as per par. 1.1 shall constitute components of a D & I beer and beverage 47.3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26.9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202 aluminum can manufacturing system which nominal output shall be 4000 cans per minute (CPM).")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.4. The Equipment shall comply with the Technical Specification agreed between the Seller and the Buyer and contained in Enclosure No. 1 hereto, constituting an integral part hereof.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.5. The Technical Specification as per par. 1.4 shall be submitted to the Buyer's engineering company as indicated in par. 16.14 and shall be confirmed by the Buyer's engineering company. The Seller shall be fully responsible for the execution of this confirmation. In case of any problems from the side of the Buyer's engineering company, the Seller shall notify the Buyer about it in writing.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.6. The Equipment Controls shall be Allen-Bradley Control Logix and/or Compact Logic with Ethernet Interface for Line Control and a second Ethernet Interface for HMI and internal VFD communication. The Seller represents and guarantees that it has a perpetual, worldwide and irrevocable right to use the above Allen-Bradley Control Logix in order to use, operate and sell the Equipment and to grant the Buyer the right to operate, use and transfer the rights to the Equipment as per this Contract.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.7. Electrical system shall be 440V/3ph/60Hz, 4 wires (L1, L2, L3, GND), 3 pole disconnect.")] }),

      new Paragraph({ spacing: { after: 80 },
        children: [new TextRun("1.8. The Equipment shall conform to:")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 80 },
        children: [new TextRun("a) EU \"New Approach\" Directives (including, without limitation, 2006/42/EC Machinery Directive and 2014/30/UE Electromagnetic Compatibility Directive), and be CE marked; and")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 120 },
        children: [new TextRun("b) the Regulatory Standards as provided for in Colombian labor legislation, including but not limited to the RETIE (Reglamento Tecnico de Instalaciones Electricas) standard.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("The relevant declarations of conformity and/or certificates confirming the Equipment's conformity with the abovementioned standards and norms shall be provided to the Buyer on or before the delivery date and within the Total Price.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.9. The Seller is fully responsible for (i) providing a sufficient number of technicians in order to render the Services set forth herein, and (ii) adopting all necessary measures and incurring in all costs to obtain the applicable permissions or visas to allow the technicians to enter into and provide the Services in the territory of Colombia.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("1.10. Notwithstanding any provision of this Contract, the Seller undertakes to comply with all applicable labor and social security legislation while rendering to the Buyer any Services whatsoever. The Seller undertakes, without any limitation to the foregoing, (i) to pay on time and according to applicable legislation any and all individuals employed for the rendering the Service to the Buyer; (ii) to provide any individual employed for the rendering Services to the Buyer with all applicable personal safety equipment and to inspect and assure its actual use by the individuals, and (iii) to assure that such individuals will comply fully with any and all safety instructions or policies of the Buyer. The Parties expressly acknowledge that this Contract does not create any employment relationship between Buyer and the Seller or individuals which are employed by the Seller for the rendering Services. Hence, the Seller undertakes to immediately bear any and all costs, expenses, losses and damages in relation to lawsuits or administrative proceedings of any nature whatsoever, including but not limited to individual labor claims, that might be brought against the Seller in regard to these individuals.")] }),

      new Paragraph({ spacing: { after: 80 },
        children: [new TextRun("1.11. The Seller represents to the Buyer that:")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("a) the Equipment has been fully developed by the Seller,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("b) the Seller has the full, clear, unencumbered and valid title to transfer the ownership of the Equipment to the Buyer,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("c) the Equipment shall be manufactured in the USA,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("d) no third persons, especially employees of the Seller or co-operators or alike, have any rights to the Equipment,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("e) there are no circumstances restricting the Seller's right to conclude this Contract according to the terms and conditions set forth in it,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("f) no third party rights (including but not limited to patents and industrial designs relating to the Equipment) were infringed in connection with the development of the Equipment by the Seller and/or purchasing Equipment by the Buyer, with using the Equipment for manufacturing its products and/or by any method and/or process applied in connection with the use of the Equipment, process applied in connection with the use of the Equipment and/or the apparatus as the Equipment is a part of,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("g) no proceedings or disputes relating to the rights of the Seller to Equipment are being conducted or threatened and there are no grounds for the commencement of such proceedings or disputes,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("h) the Seller has the power to execute this Contract and to perform its obligations under this Contract and has taken all necessary action to authorize such execution and performance,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("i) execution and performance of the Contract by the Seller do not violate or conflict with any law applicable, any provision of its internal and/or corporate documents, any order or judgment of any court or other agency of government applicable to the Seller or any of its assets or any contractual restriction binding on or affecting it or any of its assets,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("j) the Seller's commitments under this Contract constitute its legal, valid and binding obligations, enforceable in accordance with their respective terms (subject to applicable bankruptcy, reorganization, insolvency, moratorium or similar laws affecting creditors' rights generally and subject, as to enforceability, to equitable principles of general application),")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("k) all information that is furnished in writing by or on behalf of the Seller to the Buyer is true, accurate and complete in every material respect,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("l) the Equipment shall be in compliance with all applicable laws, including, without limitation, all federal, State and local laws, ordinances, regulations, standards, rules, requirements, and policies, administrative rulings, court judgements and decrees, and all amendments thereto, including those imposed by any governmental or regulatory authority and any local regulatory requirements and all applicable industry standards which apply from time to time to the supply or use or re-sale of the Equipment in those countries where this Contract will be performed, including but not limited to regulations related to protection of environment, health and safety in Colombia,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("m) the Services provided by the Seller shall be in compliance with statutory regulations related to health and safety rules (including protective clothing for Seller's technicians and other employees) in the place where Services are performed; the Seller shall instruct its employees about the abovementioned statutory regulations,")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 120 },
        children: [new TextRun("n) the Seller shall observe all applicable laws and standards on discrimination at work (sex, race, ethnic background, religion, world-view, disability, age, sexual orientation) and it shall not make use of slave or children labor.")] }),

      // SECTION 2: DELIVERY TIME
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ spacing: { before: 240, after: 120 },
        children: [new TextRun({ text: "2. DELIVERY TIME", bold: true })] }),

      new Paragraph({ spacing: { after: 80 },
        children: [new TextRun("2.1. The Equipment specified in par. 1.1 hereof shall be delivered FCA, with the following schedule:")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("a) Equipment specified in par. 1.1.1, 1.1.2 FCA Seller's plant Centennial US, according to Incoterms 2020 and 1.1.4 FCA Seller's plant Brazil, according to Incoterms 2020 on or before August 24, 2026, and")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 120 },
        children: [new TextRun("b) Equipment specified in par. 1.1.3 FCA Seller's plant Brazil on or before August 31, 2026.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("2.2. The Buyer shall not be obliged to pick the Equipment up earlier than on the abovementioned dates. The Parties agree that time of delivery is of the essence.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("2.3. The Equipment shall only be delivered after having passed the Preliminary Acceptance Test specified in Section 5 of this Contract with a positive result.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("2.4. The Seller shall deliver Documentation as per Enclosure No. 2.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("2.5. The term \"delivery\" shall mean the date of delivery of last piece of Equipment, so that the Equipment and each part thereof has been delivered to the Buyer.")] }),

      // SECTION 3: PRICES
      new Paragraph({ spacing: { before: 240, after: 120 },
        children: [new TextRun({ text: "3. PRICES", bold: true })] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("3.1. The Total Price for the Equipment is USD 19,396,648.00 (say: nineteen million three hundred ninety-six thousand six hundred forty-eight 00/100; "),
                   new TextRun({ text: "\"Total Price\"", bold: true }),
                   new TextRun(") as specified in detail in Enclosure No. 3.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("3.2. The Total Price shall be final and unchangeable and includes inter alia adequate packing as per Section 11 of this Contract. The Seller shall have no rights to demand supplementary payments or any price alterations.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("3.3. The Total Price includes:")] }),

      // Price Table
      new Table({
        columnWidths: [1200, 5000, 800, 2000],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA },
                shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Item", bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5000, type: WidthType.DXA },
                shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Description", bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA },
                shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "QTY", bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA },
                shading: { fill: "E0E0E0", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Price [USD]", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("1.1.1")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("One (1) Dynaform 165 Cupping System with One (1) Sixteen (16) outs Die Set for 26.9cl Cansize, One (1) Fifteen (15) outs Die Set for 33cl Cansize, One (1) Fourteen (14) outs Die Set for 35.5cl Cansize, Thirteen (13) outs Die Set for 47.3cl Cansize and complete coil handling system with Die set safety turnover unit and Critical Spares")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("1")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun("5,885,310.00")] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("1.1.2")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Two (2) 36MRT Concord Decorators with 8 ink stations to run the following cansizes: 47.3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26.9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("2")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun("5,604,160.00")] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("1.1.3")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Ten (10) individual DG250 Tall Cabinet Spray with Controls for fourteen machines to run the following cansizes: 47.3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26.9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("1")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun("1,963,735.00")] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("1.1.4")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Nine (9) B626 Bodymakers to run the following cansizes: 47.3cl x 211/202, 35.5cl x 211/202, 33cl x 211/202, 26.9cl x 204/202 and 204/200, in the future ready to 56.8cl x 211/202")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("9")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun("5,943,443.00")] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, columnSpan: 3,
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "TOTAL:", bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "19,396,648.00", bold: true })] })] }),
            ]
          }),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 120 },
        children: [new TextRun("3.4. The Parties agree that the fee for the Seller's Services (\"Service Fee\") shall be calculated according to the following rates:")] }),

      // Service Rates Table
      new Table({
        columnWidths: [3000, 3000, 3000],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, columnSpan: 3,
                shading: { fill: "E0E0E0", type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "SYSTEM COMMISSIONING CONTRACT SERVICE RATES ELECTRICAL/MECHANICAL/TRAINING/START UP", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, rowSpan: 3,
                shading: { fill: "F0F0F0", type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Daily Rates", bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Weekdays")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$1,448", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Saturday")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$1,592", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Sunday/Holiday")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$2,172/$4,344", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, rowSpan: 5,
                shading: { fill: "F0F0F0", type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Hourly/Other Rates", bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Weekdays")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$121/hr", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Saturday")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$133/hr", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Sunday/Holiday")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$181/$362/hr", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Travel time-per day")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$1,448", bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Stand-by day")] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Rate assigned above for particular day.")] })] }),
            ]
          }),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 120 },
        children: [new TextRun("3.6. The invoice for the Services shall be issued subject to the time sheet confirmed by the Buyer indicating the rates as per par. 3.4 and costs as per par. 3.5, if covered by the Seller, under condition that the Final or Conditional Acceptance Test is executed subject to Section 12 of this Contract. The Service Fee shall be paid within sixty (60) days following the date of receipt of the invoice by the Buyer.")] }),

      new Paragraph({ spacing: { after: 80 },
        children: [new TextRun("3.7. Payment terms:")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("a) 20% of the Price of the Equipment as per 1.1.1 and 1.1.2 - down payment by means of wire transfer not later than on January 15th 2026 and of the Equipment as per 1.1.3 and 1.1.4 - down payment by means of wire transfer not later than on March 1st 2026;")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("b) 70% of the price of individual piece of Equipment as specified in par. 3.3 - by means of wire transfer within ninety (90) days from the delivery of the respective piece of Equipment as per par. 2.1 against properly issued shipping documents;")] }),
      new Paragraph({ spacing: { after: 60 },
        children: [new TextRun("The Buyer shall have the right not to effect the abovementioned payments until the Seller provides the Buyer with all properly issued documents.")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("c) 10% of the individual piece of Equipment as specified in par. 3.3 - by means of wire transfer:")] }),
      new Paragraph({ indent: { left: 1080 }, spacing: { after: 60 },
        children: [new TextRun("i) against the presentation of the Final Acceptance Test Protocol for the given piece of Equipment, executed at the plant in the Place of Destination, accepted by Project Manager - Mr Miroslaw Hawran or Mr Pawel Michalowski or Mr Lukasz Dobrzanski, against the invoice issued after the Final Acceptance Test Protocol for each piece of Equipment; or")] }),
      new Paragraph({ indent: { left: 1080 }, spacing: { after: 120 },
        children: [new TextRun("ii) in the circumstances described in par. 12.5, against the presentation of Conditional Acceptance Test Protocol for the given piece of Equipment, executed at the plant in the Place of Destination, accepted by Project Manager - Mr Miroslaw Hawran or Mr Pawel Michalowski or Mr Lukasz Dobrzanski, against the invoice issued after the Conditional Acceptance Test Protocol for each piece of Equipment.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("3.8. All payments to the Seller are to be made as per the banking instructions attached as per Enclosure No. 4.")] }),

      new Paragraph({ spacing: { after: 80 },
        children: [new TextRun("3.9. Seller declares that:")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("a) Original invoice indicating country of origin, specification, Harmonized CODE (HSCODE), net weight and gross weight of each equipment/item should be shown on invoice and packing list. Prior to sending the original invoice, the draft of the invoice, packing list should be sent to the Buyer by email first on sylwia.kutnik@canpack.com to check and confirm the draft. Once confirmed all original documents are required to be sent to the Buyer as per the address mentioned in par. 8.5;")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 120 },
        children: [new TextRun("b) packing list will be provided with every shipment.")] }),

      // SECTION 5: INSPECTION AND TESTING
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ spacing: { before: 240, after: 120 },
        children: [new TextRun({ text: "5. INSPECTION AND TESTING. TRAINING OF THE BUYER'S PERSONNEL", bold: true })] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("5.1. It is the Seller's obligation to perform with positive result before the delivery of the Equipment, a Preliminary Acceptance Test of the Equipment with participation of the Buyer or the Buyer's representative. The Preliminary Acceptance Test shall be deemed as performed with positive result only when the Preliminary Acceptance Test Protocol confirming the preliminary acceptance of the Equipment is signed by the Buyer or the Buyer's representative. The Preliminary Acceptance Test of the Equipment shall be carried out at the Seller's premises prior to shipment. The Buyer or the Buyer's representatives shall have the right to inspect the Equipment before the Preliminary Acceptance Test.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("5.2. The inspection of the Equipment shall be carried out at the Seller's plant in the operation and servicing of all offered Equipment. The Buyer shall supply free of charge to the Seller for performance of the Preliminary Acceptance Test a minimum amount of 10,000 lbs coil of body stock for the Equipment as per par. 1.1 to facilitate the Preliminary Acceptance Test run. These materials shall be at the Seller's plant one (1) month before the agreed date of the Preliminary Acceptance Test. The Seller shall inform the Buyer about estimate date of the Preliminary Acceptance Test no later than three (3) months in advance to enable the Buyer to deliver the materials. Any quantity of body stock or cans not used during the Preliminary Acceptance Test run shall be returned to the Buyer at the time of Equipment shipment. All scrap (and the value of the scrap) generated from this Preliminary Acceptance Test run shall become the property of the Seller.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("5.3. The Seller's notification of the readiness of the Equipment for the inspection, training and the Preliminary Acceptance Test (also referred to as the \"buy-off\") shall be received by the Buyer not later than twenty-one (21) days prior to the beginning of the Preliminary Acceptance Test and training period.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("5.4. In the event the Seller confirms the readiness of the Equipment for \"buy-off\", and after the arrival of the Buyer or the Buyer's representatives at the Seller's plant, the Equipment should not be ready to be \"bought-off\", the Seller shall pay for reasonable travel and living expenses to allow the Buyer or its representatives to stay at the Seller's plant or leave and return to conclude the \"buy-off\" when the Equipment is ready. Then the Equipment shall again be subject of a Preliminary Acceptance Test. Nevertheless, the above does not exclude the Seller's liability for not delivering the Equipment on time.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("5.5. After the Preliminary Acceptance Test, when the Equipment meets the contractual requirements, an authorized representative of the Buyer shall sign the respective Preliminary Acceptance Test Protocol confirming the preliminary acceptance of the Equipment. For avoidance of doubt the Preliminary Acceptance Test shall not be deemed as the confirmation of the compliance of the Equipment with any performance criteria specified in the Contract. The Buyer may authorize an engineering company to carry-out the buy-off procedure in its name.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("5.6. Should it be ascertained in the process of any of the Preliminary Acceptance Test carried out in the presence of the Buyer or Buyer's representative that the Equipment is defective or does not comply with the contractual terms, the Seller shall eliminate such defects. After elimination of the defects the Equipment shall undergo a repeated Preliminary Acceptance Test.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("5.7. The Seller may perform the Preliminary Acceptance Test on its own, if the Buyer informs the Seller in advance, in writing that it waives its right to participate in the Preliminary Acceptance Test and accept the Preliminary Acceptance Test Protocol.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("5.8. The Seller shall provide the Buyer with training of the Buyer's employees concerning operating and servicing of the Equipment. The price for training is included in the Total Price. The training can be accomplished according to Seller's training program provided that the Seller shall accept modifications of that program proposed by the Buyer, if they are of standard nature and do not impose any extraordinary burden on the Seller. The training in Seller's facility shall involve classroom sessions and \"hands on\" practice with Equipment and tooling. The training shall cover: Theory, Functions of Components, Setup Procedure, Operations, Tooling, Electrical Controls, Preventive Maintenance, Safety, Lubrication, Troubleshooting, Specification and Quality Control.")] }),

      // SECTION 6: PENALTY CLAUSE
      new Paragraph({ spacing: { before: 240, after: 120 },
        children: [new TextRun({ text: "6. PENALTY CLAUSE", bold: true })] }),

      new Paragraph({ spacing: { after: 80 },
        children: [new TextRun("6.1. If the Seller fails to meet the time of delivery specified in par. 2.1 hereof, the Seller shall pay the penalty as follows:")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(i) First week of delay - grace period;")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(ii) Two weeks of delay - 0.5% of the Total Price;")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(iii) Three weeks of delay - Additional 0.5% of the Total Price so in total 1% of the Total Price;")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(iv) Four weeks of delay - Additional 1% of the Total Price so in total 2% of the Total Price;")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(v) Five weeks of delay - Additional 1% of the Total Price so in total 3% of the Total Price;")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(vi) Six weeks of delay - Additional 1% of the Total Price so in total 4% of the Total Price;")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 120 },
        children: [new TextRun("(vii) Seven weeks of delay - Additional 1% of the Total Price so in total 5% of the Total Price,")] }),
      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("up to maximum five percent (5%) of the Total Price. Should the damage sustained by the Buyer exceed the amount of the penalty, the Buyer shall be entitled to claim the appropriate supplementary compensation.")] }),

      new Paragraph({ spacing: { after: 80 },
        children: [new TextRun("6.2. The Seller shall be exempt from the penalty indicated in par. 6.1 of this Contract, only if it proves that it has not been able to deliver the Equipment on time according to par. 2.1 of this Contract due to a shortage of components in the market caused directly by global supply chain disruptions impacting the global market of components required to manufacture the Equipment in an extraordinary way (the "),
                   new TextRun({ text: "\"Global Supply Chain Crisis\"", bold: true }),
                   new TextRun("), provided that:")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(i) such Global Supply Chain Crisis and the resulting delay in delivery of the Equipment could not have been controlled and predicted at the moment of signing of this Contract; and")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(ii) the Seller has exercised its best efforts to avoid the consequences of such Global Supply Chain Crisis and the resulting delay in delivery of the Equipment; and")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 60 },
        children: [new TextRun("(iii) the Seller has as soon as possible notified the Buyer in writing about the delay in delivery of the Equipment, the exact reasons of delay and its likely or potential duration; and")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 120 },
        children: [new TextRun("(iv) the Seller has used its best endeavors to mitigate the effects of such delay on the Buyer.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("6.3. The Seller hereby confirms that it has implemented an adequate contingency and disaster recovery plan outlining how it will manage the Global Supply Chain Crisis and any other factors that could disrupt the delivery of the Equipment to the Buyer, including but not limited to by securing substitute components of identical quality or alternative supply sources, to ensure that it delivers the Equipment according to this Contract with no additional costs for the Buyer.")] }),

      // SECTION 7: SELLER'S GUARANTEE AND WARRANTY
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ spacing: { before: 240, after: 120 },
        children: [new TextRun({ text: "7. SELLER'S GUARANTEE AND WARRANTY", bold: true })] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("7.1. The Seller warrants to the Buyer that the Equipment and Services furnished by the Seller shall conform to performance specifications and requirements as stated in this Contract and Enclosures hereto, shall be in compliance with representations made under Section 1 hereof, shall be in compliance with current technological knowledge and the latest good technological standards, and shall be suitable for its intended purpose, as defined in this Contract, and free of any defects. The Equipment delivered hereunder shall be brand new and shall not contain any used components whatsoever.")] }),

      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun("7.2. The Seller warrants and guarantees that the Equipment and all parts thereof (including, but not limited to, any program as described under par. 1.2 hereof) may be used by the Buyer for manufacturing cans of any producer of beverages and beer and that no claims may be raised against the Buyer in this respect by any third parties, especially customers of the Seller.")] }),

      // Note about document continuation
      new Paragraph({ spacing: { before: 360, after: 120 },
        children: [new TextRun({ text: "[Document continues with additional sections including: Section 8 - Place of Destination, Section 9 - Transfer of Ownership, Section 10 - Insurance, Section 11 - Packing, Section 12 - Acceptance Tests, Section 13 - Confidentiality, Section 14 - Force Majeure, Section 15 - Termination, Section 16 - Miscellaneous Provisions, and signature pages]", italics: true })] }),

      // Signature block placeholder
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ spacing: { before: 480, after: 240 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "SIGNATURE PAGE", bold: true, size: 28 })] }),

      new Paragraph({ spacing: { after: 360 },
        children: [new TextRun("IN WITNESS WHEREOF, the Parties have executed this Contract as of the date first written above.")] }),

      // Signature Table
      new Table({
        columnWidths: [4500, 4500],
        rows: [
          new TableRow({
            children: [
              new TableCell({ borders: { top: { style: BorderStyle.NIL }, bottom: { style: BorderStyle.NIL }, left: { style: BorderStyle.NIL }, right: { style: BorderStyle.NIL } },
                width: { size: 4500, type: WidthType.DXA },
                children: [
                  new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "SELLER:", bold: true })] }),
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "STOLLE MACHINERY COMPANY LLC", bold: true })] }),
                  new Paragraph({ spacing: { after: 240 }, children: [new TextRun("")] }),
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun("_________________________________")] }),
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun("Ms. Carolyn Crouch")] }),
                  new Paragraph({ children: [new TextRun("Vice President")] }),
                ] }),
              new TableCell({ borders: { top: { style: BorderStyle.NIL }, bottom: { style: BorderStyle.NIL }, left: { style: BorderStyle.NIL }, right: { style: BorderStyle.NIL } },
                width: { size: 4500, type: WidthType.DXA },
                children: [
                  new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "BUYER:", bold: true })] }),
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "CANPACK COLOMBIA S.A.S.", bold: true })] }),
                  new Paragraph({ spacing: { after: 240 }, children: [new TextRun("")] }),
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun("_________________________________")] }),
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun("Mr. Camilo Ernesto Perez Bustos")] }),
                  new Paragraph({ children: [new TextRun("General Manager")] }),
                ] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: { top: { style: BorderStyle.NIL }, bottom: { style: BorderStyle.NIL }, left: { style: BorderStyle.NIL }, right: { style: BorderStyle.NIL } },
                width: { size: 4500, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("")] })] }),
              new TableCell({ borders: { top: { style: BorderStyle.NIL }, bottom: { style: BorderStyle.NIL }, left: { style: BorderStyle.NIL }, right: { style: BorderStyle.NIL } },
                width: { size: 4500, type: WidthType.DXA },
                children: [
                  new Paragraph({ spacing: { before: 240, after: 240 }, children: [new TextRun("")] }),
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun("_________________________________")] }),
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun("Mr. William Pena")] }),
                  new Paragraph({ children: [new TextRun("Operational Manager")] }),
                ] }),
            ]
          }),
        ]
      }),
    ]
  }]
});

const outputPath = "/Users/pabloromanromanosorio/Downloads/L39_STOLLE_25-149_CORRECTED.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log("Document created successfully: " + outputPath);
}).catch(err => console.error("Error:", err));
