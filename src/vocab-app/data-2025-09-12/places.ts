import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

const SEASON = '2025年 9-12月';

export const museum: SubTopic = {
    id: 'museum',
    title: 'Museum',
    type: '地点题',
    color: 'green',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'exhibition', 'gallery', 'artifact', 'artwork', 'collection',
                'display', 'sculpture', 'historical site', 'educational'
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'cultural heritage', 'aesthetics', 'restoration', 'masterpiece',
                'abstract', 'realism', 'contemporary art', 'archaeology', 'preservation'
            ], 'advanced')
        }
    ],
};

export const cityAndCrowdedPlace: SubTopic = {
    id: 'city-crowded-place',
    title: 'Crowded place',
    type: '地点题',
    color: 'green',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'crowded', 'packed', 'busy', 'noisy', 'lively', 'a crowd of people',
                'skyscraper', 'skyline', 'urban', 'downtown', 'suburb', 'traffic',
                'subway', 'landmark', 'resident', 'pollution'
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'bustling', 'vibrant', 'hustle and bustle', 'overwhelming',
                'teeming with', 'congested', 'infrastructure', 'metropolis',
                'cosmopolitan', 'urbanization', 'megacity'
            ], 'advanced')
        }
    ],
};

export const publicPlaces: SubTopic = {
    id: 'public-places',
    title: 'Public places',
    type: '地点题',
    color: 'green',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'amenities', 'accessible', 'community', 'recreational',
                'green spaces', 'park', 'library', 'square', 'public transport'
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'civic', 'venue', 'pedestrian area', 'well-maintained', 'public realm'
            ], 'advanced')
        }
    ]
};
