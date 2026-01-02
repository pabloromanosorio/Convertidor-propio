const { ingestStyleGuide } = require('./src/analyzer/ingester');
const dotenv = require('dotenv');
dotenv.config();

async function test() {
    console.log("--- Testing Ingester Module ---");

    const mockStyleGuide = `
    OFFICIAL STYLE GUIDE FOR 'TECH CORP'
    
    1. Tone:
    Always maintain a professional, yet approachable tone. Avoid overly academic jargon.
    
    2. Terminology:
    - ALWAYS translate "Computer" as "Ordenador" (Spain) or "Computadora" (Latam).
    - NEVER use "Computador".
    - "Soft Skills" should remain in English.
    
    3. Formatting:
    - Currency should be formatted as € 1.234,00.
    - Dates: DD-MM-YYYY.
    `;

    console.log("Input Text:", mockStyleGuide);

    try {
        const rules = await ingestStyleGuide(mockStyleGuide);
        console.log("\n--- RESULT ---");
        console.log(JSON.stringify(rules, null, 2));
    } catch (e) {
        console.error("Test Failed:", e);
    }
}

test();
