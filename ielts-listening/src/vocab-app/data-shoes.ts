
import { SubTopic } from './data-types';

export const shoes: SubTopic = {
    id: 'shoes',
    title: 'Shoes',
    type: '事物题',
    color: 'purple',
    wordSections: [
        {
            title: '1. 鞋子种类 (Shoe Types)',
            words: [
                // 基础词 (红色)
                { word: 'sneakers / trainers', level: 'basic', phonetic: '/ˈsniːkərz/', definition: '运动鞋', example: 'I bought a new pair of sneakers for running.', emoji: '👟' },
                { word: 'sports shoes', level: 'basic', phonetic: '/spɔːrts ʃuːz/', definition: '运动鞋', example: 'Sports shoes provide great support for feet.', emoji: '👟' },
                { word: 'high heels', level: 'basic', phonetic: '/haɪ hiːlz/', definition: '高跟鞋', example: 'She wore high heels to the dinner party.', emoji: '👠' },
                { word: 'mid heel', level: 'basic', phonetic: '/mɪd hiːl/', definition: '中跟', example: 'A mid heel offers style and comfort.', emoji: '👠' },
                { word: 'low heel', level: 'basic', phonetic: '/loʊ hiːl/', definition: '低跟', example: 'Low heel shoes are more practical.', emoji: '👠' },
                { word: 'boots', level: 'basic', phonetic: '/buːts/', definition: '靴子', example: 'I need a pair of durable boots for hiking.', emoji: '🥾' },
                { word: 'high boots', level: 'basic', phonetic: '/haɪ buːts/', definition: '高筒靴', example: 'High boots keep your legs warm during the winter.', emoji: '👢' },
                { word: 'short boots', level: 'basic', phonetic: '/ʃɔːrt buːts/', definition: '短靴', example: 'Short boots go perfectly with skinny jeans.', emoji: '🥾' },
                { word: 'sandals', level: 'basic', phonetic: '/ˈsændlz/', definition: '凉鞋', example: 'I wear sandals to the beach in the summer.', emoji: '👡' },
                { word: 'slippers', level: 'basic', phonetic: '/ˈslɪpərz/', definition: '拖鞋', example: 'I put on my warm slippers as soon as I get home.', emoji: '🏠' },
                // 进阶词 (蓝色)
                { word: 'flip-flops', level: 'advanced', phonetic: '/ˈflɪp flɒps/', definition: '人字拖', example: 'Flip-flops are perfect for a casual day at the pool.', emoji: '🩴' },
                { word: 'canvas shoes', level: 'advanced', phonetic: '/ˈkænvəs ʃuːz/', definition: '帆布鞋', example: 'Canvas shoes are lightweight and perfect for casual wear.', emoji: '👟' },
                { word: 'open-toed', level: 'advanced', phonetic: '/ˌoʊpən ˈtoʊd/', definition: '露趾的', example: 'Open-toed shoes are great for showing off a pedicure.', emoji: '👡' },
                { word: 'almond shaped toe', level: 'advanced', phonetic: '/ˈɑːmənd ʃeɪpt toʊ/', definition: '杏仁型（鞋头）', example: 'Almond shaped toe shoes look elegant.', emoji: '👞' },
                { word: 'footwear', level: 'advanced', phonetic: '/ˈfʊtwɛər/', definition: '鞋类(总称)', example: 'The store sells a wide range of footwear.', emoji: '👟' },
            ]
        },
        {
            title: '2. 描述与形容 (Descriptions)',
            words: [
                // 基础词 (红色)
                { word: 'fashionable', level: 'basic', phonetic: '/ˈfæʃənəbl/', definition: '时尚的', example: 'She always wears fashionable shoes.', emoji: '👠' },
                { word: 'affordable', level: 'basic', phonetic: '/əˈfɔːrdəbl/', definition: '负担得起的', example: 'Looking for affordable yet durable shoes.', emoji: '💰' },
                { word: 'brand', level: 'basic', phonetic: '/brænd/', definition: '品牌', example: 'What brand of running shoes do you recommend?', emoji: '🏷️' },
                { word: 'stylish', level: 'basic', phonetic: '/ˈstaɪlɪʃ/', definition: '时髦的', example: 'He bought a pair of stylish leather shoes.', emoji: '😎' },
                { word: 'size chart', level: 'basic', phonetic: '/saɪz tʃɑːrt/', definition: '尺码表', example: 'Check the size chart before ordering.', emoji: '📏' },
                // 进阶词 (蓝色)
                { word: 'durable', level: 'advanced', phonetic: '/ˈdʊrəbl/', definition: '耐用的', example: 'I need durable boots for hiking.', emoji: '💪' },
                { word: 'versatile', level: 'advanced', phonetic: '/ˈvɜːrsətl/', definition: '百搭的', example: 'I need versatile shoes for both work and casual.', emoji: '👖' },
                { word: 'breathable', level: 'advanced', phonetic: '/ˈbriːðəbl/', definition: '透气的', example: 'Running shoes should be breathable.', emoji: '🍃' },
                { word: 'waterproof', level: 'advanced', phonetic: '/ˈwɔːtərpruːf/', definition: '防水的', example: 'These boots are waterproof for rainy days.', emoji: '☔' },
            ]
        },
        {
            title: '3. 地道表达与词组 (Expressions)',
            words: [
                // 基础词 (红色)
                { word: 'try on shoes', level: 'basic', phonetic: '/traɪ ɒn/', definition: '试穿', example: 'Always try on shoes before buying.', emoji: '👣' },
                { word: 'fit well', level: 'basic', phonetic: '/fɪt wel/', definition: '合脚', example: 'These sneakers fit well.', emoji: '👍' },
                { word: 'on sale', level: 'basic', phonetic: '/ɒn seɪl/', definition: '打折', example: 'I bought them because they were on sale.', emoji: '🏷️' },
                { word: 'discount', level: 'basic', phonetic: '/ˈdɪskaʊnt/', definition: '折扣', example: 'Can I get a student discount?', emoji: '📉' },
                { word: 'return / exchange', level: 'basic', phonetic: '/rɪˈtɜːrn/', definition: '退/换', example: 'You can return them if they don\'t fit.', emoji: '🔄' },
                { word: 'latest trend', level: 'basic', phonetic: '/ˈleɪtɪst trend/', definition: '最新潮流', example: 'Keeping up with the latest trend.', emoji: '🔥' },
                { word: 'worth the money', level: 'basic', phonetic: '/wɜːrθ ðə ˈmʌni/', definition: '物有所值', example: 'They are expensive but worth the money.', emoji: '💯' },
                // 进阶词 (蓝色)
                { word: 'break in', level: 'advanced', phonetic: '/breɪk ɪn/', definition: '（把新鞋）穿软', example: 'I need to break in these new boots.', emoji: '👣' },
                { word: 'wear and tear', level: 'advanced', phonetic: '/wer ænd ter/', definition: '磨损', example: 'The shoes showed significant wear and tear.', emoji: '🕳️' },
                { word: 'scuff marks', level: 'advanced', phonetic: '/skʌf mɑːrks/', definition: '磨损痕迹', example: 'Trying to remove the scuff marks.', emoji: '🎨' },
            ]
        }
    ]
};
