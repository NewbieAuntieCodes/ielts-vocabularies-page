import { Word } from '../data-types';
import { wordPool } from './index';

/**
 * 从中央词库获取单词
 * @param id 单词 ID (通常是单词本身)
 * @param overrides 允许覆盖 level 等特定属性
 */
export const getFromPool = (id: string, overrides?: Partial<Word>): Word => {
    const base = wordPool[id.toLowerCase()];
    if (!base) {
        console.warn(`Word ID "${id}" not found in pool.`);
        // 返回一个占位对象防止崩溃
        return {
            word: id,
            phonetic: '',
            definition: 'Not Found',
            example: '',
            emoji: '❓',
            ...overrides
        };
    }
    return { ...base, ...overrides };
};

/**
 * 批量从词库获取单词
 */
export const getManyFromPool = (ids: string[], level?: 'basic' | 'advanced'): Word[] => {
    return ids.map(id => getFromPool(id, level ? { level } : {}));
};
