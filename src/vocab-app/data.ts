import { IeltsTopic, SubTopic } from './data-types';

// 导入核心模块化数据
import * as p0912 from './data-2025-09-12/people';
import * as pl0912 from './data-2025-09-12/places';
import * as a0912 from './data-2025-09-12/activities';
import * as o0912 from './data-2025-09-12/objects';

// 导入 5-8 月核心基础题
import * as c0508 from './data-2025-05-08/common';

// 导入最新补全的话题（解决 Snacks 只有 8 个词的问题）
import { snacks as fullSnacks } from './data-snacks';
import { socialMedia as fullSocialMedia } from './data-social-media';
import { chocolate as fullChocolate } from './data-chocolate';
import { jewellery as fullJewellery } from './data-jewellery';
import { p2Places } from './data-part2-places';
import { p2People } from './data-part2-people';
import { p2Objects } from './data-part2-objects';
import { p2Events } from './data-part2-events';
import {
    highFreqExpressingAnger,
    highFreqExpressingBeautifulPretty,
    highFreqExpressingDeliciousTasty,
    highFreqExpressingDislikes,
    highFreqExpressingDifficultHard,
    highFreqExpressingEasy,
    highFreqExpressingFocusConcentration,
    highFreqExpressingGoodBehavior,
    highFreqExpressingGoodQualityCharacteristics,
    highFreqExpressingGoodResults,
    highFreqExpressingGoodSituationEnvironment,
    highFreqExpressingGoodStateFeeling,
    highFreqExpressingHardWorkingEffort,
    highFreqExpressingHappiness,
    highFreqExpressingLikes,
    highFreqExpressingManyALot,
    highFreqExpressingMaybeProbability,
    highFreqExpressingNervousAnxious,
    highFreqExpressingOpinionsViewpoints,
    highFreqExpressingFamousWellKnown,
    highFreqExpressingSequenceFirstSecondlyThen,
    highFreqExpressingFatigueTiredness,
    highFreqExpressingHighStressPressure,
    highFreqExpressingImportant,
    highFreqExpressingStressReliefRelaxation,
    highFreqExpressingSadness,
    highFreqExpressingVeryBusy,
    highFreqGeneral,
} from './data-high-freq';

export * from './data-types';

const SEASON_5_8 = '2025年 5-8月';
const SEASON_9_12 = '2025年 9-12月';

/**
 * 2025年 9-12月 话题汇总
 */
const part1SubTopics_9_12: SubTopic[] = [
    p0912.friends,
    a0912.sharing,
    a0912.breakTopic,
    pl0912.museum,
    o0912.advertisement,
    a0912.borrowing,
    p0912.chatting,
    { ...a0912.gardening, id: 'veg-fruits', title: 'Growing vegetables/fruits' },
    pl0912.cityAndCrowdedPlace,
    p0912.goingOut,
    p0912.oldPeople,
    a0912.doingWell,
    o0912.shoes,
    o0912.rules,
    pl0912.publicPlaces,
    { ...a0912.gardening, id: 'plants', title: 'Plants' },
];

/**
 * 2025年 5-8月 话题汇总
 */
const part1SubTopics_5_8: SubTopic[] = [
    c0508.studyWork,
    c0508.hometown,
    c0508.accommodation,
    c0508.areaYouLiveIn,
    
	    // 补全后的高容量数据话题
	    { ...fullSnacks, seasons: [SEASON_5_8] },
	    { ...fullSocialMedia, seasons: [SEASON_5_8] },
	    { ...fullChocolate, seasons: [SEASON_5_8] },
	    { ...fullJewellery, seasons: [SEASON_5_8] },

    // 占位话题
    { id: 'flowers', title: 'Flowers', type: '事物题', color: 'green', seasons: [SEASON_5_8], words: [] },
    { id: 'puzzles', title: 'Puzzles', type: '事物题', color: 'purple', seasons: [SEASON_5_8], words: [] },
    { id: 'public-transport', title: 'Public transport', type: '地点题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'names', title: 'Names', type: '人物题', color: 'yellow', seasons: [SEASON_5_8], words: [] },
    { id: 'geography', title: 'Geography', type: '事物题', color: 'green', seasons: [SEASON_5_8], words: [] },
    { id: 'birthday', title: 'Birthday', type: '时间题', color: 'yellow', seasons: [SEASON_5_8], words: [] },
    { id: 'staying-up-late', title: 'Staying up late', type: '习惯题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'plans', title: 'Plans', type: '习惯题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'texting-messages', title: 'Texting messages', type: '习惯题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'patience', title: 'Patience', type: '心理题', color: 'purple', seasons: [SEASON_5_8], words: [] },
    { id: 'machine', title: 'Machine', type: '事物题', color: 'green', seasons: [SEASON_5_8], words: [] },
    { id: 'memory', title: 'Memory', type: '心理题', color: 'purple', seasons: [SEASON_5_8], words: [] },
    { id: 'weather', title: 'Weather', type: '事物题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'writing', title: 'Writing', type: '习惯题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'being-alone', title: 'Being alone', type: '习惯题', color: 'yellow', seasons: [SEASON_5_8], words: [] },
    { id: 'making-a-list', title: 'Making a list', type: '习惯题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'housekeeping-cooking', title: 'Housekeeping and cooking', type: '习惯题', color: 'green', seasons: [SEASON_5_8], words: [] },
    { id: 'saying-thank-you', title: 'Saying thank you', type: '人物题', color: 'yellow', seasons: [SEASON_5_8], words: [] },
    { id: 'singing', title: 'Singing', type: '习惯题', color: 'purple', seasons: [SEASON_5_8], words: [] },
    { id: 'outer-space-stars', title: 'Outer space and stars', type: '事物题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'small-business', title: 'Small business', type: '事物题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'internet', title: 'Internet', type: '事物题', color: 'blue', seasons: [SEASON_5_8], words: [] },
    { id: 'praising', title: 'Praising', type: '人物题', color: 'yellow', seasons: [SEASON_5_8], words: [] },
    { id: 'being-busy', title: 'Being busy', type: '习惯题', color: 'blue', seasons: [SEASON_5_8], words: [] },
];

export const ieltsTopics: IeltsTopic[] = [
    {
        title: '2025年 考题季 Part 1',
        section: 'Part 1',
        subTopics: [...part1SubTopics_9_12, ...part1SubTopics_5_8]
    },
    {
        title: 'Part 2 & 3 核心词库',
        section: 'Part 2 & 3',
        subTopics: [
            p2Events,
            p2Objects,
            p2People,
            p2Places,
        ]
    },
    {
        title: '高频词',
        section: 'High Frequency',
        subTopics: [
            highFreqExpressingLikes,
            highFreqExpressingDislikes,
            highFreqExpressingMaybeProbability,
            highFreqExpressingHappiness,
            highFreqExpressingSadness,
            highFreqExpressingAnger,
            highFreqExpressingManyALot,
            highFreqExpressingFatigueTiredness,
            highFreqExpressingHighStressPressure,
            highFreqExpressingVeryBusy,
            highFreqExpressingStressReliefRelaxation,
            highFreqExpressingImportant,
            highFreqExpressingDeliciousTasty,
            highFreqExpressingBeautifulPretty,
            highFreqExpressingDifficultHard,
            highFreqExpressingEasy,
            highFreqExpressingFocusConcentration,
            highFreqExpressingHardWorkingEffort,
            highFreqExpressingGoodStateFeeling,
            highFreqExpressingGoodQualityCharacteristics,
            highFreqExpressingGoodResults,
            highFreqExpressingGoodBehavior,
            highFreqExpressingGoodSituationEnvironment,
            highFreqExpressingSequenceFirstSecondlyThen,
            highFreqExpressingNervousAnxious,
            highFreqExpressingFamousWellKnown,
            highFreqExpressingOpinionsViewpoints,
            highFreqGeneral,
        ]
    }
];

export const allSubTopics: (SubTopic & { description?: string; illustration?: any; theme?: string })[] = ieltsTopics.flatMap(topic => topic.subTopics);
