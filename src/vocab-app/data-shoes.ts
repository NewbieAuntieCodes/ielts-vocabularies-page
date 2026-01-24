import { SubTopic } from './data-types';
import { getManyFromPool } from './pool/utils';

export const shoes: SubTopic = {
    id: 'shoes',
    title: 'Shoes',
    type: '事物题',
    color: 'purple',
    wordSections: [
        {
            title: '1. 鞋子种类 (Shoe Types)',
            words: getManyFromPool([
                'sneakers / trainers',
                'sports shoes',
                'high heels',
                'mid heel',
                'low heel',
                'boots',
                'high boots',
                'short boots',
                'sandals',
                'slippers',
                'flip-flops',
                'canvas shoes',
                'open-toed',
                'almond shaped toe',
                'footwear',
            ], 'basic')
        },
        {
            title: '2. 描述与形容 (Descriptions)',
            words: getManyFromPool([
                'fashionable',
                'affordable',
                'brand',
                'stylish',
                'size chart',
                'durable',
                'versatile',
                'breathable',
                'waterproof',
            ], 'advanced')
        },
        {
            title: '3. 地道表达与词组 (Expressions)',
            words: getManyFromPool([
                'try on shoes',
                'fit well',
                'on sale',
                'discount',
                'return / exchange',
                'latest trend',
                'worth the money',
                'break in',
                'wear and tear',
                'scuff marks',
            ], 'advanced')
        }
    ]
};