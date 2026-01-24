import { SampleAnswerData } from '../../../../types';
import { score5Answers } from './score5';
import { score5_5Answers } from './score5.5';
import { score6_0Answers } from './score6.0';
import { score6_5Answers } from './score6.5';

const questions = [
  'Do you bring food or snacks with you when going out?',
  'Do you always take your mobile phone with you when going out?',
  'Do you often bring cash with you?',
  'How often do you use cash?',
];

export const p1c10SampleAnswers: SampleAnswerData[] = questions.map(question => {
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
}).filter(qa => qa.versions.length > 0);
