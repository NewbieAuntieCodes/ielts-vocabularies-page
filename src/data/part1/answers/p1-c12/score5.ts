import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5Answers: { [question: string]: AnswerContent } = {
  'Do you have an experience when you did something well?': {
    answer: `Yes. In university, I gave a presentation. I was nervous, but I prepared a lot. It went well and I got a good grade. I felt very happy and proud.
    <br/><br/>
    It is hard to say. I try to do my best, but I always feel I can do better. So I don't have a special memory.`,
  },
  'Do you have an experience when your teacher thought you did a good job?': {
    answer: `Yes. In my high school English class, I wrote a story. My teacher liked it very much. She read it to the class. I felt very proud.
    <br/><br/>
    I can't remember. My teachers were good, but they did not often praise one student. They usually gave feedback to the whole class.`,
  },
  'Do you often tell your friends when they do something well?': {
    answer: `Yes, I do. I think it is important to encourage friends. If my friend does something well, I will tell them. It makes them happy.
    <br/><br/>
    No, not often. I am a bit shy to say nice things. But I show my support by helping them.`,
  },
};
