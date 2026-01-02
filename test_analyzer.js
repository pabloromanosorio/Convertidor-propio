const { extractCandidates } = require('./src/analyzer/extractor');

const sampleText = `
The World Health Organization (WHO) has announced a new initiative.
Mr. John Smith, lead researcher at Apex Labs, stated that the Clinical Trial for generic 
Data Processing Units (DPU) will begin in London. 
The Project Alpha team is ready. The Service Level Agreement (SLA) is signed.
This Service Level Agreement is critical.
`;

console.log("--- Running Hybrid Analyzer Stage 1 ---");
const results = extractCandidates(sampleText);

console.log(JSON.stringify(results, null, 2));
