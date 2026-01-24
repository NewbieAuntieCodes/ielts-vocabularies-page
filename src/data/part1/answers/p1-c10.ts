import { SampleAnswerData, AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

const score5Answers: { [question: string]: AnswerContent } = {
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

const score5_5Answers: { [question: string]: AnswerContent } = {
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

const score6_0Answers: { [question: string]: AnswerContent } = {
  'Do you bring food or snacks with you when going out?': {
    answer: `Yes, I usually do. I'm a bit of a planner, so I like to have a snack like a protein bar with me. It saves me from buying something unhealthy if I suddenly get hungry.
    <br/><br/>
    Not really. I prefer to travel light. Unless I'm going on a long trip or a hike, I don't carry food with me. It's so easy to find something to eat in the city.`,
  },
  'Do you always take your mobile phone with you when going out?': {
    answer: `Yes, 100% of the time. My phone is like my digital wallet and my map. I use it for everything from paying for my coffee to navigating public transport. I'd feel quite vulnerable without it.
    <br/><br/>
    I try to, but sometimes I intentionally leave it behind, for example, if I'm going for a run in the park. I find it's a good way to disconnect and be more present in the moment.`,
  },
  'Do you often bring cash with you?': {
    answer: `I do. Although I primarily use mobile payments, I always keep some cash on me as a backup. You never know when you might encounter a technical issue or visit a place that's cash-only.
    <br/><br/>
    Almost never. I've fully embraced the cashless lifestyle. Mobile payment is accepted virtually everywhere I go, so carrying cash feels unnecessary and a bit old-fashioned to me.`,
  },
  'How often do you use cash?': {
    answer: "Hardly ever. I might use cash a few times a year, perhaps to give a tip or at a very traditional market. In my daily life, I would say 99% of my transactions are digital.",
  },
};

const score6_5Answers: { [question: string]: AnswerContent } = {
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
