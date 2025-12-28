const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { convertDocumentV2 } = require('./src/index_v2');
const { getAvailableModels, getConfiguredProviders } = require('./src/providers');
const { translateDocx } = require('./src/translator');

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
const presetsPath = path.join(__dirname, 'translation_presets.json');

// Ensure directories exist
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
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
        client.res.write(`data: ${JSON.stringify({ message: msg })}\n\n`);
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

    broadcastLog(`📂 Received file: ${req.file.originalname}`);
    if (pageRange) broadcastLog(`📄 Pages selected: ${pageRange}`);
    broadcastLog(`🤖 Model: ${model}`);
    if (addPageBreaks) broadcastLog(`📄 Page breaks: enabled`);
    if (exactLayout) broadcastLog(`🎯 Exact layout: enabled`);

    try {
        // Pass options object as 6th argument
        const options = { addPageBreaks, exactLayout };
        const result = await convertDocumentV2(inputPath, pageRange, outputDir, (msg) => {
            broadcastLog(msg);
        }, model, options);
        const outputFilename = path.basename(result.outputPath);

        res.json({
            success: true,
            downloadUrl: `/download/${outputFilename}`,
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

    broadcastLog(`📄 Received DOCX for translation: ${req.file.originalname}`);
    broadcastLog(`🤖 Model: ${model}`);
    if (translationPrompt) {
        broadcastLog(`📝 Custom instructions provided`);
    }

    try {
        // Generate output filename
        const baseName = path.basename(req.file.originalname, '.docx');
        const outputPath = path.join(outputDir, `${baseName}_translated.docx`);

        await translateDocx(inputPath, outputPath, translationPrompt, model, broadcastLog);

        const outputFilename = path.basename(outputPath);
        res.json({
            success: true,
            downloadUrl: `/download/${outputFilename}`
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
    const model = req.body.model || 'gemini-3-pro';
    const translationPrompt = req.body.translationPrompt || '';
    const addPageBreaks = req.body.addPageBreaks === 'true';
    const exactLayout = req.body.exactLayout === 'true';

    broadcastLog(`📂 Received PDF for conversion + translation: ${req.file.originalname}`);
    if (pageRange) broadcastLog(`📄 Pages selected: ${pageRange}`);
    broadcastLog(`🤖 Model: ${model}`);

    try {
        // Step 1: Convert PDF to DOCX
        broadcastLog(`\n━━━ STEP 1: Converting PDF to DOCX ━━━`);
        const options = { addPageBreaks, exactLayout };
        const convertResult = await convertDocumentV2(inputPath, pageRange, outputDir, (msg) => {
            broadcastLog(msg);
        }, model, options);

        const convertedFilename = path.basename(convertResult.outputPath);
        broadcastLog(`✅ Conversion complete: ${convertedFilename}`);

        // Step 2: Translate the converted DOCX
        broadcastLog(`\n━━━ STEP 2: Translating to Spanish ━━━`);
        const baseName = path.basename(convertResult.outputPath, '.docx');
        const translatedOutputPath = path.join(outputDir, `${baseName}_translated.docx`);

        await translateDocx(convertResult.outputPath, translatedOutputPath, translationPrompt, model, broadcastLog);

        const translatedFilename = path.basename(translatedOutputPath);
        broadcastLog(`✅ Translation complete: ${translatedFilename}`);

        // Return both files
        res.json({
            success: true,
            files: [
                {
                    type: 'converted',
                    label: 'English (Converted)',
                    downloadUrl: `/download/${convertedFilename}`
                },
                {
                    type: 'translated',
                    label: 'Spanish (Translated)',
                    downloadUrl: `/download/${translatedFilename}`
                }
            ]
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

// API Endpoint: Get Available Models
app.get('/api/models', (req, res) => {
    const models = getAvailableModels();
    const configuredProviders = getConfiguredProviders();
    res.json({
        models,
        configuredProviders,
        // Helper: filter to just configured provider models
        availableModels: models.filter(m => configuredProviders.includes(m.provider))
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`👉 Open your browser to access the drag-and-drop interface.`);
});
