import { IeltsTopic, SubTopic } from './data-types';
import { friends } from './data-friends';
import { chatting } from './data-chatting';
import { goingOut } from './data-going-out';
import { getManyFromPool } from './pool/utils';

const oldPeople: SubTopic = {
    id: 'old-people',
    title: 'Staying with old people',
    type: '事件题',
    color: 'blue',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'respectful',
                'patient',
                'wisdom',
                'gentle',
                'thoughtful',
                'wise',
                'keep them company',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'generation gap',
                'companionship',
                'caretakers',
                'caregivers',
                'rewarding',
                'accompany',
            ], 'advanced'),
        },
    ],
};

export const peopleTopic: IeltsTopic = {
    title: '话题: 人物与社交',
    section: 'Part 1',
    subTopics: [
      friends,
      oldPeople,
      chatting,
      goingOut,
    ],
};
