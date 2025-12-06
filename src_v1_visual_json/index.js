require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
const { normalizeToPdf } = require('./input');
const { pdfToImages, LayoutSchema } = require('./middleware');
const { generateDocx } = require('./renderer');

// --- CONFIGURATION ---
const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, apiVersion: "v1alpha" });
const MODEL_NAME = "gemini-3-pro-preview"; 

async function analyzePage(log, imagePath, pageNum) {

    const imageBuffer = fs.readFileSync(imagePath).toString('base64');

    

    const prompt = `
    Analyze this document page (Page ${pageNum}). Extract the layout into a strict JSON blueprint.
    
    CRITICAL RULES:
    1. Do not use \n in strings. Create new paragraph blocks.
    2. **TABLES:** Only use 'table' type if the content is CLEARLY a grid with borders or strict columnar alignment. Otherwise, use text/paragraphs.
    3. **SIGNATURES:** If you see a handwritten signature, do NOT transcribe it. Use 'generic_zone' with content "[Signature]".
    4. **FONTS:** Assume "Arial" for everything. Estimate the font size relative to standard body text (approx 22-24 for body, 28-32 for headers).
    5. **LISTS:** Detect lists. Use 'list_item'. 'list_type' MUST be "bullet" or "number".
    6. **EXTRACT THE DATA** into JSON. Do NOT output the schema definition itself.
    7. Ensure the top-level structure includes "_layout_reasoning", "document_settings", and "blocks".

    Output JSON strictly conforming to this example structure:
    {
      "_layout_reasoning": "My analysis of the page layout.",
      "document_settings": {
        "orientation": "portrait"
      },
      "blocks": [
        {
          "type": "paragraph",
          "alignment": "left",
          "indent_level": 0,
          "runs": [
            {
              "text": "This is a paragraph of text.",
              "bold": false,
              "size": 22
            }
          ]
        },
        {
          "type": "table",
          "column_ratios": [1, 1],
          "rows": [
            {
              "is_header": true,
              "cells": [{"content": "Header 1"}, {"content": "Header 2"}]
            }
          ]
        },
        {
          "type": "generic_zone",
          "content": "[Signature]"
        }
      ]
    }
    `;



        log(`🧠 [Page ${pageNum}] Sending to Gemini 3.0 (${MODEL_NAME}) with MEDIUM media resolution...`);



        



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



                // Use 'config' for @google/genai SDK



                            config: {



                                responseMimeType: "application/json", 



                                // Temporarily disabling thinkingConfig to isolate JSON output issues



                                // thinkingConfig: { 



                                //     includeThoughts: true,



                                //     thinkingLevel: "HIGH"



                                // },



                                temperature: 0.1 



                            }



            });



    



                    // Parse & Validate



    



                    const candidate = response.candidates[0];



    



                    if (!candidate || !candidate.content || !candidate.content.parts || !candidate.content.parts.length) {



    



                        throw new Error("Empty response from Gemini.");



    



                    }



    



            



    



                    // Logic: Find the part that is NOT a thought. 



    



                    // Gemini 3.0 with thinking enabled returns thoughts in parts[0] and result in parts[1].



    



                    let textPart = candidate.content.parts.find(p => !p.thought);



    



                    



    



                    // Fallback: If no explicit non-thought part (or if all are thoughts?), take the last part



    



                    if (!textPart) {



    



                         textPart = candidate.content.parts[candidate.content.parts.length - 1];



    



                    }



    



            



    



                    const rawText = textPart.text;



    



                    



    



                    // Log the first 100 chars to debug



    



                    // log(`🔍 Raw AI Response (Preview): ${rawText.substring(0, 100)}...`);



    



            



    



                    let json;



    



                    try {



    



                        // Clean up markdown code blocks if present (e.g. ```json ... ```)



    



                        const cleanText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();



    



                        json = JSON.parse(cleanText);



    



                    } catch (parseError) {



    



                        log(`❌ JSON Parse Failed. Raw Output:\n${rawText}`);



    



                        throw new Error("Failed to parse AI response as JSON.");



    



                    }



    



                    



    



                    // Relaxed validation



    



                    LayoutSchema.parse(json); 



    



                    return json.blocks;



        } catch (e) {



            log(`❌ API Error on page ${pageNum}: ${e.message}`);



            if (e.response) {



                 // log(`🔍 API Detail: ${JSON.stringify(e.response, null, 2)}`); 



                 // Less verbose logging unless needed



            }



            return []; 



        }

}



async function convertDocument(inputFile, outputDir, logCallback) {

    const log = (msg) => {

        console.log(msg);

        if (logCallback) logCallback(msg);

    };



    log(`🚀 [1/4] Starting conversion for: ${inputFile}`);

    if (!inputFile) throw new Error("Please provide a file path.");



    try {

        // 1. Normalize

        log("... Normalizing to PDF");

        const pdfPath = await normalizeToPdf(inputFile);

        log(`✅ Normalized to: ${pdfPath}`);

        

        // 2. Vision Processing

        log("... Converting PDF to Images");

        const images = await pdfToImages(pdfPath);

        log(`✅ Processed ${images.length} pages.`);



        // 3. AI Analysis Loop

        const allBlocks = [];

                for (let i = 0; i < images.length; i++) {

                    log(`... Analyzing Page ${i+1}/${images.length} with Gemini 3.0`);

                    

                    // Add delay for Rate Limiting (5s)

                    if (i > 0) {

                        log("... Pausing 5s for Rate Limit safety...");

                        await new Promise(r => setTimeout(r, 5000));

                    }

        

                    const pageBlocks = await analyzePage(log, images[i], i + 1);

                    allBlocks.push(...pageBlocks);

                    log(`✅ Page ${i+1} Complete`);

                    

                    // Optional: Force GC if possible (Node.js doesn't expose this by default without flags, but setting loop vars to null helps)

                }



        if (allBlocks.length === 0) {
            throw new Error("No blocks generated. Check API quota or image quality.");
        }

        // 4. Render
        log("... Generating Word Document");
        const timestamp = Date.now();
        const outputPath = path.join(outputDir || path.dirname(inputFile), `Converted_${timestamp}.docx`);
        generateDocx({ blocks: allBlocks }, outputPath);
        log(`🎉 Conversion Success! Saved to ${path.basename(outputPath)}`);
        
        return outputPath;
    } catch (error) {
        log(`❌ Fatal Error: ${error.message}`);
        console.error("Fatal Error:", error);
        throw error;
    }
}

// CLI Entry point
if (require.main === module) {
    const inputFile = process.argv[2]; 
    convertDocument(inputFile).then(out => console.log(`Result: ${out}`));
}

module.exports = { convertDocument };