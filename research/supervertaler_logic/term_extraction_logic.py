# Statistical Term Extraction Logic
# Source: Supervertaler (modules/term_extractor.py)

"""
Concept:
The logic uses "N-grams" (sequences of N words) and calculates a score based on:
1. Frequency (How often it appears)
2. Length (Longer phrases might be more specific)
3. Capitalization (Proper nouns)

To make this "Robust" in Node.js, we should combine this with basic NLP (like 'compromise' library)
to detect Part-of-Speech (Nouns) instead of just relying on capitalization.
"""

def extract_terms(self, text: str, use_frequency: bool = True,
                 use_capitalization: bool = True,
                 use_special_chars: bool = True) -> List[Dict[str, any]]:
    candidates = {}
    
    # 1. Extract N-grams (1 to 3 words)
    # Example: "The Project Manager" -> "The Project", "Project Manager", "The Project Manager"
    for n in range(1, self.max_ngram + 1):
        ngrams = self._extract_ngrams(text, n)
        # ... process ngrams ...
    
    # 2. Score Candidates
    for term_info in candidates.values():
        score = self._calculate_score(term_info, use_frequency, use_capitalization, use_special_chars)
        # Score Formula (Pseudo-code):
        # score = frequency * (len(term) * 0.1)
        # if is_capitalized: score *= 1.5
        # if inside_parentheses: score *= 1.2
        
        if score > 0:
            scored_terms.append({
                'term': term_info['term'],
                'frequency': term_info['frequency'],
                'score': score,
                'type': self._classify_term(term_info)
            })
            
    scored_terms.sort(key=lambda x: x['score'], reverse=True)
    return scored_terms
