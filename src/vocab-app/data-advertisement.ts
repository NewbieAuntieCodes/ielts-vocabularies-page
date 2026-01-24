import { SubTopic } from './data-types';
import { getManyFromPool } from './pool/utils';

export const advertisement: SubTopic = {
    id: 'advertisement',
    title: 'Advertisement',
    type: '事物题',
    color: 'purple',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'commercial',
                'brand',
                'product',
                'service',
                'customer',
                'billboard',
                'poster',
                'online ads',
                'pop-up ad',
                'slogan',
                'annoying',
                'promote',
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'persuasive',
                'target audience',
                'consumer',
                'eye-catching',
                'misleading',
                'draw attention',
                'brand awareness',
                'celebrity endorsement',
                'marketing strategy',
                'consumer behavior',
                'campaign',
            ], 'advanced')
        }
    ]
};
