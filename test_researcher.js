const { researchBatch } = require('./src/analyzer/researcher');

const sampleText = `
The shipment will be delivered under DPU terms to the warehouse in Hamburg. 
Please ensure the SLA is signed before the driver leaves.
`;

const termsToResearch = ["DPU", "SLA"];

async function test() {
    console.log("--- Running Hybrid Analyzer Stage 4 (Researcher) ---");
    const results = await researchBatch(termsToResearch, sampleText);
    console.log(JSON.stringify(results, null, 2));
}

test();
