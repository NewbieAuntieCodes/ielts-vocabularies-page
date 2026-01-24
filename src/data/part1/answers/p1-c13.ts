import { SampleAnswerData, AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

const score5Answers: { [question: string]: AnswerContent } = {
  'Do you like buying shoes? How often?': {
    answer: `Yes, I like buying shoes. I buy new shoes every two or three months. I like to have different shoes for different clothes.
    <br/><br/>
    No, not really. I only buy new shoes when my old ones are broken. Maybe once a year. For me, shoes are for walking, not fashion.`,
  },
  'Have you ever bought shoes online?': {
    answer: `Yes, many times. It is easy and has more choices. I know my size, so it is okay. The price is also sometimes cheaper.
    <br/><br/>
    No, never. I must try shoes before buying. I want to know if they are comfortable. The size is not always the same for different shoes.`,
  },
  'How much money do you usually spend on shoes?': {
    answer: "I usually spend about 300 to 500 RMB. I think this price is good for the quality. I don't buy very expensive shoes.",
  },
  'Which do you prefer, fashionable shoes or comfortable shoes?': {
    answer: `I prefer comfortable shoes. I walk a lot every day. If my feet are not comfortable, I cannot do my work well. So comfort is number one.
    <br/><br/>
    I prefer fashionable shoes. I like to look good. I think shoes are an important part of my style. I can accept a little discomfort for fashion.`,
  },
};

const score5_5Answers: { [question: string]: AnswerContent } = {
  'Do you like buying shoes? How often?': {
    answer: `Yes, I quite enjoy it. I probably buy a new pair of shoes every few months, especially if I find a style that I really like or if there's a good sale.
    <br/><br/>
    Not particularly. I'm not a big shopper. I only purchase new shoes when my current pair is worn out, which is usually about once a year.`,
  },
  'Have you ever bought shoes online?': {
    answer: `Yes, I have. Online shopping is very convenient and offers a much wider selection. I'm confident about my size, so it's usually a smooth process.
    <br/><br/>
    No, I haven't. I'm very particular about the fit of my shoes, so I need to try them on first. I don't want to go through the hassle of returning them if they don't fit well.`,
  },
  'How much money do you usually spend on shoes?': {
    answer: "It varies, but I typically spend between 300 and 500 RMB on a good pair of sneakers. I look for a balance of quality and price; I don't need designer brands.",
  },
  'Which do you prefer, fashionable shoes or comfortable shoes?': {
    answer: `I prioritize comfort over fashion. Since I'm on my feet for most of the day, having comfortable shoes is essential for me. A stylish design is a bonus, but not a necessity.
    <br/><br/>
    I would say I lean towards fashionable shoes. I see shoes as a key accessory that can elevate an outfit. I'm willing to sacrifice a bit of comfort for a great look.`,
  },
};

const score6_0Answers: { [question: string]: AnswerContent } = {
  'Do you like buying shoes? How often?': {
    answer: `Yes, I'm a bit of a shoe enthusiast. I enjoy keeping up with the latest trends. I'd say I buy new shoes on a seasonal basis, so about four times a year.
    <br/><br/>
    No, I'm very practical when it comes to shoes. I only replace them out of necessity, not for fashion. So, I buy new shoes very infrequently, only when my old ones can no longer be worn.`,
  },
  'Have you ever bought shoes online?': {
    answer: `Yes, frequently. I find the online selection to be far superior to what's available in local stores. I always read the reviews carefully to check the sizing, and I've had good luck with it.
    <br/><br/>
    No, I'm a firm believer in trying before buying. The comfort and fit are paramount, and you can't assess that from a picture online. I prefer the traditional in-store shopping experience for footwear.`,
  },
  'How much money do you usually spend on shoes?': {
    answer: "My budget for a pair of everyday shoes is usually around 500 RMB. I believe in investing in good quality footwear because it lasts longer and is better for your feet.",
  },
  'Which do you prefer, fashionable shoes or comfortable shoes?': {
    answer: `I always opt for comfort. In my opinion, if your shoes aren't comfortable, it can ruin your whole day. Luckily, many brands now offer styles that are both comfortable and fashionable, so I don't have to compromise.
    <br/><br/>
    I admit I'm often swayed by fashion. I see shoes as a statement piece, and I enjoy expressing my personality through my footwear. For special occasions, I'll definitely choose style over comfort.`,
  },
};

const score6_5Answers: { [question: string]: AnswerContent } = {
  'Do you like buying shoes? How often?': {
    answer: `Yes, I definitely have a passion for footwear. I appreciate the craftsmanship and design that goes into a good pair of shoes. I don't buy them impulsively, but I might invest in a new pair every season to keep my collection updated.
    <br/><br/>
    Not at all. I have a very minimalist approach to shoes. I own a few versatile pairs, and I only buy new ones when the old ones are beyond repair. I see them as a utility, not a fashion item.`,
  },
  'Have you ever bought shoes online?': {
    answer: `Yes, almost exclusively. The convenience of having shoes delivered to my door, combined with the vast variety available online, is unbeatable. I'm familiar with the brands I like, so sizing is rarely an issue.
    <br/><br/>
    No, and I don't plan to. For me, buying shoes is a tactile experience. I need to feel the material, see how they look on my feet, and walk around in them. That's something the online experience simply can't replicate.`,
  },
  'How much money do you usually spend on shoes?': {
    answer: "I'm willing to invest a reasonable amount in a quality pair of shoes, perhaps up to 800 RMB. My philosophy is that well-made shoes are a long-term investment in both style and comfort.",
  },
  'Which do you prefer, fashionable shoes or comfortable shoes?': {
    answer: `Comfort is non-negotiable for me. I believe that true style comes from confidence, and I can't feel confident if my feet are in pain. My priority is always to find shoes that provide good support, and if they happen to be stylish, that's an added bonus.
    <br/><br/>
    I'm drawn to fashionable footwear. I view shoes as an art form and a way to make a bold statement. While I wouldn't wear something that causes me extreme pain, I'm certainly willing to tolerate a degree of discomfort for the sake of a cutting-edge design.`,
  },
};

const questions = [
  'Do you like buying shoes? How often?',
  'Have you ever bought shoes online?',
  'How much money do you usually spend on shoes?',
  'Which do you prefer, fashionable shoes or comfortable shoes?',
];

export const p1c13SampleAnswers: SampleAnswerData[] = questions.map(question => {
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