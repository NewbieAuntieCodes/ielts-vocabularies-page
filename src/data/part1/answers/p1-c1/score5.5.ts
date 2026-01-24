import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5_5Answers: { [question: string]: AnswerContent } = {
  'Do you have a friend you have known for a long time?': {
    answer: `Absolutely. My best friend is someone I've known since middle school, so we've been friends for over a decade now. Her name is Li Mei. We've gone through a lot together.
    <br/><br/>
    Not really. Because my family moved a couple of times, it's been difficult to maintain long-term friendships. I have some great friends at the moment, but our relationships are relatively new.`,
  },
  'What do you usually do with your friends?': {
    answer: "Well, it varies. Most of the time, we enjoy just hanging out at a cozy coffee shop and chatting for hours. If we're looking for something more active, we might go shopping downtown or catch the latest movie.",
  },
  'Where do you often meet each other?': {
    answer: "We usually meet at a convenient place for both of us, like a coffee shop downtown. It's a nice, quiet place to talk. Sometimes, if the weather is good, we'll go to a park.",
  },
  'How often do you go out with your friends?': {
    answer: "I try to see my friends at least once a week, usually on the weekend. We are all quite busy with our jobs, so it can be difficult to find time. We use social media to stay in touch.",
  },
  'How important are friends to you?': {
    answer: "Friends are extremely important to me. They provide emotional support, and I can share my happiness and sadness with them. Life would be very boring without them.",
  },
  'Do you prefer to spend time with one friend or with a group of friends?': {
    answer: "It depends on the situation. For a deep conversation, I prefer to meet with just one friend. But for celebrating something or just having fun, I enjoy being with a big group of friends.",
  },
  'Would you invite friends to your home?': {
    answer: "Yes, definitely. I enjoy having my close friends over to my apartment. We can cook dinner together or watch a movie. It's much more relaxed than going out.",
  },
  'Is there a difference between where you meet friends now and where you used to meet them in the past?': {
    answer: "Yes, there is a big difference. When we were students, we often met on campus or at a cheap restaurant. Now that we have jobs, we prefer to go to nicer places like cafes or trendy restaurants.",
  },
  'Why are some places suitable for meeting while others are not?': {
    answer: "Well, a good place for meeting friends should be quiet enough to have a conversation, like a cafe. A library or a noisy bar would not be suitable because it's hard to talk. It also depends on the activity we plan to do.",
  },
};
