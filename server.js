const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { convertDocumentV2 } = require('./src/index_v2');
const { getAvailableModels, getConfiguredProviders } = require('./src/providers');
const { translateDocxWithXliff, isXliffAvailable } = require('./src/xliff/xliff_translator');
const { translateDocx } = require('./src/translator');
const docxCleaner = require('./src/xliff/docx_cleaner');
const JSZip = require('jszip');

const app = express();
const PORT = 3002;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// serve static frontend
app.use(express.static('public'));

// Configure Multer for file uploads
const uploadDir = path.join(__dirname, 'uploads');
const outputDir = path.join(__dirname, 'outputs');
const tempFramesDir = path.join(uploadDir, 'temp_frames');
const userPresetsDir = path.join(__dirname, 'user_presets');
const presetsPath = path.join(userPresetsDir, 'translation_presets.json');
const qaPresetsPath = path.join(userPresetsDir, 'qa_presets.json');
const settingsPath = path.join(__dirname, 'settings.json');

/**
 * Automatic Cleanup: Deletes files older than N days in specified directories
 */
function runAutoCleanup(days = 5) {
    const directories = [uploadDir, outputDir, tempFramesDir];
    const now = Date.now();
    const maxAgeMs = days * 24 * 60 * 60 * 1000;
    let deletedCount = 0;

    console.log(`🧹 Running automatic cleanup (max age: ${days} days)...`);

    directories.forEach(dir => {
        if (!fs.existsSync(dir)) return;

        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);

            // Don't delete directories (unless it's temp_frames which is handled)
            if (stats.isDirectory() && filePath !== tempFramesDir) return;

            if (now - stats.mtimeMs > maxAgeMs) {
                try {
                    if (stats.isDirectory()) {
                        fs.rmSync(filePath, { recursive: true, force: true });
                    } else {
                        fs.unlinkSync(filePath);
                    }
                    deletedCount++;
                } catch (err) {
                    console.error(`Failed to delete ${file}: ${err.message}`);
                }
            }
        });
    });

    if (deletedCount > 0) {
        console.log(`✅ Cleanup complete. Deleted ${deletedCount} old files.`);
    } else {
        console.log(`✅ Cleanup complete. No old files found.`);
    }
}

// Run cleanup on startup and then every 24 hours
runAutoCleanup(5);
setInterval(() => runAutoCleanup(5), 24 * 60 * 60 * 1000);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Remove special chars but KEEP spaces to make the filename readable
        // Also ensure no multiple spaces are left
        const sanitized = file.originalname
            .replace(/[^a-zA-Z0-9 _.-]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        cb(null, sanitized);
    }
});

const upload = multer({ storage: storage });

// SSE Clients
let logClients = [];

// API Endpoint: Subscribe to Logs (SSE)
app.get('/api/logs', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    const clientId = Date.now();
    const newClient = {
        id: clientId,
        res
    };
    logClients.push(newClient);

    // Heartbeat to keep connection alive
    const interval = setInterval(() => {
        res.write(': heartbeat\n\n');
    }, 15000);

    req.on('close', () => {
        clearInterval(interval);
        logClients = logClients.filter(c => c.id !== clientId);
    });
});

function broadcastLog(msg) {
    logClients.forEach(client => {
        try {
            client.res.write(`data: ${JSON.stringify({ message: msg })}\n\n`);
        } catch (e) {
            console.error(`SSE Write Error (Client ${client.id}):`, e.message);
            // Mark for removal? For now just ignore to prevent causing 500 error on main thread
        }
    });
}

// API Endpoint: Convert
app.post('/api/convert', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const inputPath = req.file.path;
    const pageRange = req.body.pageRange || null;
    const model = req.body.model || 'gemini-3-pro'; // Default model
    const addPageBreaks = req.body.addPageBreaks === 'true';
    const exactLayout = req.body.exactLayout === 'true';
    const agenticVision = req.body.agenticVision === 'true';

    broadcastLog(`📂 Received file for conversion: ${req.file.originalname}`);
    if (agenticVision) broadcastLog(`🔍 Agentic Vision (Code Execution) enabled.`);
    if (pageRange) broadcastLog(`📄 Pages selected: ${pageRange}`);
    broadcastLog(`🤖 Model: ${model}`);
    if (addPageBreaks) broadcastLog(`📄 Page breaks: enabled`);
    if (exactLayout) broadcastLog(`🎯 Exact layout: enabled`);

    try {
        // Pass options object as 6th argument
        const options = { addPageBreaks, exactLayout, agenticVision };
        const result = await convertDocumentV2(inputPath, pageRange, outputDir, (msg) => {
            broadcastLog(msg);
        }, model, options);
        const outputFilename = path.basename(result.outputPath);

        res.json({
            success: true,
            downloadUrl: `/download/${encodeURIComponent(outputFilename)}`,
            cost: result.cost
        });

    } catch (error) {
        console.error("Conversion failed:", error);
        res.status(500).json({ error: error.message || "Conversion failed" });
    }
});

// API Endpoint: Translate DOCX
app.post('/api/translate-docx', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const inputPath = req.file.path;
    const model = req.body.model || 'gemini-3-pro';
    const translationPrompt = req.body.translationPrompt || '';
    // Language pair (defaults for backward compatibility)
    const languageA = req.body.languageA || 'English';
    const languageB = req.body.languageB || 'Spanish (Colombia)';
    // OpenRouter web search option
    const useWebSearch = req.body.useWebSearch === 'true';
    // Temperature (default 0.2 for translation)
    const temperature = parseFloat(req.body.temperature) || 0.2;

    broadcastLog(`📄 Received DOCX for translation: ${req.file.originalname}`);
    broadcastLog(`🤖 Model: ${model}`);
    broadcastLog(`🌡️ Temperature: ${temperature}`);
    broadcastLog(`🌐 Languages: ${languageA} ↔ ${languageB}`);
    broadcastLog(`📦 Engine: XLIFF (OpenXLIFF)`);
    if (translationPrompt) {
        broadcastLog(`📝 Custom instructions provided`);
    }

    try {
        // Generate output filename
        const baseName = path.basename(req.file.originalname, '.docx');
        const outputPath = path.join(outputDir, `Traducción - ${baseName}.docx`);

        // Use XLIFF-based translation (with fallback to legacy if Java unavailable)
        if (isXliffAvailable()) {
            await translateDocxWithXliff(inputPath, outputPath, translationPrompt, model, broadcastLog, { languageA, languageB, useWebSearch, temperature });
        } else {
            broadcastLog(`⚠️ Java not available, falling back to legacy method`);
            await translateDocx(inputPath, outputPath, translationPrompt, model, broadcastLog, { languageA, languageB, useWebSearch, temperature });
        }

        const outputFilename = path.basename(outputPath);
        res.json({
            success: true,
            downloadUrl: `/download/${encodeURIComponent(outputFilename)}`,
            method: 'xliff'
        });

    } catch (error) {
        console.error("Translation failed:", error);
        res.status(500).json({ error: error.message || "Translation failed" });
    }
});

// API Endpoint: Convert PDF AND Translate (returns both files)
app.post('/api/convert-and-translate', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const inputPath = req.file.path;
    const pageRange = req.body.pageRange || null;
    const model = req.body.model || 'gemini-3-pro'; // Conversion model
    const translationModel = req.body.translationModel || model; // Translation model defaults to conversion model if not provided
    const translationPrompt = req.body.translationPrompt || '';
    const addPageBreaks = req.body.addPageBreaks === 'true';
    const exactLayout = req.body.exactLayout === 'true';
    const agenticVision = req.body.agenticVision === 'true';
    // Language pair (defaults for backward compatibility)
    const languageA = req.body.languageA || 'English';
    const languageB = req.body.languageB || 'Spanish (Colombia)';
    // OpenRouter web search option
    const useWebSearch = req.body.useWebSearch === 'true';

    broadcastLog(`📂 Received PDF for conversion + translation: ${req.file.originalname}`);
    if (agenticVision) broadcastLog(`🔍 Agentic Vision (Code Execution) enabled.`);
    if (pageRange) broadcastLog(`📄 Pages selected: ${pageRange}`);
    broadcastLog(`🤖 Conversion Model: ${model}`);
    broadcastLog(`🤖 Translation Model: ${translationModel}`);
    broadcastLog(`🌐 Languages: ${languageA} ↔ ${languageB}`);
    broadcastLog(`📦 Engine: XLIFF (OpenXLIFF)`);

    try {
        // Step 1: Convert PDF to DOCX
        broadcastLog(`\n━━━ STEP 1: Converting PDF to DOCX ━━━`);
        const options = { addPageBreaks, exactLayout, agenticVision };
        const convertResult = await convertDocumentV2(inputPath, pageRange, outputDir, (msg) => {
            broadcastLog(msg);
        }, model, options);

        // Apply DOCX Cleaner to merged runs and fix potential breaks immediately after conversion
        // DEBUG: Extract and save the actual XML for inspection (No modification)
        try {
            const docxBuffer = fs.readFileSync(convertResult.outputPath);
            const zip = await JSZip.loadAsync(docxBuffer);
            const docXml = await zip.file('word/document.xml').async('string');
            const debugXmlPath = path.join(outputDir, 'debug_actual_document.xml');
            fs.writeFileSync(debugXmlPath, docXml);
            broadcastLog(`🔬 Saved internal XML to: ${debugXmlPath}`);
        } catch (debugErr) {
            broadcastLog(`⚠️ Debug extraction failed: ${debugErr.message}`);
        }

        const convertedFilename = path.basename(convertResult.outputPath);
        broadcastLog(`✅ Conversion complete: ${convertedFilename}`);

        broadcastLog(`\n━━━ STEP 2: Translating (${languageA} ↔ ${languageB}) ━━━`);
        const baseName = path.basename(convertResult.outputPath, '.docx');
        const translatedOutputPath = path.join(outputDir, `Traducción - ${baseName}.docx`);

        // Use XLIFF-based translation (with fallback to legacy if Java unavailable)
        if (isXliffAvailable()) {
            await translateDocxWithXliff(convertResult.outputPath, translatedOutputPath, translationPrompt, translationModel, (msg) => {
                broadcastLog(msg);
            }, { languageA, languageB, useWebSearch });
        } else {
            broadcastLog(`⚠️ Java not available, falling back to legacy method`);
            await translateDocx(convertResult.outputPath, translatedOutputPath, translationPrompt, translationModel, broadcastLog, { languageA, languageB, useWebSearch });
        }

        const translatedFilename = path.basename(translatedOutputPath);
        broadcastLog(`✅ Translation complete: ${translatedFilename}`);

        // Return both files with cost data
        res.json({
            success: true,
            files: [
                {
                    type: 'converted',
                    label: `${languageA} (Converted)`,
                    downloadUrl: `/download/${encodeURIComponent(convertedFilename)}`
                },
                {
                    type: 'translated',
                    label: `${languageB} (Translated)`,
                    downloadUrl: `/download/${encodeURIComponent(translatedFilename)}`
                }
            ],
            cost: {
                conversionCost: convertResult.cost?.totalCost || 0,
                conversionTokens: {
                    input: convertResult.cost?.inputTokens || 0,
                    output: convertResult.cost?.outputTokens || 0
                }
                // Note: Translation cost tracking requires changes to translation functions
            }
        });

    } catch (error) {
        console.error("Convert+Translate failed:", error);
        res.status(500).json({ error: error.message || "Processing failed" });
    }
});

// API Endpoint: Get Presets
app.get('/api/presets', (req, res) => {
    try {
        if (fs.existsSync(presetsPath)) {
            const data = JSON.parse(fs.readFileSync(presetsPath, 'utf-8'));
            res.json(data);
        } else {
            res.json({ presets: [] });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to load presets" });
    }
});

// API Endpoint: Save Preset
app.post('/api/presets', (req, res) => {
    try {
        let data = { presets: [] };
        if (fs.existsSync(presetsPath)) {
            data = JSON.parse(fs.readFileSync(presetsPath, 'utf-8'));
        }

        const newPreset = req.body;
        if (!newPreset.name) {
            return res.status(400).json({ error: "Preset name required" });
        }

        // Replace existing preset with same name, or add new
        const existingIndex = data.presets.findIndex(p => p.name === newPreset.name);
        if (existingIndex >= 0) {
            data.presets[existingIndex] = newPreset;
        } else {
            data.presets.push(newPreset);
        }

        fs.writeFileSync(presetsPath, JSON.stringify(data, null, 2));
        res.json({ success: true, presets: data.presets });

    } catch (error) {
        res.status(500).json({ error: "Failed to save preset" });
    }
});

// API Endpoint: Delete Preset
app.delete('/api/presets/:name', (req, res) => {
    try {
        const presetName = req.params.name;
        if (!fs.existsSync(presetsPath)) {
            return res.status(404).json({ error: "Presets file not found" });
        }

        const data = JSON.parse(fs.readFileSync(presetsPath, 'utf-8'));
        const initialLength = data.presets.length;

        // Filter out the preset
        data.presets = data.presets.filter(p => p.name !== presetName);

        if (data.presets.length === initialLength) {
            return res.status(404).json({ error: "Preset not found" });
        }

        fs.writeFileSync(presetsPath, JSON.stringify(data, null, 2));
        res.json({ success: true, presets: data.presets });

    } catch (error) {
        console.error("Failed to delete preset:", error);
        res.status(500).json({ error: "Failed to delete preset" });
    }
});

// API Endpoint: Download
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(outputDir, filename);

    if (fs.existsSync(filePath)) {
        res.download(filePath);
    } else {
        res.status(404).send("File not found");
    }
});

// API Endpoint: Download ZIP
app.post('/api/download-zip', async (req, res) => {
    try {
        const { files, zipName } = req.body;
        if (!files || !Array.isArray(files) || files.length === 0) {
            return res.status(400).json({ error: "No files specified for zipping" });
        }

        const zip = new JSZip();
        let addedCount = 0;

        files.forEach(filename => {
            const filePath = path.join(outputDir, filename);
            if (fs.existsSync(filePath)) {
                zip.file(filename, fs.readFileSync(filePath));
                addedCount++;
            }
        });

        if (addedCount === 0) {
            return res.status(404).json({ error: "None of the specified files were found" });
        }

        const zipBuffer = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });

        const finalZipName = zipName || 'documents.zip';

        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', `attachment; filename="${finalZipName}"`);
        res.send(zipBuffer);

    } catch (error) {
        console.error("Zip generation failed:", error);
        res.status(500).json({ error: "Failed to generate zip file" });
    }
});

// API Endpoint: Get Available Models
app.get('/api/models', (req, res) => {
    const models = getAvailableModels();
    const configuredProviders = getConfiguredProviders();
    console.log('All models:', models.map(m => m.key));
    console.log('Configured providers:', configuredProviders);
    
    // With OpenRouter only, we always show all models (they come from OpenRouter API)
    // Only filter if no providers are configured at all
    const availableModels = configuredProviders.length > 0 
        ? models 
        : models.filter(m => configuredProviders.includes(m.provider));
    
    res.json({
        models,
        configuredProviders,
        availableModels
    });
});

// API Endpoint: Get OpenRouter Models dynamically
app.get('/api/openrouter-models', async (req, res) => {
    try {
        const { getApiKey } = require('./src/providers');
        const apiKey = getApiKey('OPENROUTER_API_KEY');
        
        if (!apiKey) {
            return res.status(401).json({ error: 'OpenRouter API key not configured' });
        }

        const response = await fetch('https://openrouter.ai/api/v1/models', {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`OpenRouter API error: ${response.status}`);
        }

        const data = await response.json();
        
        // Helper to detect vision support
        const supportsVision = (m) => {
            const id = m.id.toLowerCase();
            const hasImagePricing = m.pricing && (m.pricing.image !== undefined && m.pricing.image !== "0");
            return id.includes('vl') || id.includes('vision') || id.includes('gemma-3') || id.includes('glm-4') || id.includes('glm-5') || hasImagePricing;
        };
        
        // Helper to detect free model
        const isFree = (m) => {
            if (!m.pricing) return false;
            const promptPrice = parseFloat(m.pricing.prompt) || 0;
            const completionPrice = parseFloat(m.pricing.completion) || 0;
            return promptPrice === 0 && completionPrice === 0;
        };
        
        // Transform to our format - filter for popular/recommended models
        const models = data.data
            .filter(m => m.id && m.name) // Has required fields
            .slice(0, 100) // Limit to first 100 to avoid overwhelming the dropdown
            .map(m => ({
                key: `openrouter-dynamic-${encodeURIComponent(m.id)}`,
                id: m.id,
                // Use model name as-is (no "(OpenRouter)" suffix - it's shown in the label above)
                name: m.name || m.id,
                provider: 'openrouter',
                context_length: m.context_length,
                supportsVision: supportsVision(m),
                isFree: isFree(m)
            }));

        res.json({ models });
    } catch (error) {
        console.error('Failed to fetch OpenRouter models:', error);
        res.status(500).json({ error: error.message });
    }
});

// API Endpoint: Get Settings (API key status - masked)
app.get('/api/settings', (req, res) => {
    try {
        let settings = {};
        if (fs.existsSync(settingsPath)) {
            settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
        }

        // Return masked keys (last 4 chars) and configured status
        const providers = [
            'OPENROUTER_API_KEY'
        ];
        const result = {};

        providers.forEach(key => {
            const value = settings[key] || process.env[key] || '';
            result[key] = {
                configured: !!value,
                masked: value ? `...${value.slice(-4)}` : ''
            };
        });

        res.json(result);
    } catch (error) {
        console.error("Failed to load settings:", error);
        res.status(500).json({ error: "Failed to load settings" });
    }
});

// API Endpoint: Save Settings (API keys)
app.post('/api/settings', (req, res) => {
    try {
        const { keys } = req.body;
        if (!keys || typeof keys !== 'object') {
            return res.status(400).json({ error: "Invalid settings format" });
        }

        // Load existing settings
        let settings = {};
        if (fs.existsSync(settingsPath)) {
            settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
        }

        // Update only provided keys (empty string = clear the key)
        const validKeys = [
            'GEMINI_API_KEY',
            'MOONSHOT_API_KEY',
            'ANTHROPIC_API_KEY',
            'OPENROUTER_API_KEY',
            'DASHSCOPE_API_KEY',
            'GOOGLE_APPLICATION_CREDENTIALS',
            'GOOGLE_CLOUD_PROJECT',
            'GOOGLE_CLOUD_REGION'
        ];
        validKeys.forEach(key => {
            if (key in keys) {
                if (keys[key]) {
                    settings[key] = keys[key];
                } else {
                    delete settings[key]; // Remove if empty
                }
            }
        });

        fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));

        // Reload provider clients with new keys
        const { reloadApiKeys } = require('./src/providers');
        reloadApiKeys();

        res.json({ success: true, message: "Settings saved. API keys updated." });
    } catch (error) {
        console.error("Failed to save settings:", error);
        res.status(500).json({ error: "Failed to save settings" });
    }
});

// Start Server
const server = app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`👉 Opening your browser automatically...`);
    
    // Automatically open the browser
    const url = `http://localhost:${PORT}`;
    const startCmd = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start ""' : 'xdg-open';
    const { exec } = require('child_process');
    exec(`${startCmd} "${url}"`, (err) => {
        if (err) {
            console.log(`⚠️ Could not open browser automatically. Please go to ${url}`);
        }
    });
});

// Increase timeout to 1 hour (3600000 ms) to handle large file translations
server.setTimeout(3600000);
