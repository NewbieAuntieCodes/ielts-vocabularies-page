import { IeltsTopic } from './data-types';

export const placesTopic: IeltsTopic = {
    title: '话题: 地点',
    subTopics: [
      {
        id: 'museum',
        title: 'Museum',
        type: '地点题',
        color: 'green',
        words: [
          { word: 'exhibition', phonetic: '/ˌeksɪˈbɪʃn/', definition: '展览会', example: 'The art exhibition attracted thousands of visitors.' },
          { word: 'gallery', phonetic: '/ˈɡæləri/', definition: '美术馆', example: 'We visited an art gallery downtown.' },
          { word: 'artifact', phonetic: '/ˈɑːrtɪfækt/', definition: '手工艺品', example: 'These ancient artifacts are thousands of years old.' },
          { word: 'cultural heritage', phonetic: '/ˈkʌltʃərəl ˈherɪtɪdʒ/', definition: '文化遗产', example: 'Museums help to preserve our cultural heritage.' },
          { word: 'aesthetics', phonetic: '/esˈθetɪks/', definition: '美学', example: 'The aesthetics of the painting are truly remarkable.' },
          { word: 'artwork', phonetic: '/ˈɑːrtwɜːrk/', definition: '艺术品', example: 'The museum features artwork from various modern artists.' },
        ],
      },
      {
        id: 'crowded-place',
        title: 'Crowded place',
        type: '地点题',
        color: 'green',
        words: [
          { word: 'bustling', phonetic: '/ˈbʌslɪŋ/', definition: '熙熙攘攘的', example: 'The market was bustling with shoppers.' },
          { word: 'vibrant', phonetic: '/ˈvaɪbrənt/', definition: '充满活力的', example: 'It\'s a vibrant city with a lively nightlife.' },
          { word: 'packed', phonetic: '/pækt/', definition: '拥挤的', example: 'The train was so packed I could barely move.' },
          { word: 'throng', phonetic: '/θrɔːŋ/', definition: '人群', example: 'A throng of tourists gathered around the monument.' },
          { word: 'hustle and bustle', phonetic: '/ˈhʌsl ænd ˈbʌsl/', definition: '熙熙攘攘', example: 'I love the hustle and bustle of the big city.' },
        ],
      },
      {
        id: 'public-places',
        title: 'Public places',
        type: '地点题',
        color: 'green',
        words: [
          { word: 'amenities', phonetic: '/əˈmiːnətiz/', definition: '便利设施', example: 'The park has excellent amenities, like cafes and restrooms.' },
          { word: 'accessible', phonetic: '/əkˈsesəbl/', definition: '可进入的', example: 'The library is accessible to people with disabilities.' },
          { word: 'community', phonetic: '/kəˈmjuːnəti/', definition: '社区', example: 'The community center is a popular public place.' },
          { word: 'recreational', phonetic: '/ˌrekriˈeɪʃənl/', definition: '娱乐的', example: 'The park offers many recreational facilities.' },
          { word: 'green spaces', phonetic: '/ɡriːn ˈspeɪsɪz/', definition: '绿地', example: 'Cities need more green spaces for people to relax.' },
        ],
      },
    ],
};