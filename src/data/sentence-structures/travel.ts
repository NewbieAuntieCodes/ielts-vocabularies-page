import { SentencePracticeTopic } from './types';

export const travelSentencePractice: SentencePracticeTopic = {
    id: 'travel',
    title: '句型练习：旅行 Travel',
    subtitle: '这不是题目答案，而是可复用的句子结构（支持替换槽位练习）。',
    sections: [
        {
            id: 'core-functions',
            title: '1) 核心功能句（四类）',
            description: '先把“表达功能”说清楚，再填具体内容。',
            items: [
                {
                    id: 'like-prefer',
                    en: 'I’m really into [type of travel/place]. / I prefer [A] to [B].',
                    zh: '喜好/对比：我更喜欢……而不是……',
                },
                {
                    id: 'reason-two-layer',
                    en: 'Mainly because [reason 1]. Also, [reason 2].',
                    zh: '原因两层：主要因为……另外……',
                },
                {
                    id: 'sensory-detail',
                    en: 'What I love most is [detail] (the view / the breeze / the sound of the waves).',
                    zh: '画面细节：我最喜欢的是……（景色/海风/海浪声）',
                },
                {
                    id: 'result-feeling',
                    en: 'It made me feel [feeling], and I came back feeling [feeling].',
                    zh: '结果/感受：这让我……我回来后也……',
                },
            ],
        },
        {
            id: 'templates',
            title: '2) 模板 + 槽位（直接替换练习）',
            description: '让学生只换槽位内容，不换结构。',
            items: [
                {
                    id: 'want-to-go',
                    en: 'I’d love to go to [place], mainly because [reason].',
                    zh: '我想去……主要因为……',
                    note: 'place 例：the seaside / a mountain village / a historic city',
                },
                {
                    id: 'transport',
                    en: 'When I travel, I usually [transport], so I can [benefit].',
                    zh: '我旅行时通常……所以我可以……',
                    note: 'transport 例：take the train / drive / fly; benefit 例：enjoy the scenery / save time',
                },
                {
                    id: 'past-trip-4w',
                    en: 'Last [time], I went to [place] with [who]. We [activity 1], [activity 2], and [activity 3].',
                    zh: '过去经历（四要素）：什么时候/去哪/和谁/做了什么',
                    note: 'time 例：last summer vacation; activities 例：swam / sunbathed / tried seafood',
                },
                {
                    id: 'best-part',
                    en: 'The best part was [one vivid detail]. As a result, I felt [feeling].',
                    zh: '点睛句：最好的是……所以我觉得……',
                },
                {
                    id: 'opinion-road-trip',
                    en: 'I think a road trip is [adj] because [reason 1]. On top of that, [reason 2]. That said, [drawback].',
                    zh: '观点段（Part 3风格）：观点→理由1→理由2→让步/缺点',
                },
            ],
        },
        {
            id: 'upgrade-modules',
            title: '3) 加一档模块（任选加在结尾）',
            description: '每段最后加 1 句细节 + 1 句感受，立刻更像真实口语。',
            items: [
                {
                    id: 'detail-1',
                    en: 'The sunset was incredible, and the breeze was so refreshing.',
                    zh: '细节：日落很震撼，海风也很清爽。',
                },
                {
                    id: 'compare-1',
                    en: 'Compared with flying, taking the train feels more relaxing to me.',
                    zh: '对比：比起飞机，我觉得火车更放松。',
                },
                {
                    id: 'concession-1',
                    en: 'It’s convenient, but it can be tiring if you drive for too long.',
                    zh: '让步：方便，但开太久会很累。',
                },
            ],
        },
        {
            id: 'classroom-tasks',
            title: '4) 课堂训练任务（3种）',
            description: '把“会背”变成“会用”。',
            items: [
                {
                    id: 'task-30s',
                    en: '30-second substitution: Use one template and change [place/reason/activity] five times.',
                    zh: '30秒替换：一个模板，连续换 5 组槽位。',
                },
                {
                    id: 'task-expand',
                    en: 'Expand from 3 sentences to 6 sentences: add 1 detail + 1 feeling + 1 result.',
                    zh: '扩写：3句扩到6句（强制加细节/感受/结果）。',
                },
                {
                    id: 'task-rewrite',
                    en: 'Rewrite the same idea in two ways: because → which is why / so.',
                    zh: '改写：同一句话用两种结构表达。',
                },
            ],
        },
        {
            id: 'collocations',
            title: '5) 搭配 & 易错点（纠错清单）',
            description: '用最少的规则，避免反复犯错。',
            items: [
                {
                    id: 'collocation-seaside',
                    en: '✅ go to the seaside / ✅ watch the waves / ✅ take the train / ✅ go on a road trip',
                    zh: '常用搭配：去海边/看海浪/坐火车/自驾游',
                },
                {
                    id: 'tense-chain',
                    en: 'Past tense chain: Last summer, we went… We swam… We ate… It made me…',
                    zh: '时态链：过去式一条线说到底。',
                },
                {
                    id: 'swim',
                    en: 'swim → swam → swum (e.g., We swam in the sea.)',
                    zh: '动词变化：swim 的过去式是 swam。',
                },
                {
                    id: 'climb',
                    en: '✅ climb a mountain (not “climbed the mountain” as a fixed phrase)',
                    zh: '表达：更常说 climb a mountain（具体语境当然也能说 climbed the mountain）。',
                },
                {
                    id: 'vacation',
                    en: 'summer vacation = 暑假 / winter vacation = 寒假',
                    zh: '假期词汇：暑假/寒假注意区分。',
                },
                {
                    id: 'beautiful-upgrades',
                    en: 'Instead of “beautiful”: breathtaking / stunning / peaceful / impressive / relaxing',
                    zh: '替换 beautiful：按语境换更地道的词。',
                },
            ],
        },
    ],
};

