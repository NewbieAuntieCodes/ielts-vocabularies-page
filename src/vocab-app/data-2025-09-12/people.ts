import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

const SEASON = '2025年 9-12月';

export const friends: SubTopic = {
    id: 'friends',
    title: 'Friends & Sharing',
    type: '人物题',
    color: 'yellow',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'get along with', 'teammate', 'close friend', 'talkative', 'easy-going',
                'caring', 'topics', 'trust', 'hang out', 'lend', 'borrow', 'personal',
                'information', 'ID card', 'bank account'
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'sociable', 'loyal', 'trustworthy', 'supportive', 'reliable',
                'generous', 'thoughtful', 'mutual', 'contribute', 'cooperate'
            ], 'advanced')
        }
    ]
};

export const oldPeople: SubTopic = {
    id: 'old-people',
    title: 'Staying with old people',
    type: '事件题',
    color: 'blue',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'respectful',
                'patient',
                'wisdom',
                'gentle',
                'thoughtful',
                'wise',
                'keep them company',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'generation gap',
                'companionship',
                'caretakers',
                'caregivers',
                'rewarding',
                'accompany',
            ], 'advanced'),
        },
    ],
};

export const chatting: SubTopic = {
    id: 'chatting',
    title: 'Chatting',
    type: '事件题',
    color: 'blue',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'conversation', 'small talk', 'catch up', 'stay in touch', 'lively',
                'school stuff', 'private', 'face-to-face', 'social media', 'text messages',
                'video call', 'argue', 'misunderstand', 'misunderstanding', 'make up',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'converse', 'engage in', 'express emotions', 'respect each other',
            ], 'advanced'),
        },
    ],
};

export const goingOut: SubTopic = {
    id: 'going-out',
    title: 'Going Out',
    type: '事件题',
    color: 'yellow',
    isNew: true,
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'meet up', 'hang out', 'gathering', 'get-together', 'celebrate',
                'occasion', 'go for a walk', 'hang out with friends', 'daily life',
                'snacks', 'pack some food', 'bottled water', 'homemade food',
                'just in case', 'mobile phone / cellphone', 'take my phone with me',
                'mobile payment', 'check messages', 'cash', 'rarely use cash',
                'only for small shops', 'credit card', 'just a habit',
                'depends on the situation',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'socialize', 'venue', 'atmosphere', 'lively', 'nightlife',
                'entertainment', 'book a table', 'reservation', 'go for a drink',
                'energy bar', 'cannot live without my phone', 'navigation app',
                'stay connected', 'e-wallet', 'qr code',
            ], 'advanced')
        }
    ]
};
