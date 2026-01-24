import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5Answers: { [question: string]: AnswerContent } = {
  'Do you bring food or snacks with you when going out?': {
    answer: `Yes, I do. I usually put a small snack, like an apple, in my bag. I get hungry easily, so it's good to have food with me.
    <br/><br/>
    No. If I go out for a short time, I don't bring food. It is easy to buy food outside.`,
  },
  'Do you always take your mobile phone with you when going out?': {
    answer: `Yes, always. I never leave home without my phone. I use it to call people, pay for things, and find my way. It is very important.
    <br/><br/>
    Almost always. But if I just go for a short walk nearby, I sometimes leave it at home. It is nice to be without a phone for a short time.`,
  },
  'Do you often bring cash with you?': {
    answer: `Yes, I always have some cash. Many places use mobile pay, but some small shops only take cash. It is good to be ready.
    <br/><br/>
    No, not often. I use my phone to pay for everything. It is very easy. I only keep a little cash for an emergency.`,
  },
  'How often do you use cash?': {
    answer: "Not often. Maybe once a month. I only use cash at some very small street food places. For all other things, I use my phone.",
  },
};
