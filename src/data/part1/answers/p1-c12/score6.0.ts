import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_0Answers: { [question: string]: AnswerContent } = {
  'Do you have an experience when you did something well?': {
    answer: `Yes, one experience that comes to mind is when I organized a charity event in my community. It was a lot of hard work, but we successfully raised a good amount of money. Seeing it all come together so well gave me a huge sense of satisfaction.
    <br/><br/>
    It's hard to pinpoint one instance. I always strive to do my best in everything, but I'm also my own harshest critic. So while I've completed many tasks successfully, I tend to focus on what could have been done better.`,
  },
  'Do you have an experience when your teacher thought you did a good job?': {
    answer: `I do. In a design class, we had a project to create a poster. My teacher really liked my concept and the visual execution. She displayed it in the classroom for the rest of the semester, which made me feel incredibly proud.
    <br/><br/>
    I don't have a distinct memory of that happening. My teachers were generally quite professional and tended to provide constructive criticism rather than outright praise, which I think was also helpful in its own way.`,
  },
  'Do you often tell your friends when they do something well?': {
    answer: `Yes, I make it a point to. I think acknowledging a friend's hard work and success is crucial for a strong relationship. A simple "well done" or "I'm so impressed" can really boost their confidence.
    <br/><br/>
    I'm probably not as vocal as I should be. I feel happy for them, but sometimes I'm a bit reserved about giving praise directly. It's something I'm trying to be better at.`,
  },
};
