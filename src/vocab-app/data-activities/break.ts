import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const breakTopic: SubTopic = {
    id: 'break',
    title: 'Having a break',
    type: '事件题',
    color: 'blue',
    words: getManyFromPool([
      'unwind',
      'recharge',
      'leisure',
      'have a rest',
      'take it easy',
      'chill',
      'refresh',
      'take a nap',
      'peaceful',
      'relax',
      'rest',
      'calm',
      'hobby'
    ]),
};