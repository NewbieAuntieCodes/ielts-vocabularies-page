import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5_5Answers: { [question: string]: AnswerContent } = {
  'Do you bring food or snacks with you when going out?': {
    answer: `Yes, quite often. I usually pack a piece of fruit or a granola bar in my bag just in case I get hungry. It's more convenient and healthier than buying snacks outside.
    <br/><br/>
    Not usually. If I'm only going out for a few hours, I don't bother. There are so many cafes and convenience stores around, so it's very easy to buy something if I need to.`,
  },
  'Do you always take your mobile phone with you when going out?': {
    answer: `Yes, absolutely. My phone is essential. I use it for navigation, mobile payments, and of course, communication. I would feel lost without it.
    <br/><br/>
    Most of the time, yes. However, if I'm just popping out to the local shop for a minute, I might leave it at home. It's nice to have a short break from being connected all the time.`,
  },
  'Do you often bring cash with you?': {
    answer: `Yes, I make sure to carry a small amount of cash. While mobile payments are very popular, some smaller vendors or traditional markets still prefer cash. It's better to be prepared.
    <br/><br/>
    Rarely. I rely almost completely on mobile payments. It's so convenient that I hardly ever need cash. I might keep a small note in my wallet just for emergencies.`,
  },
  'How often do you use cash?': {
    answer: "Very rarely. I'd say I use cash maybe once or twice a month, usually at a small street market. For almost all my other expenses, I use my phone to pay.",
  },
};
