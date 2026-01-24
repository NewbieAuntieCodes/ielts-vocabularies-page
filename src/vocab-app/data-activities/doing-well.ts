import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const doingWell: SubTopic = {
    id: 'doing-well',
    title: 'Doing something well',
    type: '事件题',
    color: 'blue',
    isNew: true,
    words: getManyFromPool([
      'champion',
      'praise',
      'accomplishment',
      'excel',
      'outstanding',
      'proficient',
      'skillful',
      'expert',
      'achieve',
      'succeed',
      'practice',
      'proud',
      'improve',
      'good at',
      'talented',
      'hard-working',
      'smart',
      'clever',
      'experience',
      'learn',
    ]),
};