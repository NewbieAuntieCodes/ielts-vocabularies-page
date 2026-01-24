import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_0Answers: { [question: string]: AnswerContent } = {
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
