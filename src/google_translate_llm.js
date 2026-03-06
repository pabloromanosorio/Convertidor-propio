const { TranslationServiceClient } = require('@google-cloud/translate').v3;

/**
 * Google Cloud Translation LLM (TLLM) Implementation
 * Model: general/translation-llm
 */
class GoogleTranslateLLM {
    constructor(config) {
        this.projectId = config.projectId;
        this.location = config.location || 'us-central1';
        this.keyFilePath = config.keyFilePath;

        this.client = new TranslationServiceClient({
            keyFilename: this.keyFilePath
        });
    }

    async translateText(contents, targetLanguageCode, sourceLanguageCode = 'en') {
        const parent = `projects/${this.projectId}/locations/${this.location}`;
        const model = `${parent}/models/general/translation-llm`;

        const request = {
            parent: parent,
            contents: Array.isArray(contents) ? contents : [contents],
            mimeType: 'text/plain', // or 'text/html'
            sourceLanguageCode,
            targetLanguageCode,
            model: model,
        };

        try {
            const [response] = await this.client.translateText(request);
            return response.translations.map(t => t.translatedText);
        } catch (error) {
            console.error('TLLM Translation Error:', error);
            throw error;
        }
    }
}

module.exports = GoogleTranslateLLM;
