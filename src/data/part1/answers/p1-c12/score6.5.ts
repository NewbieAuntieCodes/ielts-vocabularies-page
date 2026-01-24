import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_5Answers: { [question: string]: AnswerContent } = {
  'Do you have an experience when you did something well?': {
    answer: `Absolutely. A recent example would be a complex project I led at work. There were many challenges and a tight deadline, but I managed to coordinate the team effectively, and we delivered the project successfully. The positive feedback from my manager was incredibly rewarding.
    <br/><br/>
    That's a difficult question because my definition of 'well' is always evolving. While I've received positive feedback on many occasions, I'm always focused on the next challenge and how I can improve my performance further.`,
  },
  'Do you have an experience when your teacher thought you did a good job?': {
    answer: `Yes, one particular memory stands out. For my final university thesis, my professor commented that it was one of the most well-researched papers he'd read that year. That compliment meant a great deal to me, as I had poured months of effort into it.
    <br/><br/>
    While I don't recall a specific instance of overt praise, I had teachers who showed their appreciation in other ways, for example, by giving me more challenging assignments or trusting me with leadership roles in group projects, which I took as a sign of their confidence in my abilities.`,
  },
  'Do you often tell your friends when they do something well?': {
    answer: `Yes, I'm a firm believer in celebrating my friends' successes, big or small. I think positive reinforcement is vital. Voicing my admiration for their achievements not only makes them feel good but also strengthens our bond.
    <br/><br/>
    I'd like to think I show my support, though perhaps not always verbally. I'm the type of person who will be the first to show up to their performance or exhibition. For me, actions often speak louder than words when it comes to showing I care.`,
  },
};
