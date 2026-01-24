
import { TopicData } from '../../../types';
import { essentialsTopic } from '../../part1/essentials';

export const initialPart1Data_2026_01_04: TopicData[] = [
  essentialsTopic, // 每一季开头都出现
  {
    id: 'box-2026-01-04-part1-topic-food',
    title: '话题: 食物与饮食',
    cards: [
      {
        id: '2026-01-04-p1-food',
        title: 'Food',
        category: '事物题',
        categoryClass: 'object-card',
        status: 'New',
        part1Questions: [
          'What is your favourite food?',
          'What kind of food did you like when you were young?',
          'Do you eat different foods at different times of the year?',
          'Has your favourite food changed since you were a child?',
        ],
        sampleAnswers: [
          {
            question: 'What is your favourite food?',
            versions: [
              {
                score: '6.5',
                answer:
                  'My favourite food is definitely potatoes. I love fried potatoes, and there’s a special snack from my hometown where we cut the potatoes into chips and dip them in a sauce made from peanut sauce and chili paste. It’s really delicious.',
              },
            ],
          },
          {
            question: 'What kind of food did you like when you were young?',
            versions: [
              {
                score: '6.5',
                answer:
                  'When I was young, I also loved potato snacks. I was really into anything sugary too. I remember especially liking traditional candied fruit, which is a classic treat in China.',
              },
            ],
          },
          {
            question: 'Do you eat different foods at different times of the year?',
            versions: [
              {
                score: '6.5',
                answer:
                  'Most of the time, my main meals don’t change much. I usually eat the same kinds of chicken, beef, or rice dishes. For vegetables, I often stick with leafy greens. But when it comes to fruit, I do eat different fruits depending on the season, like watermelon and grapes in the summer.',
              },
            ],
          },
          {
            question: 'Has your favourite food changed since you were a child?',
            versions: [
              {
                score: '6.5',
                answer:
                  'Honestly, not really. I still love potatoes, especially that snack from my hometown. The sauce is spicy and flavourful, and I could eat it again and again.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'box-2026-01-04-part1-topic-day-off',
    title: '话题: 休闲与时间',
    cards: [
      {
        id: '2026-01-04-p1-day-off',
        title: 'Day off',
        category: '事件题',
        categoryClass: 'event-card',
        status: 'New',
        part1Questions: [
          'When was the last time you had a few days off?',
          'What do you usually do when you have days off?',
          'Do you usually spend your days off with your parents or with your friends?',
          'What would you like to do if you had a day off tomorrow?',
        ],
        sampleAnswers: [
          {
            question: 'When was the last time you had a few days off?',
            versions: [
              {
                score: '6.0',
                answer:
                  "The last time I had a day off was last weekend, because I'm a student and, like most students in China, I typically have weekends off.",
              },
            ],
          },
          {
            question: 'What do you usually do when you have days off?',
            versions: [
              {
                score: '6.0',
                answer:
                  "On my days off, I usually sleep in to catch up on rest. Then I might head to the library or go out with my friends to enjoy a nice meal at a restaurant.",
                analysis: [
                  {
                    type: 'phrase',
                    text: 'sleep in',
                    explanation:
                      '👉 睡懒觉 / 比平时起得晚\n\n不是指“睡着”，而是指不用早起，可以多睡一会儿。\n\n比如：\n• I like to sleep in on weekends.\n  我喜欢周末睡懒觉。\n• Today is Sunday, so I can sleep in.\n  今天是星期天，所以我可以晚点起床。\n\n对比一下：\n• get up early → 早起\n• sleep in → 晚起 / 睡到自然醒',
                  },
                  {
                    type: 'phrase',
                    text: 'catch up on rest',
                    explanation:
                      '👉 补觉 / 把之前没睡够的睡眠补回来\n\n因为平时太累、太忙、睡得少，所以有时间的时候多睡一点，让身体恢复。\n\n可以拆开理解：\n• catch up = 追上、补回来\n• rest = 休息\n\n合起来就是：把欠下的休息补回来\n\n例句：\n• I sleep in on weekends to catch up on rest.\n  我周末睡懒觉来补觉。\n• I was very tired, so I stayed home to catch up on rest.\n  我太累了，所以待在家里补觉休息。',
                  },
                ],
              },
            ],
          },
          {
            question:
              'Do you usually spend your days off with your parents or with your friends?',
            versions: [
              {
                score: '6.0',
                answer:
                  'I usually spend my days off with my friends because, to be honest, I don’t have a lot of common topics to chat about with my parents. With my friends, I can talk about my daily life, what I’m up to, and even share my thoughts on social issues or the novels I’m reading.',
                analysis: [
                  {
                    type: 'phrase',
                    text: "what I'm up to",
                    explanation:
                      '👉 我最近在做什么 / 我在忙什么\n\n很口语，很常见，用来指最近的生活、事情、计划或动态。\n\n拆开理解：\n• what = 什么\n• I’m up to = 我在做\n\n合起来就是：\n“我现在在干嘛 / 我最近在忙啥”\n\n例句：\n• I like to talk with my friends about what I’m up to.\n  我喜欢和朋友聊聊我最近在做什么。\n• Let me tell you what I’m up to these days.\n  让我告诉你我最近在忙什么。\n• My friends know what I’m up to.\n  我的朋友知道我最近的情况。',
                  },
                ],
              },
            ],
          },
          {
            question: 'What would you like to do if you had a day off tomorrow?',
            versions: [
              {
                score: '6.0',
                answer:
                  "If I had a day off tomorrow, I'd probably just stay home and read some novels since I'm a big fan of them. I'm not really into going out alone, so I'd rather wait until my friends are free so we can go out together.",
              },
            ],
          },
        ],
      },
      {
        id: '2026-01-04-p1-hobby',
        title: 'Hobby',
        category: '事件题',
        categoryClass: 'event-card',
        status: 'New',
        part1Questions: [
          'Do you have any hobbies?',
          'Did you have any hobbies when you were a child?',
          'Do you have a hobby that you’ve had since childhood?',
          'Do you have the same hobbies as your family members?',
        ],
        sampleAnswers: [
          {
            question: 'Do you have any hobbies?',
            versions: [
              {
                score: '5.0',
                answer:
                  'Yes, I do. I like collecting cards, especially cards of my favorite celebrities. I think they are beautiful, and collecting them gives me a sense of happiness.',
              },
            ],
          },
          {
            question: 'Did you have any hobbies when you were a child?',
            versions: [
              {
                score: '5.0',
                answer:
                  'Yes. When I was a child, I liked buying pencil cases. When I bought them, I felt very happy. It gave me a sense of happiness.',
              },
            ],
          },
          {
            question: 'Do you have a hobby that you’ve had since childhood?',
            versions: [
              {
                score: '5.0',
                answer:
                  'Yes. When I was a child, I liked buying pencil cases. When I bought them, I felt very happy. It gave me a sense of happiness.',
              },
            ],
          },
          {
            question: 'Do you have the same hobbies as your family members?',
            versions: [
              {
                score: '5.0',
                answer:
                  'Yes. My sister and I both like watching contests. We enjoy watching them together.',
              },
            ],
          },
        ],
      },
      {
        id: '2026-01-04-p1-morning',
        title: 'Morning',
        category: '事件题',
        categoryClass: 'event-card',
        status: 'New',
        part1Questions: [
          'Do you like getting up early in the morning?',
          'What do you usually do in the morning?',
          'What did you do in the morning when you were little?',
          'Are there any differences between what you do in the morning now and what you did in the past?',
          'Do you spend your mornings doing the same things on both weekends and weekdays?',
        ],
        sampleAnswers: [
          {
            question: 'Do you like getting up early in the morning?',
            versions: [
              {
                score: '5.0',
                answer: [
                  'No, I don’t like getting up early. I often stay up late, so I feel very sleepy in the morning. Getting up early makes me feel tired.',
                  'No, I don’t like getting up early. I feel it is very difficult to get up in the morning because I stay up late. If I get up early in the morning, I don’t have enough sleep.',
                ],
              },
            ],
          },
          {
            question: 'What do you usually do in the morning?',
            versions: [
              {
                score: '5.0',
                answer:
                  'If I need to go out, like going to class or meeting my friends, I will get up early to take the subway. If I have nothing to do, I will stay in bed and relax myself.',
              },
            ],
          },
          {
            question: 'What did you do in the morning when you were little?',
            versions: [
              {
                score: '5.0',
                answer:
                  'When I was little, I had to get up early for school. Sometimes on weekends, I also got up early to go to after-school classes.',
              },
            ],
          },
          {
            question:
              'Are there any differences between what you do in the morning now and what you did in the past?',
            versions: [
              {
                score: '5.0',
                answer:
                  'Yes, there are some differences. Now, when I get up in the morning, I may go out to play with my friends or go to classes. But in the past, I got up early to go to school almost every day.',
              },
            ],
          },
          {
            question:
              'Do you spend your mornings doing the same things on both weekends and weekdays?',
            versions: [
              {
                score: '5.0',
                answer:
                  'No, I don’t. On weekdays, if I have classes, I spend my morning going to class. But on weekends, if I have free time, I usually stay at home and relax.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'box-2026-01-04-part1-topic-pets-animals',
    title: '话题: 宠物与动物',
    cards: [
      {
        id: '2026-01-04-p1-pets-animals',
        title: 'Pets and animals',
        category: '事物题',
        categoryClass: 'object-card',
        status: 'New',
        part1Questions: [
          'What is your favourite animal?',
          'Where do you prefer to keep your cat, indoors or outdoors?',
          'Have you ever had a pet before?',
          'What is the most popular animal in China?',
        ],
        sampleAnswers: [
          {
            question: 'What is your favourite animal?',
            versions: [
              {
                score: '6.0',
                answer:
                  'My favourite animal is a cat.<br/><br/>First, cats are very cute. Second, when I call my cat, it will come to me happily. That makes me feel warm and relaxed.',
              },
            ],
          },
          {
            question: 'Where do you prefer to keep your cat, indoors or outdoors?',
            versions: [
              {
                score: '6.0',
                answer:
                  "I prefer to keep my cat indoors.<br/><br/>First, it's safer. If cats stay outside, they may be hurt by cars or bad people. Second, I've read news reports that people sometimes put poison outside, which is very dangerous for pets. So I think keeping a cat indoors is much better.",
              },
            ],
          },
          {
            question: 'Have you ever had a pet before?',
            versions: [
              {
                score: '6.0',
                answer:
                  'Yes, I have.<br/><br/>I had a cat when I was six years old. It was really cute and liked to play with me. We spent a lot of time together, and it made my childhood very happy.',
              },
            ],
          },
          {
            question: 'What is the most popular animal in China?',
            versions: [
              {
                score: '6.0',
                answer:
                  "I think cats and dogs are the most popular animals in China.<br/><br/>Many people like cats because they are quiet and well-behaved. They don't make much noise, especially at night.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'box-2026-01-04-part1-topic-dreams',
    title: '话题: 梦境与愿望',
    cards: [
      {
        id: '2026-01-04-p1-dreams',
        title: 'Dreams',
        category: '事物题',
        categoryClass: 'object-card',
        status: 'New',
        part1Questions: [
          'Can you remember the dreams you had?',
          'Do you share your dreams with others?',
          'Do you think dreams have special meanings?',
          'Do you want to make your dreams come true?',
        ],
        sampleAnswers: [
          {
            question: 'Can you remember the dreams you had?',
            versions: [
              {
                score: '5.0',
                answer:
                  'I remember some dreams. They are short and not very clear. Many times I forget them when I wake up.',
              },
            ],
          },
          {
            question: 'Do you share your dreams with others?',
            versions: [
              {
                score: '5.0',
                answer:
                  'I sometimes tell my close friend. We just laugh about them. I do not talk about many details.',
              },
            ],
          },
          {
            question: 'Do you think dreams have special meanings?',
            versions: [
              {
                score: '5.0',
                answer:
                  "I am not sure. Maybe some dreams show my feelings. I think many dreams are just random.",
              },
            ],
          },
          {
            question: 'Do you want to make your dreams come true?',
            versions: [
              {
                score: '5.0',
                answer:
                  'Yes, I want some dreams to happen. I will study and work hard. It may take time, but I will try.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'box-2026-01-04-part1-topic-views-life',
    title: '话题: 景色与生活',
    cards: [
      {
        id: '2026-01-04-p1-views',
        title: 'Views',
        category: '事物题',
        categoryClass: 'object-card',
        status: 'New',
        part1Questions: [
          'Do you like taking pictures of different views?',
          'Do you prefer views in urban areas or rural areas?',
          'Do you prefer views in your own country or in other countries?',
        ],
        sampleAnswers: [
          {
            question: 'Do you like taking pictures of different views?',
            versions: [
              {
                score: '6.5',
                answer:
                  "Yes, I do. I like taking photos of different views because I'm not very knowledgeable about photography. Taking pictures from different angles helps me record more details and capture more variety.",
              },
            ],
          },
          {
            question: 'Do you prefer views in urban areas or rural areas?',
            versions: [
              {
                score: '6.5',
                answer:
                  "I prefer views in rural areas because I feel closer to nature. I've lived in cities for many years, so I'm a bit tired of seeing the same city scenes every day. Rural views make me feel relaxed and refreshed.",
              },
            ],
          },
          {
            question: 'Do you prefer views in your own country or in other countries?',
            versions: [
              {
                score: '6.5',
                answer:
                  "I like both. It doesn't matter if the views are in my own country or in another country, as long as they're beautiful or interesting. I enjoy seeing unique architecture or landscapes that are different from what I see every day.",
              },
            ],
          },
        ],
      },
      {
        id: '2026-01-04-p1-childhood-activities',
        title: 'Childhood activities',
        category: '事件题',
        categoryClass: 'event-card',
        status: 'New',
        part1Questions: [
          'What were your favorite activities when you were a child?',
          'Did you prefer to do activities alone or with a group of people when you were a child?',
        ],
        sampleAnswers: [
          {
            question: 'What were your favorite activities when you were a child?',
            versions: [
              {
                score: '6.5',
                answer:
                  "When I was a child, I was really fond of playing ping-pong. I had a lot of energy, but sports like basketball or football felt too difficult for me. Ping-pong didn't use as much energy, and it was more suitable and fun for me.",
              },
            ],
          },
          {
            question:
              'Did you prefer to do activities alone or with a group of people when you were a child?',
            versions: [
              {
                score: '6.5',
                answer:
                  "I definitely preferred doing activities with a group of people. I loved playing with kids my own age, like my friends or my cousins. There were a lot of kids in my cousin's community, and I enjoyed playing together with them.",
              },
            ],
          },
        ],
      },
      {
        id: '2026-01-04-p1-building',
        title: 'Building',
        category: '事物题',
        categoryClass: 'object-card',
        status: 'New',
        part1Questions: [
          'Are there tall buildings near your home?',
          'Do you take photos of buildings?',
          'Is there a building you would like to visit?',
          'Do you want to live in a tall building?',
        ],
        sampleAnswers: [
          {
            question: 'Are there tall buildings near your home?',
            versions: [
              {
                score: '5.0',
                answer:
                  'Near my home, there is a shopping mall, an office building, and some flats.',
              },
              {
                score: '6.5',
                answer:
                  "Yes. There are a lot of tall buildings near my home because I rent a flat in the city center. I live there with my family, and there are many high-rises around the area.",
              },
            ],
          },
          {
            question: 'Do you take photos of buildings?',
            versions: [
              {
                score: '5.0',
                answer:
                  'Yes, sometimes. If I see a building that is attractive, I will take a picture of it.',
              },
              {
                score: '6.5',
                answer:
                  "Sometimes. I don't take photos every day, but if I visit a scenic spot and see a building that looks unique or interesting, I might take a few pictures.",
              },
            ],
          },
          {
            question: 'Is there a building you would like to visit?',
            versions: [
              {
                score: '5.0',
                answer:
                  "Yes, I would like to visit the Guangzhou Tower. I went there when I was a child, but I don't remember the view clearly, so I want to go there again.",
              },
              {
                score: '6.5',
                answer:
                  "If I had the chance, I'd like to visit the Guangzhou Tower again. I've lived in Guangzhou for many years, but I've only been there once with my husband. I'd love to go again with my parents, since they live in a rural area and have never visited the tower before.",
              },
            ],
          },
          {
            question: 'Do you want to live in a tall building?',
            versions: [
              {
                score: '5.0',
                answer:
                  "No, I don't really want to live in a tall building. If I live in a tall building, I need to wait for the elevator, and I think it takes a long time. So I don't like living in tall buildings.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default initialPart1Data_2026_01_04;
