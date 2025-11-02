import { IeltsTopic, SubTopic } from './data-types';

const friends: SubTopic = {
    id: 'friends',
    title: 'Friends',
    type: '人物题',
    color: 'yellow',
    words: [
      { word: 'sociable', phonetic: '/ˈsoʊʃəbl/', definition: '好交际的', example: 'My friend is very sociable and loves parties.', emoji: 'https://em-content.zobj.net/source/apple/391/partying-face_1f973.png' },
      { word: 'loyal', phonetic: '/ˈlɔɪəl/', definition: '忠诚的', example: 'A loyal friend will always support you.', emoji: 'https://em-content.zobj.net/source/apple/391/dog-face_1f436.png' },
      { word: 'trustworthy', phonetic: '/ˈtrʌstˌwɜːrði/', definition: '值得信赖的', example: 'She is a trustworthy person; your secret is safe with her.', emoji: 'https://em-content.zobj.net/source/apple/391/handshake_1f91d.png' },
      { word: 'supportive', phonetic: '/səˈpɔːrtɪv/', definition: '支持的', example: 'My parents are very supportive of my career choice.', emoji: 'https://em-content.zobj.net/source/apple/391/thumbs-up_1f44d.png' },
      { word: 'get along with', phonetic: '/ɡet əˈlɔŋ wɪθ/', definition: '和...相处融洽', example: 'I get along with my colleagues very well.', emoji: 'https://em-content.zobj.net/source/apple/391/smiling-face-with-smiling-eyes_1f60a.png' },
      { word: 'teammate', phonetic: '/ˈtiːmmeɪt/', definition: '队友', example: 'My teammate and I practice together every day.', emoji: 'https://em-content.zobj.net/source/apple/391/people-hugging_1fac2.png' },
      { word: 'close friend', phonetic: '/kloʊs frend/', definition: '密友', example: 'She is not just a colleague, she is a close friend.', emoji: 'https://em-content.zobj.net/source/apple/391/two-hearts_1f495.png' },
      { word: 'talkative', phonetic: '/ˈtɔːkətɪv/', definition: '健谈的', example: 'My roommate is very talkative, she can talk for hours.', emoji: 'https://em-content.zobj.net/source/apple/391/speaking-head_1f5e3-fe0f.png' },
      { word: 'reliable', phonetic: '/rɪˈlaɪəbl/', definition: '可靠的', example: 'He is a very reliable employee who always meets deadlines.', emoji: 'https://em-content.zobj.net/source/apple/391/key_1f511.png' },
      { word: 'easy-going', phonetic: '/ˈiːziˌɡoʊɪŋ/', definition: '随和的', example: 'He has an easy-going personality and gets along with everyone.', emoji: 'https://em-content.zobj.net/source/apple/391/smiling-face-with-sunglasses_1f60e.png' },
      { word: 'caring', phonetic: '/ˈkerɪŋ/', definition: '有爱心的', example: 'She is a caring person who always helps others in need.', emoji: 'https://em-content.zobj.net/source/apple/391/smiling-face-with-hearts_1f970.png' },
      { word: 'topics', phonetic: '/ˈtɒpɪks/', definition: '话题', example: 'We discussed a variety of topics during our conversation.', emoji: 'https://em-content.zobj.net/source/apple/391/speech-balloon_1f4ac.png' },
      { word: 'trust', phonetic: '/trʌst/', definition: '信任', example: 'Trust is the foundation of any strong friendship.', emoji: 'https://em-content.zobj.net/source/apple/391/handshake_1f91d.png' },
      { word: 'hang out', phonetic: '/hæŋ aʊt/', definition: '一起玩；闲逛', example: 'We often hang out at the cafe after school.', emoji: 'https://em-content.zobj.net/source/apple/391/hot-beverage_2615.png' },
    ],
};

const oldPeople: SubTopic = {
    id: 'old-people',
    title: 'Staying with old people',
    type: '事件题',
    color: 'blue',
    words: [
      { word: 'respectful', phonetic: '/rɪˈspektfəl/', definition: '尊敬的', example: 'It is important to be respectful to the elderly.', emoji: 'https://em-content.zobj.net/source/apple/391/person-bowing_1f647.png' },
      { word: 'patient', phonetic: '/ˈpeɪʃnt/', definition: '有耐心的', example: 'You need to be patient when communicating with older people.', emoji: 'https://em-content.zobj.net/source/apple/391/hourglass-not-done_23f3.png' },
      { word: 'generation gap', phonetic: '/ˌdʒenəˈreɪʃn ɡæp/', definition: '代沟', example: 'The generation gap can sometimes cause misunderstandings.', emoji: 'https://em-content.zobj.net/source/apple/391/busts-in-silhouette_1f465.png' },
      { word: 'wisdom', phonetic: '/ˈwɪzdəm/', definition: '智慧', example: 'Old people often have a lot of wisdom to share.', emoji: 'https://em-content.zobj.net/source/apple/391/owl_1f989.png' },
      { word: 'companionship', phonetic: '/kəmˈpænjənʃɪp/', definition: '陪伴', example: 'Elderly people often value companionship.', emoji: 'https://em-content.zobj.net/source/apple/391/people-holding-hands_1f9d1-200d-1f91d-200d-1f9d1.png' },
    ],
};

export const peopleTopic: IeltsTopic = {
    title: '话题: 人物与社交',
    subTopics: [
      friends,
      oldPeople,
    ],
};