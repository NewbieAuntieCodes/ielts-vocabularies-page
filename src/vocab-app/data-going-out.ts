import { SubTopic } from './data-types';
import { getManyFromPool } from './pool/utils';

export const goingOut: SubTopic = {
    id: 'going-out',
    title: 'Going Out',
    type: '事件题',
    color: 'yellow',
    isNew: true,
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'meet up',
                'hang out',
                'gathering',
                'get-together',
                'celebrate',
                'occasion',
                'go for a walk',
                'hang out with friends',
                'daily life',
                'snacks',
                'pack some food',
                'bottled water',
                'homemade food',
                'just in case',
                'mobile phone / cellphone',
                'take my phone with me',
                'mobile payment',
                'check messages',
                'cash',
                'rarely use cash',
                'only for small shops',
                'credit card',
                'just a habit',
                'depends on the situation',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'socialize',
                'venue',
                'atmosphere',
                'lively',
                'nightlife',
                'entertainment',
                'book a table',
                'reservation',
                'go for a drink',
                'energy bar',
                'cannot live without my phone',
                'navigation app',
                'stay connected',
                'e-wallet',
                'qr code',
            ], 'advanced')
        }
    ]
};
