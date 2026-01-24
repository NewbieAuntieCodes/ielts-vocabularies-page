import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_5Answers: { [question: string]: AnswerContent } = {
  'Do you have a friend you have known for a long time?': {
    answer: `Definitely. I'm lucky enough to have a very close friend, Li Mei, whom I've known for what feels like a lifetime—over ten years, in fact. We first met back in middle school and we've been inseparable ever since. It's quite special to have a friendship that has lasted that long.
    <br/><br/>
    Unfortunately, I don't. Due to moving cities several times throughout my life, I haven't been able to maintain those kinds of long-lasting friendships. While I cherish the friends I have now, I do sometimes wish I had a friend who has known me since I was a child.`,
  },
  'What do you usually do with your friends?': {
    answer: "Our activities are quite diverse, actually. A typical get-together might involve grabbing a coffee at our favorite local spot to catch up on each other's lives. However, we also enjoy more recreational activities, like going shopping for the latest trends or catching a blockbuster movie at the cinema. It really just depends on our mood.",
  },
  'Where do you often meet each other?': {
    answer: "We're quite flexible, but our go-to spot is a quaint little coffee shop in the city center. It's got a great ambiance for conversation. Alternatively, if we're in the mood for some fresh air, we'll opt for a stroll in a nearby park, which is a wonderful change of scenery.",
  },
  'How often do you go out with your friends?': {
    answer: "I'd say we manage to get together pretty regularly, at least once a week, usually over the weekend. Juggling our work commitments can be tricky, but we make it a priority to catch up in person. In between, we're constantly in touch via our group chat.",
  },
  'How important are friends to you?': {
    answer: "Friends are absolutely indispensable to me. They offer a unique kind of support and perspective that you can't always get from family. They're the ones I celebrate my successes with and lean on during difficult times. Life would be significantly less rich and enjoyable without them.",
  },
  'Do you prefer to spend time with one friend or with a group of friends?': {
    answer: "It really depends on the context. For an intimate chat where I can really open up, I much prefer the company of a single close friend. However, when it comes to social gatherings or celebrating an occasion, being part of a lively group dynamic is far more exhilarating.",
  },
  'Would you invite friends to your home?': {
    answer: "Yes, all the time. I'm a firm believer that hosting friends at home creates a warmer and more intimate atmosphere. We can be ourselves, play some music, maybe even experiment with a new recipe, all without the distractions or time constraints of a public venue.",
  },
  'Is there a difference between where you meet friends now and where you used to meet them in the past?': {
    answer: "Yes, definitely. When we were younger and on a tight budget, our hangouts were simple – school libraries, parks, or fast-food joints. Now that we're professionals with disposable income, our tastes have evolved. We tend to gravitate towards more sophisticated settings like artisanal coffee shops or highly-rated restaurants.",
  },
  'Why are some places suitable for meeting while others are not?': {
    answer: "A place's suitability is determined by the intended social interaction. An ideal spot facilitates the kind of engagement you're looking for. For instance, cafes are perfect for conversation, whereas cinemas are great for a shared experience but not for talking. Places like libraries are inherently unsuitable for socializing due to strict noise rules, making them counterproductive for a friendly catch-up.",
  },
};
