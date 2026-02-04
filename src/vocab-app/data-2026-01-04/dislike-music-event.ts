import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const dislikeMusicEvent: SubTopic = {
    id: '2026-01-04-p2-dislike-music-event',
    title: 'Dislike music event',
    type: '事件题',
    color: 'purple',
    section: 'Part 2 & 3',
    seasons: ['2026年 1-4月', '2026年1-4月'],
    words: [
        {
            word: 'performance',
            phonetic: '/pərˈfɔːrməns/',
            definition: '表演；演出',
            example: 'The live performance was too loud for me.',
            emoji: '🎤',
            level: 'basic',
        },
        {
            word: 'unfortunately',
            phonetic: '/ʌnˈfɔːrtʃənətli/',
            definition: '不幸的是',
            example: 'Unfortunately, the music was not my style.',
            emoji: '😕',
            level: 'basic',
        },
        {
            word: 'taste',
            phonetic: '/teɪst/',
            definition: '品味；喜好',
            example: 'Everyone has different taste in music.',
            emoji: '🎧',
            level: 'basic',
        },
        {
            word: 'heavy metal',
            phonetic: '/ˌhevi ˈmetl/',
            definition: '重金属（音乐）',
            example: 'I don’t enjoy heavy metal because it sounds too noisy to me.',
            emoji: '🤘',
            level: 'basic',
        },
        ...getManyFromPool(['atmosphere', 'experience', 'enjoyable'], 'basic'),
    ],
};

