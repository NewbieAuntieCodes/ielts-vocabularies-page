import { SubTopic } from './data-types';

export const goingOut: SubTopic = {
    id: 'going-out',
    title: 'Going Out',
    type: '事件题',
    color: 'yellow',
    isNew: true,
    wordSections: [
        {
            title: '基础词汇',
            words: [
                { word: 'meet up', phonetic: '/miːt ʌp/', definition: '见面；聚会', example: 'Let\'s meet up for coffee this weekend.', emoji: 'https://em-content.zobj.net/source/apple/391/hot-beverage_2615.png' },
                { word: 'hang out', phonetic: '/hæŋ aʊt/', definition: '一起玩；闲逛', example: 'We like to hang out at the park on sunny days.', emoji: 'https://em-content.zobj.net/source/apple/391/deciduous-tree_1f333.png' },
                { word: 'gathering', phonetic: '/ˈɡæðərɪŋ/', definition: '聚会', example: 'We\'re having a small gathering at my place on Friday.', emoji: 'https://em-content.zobj.net/source/apple/391/party-popper_1f389.png' },
                { word: 'get-together', phonetic: '/ˈɡet təˌɡeðər/', definition: '非正式的社交聚会', example: 'It was a casual get-together with a few close friends.', emoji: 'https://em-content.zobj.net/source/apple/391/people-hugging_1fac2.png' },
                { word: 'celebrate', phonetic: '/ˈseləbreɪt/', definition: '庆祝', example: 'We went out to a fancy restaurant to celebrate her birthday.', emoji: 'https://em-content.zobj.net/source/apple/391/partying-face_1f973.png' },
                { word: 'occasion', phonetic: '/əˈkeɪʒən/', definition: '场合', example: 'A wedding is a very special occasion.', emoji: 'https://em-content.zobj.net/source/apple/391/wrapped-gift_1f381.png' },
                { word: 'go for a walk', phonetic: '/ɡoʊ fɔːr ə wɔːk/', definition: '出去散步', example: 'Let\'s go for a walk in the park after dinner.', emoji: 'https://em-content.zobj.net/source/apple/391/person-walking_1f6b6.png' },
                { word: 'hang out with friends', phonetic: '/hæŋ aʊt wɪθ frendz/', definition: '和朋友出去玩', example: 'I like to hang out with friends on weekends.', emoji: 'https://em-content.zobj.net/source/apple/391/people-holding-hands_1f9d1-200d-1f91d-200d-1f9d1.png' },
                { word: 'daily life', phonetic: '/ˈdeɪli laɪf/', definition: '日常生活', example: 'Going out for a walk is a simple pleasure in my daily life.', emoji: 'https://em-content.zobj.net/source/apple/391/calendar_1f4c5.png' },
                { word: 'snacks', phonetic: '/snæks/', definition: '零食', example: 'We packed some snacks like chips and fruit for the picnic.', emoji: 'https://em-content.zobj.net/source/apple/391/pretzel_1f968.png' },
                { word: 'pack some food', phonetic: '/pæk sʌm fuːd/', definition: '带点吃的', example: 'Let\'s pack some food for the road trip.', emoji: 'https://em-content.zobj.net/source/apple/391/bento-box_1f371.png' },
                { word: 'bottled water', phonetic: '/ˈbɒtld ˈwɔːtər/', definition: '瓶装水', example: 'It\'s always a good idea to bring some bottled water when you go hiking.', emoji: 'https://em-content.zobj.net/source/apple/391/droplet_1f4a7.png' },
                { word: 'homemade food', phonetic: '/ˈhoʊmˈmeɪd fuːd/', definition: '自带食物', example: 'I prefer homemade food because it\'s healthier and cheaper.', emoji: 'https://em-content.zobj.net/source/apple/391/sandwich_1f96a.png' },
                { word: 'just in case', phonetic: '/dʒʌst ɪn keɪs/', definition: '以防万一', example: 'I\'ll bring an umbrella, just in case it rains.', emoji: '🎒' },
                { word: 'mobile phone / cellphone', phonetic: '/ˈmoʊbl foʊn / ˈselˌfoʊn/', definition: '手机', example: 'I can\'t imagine my life without a mobile phone.', emoji: 'https://em-content.zobj.net/source/apple/391/mobile-phone_1f4f1.png' },
                { word: 'take my phone with me', phonetic: '/teɪk maɪ foʊn wɪθ mi/', definition: '随身带手机', example: 'I always take my phone with me when I leave the house.', emoji: 'https://em-content.zobj.net/source/apple/391/selfie_1f933.png' },
                { word: 'check messages', phonetic: '/tʃek ˈmesɪdʒɪz/', definition: '看消息', example: 'I need to check my messages to see if she replied.', emoji: 'https://em-content.zobj.net/source/apple/391/speech-balloon_1f4ac.png' },
                { word: 'cash', phonetic: '/kæʃ/', definition: '现金', example: 'Some small shops only accept cash.', emoji: 'https://em-content.zobj.net/source/apple/391/dollar-banknote_1f4b5.png' },
                { word: 'credit card', phonetic: '/ˈkredɪt kɑːrd/', definition: '信用卡', example: 'I usually pay with my credit card for larger purchases.', emoji: 'https://em-content.zobj.net/source/apple/391/credit-card_1f4b3.png' },
                { word: 'mobile payment', phonetic: '/ˈmoʊbl ˈpeɪmənt/', definition: '手机支付', example: 'Mobile payment is very convenient and popular now.', emoji: 'https://em-content.zobj.net/source/apple/391/mobile-phone-with-arrow_1f4f2.png' },
                { word: 'rarely use cash', phonetic: '/ˈrerli juːz kæʃ/', definition: '很少用现金', example: 'I rarely use cash because mobile payments are so common.', emoji: 'https://em-content.zobj.net/source/apple/391/money-with-wings_1f4b8.png' },
                { word: 'only for small shops', phonetic: '/ˈoʊnli fɔːr smɔːl ʃɒps/', definition: '只在小店用', example: 'I carry a little cash, but only for small shops.', emoji: 'https://em-content.zobj.net/source/apple/391/convenience-store_1f3ea.png' },
                { word: 'just a habit', phonetic: '/dʒʌst ə ˈhæbɪt/', definition: '这就是习惯', example: 'Checking my phone first thing in the morning is just a habit.', emoji: 'https://em-content.zobj.net/source/apple/391/counterclockwise-arrows-button_1f504.png' },
                { word: 'depends on the situation', phonetic: '/dɪˈpendz ɒn ðə ˌsɪtʃuˈeɪʃn/', definition: '看情况', example: 'Whether I go out or stay in depends on the situation.', emoji: 'https://em-content.zobj.net/source/apple/391/thinking-face_1f914.png' },
            ],
        },
        {
            title: '进阶词汇',
            words: [
                { word: 'socialize', phonetic: '/ˈsoʊʃəlaɪz/', definition: '社交', example: 'Parties are a great opportunity to socialize with new people.', emoji: 'https://em-content.zobj.net/source/apple/391/busts-in-silhouette_1f465.png' },
                { word: 'venue', phonetic: '/ˈvenjuː/', definition: '场所', example: 'Have you chosen a venue for the party yet?', emoji: 'https://em-content.zobj.net/source/apple/391/round-pushpin_1f4cd.png' },
                { word: 'atmosphere', phonetic: '/ˈætməsfɪər/', definition: '氛围', example: 'The cafe has a cozy and relaxed atmosphere.', emoji: 'https://em-content.zobj.net/source/apple/391/candle_1f56f-fe0f.png' },
                { word: 'lively', phonetic: '/ˈlaɪvli/', definition: '热闹的', example: 'The bar was very lively on Saturday night.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-dancing_1f483.png' },
                { word: 'nightlife', phonetic: '/ˈnaɪtlaɪf/', definition: '夜生活', example: 'The city is famous for its vibrant nightlife.', emoji: 'https://em-content.zobj.net/source/apple/391/night-with-stars_1f303.png' },
                { word: 'entertainment', phonetic: '/ˌentərˈteɪnmənt/', definition: '娱乐', example: 'There are many entertainment options, such as cinemas and theaters.', emoji: 'https://em-content.zobj.net/source/apple/391/performing-arts_1f3ad.png' },
                { word: 'book a table', phonetic: '/bʊk ə ˈteɪbl/', definition: '订座', example: 'I\'ll call the restaurant and book a table for four.', emoji: 'https://em-content.zobj.net/source/apple/391/telephone_260e-fe0f.png' },
                { word: 'reservation', phonetic: '/ˌrezərˈveɪʃn/', definition: '预定', example: 'Do you have a reservation? The restaurant is full tonight.', emoji: 'https://em-content.zobj.net/source/apple/391/spiral-calendar_1f5d3-fe0f.png' },
                { word: 'go for a drink', phonetic: '/ɡoʊ fər ə drɪŋk/', definition: '去喝一杯', example: 'After work, we decided to go for a drink.', emoji: 'https://em-content.zobj.net/source/apple/391/clinking-beer-mugs_1f37b.png' },
                { word: 'energy bar', phonetic: '/ˈenərdʒi bɑːr/', definition: '能量棒', example: 'An energy bar can give you a quick boost of energy during a workout.', emoji: 'https://em-content.zobj.net/source/apple/391/chocolate-bar_1f36b.png' },
                { word: 'cannot live without my phone', phonetic: '/ˈkænɒt lɪv wɪˈðaʊt maɪ foʊn/', definition: '离不开手机', example: 'Honestly, I feel like I cannot live without my phone these days.', emoji: 'https://em-content.zobj.net/source/apple/391/face-screaming-in-fear_1f631.png' },
                { word: 'navigation app / map app', phonetic: '/ˌnævɪˈɡeɪʃn æp / mæp æp/', definition: '导航应用', example: 'I use a navigation app to find the best route.', emoji: 'https://em-content.zobj.net/source/apple/391/world-map_1f5fa-fe0f.png' },
                { word: 'stay connected', phonetic: '/steɪ kəˈnektɪd/', definition: '保持联系', example: 'My phone helps me stay connected with friends and family.', emoji: 'https://em-content.zobj.net/source/apple/391/link_1f517.png' },
                { word: 'e-wallet', phonetic: '/ˈiː ˌwɒlɪt/', definition: '电子钱包', example: 'I have several payment methods linked to my e-wallet.', emoji: 'https://em-content.zobj.net/source/apple/391/purse_1f45b.png' },
                { word: 'QR code', phonetic: '/kjuː ɑːr koʊd/', definition: '二维码', example: 'You can scan the QR code to pay.', emoji: 'https://em-content.zobj.net/source/apple/391/camera-with-flash_1f4f8.png' },
            ]
        }
    ]
};