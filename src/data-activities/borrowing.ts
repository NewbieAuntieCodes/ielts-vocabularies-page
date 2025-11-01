import { SubTopic } from '../data-types';

export const borrowing: SubTopic = {
    id: 'borrowing',
    title: 'Borrowing/lending',
    type: '事件题',
    color: 'blue',
    words: [
      { word: 'lend', phonetic: '/lend/', definition: '借出', example: 'Could you lend me your pen for a moment?', emoji: 'https://em-content.zobj.net/source/apple/391/right-arrow_27a1-fe0f.png' },
      { word: 'borrow', phonetic: '/ˈbɔːroʊ/', definition: '借入', example: 'I need to borrow a book from the library.', emoji: 'https://em-content.zobj.net/source/apple/391/left-arrow_2b05-fe0f.png' },
      { word: 'return', phonetic: '/rɪˈtɜːrn/', definition: '归还', example: 'Please return the book by Friday.', emoji: 'https://em-content.zobj.net/source/apple/391/right-arrow-curving-left_21a9-fe0f.png' },
      { word: 'responsible', phonetic: '/rɪˈspɑːnsəbl/', definition: '负责的', example: 'You are responsible for the items you borrow.', emoji: 'https://em-content.zobj.net/source/apple/391/man-judge_1f468-200d-2696-fe0f.png' },
    ],
};
