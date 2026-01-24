import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5_5Answers: { [question: string]: AnswerContent } = {
  'Do you have an experience when you did something well?': {
    answer: `Yes, I do. I remember a university presentation I gave last year. I was quite nervous, but I prepared for a week. The professor and my classmates seemed to like it, and I received a high score. It was a great feeling of accomplishment.
    <br/><br/>
    That's a tough question. I'm a bit of a perfectionist, so I always see room for improvement. While I've had successes, I don't have one specific memory that stands out as 'doing something perfectly'.`,
  },
  'Do you have an experience when your teacher thought you did a good job?': {
    answer: `Yes, in my high school literature class, I wrote an essay about a classic novel. My teacher was very impressed and even asked me to read it aloud to the class. Her praise was very motivating for me.
    <br/><br/>
    I can't recall a specific moment. My teachers usually gave general feedback to the class as a whole rather than singling out individual students for praise.`,
  },
  'Do you often tell your friends when they do something well?': {
    answer: `Yes, I always try to. I believe encouragement is really important in a friendship. When I see a friend achieve something, I make sure to congratulate them and tell them I'm proud.
    <br/><br/>
    I'm not very expressive with words. Instead of saying something, I prefer to show my support through actions, like celebrating with them or offering my help for their next project.`,
  },
};
