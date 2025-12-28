/**
 * Pricing Module for LLM API Cost Tracking
 * Prices are per 1 million tokens in USD
 * Last updated: December 2024
 */

// Pricing in USD per 1 MILLION tokens
const PRICING = {
    // Gemini Models
    'gemini-3-pro': {
        input: 2.00,
        output: 12.00
    },
    'gemini-2.5-pro': {
        input: 1.25,
        output: 10.00
    },
    'gemini-2.0-flash': {
        input: 0.10,
        output: 0.40
    },

    // Claude Models (Anthropic)
    'claude-sonnet-4.5': {
        input: 3.00,
        output: 15.00
    },
    'claude-opus-4.5': {
        input: 15.00,
        output: 75.00
    },
    'claude-sonnet-4': {
        input: 3.00,
        output: 15.00
    },
    'claude-opus-4': {
        input: 15.00,
        output: 75.00
    },
    'claude-3.5-sonnet': {
        input: 3.00,
        output: 15.00
    },

    // OpenAI Models
    'gpt-4o': {
        input: 2.50,
        output: 10.00
    },
    'gpt-4o-mini': {
        input: 0.15,
        output: 0.60
    },
    'o1': {
        input: 15.00,
        output: 60.00
    },
    'o1-mini': {
        input: 3.00,
        output: 12.00
    },
    'o3': {
        input: 2.00,
        output: 8.00
    },
    'o3-mini': {
        input: 1.10,
        output: 4.40
    }
};

/**
 * Calculate cost for a given model and token usage
 * @param {string} modelKey - Model key from MODELS
 * @param {number} inputTokens - Number of input tokens
 * @param {number} outputTokens - Number of output tokens
 * @returns {{ inputCost: number, outputCost: number, totalCost: number, inputTokens: number, outputTokens: number }}
 */
function calculateCost(modelKey, inputTokens, outputTokens) {
    const pricing = PRICING[modelKey];

    if (!pricing) {
        console.warn(`No pricing found for model: ${modelKey}. Using zero cost.`);
        return {
            inputCost: 0,
            outputCost: 0,
            totalCost: 0,
            inputTokens: inputTokens || 0,
            outputTokens: outputTokens || 0
        };
    }

    // Convert from per-million to actual cost
    const inputCost = (inputTokens / 1_000_000) * pricing.input;
    const outputCost = (outputTokens / 1_000_000) * pricing.output;
    const totalCost = inputCost + outputCost;

    return {
        inputCost: Math.round(inputCost * 1_000_000) / 1_000_000, // Round to 6 decimal places
        outputCost: Math.round(outputCost * 1_000_000) / 1_000_000,
        totalCost: Math.round(totalCost * 1_000_000) / 1_000_000,
        inputTokens: inputTokens || 0,
        outputTokens: outputTokens || 0
    };
}

/**
 * Aggregate multiple cost objects
 * @param {Array<{inputCost: number, outputCost: number, totalCost: number, inputTokens: number, outputTokens: number}>} costs
 * @returns {{ inputCost: number, outputCost: number, totalCost: number, inputTokens: number, outputTokens: number }}
 */
function aggregateCosts(costs) {
    return costs.reduce((acc, cost) => ({
        inputCost: acc.inputCost + (cost.inputCost || 0),
        outputCost: acc.outputCost + (cost.outputCost || 0),
        totalCost: acc.totalCost + (cost.totalCost || 0),
        inputTokens: acc.inputTokens + (cost.inputTokens || 0),
        outputTokens: acc.outputTokens + (cost.outputTokens || 0)
    }), { inputCost: 0, outputCost: 0, totalCost: 0, inputTokens: 0, outputTokens: 0 });
}

/**
 * Format cost for display
 * @param {number} cost - Cost in USD
 * @returns {string}
 */
function formatCost(cost) {
    if (cost < 0.01) {
        return `$${cost.toFixed(6)}`;
    } else if (cost < 1) {
        return `$${cost.toFixed(4)}`;
    } else {
        return `$${cost.toFixed(2)}`;
    }
}

module.exports = {
    PRICING,
    calculateCost,
    aggregateCosts,
    formatCost
};
