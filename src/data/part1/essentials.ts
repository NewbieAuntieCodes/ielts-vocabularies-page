
import { TopicData } from '../../types';

export const essentialsTopic: TopicData = {
  id: 'box-p1-essentials',
  title: '必考基础题',
  cards: [
    {
      id: 'p1-study-work',
      title: 'Study or work',
      category: '基础题',
      categoryClass: 'person-card',
      status: 'New',
      part1Questions: [
        'What subjects are you studying?',
        'Why did you choose to study that subject?',
        'Do you prefer to study in the morning or in the afternoon?',
        'What technology do you use when you study?',
        'Do you like your subject?'
      ]
    },
    {
      id: 'p1-hometown',
      title: 'Hometown',
      category: '基础题',
      categoryClass: 'place-card',
      status: 'New',
      part1Questions: [
        'What is your hometown?',
        'Do you like your hometown?',
        'How long have you been living there?',
        'What do you like most about your hometown?',
        'Is that a big city or a small town?'
      ]
    },
    {
      id: 'p1-accommodation',
      title: 'Accommodation',
      category: '基础题',
      categoryClass: 'place-card',
      status: 'New',
      part1Questions: [
        'Do you live in a house or an apartment?',
        'What can you see from the windows of your home?',
        'Which is your favourite room in your home?',
        'Would you like to move to a different home in the future?',
        'How is your home decorated?'
      ]
    },
    {
      id: 'p1-area-live-in',
      title: 'The area you live in',
      category: '基础题',
      categoryClass: 'place-card',
      status: 'New',
      part1Questions: [
        'Do you like the area that you live in?',
        'What are some changes in the area recently?',
        'Do you know any famous people in your area?',
        'Where do you like to go in that area?'
      ]
    }
  ]
};
