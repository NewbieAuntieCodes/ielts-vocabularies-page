import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_0Answers: { [question: string]: AnswerContent } = {
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
