import { IeltsTopic, SubTopic } from './data-types';

const advertisement: SubTopic = {
    id: 'advertisement',
    title: 'Advertisement',
    type: '事物题',
    color: 'purple',
    words: [
      { word: 'commercial', phonetic: '/kəˈmɜːrʃl/', definition: '商业广告', example: 'I saw a commercial for a new car on TV.', emoji: 'https://em-content.zobj.net/source/apple/391/television_1f4fa.png' },
      { word: 'persuasive', phonetic: '/pərˈsweɪsɪv/', definition: '有说服力的', example: 'Advertisements use persuasive language to attract customers.', emoji: 'https://em-content.zobj.net/source/apple/391/light-bulb_1f4a1.png' },
      { word: 'brand', phonetic: '/brænd/', definition: '品牌', example: 'Nike is a well-known brand.', emoji: 'https://em-content.zobj.net/source/apple/391/trade-mark_2122-fe0f.png' },
      { word: 'target audience', phonetic: '/ˈtɑːrɡɪt ˈɔːdiəns/', definition: '目标受众', example: 'The ad was designed for a young target audience.', emoji: 'https://em-content.zobj.net/source/apple/391/direct-hit_1f3af.png' },
    ],
};

const rules: SubTopic = {
    id: 'rules',
    title: 'Rules',
    type: '事物题',
    color: 'purple',
    words: [
      { word: 'regulation', phonetic: '/ˌreɡjuˈleɪʃn/', definition: '规章', example: 'There are strict safety regulations in this factory.', emoji: 'https://em-content.zobj.net/source/apple/391/scroll_1f4dc.png' },
      { word: 'policy', phonetic: '/ˈpɑːləsi/', definition: '政策', example: 'The company has a no-smoking policy.', emoji: 'https://em-content.zobj.net/source/apple/391/page-facing-up_1f4c4.png' },
      { word: 'comply with', phonetic: '/kəmˈplaɪ wɪθ/', definition: '遵守', example: 'You must comply with the rules.', emoji: 'https://em-content.zobj.net/source/apple/391/check-mark-button_2705.png' },
      { word: 'enforce', phonetic: '/ɪnˈfɔːrs/', definition: '执行', example: 'The police are there to enforce the law.', emoji: 'https://em-content.zobj.net/source/apple/391/police-officer_1f46e.png' },
    ],
};

const shoes: SubTopic = {
    id: 'shoes',
    title: 'Shoes',
    type: '事物题',
    color: 'purple',
    words: [
      { word: 'footwear', phonetic: '/ˈfʊtwɛər/', definition: '鞋类', example: 'The store sells a wide range of footwear.', emoji: 'https://em-content.zobj.net/source/apple/391/running-shoe_1f45f.png' },
      { word: 'comfortable', phonetic: '/ˈkʌmfərtəbl/', definition: '舒适的', example: 'These shoes are very comfortable to walk in.', emoji: 'https://em-content.zobj.net/source/apple/391/relieved-face_1f60c.png' },
      { word: 'durable', phonetic: '/ˈdʊrəbl/', definition: '耐用的', example: 'I need a pair of durable boots for hiking.', emoji: 'https://em-content.zobj.net/source/apple/391/flexed-biceps_1f4aa.png' },
      { word: 'fashionable', phonetic: '/ˈfæʃənəbl/', definition: '时尚的', example: 'She always wears fashionable shoes.', emoji: 'https://em-content.zobj.net/source/apple/391/high-heeled-shoe_1f462.png' },
    ],
};

const plants: SubTopic = {
    id: 'plants',
    title: 'Plants',
    type: '事物题',
    color: 'purple',
    words: [
      { word: 'foliage', phonetic: '/ˈfoʊliɪdʒ/', definition: '叶子', example: 'The plant has beautiful green foliage.', emoji: 'https://em-content.zobj.net/source/apple/391/herb_1f33f.png' },
      { word: 'blossom', phonetic: '/ˈblɑːsəm/', definition: '花', example: 'The cherry trees are in full blossom.', emoji: 'https://em-content.zobj.net/source/apple/391/cherry-blossom_1f338.png' },
      { word: 'photosynthesis', phonetic: '/ˌfoʊtoʊˈsɪnθəsɪs/', definition: '光合作用', example: 'Photosynthesis is how plants create their food.', emoji: 'https://em-content.zobj.net/source/apple/391/sun_2600-fe0f.png' },
      { word: 'botany', phonetic: '/ˈbɑːtəni/', definition: '植物学', example: 'Botany is the scientific study of plants.', emoji: 'https://em-content.zobj.net/source/apple/391/microscope_1f52c.png' },
    ],
};

export const thingsTopic: IeltsTopic = {
    title: '话题: 事物',
    subTopics: [
      advertisement,
      rules,
      shoes,
      plants,
    ],
};