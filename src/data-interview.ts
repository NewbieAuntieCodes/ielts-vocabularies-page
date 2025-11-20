import { IeltsTopic, SubTopic } from './data-types';

export const universityInterview: SubTopic = {
    id: 'university-interview',
    title: 'University Interview Speaking',
    type: '事件题',
    color: 'purple',
    isNew: true,
    wordSections: [
        {
            title: '基础词汇',
            words: [
                { word: 'apply for', phonetic: '/əˈplaɪ fɔːr/', definition: '申请', example: 'I decided to apply for this program because of its excellent reputation.', emoji: '📝' },
                { word: 'Bachelor', phonetic: '/ˈbætʃələr/', definition: '学士学位', example: 'I am currently studying for my Bachelor\'s degree.', emoji: '🎓' },
                { word: 'analyze', phonetic: '/ˈænəlaɪz/', definition: '分析', example: 'We need to analyze the results of the experiment.', emoji: '📊' },
                { word: 'practical', phonetic: '/ˈpræktɪkl/', definition: '实用的', example: 'This course provides practical skills for future employment.', emoji: '🛠️' },
                { word: 'materials', phonetic: '/məˈtɪriəlz/', definition: '材料', example: 'I am interested in researching new sustainable materials.', emoji: '🧱' },
                { word: 'recycling', phonetic: '/ˌriːˈsaɪklɪŋ/', definition: '回收利用', example: 'Recycling paper and plastic is a simple way to help the environment.', emoji: '♻️' },
                { word: 'fit for', phonetic: '/fɪt fɔːr/', definition: '适合', example: 'I believe I am fit for this university because of my passion for learning.', emoji: '🧩' },
                { word: 'reduce', phonetic: '/rɪˈduːs/', definition: '减少', example: 'We aim to reduce waste by using reusable bags.', emoji: '📉' },
                { word: 'waste', phonetic: '/weɪst/', definition: '浪费；废物', example: 'We should try to minimize food waste.', emoji: '🗑️' },
                { word: 'planet', phonetic: '/ˈplænɪt/', definition: '星球；地球', example: 'Protecting our planet is a global responsibility.', emoji: '🌍' },
                { word: 'regular', phonetic: '/ˈreɡjələr/', definition: '定期的', example: 'Regular study habits are key to success.', emoji: '📅' },
                { word: 'methods', phonetic: '/ˈmeθədz/', definition: '方法', example: 'I enjoy learning about different research methods.', emoji: '📝' },
                { word: 'track', phonetic: '/træk/', definition: '追踪；轨迹', example: 'I track my learning progress every week.', emoji: '👣' },
                { word: 'eager', phonetic: '/ˈiːɡər/', definition: '渴望的', example: 'I am eager to join your academic community.', emoji: '🙋‍♂️' },
            ]
        },
        {
            title: '进阶词汇',
            words: [
                { word: 'sustainable', phonetic: '/səˈsteɪnəbl/', definition: '可持续的', example: 'Sustainable development is crucial for our future.', emoji: '🌱' },
                { word: 'sustainability', phonetic: '/səˌsteɪnəˈbɪləti/', definition: '可持续性', example: 'The university has a strong commitment to sustainability.', emoji: '🌍' },
                { word: 'do research on', phonetic: '/duː rɪˈsɜːrtʃ ɒn/', definition: '从事...的研究', example: 'I plan to do research on renewable energy sources.', emoji: '🔬' },
                { word: 'academically', phonetic: '/ˌækəˈdemɪkli/', definition: '学术上', example: 'I have prepared myself academically for the challenges of this degree.', emoji: '📚' },
                { word: 'swapping', phonetic: '/swɒpɪŋ/', definition: '交换', example: 'We can reduce waste by swapping items we no longer need instead of buying new ones.', emoji: '🔄' },
                { word: 'hazy days', phonetic: '/ˈheɪzi deɪz/', definition: '雾霾天', example: 'The hazy days inspired me to study environmental science.', emoji: '🌫️' },
                { word: 'spark', phonetic: '/spɑːrk/', definition: '激发；火花', example: 'This book sparked my passion for engineering.', emoji: '⚡' },
                { word: 'figure out', phonetic: '/ˈfɪɡjər aʊt/', definition: '弄清楚；解决', example: 'I love trying to figure out complex problems.', emoji: '🧩' },
                { word: 'dive into', phonetic: '/daɪv ˈɪntuː/', definition: '深入探究', example: 'I want to dive into the details of this theory.', emoji: '🏊' },
                { word: 'cutting-edge', phonetic: '/ˌkʌtɪŋ ˈedʒ/', definition: '尖端的；前沿的', example: 'I look forward to working with cutting-edge technology.', emoji: '🔭' },
                { word: 'optimize', phonetic: '/ˈɑːptɪmaɪz/', definition: '优化', example: 'We can optimize the process to save time and resources.', emoji: '🚀' },
                { word: 'master', phonetic: '/ˈmæstər/', definition: '精通；掌握', example: 'My goal is to master the skills needed for this profession.', emoji: '🥋' },
                { word: 'contribute', phonetic: '/kənˈtrɪbjuːt/', definition: '贡献', example: 'I want to contribute to the university\'s research team.', emoji: '🤝' },
            ]
        }
    ]
};

export const interviewTopic: IeltsTopic = {
    title: '话题: 面试口语',
    subTopics: [
        universityInterview,
    ],
};