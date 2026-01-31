import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const doingWell: SubTopic = {
    id: 'doing-well',
    title: 'Doing something well',
    type: '事件题',
    color: 'blue',
    isNew: true,
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'champion',
                'praise',
                'excel',
                'expert',
                'achieve',
                'succeed',
                'practice',
                'proud',
                'improve',
                'good at',
                'talented',
                'hard-working',
                'smart',
                'clever',
                'learn',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'accomplishment',
                'outstanding',
                'proficient',
                'skillful',
                'experience',
            ], 'advanced'),
        },
    ],
};
