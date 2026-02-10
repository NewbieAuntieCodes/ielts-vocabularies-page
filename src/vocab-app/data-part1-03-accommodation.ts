
import { SubTopic } from './data-types';

export const accommodation: SubTopic = {
    id: 'p1-accommodation',
    title: 'Accommodation',
    type: '基础题',
    color: 'yellow',
    section: 'Part 1',
    wordSections: [
        {
            title: '住所类型',
            words: [
                { word: 'apartment', level: 'basic', phonetic: '/əˈpɑːrtmənt/', definition: '公寓', example: 'I live in a small apartment in the city center.', emoji: '🏢' },
                { word: 'flat', level: 'basic', phonetic: '/flæt/', definition: '公寓（英式用法）', example: 'I rent a flat near my workplace.', emoji: '🏠' },
                { word: 'spacious', level: 'advanced', phonetic: '/ˈspeɪʃəs/', definition: '宽敞的', example: 'The living room is very bright and spacious.', emoji: '↔️' },
                { word: 'cozy', level: 'basic', phonetic: '/ˈkoʊzi/', definition: '舒适的', example: 'My bedroom is very cozy and warm.', emoji: '🛋️' },
                { word: 'well-decorated', level: 'advanced', phonetic: '/wel ˈdekəreɪtɪd/', definition: '装修精美的', example: 'Her flat is stylish and well-decorated.', emoji: '🖼️' },
            ]
        },
        {
            title: '居住环境',
            words: [
                { word: 'balcony', level: 'basic', phonetic: '/ˈbælkəni/', definition: '阳台', example: 'I enjoy having coffee on the balcony.', emoji: '🌅' },
                { word: 'views', level: 'basic', phonetic: '/vjuːz/', definition: '风景；景色；视野', example: 'The balcony offers great views of the city.', emoji: '👀' },
                { word: 'neighborhood', level: 'basic', phonetic: '/ˈneɪbərhʊd/', definition: '街区/邻里', example: 'It is a safe and quiet neighborhood.', emoji: '🏡' },
                { word: 'amenities', level: 'advanced', phonetic: '/əˈmiːnətiz/', definition: '生活设施', example: 'The building has great amenities like a gym and a pool.', emoji: '🏪' },
                { word: 'well-lit', level: 'advanced', phonetic: '/wel lɪt/', definition: '采光良好的', example: 'I prefer a well-lit room with large windows.', emoji: '☀️' },
                { word: 'cluttered', level: 'advanced', phonetic: '/ˈklʌtərd/', definition: '凌乱的', example: 'My desk is always cluttered with books.', emoji: '📦' },
                { word: 'tiring', level: 'basic', phonetic: '/ˈtaɪərɪŋ/', definition: '累人的；令人疲惫的', example: 'Moving house can be quite tiring.', emoji: '🥱' },
                { word: 'a bit', level: 'basic', phonetic: '/ə bɪt/', definition: '有点；一点点', example: 'The flat is a bit small, but it is cosy and clean.', emoji: '🤏' },
            ]
        }
    ]
};
