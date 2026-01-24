
import { SubTopic } from './data-types';

export const areaYouLiveIn: SubTopic = {
    id: 'p1-area-live-in',
    title: 'The area you live in',
    type: '基础题',
    color: 'purple',
    section: 'Part 1',
    wordSections: [
        {
            title: '社区概况',
            words: [
                { word: 'residential', level: 'basic', phonetic: '/ˌrezɪˈdenʃl/', definition: '住宅区的', example: 'I live in a quiet residential area.', emoji: '🏘️' },
                { word: 'convenient', level: 'basic', phonetic: '/kənˈviːniənt/', definition: '方便的', example: 'The area is very convenient for shopping.', emoji: '🛒' },
                { word: 'surroundings', level: 'basic', phonetic: '/səˈraʊndɪŋz/', definition: '周边环境', example: 'The natural surroundings are quite beautiful.', emoji: '🌳' },
                { word: 'lively', level: 'basic', phonetic: '/ˈlaɪvli/', definition: '热闹的', example: 'The area becomes quite lively at night.', emoji: '✨' },
            ]
        },
        {
            title: '交通与设施',
            words: [
                { word: 'public transport', level: 'basic', phonetic: '/ˈpʌblɪk ˈtrænspɔːrt/', definition: '公共交通', example: 'The area has excellent public transport links.', emoji: '🚌' },
                { word: 'within walking distance', level: 'advanced', phonetic: '/wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/', definition: '在步行距离内', example: 'The supermarket is within walking distance.', emoji: '🚶' },
                { word: 'greenery', level: 'advanced', phonetic: '/ˈɡriːnəri/', definition: '绿色植物/绿化', example: 'There is a lot of greenery in our neighborhood.', emoji: '🌿' },
                { word: 'vibrant', level: 'advanced', phonetic: '/ˈvaɪbrənt/', definition: '充满活力的', example: 'It is a vibrant community with many young people.', emoji: '🔥' },
                { word: 'isolated', level: 'advanced', phonetic: '/ˈaɪsəleɪtɪd/', definition: '偏僻的', example: 'The area is a bit isolated from the city center.', emoji: '📍' },
            ]
        }
    ]
};
