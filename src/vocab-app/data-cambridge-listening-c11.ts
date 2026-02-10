import { SubTopic, Word } from './data-types';
import { C11_T1_S1_VOCAB, C11_T2_S1_VOCAB, VocabItem } from '../data/listening-study';

const toWords = (items: VocabItem[]): Word[] => {
    return items.map((item) => ({
        word: item.phrase,
        phonetic: '',
        definition: item.explanation ? `${item.meaning}；${item.explanation}` : item.meaning,
        example: item.examples && item.examples.length > 0 ? item.examples[0] : '',
        emoji: '🎧',
        level: 'basic',
    }));
};

export const cambridgeC11T1S1: SubTopic = {
    id: 'cambridge-c11-t1-s1',
    title: 'C11 T1 S1 · Village Hall Hire',
    type: '听力精听',
    color: 'blue',
    badge: 'Section 1',
    words: toWords(C11_T1_S1_VOCAB),
};

export const cambridgeC11T2S1: SubTopic = {
    id: 'cambridge-c11-t2-s1',
    title: 'C11 T2 S1 · Fiddy Working Heritage Farm',
    type: '听力精听',
    color: 'blue',
    badge: 'Section 1',
    words: toWords(C11_T2_S1_VOCAB),
};

