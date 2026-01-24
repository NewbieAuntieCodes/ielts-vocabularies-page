import { SampleAnswerData } from '../../../../types';
import { score5Answers } from './score5';
import { score5_5Answers } from './score5.5';
import { score6_0Answers } from './score6.0';
import { score6_5Answers } from './score6.5';

// This list should match the `part1Questions` in topicA.ts for the 'Friends' card
const questions = [
  'Do you have a friend you have known for a long time?',
  'What do you usually do with your friends?',
  'Where do you often meet each other?',
  'How often do you go out with your friends?',
  'How important are friends to you?',
  'Do you prefer to spend time with one friend or with a group of friends?',
  'Would you invite friends to your home?',
  'Is there a difference between where you meet friends now and where you used to meet them in the past?',
  'Why are some places suitable for meeting while others are not?',
];

export const p1c1SampleAnswers: SampleAnswerData[] = questions.map(question => {
  const versions = [];
  if (score5Answers[question]) {
    versions.push({ score: '5.0', ...score5Answers[question] });
  }
  if (score5_5Answers[question]) {
    versions.push({ score: '5.5', ...score5_5Answers[question] });
  }
  if (score6_0Answers[question]) {
    versions.push({ score: '6.0', ...score6_0Answers[question] });
  }
  if (score6_5Answers[question]) {
    versions.push({ score: '6.5', ...score6_5Answers[question] });
  }

  return {
    question,
    versions,
  };
}).filter(qa => qa.versions.length > 0); // Only include questions that have at least one answer version
