import { SampleAnswerData, AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

const score5Answers: { [question: string]: AnswerContent } = {
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

const score5_5Answers: { [question: string]: AnswerContent } = {
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

const score6_0Answers: { [question: string]: AnswerContent } = {
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

const score6_5Answers: { [question: string]: AnswerContent } = {
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

const questions = [
  'Do you have an experience when you did something well?',
  'Do you have an experience when your teacher thought you did a good job?',
  'Do you often tell your friends when they do something well?',
];

export const p1c12SampleAnswers: SampleAnswerData[] = questions.map(question => {
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
