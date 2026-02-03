import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const views: SubTopic = {
    id: '2026-01-04-p1-views',
    title: 'Views',
    type: '地点题',
    color: 'green',
    seasons: ['2026年 1-4月', '2026年1-4月'],
    words: [
        ...getManyFromPool(['urban'], 'basic'),
        {
            word: 'rural',
            phonetic: '/ˈrʊrəl/',
            definition: '农村的；乡村的',
            example: 'I prefer rural views because they help me relax.',
            emoji: '🌾',
            level: 'basic',
        },
        {
            word: 'own',
            phonetic: '/oʊn/',
            definition: '自己的',
            example: 'I prefer views in my own country.',
            emoji: '🏠',
            level: 'basic',
        },
        {
            word: 'unforgettable',
            phonetic: '/ˌʌnfərˈɡetəbl/',
            definition: '难忘的',
            example: 'It was an unforgettable view.',
            emoji: '💖',
            level: 'basic',
        },
        {
            word: 'scenery',
            phonetic: '/ˈsiːnəri/',
            definition: '风景；景色',
            example: 'The scenery was beautiful, especially at sunset.',
            emoji: '🌄',
            level: 'basic',
        },
        {
            word: 'scene',
            phonetic: '/siːn/',
            definition: '景象；场景',
            example: 'The night scene in the city centre is lively.',
            emoji: '🎬',
            level: 'basic',
        },
        {
            word: 'feel close to nature',
            phonetic: '/fiːl kloʊs tə ˈneɪtʃər/',
            definition: '感觉亲近自然',
            example: 'In rural areas, I feel close to nature.',
            emoji: '🌿',
            level: 'basic',
        },
        {
            word: 'refreshed',
            phonetic: '/rɪˈfreʃt/',
            definition: '精神焕发的；恢复精力的',
            example: 'After a walk in the park, I feel refreshed.',
            emoji: '😌',
            level: 'basic',
        },
    ],
};

