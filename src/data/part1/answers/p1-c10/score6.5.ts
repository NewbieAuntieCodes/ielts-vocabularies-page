import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_5Answers: { [question: string]: AnswerContent } = {
  'Do you bring food or snacks with you when going out?': {
    answer: `As a habit, yes. I almost always have something small to eat in my bag, like a handful of nuts or a piece of fruit. It's a simple way to ensure I have a healthy option available and avoid impulse buys.
    <br/><br/>
    Generally, no. I find it more of a hassle to carry food around. Part of the experience of going out for me is trying local cafes or food stalls, so I prefer to buy something when I'm there.`,
  },
  'Do you always take your mobile phone with you when going out?': {
    answer: `Absolutely, it's indispensable. It serves as my communication device, wallet, map, and entertainment source all in one. Leaving home without it would feel like leaving a part of my brain behind.
    <br/><br/>
    While I take it with me 99% of the time, I do make a conscious effort to leave it at home occasionally, like when I'm going for a walk to clear my head. It's a deliberate choice to have some 'digital detox' time.`,
  },
  'Do you often bring cash with you?': {
    answer: `Yes, I always carry a bit of cash for peace of mind. While I predominantly use digital payments for their convenience, having cash is a reliable fallback in case of emergencies or for situations where digital payments aren't an option.
    <br/><br/>
    No, I've pretty much gone completely cashless. The payment infrastructure in my city is so advanced that cash has become obsolete for me. I can't even remember the last time I needed to use it.`,
  },
  'How often do you use cash?': {
    answer: "Extremely infrequently. The only time I might use cash is for very specific, rare occasions, like giving a cash gift in a red envelope. For all my daily purchases, from my morning coffee to my groceries, it's all done digitally.",
  },
};
