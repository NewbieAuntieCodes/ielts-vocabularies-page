import { IeltsTopic, SubTopic } from './data-types';
import { museum } from './data-museum';
import { getManyFromPool } from './pool/utils';

const cityAndCrowdedPlace: SubTopic = {
    id: 'city-crowded-place',
    title: 'City & Crowded place',
    type: '地点题',
    color: 'green',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'crowded',
                'packed',
                'busy',
                'noisy',
                'lively',
                'a crowd of people',
                'skyscraper',
                'skyline',
                'urban',
                'downtown',
                'suburb',
                'traffic',
                'subway',
                'landmark',
                'resident',
                'pollution'
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'bustling',
                'vibrant',
                'hustle and bustle',
                'overwhelming',
                'teeming with',
                'congested',
                'infrastructure',
                'metropolis',
                'cosmopolitan',
                'urbanization',
                'megacity'
            ], 'advanced')
        }
    ],
};

const publicPlaces: SubTopic = {
    id: 'public-places',
    title: 'Public places',
    type: '地点题',
    color: 'green',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'amenities',
                'accessible',
                'community',
                'recreational',
                'green spaces',
                'park',
                'library',
                'square',
                'public transport'
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'civic',
                'venue',
                'pedestrian area',
                'well-maintained',
                'public realm'
            ], 'advanced')
        }
    ]
};

export const placesTopic: IeltsTopic = {
    title: '话题: 地点',
    section: 'Part 1',
    subTopics: [
      museum,
      cityAndCrowdedPlace,
      publicPlaces,
    ],
};