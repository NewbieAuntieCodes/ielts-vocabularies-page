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
