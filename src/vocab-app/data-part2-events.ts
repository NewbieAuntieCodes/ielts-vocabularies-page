import { SubTopic } from './data-types';
import { getManyFromPool } from './pool/utils';

export const p2Events: SubTopic = {
    id: 'p2-events',
    title: 'Events 事件类',
    type: '四大题型',
    color: 'blue',
    section: 'Part 2 & 3',
    wordSections: [
        {
            title: '1. 聚会与庆祝 (Gatherings & Celebrations)',
            words: [
                ...getManyFromPool([
                    'party',
                    'get together',
                    'social gathering',
                    'gathering',
                    'birthday party',
                    'celebrate',
                    'reunion',
                    'occasion',
                    'house party',
                    'theme party',
                ], 'basic'),
                ...getManyFromPool([
                    'housewarming party',
                    'no-host party',
                    'throw a party',
                    'baby shower',
                    'assembly',
                    'rally',
                    'party animal',
                    'stag party',
                    'potluck',
                ], 'advanced'),
            ],
        },
        {
            title: '2. 学业与人生节点 (Education & Milestones)',
            words: [
                ...getManyFromPool(['degree', 'graduate'], 'basic'),
                ...getManyFromPool(['diploma', 'milestone'], 'advanced'),
            ],
        },
        {
            title: '3. 旅行与旅游 (Travel & Tourism)',
            words: [
                ...getManyFromPool([
                    'travel',
                    'sightseeing',
                    'tourist',
                    'tourist spot',
                    'tourist destination country',
                    'domestic tourism',
                    'independent travel',
                    'self-driving tour',
                    'rush hour',
                    'travelling expense',
                    'natural landscape',
                    'guide',
                    'souvenir',
                ], 'basic'),
                ...getManyFromPool([
                    'package tour',
                    'self-guided tour',
                    'peak travel time',
                    'outbound tourism',
                    'specialty',
                    'cultural relic',
                    'overwhelming',
                ], 'advanced'),
            ],
        },
        {
            title: '4. 住宿与房型 (Accommodation & Room Types)',
            words: [
                ...getManyFromPool([
                    'hotel',
                    'budget hotel',
                    'big single room',
                    'single room',
                    'double room',
                    'twin room',
                    'triple room',
                    'economy room (ER)',
                    'standard room (SR)',
                ], 'basic'),
                ...getManyFromPool([
                    'economy hotel (one-star hotel)',
                    'some comfort hotel (two-star hotel)',
                    'average hotel (three-star hotel)',
                    'high comfort hotel (four-star hotel)',
                    'deluxe hotel (five-star hotel)',
                    'superior room (UR)',
                    'deluxe room (DR)',
                    'standard suite (SS)',
                    'presidential suite (PS)',
                    'hostel',
                    'inn',
                    'lodge',
                    'motel (=motor hotel)',
                    'caravansary',
                    'tavern',
                ], 'advanced'),
            ],
        },
        {
            title: '5. 描述与表达 (Descriptions & Expressions)',
            words: [
                ...getManyFromPool([
                    'memorable',
                    'move',
                    'recall',
                    'kill the time',
                    'novel',
                ], 'basic'),
                ...getManyFromPool([
                    'leisure activity',
                    'physical activity',
                    'insomnia',
                    'drain',
                ], 'advanced'),
            ],
        },
        {
            title: '6. 行政机构 (Tourism Administration)',
            words: [
                ...getManyFromPool([
                    'tourist organization',
                    'World Tourism Organization',
                ], 'basic'),
                ...getManyFromPool([
                    'World Tourism Day',
                    'Tourist Administration',
                    'Autonomous Prefecture Tourism Administration',
                    'Autonomous Region Tourism Administration',
                    'County Tourism Administration',
                    'Municipal Tourism Administration',
                    'Provincial Tourism Administration',
                ], 'advanced'),
            ],
        },
        {
            title: '7. 旅游业与职业 (Tourism Industry & Careers)',
            words: [
                ...getManyFromPool([
                    'travel agent',
                    'travel business',
                    'travel industry',
                ], 'basic'),
                ...getManyFromPool([
                    'travel expert',
                    'travel journalist',
                ], 'advanced'),
            ],
        },
    ],
};
