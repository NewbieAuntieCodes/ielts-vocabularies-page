import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const celebrity: SubTopic = {
    id: '2026-01-04-p2-famous-person-meet',
    title: 'Celebrity',
    type: '人物题',
    color: 'yellow',
    section: 'Part 2 & 3',
    seasons: ['2026年 1-4月', '2026年1-4月'],
    words: [
        ...getManyFromPool(['atmosphere', 'calm', 'personality', 'admire', 'peaceful'], 'basic'),
        {
            word: 'concert',
            phonetic: '/ˈkɑːnsərt/',
            definition: 'n. 演唱会；音乐会',
            example: 'I went to a concert last year and the atmosphere was amazing.',
            emoji: '🎵',
            level: 'basic',
        },
        {
            word: 'lyrics',
            phonetic: '/ˈlɪrɪks/',
            definition: 'n. 歌词',
            example: 'I like this song because the lyrics are meaningful.',
            emoji: '📝',
            level: 'basic',
        },
        {
            word: 'amazing',
            phonetic: '/əˈmeɪzɪŋ/',
            definition: 'adj. 令人惊叹的；很棒的',
            example: 'It was an amazing performance.',
            emoji: '✨',
            level: 'basic',
        },
        {
            word: 'melody',
            phonetic: '/ˈmelədi/',
            definition: 'n. 旋律',
            example: 'The melody is catchy and easy to remember.',
            emoji: '🎶',
            level: 'basic',
        },
        {
            word: 'happiest moment',
            phonetic: '/ˈhæpiəst ˈmoʊmənt/',
            definition: '最开心的时刻',
            example: 'Meeting my idol was one of the happiest moments of my life.',
            emoji: '🥳',
            level: 'basic',
        },
        {
            word: 'charity',
            phonetic: '/ˈtʃærəti/',
            definition: 'n. 慈善；慈善机构',
            example: 'She often donates money to charity.',
            emoji: '🤝',
            level: 'basic',
        },
        {
            word: 'positive energy',
            phonetic: '/ˈpɑːzətɪv ˈenərdʒi/',
            definition: '正能量',
            example: 'He always brings positive energy to people around him.',
            emoji: '🌞',
            level: 'basic',
        },
    ],
};

