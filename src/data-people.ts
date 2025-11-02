import { IeltsTopic, SubTopic } from './data-types';

const friends: SubTopic = {
    id: 'friends',
    title: 'Friends & Sharing',
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
      { word: 'generous', phonetic: '/ˈdʒenərəs/', definition: '慷慨的', example: 'He was generous and shared his lunch with me.', emoji: 'https://em-content.zobj.net/source/apple/391/wrapped-gift_1f381.png' },
      { word: 'mutual', phonetic: '/ˈmjuːtʃuəl/', definition: '相互的', example: 'Friendship is based on mutual trust and sharing.', emoji: 'https://em-content.zobj.net/source/apple/391/handshake_1f91d.png' },
      { word: 'contribute', phonetic: '/kənˈtrɪbjuːt/', definition: '贡献', example: 'Everyone should contribute to the group project.', emoji: 'https://em-content.zobj.net/source/apple/391/palms-up-together_1f932.png' },
      { word: 'cooperate', phonetic: '/koʊˈɑːpəreɪt/', definition: '合作', example: 'We need to cooperate to finish the task on time.', emoji: 'https://em-content.zobj.net/source/apple/391/people-holding-hands_1f9d1-200d-1f91d-200d-1f9d1.png' },
      { word: 'lend', phonetic: '/lend/', definition: '借出', example: 'Could you lend me your pen for a moment?', emoji: 'https://em-content.zobj.net/source/apple/391/right-arrow_27a1-fe0f.png' },
      { word: 'borrow', phonetic: '/ˈbɔːroʊ/', definition: '借入', example: 'I need to borrow a book from the library.', emoji: 'https://em-content.zobj.net/source/apple/391/left-arrow_2b05-fe0f.png' },
      { word: 'thoughtful', phonetic: '/ˈθɔːtfl/', definition: '体贴的', example: 'It was very thoughtful of you to bring flowers.', emoji: 'https://em-content.zobj.net/source/apple/391/bouquet_1f490.png' },
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
    subTopics: [
      friends,
      oldPeople,
    ],
};