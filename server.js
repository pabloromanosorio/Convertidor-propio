const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { convertDocumentV2 } = require('./src/index_v2');

const app = express();
const PORT = 3002;

// Enable CORS
app.use(cors());

// serve static frontend
app.use(express.static('public'));

// Configure Multer for file uploads
const uploadDir = path.join(__dirname, 'uploads');
const outputDir = path.join(__dirname, 'outputs');

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
    const pageRange = req.body.pageRange || null; // Get page range from form data
    
    broadcastLog(`📂 Received file: ${req.file.originalname}`);
    if (pageRange) broadcastLog(`📄 Pages selected: ${pageRange}`);

    try {
        // Update signature: inputFile, pageRange, outputDir, callback
        const outputPath = await convertDocumentV2(inputPath, pageRange, outputDir, (msg) => {
            broadcastLog(msg);
        });
        const outputFilename = path.basename(outputPath);
        
        res.json({ 
            success: true, 
            downloadUrl: `/download/${outputFilename}` 
        });

    } catch (error) {
        console.error("Conversion failed:", error);
        res.status(500).json({ error: error.message || "Conversion failed" });
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

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`👉 Open your browser to access the drag-and-drop interface.`);
});
