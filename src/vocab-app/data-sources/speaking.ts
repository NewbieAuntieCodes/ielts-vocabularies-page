import { allSubTopics, ieltsTopics } from '../data';
import { SubTopic } from '../data-types';
import { VocabData } from '../context/VocabDataContext';

const SPEAKING_FILTERS: VocabData['filters'] = {
    defaultId: 'all',
    chips: [
        { id: 'all', label: '全部话题' },
        { id: 'essential', label: '必备', isEssential: true },
        { id: '2025年5-8月', label: '2025年5-8月' },
        { id: '2025年9-12月', label: '2025年9-12月' },
        { id: '2026年1-4月', label: '2026年1-4月' },
    ],
    filterSubTopic: (subTopic: SubTopic, filterId: string) => {
        if (filterId === 'all') return true;

        if (filterId === 'essential') return subTopic.badge === '必考';

        const isInSeason = subTopic.seasons?.includes(filterId) || false;

        if (filterId === '2025年5-8月') {
            return isInSeason && subTopic.badge !== '必考';
        }

        return isInSeason;
    },
};

export const speakingVocabData: VocabData = {
    id: 'speaking',
    title: '雅思口语词汇',
    ieltsTopics,
    allSubTopics,
    filters: SPEAKING_FILTERS,
};

