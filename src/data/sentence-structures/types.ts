export interface SentencePracticeItem {
    id: string;
    en: string;
    zh?: string;
    note?: string;
}

export interface SentencePracticeSection {
    id: string;
    title: string;
    description?: string;
    items: SentencePracticeItem[];
}

export interface SentencePracticeTopic {
    id: string;
    title: string;
    subtitle?: string;
    sections: SentencePracticeSection[];
}

