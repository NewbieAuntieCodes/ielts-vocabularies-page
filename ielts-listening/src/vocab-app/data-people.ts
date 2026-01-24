
import { IeltsTopic, SubTopic } from './data-types';
import { friends } from './data-friends';
import { chatting } from './data-chatting';
import { goingOut } from './data-going-out';

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
      { word: 'caretakers', phonetic: '/ˈkerˌteɪkərz/', definition: '照顾者；看护人', example: 'Caretakers play a vital role in supporting the elderly.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-health-worker_1f469-200d-2695-fe0f.png' },
      { word: 'caregivers', phonetic: '/ˈkerˌɡɪvərz/', definition: '照料者', example: 'Many adult children become caregivers for their aging parents.', emoji: 'https://em-content.zobj.net/source/apple/391/house_1f3e0.png' },
      { word: 'gentle', phonetic: '/ˈdʒentl/', definition: '温柔的', example: 'He has a gentle voice that is very calming.', emoji: 'https://em-content.zobj.net/source/apple/391/dove_1f54a-fe0f.png' },
      { word: 'thoughtful', phonetic: '/ˈθɔːtfl/', definition: '体贴的', example: 'It was very thoughtful of you to bring flowers.', emoji: 'https://em-content.zobj.net/source/apple/391/bouquet_1f490.png' },
      { word: 'wise', phonetic: '/waɪz/', definition: '明智的', example: 'My grandfather is a wise man who gives great advice.', emoji: 'https://em-content.zobj.net/source/apple/391/owl_1f989.png' },
      { word: 'rewarding', phonetic: '/rɪˈwɔːrdɪŋ/', definition: '有益的；值得的', example: 'Spending time with my grandparents is a rewarding experience.', emoji: 'https://em-content.zobj.net/source/apple/391/sparkling-heart_1f496.png' },
      { word: 'keep them company', phonetic: '/kiːp ðəm ˈkʌmpəni/', definition: '陪伴他们', example: 'I often visit my grandmother to keep her company.', emoji: 'https://em-content.zobj.net/source/apple/391/hot-beverage_2615.png' },
      { word: 'accompany', phonetic: '/əˈkʌmpəni/', definition: '陪伴；陪同', example: 'I will accompany you to the doctor\'s appointment.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-walking_1f6b6-200d-2640-fe0f.png' },
    ],
};

export const peopleTopic: IeltsTopic = {
    title: '话题: 人物与社交',
    section: 'Part 1',
    subTopics: [
      friends,
      oldPeople,
      chatting,
      goingOut,
    ],
};
