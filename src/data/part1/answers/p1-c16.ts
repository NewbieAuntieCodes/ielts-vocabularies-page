import { SampleAnswerData, AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

const score5Answers: { [question: string]: AnswerContent } = {
  'Do you keep plants at home?': {
    answer: `Yes, I do. I have a few small plants on my desk. They make my room look nice. I like to see green things.
    <br/><br/>
    No, I don't. I am not good at taking care of plants. I always forget to water them.`,
  },
  'What plant did you grow when you were young?': {
    answer: "I remember growing a bean in school. My teacher gave it to me. I put it in a small pot. I was very happy when I saw it grow.",
  },
  'Do you know anything about growing a plant?': {
    answer: `Yes, a little. I know plants need water and sun. Some plants need more sun than others. I learned this from my mom.
    <br/><br/>
    No, not much. I just know they need water. I don't know about soil or other things.`,
  },
  'Do Chinese people send plants as gifts?': {
    answer: `Yes, sometimes. For a new home or a new shop, people give a big plant. It means good luck.
    <br/><br/>
    I don't think it's very common. People like to give fruit or tea as gifts. Plants are nice, but maybe not everyone can take care of them.`,
  },
};

const score5_5Answers: { [question: string]: AnswerContent } = {
  'Do you keep plants at home?': {
    answer: `Yes, I have a couple of small potted plants on my windowsill. They add a bit of green to my room and make the air feel fresher. I enjoy looking after them.
    <br/><br/>
    No, I don't. I'm afraid I don't have a green thumb. I've tried before, but I always end up forgetting to water them, so I gave up.`,
  },
  'What plant did you grow when you were young?': {
    answer: "In primary school, we had a science project to grow a bean sprout. I remember putting a bean in a cup with wet cotton. I was so excited to check on it every day and see it sprout and grow leaves.",
  },
  'Do you know anything about growing a plant?': {
    answer: `I know the basics. Plants need sunlight, water, and good soil to grow. I also know that you shouldn't water them too much. I learned these things from online articles.
    <br/><br/>
    Honestly, I know very little. Apart from the fact that they need sunlight and water, I'm quite clueless about gardening. I wouldn't know what kind of soil or fertilizer to use.`,
  },
  'Do Chinese people send plants as gifts?': {
    answer: `Yes, it's quite common for certain occasions. For example, when someone opens a new business or moves into a new home, it's popular to send a large potted plant as a gift to wish them success and prosperity.
    <br/><br/>
    It happens, but it's not as popular as other gifts like fruits or fine tea. I think it's because taking care of a plant requires some effort, and not everyone might appreciate that responsibility.`,
  },
};

const score6_0Answers: { [question: string]: AnswerContent } = {
  'Do you keep plants at home?': {
    answer: `Yes, I do. I have a small collection of houseplants, like a snake plant and a spider plant. I find that they really liven up my apartment and improve the atmosphere. It's also a relaxing hobby for me.
    <br/><br/>
    No, unfortunately. I love the idea of having plants, but I have a very busy schedule and I'm worried I wouldn't be able to give them the attention they need.`,
  },
  'What plant did you grow when you were young?': {
    answer: "I have a fond memory of growing a sunflower with my grandfather. We planted the seed in his garden, and he taught me how to water it and make sure it got enough sun. I was amazed at how tall it grew.",
  },
  'Do you know anything about growing a plant?': {
    answer: `I have some practical knowledge. I understand the importance of proper drainage in pots and the need to choose plants that suit the light conditions in my home. I've learned most of what I know from watching gardening videos online.
    <br/><br/>
    I'm a complete novice, to be honest. I'm aware of the fundamental requirements like water and light, but beyond that, my knowledge is very limited. I wouldn't know how to deal with pests or choose the right soil.`,
  },
  'Do Chinese people send plants as gifts?': {
    answer: `Yes, definitely. Potted plants, especially orchids or lucky bamboo, are very popular gifts for occasions like a housewarming or the Spring Festival. They symbolize growth, life, and good fortune, which makes them a very meaningful present.
    <br/><br/>
    It's not the most conventional gift, I would say. While some people appreciate receiving plants, most people would probably prefer something more practical or edible. It really depends on the recipient's personal taste and lifestyle.`,
  },
};

const score6_5Answers: { [question: string]: AnswerContent } = {
  'Do you keep plants at home?': {
    answer: `Absolutely. My apartment is filled with greenery. I find that having plants around creates a more tranquil and healthy living environment. Tending to them is a form of meditation for me; it's a very grounding activity.
    <br/><br/>
    No, I don't. While I appreciate the beauty of plants, I know that I lack the commitment required to keep them alive. I'd rather admire them in a park or a botanical garden than be responsible for their well-being at home.`,
  },
  'What plant did you grow when you were young?': {
    answer: "I distinctly remember my first gardening project was growing cherry tomatoes on my family's balcony. My father taught me how to care for them. The experience of planting a seed and eventually harvesting the ripe, red tomatoes was incredibly rewarding and sparked my interest in where food comes from.",
  },
  'Do you know anything about growing a plant?': {
    answer: `I'd say I have a decent understanding. I'm familiar with concepts like different soil types, the importance of nutrients, and how to prune plants to encourage growth. It's a fascinating subject, and I'm always learning something new from books and online forums.
    <br/><br/>
    I'm afraid my knowledge is extremely basic. I can keep a hardy plant alive by watering it occasionally, but that's the extent of my abilities. The science behind horticulture is something I have yet to explore.`,
  },
  'Do Chinese people send plants as gifts?': {
    answer: `Yes, it's a very common practice, deeply rooted in cultural symbolism. For instance, giving a money tree is a way of wishing someone financial prosperity, while an orchid represents elegance and friendship. So, a plant is often more than just a decorative item; it carries a specific blessing.
    <br/><br/>
    While it's not an everyday gift, it's certainly a popular choice for specific events. I think it's becoming more fashionable, especially among younger people who are more environmentally conscious and appreciate a gift that is sustainable and long-lasting.`,
  },
};

const questions = [
  'Do you keep plants at home?',
  'What plant did you grow when you were young?',
  'Do you know anything about growing a plant?',
  'Do Chinese people send plants as gifts?',
];

export const p1c16SampleAnswers: SampleAnswerData[] = questions.map(question => {
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