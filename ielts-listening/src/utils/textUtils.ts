export const cleanWord = (text: string): string | null => {
    const cleaned = text
        .trim()
        .toLowerCase()
        // Keep hyphens for words like "well-known"; normalize punctuation.
        .replace(/[“”"]/g, '')
        .replace(/’s|'s/g, '')
        .replace(/[’']/g, '')
        .replace(/[.,/#!$%^&*;:{}=_`~()?()[\]]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    if (!cleaned) return null;
    if (!/[a-z]/.test(cleaned)) return null;

    const tokens = cleaned.split(' ').filter(Boolean);
    // Prevent adding entire sentences.
    if (tokens.length > 6) return null;

    return cleaned;
}
