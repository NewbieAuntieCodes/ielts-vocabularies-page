import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_5Answers: { [question: string]: AnswerContent } = {
  'Are you interested in growing vegetables and fruits?': {
    answer: `Absolutely. I find the idea of home gardening quite appealing. There's a unique sense of accomplishment that comes from nurturing a plant and then enjoying the fresh produce. I have a small balcony garden where I grow things like mint and basil, and I find it very therapeutic.
    <br/><br/>
    To be honest, I've never been drawn to gardening. It requires a significant amount of patience and knowledge, and I'm not sure I have either. I appreciate the convenience and variety offered by grocery stores, so I'm happy to leave the growing to the experts.`,
  },
  'Is growing vegetables popular in your country?': {
    answer: `It's certainly a popular pastime, especially for the older generation living in rural areas, where it's common to have a small plot of land for a vegetable garden. Interestingly, there's also a rising interest among urban youth, who are embracing balcony gardening as a way to connect with nature and eat more healthily.
    <br/><br/>
    I wouldn't say it's a widespread practice. The urban-centric lifestyle of most people means that private gardens are a luxury few can afford. While there's some interest, the practicality of buying from markets far outweighs the desire to grow your own food for the average person.`,
  },
  'Do many people grow vegetables in your city?': {
    answer: `Yes, it's becoming increasingly common. With the rise of urban gardening, many people are creatively using their balconies and even windowsills to grow small vegetables and herbs. Community gardens are also gaining popularity, fostering a sense of community around sustainable living.
    <br/><br/>
    No, it's not a common sight in my city. The fast-paced urban lifestyle and the lack of space in modern apartments make home gardening an impractical hobby for the vast majority of residents.`,
  },
  'Do you think it\'s easy to grow vegetables?': {
    answer: `I think the difficulty is often overestimated. With some basic research online, anyone can start with a few easy-to-grow plants. The key is to start small and learn as you go. It's a rewarding process that's accessible to almost everyone.
    <br/><br/>
    No, I think it's deceptively difficult. While it may seem simple, successful gardening requires a deep understanding of plant biology, soil chemistry, and pest control. It's a skill that takes years to master properly.`,
  },
  'Should schools teach students how to grow vegetables?': {
    answer: `Yes, I'm a strong advocate for this. Integrating gardening into the school curriculum would be immensely beneficial. It's a fantastic, practical way to teach biology, environmental science, and responsibility. It also promotes a healthier relationship with food.
    <br/><br/>
    I believe it should be an extracurricular option rather than a mandatory subject. While valuable, not all students may be interested, and school timetables are already packed. Making it an optional club would cater to interested students without adding pressure to the curriculum.`,
  },
};
