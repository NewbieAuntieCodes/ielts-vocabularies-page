import { SubTopic } from './data-types';

export const socialMedia: SubTopic = {
    id: 'social-media',
    title: 'Social Media 社交媒体',
    type: '事物题',
    color: 'purple',
    wordSections: [
        {
            title: '1. 核心名词与角色 (Key Nouns & Roles)',
            words: [
                // 基础 (Basic)
                { word: 'blog', level: 'basic', phonetic: '/blɒɡ/', definition: '网络日志', example: 'She writes a travel blog to share her experiences.', emoji: '✍️' },
                { word: 'comment', level: 'basic', phonetic: '/ˈkɒment/', definition: '评论', example: 'Please leave a comment below if you enjoyed the video.', emoji: '💬' },
                { word: 'cyberbully', level: 'basic', phonetic: '/ˈsaɪbərbʊli/', definition: '网络霸凌', example: 'Schools should educate students on how to deal with a cyberbully.', emoji: '👿' },
                { word: 'follower', level: 'basic', phonetic: '/ˈfɒloʊər/', definition: '追随者；粉丝', example: 'He has millions of followers on his social media account.', emoji: '👥' },
                { word: 'influencer', level: 'basic', phonetic: '/ˈɪnfluənsər/', definition: '网红；有影响力的人', example: 'Many brands collaborate with influencers to promote products.', emoji: '🌟' },
                { word: 'moments', level: 'basic', phonetic: '/ˈmoʊmənts/', definition: '朋友圈', example: 'I usually check my moments first thing in the morning.', emoji: '📱' },
                { word: 'notification', level: 'basic', phonetic: '/ˌnoʊtɪfɪˈkeɪʃn/', definition: '通知', example: 'I turned off my phone notifications to focus on studying.', emoji: '🔔' },
                { word: 'anniversary', level: 'basic', phonetic: '/ˌænɪˈvɜːrsəri/', definition: '周年纪念日', example: 'We shared a post to celebrate our wedding anniversary.', emoji: '🎉' },
                { word: 'streaming', level: 'basic', phonetic: '/ˈstriːmɪŋ/', definition: '直播；流媒体', example: 'Live streaming has become a very popular career choice.', emoji: '📡' },
                { word: 'thumbs-up', level: 'basic', phonetic: '/ˌθʌmz ˈʌp/', definition: '点赞；赞同', example: 'Give me a thumbs-up if you agree with my idea.', emoji: '👍' },
                { word: 'traffic', level: 'basic', phonetic: '/ˈtræfɪk/', definition: '（信息/网络）流量', example: 'The website gets a lot of traffic after the advertisement.', emoji: '📈' },
                { word: 'vlog', level: 'basic', phonetic: '/vlɒɡ/', definition: '视频博客', example: 'I decided to start a vlog to record my daily life.', emoji: '🤳' },
                { word: 'vlogger', level: 'basic', phonetic: '/ˈvlɒɡər/', definition: '视频创作者', example: 'A famous vlogger recommended this new restaurant.', emoji: '🎥' },
                { word: 'private message', level: 'basic', phonetic: '/ˈpraɪvət ˈmesɪdʒ/', definition: '私信', example: 'You can send me a private message for more details.', emoji: '📩' },
                { word: 'public account', level: 'basic', phonetic: '/ˈpʌblɪk əˈkaʊnt/', definition: '公众号', example: 'I follow several public accounts for news and tips.', emoji: '📢' },
                { word: 'search engine', level: 'basic', phonetic: '/ˈsɜːrtʃ ˈendʒɪn/', definition: '搜索引擎', example: 'I use a search engine to find information for my projects.', emoji: '🔍' },
                { word: 'short video', level: 'basic', phonetic: '/ʃɔːrt ˈvɪdioʊ/', definition: '短视频', example: 'TikTok is a platform famous for sharing short videos.', emoji: '📱' },
                { word: 'social network', level: 'basic', phonetic: '/ˈsoʊʃl ˈnetwɜːrk/', definition: '社交网络', example: 'Facebook is one of the largest social networks in the world.', emoji: '🌐' },
                { word: 'social status', level: 'basic', phonetic: '/ˈsoʊʃl ˈsteɪtəs/', definition: '社会地位', example: 'Some people use social media to show off their social status.', emoji: '💎' },
                // 进阶 (Advanced)
                { word: 'blacklist', level: 'advanced', phonetic: '/ˈblæk lɪst/', definition: '黑名单', example: 'I had to put that person on my blacklist after the argument.', emoji: '🚫' },
                { word: 'smartphone addict', level: 'advanced', phonetic: '/ˈsmɑːrtfoʊn ˈædɪkt/', definition: '智能手机成瘾者', example: 'Many teenagers have become smartphone addicts nowadays.', emoji: '📵' },
                { word: 'buzzword', level: 'advanced', phonetic: '/ˈbʌzwɜːrd/', definition: '时髦术语；流行语', example: '"AI" has become a major buzzword in the tech industry.', emoji: '🐝' },
                { word: 'smombie', level: 'advanced', phonetic: '/ˈsmɒmbi/', definition: '手机低头族 (smartphone + zombie)', example: 'Don\'t be a smombie; watch where you are walking!', emoji: '🧟' },
                { word: 'troll', level: 'advanced', phonetic: '/troʊl/', definition: '发挑衅帖子的人；网络杠精', example: 'It\'s best to ignore an online troll rather than arguing.', emoji: '👹' },
            ]
        },
        {
            title: '2. 常见动词与操作 (Verbs & Actions)',
            words: [
                // 基础 (Basic)
                { word: 'download', level: 'basic', phonetic: '/ˌdaʊnˈloʊd/', definition: '下载', example: 'You can download the app from the store.', emoji: '📥' },
                { word: 'follow', level: 'basic', phonetic: '/ˈfɒloʊ/', definition: '关注', example: 'Don\'t forget to follow me for more updates.', emoji: '➕' },
                { word: 'forward', level: 'basic', phonetic: '/ˈfɔːrwərd/', definition: '转发', example: 'Could you forward that email to me?', emoji: '➡️' },
                { word: 'post', level: 'basic', phonetic: '/poʊst/', definition: '发布；帖子', example: 'I just shared a new post on Instagram.', emoji: '📮' },
                { word: 'repost', level: 'basic', phonetic: '/ˌriːˈpoʊst/', definition: '转发', example: 'Many people reposted the news on their own pages.', emoji: '🔁' },
                { word: 'share', level: 'basic', phonetic: '/ʃer/', definition: '分享', example: 'Sharing good news with friends makes me happy.', emoji: '📤' },
                { word: 'subscribe', level: 'basic', phonetic: '/səbˈskraɪb/', definition: '订阅', example: 'Subscribe to my channel for more English lessons.', emoji: '📺' },
                { word: 'unfollow', level: 'basic', phonetic: '/ˌʌnˈfɒloʊ/', definition: '取消关注', example: 'I decided to unfollow accounts that made me feel bad.', emoji: '❌' },
                { word: 'unfriend', level: 'basic', phonetic: '/ˌʌnˈfrend/', definition: '解除好友关系', example: 'He unfriended me after we had a big argument.', emoji: '💔' },
                { word: 'upload', level: 'basic', phonetic: '/ˌʌpˈloʊd/', definition: '上传', example: 'The video is taking a long time to upload.', emoji: '📤' },
                { word: 'interact with', level: 'basic', phonetic: '/ˌɪntərˈækt wɪð/', definition: '与...互动', example: 'Social media allows us to interact with people globally.', emoji: '🤝' },
                { word: 'get in touch with', level: 'basic', phonetic: '/ɡet ɪn tʌtʃ wɪð/', definition: '与...取得联系', example: 'I need to get in touch with my old classmates.', emoji: '📞' },
                { word: 'keep in contact with', level: 'basic', phonetic: '/kiːp ɪn ˈkɒntækt wɪð/', definition: '与...保持联系', example: 'Social media helps me keep in contact with my family.', emoji: '📧' },
                { word: 'keep in touch with', level: 'basic', phonetic: '/kiːp ɪn tʌtʃ wɪð/', definition: '与...保持联系', example: 'Let\'s keep in touch after we graduate!', emoji: '👋' },
                // 进阶 (Advanced)
                { word: 'swipe', level: 'advanced', phonetic: '/swaɪp/', definition: '左右滑屏', example: 'Just swipe left to see the next photo.', emoji: '↔️' },
                { word: 'scroll', level: 'advanced', phonetic: '/skroʊl/', definition: '上下滚动屏幕', example: 'I spent too much time scrolling through my feed.', emoji: '↕️' },
                { word: 'keep track of', level: 'advanced', phonetic: '/kiːp træk əv/', definition: '追踪；记录', example: 'It\'s hard to keep track of all the new trends.', emoji: '📍' },
                { word: 'scroll through', level: 'advanced', phonetic: '/skroʊl θruː/', definition: '滚动浏览', example: 'I like to scroll through my photos on the weekend.', emoji: '🖼️' },
            ]
        },
        {
            title: '3. 地道表达与现象 (Expressions & Phenomena)',
            words: [
                // 基础 (Basic)
                { word: 'in-person', level: 'basic', phonetic: '/ˌɪn ˈpɜːrsn/', definition: '亲身的；当面的', example: 'I prefer meeting friends in-person rather than online.', emoji: '🚶' },
                { word: 'a heavy user of', level: 'basic', phonetic: '/ə ˈhevi ˈjuːzər əv/', definition: '...的重度使用者', example: 'I admit I am a heavy user of social media apps.', emoji: '📱' },
                { word: 'be addicted to phone', level: 'basic', phonetic: '/biː əˈdɪktɪd tuː foʊn/', definition: '沉迷手机', example: 'Many people are addicted to their phones nowadays.', emoji: '😵' },
                { word: 'data privacy', level: 'basic', phonetic: '/ˈdeɪtə ˈpraɪvəsi/', definition: '信息隐私', example: 'Many users are concerned about their data privacy online.', emoji: '🔒' },
                { word: 'give sb. a like', level: 'basic', phonetic: '/ɡɪv ə laɪk/', definition: '给某人点赞', example: 'Don\'t forget to give this video a like!', emoji: '❤️' },
                { word: 'group chat', level: 'basic', phonetic: '/ɡruːp tʃæt/', definition: '群聊', example: 'We have a group chat for our weekend plans.', emoji: '👨‍👩‍👧‍👦' },
                { word: 'hot topic', level: 'basic', phonetic: '/hɒt ˈtɒpɪk/', definition: '热门话题', example: 'Sustainability is a hot topic in the fashion world.', emoji: '♨️' },
                { word: 'keep sb. updated', level: 'basic', phonetic: '/kiːp ʌpˈdeɪtɪd/', definition: '让某人了解最新动态', example: 'Please keep me updated on your progress.', emoji: '📢' },
                { word: 'keep up-to-date with', level: 'basic', phonetic: '/kiːp ʌp tu deɪt wɪð/', definition: '跟上...的最新进展', example: 'I read news to keep up-to-date with world events.', emoji: '📅' },
                { word: 'latest news', level: 'basic', phonetic: '/ˈlɪtɪst nuːz/', definition: '最新消息', example: 'Have you heard the latest news about the concert?', emoji: '🆕' },
                { word: 'online advertising', level: 'basic', phonetic: '/ˈɒnlaɪn ˈædvərtaɪzɪŋ/', definition: '在线广告', example: 'Online advertising can be very targeted and effective.', emoji: '💰' },
                { word: 'online community', level: 'basic', phonetic: '/ˈɒnlaɪn kəˈmjuːnəti/', definition: '在线社区', example: 'I belong to an online community for photography lovers.', emoji: '🏘️' },
                { word: 'online game', level: 'basic', phonetic: '/ˈɒnlaɪn ɡeɪm/', definition: '网络游戏', example: 'My brother spends too much time playing online games.', emoji: '🎮' },
                { word: 'online shopping', level: 'basic', phonetic: '/ˈɒnlaɪn ˈʃɒpɪŋ/', definition: '网络购物', example: 'Online shopping is much more convenient for me.', emoji: '🛒' },
                { word: 'subscribe to', level: 'basic', phonetic: '/səbˈskraɪb tuː/', definition: '订阅', example: 'You should subscribe to her newsletter.', emoji: '🛎️' },
                { word: 'trending topic', level: 'basic', phonetic: '/ˈtrendɪŋ ˈtɒpɪk/', definition: '热门话题', example: 'The Olympics is the top trending topic today.', emoji: '🔝' },
                { word: 'video call', level: 'basic', phonetic: '/ˈvɪdioʊ kɔːl/', definition: '视频电话', example: 'I had a long video call with my parents last night.', emoji: '📹' },
                // 进阶 (Advanced)
                { word: 'be attached to phone', level: 'advanced', phonetic: '/biː əˈtætʃt tuː foʊn/', definition: '沉迷手机 (离不开)', example: 'She seems to be constantly attached to her phone.', emoji: '🔗' },
                { word: 'be glued to phone', level: 'advanced', phonetic: '/biː ɡluːd tuː foʊn/', definition: '沉迷手机 (粘在手机上)', example: 'He was so glued to his phone that he didn\'t hear me.', emoji: '🧪' },
                { word: 'breaking news', level: 'advanced', phonetic: '/ˈbreɪkɪŋ nuːz/', definition: '突发新闻', example: 'We interrupted the program to bring you some breaking news.', emoji: '🚨' },
                { word: 'current affair', level: 'advanced', phonetic: '/ˈkɜːrənt əˈfer/', definition: '时事', example: 'I use social media to keep up with current affairs.', emoji: '🗞️' },
                { word: 'hit a like', level: 'advanced', phonetic: '/hɪt ə laɪk/', definition: '点赞', example: 'I usually hit a like on my friends\' travel photos.', emoji: '🖱️' },
                { word: 'go viral', level: 'advanced', phonetic: '/ɡoʊ ˈvaɪrəl/', definition: '病毒式传播；走红', example: 'His funny cat video went viral overnight.', emoji: '🔥' },
                { word: 'indulge in phone', level: 'advanced', phonetic: '/ɪnˈdʌldʒ ɪn foʊn/', definition: '沉迷手机', example: 'We shouldn\'t indulge in our phones during dinner.', emoji: '🛀' },
                { word: 'instant communication', level: 'advanced', phonetic: '/ˈɪnstənt kəˌmjuːnɪˈkeɪʃn/', definition: '即时通信', example: 'The internet provides us with instant communication.', emoji: '⚡' },
                { word: 'instant message', level: 'advanced', phonetic: '/ˈɪnstənt ˈmesɪdʒ/', definition: '即时消息', example: 'I sent him an instant message on WeChat.', emoji: '💬' },
                { word: 'at your fingertips', level: 'advanced', phonetic: '/ət jər ˈfɪŋɡərtɪps/', definition: '触手可及；精通', example: 'With a smartphone, information is literally at your fingertips.', emoji: '🖐️' },
                { word: 'attention grabber', level: 'advanced', phonetic: '/əˈtenʃn ˈɡræbər/', definition: '流量密码；吸引注意的东西', example: 'The bright colors were a real attention grabber.', emoji: '👀' },
                { word: 'social butterfly', level: 'advanced', phonetic: '/ˈsoʊʃl ˈbʌtərflaɪ/', definition: '社牛', example: 'She is a real social butterfly and knows everyone.', emoji: '🦋' },
                { word: 'social media junkie', level: 'advanced', phonetic: '/ˈsoʊʃl ˈmiːdiə ˈdʒʌŋki/', definition: '沉迷于社交媒体的人', example: 'I used to be a social media junkie, checking my phone every five minutes.', emoji: '🤤' },
                { word: 'social phobia', level: 'advanced', phonetic: '/ˈsoʊʃl ˈfoʊbiə/', definition: '社恐', example: 'Some people suffer from social phobia in large crowds.', emoji: '😨' },
            ]
        }
    ]
};