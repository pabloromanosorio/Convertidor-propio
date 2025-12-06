const { GoogleGenAI } = require('@google/genai');
const client = new GoogleGenAI({ apiKey: "test" });
console.log("Client keys:", Object.keys(client));
if (client.models) console.log("Client.models keys:", Object.keys(client.models));
