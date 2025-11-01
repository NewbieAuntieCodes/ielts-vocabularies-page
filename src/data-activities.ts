import { IeltsTopic, SubTopic } from './data-types';

const dailyRoutineChange: SubTopic = {
    id: 'daily-routine-change',
    title: 'Daily routine & Change',
    type: '事件题',
    color: 'blue',
    isNew: true,
    words: [
      { word: 'frequently', phonetic: '/ˈfriːkwəntli/', definition: '频繁地', example: 'I frequently change my hairstyle.', emoji: 'https://em-content.zobj.net/source/apple/391/repeat-button_1f501.png' },
      { word: 'regret', phonetic: '/rɪˈɡret/', definition: '后悔', example: 'She doesn\'t regret the changes she has made in her life.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-facepalming_1f926-200d-2640-fe0f.png' },
      { word: 'adapt', phonetic: '/əˈdæpt/', definition: '适应', example: 'Animals need to adapt to environmental changes to survive.', emoji: 'https://em-content.zobj.net/source/apple/391/lizard_1f98e.png' },
      { word: 'unexpected', phonetic: '/ˌʌnɪkˈspektɪd/', definition: '意想不到的', example: 'The sudden change in weather was completely unexpected.', emoji: 'https://em-content.zobj.net/source/apple/391/exploding-head_1f92f.png' },
      { word: 'transform', phonetic: '/trænsˈfɔːrm/', definition: '改变；转变', example: 'The internet has transformed the way people communicate.', emoji: 'https://em-content.zobj.net/source/apple/391/butterfly_1f98b.png' },
      { word: 'adjust', phonetic: '/əˈdʒʌst/', definition: '调整', example: 'You may need to adjust your plans if things change.', emoji: 'https://em-content.zobj.net/source/apple/391/wrench_1f527.png' },
      { word: 'wake up', phonetic: '/weɪk ʌp/', definition: '醒来', example: 'I wake up at 7 AM every morning.', emoji: 'https://em-content.zobj.net/source/apple/391/alarm-clock_23f0.png' },
      { word: 'commute', phonetic: '/kəˈmjuːt/', definition: '通勤', example: 'My daily commute to work takes about an hour.', emoji: 'https://em-content.zobj.net/source/apple/391/train_1f686.png' },
      { word: 'schedule', phonetic: '/ˈskedʒuːl/', definition: '日程安排', example: 'I have a very busy schedule today.', emoji: 'https://em-content.zobj.net/source/apple/391/calendar_1f4c5.png' },
      { word: 'fulfill', phonetic: '/fʊlˈfɪl/', definition: '履行；满足', example: 'It\'s satisfying to fulfill all the tasks on my to-do list.', emoji: 'https://em-content.zobj.net/source/apple/391/check-mark-button_2705.png' },
      { word: 'productive', phonetic: '/prəˈdʌktɪv/', definition: '富有成效的', example: 'I had a very productive morning and finished my report.', emoji: 'https://em-content.zobj.net/source/apple/391/flexed-biceps_1f4aa.png' },
      { word: 'balance', phonetic: '/ˈbæləns/', definition: '平衡', example: 'Finding a good work-life balance is crucial for well-being.', emoji: 'https://em-content.zobj.net/source/apple/391/balance-scale_2696-fe0f.png' },
      { word: 'incorporate', phonetic: '/ɪnˈkɔːrpəreɪt/', definition: '包含；合并', example: 'I try to incorporate at least 30 minutes of exercise into my daily routine.', emoji: 'https://em-content.zobj.net/source/apple/391/puzzle-piece_1f9e9.png' },
      { word: 'cooperate', phonetic: '/koʊˈɑːpəreɪt/', definition: '合作', example: 'We need to cooperate to change our daily routine for the better.', emoji: 'https://em-content.zobj.net/source/apple/391/handshake_1f91d.png' },
      { word: 'alter', phonetic: '/ˈɔːltər/', definition: '改变；修改', example: 'We\'ve had to alter our daily routine because of the new schedule.', emoji: 'https://em-content.zobj.net/source/apple/391/artist-palette_1f3a8.png' },
      { word: 'initial', phonetic: '/ɪˈnɪʃl/', definition: '最初的', example: 'My initial plan for the day was to go jogging, but it rained.', emoji: '🥇' },
      { word: 'initially', phonetic: '/ɪˈnɪʃəli/', definition: '最初；开头', example: 'Initially, I found it hard to wake up early, but now I\'m used to it.', emoji: 'https://em-content.zobj.net/source/apple/391/chequered-flag_1f3c1.png' },
      { word: 'conscious', phonetic: '/ˈkɑːnʃəs/', definition: '有意识的；意识到的', example: 'I made a conscious decision to change my morning routine.', emoji: 'https://em-content.zobj.net/source/apple/391/brain_1f9e0.png' },
      { word: 'consciously', phonetic: '/ˈkɑːnʃəsli/', definition: '有意识地；自觉地', example: 'I consciously try to add a short walk to my daily schedule.', emoji: 'https://em-content.zobj.net/source/apple/391/thinking-face_1f914.png' },
    ],
};

const study: SubTopic = {
    id: 'study',
    title: 'Study',
    type: '事件题',
    color: 'blue',
    isNew: true,
    words: [
      { word: 'attend', phonetic: '/əˈtend/', definition: '参加/上（学）', example: 'It is important to attend all your classes to keep up with the coursework.', emoji: 'https://em-content.zobj.net/source/apple/391/school_1f3eb.png' },
      { word: 'tutorial', phonetic: '/tuːˈtɔːriəl/', definition: '辅导课', example: 'The small group tutorial allows for more discussion.', emoji: 'https://em-content.zobj.net/source/apple/391/man-teacher_1f468-200d-1f3eb.png' },
      { word: 'lecture', phonetic: '/ˈlektʃər/', definition: '讲座/演讲', example: 'The professor\'s lecture on economics was very insightful.', emoji: 'https://em-content.zobj.net/source/apple/391/microphone_1f3a4.png' },
      { word: 'assignment', phonetic: '/əˈsaɪnmənt/', definition: '作业/任务', example: 'I have a big assignment due next Monday.', emoji: 'https://em-content.zobj.net/source/apple/391/memo_1f4dd.png' },
      { word: 'curriculum', phonetic: '/kəˈrɪkjələm/', definition: '课程', example: 'The school is introducing a new curriculum next year.', emoji: 'https://em-content.zobj.net/source/apple/391/open-book_1f4d6.png' },
      { word: 'major in', phonetic: '/ˈmeɪdʒər ɪn/', definition: '主修', example: 'She decided to major in international relations.', emoji: 'https://em-content.zobj.net/source/apple/391/graduation-cap_1f393.png' },
    ],
};

const excitingActivity: SubTopic = {
    id: 'exciting-activity',
    title: 'Sports & Exciting activity',
    type: '事件题',
    color: 'blue',
    isNew: true,
    words: [
      { word: 'roller coaster', phonetic: '/ˈroʊlər ˌkoʊstər/', definition: '过山车', example: 'Riding a roller coaster is a thrilling experience.', emoji: 'https://em-content.zobj.net/source/apple/391/roller-coaster_1f3a2.png' },
      { word: 'thrilling', phonetic: '/ˈθrɪlɪŋ/', definition: '惊险的；刺激的', example: 'The movie had a thrilling chase scene.', emoji: 'https://em-content.zobj.net/source/apple/391/face-screaming-in-fear_1f631.png' },
      { word: 'exhilarating', phonetic: '/ɪɡˈzɪləreɪtɪŋ/', definition: '令人振奋的', example: 'The exhilarating feeling of skiing down the mountain is unforgettable.', emoji: 'https://em-content.zobj.net/source/apple/391/party-popper_1f389.png' },
      { word: 'unforgettable', phonetic: '/ˌʌnfərˈɡetəbl/', definition: '难忘的', example: 'Visiting the Grand Canyon was an unforgettable experience.', emoji: 'https://em-content.zobj.net/source/apple/391/sparkling-heart_1f496.png' },
      { word: 'adventurous', phonetic: '/ədˈventʃərəs/', definition: '富有冒险精神的', example: 'He is an adventurous traveler who loves exploring new places.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-climbing_1f9d7-200d-2640-fe0f.png' },
      { word: 'breathtaking', phonetic: '/ˈbreθteɪkɪŋ/', definition: '惊人的；惊险的', example: 'The view from the top of the mountain was breathtaking.', emoji: 'https://em-content.zobj.net/source/apple/391/face-with-open-mouth_1f62e.png' },
      { word: 'athlete', phonetic: '/ˈæθliːt/', definition: '运动员', example: 'He is a professional athlete who competes in marathons.', emoji: 'https://em-content.zobj.net/source/apple/391/person-running_1f3c3.png' },
      { word: 'compete', phonetic: '/kəmˈpiːt/', definition: '竞争；比赛', example: 'Many teams compete for the championship.', emoji: 'https://em-content.zobj.net/source/apple/391/sports-medal_1f3c5.png' },
      { word: 'stadium', phonetic: '/ˈsteɪdiəm/', definition: '体育场', example: 'The stadium was packed with excited fans.', emoji: 'https://em-content.zobj.net/source/apple/391/stadium_1f3df-fe0f.png' },
      { word: 'teamwork', phonetic: '/ˈtiːmwɜːrk/', definition: '团队合作', example: 'Teamwork is essential for success in basketball.', emoji: 'https://em-content.zobj.net/source/apple/391/handshake_1f91d.png' },
      { word: 'exercise', phonetic: '/ˈeksərsaɪz/', definition: '锻炼', example: 'Regular exercise is important for staying healthy.', emoji: 'https://em-content.zobj.net/source/apple/391/person-lifting-weights_1f3cb-fe0f.png' },
      { word: 'energetic', phonetic: '/ˌenərˈdʒetɪk/', definition: '精力充沛的', example: 'The children were very energetic after the party.', emoji: 'https://em-content.zobj.net/source/apple/391/battery_1f50b.png' },
    ],
};

const doingWell: SubTopic = {
    id: 'doing-well',
    title: 'Doing something well',
    type: '事件题',
    color: 'blue',
    isNew: true,
    words: [
      { word: 'champion', phonetic: '/ˈtʃæmpiən/', definition: '冠军/拥护者', example: 'He is a true champion of the sport.', emoji: 'https://em-content.zobj.net/source/apple/391/trophy_1f3c6.png' },
      { word: 'praise', phonetic: '/preɪz/', definition: '赞扬', example: 'The critics praised the film for its originality.', emoji: 'https://em-content.zobj.net/source/apple/391/clapping-hands_1f44f.png' },
      { word: 'accomplishment', phonetic: '/əˈkʌmplɪʃmənt/', definition: '成就', example: 'Finishing the marathon was a huge accomplishment for her.', emoji: 'https://em-content.zobj.net/source/apple/391/sports-medal_1f3c5.png' },
      { word: 'excel', phonetic: '/ɪkˈsel/', definition: '擅长/超越', example: 'She has always excelled in science subjects.', emoji: 'https://em-content.zobj.net/source/apple/391/glowing-star_1f31f.png' },
      { word: 'outstanding', phonetic: '/aʊtˈstændɪŋ/', definition: '杰出的', example: 'His performance was outstanding.', emoji: 'https://em-content.zobj.net/source/apple/391/star_2b50.png' },
      { word: 'proficient', phonetic: '/prəˈfɪʃnt/', definition: '精通的', example: 'I am proficient in both spoken and written English.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-technologist_1f469-200d-1f4bb.png' },
    ],
};

const sharing: SubTopic = {
    id: 'sharing',
    title: 'Sharing',
    type: '事件题',
    color: 'blue',
    words: [
      { word: 'generous', phonetic: '/ˈdʒenərəs/', definition: '慷慨的', example: 'He was generous and shared his lunch with me.', emoji: 'https://em-content.zobj.net/source/apple/391/wrapped-gift_1f381.png' },
      { word: 'mutual', phonetic: '/ˈmjuːtʃuəl/', definition: '相互的', example: 'Friendship is based on mutual trust and sharing.', emoji: 'https://em-content.zobj.net/source/apple/391/handshake_1f91d.png' },
      { word: 'contribute', phonetic: '/kənˈtrɪbjuːt/', definition: '贡献', example: 'Everyone should contribute to the group project.', emoji: 'https://em-content.zobj.net/source/apple/391/palms-up-together_1f932.png' },
      { word: 'cooperate', phonetic: '/koʊˈɑːpəreɪt/', definition: '合作', example: 'We need to cooperate to finish the task on time.', emoji: 'https://em-content.zobj.net/source/apple/391/people-holding-hands_1f9d1-200d-1f91d-200d-1f9d1.png' },
    ],
};

const borrowing: SubTopic = {
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

const chatting: SubTopic = {
    id: 'chatting',
    title: 'Chatting',
    type: '事件题',
    color: 'blue',
    words: [
      { word: 'converse', phonetic: '/kənˈvɜːrs/', definition: '交谈', example: 'It was pleasant to converse with her.', emoji: 'https://em-content.zobj.net/source/apple/391/speaking-head_1f5e3-fe0f.png' },
      { word: 'small talk', phonetic: '/smɔːl tɔːk/', definition: '闲聊', example: 'We made small talk while waiting for the bus.', emoji: 'https://em-content.zobj.net/source/apple/391/speech-balloon_1f4ac.png' },
      { word: 'catch up', phonetic: '/kætʃ ʌp/', definition: '叙旧', example: 'Let\'s meet for coffee and catch up.', emoji: 'https://em-content.zobj.net/source/apple/391/hot-beverage_2615.png' },
      { word: 'engage in', phonetic: '/ɪnˈɡeɪdʒ ɪn/', definition: '参与', example: 'He likes to engage in deep conversations.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-raising-hand_1f64b-200d-2640-fe0f.png' },
    ],
};

const breakTopic: SubTopic = {
    id: 'break',
    title: 'Having a break',
    type: '事件题',
    color: 'blue',
    words: [
      { word: 'unwind', phonetic: '/ʌnˈwaɪnd/', definition: '放松', example: 'I like to listen to music to unwind after work.', emoji: 'https://em-content.zobj.net/source/apple/391/relieved-face_1f60c.png' },
      { word: 'recharge', phonetic: '/riːˈtʃɑːrdʒ/', definition: '充电', example: 'A short break can help you recharge your batteries.', emoji: 'https://em-content.zobj.net/source/apple/391/battery_1f50b.png' },
      { word: 'leisure', phonetic: '/ˈliːʒər/', definition: '休闲', example: 'What do you do in your leisure time?', emoji: 'https://em-content.zobj.net/source/apple/391/umbrella-on-ground_26f1-fe0f.png' },
      { word: 'respite', phonetic: '/ˈrespɪt/', definition: '暂歇', example: 'The holiday was a welcome respite from work.', emoji: 'https://em-content.zobj.net/source/apple/391/pause-button_23f8-fe0f.png' },
    ],
};

const gardening: SubTopic = {
    id: 'gardening',
    title: 'Growing vegetables/fruits',
    type: '事件题',
    color: 'blue',
    words: [
      { word: 'cultivate', phonetic: '/ˈkʌltɪveɪt/', definition: '栽培', example: 'We cultivate a variety of vegetables in our garden.', emoji: 'https://em-content.zobj.net/source/apple/391/seedling_1f331.png' },
      { word: 'harvest', phonetic: '/ˈhɑːrvɪst/', definition: '收获', example: 'It\'s time to harvest the ripe tomatoes.', emoji: 'https://em-content.zobj.net/source/apple/391/basket_1f9fa.png' },
      { word: 'organic', phonetic: '/ɔːrˈɡænɪk/', definition: '有机的', example: 'We prefer to grow organic vegetables without pesticides.', emoji: 'https://em-content.zobj.net/source/apple/391/herb_1f33f.png' },
      { word: 'horticulture', phonetic: '/ˈhɔːrtɪkʌltʃər/', definition: '园艺', example: 'Horticulture is a relaxing and rewarding hobby.', emoji: 'https://em-content.zobj.net/source/apple/391/potted-plant_1fab4.png' },
    ],
};

export const activitiesTopic: IeltsTopic = {
    title: '话题: 活动与爱好',
    subTopics: [
      dailyRoutineChange,
      study,
      excitingActivity,
      doingWell,
      sharing,
      borrowing,
      chatting,
      breakTopic,
      gardening,
    ],
};