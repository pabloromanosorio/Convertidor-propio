try {
    console.log("Start debugging...");
    require('dotenv').config();
    const fs = require('fs');
    console.log("fs loaded");
    
    // This is the likely failure point if the SDK version is weird
    const { GoogleGenAI } = require('@google/genai');
    console.log("SDK loaded");

    const { normalizeToPdf } = require('./src/input');
    const { pdfToImages, LayoutSchema } = require('./src/middleware');
    const { generateDocx } = require('./src/renderer');
    console.log("Local modules loaded");

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, apiVersion: "v1alpha" });
    console.log("Client init done");
} catch (e) {
    console.error("BOOT ERROR:", e);
}
