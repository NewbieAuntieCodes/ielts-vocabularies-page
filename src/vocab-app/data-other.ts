
import { IeltsTopic, SubTopic } from './data-types';

const degree: SubTopic = {
    id: 'degree',
    title: 'Degree',
    type: '程度',
    color: 'purple',
    words: [
      { word: 'extremely', phonetic: '/ɪkˈstriːmli/', definition: '非常；极其', example: 'The weather was extremely cold.', emoji: 'https://em-content.zobj.net/source/apple/391/exploding-head_1f92f.png' },
      { word: 'absolutely', phonetic: '/ˈæbsəluːtli/', definition: '完全地；绝对地', example: 'You are absolutely right.', emoji: 'https://em-content.zobj.net/source/apple/391/hundred-points_1f4af.png' },
      { word: 'definitely', phonetic: '/ˈdefɪnətli/', definition: '无疑地；肯定地', example: 'I will definitely be there.', emoji: 'https://em-content.zobj.net/source/apple/391/check-mark-button_2705.png' },
      { word: 'incredibly', phonetic: '/ɪnˈkredəbli/', definition: '难以置信地', example: 'The view was incredibly beautiful.', emoji: 'https://em-content.zobj.net/source/apple/391/star-struck_1f929.png' },
      { word: 'particularly', phonetic: '/pərˈtɪkjələrli/', definition: '特别；尤其', example: 'I particularly enjoyed the dessert.', emoji: 'https://em-content.zobj.net/source/apple/391/shortcake_1f370.png' },
      { word: 'fairly', phonetic: '/ˈferli/', definition: '相当地', example: 'The exam was fairly difficult, but manageable.', emoji: 'https://em-content.zobj.net/source/apple/391/slightly-smiling-face_1f642.png' },
      { word: 'really', phonetic: '/ˈriːəli/', definition: '真正地；非常', example: 'I really like this song.', emoji: 'https://em-content.zobj.net/source/apple/391/musical-note_1f3b5.png' },
      { word: 'quite', phonetic: '/kwaɪt/', definition: '相当；很', example: 'The movie was quite interesting.', emoji: 'https://em-content.zobj.net/source/apple/391/thinking-face_1f914.png' },
    ],
};

export const otherTopic: IeltsTopic = {
    title: '话题: 其他',
    section: 'Common',
    subTopics: [
      degree,
    ],
};
