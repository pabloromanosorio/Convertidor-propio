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
        handleFile(e.dataTransfer.files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (fileInput.files.length) {
        handleFile(fileInput.files[0]);
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

async function handleFile(file) {
    // UI Update
    dropZone.classList.add('hidden');
    document.querySelector('.options-area').classList.add('hidden');
    progressContainer.classList.remove('hidden');
    statusText.innerText = `Uploading ${file.name}...`;
    
    // Cleanup previous connection if exists
    if (eventSource) {
        eventSource.close();
    }

    // Initialize SSE Connection for Logs
    eventSource = new EventSource('/api/logs');
    
    eventSource.onmessage = function(event) {
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

    try {
        addLog("Starting upload...");
        const response = await fetch('/api/convert', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            if (eventSource) eventSource.close();
            progressContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');
            downloadBtn.href = data.downloadUrl;
            downloadBtn.innerText = `Download ${data.downloadUrl.split('/').pop()}`;
        } else {
            throw new Error(data.error || "Unknown error occurred");
        }
    } catch (error) {
        console.error(error);
        eventSource.close();
        addLog(`ERROR: ${error.message}`);
        alert("Conversion failed: " + error.message);
    }
}