import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const interestingBuilding: SubTopic = {
    id: '2026-01-04-p2-interesting-building',
    title: 'Interesting building',
    type: '地点题',
    color: 'green',
    section: 'Part 2 & 3',
    seasons: ['2026年 1-4月', '2026年1-4月'],
    words: [
        {
            word: 'be located in',
            phonetic: '/bi loʊˈkeɪtɪd ɪn/',
            definition: '位于……',
            example: 'The building is located in the city centre, so it is easy to reach.',
            emoji: '📍',
            level: 'basic',
        },
        {
            word: 'whole city',
            phonetic: '/hoʊl ˈsɪti/',
            definition: '整个城市',
            example: 'From the top, you can see the whole city clearly.',
            emoji: '🏙️',
            level: 'basic',
        },
        ...getManyFromPool(['lively', 'landmark', 'entertainment'], 'basic'),
        {
            word: 'tourism',
            phonetic: '/ˈtʊrɪzəm/',
            definition: '旅游；旅游业',
            example: 'This landmark is important for local tourism.',
            emoji: '🧳',
            level: 'basic',
        },
        {
            word: 'relaxation',
            phonetic: '/ˌriːlækˈseɪʃn/',
            definition: '放松',
            example: 'For many people, visiting this place is a kind of relaxation.',
            emoji: '😌',
            level: 'basic',
        },
    ],
};

