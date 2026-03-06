/**
 * Multi-Provider LLM Client
 * Supports: Gemini, Moonshot (Kimi), Anthropic (Claude)
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

// === PROVIDER SDKs ===
const { GoogleGenAI } = require('@google/genai');
const OpenAI = require('openai'); // Used for Kimi
const Anthropic = require('@anthropic-ai/sdk');
// const { TranslationServiceClient } = require('@google-cloud/translate').v3; // Removed per user request

// === SETTINGS FILE PATH ===
const settingsPath = path.join(__dirname, '..', 'settings.json');

/**
 * Load API key from settings.json first, fallback to .env
 */
function getApiKey(keyName) {
    try {
        if (fs.existsSync(settingsPath)) {
            const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
            if (settings[keyName]) {
                return settings[keyName];
            }
        }
    } catch (e) {
        console.error(`Error reading settings.json: ${e.message}`);
    }
    return process.env[keyName] || '';
}

const MODELS = {
    // OpenRouter Models - default models for dropdown
    'openrouter-gemini-3-1-pro': { provider: 'openrouter', id: 'google/gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro', supportsVision: true, isFree: false },
    'openrouter-gemini-2-0-flash': { provider: 'openrouter', id: 'google/gemini-2.0-flash-001', name: 'Gemini 2.0 Flash', supportsVision: true, isFree: false },
    'openrouter-claude-opus-4-6': { provider: 'openrouter', id: 'anthropic/claude-opus-4-6-20250514', name: 'Claude Opus 4.6', supportsVision: false, isFree: false },
    'openrouter-claude-sonnet-4-6': { provider: 'openrouter', id: 'anthropic/claude-sonnet-4-6-20250514', name: 'Claude Sonnet 4.6', supportsVision: false, isFree: false },
    'openrouter-openai-o3-mini': { provider: 'openrouter', id: 'openai/o3-mini', name: 'OpenAI o3-mini', supportsVision: false, isFree: false },
    'openrouter-glm-4-9b': { provider: 'openrouter', id: 'zhipu/glm-4-9b-chat', name: 'GLM-4 9B', supportsVision: true, isFree: false },
    'openrouter-qwen-2-5-72b': { provider: 'openrouter', id: 'qwen/qwen-2.5-72b-instruct', name: 'Qwen 2.5 72B Pro', supportsVision: false, isFree: false },
    'openrouter-kimi-2-5': { provider: 'openrouter', id: 'moonshotai/kimi-k2.5', name: 'Kimi k2.5', supportsVision: true, isFree: false }
};

// === PROVIDER CLIENTS (lazy initialization) ===
let geminiClient = null;
let moonshotClient = null;
let anthropicClient = null;
let googleCloudTranslator = null;
let openRouterClient = null;

function getGoogleCloudTranslator() {
    return null; // Google Cloud Translate removed
}

function getGeminiClient() {
    const apiKey = getApiKey('GEMINI_API_KEY');
    if (!geminiClient && apiKey) {
        geminiClient = new GoogleGenAI({
            apiKey: apiKey,
            apiVersion: "v1beta"
        });
    }
    return geminiClient;
}

function getMoonshotClient() {
    const apiKey = getApiKey('MOONSHOT_API_KEY');
    if (!moonshotClient && apiKey) {
        // Moonshot uses OpenAI-compatible SDK but with a different base URL
        moonshotClient = new OpenAI({
            apiKey: apiKey,
            baseURL: "https://api.moonshot.ai/v1"
        });
    }
    return moonshotClient;
}

function getAnthropicClient() {
    const apiKey = getApiKey('ANTHROPIC_API_KEY');
    if (!anthropicClient && apiKey) {
        anthropicClient = new Anthropic({ apiKey });
    }
    return anthropicClient;
}

/**
 * Reset cached clients (called when API keys change)
 */
function reloadApiKeys() {
    geminiClient = null;
    moonshotClient = null;
    anthropicClient = null;
}

/**
 * Send a vision prompt to any supported model
 */
async function generateWithVision(modelKey, prompt, imageBase64, log = console.log, options = {}) {
    const model = resolveModel(modelKey) || MODELS[modelKey];
    if (!model) {
        throw new Error(`Unknown model: ${modelKey}. Available: ${Object.keys(MODELS).join(', ')}`);
    }

    log(`🤖 Using ${model.name} (${model.provider})`);

    switch (model.provider) {
        case 'gemini':
            return await generateGemini(model.id, prompt, imageBase64, log, options);
        case 'moonshot':
            return await generateMoonshot(model.id, prompt, imageBase64, log);
        case 'anthropic':
            return await generateAnthropic(model.id, prompt, imageBase64, log);
        case 'openrouter':
            return await generateOpenRouter(model.id, prompt, imageBase64, log, options);
        default:
            throw new Error(`Unknown provider: ${model.provider}`);
    }
}

// === GEMINI IMPLEMENTATION ===
async function generateGemini(modelId, prompt, imageBase64, log, options = {}) {
    const client = getGeminiClient();
    if (!client) throw new Error('GEMINI_API_KEY not set');

    const modelParams = {
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
                thinkingLevel: "DEFAULT"
            },
            temperature: 0.1,
            maxOutputTokens: 65536
        }
    };

    // Agentic Vision: Enable Code Execution if requested
    if (options.agenticVision) {
        modelParams.tools = [{ codeExecution: {} }];
        log("🔍 Agentic Vision (Code Execution) enabled for this request.");
    }

    const response = await client.models.generateContent(modelParams);

    // Defensive checks
    if (!response?.candidates?.[0]?.content?.parts) {
        const reason = response?.candidates?.[0]?.finishReason || "unknown";
        throw new Error(`Gemini blocked/empty (reason: ${reason})`);
    }

    const candidate = response.candidates[0];
    let textPart = candidate.content.parts.find(p => !p.thought);
    if (!textPart) textPart = candidate.content.parts[candidate.content.parts.length - 1];

    // Log if code execution was actually used
    if (options.agenticVision && candidate.content.parts.some(p => p.executableCode)) {
        log("⚡ Gemini used Code Execution to analyze the document layout.");
    }

    const usageMetadata = response.usageMetadata || {};
    const usage = {
        inputTokens: usageMetadata.promptTokenCount || 0,
        outputTokens: usageMetadata.candidatesTokenCount || 0
    };

    return { text: textPart.text, usage };
}

// === MOONSHOT (KIMI) IMPLEMENTATION ===
async function generateMoonshot(modelId, prompt, imageBase64, log) {
    const client = getMoonshotClient();
    if (!client) throw new Error('MOONSHOT_API_KEY not set');

    const response = await client.chat.completions.create({
        model: modelId,
        messages: [{
            role: "system",
            content: "You are Kimi, an AI assistant provided by Moonshot AI."
        }, {
            role: "user",
            content: [
                {
                    type: "image_url",
                    image_url: {
                        url: `data:image/png;base64,${imageBase64}`
                    }
                },
                {
                    type: "text",
                    text: prompt
                }
            ]
        }],
        temperature: 1.0,
        top_p: 0.95,
        n: 1
    });

    if (!response?.choices?.[0]?.message?.content) {
        throw new Error(`Moonshot returned empty response`);
    }

    const usage = {
        inputTokens: response.usage?.prompt_tokens || 0,
        outputTokens: response.usage?.completion_tokens || 0
    };

    return { text: response.choices[0].message.content, usage };
}

// === ANTHROPIC (CLAUDE) IMPLEMENTATION ===
// Uses Node.js native https module instead of fetch/SDK to avoid
// ByteString serialization bug with large base64 payloads in Node 22's fetch
const ANTHROPIC_MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5MB limit

/**
 * Compress image if it exceeds Anthropic's 5MB limit.
 * Converts PNG to JPEG with progressive quality reduction.
 */
async function compressImageForAnthropic(imageBase64, log) {
    const { execSync } = require('child_process');
    const os = require('os');
    const rawBytes = Buffer.from(imageBase64, 'base64');

    if (rawBytes.length <= ANTHROPIC_MAX_IMAGE_BYTES) {
        return { data: imageBase64, mediaType: 'image/png' };
    }

    log(`📐 Image is ${(rawBytes.length / 1024 / 1024).toFixed(1)}MB — compressing for Anthropic's 5MB limit...`);

    const tmpDir = os.tmpdir();
    const tmpPng = path.join(tmpDir, `anthropic_resize_${Date.now()}.png`);
    const tmpJpg = tmpPng.replace('.png', '.jpg');

    try {
        fs.writeFileSync(tmpPng, rawBytes);

        // Resize to max 2048px on longest side (keeps aspect ratio) and convert to JPEG
        const qualities = [85, 70, 50, 35];
        for (const quality of qualities) {
            execSync(`sips -s format jpeg -s formatOptions ${quality} --resampleHeightWidthMax 2048 "${tmpPng}" --out "${tmpJpg}" 2>/dev/null`);
            const jpgBuffer = fs.readFileSync(tmpJpg);
            if (jpgBuffer.length <= ANTHROPIC_MAX_IMAGE_BYTES) {
                log(`✅ Compressed to ${(jpgBuffer.length / 1024 / 1024).toFixed(1)}MB (JPEG q=${quality})`);
                return { data: jpgBuffer.toString('base64'), mediaType: 'image/jpeg' };
            }
        }

        // Last resort: aggressive resize to 1024px
        execSync(`sips -s format jpeg -s formatOptions 30 --resampleHeightWidthMax 1024 "${tmpPng}" --out "${tmpJpg}" 2>/dev/null`);
        const finalBuffer = fs.readFileSync(tmpJpg);
        log(`✅ Aggressively compressed to ${(finalBuffer.length / 1024 / 1024).toFixed(1)}MB (JPEG q=30, 1024px)`);
        return { data: finalBuffer.toString('base64'), mediaType: 'image/jpeg' };
    } finally {
        try { fs.unlinkSync(tmpPng); } catch (e) { }
        try { fs.unlinkSync(tmpJpg); } catch (e) { }
    }
}

async function generateAnthropic(modelId, prompt, imageBase64, log) {
    const https = require('https');
    const apiKey = getApiKey('ANTHROPIC_API_KEY');
    if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set');

    // Compress image if it exceeds Anthropic's 5MB limit
    const { data: compressedBase64, mediaType } = await compressImageForAnthropic(imageBase64, log);

    const body = JSON.stringify({
        model: modelId,
        max_tokens: 16384,
        messages: [{
            role: "user",
            content: [
                {
                    type: "image",
                    source: {
                        type: "base64",
                        media_type: mediaType,
                        data: compressedBase64
                    }
                },
                {
                    type: "text",
                    text: prompt
                }
            ]
        }]
    });

    const response = await new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'api.anthropic.com',
            path: '/v1/messages',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'Content-Length': Buffer.byteLength(body)
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode >= 400) {
                    reject(new Error(`Anthropic API error ${res.statusCode}: ${data}`));
                } else {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(new Error(`Failed to parse Anthropic response: ${e.message}`));
                    }
                }
            });
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });

    if (!response?.content?.[0]?.text) {
        const reason = response?.stop_reason || 'unknown';
        throw new Error(`Anthropic blocked/empty (reason: ${reason})`);
    }

    const usage = {
        inputTokens: response.usage?.input_tokens || 0,
        outputTokens: response.usage?.output_tokens || 0
    };

    return { text: response.content[0].text, usage };
}

// === OPENROUTER IMPLEMENTATION ===
async function generateOpenRouter(modelId, prompt, imageBase64, log, options = {}) {
    const apiKey = getApiKey('OPENROUTER_API_KEY');
    if (!apiKey) throw new Error('OPENROUTER_API_KEY not set');

    const useWebSearch = options.useWebSearch || false;

    let content;
    if (imageBase64) {
        content = [
            { type: "text", text: prompt },
            {
                type: "image_url",
                image_url: {
                    url: `data:image/png;base64,${imageBase64}`
                }
            }
        ];
    } else {
        // Many text-only models on OpenRouter fail if content is an array
        content = prompt;
    }

    // Build request body
    const requestBody = {
        model: modelId,
        messages: [{
            role: "user",
            content: content
        }],
        temperature: 0.1
    };

    // Add web search plugin if enabled
    if (useWebSearch) {
        requestBody.plugins = [{ id: "web" }];
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3002",
            "X-Title": "Convertidor"
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenRouter API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    if (!data?.choices?.[0]?.message?.content) {
        throw new Error(`OpenRouter returned empty response`);
    }

    const usage = {
        inputTokens: data.usage?.prompt_tokens || 0,
        outputTokens: data.usage?.completion_tokens || 0
    };

    return { text: data.choices[0].message.content, usage };
}

// === QWEN MT (DASHSCOPE) IMPLEMENTATION ===
async function generateQwenMT(modelId, prompt, log) {
    const apiKey = getApiKey('DASHSCOPE_API_KEY');
    if (!apiKey) throw new Error('DASHSCOPE_API_KEY not set');

    const response = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: modelId,
            messages: [{
                role: "user",
                content: prompt
            }],
            temperature: 0.1
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`DashScope API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    if (!data?.choices?.[0]?.message?.content) {
        throw new Error(`DashScope returned empty response`);
    }

    const usage = {
        inputTokens: data.usage?.prompt_tokens || 0,
        outputTokens: data.usage?.completion_tokens || 0
    };

    return { text: data.choices[0].message.content, usage };
}

/**
 * Resolve model config - handles dynamic OpenRouter models
 */
function resolveModel(modelKey) {
    // Check if it's a dynamic OpenRouter model
    if (modelKey.startsWith('openrouter-dynamic-')) {
        const modelId = decodeURIComponent(modelKey.replace('openrouter-dynamic-', ''));
        return {
            provider: 'openrouter',
            id: modelId,
            name: modelId,
            isDynamic: true
        };
    }
    // Return from static MODELS
    return MODELS[modelKey] || null;
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
    if (getApiKey('GEMINI_API_KEY')) providers.push('gemini');
    if (getApiKey('OPENROUTER_API_KEY')) providers.push('openrouter');
    return providers;
}

module.exports = {
    MODELS,
    getApiKey,
    resolveModel,
    generateWithVision,
    generateOpenRouter,
    getAvailableModels,
    getConfiguredProviders,
    reloadApiKeys
};
