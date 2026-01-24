
import { IeltsTopic } from './data-types';
import { rules } from './data-rules';
import { advertisement } from './data-advertisement';
import { shoes } from './data-shoes';

export const thingsTopic: IeltsTopic = {
    title: '话题: 事物',
    section: 'Part 1',
    subTopics: [
      advertisement,
      rules,
      shoes,
    ],
};
