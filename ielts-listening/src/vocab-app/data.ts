import { IeltsTopic, SubTopic } from './data-types';

// 导入场景化词汇数据
import { friends } from './data-friends';
import { sharing } from './data-activities/sharing';
import { breakTopic } from './data-activities/break';
import { museum } from './data-museum';
import { advertisement } from './data-advertisement';
import { borrowing } from './data-activities/borrowing';
import { chatting } from './data-chatting';
import { gardening } from './data-activities/gardening';
import { goingOut } from './data-going-out';
import { doingWell } from './data-activities/doing-well';
import { shoes } from './data-shoes';
import { rules } from './data-rules';
import { chocolate } from './data-chocolate';
import { snacks } from './data-snacks';
import { socialMedia } from './data-social-media';

// 核心生活场景
import { studyWork } from './data-part1-01-study';
import { hometown } from './data-part1-02-hometown';
import { accommodation } from './data-part1-03-accommodation';
import { areaYouLiveIn } from './data-part1-04-area';

export * from './data-types';

/**
 * 听力高频场景分类 (Section 1 & 2)
 */
const lifeScenarios: SubTopic[] = [
    { ...accommodation, title: 'Accommodation 租房住宿', badge: 'Section 1' },
    { ...areaYouLiveIn, title: 'Local Area 周边环境', badge: 'Section 1' },
    { ...hometown, title: 'Hometown 家乡背景' },
    { ...friends, title: 'Friends & Neighbours 人际关系', badge: 'Section 1' },
    { ...chatting, title: 'Chatting & Small Talk 日常交流', badge: 'Section 1' },
    { ...sharing, title: 'Sharing & Cooperation 分享与合作' },
    { ...breakTopic, title: 'Leisure & Breaks 休闲与放松' },
    { ...goingOut, title: 'Social Events 社交与活动', badge: 'Section 1' },
    { ...borrowing, title: 'Library & Services 图书馆与服务', badge: 'Section 1' },
    { ...shoes, title: 'Shopping & Clothing 购物与服装', badge: 'Section 2' },
    { ...museum, title: 'Tourism & Culture 旅游与文化', badge: 'Section 2' },
    { ...advertisement, title: 'Media & Marketing 媒体与市场' },
];

/**
 * 学术与日常讨论分类 (Section 3 & 4)
 */
const academicScenarios: SubTopic[] = [
    { ...studyWork, title: 'Campus Life 校园生活', badge: 'Section 3' },
    { ...doingWell, title: 'Skills & Performance 能力与表现', badge: 'Section 3' },
    { ...socialMedia, title: 'Communication 交流方式' },
    { ...rules, title: 'Regulations 规则与制度' },
    { ...gardening, id: 'environment', title: 'Environment 环境与植物', badge: 'Section 4' },
    { ...chocolate, title: 'Food Science 食品科学' },
    { ...snacks, title: 'Healthy Eating 健康饮食' },
];

export const ieltsTopics: IeltsTopic[] = [
    {
        title: '雅思听力：生活社交场景 (S1 & S2)',
        section: 'Common',
        subTopics: lifeScenarios
    },
    {
        title: '雅思听力：学术研究场景 (S3 & S4)',
        section: 'Part 2 & 3',
        subTopics: academicScenarios
    }
];

export const allSubTopics: (SubTopic & { description?: string; illustration?: any; theme?: string })[] = ieltsTopics.flatMap(topic => topic.subTopics);
