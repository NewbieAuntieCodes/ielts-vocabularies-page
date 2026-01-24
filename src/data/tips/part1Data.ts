import { AnswerPart } from '../../components/tips/shared';

export const examples5w1h = [
    {
        label: '听音乐',
        question: 'Do you like music?',
        prompts: [
            { id: 'what', title: 'What? (喜欢吗?)', text: '直接回答，清晰表明你的态度。', keywords: ["Yes, absolutely", "I'm a big fan of music."] },
            { id: 'why', title: 'Why? (为什么?)', text: '解释你为什么喜欢音乐，说明它的作用。', keywords: ["It's a great way to relax", 'It helps me de-stress.'] },
            { id: 'how', title: 'How? (感觉如何?)', text: '描述音乐带给你的感受，增加情感色彩。', keywords: ['It puts me in a good mood.', 'It makes me feel energized.'] },
            { id: 'when', title: 'When? (何时听?)', text: '说出你听音乐的具体场景，让回答更生动。', keywords: ['every day', 'when commuting', 'while studying'] },
        ],
        answer: (): AnswerPart[] => ([
            { type: 'what', text: "Yes, absolutely, I'm a big fan of music" },
            { type: 'text', text: ". " },
            { type: 'why', text: "For me, it's a great way to relax after a long day" },
            { type: 'text', text: ", and " },
            { type: 'how', text: "it always puts me in a good mood" },
            { type: 'text', text: ". I listen to it pretty much every day, " },
            { type: 'when', text: "especially when I'm commuting on the subway" },
            { type: 'text', text: "." },
        ]),
        legend: [
            { id: 'what', text: 'Answer' },
            { id: 'why', text: 'Why' },
            { id: 'how', text: 'How' },
            { id: 'when', text: 'When' },
        ]
    },
];

export const preExamples = [
    {
        label: '看电影',
        question: 'Do you like watching movies?',
        prompts: [
            { id: 'point', title: 'P - Point (观点)', text: '直接、清晰地陈述你的核心观点。', keywords: ["Yes, I'm a huge fan.", "No, not really."] },
            { id: 'reason', title: 'R - Reason (理由)', text: '解释你持有该观点的原因。', keywords: ["The main reason is...", "because..."] },
            { id: 'example', title: 'E - Example (例子)', text: '给出一个具体的例子来支撑你的理由。', keywords: ['For example,', 'For instance,'] },
        ],
        answer: (): AnswerPart[] => ([
            { type: 'point', text: "Yes, I'm quite a movie buff. I really enjoy watching films" },
            { type: 'text', text: ". " },
            { type: 'reason', text: "I think it's a fantastic way to unwind and escape from reality for a bit" },
            { type: 'text', text: ". " },
            { type: 'example', text: "For instance, last weekend I watched a new sci-fi movie, and it was so engaging that I completely forgot about all my work stress" },
            { type: 'text', text: "." },
        ]),
        legend: [
            { id: 'point', text: 'Point' },
            { id: 'reason', text: 'Reason' },
            { id: 'example', text: 'Example' },
        ]
    },
];