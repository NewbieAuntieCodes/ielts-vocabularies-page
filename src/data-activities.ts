import { IeltsTopic } from './data-types';

export const activitiesTopic: IeltsTopic = {
    title: '话题: 活动与爱好',
    subTopics: [
      {
        id: 'doing-well',
        title: 'Doing something well',
        type: '事件题',
        color: 'blue',
        isNew: true,
        words: [
          { word: 'champion', phonetic: '/ˈtʃæmpiən/', definition: '冠军/拥护者', example: 'He is a true champion of the sport.' },
          { word: 'praise', phonetic: '/preɪz/', definition: '赞扬', example: 'The critics praised the film for its originality.' },
          { word: 'accomplishment', phonetic: '/əˈkʌmplɪʃmənt/', definition: '成就', example: 'Finishing the marathon was a huge accomplishment for her.' },
          { word: 'excel', phonetic: '/ɪkˈsel/', definition: '擅长/超越', example: 'She has always excelled in science subjects.' },
          { word: 'outstanding', phonetic: '/aʊtˈstændɪŋ/', definition: '杰出的', example: 'His performance was outstanding.' },
          { word: 'proficient', phonetic: '/prəˈfɪʃnt/', definition: '精通的', example: 'I am proficient in both spoken and written English.' },
        ],
      },
      {
        id: 'sharing',
        title: 'Sharing',
        type: '事件题',
        color: 'blue',
        words: [
          { word: 'generous', phonetic: '/ˈdʒenərəs/', definition: '慷慨的', example: 'He was generous and shared his lunch with me.' },
          { word: 'mutual', phonetic: '/ˈmjuːtʃuəl/', definition: '相互的', example: 'Friendship is based on mutual trust and sharing.' },
          { word: 'contribute', phonetic: '/kənˈtrɪbjuːt/', definition: '贡献', example: 'Everyone should contribute to the group project.' },
          { word: 'cooperate', phonetic: '/koʊˈɑːpəreɪt/', definition: '合作', example: 'We need to cooperate to finish the task on time.' },
        ],
      },
      {
        id: 'borrowing',
        title: 'Borrowing/lending',
        type: '事件题',
        color: 'blue',
        words: [
          { word: 'lend', phonetic: '/lend/', definition: '借出', example: 'Could you lend me your pen for a moment?' },
          { word: 'borrow', phonetic: '/ˈbɔːroʊ/', definition: '借入', example: 'I need to borrow a book from the library.' },
          { word: 'return', phonetic: '/rɪˈtɜːrn/', definition: '归还', example: 'Please return the book by Friday.' },
          { word: 'responsible', phonetic: '/rɪˈspɑːnsəbl/', definition: '负责的', example: 'You are responsible for the items you borrow.' },
        ],
      },
      {
        id: 'chatting',
        title: 'Chatting',
        type: '事件题',
        color: 'blue',
        words: [
          { word: 'converse', phonetic: '/kənˈvɜːrs/', definition: '交谈', example: 'It was pleasant to converse with her.' },
          { word: 'small talk', phonetic: '/smɔːl tɔːk/', definition: '闲聊', example: 'We made small talk while waiting for the bus.' },
          { word: 'catch up', phonetic: '/kætʃ ʌp/', definition: '叙旧', example: 'Let\'s meet for coffee and catch up.' },
          { word: 'engage in', phonetic: '/ɪnˈɡeɪdʒ ɪn/', definition: '参与', example: 'He likes to engage in deep conversations.' },
        ],
      },
      {
        id: 'break',
        title: 'Having a break',
        type: '事件题',
        color: 'blue',
        words: [
          { word: 'unwind', phonetic: '/ʌnˈwaɪnd/', definition: '放松', example: 'I like to listen to music to unwind after work.' },
          { word: 'recharge', phonetic: '/riːˈtʃɑːrdʒ/', definition: '充电', example: 'A short break can help you recharge your batteries.' },
          { word: 'leisure', phonetic: '/ˈliːʒər/', definition: '休闲', example: 'What do you do in your leisure time?' },
          { word: 'respite', phonetic: '/ˈrespɪt/', definition: '暂歇', example: 'The holiday was a welcome respite from work.' },
        ],
      },
      {
        id: 'gardening',
        title: 'Growing vegetables/fruits',
        type: '事件题',
        color: 'blue',
        words: [
          { word: 'cultivate', phonetic: '/ˈkʌltɪveɪt/', definition: '栽培', example: 'We cultivate a variety of vegetables in our garden.' },
          { word: 'harvest', phonetic: '/ˈhɑːrvɪst/', definition: '收获', example: 'It\'s time to harvest the ripe tomatoes.' },
          { word: 'organic', phonetic: '/ɔːrˈɡænɪk/', definition: '有机的', example: 'We prefer to grow organic vegetables without pesticides.' },
          { word: 'horticulture', phonetic: '/ˈhɔːrtɪkʌltʃər/', definition: '园艺', example: 'Horticulture is a relaxing and rewarding hobby.' },
        ],
      },
    ],
};