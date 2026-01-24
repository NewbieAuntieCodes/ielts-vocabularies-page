import { CueCardData } from '../../../types';
import { p2_c_exciting_activity_answers } from './answers/p2-c-exciting-activity';

export const p2_c_exciting_activity: CueCardData = {
  id: 'p2-c-exciting-activity',
  title: '第一次尝试的兴奋活动',
  category: '事件题',
  categoryClass: 'event-card',
  status: 'New',
  part2Title: 'Describe an exciting activity you have tried for the first time',
  part2Description: 'You should say:',
  part2Prompts: [
      'What it is',
      'When/where you did it',
      'Why you thought it was exciting',
      'And explain how you felt about it',
  ],
  part3Questions: [
      'Why are some people unwilling to try new things?',
      'Do you think fear stops people from trying new things?',
      'Why are some people keen on doing dangerous activities?',
      'Do you think that children adapt to new things more easily than adults?',
      'What can people learn from doing dangerous activities?',
      'What are the benefits of trying new things?',
  ],
  sampleAnswers: p2_c_exciting_activity_answers,
};
