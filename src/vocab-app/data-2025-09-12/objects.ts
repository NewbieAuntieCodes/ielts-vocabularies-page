import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

const SEASON = '2025年 9-12月';

export const advertisement: SubTopic = {
    id: 'advertisement',
    title: 'Advertisement',
    type: '事物题',
    color: 'purple',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'commercial', 'brand', 'product', 'service', 'customer',
                'billboard', 'poster', 'online ads', 'pop-up ad', 'slogan',
                'annoying', 'promote',
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'persuasive', 'target audience', 'consumer', 'eye-catching',
                'misleading', 'draw attention', 'brand awareness',
                'celebrity endorsement', 'marketing strategy',
                'consumer behavior', 'campaign',
            ], 'advanced')
        }
    ]
};

export const rules: SubTopic = {
    id: 'rules',
    title: 'Rules',
    type: '事物题',
    color: 'purple',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'allowed', 'benefit', 'follow the rules', 'break the rules',
                'respect', 'fewer', 'enough', 'traffic rules', 'public rules',
                'no littering', 'reasonable', 'annoying', 'strict',
                'school discipline', 'behave well', 'misbehave',
                'wear school uniform', 'no phones in class', 'warning',
                'punishment', 'get into trouble', 'fair', 'unfair',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'focus', 'practice', 'required', 'rule-free', 'self-discipline',
                'regulation', 'policy', 'comply with', 'enforce',
                'dedicated', 'detention',
            ], 'advanced'),
        },
    ],
};

export const shoes: SubTopic = {
    id: 'shoes',
    title: 'Shoes',
    type: '事物题',
    color: 'purple',
    seasons: [SEASON],
    wordSections: [
        {
            title: '1. 鞋子种类 (Shoe Types)',
            words: getManyFromPool([
                'sneakers / trainers', 'sports shoes', 'high heels', 'mid heel',
                'low heel', 'boots', 'high boots', 'short boots', 'sandals',
                'slippers', 'flip-flops', 'canvas shoes', 'open-toed',
                'almond shaped toe', 'footwear',
            ], 'basic')
        },
        {
            title: '2. 描述与形容 (Descriptions)',
            words: getManyFromPool([
                'fashionable', 'affordable', 'brand', 'stylish', 'size chart',
                'durable', 'versatile', 'breathable', 'waterproof',
            ], 'advanced')
        },
        {
            title: '3. 地道表达与词组 (Expressions)',
            words: getManyFromPool([
                'try on shoes', 'fit well', 'on sale', 'discount',
                'return / exchange', 'latest trend', 'worth the money',
                'break in', 'wear and tear', 'scuff marks',
            ], 'advanced')
        }
    ]
};
