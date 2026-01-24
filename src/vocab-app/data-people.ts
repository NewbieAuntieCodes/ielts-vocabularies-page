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
    words: getManyFromPool([
      'respectful',
      'patient',
      'generation gap',
      'wisdom',
      'companionship',
      'caretakers',
      'caregivers',
      'gentle',
      'thoughtful',
      'wise',
      'rewarding',
      'keep them company',
      'accompany'
    ]),
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
