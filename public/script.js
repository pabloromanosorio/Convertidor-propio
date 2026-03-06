// ========== INTERNATIONALIZATION (i18n) ==========
const translations = {
    en: {
        title: "Document Converter & Translator",
        header: {
            title: "📄 Document Converter & Translator",
            subtitle: "Convert PDF to DOCX or Translate DOCX ({langA} ↔ {langB})"
        },
        upload: {
            title: "Drag & Drop your file(s) here",
            subtitle: "PDF, Images (for conversion) or DOCX (for translation)"
        },
        options: {
            model: "AI Model:",
            loadingModels: "Loading models...",
            noModels: "No API keys configured - click ⚙️",
            pageRange: "Page Range (PDF only):",
            pageRangePlaceholder: "e.g. 1-5, 10 (empty = all)",
            pageBreaks: "📄 Add Page Breaks",
            pageBreaksTitle: "Add a page break after each PDF page in the output",
            agenticVision: "🔍 Agentic Vision (Gemini 3.1 Only)",
            agenticVisionTitle: "Gemini 3.1 only. Enables code execution for better layout analysis - analyzes document structure by running Python to understand spacing, tables & alignment",
            translate: "🌐 Translate ({langA} ↔ {langB})"
        },
        buttons: {
            start: "🚀 Start Processing",
            save: "💾 Save",
            delete: "🗑️ Delete",
            cancel: "Cancel",
            saveSettings: "💾 Save Settings",
            processAnother: "Process Another",
            download: "📥 Download",
            downloadAll: "📥 Download All"
        },
        translation: {
            title: "📝 Translation Instructions",
            description: "Provide instructions for the translation. Include terminology, date/number formats, acronym handling, and any other preferences.",
            loadPreset: "-- Load a Saved Prompt --",
            placeholder: "Example:\n- Translate English to Colombian Spanish\n- Keep dates in DD/MM/YYYY format\n- Keep acronyms in English but expand on first use\n- Keep product names untranslated\n- Use formal 'usted' form",
            note: "Leave empty to use default translation settings.",
            engine: "Translation Engine:",
            engineXliff: "XLIFF uses Java-based document structure preservation.",
            engineVertana: "Vertana uses AI context-aware chunking with dynamic glossary for better consistency."
        },
        settings: {
            title: "⚙️ Settings",
            welcome: "Welcome! Add at least one API key to get started.",
            uiLanguage: "🖥️ Interface Language",
            languagePair: "🌐 Language Pair",
            languagePairDesc: "Auto-detects direction at runtime. Specify region if needed (e.g. \"Portuguese (Brazil)\")",
            languageA: "Language A:",
            languageB: "Language B:",
            languageAPlaceholder: "e.g. English",
            languageBPlaceholder: "e.g. Spanish (Colombia)",
            apiKeys: "🔑 API Keys",
            enterApiKey: "Enter API key",
            getKeyAt: "Get your key at",
            enterGcpPath: "e.g. /path/to/key.json",
            enterGcpProject: "e.g. your-project-id",
            enterGcpRegion: "e.g. us-central1"
        },
        progress: {
            initializing: "Initializing...",
            waitingLogs: "Waiting for logs...",
            processing: "Processing {current}/{total}: {filename}"
        },
        result: {
            complete: "Complete!",
            filesCompleted: "{success}/{total} files completed!",
            converted: "📁 Converted Documents",
            translated: "🌐 Translated Documents",
            convertedFiles: "📄 Converted Documents:",
            translatedFiles: "🌐 Translated Documents:",
            logsTitle: "📋 Processing Logs",
            cost: "💰 Estimated API Cost: {cost}",
            tokens: "🔢 Tokens: {input} in / {output} out"
        },
        footer: {
            poweredBy: "Powered by OpenRouter & Node.js"
        },
        alerts: {
            configureApiKey: "Please configure at least one API key first.",
            providerNotConfigured: "{provider} API key not configured. Please add your API key in Settings.",
            settingsSaved: "✅ Settings saved!",
            presetSaved: "✅ Prompt saved!",
            presetDeleted: "🗑️ Prompt deleted!",
            enterInstructions: "Please enter some instructions first.",
            selectPreset: "Please select a prompt to delete first.",
            confirmDelete: "Are you sure you want to delete the prompt \"{name}\"?",
            failedToSave: "Failed to save: {error}",
            failedToDelete: "Failed to delete prompt: {error}"
        }
    },
    es: {
        title: "Convertidor y Traductor de Documentos",
        header: {
            title: "📄 Convertidor y Traductor de Documentos",
            subtitle: "Convierte PDF a DOCX o Traduce DOCX ({langA} ↔ {langB})"
        },
        upload: {
            title: "Arrastra y suelta tu(s) archivo(s) aquí",
            subtitle: "PDF, Imágenes (para conversión) o DOCX (para traducción)"
        },
        options: {
            model: "Modelo de IA:",
            loadingModels: "Cargando modelos...",
            noModels: "No hay claves API configuradas - clic en ⚙️",
            pageRange: "Rango de páginas (solo PDF):",
            pageRangePlaceholder: "ej. 1-5, 10 (vacío = todas)",
            pageBreaks: "📄 Agregar Saltos de Página",
            pageBreaksTitle: "Agregar un salto de página después de cada página del PDF",
            agenticVision: "🔍 Visión Agéntica (Solo Gemini 3.1)",
            agenticVisionTitle: "Solo Gemini 3.1. Activa la ejecución de código para mejor análisis de diseño - analiza la estructura del documento ejecutando Python para entender espaciado, tablas y alineación",
            translate: "🌐 Traducir ({langA} ↔ {langB})"
        },
        buttons: {
            start: "🚀 Iniciar Procesamiento",
            save: "💾 Guardar",
            delete: "🗑️ Eliminar",
            cancel: "Cancelar",
            saveSettings: "💾 Guardar Configuración",
            processAnother: "Procesar Otro",
            download: "📥 Descargar",
            downloadAll: "📥 Descargar Todos"
        },
        translation: {
            title: "📝 Instrucciones de Traducción",
            description: "Proporciona instrucciones para la traducción. Incluye terminología, formatos de fecha/número, manejo de acrónimos y otras preferencias.",
            loadPreset: "-- Cargar un Prompt Guardado --",
            placeholder: "Ejemplo:\n- Traducir inglés a español colombiano\n- Mantener fechas en formato DD/MM/AAAA\n- Mantener acrónimos en inglés pero expandir en el primer uso\n- No traducir nombres de productos\n- Usar tratamiento formal 'usted'",
            note: "Dejar vacío para usar configuración de traducción predeterminada.",
            engine: "Motor de Traducción:",
            engineXliff: "XLIFF usa preservación de estructura de documento basada en Java.",
            engineVertana: "Vertana usa fragmentación contextual de IA con glosario dinámico para mejor consistencia."
        },
        settings: {
            title: "⚙️ Configuración",
            welcome: "¡Bienvenido! Agrega al menos una clave API para comenzar.",
            uiLanguage: "🖥️ Idioma de Interfaz",
            languagePair: "🌐 Par de Idiomas",
            languagePairDesc: "Detecta automáticamente la dirección. Especifica región si es necesario (ej. \"Portugués (Brasil)\")",
            languageA: "Idioma A:",
            languageB: "Idioma B:",
            languageAPlaceholder: "ej. Inglés",
            languageBPlaceholder: "ej. Español (Colombia)",
            apiKeys: "🔑 Claves API",
            getKeyAt: "Ingresa clave API",
            enterGcpPath: "ej. /ruta/al/archivo.json",
            enterGcpProject: "ej. tu-id-de-proyecto",
            enterGcpRegion: "ej. us-central1"
        },
        progress: {
            initializing: "Inicializando...",
            waitingLogs: "Esperando registros...",
            processing: "Procesando {current}/{total}: {filename}"
        },
        result: {
            complete: "¡Completado!",
            filesCompleted: "¡{success}/{total} archivos completados!",
            converted: "📁 Documentos Convertidos",
            translated: "🌐 Documentos Traducidos",
            convertedFiles: "📄 Documentos Convertidos:",
            translatedFiles: "🌐 Documentos Traducidos:",
            logsTitle: "📋 Registros de Procesamiento",
            cost: "💰 Costo API Estimado: {cost}",
            tokens: "🔢 Tokens: {input} entrada / {output} salida"
        },
        footer: {
            poweredBy: "Desarrollado con OpenRouter y Node.js"
        },
        alerts: {
            configureApiKey: "Por favor configura al menos una clave API primero.",
            providerNotConfigured: "La clave API de {provider} no está configurada. Por favor agrégala en Configuración.",
            settingsSaved: "✅ ¡Configuración guardada!",
            presetSaved: "✅ ¡Prompt guardado!",
            presetDeleted: "🗑️ ¡Prompt eliminado!",
            enterInstructions: "Por favor ingresa algunas instrucciones primero.",
            selectPreset: "Por favor selecciona un prompt para eliminar primero.",
            confirmDelete: "¿Estás seguro de que quieres eliminar el prompt \"{name}\"?",
            failedToSave: "Error al guardar: {error}",
            failedToDelete: "Error al eliminar prompt: {error}"
        }
    }
};

let currentLang = localStorage.getItem('uiLanguage') || 'en';

// ========== COMMON LANGUAGES (ISO 639-1 codes) ==========
const commonLanguages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'es-CO', name: 'Spanish (Colombia)' },
    { code: 'es-MX', name: 'Spanish (Mexico)' },
    { code: 'es-ES', name: 'Spanish (Spain)' },
    { code: 'fr', name: 'French' },
    { code: 'fr-CA', name: 'French (Canada)' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'pt-BR', name: 'Portuguese (Brazil)' },
    { code: 'nl', name: 'Dutch' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh', name: 'Chinese' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'zh-TW', name: 'Chinese (Traditional)' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'tr', name: 'Turkish' },
    { code: 'pl', name: 'Polish' },
    { code: 'sv', name: 'Swedish' },
    { code: 'da', name: 'Danish' },
    { code: 'fi', name: 'Finnish' },
    { code: 'no', name: 'Norwegian' },
    { code: 'cs', name: 'Czech' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'ro', name: 'Romanian' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ms', name: 'Malay' },
    { code: 'th', name: 'Thai' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'el', name: 'Greek' },
    { code: 'he', name: 'Hebrew' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'hr', name: 'Croatian' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lv', name: 'Latvian' },
    { code: 'et', name: 'Estonian' },
    { code: 'ca', name: 'Catalan' },
    { code: 'eu', name: 'Basque' },
    { code: 'gl', name: 'Galician' }
];

// Search languages by name or code
function searchLanguages(query) {
    const term = (query || '').toLowerCase().trim();
    if (!term) return commonLanguages;
    
    return commonLanguages.filter(lang => 
        lang.name.toLowerCase().includes(term) || 
        lang.code.toLowerCase().includes(term)
    );
}

// Get language by name (exact match or contains)
function findLanguageByName(name) {
    const normalized = name.toLowerCase().trim();
    // First try exact match
    let found = commonLanguages.find(l => l.name.toLowerCase() === normalized);
    if (found) return found;
    
    // Try code match
    found = commonLanguages.find(l => l.code.toLowerCase() === normalized);
    if (found) return found;
    
    // Try partial name match
    found = commonLanguages.find(l => l.name.toLowerCase().includes(normalized));
    return found;
}

// Get translation string by key path (e.g., "header.title")
function t(key, replacements = {}) {
    const keys = key.split('.');
    let value = translations[currentLang];

    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            // Fallback to English
            value = translations.en;
            for (const k2 of keys) {
                if (value && typeof value === 'object' && k2 in value) {
                    value = value[k2];
                } else {
                    return key; // Return key if not found
                }
            }
            break;
        }
    }

    // Replace placeholders like {langA}
    if (typeof value === 'string') {
        for (const [placeholder, replacement] of Object.entries(replacements)) {
            value = value.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), replacement);
        }
    }

    return value;
}

// Apply translations to all elements with data-i18n attributes
function applyTranslations() {
    const { languageA, languageB } = getLanguagePair();
    const replacements = { langA: languageA, langB: languageB };

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key, replacements);
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key, replacements);
    });

    // Titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key, replacements);
    });

    // Update document title
    document.title = t('title');
}

// ========== DOM ELEMENTS ==========
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const progressContainer = document.getElementById('progress-container');
const resultContainer = document.getElementById('result-container');
const resetBtn = document.getElementById('reset-btn');
const statusText = document.getElementById('status-text');
const logConsole = document.getElementById('log-console');
const pageRangeInput = document.getElementById('page-range');
const modelSelect = document.getElementById('model-select'); // hidden input
const translationModelSelect = document.getElementById('translation-model-select'); // hidden input
const translateToggle = document.getElementById('translate-toggle');
const translationPanel = document.getElementById('translation-panel');
const translationPromptInput = document.getElementById('translation-prompt');
const startBtn = document.getElementById('start-btn');
const pageBreaksToggle = document.getElementById('page-breaks-toggle');
const agenticVisionToggle = document.getElementById('agentic-vision-toggle');
const uiLanguageSelect = document.getElementById('ui-language-select');
const openrouterToggle = document.getElementById('openrouter-toggle');
const modelSelectHidden = document.getElementById('model-select');

// ========== AGENTIC VISION TOGGLE - Hidden since we removed direct Gemini models ==========
function updateAgenticVisionVisibility() {
    // Agentic vision (code execution) is only available with direct Gemini API
    // Since we removed direct Gemini models, hide this option
    const agenticVisionLabelEl = document.getElementById('agentic-vision-label');
    if (agenticVisionLabelEl) {
        agenticVisionLabelEl.style.display = 'none';
    }
    // Always disable and uncheck
    if (agenticVisionToggle) {
        agenticVisionToggle.checked = false;
        agenticVisionToggle.disabled = true;
    }
}

// Listen for model selection changes
if (modelSelectHidden) {
    modelSelectHidden.addEventListener('change', updateAgenticVisionVisibility);
}

let eventSource = null;
let selectedFiles = null; // Store selected files until user clicks start

// ========== INITIALIZATION ==========
let configuredProviders = []; // Track which providers have API keys
initializeApp();

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
    logConsole.innerHTML = `<div class="log-entry">${t('progress.waitingLogs')}</div>`;
});

// ========== TRANSLATION TOGGLE ==========
// ========== TRANSLATION TOGGLE ==========
translateToggle.addEventListener('change', () => {
    translationPanel.classList.toggle('hidden', !translateToggle.checked);

    // When translation is enabled, auto-select Gemini 3 Pro if available
    // Auto-selection removed to respect user choice (e.g. Zhipu GLM)
});

// ========== PRESETS HANDLING ==========
let savedPresets = [];
const presetSelect = document.getElementById('preset-select');
const savePresetBtn = document.getElementById('save-preset-btn');
const deletePresetBtn = document.getElementById('delete-preset-btn');

async function loadPresets() {
    try {
        const response = await fetch('/api/presets');
        const data = await response.json();
        savedPresets = data.presets || [];

        // Populate dropdown
        presetSelect.innerHTML = `<option value="">${t('translation.loadPreset')}</option>`;
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
        alert(t('alerts.enterInstructions'));
        return;
    }

    // Default to currently selected name if updating
    let defaultName = "";
    if (presetSelect.value) {
        defaultName = presetSelect.value;
    }

    const promptText = currentLang === 'es'
        ? "Ingresa un nombre para este prompt (ej. Contrato Legal, Memorando):"
        : "Enter a name for this prompt (e.g. Legal Contract, Company Memo):";
    const name = prompt(promptText, defaultName);
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
            alert(t('alerts.presetSaved'));
            loadPresets(); // Reload dropdown
            // Select the new one
            setTimeout(() => { presetSelect.value = name; }, 100);
        } else {
            alert(t('alerts.failedToSave', { error: 'Unknown error' }));
        }
    } catch (e) {
        console.error("Error saving preset:", e);
        alert(t('alerts.failedToSave', { error: e.message }));
    }
});

// Handle Delete Preset
deletePresetBtn.addEventListener('click', async () => {
    const selectedName = presetSelect.value;
    if (!selectedName) {
        alert(t('alerts.selectPreset'));
        return;
    }

    if (!confirm(t('alerts.confirmDelete', { name: selectedName }))) {
        return;
    }

    try {
        const response = await fetch(`/api/presets/${encodeURIComponent(selectedName)}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert(t('alerts.presetDeleted'));
            translationPromptInput.value = ""; // Clear input
            loadPresets(); // Reload dropdown
        } else {
            const err = await response.json();
            alert(t('alerts.failedToDelete', { error: err.error }));
        }
    } catch (e) {
        console.error("Error deleting preset:", e);
        alert(t('alerts.failedToDelete', { error: e.message }));
    }
});

// ========== START BUTTON ==========
startBtn.addEventListener('click', async () => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    // Check if selected model's provider has API key configured
    const selectedModelKey = modelSelect.value;
    const selectedTranslationModelKey = translationModelSelect.value;

    if (!selectedModelKey || selectedModelKey === '') {
        alert(t('alerts.configureApiKey'));
        openSettingsModal();
        return;
    }

    const selectedModel = allModels.find(m => m.key === selectedModelKey);
    if (selectedModel && !configuredProviders.includes(selectedModel.provider)) {
        const providerName = selectedModel.provider.charAt(0).toUpperCase() + selectedModel.provider.slice(1);
        alert(t('alerts.providerNotConfigured', { provider: providerName }));
        openSettingsModal();
        return;
    }

    // Check translation model specifically if translation is enabled
    const translateEnabled = translateToggle.checked;
    if (translateEnabled) {
        if (!selectedTranslationModelKey || selectedTranslationModelKey === '') {
            alert(t('alerts.configureApiKey'));
            openSettingsModal();
            return;
        }
        const selectedTransModel = allModels.find(m => m.key === selectedTranslationModelKey);
        if (selectedTransModel && !configuredProviders.includes(selectedTransModel.provider)) {
            const providerName = selectedTransModel.provider.charAt(0).toUpperCase() + selectedTransModel.provider.slice(1);
            alert(t('alerts.providerNotConfigured', { provider: providerName }));
            openSettingsModal();
            return;
        }
    }

    await processFiles(selectedFiles, translateEnabled);
});

// ========== MODELS ==========
let allModels = []; // Store all models for provider lookup

// ========== CUSTOM SEARCHABLE DROPDOWN ==========
class ModelDropdown {
    constructor(searchInputId, listId, hiddenInputId) {
        this.searchInput = document.getElementById(searchInputId);
        this.list = document.getElementById(listId);
        this.hiddenInput = document.getElementById(hiddenInputId);
        this.models = []; // flat array of { key, name, provider }
        this.activeIndex = -1;
        this.isOpen = false;
        this.userStartedTyping = false; // Track if user has started typing

        if (!this.searchInput || !this.list || !this.hiddenInput) return;
        this._bindEvents();
    }

    // Load models into the dropdown
    setModels(modelList) {
        // Preserve current selection if still valid
        const prevKey = this.hiddenInput.value;
        this.models = modelList;
        const stillValid = prevKey && modelList.some(m => m.key === prevKey);
        
        // Determine default based on which dropdown this is
        const isTranslationDropdown = this.hiddenInput.id === 'translation-model-select';
        
        if (!stillValid) {
            if (modelList.length > 0) {
                let defaultModel = null;
                
                if (isTranslationDropdown) {
                    // Translation: prefer Gemini 3.1 Pro (OpenRouter)
                    defaultModel = modelList.find(m => 
                        m.id?.toLowerCase().includes('gemini-3.1-pro') ||
                        m.name.toLowerCase().includes('gemini 3.1 pro')
                    );
                } else {
                    // Conversion: prefer Gemini 2.0 Flash (OpenRouter) - good for vision
                    defaultModel = modelList.find(m => 
                        m.id?.toLowerCase().includes('gemini-2.0-flash') ||
                        m.name.toLowerCase().includes('gemini 2.0 flash')
                    );
                }
                
                // Fallback to first model if preferred not found
                defaultModel = defaultModel || modelList[0];
                this._selectModel(defaultModel);
            } else {
                this.hiddenInput.value = '';
                this.searchInput.value = '';
                this.searchInput.placeholder = t('options.noModels');
            }
        }
        // If dropdown is open, refresh the list
        if (this.isOpen) this._renderList(this.searchInput.value);
    }

    getValue() {
        return this.hiddenInput.value;
    }

    _bindEvents() {
        // Open on focus - show ALL models (not filtered by current value)
        this.searchInput.addEventListener('focus', () => {
            // Reset typing state on focus
            this.userStartedTyping = false;
            // Clear the input so user can type fresh
            this.searchInput.value = '';
            // Show all models when clicking/focusing
            this._renderList('');
            this._open();
        });
        
        // Open on hover - show ALL models
        this.searchInput.parentElement.addEventListener('mouseenter', () => {
            this.userStartedTyping = false;
            // Keep the current model name visible so user sees what's selected
            // Show all models in dropdown
            this._renderList('');
            this._open();
        });
        
        // Also open when clicking on the dropdown container
        this.searchInput.parentElement.addEventListener('click', (e) => {
            if (!this.isOpen) {
                this.userStartedTyping = false;
                this.searchInput.value = '';
                this._renderList('');
                this._open();
            }
        });

        // Filter on input - search across ALL models (not limited to current value)
        this.searchInput.addEventListener('input', () => {
            const query = this.searchInput.value;
            // Always filter from the full models list, not from currently selected
            this._renderList(query);
            this._open();
            this.activeIndex = -1;
        });

        // Keyboard navigation
        this.searchInput.addEventListener('keydown', (e) => {
            const items = this.list.querySelectorAll('.model-option');
            if (!this.isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.activeIndex = Math.min(this.activeIndex + 1, items.length - 1);
                this._updateActiveItem(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.activeIndex = Math.max(this.activeIndex - 1, 0);
                this._updateActiveItem(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (this.activeIndex >= 0 && items[this.activeIndex]) {
                    items[this.activeIndex].click();
                }
            } else if (e.key === 'Escape') {
                this._close();
                // Restore display name of currently selected model
                const current = this.models.find(m => m.key === this.hiddenInput.value);
                this.searchInput.value = current ? current.name : '';
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.searchInput.closest('.model-dropdown').contains(e.target)) {
                this._close();
                // Restore display name
                const current = this.models.find(m => m.key === this.hiddenInput.value);
                if (current) this.searchInput.value = current.name;
            }
        }, true);
    }

    _renderList(query) {
        const term = (query || '').toLowerCase().trim();
        this.list.innerHTML = '';

        const filtered = term
            ? this.models.filter(m =>
                m.name.toLowerCase().includes(term) ||
                m.provider.toLowerCase().includes(term) ||
                m.key.toLowerCase().includes(term)
              )
            : this.models;

        if (filtered.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'model-option model-option-empty';
            empty.textContent = 'No models found';
            this.list.appendChild(empty);
            return;
        }

        // Group by provider
        const groups = {};
        filtered.forEach(m => {
            if (!groups[m.provider]) groups[m.provider] = [];
            groups[m.provider].push(m);
        });

        const sortedGroups = Object.entries(groups).sort((a, b) => {
            if (a[0] === '1_featured') return -1;
            if (b[0] === '1_featured') return 1;
            return a[0].localeCompare(b[0]);
        });

        sortedGroups.forEach(([provider, models]) => {
            const header = document.createElement('div');
            header.className = 'model-group-header';
            
            // Use proper display name
            let displayName = provider;
            if (provider === '1_featured') displayName = '⭐ Recommended Models';
            else if (provider === 'openrouter') displayName = 'All OpenRouter Models';
            else displayName = provider.charAt(0).toUpperCase() + provider.slice(1);
            
            header.textContent = displayName;
            this.list.appendChild(header);

            models.forEach(m => {
                const item = document.createElement('div');
                item.className = 'model-option';
                if (m.key === this.hiddenInput.value) item.classList.add('selected');

                // Highlight matching text
                item.innerHTML = this._highlight(m.name, term);
                item.dataset.key = m.key;

                item.addEventListener('mousedown', (e) => {
                    e.preventDefault(); // Prevent input blur before click registers
                    this._selectModel(m);
                    this._close();
                });
                this.list.appendChild(item);
            });
        });

        this.activeIndex = -1;
    }

    _highlight(text, term) {
        if (!term) return this._escapeHtml(text);
        const idx = text.toLowerCase().indexOf(term);
        if (idx === -1) return this._escapeHtml(text);
        return (
            this._escapeHtml(text.slice(0, idx)) +
            '<mark>' + this._escapeHtml(text.slice(idx, idx + term.length)) + '</mark>' +
            this._escapeHtml(text.slice(idx + term.length))
        );
    }

    _escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    _selectModel(m) {
        this.hiddenInput.value = m.key;
        this.searchInput.value = m.name;
        // Dispatch change event so external code can react
        this.hiddenInput.dispatchEvent(new Event('change'));
    }

    _updateActiveItem(items) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === this.activeIndex);
            if (i === this.activeIndex) item.scrollIntoView({ block: 'nearest' });
        });
    }

    _open() {
        this.isOpen = true;
        this.list.classList.remove('hidden');
    }

    _close() {
        this.isOpen = false;
        this.list.classList.add('hidden');
        this.activeIndex = -1;
    }
}

// ========== LANGUAGE DROPDOWN CLASS ==========
class LanguageDropdown {
    constructor(inputId, listId, storageKey, defaultValue) {
        this.searchInput = document.getElementById(inputId);
        this.list = document.getElementById(listId);
        this.storageKey = storageKey;
        this.defaultValue = defaultValue;
        this.activeIndex = -1;
        this.isOpen = false;

        if (!this.searchInput || !this.list) return;
        this._bindEvents();
        
        // Load saved value or default
        const saved = localStorage.getItem(storageKey);
        this.searchInput.value = saved || defaultValue;
    }

    _bindEvents() {
        // Open on focus
        this.searchInput.addEventListener('focus', () => {
            this._renderList(this.searchInput.value);
            this._open();
        });

        // Filter on input
        this.searchInput.addEventListener('input', () => {
            this._renderList(this.searchInput.value);
            this._open();
            this.activeIndex = -1;
        });

        // Save on blur (for free-form input)
        this.searchInput.addEventListener('blur', () => {
            // Delay to allow click on dropdown item to register
            setTimeout(() => {
                this._saveValue();
                this._close();
            }, 150);
        });

        // Keyboard navigation
        this.searchInput.addEventListener('keydown', (e) => {
            const items = this.list.querySelectorAll('.language-option');
            if (!this.isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.activeIndex = Math.min(this.activeIndex + 1, items.length - 1);
                this._updateActiveItem(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.activeIndex = Math.max(this.activeIndex - 1, 0);
                this._updateActiveItem(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (this.activeIndex >= 0 && items[this.activeIndex]) {
                    items[this.activeIndex].click();
                }
            } else if (e.key === 'Escape') {
                this._close();
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.searchInput.closest('.language-dropdown').contains(e.target)) {
                this._close();
                this._saveValue();
            }
        }, true);
    }

    _renderList(query) {
        const languages = searchLanguages(query);
        this.list.innerHTML = '';

        if (languages.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'language-option language-option-empty';
            empty.textContent = 'No languages found';
            this.list.appendChild(empty);
            return;
        }

        languages.forEach(lang => {
            const item = document.createElement('div');
            item.className = 'language-option';
            
            // Highlight matching text
            const term = (query || '').toLowerCase().trim();
            const displayName = term 
                ? this._highlight(lang.name, term) 
                : this._escapeHtml(lang.name);
            
            item.innerHTML = `${displayName}<span class="lang-code">${lang.code}</span>`;
            item.dataset.code = lang.code;
            item.dataset.name = lang.name;

            item.addEventListener('mousedown', (e) => {
                e.preventDefault();
                this._selectLanguage(lang);
            });
            this.list.appendChild(item);
        });

        this.activeIndex = -1;
    }

    _highlight(text, term) {
        if (!term) return this._escapeHtml(text);
        const idx = text.toLowerCase().indexOf(term);
        if (idx === -1) return this._escapeHtml(text);
        return (
            this._escapeHtml(text.slice(0, idx)) +
            '<mark>' + this._escapeHtml(text.slice(idx, idx + term.length)) + '</mark>' +
            this._escapeHtml(text.slice(idx + term.length))
        );
    }

    _escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    _selectLanguage(lang) {
        this.searchInput.value = lang.name;
        this._saveValue();
        this._close();
    }

    _saveValue() {
        const value = this.searchInput.value.trim();
        if (value) {
            localStorage.setItem(this.storageKey, value);
        }
    }

    _updateActiveItem(items) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === this.activeIndex);
            if (i === this.activeIndex) item.scrollIntoView({ block: 'nearest' });
        });
    }

    _open() {
        this.isOpen = true;
        this.list.classList.remove('hidden');
    }

    _close() {
        this.isOpen = false;
        this.list.classList.add('hidden');
        this.activeIndex = -1;
    }

    getValue() {
        return this.searchInput.value;
    }
}

// Instantiate the two dropdowns
const mainDropdown = new ModelDropdown('model-search', 'model-dropdown-list', 'model-select');
const translationDropdown = new ModelDropdown('translation-model-search', 'translation-model-dropdown-list', 'translation-model-select');

// Instantiate language dropdowns
const languageADropdown = new LanguageDropdown('language-a', 'language-a-dropdown-list', 'languageA', 'English');
const languageBDropdown = new LanguageDropdown('language-b', 'language-b-dropdown-list', 'languageB', 'Spanish (Colombia)');

async function loadModels() {
    try {
        const response = await fetch('/api/models');
        const data = await response.json();

        console.log('API Response:', data);

        // Store for later reference
        allModels = data.models || [];
        configuredProviders = data.configuredProviders || [];

        // Check if OpenRouter is configured - show toggle only if available
        const openRouterConfigured = configuredProviders.includes('openrouter');
        const toggleContainer = document.getElementById('openrouter-toggle-container');
        if (toggleContainer) {
            toggleContainer.style.display = openRouterConfigured ? 'flex' : 'none';
        }

        // Always include all available models (including dynamic OpenRouter)
        // Filter out direct gemini (provider: 'gemini') - only OpenRouter models now
        let filteredModels = data.availableModels.filter(m => 
            !m.key.startsWith('openrouter-dynamic') && 
            m.provider !== 'gemini'
        );

        // Always fetch and include OpenRouter dynamic models
        if (openRouterConfigured) {
            try {
                const orResponse = await fetch('/api/openrouter-models');
                const orData = await orResponse.json();
                if (orData.models && orData.models.length > 0) {
                    // Filter out any gemini direct models from dynamic list
                    const dynamicModels = orData.models.filter(m => 
                        !m.id.toLowerCase().includes('google/') || 
                        m.id.toLowerCase().startsWith('google/')
                    );
                    filteredModels = [...filteredModels, ...dynamicModels];
                    console.log('Added dynamic OpenRouter models:', dynamicModels.length);
                }
            } catch (orErr) {
                console.warn('Failed to load dynamic OpenRouter models:', orErr);
                // Fall back to static OpenRouter models
                filteredModels = [...filteredModels, ...data.availableModels.filter(m => m.provider === 'openrouter')];
            }
        }

        // Create a Map to filter duplicates by model ID
        const uniqueModelsMap = new Map();
        
        // Populate map: dynamic models (OpenRouter API) override static ones
        filteredModels.forEach(m => {
            uniqueModelsMap.set(m.id || m.key, m);
        });
        
        // Convert back to array
        filteredModels = Array.from(uniqueModelsMap.values());

        if (filteredModels.length === 0) {
            mainDropdown.setModels([]);
            translationDropdown.setModels([]);
        } else {
            // Identify featured models based on user preference
            filteredModels.forEach(m => {
                const id = (m.id || '').toLowerCase();
                const name = (m.name || '').toLowerCase();
                
                const isFeatured = 
                    id.includes('gemini-3.0-flash') ||
                    id.includes('gemini-3.1-pro') ||
                    id.includes('claude-sonnet-4.6') ||
                    id.includes('claude-opus-4.6') ||
                    id.includes('gpt-4.5') ||
                    id.includes('kimi-k2.5') ||
                    id.includes('glm-5');
                    
                if (isFeatured) {
                    m.provider = '1_featured';
                }
            });

            // For conversion (main) dropdown: only vision-capable models
            const visionModels = filteredModels.filter(m => m.supportsVision === true);
            
            console.log('All filtered models:', filteredModels.map(m => m.key + ' vision=' + m.supportsVision));
            
            // Sort vision models: prefer Gemini Flash, then other vision models, then free at end
            const sortedVisionModels = [...visionModels].sort((a, b) => {
                // Explicit order for conversion:
                // 1. Gemini 3.0 Flash
                // 2. Gemini 3.1 Pro
                // 3. Claude Sonnet 4.6
                // 4. Claude Opus 4.6
                // 5. ChatGPT 4.5
                // 6. Kimi 2.5
                // 7. GLM 5
                
                const getOrder = (model) => {
                    const id = (model.id || '').toLowerCase();
                    const name = (model.name || '').toLowerCase();
                    if (id.includes('gemini-3.0-flash') || name.includes('gemini 3.0 flash')) return 1;
                    if (id.includes('gemini-3.1-pro') || name.includes('gemini 3.1 pro')) return 2;
                    if (id.includes('claude-sonnet-4.6') || name.includes('sonnet 4.6')) return 3;
                    if (id.includes('claude-opus-4.6') || name.includes('opus 4.6')) return 4;
                    if (id.includes('gpt-4.5') || name.includes('gpt 4.5')) return 5;
                    if (id.includes('kimi-k2.5') || name.includes('kimi 2.5')) return 6;
                    if (id.includes('glm-5') || name.includes('glm 5')) return 7;
                    return 99;
                };

                const aOrder = getOrder(a);
                const bOrder = getOrder(b);

                if (aOrder !== 99 || bOrder !== 99) {
                    if (aOrder !== bOrder) return aOrder - bOrder;
                }
                
                // Among same provider: non-free before free
                if (a.provider === b.provider) {
                    const aFree = a.isFree === true || (a.name && a.name.toLowerCase().includes('(free)'));
                    const bFree = b.isFree === true || (b.name && b.name.toLowerCase().includes('(free)'));
                    if (aFree && !bFree) return 1;
                    if (!aFree && bFree) return -1;
                    
                    // Alphabetical fallback
                    return (a.name || '').localeCompare(b.name || '');
                }
                
                return 0;
            });
            
            // For translation dropdown: all models sorted with free at end
            const sortedTranslationModels = [...filteredModels].sort((a, b) => {
                // Explicit order for translation:
                // 1. Gemini 3.1 Pro (Default)
                // 2. Gemini 3.0 Flash
                // 3. Claude Sonnet 4.6
                // 4. Claude Opus 4.6
                // 5. ChatGPT 4.5
                // 6. Kimi 2.5
                // 7. GLM 5
                
                const getOrder = (model) => {
                    const id = (model.id || '').toLowerCase();
                    const name = (model.name || '').toLowerCase();
                    if (id.includes('gemini-3.1-pro') || name.includes('gemini 3.1 pro')) return 1;
                    if (id.includes('gemini-3.0-flash') || name.includes('gemini 3.0 flash')) return 2;
                    if (id.includes('claude-sonnet-4.6') || name.includes('sonnet 4.6')) return 3;
                    if (id.includes('claude-opus-4.6') || name.includes('opus 4.6')) return 4;
                    if (id.includes('gpt-4.5') || name.includes('gpt 4.5')) return 5;
                    if (id.includes('kimi-k2.5') || name.includes('kimi 2.5')) return 6;
                    if (id.includes('glm-5') || name.includes('glm 5')) return 7;
                    return 99;
                };

                const aOrder = getOrder(a);
                const bOrder = getOrder(b);

                if (aOrder !== 99 || bOrder !== 99) {
                    if (aOrder !== bOrder) return aOrder - bOrder;
                }
                
                // Among same provider: non-free before free
                if (a.provider === b.provider) {
                    const aFree = a.isFree === true || (a.name && a.name.toLowerCase().includes('(free)'));
                    const bFree = b.isFree === true || (b.name && b.name.toLowerCase().includes('(free)'));
                    if (aFree && !bFree) return 1;
                    if (!aFree && bFree) return -1;
                    
                    // Alphabetical fallback
                    return (a.name || '').localeCompare(b.name || '');
                }
                
                return 0;
            });

            console.log('Vision models for conversion:', sortedVisionModels.map(m => m.name));
            console.log('Translation models:', sortedTranslationModels.length);

            mainDropdown.setModels(sortedVisionModels);
            translationDropdown.setModels(sortedTranslationModels);
        }
    } catch (e) {
        console.error('Failed to load models:', e);
    }
}

// OpenRouter toggle no longer reloads models - they load once at startup
// The toggle is only used to enable web search in API calls

// Handle temperature slider change
const translationTempInput = document.getElementById('translation-temperature');
const translationTempValue = document.getElementById('translation-temperature-value');
if (translationTempInput && translationTempValue) {
    translationTempInput.addEventListener('input', () => {
        translationTempValue.textContent = translationTempInput.value;
    });
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
    const fileName = fileCount === 1 ? files[0].name : `${fileCount} ${currentLang === 'es' ? 'archivos' : 'files'}`;
    startBtn.textContent = `${t('buttons.start')}: ${fileName}`;
}

async function processFiles(files, withTranslation = false) {
    // Hide start button and show progress
    startBtn.classList.add('hidden');
    dropZone.classList.add('hidden');
    document.querySelector('.options-area').classList.add('hidden');
    progressContainer.classList.remove('hidden');

    const results = [];
    let conversionCost = 0;
    let translationCost = 0;
    let conversionTokens = { input: 0, output: 0 };
    let translationTokens = { input: 0, output: 0 };

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        statusText.innerText = t('progress.processing', { current: i + 1, total: files.length, filename: file.name });
        addLog(`\n━━━ ${currentLang === 'es' ? 'Archivo' : 'File'} ${i + 1}/${files.length}: ${file.name} ━━━`);

        try {
            const isDocx = file.name.toLowerCase().endsWith('.docx');
            const isPdf = file.name.toLowerCase().endsWith('.pdf');
            const isImage = /\.(png|jpe?g|webp|tiff|bmp)$/i.test(file.name);
            let result;

            if (isDocx && withTranslation) {
                // DOCX + Translation → Just translate
                result = await translateSingleFile(file);
                results.push({ file: file.name, success: true, url: result.downloadUrl, type: 'translated' });
                // Track translation cost and tokens
                if (result.cost) {
                    if (result.cost.totalCost) translationCost += result.cost.totalCost;
                    if (result.cost.inputTokens) translationTokens.input += result.cost.inputTokens;
                    if (result.cost.outputTokens) translationTokens.output += result.cost.outputTokens;
                }
            } else if ((isPdf || isImage) && withTranslation) {
                // PDF or Image + Translation → Convert AND Translate (returns both files)
                result = await convertAndTranslateFile(file);
                // Add both files to results
                for (const f of result.files) {
                    results.push({
                        file: `${file.name} → ${f.label}`,
                        success: true,
                        url: f.downloadUrl,
                        type: f.type || 'converted'
                    });
                }
                // Track costs and tokens - split between conversion and translation
                if (result.cost) {
                    if (result.cost.conversionCost) {
                        conversionCost += result.cost.conversionCost;
                    }
                    if (result.cost.translationCost) {
                        translationCost += result.cost.translationCost;
                    }
                    if (result.cost.conversionTokens) {
                        conversionTokens.input += result.cost.conversionTokens.input || 0;
                        conversionTokens.output += result.cost.conversionTokens.output || 0;
                    }
                    if (result.cost.translationTokens) {
                        translationTokens.input += result.cost.translationTokens.input || 0;
                        translationTokens.output += result.cost.translationTokens.output || 0;
                    }
                    // Fallback: if only totalCost is available, split evenly
                    if (result.cost.totalCost && !result.cost.conversionCost && !result.cost.translationCost) {
                        conversionCost += result.cost.totalCost / 2;
                        translationCost += result.cost.totalCost / 2;
                    }
                    // Fallback for tokens from single cost object
                    if (result.cost.inputTokens && !result.cost.conversionTokens && !result.cost.translationTokens) {
                        conversionTokens.input += Math.floor(result.cost.inputTokens / 2);
                        conversionTokens.output += Math.floor(result.cost.outputTokens / 2);
                        translationTokens.input += Math.ceil(result.cost.inputTokens / 2);
                        translationTokens.output += Math.ceil(result.cost.outputTokens / 2);
                    }
                }
            } else {
                // Just convert (PDF, Image, or DOCX without translation)
                result = await convertSingleFile(file);
                results.push({ file: file.name, success: true, url: result.downloadUrl, type: 'converted' });
                // Track conversion cost and tokens
                if (result.cost) {
                    if (result.cost.totalCost) conversionCost += result.cost.totalCost;
                    if (result.cost.inputTokens) conversionTokens.input += result.cost.inputTokens;
                    if (result.cost.outputTokens) conversionTokens.output += result.cost.outputTokens;
                }
            }

            addLog(`✅ ${file.name} completed`);
        } catch (error) {
            results.push({ file: file.name, success: false, error: error.message });
            addLog(`❌ ${file.name} failed: ${error.message}`);
        }
    }

    showResults(results, { conversionCost, translationCost, conversionTokens, translationTokens });
}

function showResults(results, costs = {}) {
    if (eventSource) eventSource.close();
    progressContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    // Helper to format filenames: decode URI encoding and replace underscores with spaces
    function formatFilename(filename) {
        try {
            // Decode URL-encoded characters (like %C3%B3 -> ó)
            let decoded = decodeURIComponent(filename);
            // Replace underscores with spaces for better readability
            decoded = decoded.replace(/_/g, ' ');
            return decoded;
        } catch (e) {
            // If decoding fails, just replace underscores
            return filename.replace(/_/g, ' ');
        }
    }

    // Helper to format cost values
    function formatCost(costValue) {
        if (costValue < 0.01) return `$${costValue.toFixed(6)}`;
        if (costValue < 1) return `$${costValue.toFixed(4)}`;
        return `$${costValue.toFixed(2)}`;
    }

    // Copy logs from progress console to result console
    const resultLogConsole = document.getElementById('result-log-console');
    resultLogConsole.innerHTML = logConsole.innerHTML;

    // Apply i18n to the new dynamic elements
    const logsTitle = resultContainer.querySelector('.result-logs-section summary');
    if (logsTitle) logsTitle.textContent = t('result.logsTitle');

    const successResults = results.filter(r => r.success);

    // Group by type (using the explicit type field)
    const convertedFiles = successResults.filter(r => r.type === 'converted');
    const translatedFiles = successResults.filter(r => r.type === 'translated');

    // Get section references
    const convertedSection = document.getElementById('converted-files-section');
    const translatedSection = document.getElementById('translated-files-section');
    const convertedList = document.getElementById('converted-files-list');
    const translatedList = document.getElementById('translated-files-list');

    // Clear previous content
    convertedList.innerHTML = '';
    translatedList.innerHTML = '';

    // Apply i18n to section headers
    const convertedHeader = convertedSection.querySelector('h4');
    const translatedHeader = translatedSection.querySelector('h4');
    if (convertedHeader) convertedHeader.textContent = t('result.convertedFiles');
    if (translatedHeader) translatedHeader.textContent = t('result.translatedFiles');

    // Populate converted files section
    const btnAllConverted = document.getElementById('download-all-converted');
    if (convertedFiles.length > 0) {
        convertedSection.classList.remove('hidden');

        if (convertedFiles.length > 1) {
            btnAllConverted.classList.remove('hidden');
            btnAllConverted.onclick = () => downloadZip(convertedFiles.map(r => decodeURIComponent(r.url.split('/').pop())), 'Converted_Documents.zip');
        } else {
            btnAllConverted.classList.add('hidden');
        }

        convertedFiles.forEach(result => {
            const link = document.createElement('a');
            link.href = result.url;
            link.className = 'btn';
            const rawFilename = result.url.split('/').pop();
            link.innerText = `${t('buttons.download')} ${formatFilename(rawFilename)}`;
            convertedList.appendChild(link);
        });
    } else {
        convertedSection.classList.add('hidden');
        btnAllConverted.classList.add('hidden');
    }

    // Display conversion cost and tokens
    const conversionCostDisplay = document.getElementById('conversion-cost-display');
    if (conversionCostDisplay) {
        let costText = '';
        if (costs.conversionCost && costs.conversionCost > 0) {
            costText = t('result.cost', { cost: formatCost(costs.conversionCost) });
        }
        if (costs.conversionTokens && (costs.conversionTokens.input > 0 || costs.conversionTokens.output > 0)) {
            const tokenText = t('result.tokens', {
                input: costs.conversionTokens.input.toLocaleString(),
                output: costs.conversionTokens.output.toLocaleString()
            });
            costText = costText ? `${costText}  |  ${tokenText}` : tokenText;
        }
        conversionCostDisplay.innerText = costText;
    }

    // Populate translated files section
    const btnAllTranslated = document.getElementById('download-all-translated');
    if (translatedFiles.length > 0) {
        translatedSection.classList.remove('hidden');

        if (translatedFiles.length > 1) {
            btnAllTranslated.classList.remove('hidden');
            btnAllTranslated.onclick = () => downloadZip(translatedFiles.map(r => decodeURIComponent(r.url.split('/').pop())), 'Translated_Documents.zip');
        } else {
            btnAllTranslated.classList.add('hidden');
        }

        translatedFiles.forEach(result => {
            const link = document.createElement('a');
            link.href = result.url;
            link.className = 'btn';
            link.style.backgroundColor = '#2c3e50';
            const rawFilename = result.url.split('/').pop();
            link.innerText = `${t('buttons.download')} ${formatFilename(rawFilename)}`;
            translatedList.appendChild(link);
        });
    } else {
        translatedSection.classList.add('hidden');
        btnAllTranslated.classList.add('hidden');
    }

    // Display translation cost and tokens
    const translationCostDisplay = document.getElementById('translation-cost-display');
    if (translationCostDisplay) {
        let costText = '';
        if (costs.translationCost && costs.translationCost > 0) {
            costText = t('result.cost', { cost: formatCost(costs.translationCost) });
        }
        if (costs.translationTokens && (costs.translationTokens.input > 0 || costs.translationTokens.output > 0)) {
            const tokenText = t('result.tokens', {
                input: costs.translationTokens.input.toLocaleString(),
                output: costs.translationTokens.output.toLocaleString()
            });
            costText = costText ? `${costText}  |  ${tokenText}` : tokenText;
        }
        translationCostDisplay.innerText = costText;
    }

    const resultMessage = resultContainer.querySelector('h3');
    resultMessage.innerText = t('result.filesCompleted', { success: successResults.length, total: results.length });
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
    formData.append('agenticVision', agenticVisionToggle.checked ? 'true' : 'false');

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
    if (translationModelSelect && translationModelSelect.value) {
        formData.append('model', translationModelSelect.value); // Use translation model for pure docx translation
    } else if (modelSelect.value) {
        formData.append('model', modelSelect.value); // Fallback to conversion model if missing
    }

    // Get custom prompt from textarea
    const customPrompt = translationPromptInput.value.trim();
    formData.append('translationPrompt', customPrompt);

    // Add language pair
    const { languageA, languageB } = getLanguagePair();
    formData.append('languageA', languageA);
    formData.append('languageB', languageB);

    // Add OpenRouter web search option if enabled
    const useWebSearch = openrouterToggle && openrouterToggle.checked;
    formData.append('useWebSearch', useWebSearch ? 'true' : 'false');

    // Add temperature
    const temperatureInput = document.getElementById('translation-temperature');
    formData.append('temperature', temperatureInput ? temperatureInput.value : '0.2');

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

    if (modelSelect.value) {
        formData.append('model', modelSelect.value); // Sent as primary model for PDF conversion
    }

    if (translationModelSelect && translationModelSelect.value) {
        // We will send this as `translationModel` to backend explicitly for convert+translate flow
        formData.append('translationModel', translationModelSelect.value);
    }

    // Page layout options
    formData.append('addPageBreaks', pageBreaksToggle.checked ? 'true' : 'false');
    formData.append('agenticVision', agenticVisionToggle.checked ? 'true' : 'false');

    // Translation prompt
    const customPrompt = translationPromptInput.value.trim();
    formData.append('translationPrompt', customPrompt);

    // Add language pair
    const { languageA, languageB } = getLanguagePair();
    formData.append('languageA', languageA);
    formData.append('languageB', languageB);

    // Add OpenRouter web search option if enabled
    const useWebSearch = openrouterToggle && openrouterToggle.checked;
    formData.append('useWebSearch', useWebSearch ? 'true' : 'false');

    addLog("Starting conversion + translation...");
    const response = await fetch('/api/convert-and-translate', { method: 'POST', body: formData });
    const data = await response.json();

    if (data.success) return data;
    throw new Error(data.error || "Processing failed");
}

// ========== EVENT SOURCE (SSE for logs) ==========
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

// ========== API KEY SETTINGS ==========
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsModal = document.querySelector('.close-settings-modal');
const saveSettingsBtn = document.getElementById('save-settings-btn');
const cancelSettingsBtn = document.getElementById('cancel-settings-btn');
const settingsWelcomeMsg = document.getElementById('settings-welcome-msg');

// API Key inputs
const keyInputs = {
    openrouter: document.getElementById('key-openrouter')
};

const keyStatuses = {
    openrouter: document.getElementById('status-openrouter')
};

// Map provider names to key names
const providerKeyMap = {
    openrouter: 'OPENROUTER_API_KEY'
};

// Initialize the app
async function initializeApp() {
    loadUiLanguage();
    await loadModels();
    await checkFirstTimeSetup();
    loadLanguagePair();
    applyTranslations();
}

// Load UI language from localStorage
function loadUiLanguage() {
    currentLang = localStorage.getItem('uiLanguage') || 'en';
    if (uiLanguageSelect) {
        uiLanguageSelect.value = currentLang;
    }
}

// Save UI language to localStorage and apply
function setUiLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('uiLanguage', lang);
    applyTranslations();
}

// Load and display language pair from localStorage (handled by dropdowns, kept for compatibility)
function loadLanguagePair() {
    // Values are loaded by LanguageDropdown constructor
    updateLanguagePairUI();
}

// Update UI elements that show the language pair
function updateLanguagePairUI() {
    // Apply translations with updated language pair
    applyTranslations();
}

// Get current language pair
function getLanguagePair() {
    return {
        languageA: localStorage.getItem('languageA') || 'English',
        languageB: localStorage.getItem('languageB') || 'Spanish (Colombia)'
    };
}

// Check if this is first time (no API keys configured)
async function checkFirstTimeSetup() {
    try {
        const response = await fetch('/api/settings');
        const settings = await response.json();

        const anyConfigured = Object.values(settings).some(s => s.configured);
        if (!anyConfigured) {
            // First time - show settings modal with welcome message
            settingsWelcomeMsg.classList.remove('hidden');
            openSettingsModal();
        }
    } catch (e) {
        console.error("Failed to check settings:", e);
    }
}

// Open Settings Modal
function openSettingsModal() {
    settingsModal.classList.remove('hidden');
    loadSettings();
}

// Close Settings Modal
function closeSettingsModalFn() {
    settingsModal.classList.add('hidden');
    settingsWelcomeMsg.classList.add('hidden');
    // Clear input fields
    Object.values(keyInputs).forEach(input => input.value = '');
}

// Load current settings status
async function loadSettings() {
    try {
        const response = await fetch('/api/settings');
        const settings = await response.json();

        // Update status indicators
        Object.entries(providerKeyMap).forEach(([provider, keyName]) => {
            const status = settings[keyName];
            const statusEl = keyStatuses[provider];

            if (statusEl) {
                if (status && status.configured) {
                    statusEl.textContent = status.masked;
                    statusEl.className = 'key-status configured';
                    keyInputs[provider].placeholder = `Current: ${status.masked}`;
                } else {
                    statusEl.textContent = 'Not set';
                    statusEl.className = 'key-status not-configured';
                    keyInputs[provider].placeholder = provider.includes('google') ? 'Enter value' : 'Enter API key';
                }
            }
        });
    } catch (e) {
        console.error("Failed to load settings:", e);
    }
}

// Save settings
async function saveSettings() {
    const keys = {};

    // Collect only non-empty values (empty means keep existing)
    Object.entries(providerKeyMap).forEach(([provider, keyName]) => {
        const value = keyInputs[provider].value.trim();
        if (value) {
            keys[keyName] = value;
        }
    });

    // Save language pair to localStorage (handled by LanguageDropdown, but save explicitly)
    const langA = languageADropdown.getValue() || 'English';
    const langB = languageBDropdown.getValue() || 'Spanish (Colombia)';
    localStorage.setItem('languageA', langA);
    localStorage.setItem('languageB', langB);
    updateLanguagePairUI();

    // If no API keys to save, just close (language pair already saved)
    if (Object.keys(keys).length === 0) {
        alert(t('alerts.settingsSaved'));
        closeSettingsModalFn();
        return;
    }

    try {
        const response = await fetch('/api/settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keys })
        });

        if (response.ok) {
            alert(t('alerts.settingsSaved'));
            closeSettingsModalFn();
            // Reload models with new keys
            await loadModels();
        } else {
            const err = await response.json();
            alert(t('alerts.failedToSave', { error: err.error }));
        }
    } catch (e) {
        console.error("Save settings failed:", e);
        alert(t('alerts.failedToSave', { error: e.message }));
    }
}

// Toggle password visibility
document.querySelectorAll('.toggle-visibility').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        if (input.type === 'password') {
            input.type = 'text';
            btn.textContent = '🙈';
        } else {
            input.type = 'password';
            btn.textContent = '👁️';
        }
    });
});

// Event listeners for settings modal
settingsBtn.addEventListener('click', openSettingsModal);
closeSettingsModal.addEventListener('click', closeSettingsModalFn);
cancelSettingsBtn.addEventListener('click', closeSettingsModalFn);
saveSettingsBtn.addEventListener('click', saveSettings);

// UI Language change listener
if (uiLanguageSelect) {
    uiLanguageSelect.addEventListener('change', () => {
        setUiLanguage(uiLanguageSelect.value);
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === settingsModal) closeSettingsModalFn();
});

// Helper to trigger ZIP download
async function downloadZip(filenames, zipName) {
    try {
        const response = await fetch('/api/download-zip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ files: filenames, zipName })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || 'Failed to generate zip');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = zipName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    } catch (e) {
        console.error("Download Zip Error:", e);
        alert(`Failed to download zip: ${e.message}`);
    }
}