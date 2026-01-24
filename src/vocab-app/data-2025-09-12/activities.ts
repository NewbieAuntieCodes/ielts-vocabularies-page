import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

const SEASON = '2025年 9-12月';

export const sharing: SubTopic = {
    id: 'sharing',
    title: 'Sharing',
    type: '事件题',
    color: 'blue',
    seasons: [SEASON],
    words: getManyFromPool(['generous', 'mutual', 'contribute', 'cooperate']),
};

export const breakTopic: SubTopic = {
    id: 'break',
    title: 'Having a break',
    type: '事件题',
    color: 'blue',
    seasons: [SEASON],
    words: getManyFromPool([
      'unwind', 'recharge', 'leisure', 'have a rest', 'take it easy',
      'chill', 'refresh', 'take a nap', 'peaceful', 'relax', 'rest',
      'calm', 'hobby'
    ]),
};

export const borrowing: SubTopic = {
    id: 'borrowing',
    title: 'Borrowing/lending',
    type: '事件题',
    color: 'blue',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'lend',
                'borrow',
                'return',
                'keep',
                'give back',
                'due date',
                'library card',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'responsible', 'overdue', 'fine', 'loan', 'owe', 'permission',
                'trustworthy', 'in good condition', 'damage', 'replace',
            ], 'advanced'),
        },
    ],
};

export const gardening: SubTopic = {
    id: 'gardening',
    title: 'Plants',
    type: '事件题',
    color: 'blue',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
              'farm', 'backyard', 'soil', 'seeds', 'water', 'sunlight',
              'fresh air', 'plant seeds', 'water the plants', 'root', 'stem',
              'petal', 'blossom', 'bloom', 'potted plant', 'houseplants',
              'indoor plants', 'green plants', 'flower shop', 'school garden',
              'grow beans', 'grow flowers',
              'observe the growth', 'wait for it to sprout',
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
              'cultivate', 'harvest', 'organic', 'horticulture', 'botany', 'fragrance',
              'popular', 'take care of', 'home-grown', 'relaxing', 'enjoyable',
              'interesting', 'rewarding', 'meaningful', 'close to nature',
              'healthy lifestyle', 'take time and effort', 'space',
              'easy to grow', 'hands-on experience', 'environmental education',
              'learn responsibility', 'teamwork', 'keep plants at home',
              'decorate the room', 'make the room feel alive',
              'give enough sunlight', 'school gardening class',
              'take time to grow', 'symbol of good luck', 'special occasions',
              'housewarming gift', 'meaningful gift', 'peaceful', 'refreshing',
              'pleasant'
            ], 'advanced')
        }
    ],
};

export const doingWell: SubTopic = {
    id: 'doing-well',
    title: 'Doing something well',
    type: '事件题',
    color: 'blue',
    seasons: [SEASON],
    isNew: true,
    words: getManyFromPool([
      'champion', 'praise', 'accomplishment', 'excel', 'outstanding',
      'proficient', 'skillful', 'expert', 'achieve', 'succeed',
      'practice', 'proud', 'improve', 'good at', 'talented',
      'hard-working', 'smart', 'clever', 'experience', 'learn',
    ]),
};
