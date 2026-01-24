
import { SubTopic } from './data-types';

export const hometown: SubTopic = {
    id: 'p1-hometown',
    title: 'Hometown',
    type: '基础题',
    color: 'green',
    section: 'Part 1',
    wordSections: [
        {
            title: '基础描述',
            words: [
                { word: 'birthplace', level: 'basic', phonetic: '/ˈbɜːrθpleɪs/', definition: '出生地', example: 'Beijing is my birthplace and I grew up there.', emoji: '🏠' },
                { word: 'scenery', level: 'basic', phonetic: '/ˈsiːnəri/', definition: '风景', example: 'The scenery in my hometown is breathtaking.', emoji: '🏔️' },
                { word: 'residents', level: 'basic', phonetic: '/ˈrezɪdənts/', definition: '居民', example: 'The local residents are very friendly and welcoming.', emoji: '🧑‍🤝‍🧑' },
                { word: 'historical', level: 'basic', phonetic: '/hɪˈstɔːrɪkl/', definition: '历史悠久的', example: 'There are many historical buildings in the city center.', emoji: '🏛️' },
            ]
        },
        {
            title: '进阶描述',
            words: [
                { word: 'urbanization', level: 'advanced', phonetic: '/ˌɜːrbənaɪˈzeɪʃn/', definition: '城市化', example: 'The town has seen rapid urbanization in recent years.', emoji: '🏙️' },
                { word: 'pace of life', level: 'advanced', phonetic: '/peɪs əv laɪf/', definition: '生活节奏', example: 'I prefer the slow pace of life in my hometown.', emoji: '⏳' },
                { word: 'metropolis', level: 'advanced', phonetic: '/məˈtrɑːpəlɪs/', definition: '大都市', example: 'My hometown has transformed into a bustling metropolis.', emoji: '🌃' },
                { word: 'local delicacy', level: 'advanced', phonetic: '/ˈloʊkl ˈdelɪkəsi/', definition: '当地美食', example: 'You must try the local delicacy when you visit.', emoji: '🍲' },
                { word: 'sentimental value', level: 'advanced', phonetic: '/ˌsentɪˈmentl ˈvæljuː/', definition: '情感价值', example: 'This old park has great sentimental value to me.', emoji: '💖' },
            ]
        }
    ]
};
