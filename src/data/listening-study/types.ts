export interface TranscriptLine {
    id: number;
    text: string;
}

export interface VocabItem {
    phrase: string;
    meaning: string;
    explanation?: string;
    examples?: string[];
}

