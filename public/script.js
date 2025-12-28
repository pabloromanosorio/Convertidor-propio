const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const progressContainer = document.getElementById('progress-container');
const resultContainer = document.getElementById('result-container');
const resetBtn = document.getElementById('reset-btn');
const statusText = document.getElementById('status-text');
const logConsole = document.getElementById('log-console');
const pageRangeInput = document.getElementById('page-range');
const modelSelect = document.getElementById('model-select');
const translateToggle = document.getElementById('translate-toggle');
const translationPanel = document.getElementById('translation-panel');
const translationPromptInput = document.getElementById('translation-prompt');
const startBtn = document.getElementById('start-btn');
const pageBreaksToggle = document.getElementById('page-breaks-toggle');
const exactLayoutToggle = document.getElementById('exact-layout-toggle');

let eventSource = null;
let selectedFiles = null; // Store selected files until user clicks start

// ========== INITIALIZATION ==========
loadModels();

// ========== DRAG & DROP ==========
dropZone.addEventListener('click', () => fileInput.click());
dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length) handleFiles(Array.from(e.dataTransfer.files));
});
fileInput.addEventListener('change', () => {
    if (fileInput.files.length) handleFiles(Array.from(fileInput.files));
});

resetBtn.addEventListener('click', () => {
    resultContainer.classList.add('hidden');
    dropZone.classList.remove('hidden');
    document.querySelector('.options-area').classList.remove('hidden');
    startBtn.classList.add('hidden');
    fileInput.value = '';
    selectedFiles = null;
    logConsole.innerHTML = '<div class="log-entry">Waiting for logs...</div>';
});

// ========== TRANSLATION TOGGLE ==========
translateToggle.addEventListener('change', () => {
    translationPanel.classList.toggle('hidden', !translateToggle.checked);

    // When translation is enabled, auto-select Gemini 2.5 Pro if available
    if (translateToggle.checked) {
        const geminiOption = Array.from(modelSelect.options).find(opt =>
            opt.value.includes('gemini-2.5-pro') || opt.value.includes('gemini-3-pro')
        );
        if (geminiOption) {
            modelSelect.value = geminiOption.value;
        }
    }
});

// ========== START BUTTON ==========
startBtn.addEventListener('click', async () => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    const translateEnabled = translateToggle.checked;
    await processFiles(selectedFiles, translateEnabled);
});

// ========== MODELS ==========
async function loadModels() {
    try {
        const response = await fetch('/api/models');
        const data = await response.json();
        modelSelect.innerHTML = '';
        const providers = {};
        data.availableModels.forEach(m => {
            if (!providers[m.provider]) providers[m.provider] = [];
            providers[m.provider].push(m);
        });
        Object.entries(providers).forEach(([provider, models]) => {
            const group = document.createElement('optgroup');
            group.label = provider.charAt(0).toUpperCase() + provider.slice(1);
            models.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m.key;
                opt.textContent = m.name;
                group.appendChild(opt);
            });
            modelSelect.appendChild(group);
        });
        if (data.availableModels.length === 0) {
            modelSelect.innerHTML = '<option value="">No API keys configured</option>';
        }
    } catch (e) {
        console.error('Failed to load models:', e);
    }
}

// ========== FILE HANDLING ==========
function addLog(message) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';

    // Highlight warnings
    if (message.includes('⚠️') || message.toLowerCase().includes('warning')) {
        entry.style.color = '#ffb700'; // Orange-gold for warnings
        entry.style.fontWeight = 'bold';
    }

    entry.innerText = `> ${message}`;
    logConsole.appendChild(entry);
    logConsole.scrollTop = logConsole.scrollHeight;
}

async function handleFiles(files) {
    if (files.length === 0) return;

    // Store files and show start button
    selectedFiles = files;
    startBtn.classList.remove('hidden');

    // Update button text based on file count
    const fileCount = files.length;
    const fileName = fileCount === 1 ? files[0].name : `${fileCount} files`;
    startBtn.textContent = `🚀 Start Processing: ${fileName}`;
}

async function processFiles(files, withTranslation = false) {
    // Hide start button and show progress
    startBtn.classList.add('hidden');
    dropZone.classList.add('hidden');
    document.querySelector('.options-area').classList.add('hidden');
    progressContainer.classList.remove('hidden');

    const results = [];
    let totalCost = 0;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        statusText.innerText = `Processing ${i + 1}/${files.length}: ${file.name}`;
        addLog(`\n━━━ File ${i + 1}/${files.length}: ${file.name} ━━━`);

        try {
            const isDocx = file.name.toLowerCase().endsWith('.docx');
            const isPdf = file.name.toLowerCase().endsWith('.pdf');
            let result;

            if (isDocx && withTranslation) {
                // DOCX + Translation → Just translate
                result = await translateSingleFile(file);
                results.push({ file: file.name, success: true, url: result.downloadUrl });
            } else if (isPdf && withTranslation) {
                // PDF + Translation → Convert AND Translate (returns both files)
                result = await convertAndTranslateFile(file);
                // Add both files to results
                for (const f of result.files) {
                    results.push({
                        file: `${file.name} → ${f.label}`,
                        success: true,
                        url: f.downloadUrl
                    });
                }
            } else {
                // Just convert (PDF or DOCX without translation)
                result = await convertSingleFile(file);
                results.push({ file: file.name, success: true, url: result.downloadUrl });
            }

            // Track cost if available
            if (result.cost && result.cost.totalCost) {
                totalCost += result.cost.totalCost;
            }

            addLog(`✅ ${file.name} completed`);
        } catch (error) {
            results.push({ file: file.name, success: false, error: error.message });
            addLog(`❌ ${file.name} failed: ${error.message}`);
        }
    }

    showResults(results, totalCost);
}

function showResults(results, totalCost = 0) {
    if (eventSource) eventSource.close();
    progressContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    const downloadContainer = document.getElementById('download-links');
    downloadContainer.innerHTML = '';

    const successResults = results.filter(r => r.success);
    successResults.forEach(result => {
        const link = document.createElement('a');
        link.href = result.url;
        link.className = 'btn';
        link.innerText = `📥 Download ${result.url.split('/').pop()}`;
        downloadContainer.appendChild(link);
    });

    const resultMessage = resultContainer.querySelector('h3');
    resultMessage.innerText = `${successResults.length}/${results.length} files completed!`;

    // Display cost summary if available
    let costDisplay = document.getElementById('cost-display');
    if (!costDisplay) {
        costDisplay = document.createElement('p');
        costDisplay.id = 'cost-display';
        costDisplay.style.cssText = 'margin-top: 10px; font-size: 14px; color: #888;';
        resultMessage.parentNode.insertBefore(costDisplay, resultMessage.nextSibling);
    }

    if (totalCost > 0) {
        const formattedCost = totalCost < 0.01
            ? `$${totalCost.toFixed(6)}`
            : totalCost < 1
                ? `$${totalCost.toFixed(4)}`
                : `$${totalCost.toFixed(2)}`;
        costDisplay.innerText = `💰 Estimated API Cost: ${formattedCost}`;
        costDisplay.style.display = 'block';
    } else {
        costDisplay.style.display = 'none';
    }
}

// ========== API CALLS ==========
async function convertSingleFile(file) {
    setupEventSource();

    const formData = new FormData();
    formData.append('file', file);
    if (pageRangeInput.value.trim()) formData.append('pageRange', pageRangeInput.value.trim());
    if (modelSelect.value) formData.append('model', modelSelect.value);

    // Page layout options
    formData.append('addPageBreaks', pageBreaksToggle.checked ? 'true' : 'false');
    formData.append('exactLayout', exactLayoutToggle.checked ? 'true' : 'false');

    addLog("Starting conversion...");
    const response = await fetch('/api/convert', { method: 'POST', body: formData });
    const data = await response.json();

    if (data.success) return data;
    throw new Error(data.error || "Conversion failed");
}

async function translateSingleFile(file) {
    setupEventSource();

    const formData = new FormData();
    formData.append('file', file);
    if (modelSelect.value) formData.append('model', modelSelect.value);

    // Get custom prompt from textarea
    const customPrompt = translationPromptInput.value.trim();
    formData.append('translationPrompt', customPrompt);

    addLog("Starting translation...");
    const response = await fetch('/api/translate-docx', { method: 'POST', body: formData });
    const data = await response.json();

    if (data.success) return data;
    throw new Error(data.error || "Translation failed");
}

async function convertAndTranslateFile(file) {
    setupEventSource();

    const formData = new FormData();
    formData.append('file', file);
    if (pageRangeInput.value.trim()) formData.append('pageRange', pageRangeInput.value.trim());
    if (modelSelect.value) formData.append('model', modelSelect.value);

    // Page layout options
    formData.append('addPageBreaks', pageBreaksToggle.checked ? 'true' : 'false');
    formData.append('exactLayout', exactLayoutToggle.checked ? 'true' : 'false');

    // Translation prompt
    const customPrompt = translationPromptInput.value.trim();
    formData.append('translationPrompt', customPrompt);

    addLog("Starting conversion + translation...");
    const response = await fetch('/api/convert-and-translate', { method: 'POST', body: formData });
    const data = await response.json();

    if (data.success) return data;
    throw new Error(data.error || "Processing failed");
}

function setupEventSource() {
    if (eventSource) eventSource.close();
    eventSource = new EventSource('/api/logs');
    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.message) {
            addLog(data.message);
            statusText.innerText = data.message;
        }
    };
}