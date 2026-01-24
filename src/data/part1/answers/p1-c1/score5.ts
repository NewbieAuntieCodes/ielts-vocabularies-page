import { AnswerVersion } from '../../../../types';

// Omit score, as it's defined by the file name
type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5Answers: { [question: string]: AnswerContent } = {
  'Do you have a friend you have known for a long time?': {
    answer: `Yes, I have a good friend. Her name is Li Mei. We met in middle school. We have known each other for a long time, more than ten years.
    <br/><br/>
    No, not really. I have moved to different cities a few times. So, it is hard to keep old friends. I have some good friends now, but I have not known them for very long.`,
  },
  'What do you usually do with your friends?': {
    answer: "We do many things. We often go to a coffee shop to talk. Sometimes we go shopping or see a movie.",
  },
  'Where do you often meet each other?': {
    answer: "We usually meet at a coffee shop near my home. It is quiet and nice there. Sometimes we meet at a shopping mall. We can eat and shop there. It is easy. Where we meet depends on our plan.",
  },
  'How often do you go out with your friends?': {
    answer: "I try to meet my friends every week, like on a weekend. But sometimes we are all busy with work or school. So, we meet maybe two or three times a month. We talk on the phone if we cannot meet.",
  },
  'How important are friends to you?': {
    answer: "Friends are very important to me. They are like my family. If I have a problem, I can talk to them. They give me good ideas. When I am happy, I tell them about it. Without friends, life is not interesting.",
  },
  'Do you prefer to spend time with one friend or with a group of friends?': {
    answer: "I like both. It depends. If I want to talk about something serious, I like to meet just one friend. But for fun, like a party, I like a big group. It is more fun with more people.",
  },
  'Would you invite friends to your home?': {
    answer: `Yes. I like to ask my good friends to come to my home. We can cook, watch TV, and relax. It is more comfortable at home. It is also private. My parents also like my friends.
    <br/><br/>
    No, not usually. My home is quite small and far from the city center. It is not very convenient for my friends to come over. We usually prefer to meet somewhere outside, like a cafe.`,
  },
  'Is there a difference between where you meet friends now and where you used to meet them in the past?': {
    answer: `Yes, it is very different. In the past, when I was a student, we met at school or in a park. We had no money. Now, I have a job, so I have money. We often meet in a restaurant or a coffee shop.
    <br/><br/>
    No, not much difference. When I was young, I met my friends in parks or cafes. Now, we still meet in similar places. We like places where we can sit and talk for a long time.`,
  },
  'Why are some places suitable for meeting while others are not?': {
    answer: "Some places are good for meeting friends. For example, a coffee shop is good because it is quiet and we can talk. A library is not good because you must be quiet. A crowded place is also not good, like a train station. It is hard to talk there.",
  },
};