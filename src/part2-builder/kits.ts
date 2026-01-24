import { BuildKit } from './types';

export const BUILD_KITS: BuildKit[] = [
  {
    id: '2026-01-04-p2-shopping-mall',
    title: '【2026年 1-4月】商场 (Shopping mall)',
    prompt: 'Describe a shopping mall.',
    card: {
      seasonTag: '【2026年 1-4月】',
      cardTitle: '商场',
      status: 'New',
      part2Title: 'Describe a shopping mall',
      part2Prompts: [
        'What its name is',
        'Where it is',
        'How often you visit it',
        'And what you usually buy at the mall',
      ],
      part3Questions: [
        "Why do people buy things they don't need?",
        "Do you think it's a waste of time to go shopping?",
        'Why are some people keen on shopping?',
        'What kind of people like shopping?',
      ],
    },
    pools: [
      {
        id: 'name',
        title: '🛍️ 商场名字',
        options: [
          'Grandview Mall',
          'Teemall',
          'Taikoo Hui',
          'Wanda Plaza',
          'a shopping mall near my home',
        ],
      },
      {
        id: 'place',
        title: '📍 在哪里',
        options: [
          'Tianhe District (Guangzhou)',
          'the city center',
          'near my home',
          'near a subway station',
          'a busy area with lots of shops',
        ],
      },
      {
        id: 'frequency',
        title: '⏱️ 多久去一次',
        options: ['every weekend', 'once a week', 'twice a month', 'from time to time', 'only during holidays'],
      },
      {
        id: 'buy',
        title: '🛒 常买什么',
        options: [
          'clothes',
          'shoes',
          'snacks',
          'groceries',
          'skincare products',
          'gifts',
          'stationery',
        ],
      },
      {
        id: 'special',
        title: '✨ 为什么特别',
        options: [
          "it's really convenient",
          'it has many brands and stores',
          'the food court is amazing',
          'it is clean and comfortable',
          'it has a great cinema',
          'the design is modern and beautiful',
        ],
      },
      {
        id: 'feeling',
        title: '😊 感受',
        options: ['happy', 'relaxed', 'excited', 'comfortable'],
      },
    ],
    slots: [
      {
        id: 'name',
        title: '1) What its name is（名字）',
        templates: [
          {
            id: 't1',
            label: 'Default',
            text: 'I want to describe a shopping mall called {{name}}.',
            blanks: [
              {
                id: 'name',
                label: 'Name',
                poolId: 'name',
                placeholder: '{{name}}',
              },
            ],
          },
        ],
      },
      {
        id: 'where',
        title: '2) Where it is（地点）',
        templates: [
          {
            id: 't1',
            label: 'Default',
            text: 'It is in {{place}}.',
            blanks: [
              {
                id: 'place',
                label: 'Place',
                poolId: 'place',
                placeholder: '{{place}}',
              },
            ],
          },
        ],
      },
      {
        id: 'frequency',
        title: '3) How often you visit it（频率）',
        templates: [
          {
            id: 't1',
            label: 'Default',
            text: 'I visit it {{frequency}}.',
            blanks: [
              {
                id: 'frequency',
                label: 'Frequency',
                poolId: 'frequency',
                placeholder: '{{frequency}}',
              },
            ],
          },
        ],
      },
      {
        id: 'buy',
        title: '4) What you usually buy（买什么）',
        templates: [
          {
            id: 't1',
            label: 'Default',
            text: 'I usually buy {{buyA}} and {{buyB}} at the mall.',
            blanks: [
              {
                id: 'buyA',
                label: 'Buy 1',
                poolId: 'buy',
                placeholder: '{{buyA}}',
              },
              {
                id: 'buyB',
                label: 'Buy 2',
                poolId: 'buy',
                placeholder: '{{buyB}}',
              },
            ],
          },
        ],
      },
      {
        id: 'wrap',
        title: '5) Why it is special + How I feel（原因+感受）',
        templates: [
          {
            id: 't1',
            label: 'Default',
            text: 'I like it because {{special}}, and I feel {{feeling}} when I am there.',
            blanks: [
              {
                id: 'special',
                label: 'Reason',
                poolId: 'special',
                placeholder: '{{special}}',
              },
              {
                id: 'feeling',
                label: 'Feeling',
                poolId: 'feeling',
                placeholder: '{{feeling}}',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2026-01-04-p2-movie-disappointed',
    title: '2026-01-04: Movie that disappointed you',
    prompt: 'Describe a movie you watched recently that you felt disappointed about.',
    pools: [
      {
        id: 'movie',
        title: 'Movie',
        options: ['Avatar 3', 'Avengers: Endgame', 'a recent movie I watched'],
      },
      {
        id: 'when',
        title: 'When',
        options: ['two weeks ago', 'last weekend', 'last month'],
      },
      {
        id: 'where',
        title: 'Where',
        options: ['at the cinema', 'at home'],
      },
      {
        id: 'whyWatch',
        title: 'Why you watched it',
        options: [
          'I liked the series',
          'my friends recommended it',
          'I wanted to relax',
          'the reviews looked great',
        ],
      },
      {
        id: 'whyBad',
        title: 'Why it was disappointing',
        options: [
          'the story was too slow',
          'there were too many characters',
          'the ending was predictable',
          'it was boring and confusing',
        ],
      },
      {
        id: 'feeling',
        title: 'Feelings',
        options: ['disappointed', 'a bit upset', 'not satisfied'],
      },
    ],
    slots: [
      {
        id: 'who-what',
        title: '1) What it is',
        templates: [
          {
            id: 't1',
            label: 'Simple',
            text: 'I want to talk about {{movie}}.',
            blanks: [
              { id: 'movie', label: 'Movie', poolId: 'movie', placeholder: '{{movie}}' },
            ],
          },
        ],
      },
      {
        id: 'where-when',
        title: '2) Where / When',
        templates: [
          {
            id: 't1',
            label: '1 sentence',
            text: 'I watched it {{when}} {{where}}.',
            blanks: [
              { id: 'when', label: 'When', poolId: 'when', placeholder: '{{when}}' },
              { id: 'where', label: 'Where', poolId: 'where', placeholder: '{{where}}' },
            ],
          },
        ],
      },
      {
        id: 'activities',
        title: '3) Why you watched it',
        templates: [
          {
            id: 't1',
            label: 'Because',
            text: 'I decided to watch it because {{whyWatch}}.',
            blanks: [
              { id: 'whyWatch', label: 'Reason', poolId: 'whyWatch', placeholder: '{{whyWatch}}' },
            ],
          },
        ],
      },
      {
        id: 'special',
        title: '4) Why it is special',
        templates: [
          {
            id: 't1',
            label: 'Disappointed because',
            text: 'However, I felt disappointed because {{whyBad}}.',
            blanks: [
              { id: 'whyBad', label: 'Reason', poolId: 'whyBad', placeholder: '{{whyBad}}' },
            ],
          },
        ],
      },
      {
        id: 'feel',
        title: '5) How I feel',
        templates: [
          {
            id: 't1',
            label: 'Wrap up',
            text: 'Overall, I felt {{feeling}} after watching it.',
            blanks: [
              { id: 'feeling', label: 'Feeling', poolId: 'feeling', placeholder: '{{feeling}}' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2026-01-04-p2-proud-family-member',
    title: '2026-01-04: Proud of a family member',
    prompt: 'Describe a time when you felt proud of a family member.',
    pools: [
      {
        id: 'person',
        title: 'Person',
        options: ['my mom', 'my dad', 'my older sister', 'a family member of mine'],
      },
      {
        id: 'when',
        title: 'When',
        options: ['last year', 'a few years ago', 'during high school'],
      },
      {
        id: 'whatDid',
        title: 'What they did',
        options: [
          'worked very hard and got a promotion',
          'passed a tough exam',
          'took care of our family during a difficult time',
          'made a big change and became more responsible',
        ],
      },
      {
        id: 'whyProud',
        title: 'Why you felt proud',
        options: [
          'it showed real responsibility',
          'it proved that hard work pays off',
          'it inspired me a lot',
          'it was not easy, but they never gave up',
        ],
      },
      {
        id: 'feeling',
        title: 'Feelings',
        options: ['proud', 'inspired', 'warm', 'grateful'],
      },
    ],
    slots: [
      {
        id: 'who-what',
        title: '1) Who it is',
        templates: [
          {
            id: 't1',
            label: 'Introduce',
            text: "I'd like to talk about {{person}}.",
            blanks: [
              { id: 'person', label: 'Person', poolId: 'person', placeholder: '{{person}}' },
            ],
          },
        ],
      },
      {
        id: 'where-when',
        title: '2) When it happened',
        templates: [
          {
            id: 't1',
            label: 'Time',
            text: 'It happened {{when}}.',
            blanks: [
              { id: 'when', label: 'When', poolId: 'when', placeholder: '{{when}}' },
            ],
          },
        ],
      },
      {
        id: 'activities',
        title: '3) What they did',
        templates: [
          {
            id: 't1',
            label: 'Action',
            text: 'This person {{whatDid}}.',
            blanks: [
              { id: 'whatDid', label: 'Action', poolId: 'whatDid', placeholder: '{{whatDid}}' },
            ],
          },
        ],
      },
      {
        id: 'special',
        title: '4) Why it is special',
        templates: [
          {
            id: 't1',
            label: 'Why proud',
            text: 'I felt proud because {{whyProud}}.',
            blanks: [
              { id: 'whyProud', label: 'Reason', poolId: 'whyProud', placeholder: '{{whyProud}}' },
            ],
          },
        ],
      },
      {
        id: 'feel',
        title: '5) How I feel',
        templates: [
          {
            id: 't1',
            label: 'Feeling',
            text: 'It made me feel {{feeling}}.',
            blanks: [
              { id: 'feeling', label: 'Feeling', poolId: 'feeling', placeholder: '{{feeling}}' },
            ],
          },
        ],
      },
    ],
  },
];

export const getBuildKitById = (id: string | null | undefined): BuildKit | null => {
  if (!id) return null;
  const aliases: Record<string, string> = {
    'demo-shopping-mall': '2026-01-04-p2-shopping-mall',
  };
  const resolvedId = aliases[id] || id;
  return BUILD_KITS.find((kit) => kit.id === resolvedId) || null;
};
