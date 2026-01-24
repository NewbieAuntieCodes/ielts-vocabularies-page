import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

export const borrowing: SubTopic = {
    id: 'borrowing',
    title: 'Borrowing/lending',
    type: '事件题',
    color: 'blue',
    wordSections: [
        {
            title: '基础词汇',
            words: getManyFromPool([
                'lend',
                'borrow',
                'return',
                'keep',
                'give back',
                'due date',
                'library card',
            ], 'basic'),
        },
        {
            title: '进阶词汇',
            words: getManyFromPool([
                'responsible',
                'overdue',
                'fine',
                'loan',
                'owe',
                'permission',
                'trustworthy',
                'in good condition',
                'damage',
                'replace',
            ], 'advanced'),
        },
    ],
};
