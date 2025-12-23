/**
 * Multi-Provider LLM Client
 * Supports: Gemini, Claude (Anthropic), OpenAI
 */

require('dotenv').config();

// === PROVIDER SDKs ===
const { GoogleGenAI } = require('@google/genai');
const Anthropic = require('@anthropic-ai/sdk');
const OpenAI = require('openai');

// === AVAILABLE MODELS ===
const MODELS = {
    // Gemini Models
    'gemini-3-pro': { provider: 'gemini', id: 'gemini-3-pro-preview', name: 'Gemini 3 Pro' },
    'gemini-2.5-pro': { provider: 'gemini', id: 'gemini-2.5-pro-preview-05-06', name: 'Gemini 2.5 Pro' },
    'gemini-2.0-flash': { provider: 'gemini', id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash' },

    // Claude Models (Anthropic)
    'claude-sonnet-4.5': { provider: 'anthropic', id: 'claude-sonnet-4-5-20241022', name: 'Claude Sonnet 4.5' },
    'claude-opus-4.5': { provider: 'anthropic', id: 'claude-opus-4-5-20241022', name: 'Claude Opus 4.5' },
    'claude-sonnet-4': { provider: 'anthropic', id: 'claude-sonnet-4-20250514', name: 'Claude Sonnet 4' },
    'claude-opus-4': { provider: 'anthropic', id: 'claude-opus-4-20250514', name: 'Claude Opus 4' },
    'claude-3.5-sonnet': { provider: 'anthropic', id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet' },

    // OpenAI Models
    'gpt-4o': { provider: 'openai', id: 'gpt-4o', name: 'GPT-4o' },
    'gpt-4o-mini': { provider: 'openai', id: 'gpt-4o-mini', name: 'GPT-4o Mini' },
    'o1': { provider: 'openai', id: 'o1', name: 'OpenAI o1' },
    'o1-mini': { provider: 'openai', id: 'o1-mini', name: 'OpenAI o1-mini' },
    'o3': { provider: 'openai', id: 'o3', name: 'OpenAI o3' },
    'o3-mini': { provider: 'openai', id: 'o3-mini', name: 'OpenAI o3-mini' },
};

// === PROVIDER CLIENTS (lazy initialization) ===
let geminiClient = null;
let anthropicClient = null;
let openaiClient = null;

function getGeminiClient() {
    if (!geminiClient && process.env.GEMINI_API_KEY) {
        geminiClient = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
            apiVersion: "v1alpha"
        });
    }
    return geminiClient;
}

function getAnthropicClient() {
    if (!anthropicClient && process.env.ANTHROPIC_API_KEY) {
        anthropicClient = new Anthropic({
            apiKey: process.env.ANTHROPIC_API_KEY
        });
    }
    return anthropicClient;
}

function getOpenAIClient() {
    if (!openaiClient && process.env.OPENAI_API_KEY) {
        openaiClient = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }
    return openaiClient;
}

/**
 * Send a vision prompt to any supported model
 * @param {string} modelKey - Key from MODELS object
 * @param {string} prompt - Text prompt
 * @param {string} imageBase64 - Base64 encoded image
 * @param {Function} log - Logging function
 * @returns {Promise<string>} - Generated text response
 */
async function generateWithVision(modelKey, prompt, imageBase64, log = console.log) {
    const model = MODELS[modelKey];
    if (!model) {
        throw new Error(`Unknown model: ${modelKey}. Available: ${Object.keys(MODELS).join(', ')}`);
    }

    log(`🤖 Using ${model.name} (${model.provider})`);

    switch (model.provider) {
        case 'gemini':
            return await generateGemini(model.id, prompt, imageBase64, log);
        case 'anthropic':
            return await generateAnthropic(model.id, prompt, imageBase64, log);
        case 'openai':
            return await generateOpenAI(model.id, prompt, imageBase64, log);
        default:
            throw new Error(`Unknown provider: ${model.provider}`);
    }
}

// === GEMINI IMPLEMENTATION ===
async function generateGemini(modelId, prompt, imageBase64, log) {
    const client = getGeminiClient();
    if (!client) throw new Error('GEMINI_API_KEY not set in .env');

    const response = await client.models.generateContent({
        model: modelId,
        contents: [{
            role: "user",
            parts: [
                { text: prompt },
                {
                    inlineData: { mimeType: "image/png", data: imageBase64 },
                    mediaResolution: { level: "media_resolution_medium" }
                }
            ]
        }],
        config: {
            thinkingConfig: {
                includeThoughts: true,
                thinkingLevel: "HIGH"
            },
            temperature: 0.1
        }
    });

    // Defensive checks
    if (!response?.candidates?.[0]?.content?.parts) {
        const reason = response?.candidates?.[0]?.finishReason || "unknown";
        throw new Error(`Gemini blocked/empty (reason: ${reason})`);
    }

    const candidate = response.candidates[0];
    let textPart = candidate.content.parts.find(p => !p.thought);
    if (!textPart) textPart = candidate.content.parts[candidate.content.parts.length - 1];

    return textPart.text;
}

// === ANTHROPIC (CLAUDE) IMPLEMENTATION ===
async function generateAnthropic(modelId, prompt, imageBase64, log) {
    const client = getAnthropicClient();
    if (!client) throw new Error('ANTHROPIC_API_KEY not set in .env');

    const response = await client.messages.create({
        model: modelId,
        max_tokens: 8192,
        messages: [{
            role: "user",
            content: [
                {
                    type: "image",
                    source: {
                        type: "base64",
                        media_type: "image/png",
                        data: imageBase64
                    }
                },
                {
                    type: "text",
                    text: prompt
                }
            ]
        }]
    });

    if (!response?.content?.[0]?.text) {
        throw new Error(`Claude returned empty response`);
    }

    return response.content[0].text;
}

// === OPENAI IMPLEMENTATION ===
async function generateOpenAI(modelId, prompt, imageBase64, log) {
    const client = getOpenAIClient();
    if (!client) throw new Error('OPENAI_API_KEY not set in .env');

    const response = await client.chat.completions.create({
        model: modelId,
        messages: [{
            role: "user",
            content: [
                {
                    type: "text",
                    text: prompt
                },
                {
                    type: "image_url",
                    image_url: {
                        url: `data:image/png;base64,${imageBase64}`,
                        detail: "high"
                    }
                }
            ]
        }],
        max_tokens: 8192
    });

    if (!response?.choices?.[0]?.message?.content) {
        throw new Error(`OpenAI returned empty response`);
    }

    return response.choices[0].message.content;
}

/**
 * Get list of available models for a provider
 */
function getAvailableModels(provider = null) {
    if (provider) {
        return Object.entries(MODELS)
            .filter(([_, m]) => m.provider === provider)
            .map(([key, m]) => ({ key, ...m }));
    }
    return Object.entries(MODELS).map(([key, m]) => ({ key, ...m }));
}

/**
 * Check which providers have API keys configured
 */
function getConfiguredProviders() {
    const providers = [];
    if (process.env.GEMINI_API_KEY) providers.push('gemini');
    if (process.env.ANTHROPIC_API_KEY) providers.push('anthropic');
    if (process.env.OPENAI_API_KEY) providers.push('openai');
    return providers;
}

module.exports = {
    MODELS,
    generateWithVision,
    getAvailableModels,
    getConfiguredProviders
};
