import { IeltsTopic, SubTopic } from '../data-types';
import { VocabData } from '../context/VocabDataContext';

import { friends } from '../data-friends';
import { sharing } from '../data-activities/sharing';
import { breakTopic } from '../data-activities/break';
import { museum } from '../data-museum';
import { advertisement } from '../data-advertisement';
import { borrowing } from '../data-activities/borrowing';
import { chatting } from '../data-chatting';
import { gardening } from '../data-activities/gardening';
import { goingOut } from '../data-going-out';
import { doingWell } from '../data-activities/doing-well';
import { shoes } from '../data-shoes';
import { rules } from '../data-rules';
import { chocolate } from '../data-chocolate';
import { snacks } from '../data-snacks';
import { socialMedia } from '../data-social-media';
import { cambridgeC11T1S1, cambridgeC11T2S1 } from '../data-cambridge-listening-c11';

import { studyWork } from '../data-part1-01-study';
import { hometown } from '../data-part1-02-hometown';
import { accommodation } from '../data-part1-03-accommodation';
import { areaYouLiveIn } from '../data-part1-04-area';

const lifeScenarios: SubTopic[] = [
    { ...accommodation, id: 'accommodation', title: 'Accommodation 租房住宿', badge: 'Section 1' },
    { ...areaYouLiveIn, id: 'local-area', title: 'Local Area 周边环境', badge: 'Section 1' },
    { ...hometown, id: 'hometown', title: 'Hometown 家乡背景' },
    { ...friends, id: 'friends', title: 'Friends & Neighbours 人际关系', badge: 'Section 1' },
    { ...chatting, id: 'chatting', title: 'Chatting & Small Talk 日常交流', badge: 'Section 1' },
    { ...sharing, id: 'sharing', title: 'Sharing & Cooperation 分享与合作' },
    { ...breakTopic, id: 'break', title: 'Leisure & Breaks 休闲与放松' },
    { ...goingOut, id: 'going-out', title: 'Social Events 社交与活动', badge: 'Section 1' },
    { ...borrowing, id: 'borrowing', title: 'Library & Services 图书馆与服务', badge: 'Section 1' },
    { ...shoes, id: 'shopping-clothing', title: 'Shopping & Clothing 购物与服装', badge: 'Section 2' },
    { ...museum, id: 'tourism-culture', title: 'Tourism & Culture 旅游与文化', badge: 'Section 2' },
    { ...advertisement, id: 'media-marketing', title: 'Media & Marketing 媒体与市场' },
];

const academicScenarios: SubTopic[] = [
    { ...studyWork, id: 'campus-life', title: 'Campus Life 校园生活', badge: 'Section 3' },
    { ...doingWell, id: 'skills-performance', title: 'Skills & Performance 能力与表现', badge: 'Section 3' },
    { ...socialMedia, id: 'communication', title: 'Communication 交流方式' },
    { ...rules, id: 'regulations', title: 'Regulations 规则与制度' },
    { ...gardening, id: 'environment', title: 'Environment 环境与植物', badge: 'Section 4' },
    { ...chocolate, id: 'food-science', title: 'Food Science 食品科学' },
    { ...snacks, id: 'healthy-eating', title: 'Healthy Eating 健康饮食' },
];

export const listeningIeltsTopics: IeltsTopic[] = [
    {
        title: '雅思听力：生活社交场景 (S1 & S2)',
        section: 'Common',
        subTopics: lifeScenarios,
    },
    {
        title: '雅思听力：学术研究场景 (S3 & S4)',
        section: 'Part 2 & 3',
        subTopics: academicScenarios,
    },
    {
        title: 'Cambridge 精听：原文配套词汇',
        section: 'Common',
        subTopics: [cambridgeC11T1S1, cambridgeC11T2S1],
    },
];

export const listeningAllSubTopics: VocabData['allSubTopics'] = listeningIeltsTopics.flatMap(
    (topic) => topic.subTopics,
);

const LISTENING_FILTERS: VocabData['filters'] = {
    defaultId: 'all',
    chips: [
        { id: 'all', label: '全部' },
        { id: 'Section 1', label: 'Section 1' },
        { id: 'Section 2', label: 'Section 2' },
        { id: 'Section 3', label: 'Section 3' },
        { id: 'Section 4', label: 'Section 4' },
    ],
    filterSubTopic: (subTopic, filterId) => {
        if (filterId === 'all') return true;
        return subTopic.badge === filterId;
    },
};

export const listeningVocabData: VocabData = {
    id: 'listening',
    title: '雅思听力词汇',
    ieltsTopics: listeningIeltsTopics,
    allSubTopics: listeningAllSubTopics,
    filters: LISTENING_FILTERS,
};
