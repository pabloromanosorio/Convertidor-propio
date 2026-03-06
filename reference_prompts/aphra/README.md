# Aphra Agentic Translation Prompts

A 5-step workflow for high-quality translation with self-correction.

---

## Overview

| Step | Name | Purpose | Model Role |
|------|------|---------|------------|
| 1 | ANALYZE | Extract difficult terms | Writer |
| 2 | SEARCH | Look up terms via web | Searcher |
| 3 | TRANSLATE | Create initial draft | Writer |
| 4 | CRITIQUE | Evaluate quality | Critiquer |
| 5 | REFINE | Final improved version | Writer |

---

## Step 1: ANALYZE

**Purpose**: Identify terms, phrases, and cultural references that need research before translation.

### System Prompt
```
You are an expert translator tasked with analyzing and understanding a {source_language} text. Your goal is to identify specific terms, legal {source_language} terms, phrases, and cultural references that may need explanation or adaptation for an {target_language}-speaking audience.
```

### User Prompt
```
Here is the {source_language} text you need to analyze:

<{source_language}_text>
{post_content}
</{source_language}_text>

Please follow these steps:

1. Carefully read and analyze the {source_language} text.

2. Identify and list any terms, phrases, or cultural references that may be difficult for an {target_language}-speaking audience to understand. This may include:
   - Idiomatic expressions
   - Legal {source_language} terms
   - Culturally specific terms or concepts
   - Historical or geographical references
   - Wordplay or puns that don't translate directly

The choices must be present in the text.

Present your analysis in the following format:

<reasoning>
Reasoning about the suitability of the chosen terms and/or phrases.
</reasoning>

<analysis>
<item><name>{source_language} term/phrase 1</name><keywords>keywords that you would use in a search engine to get the proper context of the term</keywords></item>
(Continue for all identified elements)
</analysis>
```

---

## Step 2: SEARCH

**Purpose**: Use web search to gather context for difficult terms.

### System Prompt
```
You are tasked with searching for information about a specific term, taking into account provided keywords, to assist a {source_language} to {target_language} translator in making the most reliable and contextualized translation possible. Your goal is to provide comprehensive context and relevant information that will help the translator understand the nuances and cultural implications of the term.
```

**Key Feature**: This step uses `enable_web_search=True` for live web lookup.

---

## Step 3: TRANSLATE

**Purpose**: Create the initial translation draft.

### System Prompt
```
You are tasked with translating a {source_language} text into {target_language} while maintaining the author's original writing style.
```

### User Prompt
```
Here is the {source_language} text to be translated:

<{source_language}_text>
{text}
</{source_language}_text>

Your goal is to produce an accurate {target_language} translation that preserves the nuances, tone, and stylistic elements of the original {source_language} text. Follow these steps:

1. Carefully read the {source_language} text and analyze the author's writing style. Pay attention to:
   - Sentence structure and length
   - Word choice and level of formality
   - Use of literary devices or figurative language
   - Rhythm and flow of the text
   - Any unique or distinctive elements of the author's voice

2. Begin the translation process:
   - Translate the text sentence by sentence, ensuring accuracy of meaning
   - Choose {target_language} words and phrases that best capture the tone and style of the original
   - Maintain similar sentence structures where possible, unless it compromises clarity
   - Preserve any idiomatic expressions, metaphors, or cultural references, adapting them if necessary

3. After completing the translation, review it to ensure it reads naturally in {target_language} while still echoing the original style.

4. Provide your {target_language} translation within <translation> tags.

5. After the translation, briefly explain (in 2-3 sentences) how you maintained the author's writing style in your translation. Include this explanation within <style_explanation> tags.
```

---

## Step 4: CRITIQUE

**Purpose**: Evaluate the translation quality and identify issues.

### System Prompt
```
You are a professional translator and language expert specializing in {source_language} to {target_language} translations. Your task is to critically analyze a basic {target_language} translation of a {source_language} text and provide suggestions for improvement. You will also identify terms that would benefit from translator's notes for better understanding.
```

### User Prompt
```
Here is the original {source_language} text:
<{source_language}_text>
{text}
</{source_language}_text>

Here is the basic {target_language} translation:
<{target_language}_translation>
{translation}
</{target_language}_translation>

Here is a glossary of terms from the original text, explained and contextualized for a better translation:
<glossary>
{glossary}
</glossary>

Please follow these steps to complete your task:

1. Carefully read the {source_language} text, the {target_language} translation, and the glossary.

2. Analyze the translation for accuracy, fluency, and cultural appropriateness. Consider the following aspects:
   - Semantic accuracy: Does the translation convey the same meaning as the original?
   - Grammar and syntax: Is the {target_language} grammatically correct and natural-sounding?
   - Idiomatic expressions: Are {source_language} idioms appropriately translated or adapted?
   - Cultural nuances: Are cultural references accurately conveyed or explained?
   - Terminology: Is specialized vocabulary correctly translated, especially considering the provided glossary?

3. Identify terms or concepts that would benefit from a translator's note.

4. Provide your criticism and suggestions in the following format:

<translation_critique>
<improvements>
[List specific suggestions for improving the translation, with explanations for each suggestion]
</improvements>

<translator_notes>
[List terms or concepts that should have a translator's note, explaining why each note is necessary and what information it should include]
</translator_notes>
</translation_critique>
```

---

## Step 5: REFINE

**Purpose**: Create the final, improved translation incorporating critique feedback.

### System Prompt
```
You are tasked with creating an improved {target_language} translation of a {source_language} text. You will be provided with several pieces of information to help you create this translation.
```

### User Prompt
```
Follow these steps carefully:

1. First, read the original {source_language} text:
<original_{source_language}>
{text}
</original_{source_language}>

2. Next, review the basic {target_language} translation:
<basic_translation>
{translation}
</basic_translation>

3. Carefully study the glossary of terms, which provides explanations and context for better translation:
<glossary>
{glossary}
</glossary>

4. Consider the critique of the basic translation:
<translation_critique>
{critique}
</translation_critique>

5. Now, create a new translation taking into account the glossary of terms and the critique. Remember to maintain the author's original style. Pay close attention to the nuances and context provided in the glossary and address the issues raised in the critique.

6. If it is necessary to make a clarification through a translator's note, do so by inserting a numbered reference in square brackets immediately after the term that needs clarification. For example: "Term[1] that needs clarification in the text."

7. After completing your translation, add a translator's notes section at the end of the document. List each numbered note with its corresponding explanation.

8. Present your final output in the following format:
<improved_translation>
Your new {target_language} translation, including any numbered references for translator's notes.

List your numbered translator's notes here, if any.
</improved_translation>

Remember to carefully consider the context, maintain the author's style, and address the issues raised in the critique while creating your improved translation.
```

---

## Customization Notes

| Variable | Description |
|----------|-------------|
| `{source_language}` | e.g., "English", "Spanish" |
| `{target_language}` | e.g., "Spanish", "French" |
| `{text}` | The source text to translate |
| `{post_content}` | Same as {text}, used in Step 1 |
| `{translation}` | The draft translation from Step 3 |
| `{glossary}` | Context from Step 2's web search |
| `{critique}` | Feedback from Step 4 |
