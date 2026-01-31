import { IeltsTopic, SubTopic, Word } from './data-types';
import { getManyFromPool } from './pool/utils';

const w = (
    word: string,
    phonetic: string,
    definition: string,
    example: string,
    emoji: string,
    level: Word['level'],
): Word => ({
    word,
    phonetic,
    definition,
    example,
    emoji,
    level,
});

export const interviewSelfIntroduction: SubTopic = {
    id: 'interview-self-introduction',
    title: 'Self-introduction 自我介绍',
    type: '面试口语',
    color: 'purple',
    section: 'Part 2 & 3',
    wordSections: [
        {
            title: '题目词汇 (Question Words)',
            words: [
                w('family background', '/ˈfæməli ˈbækɡraʊnd/', '家庭背景', 'Could you briefly describe your family background?', '🏠', 'basic'),
                w('grow up', '/ɡroʊ ʌp/', '长大；成长', 'Where did you grow up?', '🌱', 'basic'),
                w('special meaning', '/ˈspeʃl ˈmiːnɪŋ/', '特殊含义', 'Does your name have any special meaning?', '✨', 'basic'),
                w('briefly', '/ˈbriːfli/', '简要地', 'Could you briefly introduce yourself?', '📝', 'basic'),
                w('introduce', '/ˌɪntrəˈduːs/', '介绍', 'Please introduce yourself.', '🙋‍♂️', 'basic'),
                w('describe', '/dɪˈskraɪb/', '描述', 'Please describe yourself in a few words.', '🗣️', 'basic'),
            ],
        },
        {
            title: '话题词汇 (Topic Words)',
            words: [
                w('introduce myself', '/ˌɪntrəˈduːs maɪˈself/', '自我介绍', 'Let me introduce myself. My name is Leo.', '🙋‍♂️', 'basic'),
                w('background', '/ˈbækɡraʊnd/', '背景；经历', 'I come from a science background.', '🧾', 'basic'),
                w('come from', '/kʌm frʌm/', '来自', 'I come from Hangzhou, China.', '🌍', 'basic'),
                w('currently', '/ˈkʌrəntli/', '目前；现在', 'I am currently a second-year student.', '⏳', 'basic'),
                ...getManyFromPool(['major', 'major in'], 'basic'),
                w('apply for', '/əˈplaɪ fɔːr/', '申请', 'I decided to apply for this program because of its excellent reputation.', '📝', 'basic'),
                w('fit for', '/fɪt fɔːr/', '适合', 'I believe I am fit for this program because I am highly motivated.', '🧩', 'basic'),
                w('eager', '/ˈiːɡər/', '渴望的', 'I am eager to learn from experienced professors.', '🙋‍♂️', 'basic'),
                w('strength', '/streŋkθ/', '优势；长处', 'One of my strengths is communication.', '💪', 'basic'),
                w('weakness', '/ˈwiːknəs/', '弱点；不足', 'One weakness is that I sometimes overthink.', '🪫', 'basic'),
                w('goal', '/ɡoʊl/', '目标', 'My goal is to become more confident in public speaking.', '🎯', 'basic'),
                w('motivation', '/ˌmoʊtɪˈveɪʃn/', '动机', 'My motivation comes from my curiosity about technology.', '🔥', 'advanced'),
                w('aspire to', '/əˈspaɪər tuː/', '立志；渴望', 'I aspire to become a researcher in this field.', '🌟', 'advanced'),
                w('short-term goal', '/ˌʃɔːrt tɜːrm ɡoʊl/', '短期目标', 'My short-term goal is to build a solid academic foundation.', '🧭', 'advanced'),
                w('long-term goal', '/ˌlɔːŋ tɜːrm ɡoʊl/', '长期目标', 'My long-term goal is to work on meaningful projects.', '🗺️', 'advanced'),
                w('align with', '/əˈlaɪn wɪð/', '与…契合', 'This major aligns with my interests and skills.', '🧩', 'advanced'),
                w('spark', '/spɑːrk/', '激发；火花', 'This book sparked my passion for engineering.', '⚡', 'advanced'),
                w('contribute', '/kənˈtrɪbjuːt/', '贡献', 'I want to contribute to your academic community.', '🤝', 'advanced'),
                ...getManyFromPool(['self-disciplined', 'well-rounded'], 'advanced'),
            ],
        },
    ],
};

export const interviewHobbies: SubTopic = {
    id: 'interview-hobbies',
    title: 'Hobbies & Interests 爱好',
    type: '面试口语',
    color: 'purple',
    section: 'Part 2 & 3',
    wordSections: [
        {
            title: '题目词汇 (Question Words)',
            words: [
                w('special interests', '/ˈspeʃl ˈɪntrəsts/', '特别兴趣', 'Do you have any special interests?', '✨', 'basic'),
                w('flat', '/flæt/', '公寓（英）', 'Do you live in a flat or a house?', '🏢', 'basic'),
                w('holidays', '/ˈhɑːlədeɪz/', '假期', 'What do you usually do on holidays?', '🏖️', 'basic'),
                w('vacations', '/vəˈkeɪʃənz/', '度假；假期', 'Where do you want to go for vacations?', '🧳', 'basic'),
                w('present school', '/ˈpreznt skuːl/', '现在的学校', 'How do you feel about your present school?', '🏫', 'basic'),
                w('free time', '/friː taɪm/', '空闲时间', 'What do you do in your free time?', '🕒', 'basic'),
                w('typical day', '/ˈtɪpɪkl deɪ/', '典型的一天', 'What is a typical day like for you?', '📅', 'basic'),
                ...getManyFromPool(['enough'], 'basic'),
                w('TV programme', '/ˌtiː ˈviː ˈproʊɡræm/', '电视节目', 'What TV programmes do you like?', '📺', 'basic'),
                w('contest', '/ˈkɑːntest/', '比赛；竞赛', 'Have you ever entered a contest?', '🏆', 'basic'),
                w('texting', '/ˈtekstɪŋ/', '发短信；发消息', 'Do you like texting?', '💬', 'basic'),
                w('send a message', '/send ə ˈmesɪdʒ/', '发消息', 'Do you often send a message to your friends?', '📤', 'basic'),
                w('receive a message', '/rɪˈsiːv ə ˈmesɪdʒ/', '收消息', 'Do you receive a message every day?', '📥', 'basic'),
                w('circumstance', '/ˈsɜːrkəmstæns/', '情况', 'In what circumstances would you make a phone call?', '🧩', 'basic'),
                w('make a phone call', '/meɪk ə foʊn kɔːl/', '打电话', 'When do you make a phone call instead of texting?', '📞', 'basic'),
                w('sit by a window', '/sɪt baɪ ə ˈwɪndoʊ/', '坐在窗边', 'Do you like to sit by a window on a train?', '🪟', 'basic'),
                w('comedy', '/ˈkɑːmədi/', '喜剧', 'Do you enjoy comedy films?', '😂', 'basic'),
                w('online', '/ˌɑːnˈlaɪn/', '在线；网上', 'Do you watch TV programmes online?', '🌐', 'basic'),
                w('recently', '/ˈriːsntli/', '最近', 'Have you watched anything interesting recently?', '🕒', 'basic'),
            ],
        },
        {
            title: '话题词汇 (Topic Words)',
            words: [
                ...getManyFromPool(['hobby', 'leisure', 'leisure activity', 'unwind', 'kill the time', 'entertainment'], 'basic'),
                w('in my spare time', '/ɪn maɪ sper taɪm/', '在空闲时间', 'In my spare time, I usually listen to podcasts.', '🕒', 'basic'),
                w('be keen on', '/biː kiːn ɑːn/', '热衷于', 'I am keen on photography and street snapshots.', '📸', 'advanced'),
                w('take up', '/teɪk ʌp/', '开始培养（爱好）；学起', 'I took up badminton last year and I love it.', '🏸', 'advanced'),
                w('pursue', '/pərˈsuː/', '追求；从事', 'I pursue hobbies that keep me curious and creative.', '🎯', 'advanced'),
                w('broaden my horizons', '/ˈbrɔːdn maɪ həˈraɪznz/', '开阔眼界', 'Travel helps me broaden my horizons.', '🌍', 'advanced'),
                w('recharge', '/ˌriːˈtʃɑːrdʒ/', '充电；恢复精力', 'Reading fiction helps me recharge after a busy week.', '🔋', 'advanced'),
                w('rewarding', '/rɪˈwɔːrdɪŋ/', '有回报的；值得的', 'Volunteering is tiring but rewarding.', '🏅', 'advanced'),
            ],
        },
    ],
};

export const interviewPersonality: SubTopic = {
    id: 'interview-personality',
    title: 'Personality 性格',
    type: '面试口语',
    color: 'purple',
    section: 'Part 2 & 3',
    wordSections: [
        {
            title: '题目词汇 (Question Words)',
            words: [
                w('talkative', '/ˈtɔːkətɪv/', '健谈的', 'Would you describe yourself as talkative?', '🗣️', 'basic'),
                w('adjectives', '/ˈædʒɪktɪvz/', '形容词', 'Which adjectives best describe your personality?', '🏷️', 'basic'),
                w('personality', '/ˌpɜːrsəˈnæləti/', '性格；个性', 'How would you describe your personality?', '🎭', 'basic'),
                w('describe', '/dɪˈskraɪb/', '描述', 'Can you describe yourself in a few words?', '🗣️', 'basic'),
                w('handwriting', '/ˈhændˌraɪtɪŋ/', '字迹；笔迹', 'How would you describe your handwriting?', '✍️', 'basic'),
                w('unique', '/juːˈniːk/', '独特的', 'What makes you unique?', '✨', 'basic'),
                w('greatest', '/ˈɡreɪtɪst/', '最大的；最棒的', 'What is your greatest strength?', '🏆', 'basic'),
                w('strength', '/streŋkθ/', '优势；长处', 'One strength of mine is that I learn fast.', '💪', 'basic'),
                w('weakness', '/ˈwiːknəs/', '弱点；不足', 'My weakness is that I can be nervous at first.', '🪫', 'basic'),
                w('role model', '/roʊl ˈmɑːdl/', '榜样；模范', 'Who is your role model?', '🌟', 'basic'),
                w('public figure', '/ˈpʌblɪk ˈfɪɡjər/', '公众人物', 'Is there a public figure you admire?', '🎙️', 'basic'),
                w('admire', '/ədˈmaɪər/', '钦佩；欣赏', 'I admire her for her perseverance.', '👏', 'basic'),
                w('inspire', '/ɪnˈspaɪər/', '启发；鼓舞', 'My teacher inspires me to work hard.', '✨', 'basic'),
                w('influence', '/ˈɪnfluəns/', '影响', 'My parents have a big influence on me.', '🌊', 'basic'),
                w('good luck', '/ɡʊd lʌk/', '好运', 'Do you believe good luck plays a role in success?', '🍀', 'basic'),
                w('bad luck', '/bæd lʌk/', '坏运气', 'Sometimes bad luck happens, but I try to stay positive.', '😓', 'basic'),
            ],
        },
        {
            title: '基础词汇',
            words: getManyFromPool([
                'friendly',
                'sociable',
                'confident',
                'hard-working',
                'careful',
                'reliable',
                'responsible',
                'honest',
                'humorous',
                'open-minded',
                'patient',
                'punctual',
                'independent',
                'creative',
                'curious',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: [
                ...getManyFromPool([
                    'adaptable',
                    'ambitious',
                    'analytical',
                    'diligent',
                    'quick-witted',
                    'rational',
                    'self-reliant',
                    'strong-willed',
                    'well-educated',
                    'well-rounded',
                    'worldly-wise',
                ], 'advanced'),
                w('proactive', '/proʊˈæktɪv/', '主动的；积极采取行动的', 'I am proactive and I like to solve problems early.', '🚀', 'advanced'),
                w('detail-oriented', '/ˈdiːteɪl ˈɔːrientɪd/', '注重细节的', 'I am detail-oriented when writing reports.', '🔍', 'advanced'),
            ],
        },
    ],
};

export const interviewSchool: SubTopic = {
    id: 'interview-school',
    title: 'School & Campus 学校',
    type: '面试口语',
    color: 'purple',
    section: 'Part 2 & 3',
    wordSections: [
        {
            title: '基础词汇',
            words: [
                w('campus', '/ˈkæmpəs/', '校园', 'The university campus is beautiful and has great facilities.', '🏫', 'basic'),
                ...getManyFromPool(['university', 'undergraduate', 'library'], 'basic'),
                w('facilities', '/fəˈsɪlətiz/', '设施', 'Our school has excellent sports facilities.', '🏟️', 'basic'),
                w('dormitory', '/ˈdɔːrmətɔːri/', '宿舍', 'I lived in a dormitory during my first year.', '🛏️', 'basic'),
                w('classmate', '/ˈklæsmeɪt/', '同学', 'My classmates are friendly and supportive.', '👥', 'basic'),
            ],
        },
        {
            title: '进阶词汇',
            words: [
                w('off-campus', '/ɔːf ˈkæmpəs/', '校外的', 'I also plan to explore off-campus opportunities in the city.', '🏙️', 'advanced'),
                w('diverse', '/daɪˈvɜːrs/', '多元的', 'I enjoy studying in a diverse environment.', '🌈', 'advanced'),
                w('inclusive', '/ɪnˈkluːsɪv/', '包容的', 'It is important to create an inclusive campus for everyone.', '🤗', 'advanced'),
                w('extracurricular activities', '/ˌekstrəkəˈrɪkjələr ækˈtɪvətiz/', '课外活动', 'Extracurricular activities helped me build confidence.', '🎉', 'advanced'),
            ],
        },
    ],
};

export const interviewStudy: SubTopic = {
    id: 'interview-study',
    title: 'Study & Major 学习',
    type: '面试口语',
    color: 'purple',
    section: 'Part 2 & 3',
    wordSections: [
        {
            title: '基础词汇',
            words: [
                w('Bachelor', '/ˈbætʃələr/', '学士学位', 'I am currently studying for my Bachelor\'s degree.', '🎓', 'basic'),
                ...getManyFromPool(['course', 'compulsory course', 'optional course', 'assignment'], 'basic'),
                w('analyze', '/ˈænəlaɪz/', '分析', 'We need to analyze the results of the experiment.', '📊', 'basic'),
                w('practical', '/ˈpræktɪkl/', '实用的', 'This course provides practical skills for future employment.', '🛠️', 'basic'),
                w('methods', '/ˈmeθədz/', '方法', 'I enjoy learning about different research methods.', '📝', 'basic'),
                w('track', '/træk/', '追踪；记录', 'I track my learning progress every week.', '👣', 'basic'),
            ],
        },
        {
            title: '进阶词汇',
            words: [
                w('academically', '/ˌækəˈdemɪkli/', '学术上', 'I have prepared myself academically for the challenges of this degree.', '📚', 'advanced'),
                w('do research on', '/duː rɪˈsɜːrtʃ ɒn/', '从事…的研究', 'I plan to do research on renewable energy sources.', '🔬', 'advanced'),
                w('figure out', '/ˈfɪɡjər aʊt/', '弄清楚；解决', 'I love trying to figure out complex problems.', '🧩', 'advanced'),
                w('dive into', '/daɪv ˈɪntuː/', '深入探究', 'I want to dive into the details of this topic.', '🏊', 'advanced'),
                w('cutting-edge', '/ˌkʌtɪŋ ˈedʒ/', '尖端的；前沿的', 'I look forward to working with cutting-edge technology.', '🔭', 'advanced'),
                w('optimize', '/ˈɑːptɪmaɪz/', '优化', 'We can optimize the process to save time and resources.', '🚀', 'advanced'),
                w('master', '/ˈmæstər/', '精通；掌握', 'My goal is to master the skills needed for this profession.', '🥋', 'advanced'),
            ],
        },
    ],
};

export const interviewFamilyFriends: SubTopic = {
    id: 'interview-family-friends',
    title: 'Family & Friends 家庭朋友',
    type: '面试口语',
    color: 'purple',
    section: 'Part 2 & 3',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'supportive family',
                'emotional support',
                'interpersonal relationship',
                'common interest',
                'get along with',
                'stay in touch',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'joy and sorrow',
                'bosom friend',
                'close-knit community',
                'kindred spirit',
                'people from all walks of life',
                'party pooper',
            ], 'advanced'),
        },
    ],
};

export const interviewExperiences: SubTopic = {
    id: 'interview-experiences',
    title: 'Activities & Experiences 活动经历',
    type: '面试口语',
    color: 'purple',
    section: 'Part 2 & 3',
    wordSections: [
        {
            title: '基础词汇',
            words: [
                w('events', '/ɪˈvents/', '活动', 'I plan to participate in various social and academic events.', '🎉', 'basic'),
                w('hire', '/haɪər/', '雇用', 'Many companies come to campus to hire graduates.', '🤝', 'basic'),
                w('industry', '/ˈɪndəstri/', '行业', 'I want to gain experience in the technology industry.', '🏭', 'basic'),
                w('links', '/lɪŋks/', '联系；纽带', 'The university has strong links with the local community.', '🔗', 'basic'),
                ...getManyFromPool(['teamwork', 'leadership'], 'basic'),
                w('recycling', '/ˌriːˈsaɪklɪŋ/', '回收利用', 'Recycling paper and plastic is a simple way to help the environment.', '♻️', 'basic'),
                w('reduce', '/rɪˈduːs/', '减少', 'We aim to reduce waste by using reusable bags.', '📉', 'basic'),
                w('waste', '/weɪst/', '浪费；废物', 'We should try to minimize food waste.', '🗑️', 'basic'),
                w('planet', '/ˈplænɪt/', '星球；地球', 'Protecting our planet is a global responsibility.', '🌍', 'basic'),
            ],
        },
        {
            title: '进阶词汇',
            words: [
                w('internship', '/ˈɪntɜːrnʃɪp/', '实习', 'I hope to complete an internship to gain practical experience.', '💼', 'advanced'),
                w('partnerships', '/ˈpɑːrtnərʃɪps/', '伙伴关系', 'The program offers partnerships with leading global companies.', '🤝', 'advanced'),
                w('connection', '/kəˈnekʃn/', '人脉；联系', 'Building a professional connection is vital for career growth.', '🌐', 'advanced'),
                w('sustainable', '/səˈsteɪnəbl/', '可持续的', 'Sustainable development is crucial for our future.', '🌱', 'advanced'),
                w('sustainability', '/səˌsteɪnəˈbɪləti/', '可持续性', 'The university has a strong commitment to sustainability.', '🌍', 'advanced'),
                w('swapping', '/swɒpɪŋ/', '交换', 'We can reduce waste by swapping items we no longer need.', '🔄', 'advanced'),
                w('hazy days', '/ˈheɪzi deɪz/', '雾霾天', 'The hazy days inspired me to study environmental science.', '🌫️', 'advanced'),
            ],
        },
    ],
};

export const interviewTopic: IeltsTopic = {
    title: '话题: 面试口语',
    section: 'Part 2 & 3',
    subTopics: [
        interviewSelfIntroduction,
        interviewHobbies,
        interviewPersonality,
        interviewSchool,
        interviewStudy,
        interviewFamilyFriends,
        interviewExperiences,
    ],
};
