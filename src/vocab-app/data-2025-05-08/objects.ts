import { SubTopic } from '../data-types';

const SEASON = '2025年 5-8月';

export const chocolate: SubTopic = {
    id: 'chocolate',
    title: 'Chocolate',
    type: '事物题',
    color: 'green',
    seasons: [SEASON],
    wordSections: [
        {
            title: '1. 巧克力种类',
            words: [
                { word: 'dark chocolate', level: 'basic', phonetic: '/dɑːrk ˈtʃɑːklət/', definition: '黑巧克力', example: 'Dark chocolate is known for its intense cocoa flavor.', emoji: '🍫' },
                { word: 'milk chocolate', level: 'basic', phonetic: '/mɪlk ˈtʃɑːklət/', definition: '牛奶巧克力', example: 'Milk chocolate is sweeter and creamier.', emoji: '🍫' },
                { word: 'white chocolate', level: 'basic', phonetic: '/waɪt ˈtʃɑːklət/', definition: '白巧克力', example: "White chocolate doesn't actually contain cocoa solids.", emoji: '🤍' },
                { word: 'hot chocolate', level: 'basic', phonetic: '/hɑːt ˈtʃɑːklət/', definition: '热巧克力', example: 'I love drinking hot chocolate on a cold winter day.', emoji: '☕' },
                { word: 'cocoa bean', level: 'advanced', phonetic: '/ˈkoʊkoʊ biːn/', definition: '可可豆', example: 'Chocolate is made from fermented and roasted cocoa beans.', emoji: '🌰' },
            ]
        },
        {
            title: '2. 描述与口感',
            words: [
                { word: 'texture', level: 'basic', phonetic: '/ˈtekstʃər/', definition: '口感', example: 'The chocolate has a smooth and velvety texture.', emoji: '👅' },
                { word: 'creamy', level: 'basic', phonetic: '/ˈkriːmi/', definition: '丝滑的', example: 'This milk chocolate is incredibly creamy.', emoji: '🥛' },
                { word: 'silky', level: 'advanced', phonetic: '/ˈsɪlki/', definition: '滑滑的', example: 'The ganache was silky and melted in my mouth.', emoji: '✨' },
                { word: 'dopamine', level: 'advanced', phonetic: '/ˈdoʊpəmiːn/', definition: '多巴胺', example: 'Eating chocolate can trigger the release of dopamine.', emoji: '🧠' },
            ]
        }
    ]
};

export const snacks: SubTopic = {
    id: 'snacks',
    title: 'Snacks',
    type: '事物题',
    color: 'green',
    seasons: [SEASON],
    wordSections: [
        {
            title: '1. 零食种类',
            words: [
                { word: 'biscuit', level: 'basic', phonetic: '/ˈbɪskɪt/', definition: '饼干', example: 'I like to have a biscuit with my tea.', emoji: '🍪' },
                { word: 'chip', level: 'basic', phonetic: '/tʃɪp/', definition: '炸薯条', example: 'A bag of potato chips is a common snack.', emoji: '🍟' },
                { word: 'nut', level: 'basic', phonetic: '/nʌt/', definition: '坚果', example: 'Nuts are a very healthy source of energy.', emoji: '🥜' },
                { word: 'energy bar', level: 'basic', phonetic: '/ˈenərdʒi bɑːr/', definition: '能量棒', example: 'I always keep an energy bar in my gym bag.', emoji: '🍫' },
                { word: 'beef jerky', level: 'advanced', phonetic: '/biːf ˈdʒɜːrki/', definition: '牛肉干', example: 'Beef jerky is high in protein.', emoji: '🥩' },
            ]
        },
        {
            title: '2. 健康与习惯',
            words: [
                { word: 'boost energy', level: 'basic', phonetic: '/buːst ˈenərdʒi/', definition: '提升能量', example: 'A quick snack can help boost energy in the afternoon.', emoji: '⚡' },
                { word: 'prevent overeating', level: 'basic', phonetic: '/prɪˈvent ˌoʊvərˈiːtɪŋ/', definition: '防止暴饮暴食', example: 'Having small snacks can prevent overeating during dinner.', emoji: '🚫' },
                { word: 'metabolism', level: 'advanced', phonetic: '/məˈtæbəlɪzəm/', definition: '新陈代谢', example: 'Regular exercise can help speed up your metabolism.', emoji: '🔥' },
            ]
        }
    ]
};

export const socialMedia: SubTopic = {
    id: 'social-media',
    title: 'Social Media',
    type: '事物题',
    color: 'purple',
    seasons: [SEASON],
    wordSections: [
        {
            title: '1. 核心操作',
            words: [
                { word: 'follow', level: 'basic', phonetic: '/ˈlɒk/', definition: '关注', example: "Don't forget to follow me for more updates.", emoji: '➕' },
                { word: 'post', level: 'basic', phonetic: '/poʊst/', definition: '发布帖子', example: 'I just shared a new post on Instagram.', emoji: '📮' },
                { word: 'share', level: 'basic', phonetic: '/ʃer/', definition: '分享', example: 'Sharing good news with friends makes me happy.', emoji: '📤' },
                { word: 'swipe', level: 'advanced', phonetic: '/swaɪp/', definition: '滑屏', example: 'Just swipe left to see the next photo.', emoji: '↔️' },
                { word: 'scroll', level: 'advanced', phonetic: '/skroʊl/', definition: '滚动屏幕', example: 'I spent too much time scrolling through my feed.', emoji: '↕️' },
            ]
        },
        {
            title: '2. 现象描述',
            words: [
                { word: 'influencer', level: 'basic', phonetic: '/ˈɪnfluənsər/', definition: '网红', example: 'Many brands collaborate with influencers.', emoji: '🌟' },
                { word: 'addicted', level: 'basic', phonetic: '/əˈdɪktɪd/', definition: '上瘾的', example: 'Many people are addicted to their phones.', emoji: '😵' },
                { word: 'viral', level: 'advanced', phonetic: '/ˈvaɪrəl/', definition: '病毒式传播', example: 'His funny cat video went viral overnight.', emoji: '🔥' },
            ]
        }
    ]
};
