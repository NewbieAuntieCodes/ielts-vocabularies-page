import { SampleAnswerData } from '../../../../types';
import { score5Answers } from './score5';
import { score5_5Answers } from './score5.5';
import { score6_0Answers } from './score6.0';
import { score6_5Answers } from './score6.5';

const questions = [
  'Do you have an experience when you did something well?',
  'Do you have an experience when your teacher thought you did a good job?',
  'Do you often tell your friends when they do something well?',
];

export const p1c12SampleAnswers: SampleAnswerData[] = questions.map(question => {
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
