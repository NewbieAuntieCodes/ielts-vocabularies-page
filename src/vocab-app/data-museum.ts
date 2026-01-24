import { SubTopic } from './data-types';
import { getManyFromPool } from './pool/utils';

export const museum: SubTopic = {
    id: 'museum',
    title: 'Museum',
    type: '地点题',
    color: 'green',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'exhibition',
                'gallery',
                'artifact',
                'artwork',
                'collection',
                'display',
                'sculpture',
                'historical site',
                'educational'
            ], 'basic')
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'cultural heritage',
                'aesthetics',
                'restoration',
                'masterpiece',
                'abstract',
                'realism',
                'contemporary art',
                'archaeology',
                'preservation'
            ], 'advanced')
        }
    ],
};