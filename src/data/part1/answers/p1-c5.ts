import { SampleAnswerData, AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

const score5Answers: { [question: string]: AnswerContent } = {
  'Is there an advertisement that made an impression on you when you were a child?': {
    answer: `Yes, I remember an ad for a candy. It was very colorful and had a happy song. When I saw it, I wanted to eat the candy.
    <br/><br/>
    No, I don't remember any ads from when I was a child. I was more interested in playing outside.`,
  },
  'Do you see a lot of advertising on trains or other transport?': {
    answer: `Yes, a lot. On the subway, there are ads everywhere on the walls. There are also TVs that show ads. You can't miss them.
    <br/><br/>
    No, not in my town. I live in a small town. We don't have a subway. On buses, there are some ads, but not many.`,
  },
  'Do you like advertisements?': {
    answer: "It depends. I like funny and interesting ads. But I don't like boring ads that show again and again. Some ads on the internet are very annoying.",
  },
  'What kind of advertising do you like?': {
    answer: "I like ads that tell a short story. They are creative. They don't just sell things, they make you feel something.",
  },
  'Do you often see advertisements when you are on your phone or computer?': {
    answer: `Yes, all the time. When I watch videos online, there are ads. When I use social media, there are ads. It is very common.
    <br/><br/>
    No, not really. I use an ad-blocker on my computer, so I don't see many ads. On my phone, some apps have no ads because I pay for them.`,
  },
};

const score5_5Answers: { [question: string]: AnswerContent } = {
  'Is there an advertisement that made an impression on you when you were a child?': {
    answer: `Yes, I vividly remember a TV commercial for a popular soft drink. It had a catchy jingle and showed a group of friends having fun on a beach. It made the drink seem very cool.
    <br/><br/>
    No, not really. I didn't pay much attention to ads as a kid. I was probably too busy watching the cartoons themselves.`,
  },
  'Do you see a lot of advertising on trains or other transport?': {
    answer: `Yes, definitely. When I take the subway, I see advertisements everywhere – on the walls of the station, inside the train cars, and on small screens. They are impossible to ignore.
    <br/><br/>
    Not so much. My hometown is quite small and doesn't have a subway system. The buses have some ads, but it's not overwhelming.`,
  },
  'Do you like advertisements?': {
    answer: "I have mixed feelings. I enjoy advertisements that are creative or have a good story. However, I really dislike pop-up ads on the internet and commercials that interrupt my videos. They can be very disruptive.",
  },
  'What kind of advertising do you like?': {
    answer: "I'm a fan of advertisements that use humor. A funny ad is more memorable and makes me feel positive about the brand. I also like ads with beautiful visuals, like those for cars or perfume.",
  },
  'Do you often see advertisements when you are on your phone or computer?': {
    answer: `Yes, constantly. It feels like every app and website has advertisements now. When I scroll through social media or watch a video on YouTube, I see ads every few minutes.
    <br/><br/>
    Not so often on my computer because I have an ad-blocker installed. But on my phone, it's harder to avoid them, especially in free apps and games.`,
  },
};

const score6_0Answers: { [question: string]: AnswerContent } = {
  'Is there an advertisement that made an impression on you when you were a child?': {
    answer: `Absolutely. There was a particular animated advertisement for a brand of milk that really stuck with me. It featured a cute cartoon cow, and the slogan was very memorable. It was on TV all the time, and it made me ask my mom to buy that specific brand.
    <br/><br/>
    To be honest, I can't recall any specific ads. My childhood was more about playing outdoors than watching television, so I wasn't exposed to a lot of advertising.`,
  },
  'Do you see a lot of advertising on trains or other transport?': {
    answer: `Yes, public transport is saturated with advertising. On the subway, for example, you're surrounded by posters and digital screens displaying ads. It's a constant stream of commercial messages from the moment you enter the station.
    <br/><br/>
    Not really. In my town, public transport advertising is quite minimal. You might see a few posters on the side of a bus, but it's nothing compared to the advertising bombardment you experience in a major city.`,
  },
  'Do you like advertisements?': {
    answer: "It's a love-hate relationship. On one hand, I can appreciate a well-made, clever advertisement as a form of art. But on the other hand, the sheer volume of ads we see every day can be overwhelming and intrusive, especially online.",
  },
  'What kind of advertising do you like?': {
    answer: "I'm drawn to advertisements that are storytelling-driven. The ones that feel like a mini-movie, with a plot and emotional depth, are the most effective for me. They engage you on a different level than a simple product demonstration.",
  },
  'Do you often see advertisements when you are on your phone or computer?': {
    answer: `Yes, it's an integral part of being online. My social media feeds are filled with sponsored posts, and most video platforms have pre-roll ads. It's something you just have to get used to if you want to access free content.
    <br/><br/>
    I've taken steps to minimize them. I use an ad-blocker on my web browser and I subscribe to premium versions of some services, like YouTube, to get an ad-free experience. It makes a big difference.`,
  },
};

const score6_5Answers: { [question: string]: AnswerContent } = {
  'Is there an advertisement that made an impression on you when you were a child?': {
    answer: `Yes, one advertisement that has stayed with me is a public service announcement about saving water. It showed a single drop of water turning into a tear, which was a very powerful image. It made me conscious of water conservation from a very young age. It was quite impactful.
    <br/><br/>
    I can't say I do. My parents were quite strict about screen time, so my exposure to television commercials was limited. As a result, no particular advertisement from my childhood left a lasting impression.`,
  },
  'Do you see a lot of advertising on trains or other transport?': {
    answer: `Absolutely. It's unavoidable. In a major city like mine, every available space on public transport seems to be monetized. From huge digital billboards in subway stations to video ads playing on loop inside the buses, you're constantly exposed to advertising. It's a very prominent feature of the daily commute.
    <br/><br/>
    It's not a significant presence in my town. We have a more low-key approach. There are some advertisements on the local buses, but they are quite discreet and not at all intrusive, which I personally appreciate.`,
  },
  'Do you like advertisements?': {
    answer: "My opinion is quite nuanced. I appreciate advertising for its creativity and its role in informing consumers. A witty or visually stunning ad can be genuinely entertaining. However, I'm very critical of intrusive and repetitive advertising, which I feel disrespects the viewer's time and attention.",
  },
  'What kind of advertising do you like?': {
    answer: "I particularly enjoy advertisements that are subtle and thought-provoking. Instead of a hard sell, they create a mood or tell a compelling story that connects with the brand's values. I find this approach much more sophisticated and respectable.",
  },
  'Do you often see advertisements when you are on your phone or computer?': {
    answer: `Yes, digital advertising is ubiquitous. Whether I'm browsing news websites, using social media, or watching streaming services, I'm constantly encountering targeted ads. It's a pervasive aspect of the modern internet experience.
    <br/><br/>
    I try to limit my exposure as much as possible. I use ad-blocking software quite effectively on my laptop. On my phone, I'm very selective about the apps I use and I'm willing to pay for premium versions to avoid the constant interruptions from advertisements.`,
  },
};

const questions = [
  'Is there an advertisement that made an impression on you when you were a child?',
  'Do you see a lot of advertising on trains or other transport?',
  'Do you like advertisements?',
  'What kind of advertising do you like?',
  'Do you often see advertisements when you are on your phone or computer?',
];

export const p1c5SampleAnswers: SampleAnswerData[] = questions.map(question => {
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