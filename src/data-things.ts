import { IeltsTopic } from './data-types';

export const thingsTopic: IeltsTopic = {
    title: '话题: 事物',
    subTopics: [
      {
        id: 'advertisement',
        title: 'Advertisement',
        type: '事物题',
        color: 'purple',
        words: [
          { word: 'commercial', phonetic: '/kəˈmɜːrʃl/', definition: '商业广告', example: 'I saw a commercial for a new car on TV.' },
          { word: 'persuasive', phonetic: '/pərˈsweɪsɪv/', definition: '有说服力的', example: 'Advertisements use persuasive language to attract customers.' },
          { word: 'brand', phonetic: '/brænd/', definition: '品牌', example: 'Nike is a well-known brand.' },
          { word: 'target audience', phonetic: '/ˈtɑːrɡɪt ˈɔːdiəns/', definition: '目标受众', example: 'The ad was designed for a young target audience.' },
        ],
      },
      {
        id: 'rules',
        title: 'Rules',
        type: '事物题',
        color: 'purple',
        words: [
          { word: 'regulation', phonetic: '/ˌreɡjuˈleɪʃn/', definition: '规章', example: 'There are strict safety regulations in this factory.' },
          { word: 'policy', phonetic: '/ˈpɑːləsi/', definition: '政策', example: 'The company has a no-smoking policy.' },
          { word: 'comply with', phonetic: '/kəmˈplaɪ wɪθ/', definition: '遵守', example: 'You must comply with the rules.' },
          { word: 'enforce', phonetic: '/ɪnˈfɔːrs/', definition: '执行', example: 'The police are there to enforce the law.' },
        ],
      },
      {
        id: 'shoes',
        title: 'Shoes',
        type: '事物题',
        color: 'purple',
        words: [
          { word: 'footwear', phonetic: '/ˈfʊtwɛər/', definition: '鞋类', example: 'The store sells a wide range of footwear.' },
          { word: 'comfortable', phonetic: '/ˈkʌmfərtəbl/', definition: '舒适的', example: 'These shoes are very comfortable to walk in.' },
          { word: 'durable', phonetic: '/ˈdʊrəbl/', definition: '耐用的', example: 'I need a pair of durable boots for hiking.' },
          { word: 'fashionable', phonetic: '/ˈfæʃənəbl/', definition: '时尚的', example: 'She always wears fashionable shoes.' },
        ],
      },
      {
        id: 'plants',
        title: 'Plants',
        type: '事物题',
        color: 'purple',
        words: [
          { word: 'foliage', phonetic: '/ˈfoʊliɪdʒ/', definition: '叶子', example: 'The plant has beautiful green foliage.' },
          { word: 'blossom', phonetic: '/ˈblɑːsəm/', definition: '花', example: 'The cherry trees are in full blossom.' },
          { word: 'photosynthesis', phonetic: '/ˌfoʊtoʊˈsɪnθəsɪs/', definition: '光合作用', example: 'Photosynthesis is how plants create their food.' },
          { word: 'botany', phonetic: '/ˈbɑːtəni/', definition: '植物学', example: 'Botany is the scientific study of plants.' },
        ],
      },
    ],
};
