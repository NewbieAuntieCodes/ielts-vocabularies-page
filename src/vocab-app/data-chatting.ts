import { SubTopic } from './data-types';
import { getManyFromPool } from './pool/utils';

export const chatting: SubTopic = {
    id: 'chatting',
    title: 'Chatting',
    type: '事件题',
    color: 'blue',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'conversation',
                'small talk',
                'catch up',
                'stay in touch',
                'lively',
                'school stuff',
                'private',
                'face-to-face',
                'social media',
                'text messages',
                'video call',
                'argue',
                'misunderstand',
                'misunderstanding',
                'make up',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'converse',
                'engage in',
                'express emotions',
                'respect each other',
            ], 'advanced'),
        },
    ],
};