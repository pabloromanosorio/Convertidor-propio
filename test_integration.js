const { analyzeDocument } = require('./src/analyzer/analyzer');
const dotenv = require('dotenv');
dotenv.config();

async function testIntegration() {
    console.log("--- 🚀 Testing Full Integration ---");

    const sampleText = `
    The shipment will be delivered under DPU terms (Incoterms 2020) to the Hamburg warehouse.
    The SLA requires signature upon receipt. 
    The Computer must be rebooted.
    `;

    const mockStyleGuide = `
    Glossary:
    - Computer = Ordenador
    - Warehouse = Almacén
    `;

    try {
        const report = await analyzeDocument(sampleText, {
            styleGuideText: mockStyleGuide,
            domain: "Logistics"
        });

        console.log("\n--- 🏁 FINAL REPORT ---");
        console.log(JSON.stringify(report, null, 2));

    } catch (e) {
        console.error("Integration Failed:", e);
    }
}

testIntegration();
