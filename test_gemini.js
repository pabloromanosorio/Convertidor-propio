require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
const { pdfToImages } = require('./src/middleware'); // Reuse our robust image converter
const { normalizeToPdf } = require('./src/input');

// --- CONFIGURATION ---
const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, apiVersion: "v1alpha" });
const MODEL_NAME = "gemini-3-pro-preview"; 

async function runTest(inputFile) {
    console.log("🚀 Starting Isolation Test...");
    
    // 1. Image Prep
    let images = [];
    if (inputFile.endsWith('.pdf')) {
        console.log("... Converting PDF to Images");
        images = await pdfToImages(inputFile);
    } else {
        throw new Error("Please provide a PDF for this test");
    }

    const imagePath = images[0];
    console.log(`📸 Testing with Page 1: ${imagePath}`);
    const imageBuffer = fs.readFileSync(imagePath).toString('base64');

    // 2. API Call
    const prompt = "Describe the layout of this page in JSON format.";
    console.log(`🧠 Sending to Gemini 3.0 (${MODEL_NAME})...`);
    console.log("... Waiting for Gemini to Think (This may take 30-60s) ...");

    console.time("GeminiResponse");
    try {
        const response = await client.models.generateContent({
            model: MODEL_NAME,
            contents: [
                { 
                    role: "user", 
                    parts: [
                        { text: prompt }, 
                        { 
                            inlineData: { mimeType: "image/png", data: imageBuffer }, 
                            mediaResolution: { level: "media_resolution_medium" } 
                        }
                    ] 
                }
            ],
            config: {
                responseMimeType: "application/json",
                thinkingConfig: { 
                    includeThoughts: true,
                    thinkingLevel: "HIGH"
                },
                temperature: 0.1 
            }
        });
        console.timeEnd("GeminiResponse");
        
        console.log("🔍 Full Response Object Keys:", Object.keys(response));
        // console.log("🔍 Full Response:", JSON.stringify(response, null, 2)); // Careful with size

        // Try direct access or nested access
        const candidates = response.candidates || (response.response ? response.response.candidates : null);
        
        if (!candidates) {
            throw new Error("No candidates found in response");
        }

        const candidate = candidates[0];
        console.log(`✅ API Response Received! Parts: ${candidate.content.parts.length}`);
        
        candidate.content.parts.forEach((part, index) => {
            console.log(`\n--- Part ${index} ---`);
            // Check if it's thought or text
            if (part.thought) {
                console.log("[THOUGHTS]:", part.text); 
            } else {
                console.log("[TEXT]:", part.text);
            }
        });
        console.log("----------------");

    } catch (e) {
        console.error("❌ API ERROR:", e.message);
        if (e.response) {
            console.error("🔍 Detail:", JSON.stringify(e.response, null, 2));
        }
    }
}

const testFile = process.argv[2] || 'index.pdf'; // Default to index.pdf
runTest(testFile);
