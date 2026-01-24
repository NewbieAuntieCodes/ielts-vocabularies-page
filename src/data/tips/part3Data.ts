import { AnswerPart } from '../../components/tips/shared';

export const prePart3Examples = [
    {
        label: '出国旅行',
        question: "Do you think it's important for people to travel to other countries?",
        prompts: [
            { id: 'point', title: 'P - Point (观点)', text: '明确地陈述你的观点。', keywords: ["Yes, I believe it's extremely important.", "I think it is beneficial, but not essential."] },
            { id: 'reason', title: 'R - Reason (理由)', text: '解释你为什么这么认为。', keywords: ["because it broadens our horizons...", "it helps us understand different cultures."] },
            { id: 'example', title: 'E - Example (例子)', text: '提供一个具体的例子来支持你的理由。', keywords: ['For example, when I visited...', 'To illustrate this...'] },
        ],
        answer: (): AnswerPart[] => ([
            { type: 'point', text: "Yes, I believe it's incredibly important for people to travel internationally" },
            { type: 'text', text: ". " },
            { type: 'reason', text: "The main reason is that it broadens our horizons and fosters a deeper understanding of different cultures in a way that reading books or watching documentaries simply cannot" },
            { type: 'text', text: ". " },
            { type: 'example', text: "For instance, before visiting Japan, I had a very stereotypical image of the country. But after spending time there, interacting with local people and experiencing their daily life, I gained a much more nuanced and respectful perspective on their culture. That kind of personal experience is truly invaluable" },
            { type: 'text', text: "." }
        ]),
        legend: [
            { id: 'point', text: 'Point' },
            { id: 'reason', text: 'Reason' },
            { id: 'example', text: 'Example' },
        ]
    },
];
