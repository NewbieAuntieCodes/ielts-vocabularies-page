
import { SubTopic } from './data-types';

export const studyWork: SubTopic = {
    id: 'p1-study-work',
    title: 'Study or work',
    type: '基础题',
    color: 'blue',
    section: 'Part 1',
    wordSections: [
        {
            title: '学习类 (Study)',
            words: [
                { word: 'major in', level: 'basic', phonetic: '/ˈmeɪdʒər ɪn/', definition: '主修', example: 'I major in computer science at university.', emoji: '🎓' },
                { word: 'curriculum', level: 'advanced', phonetic: '/kəˈrɪkjələm/', definition: '课程', example: 'The school is introducing a new curriculum next year.', emoji: '📖' },
                { word: 'assignment', level: 'basic', phonetic: '/əˈsaɪnmənt/', definition: '作业/任务', example: 'I have a big assignment due next Monday.', emoji: '📝' },
                { word: 'tutorial', level: 'advanced', phonetic: '/tuːˈtɔːriəl/', definition: '辅导课', example: 'Small group tutorials are very helpful for discussion.', emoji: '🏫' },
                { word: 'overwhelming', level: 'advanced', phonetic: '/ˌoʊvərˈwelmɪŋ/', definition: '压力巨大的', example: 'The workload can be a bit overwhelming sometimes.', emoji: '😫' },
            ]
        },
        {
            title: '工作类 (Work)',
            words: [
                { word: 'occupation', level: 'basic', phonetic: '/ˌɑːkjuˈpeɪʃn/', definition: '职业', example: 'Please state your name and occupation.', emoji: '💼' },
                { word: 'colleague', level: 'basic', phonetic: '/ˈkɑːliːɡ/', definition: '同事', example: 'I get along very well with my colleagues.', emoji: '🤝' },
                { word: 'workload', level: 'basic', phonetic: '/ˈwɜːrkloʊd/', definition: '工作量', example: 'The management is trying to reduce the staff workload.', emoji: '📂' },
                { word: 'rewarding', level: 'advanced', phonetic: '/rɪˈwɔːrdɪŋ/', definition: '有回报的/值得的', example: 'Teaching is a very rewarding career.', emoji: '✨' },
                { word: 'commute', level: 'advanced', phonetic: '/kəˈmjuːt/', definition: '通勤', example: 'My daily commute takes about 40 minutes.', emoji: '🚆' },
            ]
        }
    ]
};
