
import { IeltsTopic } from './data-types';
import { study } from './data-activities/study';
import { breakTopic } from './data-activities/break';

export const workStudyTopic: IeltsTopic = {
    title: '话题: 学习工作与休息',
    section: 'Part 1',
    subTopics: [
      study,
      breakTopic,
    ],
};
