import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5_5Answers: { [question: string]: AnswerContent } = {
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
