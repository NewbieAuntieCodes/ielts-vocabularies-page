import { SampleAnswerData } from '../../../../types';
import { score5Answers } from './score5';
import { score5_5Answers } from './score5.5';
import { score6_0Answers } from './score6.0';
import { score6_5Answers } from './score6.5';

const questions = [
  'Are you interested in growing vegetables and fruits?',
  'Is growing vegetables popular in your country?',
  'Do many people grow vegetables in your city?',
  'Do you think it\'s easy to grow vegetables?',
  'Should schools teach students how to grow vegetables?',
];

export const p1c8SampleAnswers: SampleAnswerData[] = questions.map(question => {
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
