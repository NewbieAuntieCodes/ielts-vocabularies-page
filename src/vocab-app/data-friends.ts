import { SubTopic } from './data-types';
import { getManyFromPool } from './pool/utils';

export const friends: SubTopic = {
    id: 'friends',
    title: 'Friends & Sharing',
    type: '人物题',
    color: 'yellow',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'get along with',
                'teammate',
                'close friend',
                'talkative',
                'easy-going',
                'caring',
                'topics',
                'trust',
                'hang out',
                'lend',
                'borrow',
                'personal',
                'information',
                'ID card',
                'bank account'
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'sociable',
                'loyal',
                'trustworthy',
                'supportive',
                'reliable',
                'generous',
                'thoughtful',
                'mutual',
                'contribute',
                'cooperate'
            ], 'advanced')
        }
    ]
};
