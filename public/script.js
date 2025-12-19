const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const progressContainer = document.getElementById('progress-container');
const resultContainer = document.getElementById('result-container');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const statusText = document.getElementById('status-text');
const logConsole = document.getElementById('log-console');

// Drag & Drop Handlers
dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length) {
        handleFiles(Array.from(e.dataTransfer.files));
    }
});

fileInput.addEventListener('change', (e) => {
    if (fileInput.files.length) {
        handleFiles(Array.from(fileInput.files));
    }
});

resetBtn.addEventListener('click', () => {
    resultContainer.classList.add('hidden');
    dropZone.classList.remove('hidden');
    fileInput.value = '';
    logConsole.innerHTML = '<div class="log-entry">Waiting for logs...</div>'; // Reset logs
});

function addLog(message) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerText = `> ${message}`;
    logConsole.appendChild(entry);
    logConsole.scrollTop = logConsole.scrollHeight; // Auto-scroll
}

const pageRangeInput = document.getElementById('page-range');
let eventSource = null; // Global reference to prevent duplicates

// ... (listeners)

// Handle multiple files sequentially
async function handleFiles(files) {
    if (files.length === 0) return;

    // UI Update
    dropZone.classList.add('hidden');
    document.querySelector('.options-area').classList.add('hidden');
    progressContainer.classList.remove('hidden');

    const results = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        statusText.innerText = `Processing file ${i + 1} of ${files.length}: ${file.name}`;
        addLog(`\n━━━ File ${i + 1}/${files.length}: ${file.name} ━━━`);

        try {
            const result = await convertSingleFile(file);
            results.push({ file: file.name, success: true, url: result.downloadUrl });
            addLog(`✅ ${file.name} completed successfully`);
        } catch (error) {
            results.push({ file: file.name, success: false, error: error.message });
            addLog(`❌ ${file.name} failed: ${error.message}`);
        }
    }

    // Show completion summary
    if (eventSource) eventSource.close();
    progressContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    const successCount = results.filter(r => r.success).length;
    const successfulResults = results.filter(r => r.success);

    // Clear existing download button
    downloadBtn.style.display = 'none';

    // Create download links container if it doesn't exist
    let downloadContainer = document.getElementById('download-links');
    if (!downloadContainer) {
        downloadContainer = document.createElement('div');
        downloadContainer.id = 'download-links';
        downloadContainer.style.cssText = 'display: flex; flex-direction: column; gap: 10px; margin-top: 15px;';
        downloadBtn.parentNode.insertBefore(downloadContainer, downloadBtn);
    }
    downloadContainer.innerHTML = ''; // Clear previous links

    // Create a download link for each successful file
    successfulResults.forEach((result, index) => {
        const link = document.createElement('a');
        link.href = result.url;
        link.className = 'btn';
        link.style.cssText = 'display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; text-align: center;';
        link.innerText = `📥 Download ${result.url.split('/').pop()}`;
        downloadContainer.appendChild(link);
    });

    // Update result message
    const resultMessage = document.querySelector('#result-container h3');
    resultMessage.innerText = `${successCount}/${files.length} files converted successfully!`;
}

async function convertSingleFile(file) {
    // Cleanup previous connection if exists
    if (eventSource) {
        eventSource.close();
    }

    // Initialize SSE Connection for Logs
    eventSource = new EventSource('/api/logs');

    eventSource.onmessage = function (event) {
        const data = JSON.parse(event.data);
        if (data.message) {
            addLog(data.message);
            statusText.innerText = data.message;
        }
    };

    eventSource.onerror = (e) => {
        // Silent reconnect or close?
        // eventSource.close(); 
    };

    const formData = new FormData();
    formData.append('file', file);

    const pageRange = pageRangeInput.value.trim();
    if (pageRange) {
        formData.append('pageRange', pageRange);
    }

    addLog("Starting upload...");
    const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    if (data.success) {
        return data;
    } else {
        throw new Error(data.error || "Unknown error occurred");
    }
}

async function handleFile(file) {
    // Legacy single-file handler - redirect to multi-file handler
    await handleFiles([file]);
}