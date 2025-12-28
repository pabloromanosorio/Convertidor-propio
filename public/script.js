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

    // When translation is enabled, auto-select Gemini 3 Pro if available
    if (translateToggle.checked) {
        const geminiOption = Array.from(modelSelect.options).find(opt =>
            opt.value.includes('gemini-3-pro') || opt.value.includes('gemini-2.5-pro')
        );
        if (geminiOption) {
            modelSelect.value = geminiOption.value;
        }
    }
});

// ========== PRESETS HANDLING ==========
let savedPresets = [];
const presetSelect = document.getElementById('preset-select');
const savePresetBtn = document.getElementById('save-preset-btn');

async function loadPresets() {
    try {
        const response = await fetch('/api/presets');
        const data = await response.json();
        savedPresets = data.presets || [];

        // Populate dropdown
        presetSelect.innerHTML = '<option value="">-- Load a Saved Prompt --</option>';
        savedPresets.forEach(preset => {
            const opt = document.createElement('option');
            opt.value = preset.name;
            opt.textContent = preset.name;
            presetSelect.appendChild(opt);
        });
    } catch (e) {
        console.error("Failed to load presets:", e);
    }
}

// Load presets on startup
loadPresets();

// Handle Preset Selection
presetSelect.addEventListener('change', () => {
    const selectedName = presetSelect.value;
    if (!selectedName) return;

    const preset = savedPresets.find(p => p.name === selectedName);
    if (!preset) return;

    // Favor usage of raw text if available
    if (preset.customPromptText) {
        translationPromptInput.value = preset.customPromptText;
    } else {
        // Convert legacy structure to text format
        let text = `- Context: ${preset.name || 'General'}\n`;
        if (preset.dateFormat) text += `- Date Format: ${preset.dateFormat}\n`;
        if (preset.numberFormat) text += `- Number Format: ${preset.numberFormat}\n`;
        if (preset.acronymHandling) text += `- Acronyms: ${preset.acronymHandling}\n`;

        if (preset.glossary && Object.keys(preset.glossary).length > 0) {
            text += `\nGLOSSARY:\n`;
            Object.entries(preset.glossary).forEach(([eng, esp]) => {
                text += `- ${eng}: ${esp}\n`;
            });
        }
        text += `\n- Use formal 'usted' form`;

        translationPromptInput.value = text;
    }
});

// Handle Save Preset
savePresetBtn.addEventListener('click', async () => {
    const currentText = translationPromptInput.value.trim();
    if (!currentText) {
        alert("Please enter some instructions first.");
        return;
    }

    const name = prompt("Enter a name for this prompt (e.g. Legal Contract, Company Memo):");
    if (!name) return;

    try {
        const response = await fetch('/api/presets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                customPromptText: currentText,
                // Add empty defaults for backward compatibility if needed, or structured parsing
                glossary: {},
                dateFormat: "DD/MM/YYYY"
            })
        });

        if (response.ok) {
            alert("✅ Prompt saved!");
            loadPresets(); // Reload dropdown
            // Select the new one
            setTimeout(() => { presetSelect.value = name; }, 100);
        } else {
            alert("Failed to save prompt.");
        }
    } catch (e) {
        console.error("Error saving preset:", e);
        alert("Error saving preset.");
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