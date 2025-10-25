import { IeltsTopic } from './data-types';

export const peopleTopic: IeltsTopic = {
    title: '话题: 人物与社交',
    subTopics: [
      {
        id: 'friends',
        title: 'Friends',
        type: '人物题',
        color: 'yellow',
        words: [
          { word: 'sociable', phonetic: '/ˈsoʊʃəbl/', definition: '好交际的', example: 'My friend is very sociable and loves parties.' },
          { word: 'loyal', phonetic: '/ˈlɔɪəl/', definition: '忠诚的', example: 'A loyal friend will always support you.' },
          { word: 'trustworthy', phonetic: '/ˈtrʌstˌwɜːrði/', definition: '值得信赖的', example: 'She is a trustworthy person; your secret is safe with her.' },
          { word: 'supportive', phonetic: '/səˈpɔːrtɪv/', definition: '支持的', example: 'My parents are very supportive of my career choice.' },
          { word: 'get along with', phonetic: '/ɡet əˈlɔŋ wɪθ/', definition: '和...相处融洽', example: 'I get along with my colleagues very well.' },
        ],
      },
      {
        id: 'old-people',
        title: 'Staying with old people',
        type: '事件题',
        color: 'blue',
        words: [
          { word: 'respectful', phonetic: '/rɪˈspektfəl/', definition: '尊敬的', example: 'It is important to be respectful to the elderly.' },
          { word: 'patient', phonetic: '/ˈpeɪʃnt/', definition: '有耐心的', example: 'You need to be patient when communicating with older people.' },
          { word: 'generation gap', phonetic: '/ˌdʒenəˈreɪʃn ɡæp/', definition: '代沟', example: 'The generation gap can sometimes cause misunderstandings.' },
          { word: 'wisdom', phonetic: '/ˈwɪzdəm/', definition: '智慧', example: 'Old people often have a lot of wisdom to share.' },
          { word: 'companionship', phonetic: '/kəmˈpænjənʃɪp/', definition: '陪伴', example: 'Elderly people often value companionship.' },
        ],
      },
    ],
};
