
import { TopicData } from '../../../types';

const topics: TopicData[] = [
  {
    id: 'box-2025-05-08-p2-people',
    title: '话题: 人物类',
    cards: [
      {
        id: 'p2-58-person-1',
        title: '有趣的人',
        category: '人物类',
        categoryClass: 'person-card',
        status: 'New',
        part2Title: 'Describe an interesting person you would like to spend time with',
        part2Description: 'You should say:',
        part2Prompts: [
          'Who this person is',
          'How you knew him/her',
          'What you would like to do with him/her',
          'And explain why you want to spend time with him/her'
        ]
      }
    ]
  },
  {
    id: 'box-2025-05-08-p2-places',
    title: '话题: 地点类',
    cards: [
      {
        id: 'p2-58-place-1',
        title: '理想的房子',
        category: '地点类',
        categoryClass: 'place-card',
        status: 'New',
        part2Title: 'Describe an ideal house or apartment you would like to live in',
        part2Description: 'You should say:',
        part2Prompts: [
          'Where it is',
          'What it looks like',
          'Who you would like to live with',
          'And explain why you would like to live there'
        ]
      }
    ]
  },
  {
    id: 'box-2025-05-08-p2-objects',
    title: '话题: 事物类',
    cards: []
  },
  {
    id: 'box-2025-05-08-p2-events',
    title: '话题: 事件类',
    cards: []
  }
];

export default topics;
