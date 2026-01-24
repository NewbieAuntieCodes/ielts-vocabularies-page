import { CueCardData } from '../../../types';
import { p2_c_daily_routine_answers } from './answers/p2-c-daily-routine';

export const p2_c_daily_routine: CueCardData = {
  id: 'p2-c-daily-routine',
  title: '近期日常改变',
  category: '事件题',
  categoryClass: 'event-card',
  status: 'New',
  part2Title: 'Describe a positive change that you have made recently in your daily routine',
  part2Description: 'You should say:',
  part2Prompts: [
      'What the change is',
      'How you have changed the routine',
      'Why you think it is a positive change',
      'And explain how you feel about the change',
  ],
  part3Questions: [
      'What do people normally plan in their daily lives?',
      'Is time management very important in our daily lives?',
      'What changes would people often make?',
      'Do you think it is good to change jobs frequently?',
      'Who do you think would make changes more often, young people or old people?',
      'Who should get more promotion opportunities in the workplace, young people or older people?',
  ],
  sampleAnswers: p2_c_daily_routine_answers,
};
