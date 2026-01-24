import { AnswerVersion } from '../../../../types';

// Omit score, as it's defined by the file name
type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5Answers: { [question: string]: AnswerContent } = {
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
