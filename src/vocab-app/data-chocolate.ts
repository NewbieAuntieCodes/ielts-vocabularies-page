import { SubTopic } from './data-types';

export const chocolate: SubTopic = {
    id: 'chocolate',
    title: 'Chocolate 巧克力',
    type: '事物题',
    color: 'green',
    wordSections: [
        {
            title: '1. 巧克力种类 (Chocolate Types)',
            words: [
                // 基础 (Basic)
                { word: 'dark chocolate', level: 'basic', phonetic: '/dɑːrk ˈtʃɑːklət/', definition: '黑巧克力', example: 'Dark chocolate is known for its intense cocoa flavor.', emoji: '🍫' },
                { word: 'milk chocolate', level: 'basic', phonetic: '/mɪlk ˈtʃɑːklət/', definition: '牛奶巧克力', example: 'Milk chocolate is much sweeter and creamier than dark chocolate.', emoji: '🍫' },
                { word: 'white chocolate', level: 'basic', phonetic: '/waɪt ˈtʃɑːklət/', definition: '白巧克力', example: 'White chocolate doesn\'t actually contain cocoa solids.', emoji: '🤍' },
                { word: 'hot chocolate', level: 'basic', phonetic: '/hɑːt ˈtʃɑːklət/', definition: '热巧克力', example: 'I love drinking hot chocolate on a cold winter day.', emoji: '☕' },
                { word: 'nut chocolate', level: 'basic', phonetic: '/nʌt ˈtʃɑːklət/', definition: '果仁巧克力', example: 'Nut chocolate provides a nice crunch in every bite.', emoji: '🥜' },
                // 进阶 (Advanced)
                { word: 'cocoa bean', level: 'advanced', phonetic: '/ˈkoʊkoʊ biːn/', definition: '可可豆', example: 'Chocolate is made from fermented and roasted cocoa beans.', emoji: '🌰' },
                { word: 'mint chocolate', level: 'advanced', phonetic: '/mɪnt ˈtʃɑːklət/', definition: '薄荷巧克力', example: 'The combination of mint and chocolate is very refreshing.', emoji: '🌿' },
                { word: 'plain chocolate', level: 'advanced', phonetic: '/pleɪn ˈtʃɑːklət/', definition: '纯巧克力', example: 'Some people prefer plain chocolate without any added flavors.', emoji: '🍫' },
                { word: 'liqueur chocolate', level: 'advanced', phonetic: '/lɪˈkɜːr ˈtʃɑːklət/', definition: '酒心巧克力', example: 'Liqueur chocolate is a popular gift for adults.', emoji: '🍾' },
                { word: 'cereal chocolate', level: 'advanced', phonetic: '/ˈsɪriəl ˈtʃɑːklət/', definition: '谷物巧克力', example: 'Cereal chocolate has a unique, crispy texture.', emoji: '🥣' },
            ]
        },
        {
            title: '2. 描述与口感 (Adjectives & Texture)',
            words: [
                // 基础 (Basic)
                { word: 'sweetness', level: 'basic', phonetic: '/ˈswiːtnəs/', definition: '甜味', example: 'The sweetness of the chocolate balances the bitterness of the coffee.', emoji: '🍭' },
                { word: 'texture', level: 'basic', phonetic: '/ˈtekstʃər/', definition: '口感', example: 'The chocolate has a smooth and velvety texture.', emoji: '👅' },
                { word: 'creamy', level: 'basic', phonetic: '/ˈkriːmi/', definition: '像奶油的；光滑细腻的', example: 'This milk chocolate is incredibly creamy.', emoji: '🥛' },
                // 进阶 (Advanced)
                { word: 'silky', level: 'advanced', phonetic: '/ˈsɪlki/', definition: '(食物) 口感滑滑的', example: 'The ganache was silky and melted in my mouth.', emoji: '✨' },
                { word: 'glossy', level: 'advanced', phonetic: '/ˈɡlɒsi/', definition: '光滑的有光泽的', example: 'High-quality chocolate should have a glossy finish.', emoji: '💎' },
                { word: 'refreshing', level: 'advanced', phonetic: '/rɪˈfreʃɪŋ/', definition: '使人精力充沛的', example: 'A piece of dark chocolate can be quite refreshing during a break.', emoji: '⚡' },
                { word: 'intriguing', level: 'advanced', phonetic: '/ɪnˈtriːɡɪŋ/', definition: '引人入胜的；有趣的', example: 'The combination of chili and chocolate is quite intriguing.', emoji: '🤔' },
            ]
        },
        {
            title: '3. 词组与益处 (Phrases & Benefits)',
            words: [
                // 基础 (Basic)
                { word: 'melt', level: 'basic', phonetic: '/melt/', definition: '融化', example: 'Chocolate starts to melt at body temperature.', emoji: '🫠' },
                { word: 'decrease stress', level: 'basic', phonetic: '/dɪˈkriːs stres/', definition: '减少压力', example: 'Many people eat chocolate to help decrease stress.', emoji: '🧘' },
                { word: 'lower blood pressure', level: 'basic', phonetic: '/ˈloʊər blʌd ˈpreʃər/', definition: '降低血压', example: 'Studies suggest that dark chocolate may help lower blood pressure.', emoji: '❤️' },
                // 进阶 (Advanced)
                { word: 'dopamine', level: 'advanced', phonetic: '/ˈdoʊpəmiːn/', definition: '多巴胺', example: 'Eating chocolate can trigger the release of dopamine in the brain.', emoji: '🧠' },
                { word: 'crave for', level: 'advanced', phonetic: '/kreɪv fɔːr/', definition: '渴望；迫切需要', example: 'Sometimes I really crave for something sweet after dinner.', emoji: '🤤' },
                { word: 'antioxidant', level: 'advanced', phonetic: '/ˌæntiˈɒksɪdənt/', definition: '抗氧化剂', example: 'Dark chocolate is rich in antioxidants that are good for your heart.', emoji: '🛡️' },
            ]
        }
    ]
};
