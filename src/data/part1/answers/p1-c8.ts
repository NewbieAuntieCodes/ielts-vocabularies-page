import { SampleAnswerData, AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

const score5Answers: { [question: string]: AnswerContent } = {
  'Are you interested in growing vegetables and fruits?': {
    answer: `Yes, I am. I think it is nice to eat food you grow yourself. I live in an apartment, but I grow some small plants on my balcony.
    <br/><br/>
    No, not really. It is hard work. I am busy. I like to buy vegetables from the market. It is easier.`,
  },
  'Is growing vegetables popular in your country?': {
    answer: `Yes, for old people. Many old people in the countryside have gardens. Some young people also like it as a hobby.
    <br/><br/>
    No, not very popular. Most people live in cities. They have no space for gardens. They are too busy.`,
  },
  'Do many people grow vegetables in your city?': {
    answer: `Yes, some people do. They use their balconies to grow vegetables in pots. There are also some community gardens in my city.
    <br/><br/>
    No, not many. Most people live in tall buildings. There is not enough space. So it is not common.`,
  },
  'Do you think it\'s easy to grow vegetables?': {
    answer: `I think some vegetables are easy, like tomatoes. They just need sun and water. You don't need to be an expert.
    <br/><br/>
    No, I think it is difficult. You need to know how much water and sun they need. You must be patient.`,
  },
  'Should schools teach students how to grow vegetables?': {
    answer: `Yes, I think it is a good idea. It is a good lesson. Children can learn where food comes from. It also teaches them to be responsible.
    <br/><br/>
    No, I don't think so. Schools have other important subjects, like math. Students can learn to grow vegetables from their parents if they want.`,
  },
};

const score5_5Answers: { [question: string]: AnswerContent } = {
  'Are you interested in growing vegetables and fruits?': {
    answer: `Yes, I am quite interested. I think it would be satisfying to eat something you've grown yourself. Although I live in an apartment, I have a few small herb plants on my balcony.
    <br/><br/>
    No, I'm not particularly interested. It seems like a lot of hard work, and I have a busy schedule. I prefer the convenience of buying fresh vegetables from the supermarket.`,
  },
  'Is growing vegetables popular in your country?': {
    answer: `Yes, it is, especially among the older generation. Many retired people in rural areas have their own vegetable gardens. It's also becoming a hobby for some young city dwellers.
    <br/><br/>
    Not really. The majority of people live in cities where there isn't much space for gardening. Most people are too busy with work to take up this kind of hobby.`,
  },
  'Do many people grow vegetables in your city?': {
    answer: `Yes, a fair number of people do. It's common to see people using their balconies for container gardening. There are also a few community gardens where residents can rent a small plot of land.
    <br/><br/>
    No, not a lot of people. The main reason is the lack of space in a crowded city like mine. Most people live in high-rise buildings, so it's not very practical.`,
  },
  'Do you think it\'s easy to grow vegetables?': {
    answer: `I think it depends on the plant. Some vegetables, like leafy greens or cherry tomatoes, are relatively easy for beginners. They don't require a lot of special care.
    <br/><br/>
    No, I don't think it's easy. You need to have some knowledge about soil, watering, and sunlight. It also requires patience and regular attention, which can be challenging.`,
  },
  'Should schools teach students how to grow vegetables?': {
    answer: `Yes, I think they should. It's a very practical skill. It teaches children about nature and where their food comes from. It could also encourage them to eat more healthily.
    <br/><br/>
    I'm not sure it's necessary. Schools already have a very full curriculum with core subjects like science and math. Gardening is something children can learn at home if they are interested.`,
  },
};

const score6_0Answers: { [question: string]: AnswerContent } = {
  'Are you interested in growing vegetables and fruits?': {
    answer: `Yes, I'm definitely interested in it. There's a certain satisfaction in harvesting your own food. While my apartment doesn't have a garden, I've managed to grow some cherry tomatoes and herbs in pots on my balcony.
    <br/><br/>
    Honestly, it's not really my thing. It requires a lot of time and effort, which I can't spare right now. I find it much more practical to just pick up what I need from the local market.`,
  },
  'Is growing vegetables popular in your country?': {
    answer: `I'd say it's quite popular, particularly with older people in the countryside who often have large gardens. However, it's also a growing trend among younger people in cities, who see it as a relaxing and sustainable hobby.
    <br/><br/>
    It's not a mainstream activity, I would say. Most of the population is urban, and living in high-rise apartments makes gardening difficult. People's busy lifestyles also mean they prefer the convenience of buying produce.`,
  },
  'Do many people grow vegetables in your city?': {
    answer: `Yes, a surprising number of people do. Balcony gardening has become quite trendy. You see all sorts of vegetables growing in containers. Also, some neighborhoods have established community gardens which are very popular.
    <br/><br/>
    No, it's quite rare. Given that most people reside in apartments with limited space, gardening isn't a feasible hobby. It's much more common for people to rely on supermarkets and local markets.`,
  },
  'Do you think it\'s easy to grow vegetables?': {
    answer: `I believe it can be easy if you start with the right plants. For example, things like lettuce and radishes are quite low-maintenance. However, other vegetables can be quite demanding and require more expertise.
    <br/><br/>
    From what I've heard, it's quite challenging. It's not just about watering; you have to consider factors like soil quality, pests, and the right amount of sunlight. It seems like a real science.`,
  },
  'Should schools teach students how to grow vegetables?': {
    answer: `Yes, I strongly believe so. It's a valuable life skill. It would teach children about sustainability and nutrition in a very hands-on way. I think it would give them a better appreciation for their food.
    <br/><br/>
    While it's a nice idea, I think schools should prioritize core academic subjects. Gardening could be offered as an optional after-school activity, but I don't think it should be a mandatory part of the curriculum.`,
  },
};

const score6_5Answers: { [question: string]: AnswerContent } = {
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

const questions = [
  'Are you interested in growing vegetables and fruits?',
  'Is growing vegetables popular in your country?',
  'Do many people grow vegetables in your city?',
  'Do you think it\'s easy to grow vegetables?',
  'Should schools teach students how to grow vegetables?',
];

export const p1c8SampleAnswers: SampleAnswerData[] = questions.map(question => {
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
