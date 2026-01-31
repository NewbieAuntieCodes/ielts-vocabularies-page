import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const breakTopic: SubTopic = {
    id: 'break',
    title: 'Having a break',
    type: '事件题',
    color: 'blue',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'have a rest',
                'take it easy',
                'take a nap',
                'relax',
                'rest',
                'calm',
                'hobby',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'unwind',
                'recharge',
                'leisure',
                'chill',
                'refresh',
                'peaceful',
            ], 'advanced'),
        },
    ],
};
