import { TopicData } from '../../types';
import { p1c1SampleAnswers } from './answers/p1-c1';

export const topicAData: TopicData = {
  id: 'box-part1-topic-a',
  title: '话题: 人物与社交',
  cards: [
    {
      id: 'p1-c1',
      title: 'Friends',
      category: '人物题',
      categoryClass: 'person-card',
      status: 'New',
      part1Questions: [
        'Do you have a friend you have known for a long time?',
        'What do you usually do with your friends?',
        'Where do you often meet each other?',
        'How often do you go out with your friends?',
        'How important are friends to you?',
        'Do you prefer to spend time with one friend or with a group of friends?',
        'Would you invite friends to your home?',
        'Is there a difference between where you meet friends now and where you used to meet them in the past?',
        'Why are some places suitable for meeting while others are not?',
      ],
      sampleAnswers: p1c1SampleAnswers
    },
    { 
      id: 'p1-c11', 
      title: 'Staying with old people', 
      category: '事件题', 
      categoryClass: 'event-card', 
      status: 'New',
      part1Questions: [
        'Have you ever worked with old people?',
        'Are you happy to work with people who are older than you?',
        'What are the benefits of being friends with or working with old people?',
        'Do you enjoy spending time with old people?',
      ],
      sampleAnswers: [
        {
          question: 'Have you ever worked with old people?',
          versions: [
            {
                score: '5.0',
                answer: `Yes, I have. Last summer, I volunteered at a community center for old people. I helped them with activities and just talked with them. It was a good experience.
                <br/><br/>
                No, I have not worked with old people in a job. I am a student. But I often help my grandparents at their home. I help them clean or use the computer. So, I have some experience.`
            },
            {
                score: '5.5',
                answer: `Yes, I have. During my summer break last year, I volunteered at a local community center for senior citizens. My main role was to assist with daily activities and chat with them. It was a really rewarding experience.
                <br/><br/>
                No, I haven't had a formal job working with older adults because I'm still a student. However, I often spend time helping my grandparents with things like shopping or using their smartphones, so I have some experience interacting with them.`
            },
            {
                score: '6.0',
                answer: `Yes, I did. I had a part-time job at a nursing home for a few months. My responsibilities included helping to organize recreational activities like board games and reading sessions. It was quite an eye-opening experience, and I learned a lot about the challenges and wisdom of the elderly.
                <br/><br/>
                Professionally, no, as my studies haven't led me in that direction. But on a personal level, I frequently collaborate with my grandparents on household projects. For example, we recently built a small garden together. I find I learn a great deal from their practical skills and life experience.`
            },
            {
                score: '6.5',
                answer: `Absolutely. I had a wonderful opportunity last summer to intern at an organization that provides support for the elderly. I was involved in coordinating social events and providing companionship. It was an incredibly humbling experience that gave me a profound appreciation for the older generation.
                <br/><br/>
                While I haven't been formally employed in a capacity that involves working with seniors, I've had extensive informal experience. I volunteer weekly at a local library where I run a 'Tech Help' session for older people, teaching them how to use computers and smartphones. It's something I find deeply fulfilling.`
            }
          ]
        },
        {
          question: 'Are you happy to work with people who are older than you?',
          versions: [
            {
                score: '5.0',
                answer: `Yes, I would be happy. Old people have a lot of experience. I can learn many things from them. They are often patient. They can be good teachers for young people.
                <br/><br/>
                I have never thought about it. I think it depends on the person, not their age. If they are nice and easy to work with, I would be happy. Their age is not important to me.`
            },
            {
                score: '5.5',
                answer: `Yes, I would be quite happy to. I think older people have a wealth of experience, so I could learn a lot from them. They are generally very patient and can be great mentors for younger colleagues.
                <br/><br/>
                I haven't really considered it before. I believe it's more about the individual's personality than their age. If they are kind, cooperative, and respectful, I would definitely enjoy working with them. Age isn't a factor for me.`
            },
            {
                score: '6.0',
                answer: `Yes, I think it would be a very positive experience. Older colleagues often bring a different perspective and a lot of wisdom to the workplace. I believe their experience could be a valuable asset to any team, and I would be eager to learn from their insights.
                <br/><br/>
                I'm open to it. For me, a good working relationship depends on mutual respect and effective communication, not on age. As long as we can collaborate well and contribute to the team's goals, I don't see why age would be an issue.`
            },
            {
                score: '6.5',
                answer: `Without a doubt. I would actually relish the opportunity. Working alongside older individuals provides a unique chance for mentorship and learning. Their accumulated knowledge and calm demeanor, especially under pressure, are qualities I admire and would hope to learn from. It would be a privilege.
                <br/><br/>
                Honestly, age is irrelevant to me in a professional setting. What matters is a person's attitude, work ethic, and expertise. I would be equally happy to work with someone older or younger than me, as long as they are a good team player and we share a common goal.`
            }
          ]
        },
        {
          question: 'What are the benefits of being friends with or working with old people?',
          versions: [
            {
                score: '5.0',
                answer: "There are good things. They can give good ideas for problems. They also tell interesting stories about the past. This is like a history lesson. When I am with them, I feel calm."
            },
            {
                score: '5.5',
                answer: "There are several benefits. They can offer great advice on life's problems because they've seen so much. They also share fascinating stories about the past, which is like getting a living history lesson. Plus, I find that being around them has a calming effect."
            },
            {
                score: '6.0',
                answer: "The benefits are numerous. From a practical standpoint, their life experience is a huge asset; they can provide guidance that you simply can't find in books. On a personal level, they often have a more relaxed perspective on life, which can be very grounding. Their stories also offer a unique window into history and different ways of life."
            },
            {
                score: '6.5',
                answer: "There are profound advantages. Firstly, they offer a unique perspective shaped by decades of experience, which can be incredibly valuable for both personal and professional growth. Secondly, friendships with older people can be very stable and enriching; they often value deep conversation over superficial activities. Finally, they connect us to our own history and heritage, reminding us of where we came from."
            }
          ]
        },
        {
          question: 'Do you enjoy spending time with old people?',
          versions: [
            {
                score: '5.0',
                answer: `Yes, I like it. I like spending time with my grandparents. It is very relaxing. We usually talk, drink tea and watch TV. When I am with them, I feel very calm and happy.
                <br/><br/>
                Sometimes. I like listening to my grandparents' stories. But sometimes we have nothing to talk about because our interests are very different. So it depends on the situation.`
            },
            {
                score: '5.5',
                answer: `Yes, I do. I especially enjoy spending time with my grandparents. It's usually very relaxing. We often just chat, drink tea, and watch television together. I feel very peaceful and content when I'm with them.
                <br/><br/>
                It depends. I enjoy listening to my grandparents' stories from when they were young. But sometimes, it's hard to find common topics to talk about because our interests can be quite different. So, it really varies.`
            },
            {
                score: '6.0',
                answer: `Yes, for the most part, I find it very pleasant. I particularly cherish the time I spend with my grandparents. It’s a very calm and comfortable experience. We might not do anything exciting, but the simple act of sharing stories or a quiet meal together is something I value highly.
                <br/><br/>
                I would say I enjoy it in moderation. While I deeply respect the elderly and enjoy hearing their perspectives, I also need to connect with people my own age who share my current interests and life stage. So, a balance is important for me.`
            },
            {
                score: '6.5',
                answer: `Absolutely, I find it incredibly rewarding. Spending time with older individuals, like my grandparents, offers a sense of tranquility that's rare in today's fast-paced world. The conversations are often more meaningful, and I always walk away feeling like I've learned something valuable about life, history, or even myself.
                <br/><br/>
                On the whole, yes. While there can sometimes be a generational gap in terms of interests, I make an effort to find common ground. I appreciate their wisdom and the different pace of their lives. I find that if you approach it with an open mind, spending time with them can be a very enriching and grounding experience.`
            }
          ]
        }
      ]
    },
  ]
};