import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

const SEASON = '2025年 5-8月';

export const studyWork: SubTopic = {
    id: 'p1-study-work',
    title: 'Study or work',
    type: '基础题',
    color: 'blue',
    badge: '必考',
    seasons: [SEASON],
    wordSections: [
        {
            title: '学习类 (Study)',
            words: [
                ...getManyFromPool([
                    'major in',
                    'assignment',
                    'course',
                    'subject',
                    'score',
                    'university',
                    'major',
                    'freshman',
                    'sophomore',
                    'junior',
                    'senior',
                    'undergraduate',
                    'boarding school',
                    'elementary school',
                    'secondary school',
                    'optional course',
                ], 'basic'),
                ...getManyFromPool([
                    'curriculum',
                    'tutorial',
                    'overwhelming',
                    'postgraduate',
                    'graduate school',
                    'PhD student',
                    'college entrance exam',
                    'compulsory course',
                    'extracurricular activities',
                    'exam-oriented education',
                    'nine-year compulsory education',
                    'further study abroad',
                    'rote learning',
                    'straight-A student',
                ], 'advanced'),
            ]
        },
        {
            title: '工作类 (Work)',
            words: [
                ...getManyFromPool([
                    'occupation',
                    'colleague',
                    'coworker',
                    'workload',
                    'department',
                    'employee',
                    'employer',
                    'position',
                    'promotion',
                    'résumé',
                    'salary',
                    'decent',
                    'well-paid',
                    'well-paid job',
                    'business trip',
                    'in charge of',
                    'earn a living',
                ], 'basic'),
                ...getManyFromPool([
                    'rewarding',
                    'commute',
                    'promising',
                    'company culture',
                    'flexible working hours',
                    'bring home the bacon',
                    'give me a decent salary',
                    'pay me well',
                    'make one\'s bread',
                    'multinational corporation',
                ], 'advanced'),
            ]
        }
    ]
};

export const hometown: SubTopic = {
    id: 'p1-hometown',
    title: 'Hometown',
    type: '基础题',
    color: 'green',
    badge: '必考',
    seasons: [SEASON],
    wordSections: [
        {
            title: '基础描述',
            words: [
                { word: 'birthplace', level: 'basic', phonetic: '/ˈbɜːrθpleɪs/', definition: '出生地', example: 'Beijing is my birthplace and I grew up there.', emoji: '🏠' },
                { word: 'scenery', level: 'basic', phonetic: '/ˈsiːnəri/', definition: '风景', example: 'The scenery in my hometown is breathtaking.', emoji: '🏔️' },
                { word: 'residents', level: 'basic', phonetic: '/ˈrezɪdənts/', definition: '居民', example: 'The local residents are very friendly and welcoming.', emoji: '🧑‍🤝‍🧑' },
                { word: 'historical', level: 'basic', phonetic: '/hɪˈstɔːrɪkl/', definition: '历史悠久的', example: 'There are many historical buildings in the city center.', emoji: '🏛️' },
            ]
        },
        {
            title: '进阶描述',
            words: [
                { word: 'urbanization', level: 'advanced', phonetic: '/ˌɜːrbənaɪˈzeɪʃn/', definition: '城市化', example: 'The town has seen rapid urbanization in recent years.', emoji: '🏙️' },
                { word: 'pace of life', level: 'advanced', phonetic: '/peɪs əv laɪf/', definition: '生活节奏', example: 'I prefer the slow pace of life in my hometown.', emoji: '⏳' },
                { word: 'metropolis', level: 'advanced', phonetic: '/məˈtrɑːpəlɪs/', definition: '大都市', example: 'My hometown has transformed into a bustling metropolis.', emoji: '🌃' },
                { word: 'local delicacy', level: 'advanced', phonetic: '/ˈloʊkl ˈdelɪkəsi/', definition: '当地美食', example: 'You must try the local delicacy when you visit.', emoji: '🍲' },
                { word: 'sentimental value', level: 'advanced', phonetic: '/ˌsentɪˈmentl ˈvæljuː/', definition: '情感价值', example: 'This old park has great sentimental value to me.', emoji: '💖' },
            ]
        }
    ]
};

export const accommodation: SubTopic = {
    id: 'p1-accommodation',
    title: 'Accommodation',
    type: '基础题',
    color: 'yellow',
    badge: '必考',
    seasons: [SEASON],
    wordSections: [
        {
            title: '住所类型',
            words: [
                { word: 'apartment', level: 'basic', phonetic: '/əˈpɑːrtmənt/', definition: '公寓', example: 'I live in a small apartment in the city center.', emoji: '🏢' },
                { word: 'spacious', level: 'advanced', phonetic: '/ˈspeɪʃəs/', definition: '宽敞的', example: 'The living room is very bright and spacious.', emoji: '↔️' },
                { word: 'cozy', level: 'basic', phonetic: '/ˈkoʊzi/', definition: '舒适的', example: 'My bedroom is very cozy and warm.', emoji: '🛋️' },
                { word: 'well-decorated', level: 'advanced', phonetic: '/wel ˈdekəreɪtɪd/', definition: '装修精美的', example: 'Her flat is stylish and well-decorated.', emoji: '🖼️' },
            ]
        },
        {
            title: '居住环境',
            words: [
                { word: 'balcony', level: 'basic', phonetic: '/ˈbælkəni/', definition: '阳台', example: 'I enjoy having coffee on the balcony.', emoji: '🌅' },
                { word: 'neighborhood', level: 'basic', phonetic: '/ˈneɪbərhʊd/', definition: '街区/邻里', example: 'It is a safe and quiet neighborhood.', emoji: '🏡' },
                { word: 'amenities', level: 'advanced', phonetic: '/əˈmiːnətiz/', definition: '生活设施', example: 'The building has great amenities like a gym and a pool.', emoji: '🏪' },
                { word: 'well-lit', level: 'advanced', phonetic: '/wel lɪt/', definition: '采光良好的', example: 'I prefer a well-lit room with large windows.', emoji: '☀️' },
                { word: 'cluttered', level: 'advanced', phonetic: '/ˈklʌtərd/', definition: '凌乱的', example: 'My desk is always cluttered with books.', emoji: '📦' },
            ]
        }
    ]
};

export const areaYouLiveIn: SubTopic = {
    id: 'p1-area-live-in',
    title: 'The area you live in',
    type: '基础题',
    color: 'purple',
    badge: '必考',
    seasons: [SEASON],
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
