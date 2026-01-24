import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_0Answers: { [question: string]: AnswerContent } = {
  'Do you have a friend you have known for a long time?': {
    answer: `Yes, of course. I have a really good friend named Li Mei, and we've known each other since we were in middle school. That means we've been friends for more than 10 years. We've shared a lot of memories together and have always been there for each other.
    <br/><br/>
    To be honest, not really. My family relocated several times when I was younger, which made it challenging to keep in touch with old friends. I've made some wonderful friends where I live now, but I haven't known them for a very long time.`,
  },
  'What do you usually do with your friends?': {
    answer: "It depends on our mood, really. We often just meet up at a café to chat and catch up on things. Other times, if we feel more energetic, we might decide to go shopping together or see a new film that's just been released.",
  },
  'Where do you often meet each other?': {
    answer: "Our usual meeting spot is a café located halfway between my home and my friend's place, which is convenient for both of us. We like it because it has a relaxed atmosphere. Occasionally, we'll arrange to meet at a park if the weather is pleasant.",
  },
  'How often do you go out with your friends?': {
    answer: "I make an effort to hang out with my friends on a weekly basis, typically on Saturdays. Since we all have demanding schedules with work, coordinating can be a challenge. We rely heavily on messaging apps to communicate during the week.",
  },
  'How important are friends to you?': {
    answer: "My friends are vital to my well-being. They're my support system, the people I turn to for advice. Sharing experiences with them, both good and bad, makes life much more meaningful. I honestly can't imagine my life without their companionship.",
  },
  'Do you prefer to spend time with one friend or with a group of friends?': {
    answer: "I enjoy both, but for different reasons. I prefer one-on-one meetings for more personal and serious conversations. However, for social events like birthdays or holidays, being in a larger group is definitely more festive and enjoyable.",
  },
  'Would you invite friends to your home?': {
    answer: "Of course. I love hosting my friends at my place. It offers a more comfortable and private setting where we can just relax, maybe cook a meal together, and not worry about the time. It feels more personal than meeting in a public place.",
  },
  'Is there a difference between where you meet friends now and where you used to meet them in the past?': {
    answer: "There's a significant difference. Back in our student days, our options were limited by budget, so we would usually meet on campus or at inexpensive food courts. Nowadays, since we're financially independent, we tend to choose more comfortable venues, like stylish cafes or nice restaurants.",
  },
  'Why are some places suitable for meeting while others are not?': {
    answer: "The suitability of a place really depends on the purpose of the meeting. For catching up, a place like a café is ideal because it allows for easy conversation. On the other hand, a place like a library is unsuitable due to the need for silence, and a crowded nightclub would be a poor choice for a heart-to-heart talk because of the noise level.",
  },
};
