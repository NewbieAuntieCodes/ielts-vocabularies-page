import { TopicData } from '../../types';
import { p1c5SampleAnswers } from './answers/p1-c5';
import { p1c14SampleAnswers } from './answers/p1-c14';
import { p1c13SampleAnswers } from './answers/p1-c13';
import { p1c16SampleAnswers } from './answers/p1-c16';

export const topicDData: TopicData = {
  id: 'box-part1-topic-d',
  title: '话题: 事物',
  cards: [
    { 
      id: 'p1-c5', 
      title: 'Advertisement', 
      category: '事物题', 
      categoryClass: 'object-card', 
      status: 'New',
      part1Questions: [
        'Is there an advertisement that made an impression on you when you were a child?',
        'Do you see a lot of advertising on trains or other transport?',
        'Do you like advertisements?',
        'What kind of advertising do you like?',
        'Do you often see advertisements when you are on your phone or computer?',
      ],
      sampleAnswers: p1c5SampleAnswers,
    },
    { 
      id: 'p1-c14', 
      title: 'Rules', 
      category: '事物题', 
      categoryClass: 'object-card', 
      status: 'New',
      part1Questions: [
        'Are there any rules for students at your school?',
        'Do you think students would benefit more from more rules?',
        'Have you ever had a really dedicated teacher?',
        'Do you prefer to have more or fewer rules at school?',
        'Have you ever had a really strict teacher?',
        'Would you like to work as a teacher in a rule-free school?',
      ],
      sampleAnswers: p1c14SampleAnswers,
    },
    { 
      id: 'p1-c13', 
      title: 'Shoes', 
      category: '事物题', 
      categoryClass: 'object-card', 
      status: 'New',
      part1Questions: [
        'Do you like buying shoes? How often?',
        'Have you ever bought shoes online?',
        'How much money do you usually spend on shoes?',
        'Which do you prefer, fashionable shoes or comfortable shoes?',
      ],
       sampleAnswers: p1c13SampleAnswers,
    },
    { 
      id: 'p1-c16', 
      title: 'Plants', 
      category: '事物题', 
      categoryClass: 'object-card', 
      status: 'New',
      part1Questions: [
        'Do you keep plants at home?',
        'What plant did you grow when you were young?',
        'Do you know anything about growing a plant?',
        'Do Chinese people send plants as gifts?',
      ],
       sampleAnswers: p1c16SampleAnswers,
    },
  ]
};