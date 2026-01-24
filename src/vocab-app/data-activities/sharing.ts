import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const sharing: SubTopic = {
    id: 'sharing',
    title: 'Sharing',
    type: '事件题',
    color: 'blue',
    words: getManyFromPool(['generous', 'mutual', 'contribute', 'cooperate']),
};