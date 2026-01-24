import { TopicData } from '../../types';
import { p1c8SampleAnswers } from './answers/p1-c8';
import { p1c10SampleAnswers } from './answers/p1-c10';
import { p1c12SampleAnswers } from './answers/p1-c12';

export const topicCData: TopicData = {
  id: 'box-part1-topic-c',
  title: '话题: 活动与爱好',
  cards: [
    { 
      id: 'p1-c2', 
      title: 'Sharing', 
      category: '事件题', 
      categoryClass: 'event-card', 
      status: 'New',
      part1Questions: [
          'Did your parents teach you to share when you were a child?',
          'What kind of things do you like to share with others?',
          'What kind of things are not suitable for sharing?',
          'Do you have anything to share with others recently?',
          'Who is the first person you would like to share good news with?',
          'Do you prefer to share news with your friends or your parents?',
      ],
      sampleAnswers: [
          {
            question: 'Did your parents teach you to share when you were a child?',
            versions: [
              {
                score: '5.0',
                answer: `Yes. My parents told me to share. When I was a child, I shared my toys and food with my friends. It is a good thing to do.
                <br/><br/>
                Not really. I was the only child. I had no brothers or sisters. I learned to share at school.`
              },
              {
                score: '5.5',
                answer: `Yes, they did. My parents always taught me the importance of sharing. I remember they encouraged me to share my toys and snacks with my friends. They said it was a good way to make new friends.
                <br/><br/>
                Not directly. As the only child, I didn't have any siblings to share with at home. So I mostly learned about sharing from my teachers at kindergarten during group activities.`
              },
              {
                score: '6.0',
                answer: `Absolutely. My parents placed a strong emphasis on sharing. From a young age, they taught me that sharing things like toys or snacks was a way to show kindness and build friendships. It was a key lesson in my childhood.
                <br/><br/>
                Actually, not so much at home since I was an only child. My main experience with sharing came from school, where teachers would organize group activities that required us to share materials and cooperate with each other.`
              },
              {
                score: '6.5',
                answer: `Yes, definitely. That was one of the first values my parents instilled in me. They always explained that sharing was not just about giving things away, but about being considerate of others. I clearly remember being encouraged to share my toys whenever friends came over to play.
                <br/><br/>
                Interestingly, not explicitly at home, because being an only child meant I didn't have many opportunities to. I really learned the concept of sharing in a practical sense once I started preschool. It was there that I understood the importance of taking turns and sharing with my classmates.`
              }
            ]
          },
          { 
            question: 'What kind of things do you like to share with others?', 
            versions: [
              {
                score: '5.0',
                answer: "I like to share food with my friends. I also share fun videos with them. Sharing is a good way to be close to friends."
              },
              {
                score: '5.5',
                answer: "I enjoy sharing snacks and interesting things I find online, like a funny video or a good article. I feel that sharing these small things can bring a lot of joy and strengthen my friendships."
              },
              {
                score: '6.0',
                answer: "I'm always happy to share food with people around me, whether it's snacks at the office or a meal I've cooked. I also enjoy sharing knowledge or experiences, like recommending a great book or talking about a trip I've taken."
              },
              {
                score: '6.5',
                answer: "I would say I most enjoy sharing experiences with others. For example, if I discover a fantastic new restaurant or a beautiful park, I'll immediately tell my friends about it. Sharing food and good music are also things I love to do, as it creates a nice, communal feeling."
              }
            ] 
          },
          { 
            question: 'What kind of things are not suitable for sharing?', 
            versions: [
              {
                score: '5.0',
                answer: "I think we should not share personal things, like a toothbrush. It is not clean. We also should not share secrets. It is not right."
              },
              {
                score: '5.5',
                answer: "I believe personal items like toothbrushes or towels shouldn't be shared for hygiene reasons. Also, it's not appropriate to share someone else's secret, as that's a breach of trust."
              },
              {
                score: '6.0',
                answer: "Obviously, personal hygiene products such as a toothbrush are not meant for sharing. On a different note, I think things like passwords or very personal information should be kept private. Sharing them could lead to security issues or misunderstandings."
              },
              {
                score: '6.5',
                answer: "Well, for practical reasons, things related to personal hygiene, like a toothbrush or razor, are definitely not suitable for sharing. Besides that, I think very personal secrets or confidential work information are also things you should never share, as it could damage trust and relationships."
              }
            ] 
          },
          {
            question: 'Do you have anything to share with others recently?',
            versions: [
              {
                score: '5.0',
                answer: `Yes. I read a good book last week. I told my best friend about it. She liked the story.
                <br/><br/>
                No. I am very busy with my work these days. I have no new things to share.`
              },
              {
                score: '5.5',
                answer: `Yes, just the other day I discovered a new coffee shop with amazing cake. I immediately sent a message to my friends in our group chat with a picture, recommending that we all go together next weekend.
                <br/><br/>
                Not really, life has been quite routine lately. With my busy schedule, I haven't had much time for new experiences that would be interesting to share.`
              },
              {
                score: '6.0',
                answer: `Yes, actually. I recently watched a very thought-provoking documentary about the environment, and I've been telling all my friends and family about it. I shared some key facts I learned and encouraged them to watch it too.
                <br/><br/>
                Nothing specific comes to mind. I've been quite focused on my studies recently, so my daily life has been pretty standard. I haven't come across anything particularly new or exciting to share.`
              },
              {
                score: '6.5',
                answer: `As a matter of fact, yes. I've recently started using a new productivity app that has really helped me organize my schedule. I was so impressed with it that I shared a link and a brief review with my colleagues, as I thought it could help them too.
                <br/><br/>
                To be honest, not particularly. Things have been quite calm and routine for me lately, so there hasn't been any major news or exciting discovery that I felt the need to share with everyone.`
              }
            ]
          },
          { 
            question: 'Who is the first person you would like to share good news with?', 
            versions: [
              {
                score: '5.0',
                answer: "I tell my best friend first. She is always happy for me. I call her when I have good news."
              },
              {
                score: '5.5',
                answer: "Usually, the first person I share good news with is my best friend. We are very close, and I know she will be genuinely happy and excited for me."
              },
              {
                score: '6.0',
                answer: "Without a doubt, it would be my mother. We have a very close relationship, and she's always my biggest supporter. Sharing my achievements with her and seeing her proud smile is one of the best feelings."
              },
              {
                score: '6.5',
                answer: "That would definitely be my partner. He's the person I'm closest to, and he's always there for me through thick and thin. Sharing a moment of success with him feels like we're achieving it together, which makes it even more special."
              }
            ] 
          },
          { 
            question: 'Do you prefer to share news with your friends or your parents?', 
            versions: [
              {
                score: '5.0',
                answer: "It depends. For small news, I tell my friends. For big news, like finding a job, I tell my parents. They can give me good advice."
              },
              {
                score: '5.5',
                answer: "It really depends on the type of news. For casual, everyday things, I'm more likely to tell my friends. But for major life events, like a career change, I would definitely share it with my parents first because their advice is very important to me."
              },
              {
                score: '6.0',
                answer: "I'd say it's a mix. I share social news or things related to hobbies with my friends, as we have more in common in those areas. However, for significant news concerning my career or future plans, I tend to consult my parents first for their wisdom and experience."
              },
              {
                score: '6.5',
                answer: "I think it depends on the context. I often share lighthearted news and personal stories with my friends because we're on the same wavelength. For more serious matters or major accomplishments, I turn to my parents. Their perspective is invaluable, and sharing good news with them is a way of showing my gratitude."
              }
            ] 
          }
      ]
    },
    { 
      id: 'p1-c6', 
      title: 'Borrowing/lending', 
      category: '事件题', 
      categoryClass: 'event-card', 
      status: 'New',
      part1Questions: [
          'Have you borrowed books from others?',
          'Have you ever borrowed money from others?',
          'Do you like to lend things to others?',
          'How do you feel when people don\'t return things they borrowed from you?',
          'Do you mind if others borrow money from you?',
      ],
      sampleAnswers: [
          {
            question: 'Have you borrowed books from others?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, I have. I often borrow books from the library. Sometimes I borrow books from my friends. It saves money.
                <br/><br/>
                No, I like to buy my own books. I can write notes in them. I sometimes read e-books online.`
              },
              {
                score: '5.5',
                answer: `Yes, I do it quite often. I'm a member of the local library, and I borrow books from there regularly. I also sometimes borrow books from friends if they recommend something interesting. It's a great way to save money and read more.
                <br/><br/>
                No, I generally prefer buying my own books. I like to make notes in the margins, which I can't do with borrowed books. I also use e-readers a lot, so I buy and download books online.`
              },
              {
                score: '6.0',
                answer: `Yes, absolutely. I'm an avid reader, and I frequently borrow books from both the public library and my friends. I find it's a very economical way to access a wide variety of books without cluttering my home with ones I might only read once.
                <br/><br/>
                Not typically, no. I'm the kind of person who likes to own my books. I enjoy highlighting passages and writing notes as I read, and that's something you can't really do with a book that doesn't belong to you. Plus, I like building my personal collection.`
              },
              {
                score: '6.5',
                answer: `Yes, I do that all the time. I'm a huge fan of our local library system, so I'm constantly borrowing books from there. It's a fantastic resource. On top of that, my friends and I often swap books after we've finished them. It's a sustainable way to share stories and discover new authors without spending a fortune.
                <br/><br/>
                Actually, I rarely borrow books. I have a strong preference for owning the books I read. I find it more rewarding because I can interact with the text by underlining key points or jotting down my thoughts. It also means I can revisit them anytime I want.`
              }
            ]
          },
          {
            question: 'Have you ever borrowed money from others?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, a few times. Sometimes I forget my wallet, so I borrow a little money from my friend for lunch. I always pay back on the same day.
                <br/><br/>
                No, I have never borrowed money. I am careful with my money. I always have enough money with me.`
              },
              {
                score: '5.5',
                answer: `Yes, on rare occasions. For example, if a shop only accepts cash and I don't have any, I might borrow a small amount from a friend. I make sure to return it as soon as possible.
                <br/><br/>
                No, never. I'm quite careful with my finances, so I've never been in a situation where I needed to borrow money from someone.`
              },
              {
                score: '6.0',
                answer: `Yes, but only for very small amounts and from close friends. For instance, if I'm short a few dollars for a coffee, I might ask a friend. I always make it a point to pay them back immediately, often using a mobile payment app.
                <br/><br/>
                No, I've managed to avoid it so far. I feel that borrowing money can sometimes complicate friendships, so I try to be financially independent and live within my means.`
              },
              {
                score: '6.5',
                answer: `Yes, I have, but only in minor situations from people I trust completely. It might be something as simple as splitting a dinner bill where one person pays first. I'm very strict about repaying any debt immediately to maintain trust. I would never borrow a large sum of money.
                <br/><br/>
                No, I haven't. I personally feel a bit uncomfortable with the idea of borrowing money from friends or family. I prefer to manage my own budget carefully to ensure I don't need to ask others for financial help.`
              }
            ]
          },
          {
            question: 'Do you like to lend things to others?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, I like to lend things to my close friends. I trust them. For example, I can lend them a book or my charger. It is okay.
                <br/><br/>
                No, not really. I worry people will not be careful with my things. They might lose them or break them. So I don't like to lend my things.`
              },
              {
                score: '5.5',
                answer: `Yes, I'm happy to lend things to my close friends because I know they will take care of them. Things like books, chargers, or an umbrella are fine with me.
                <br/><br/>
                I'm a bit hesitant. I've had bad experiences where my things were returned late or damaged. So now, I only lend things that are not very valuable or important to me.`
              },
              {
                score: '6.0',
                answer: `It depends on the person and the item. For my trusted friends, I'm quite generous and don't mind lending most things. But for more valuable items, like my camera, I would be much more cautious.
                <br/><br/>
                Generally, I'm not a big fan of lending my belongings. I'm quite particular about how my things are handled, and I worry that they might get damaged. It's not about being selfish; it's more about avoiding potential awkwardness if something goes wrong.`
              },
              {
                score: '6.5',
                answer: `Yes, for the most part. I believe in helping friends out, so I'm generally open to lending things. However, it's based on trust. With close friends, I'm very willing to share, but I would probably say no if it was someone I don't know very well.
                <br/><br/>
                I'm quite reluctant to lend my things, to be honest. I value my possessions, and I can't stand it when they are not treated with care. To avoid any potential conflict or damage, I usually prefer not to lend things out unless it's an absolute emergency.`
              }
            ]
          },
          { 
            question: 'How do you feel when people don\'t return things they borrowed from you?', 
            versions: [
              {
                score: '5.0',
                answer: "I feel a bit angry. I think people should return things. It is about being responsible. I will ask them one time to give it back."
              },
              {
                score: '5.5',
                answer: "I feel quite annoyed. I think it's a matter of respect and responsibility to return things promptly. I would probably send them a polite reminder to ask for it back."
              },
              {
                score: '6.0',
                answer: "It's quite frustrating, to be honest. It makes me feel like my trust has been taken for granted. Depending on the item and the person, I would either remind them gently or decide not to lend them anything again in the future."
              },
              {
                score: '6.5',
                answer: "I find it very disappointing. To me, it reflects poorly on their character and their respect for our friendship. I would give them the benefit of the doubt and remind them once, but if it happens repeatedly, it would definitely make me reconsider lending them anything else."
              }
            ] 
          },
          {
            question: 'Do you mind if others borrow money from you?',
            versions: [
              {
                score: '5.0',
                answer: `If it is a small amount of money, I don't mind lending it to my close friends. I am happy to help them.
                <br/><br/>
                Yes. I think lending money can make friendship difficult. I don't like to mix money and friends.`
              },
              {
                score: '5.5',
                answer: `For small amounts, I don't mind at all, especially with close friends. However, I would be very hesitant to lend a large sum of money because it can easily lead to problems.
                <br/><br/>
                Yes, I generally mind. I believe that money matters can strain relationships, so I prefer to avoid lending money to friends or family unless it is a real emergency.`
              },
              {
                score: '6.0',
                answer: `I'm okay with lending small amounts to friends I trust completely, for things like a meal or a coffee. But when it comes to larger amounts, I would have to say no. I think it's a good policy to keep finances and friendships separate.
                <br/><br/>
                Yes, I'm quite uncomfortable with it. I've heard too many stories about friendships being ruined over money. I would rather offer help in other ways than lend cash.`
              },
              {
                score: '6.5',
                answer: `My policy is that I'm willing to give small amounts of money to close friends as a gift if they are in need, but I don't 'lend' money. This way, there's no expectation of repayment and no potential for our friendship to be damaged by financial issues.
                <br/><br/>
                Yes, I do mind. I feel that financial matters are very personal, and lending money can create an awkward power dynamic in a friendship. To preserve the relationship, I prefer to avoid such situations altogether.`
              }
            ]
          }
      ]
    },
    { 
      id: 'p1-c7', 
      title: 'Chatting', 
      category: '事件题', 
      categoryClass: 'event-card', 
      status: 'New',
      part1Questions: [
          'Do you like chatting with friends?',
          'What do you usually chat about with friends?',
          'Do you prefer to chat with a group of people or with only one friend?',
          'Do you prefer to communicate face-to-face or via social media?',
          'Do you argue with friends?',
      ],
      sampleAnswers: [
          {
            question: 'Do you like chatting with friends?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, I like chatting with my friends very much. It is relaxing. Talking to them makes me happy.
                <br/><br/>
                Not so much. I am a quiet person. I like to do things with my friends, like watch a movie. I don't like to just sit and talk for a long time.`
              },
              {
                score: '5.5',
                answer: `Yes, I really enjoy it. Chatting with my friends is one of my favorite ways to relax. It's a great way to catch up and it always makes me feel happy and connected.
                <br/><br/>
                Not particularly. I'm more of a quiet person. I prefer doing activities with my friends, like watching a movie or playing a sport, rather than just sitting and talking for hours.`
              },
              {
                score: '6.0',
                answer: `Yes, absolutely. I find chatting with friends to be very enjoyable and relaxing. It's my go-to way to unwind and share what's been happening in our lives. It really helps me de-stress after a busy week.
                <br/><br/>
                Honestly, I'm not a big chatter. I'm quite introverted, so I prefer to connect with friends through shared activities. I find that doing something together, like hiking, is a better way for me to bond with them than just talking.`
              },
              {
                score: '6.5',
                answer: `Definitely. For me, having a good chat with friends is essential. It's not just relaxing; it's how I maintain those close bonds. Sharing stories and listening to their experiences makes me feel supported and understood. It's a fundamental part of my social life.
                <br/><br/>
                I wouldn't say I'm a huge fan of long chats. While I value my friends, I'm more of an action-oriented person. I'd much rather suggest we go for a walk or try a new restaurant. I find that we connect more deeply through shared experiences rather than just conversation.`
              }
            ]
          },
          { 
            question: 'What do you usually chat about with friends?', 
            versions: [
              {
                score: '5.0',
                answer: "We talk about many things. We talk about our life, our work, and our school. We also talk about movies and music."
              },
              {
                score: '5.5',
                answer: "We usually chat about what's going on in our lives, like our studies or jobs. We also talk about common interests, such as new movies, music, or interesting news we've seen online."
              },
              {
                score: '6.0',
                answer: "Our conversations cover a wide range of topics. We often discuss our daily lives, sharing any recent successes or challenges. We also love to talk about our hobbies, from the latest TV series we're watching to our travel plans."
              },
              {
                score: '6.5',
                answer: "Oh, it's quite varied. We talk about everything from personal things, like what's happening in our careers or relationships, to more general topics like current events or a new restaurant we want to try. The conversation just flows naturally depending on our mood."
              }
            ] 
          },
          { 
            question: 'Do you prefer to chat with a group of people or with only one friend?', 
            versions: [
              {
                score: '5.0',
                answer: "Both are okay. With one friend, we can talk about serious things. With a group of friends, it is more fun and we laugh a lot."
              },
              {
                score: '5.5',
                answer: "It depends on the situation. I prefer chatting with one friend for deep, personal conversations. But for light-hearted fun and jokes, chatting with a group is much more lively and enjoyable."
              },
              {
                score: '6.0',
                answer: "I enjoy both, but they offer different experiences. A one-on-one chat allows for more meaningful and in-depth discussions. On the other hand, a group chat is usually more dynamic and full of laughter, which is great for a more casual social setting."
              },
              {
                score: '6.5',
                answer: "I appreciate both for different reasons. For a really deep and meaningful conversation, nothing beats a one-on-one chat. However, I also love the energy and diverse opinions that come with a group discussion. It often leads to more laughter and a broader range of topics."
              }
            ] 
          },
          {
            question: 'Do you prefer to communicate face-to-face or via social media?',
            versions: [
              {
                score: '5.0',
                answer: `I like to talk face-to-face. I can see their face. It feels more real. But social media is good for quick chats.
                <br/><br/>
                I prefer social media. It is easy. I can think before I write. I am a bit shy, so online chat is easier for me.`
              },
              {
                score: '5.5',
                answer: `I definitely prefer face-to-face communication. You can see the person's expressions, which makes the conversation feel more genuine. However, social media is very convenient for quick updates or making plans.
                <br/><br/>
                I often prefer using social media. It gives me time to think about my response, and it's less pressure than talking in person. It's also great for keeping in touch with friends who live far away.`
              },
              {
                score: '6.0',
                answer: `While social media is incredibly convenient for daily communication, I much prefer talking face-to-face. I believe that real connection happens when you can see someone's body language and hear the tone of their voice. It feels more personal and meaningful.
                <br/><br/>
                I lean towards social media for most of my communication. It's efficient and allows me to talk to multiple people at once. As I'm a bit introverted, it also feels more comfortable than having to make small talk in person.`
              },
              {
                score: '6.5',
                answer: `Nothing can replace face-to-face interaction for me. It allows for a much richer and more nuanced conversation. However, I have to admit that social media is indispensable for staying connected in our busy lives. I use it for quick coordination and sharing small moments.
                <br/><br/>
                I find myself preferring social media for its convenience and flexibility. I can respond when I have time, and it's easier to maintain many friendships at once. While I value in-person meetings, messaging is my default mode of communication for day-to-day chats.`
              }
            ]
          },
          {
            question: 'Do you argue with friends?',
            versions: [
              {
                score: '5.0',
                answer: `No, we don't argue. Sometimes we don't agree, but we talk about it. We respect each other.
                <br/><br/>
                Yes, but not often. We argue about small things, like where to eat. It is not serious. We are still good friends.`
              },
              {
                score: '5.5',
                answer: `We rarely argue. We might have different opinions on things, but we always discuss them calmly and respect each other's views. It's more of a debate than an argument.
                <br/><br/>
                Yes, occasionally. Like any close friends, we sometimes have small disagreements, usually about trivial things like which movie to watch. But we always make up quickly.`
              },
              {
                score: '6.0',
                answer: `Arguing is very rare for us. We've known each other for a long time, so we understand each other well. Even if we disagree, we handle it maturely by talking it through instead of getting into a fight.
                <br/><br/>
                Of course, but it's never serious. We might have a heated discussion about a topic we're passionate about, but it's always friendly. We know that a small argument doesn't affect our friendship.`
              },
              {
                score: '6.5',
                answer: `I wouldn't call it arguing. We sometimes have disagreements, but we've built our friendship on mutual respect. This means we can express different viewpoints without it turning into a conflict. I think healthy debate is actually good for a friendship.
                <br/><br/>
                Yes, but it's all in good fun. We might tease each other or have a debate about sports, but it's never a real argument. We're close enough to be honest with each other without getting offended.`
              }
            ]
          }
      ]
    },
    {
      id: 'p1-c3',
      title: 'Having a break',
      category: '事件题',
      categoryClass: 'event-card',
      status: 'New',
      part1Questions: [
        'How often do you take a rest or a break?',
        'What do you usually do when you are resting?',
        'Do you take a nap when you are taking your rest?',
        'How do you feel after taking a nap?',
      ],
      sampleAnswers: [
        {
          question: 'How often do you take a rest or a break?',
          versions: [
            {
              score: '5.0',
              answer: "When I study, I take a short break every hour. On weekends, I take a long rest. Breaks are very important."
            },
            {
              score: '5.5',
              answer: "When I'm studying or working, I try to take a short break every hour or so for about 10 minutes. On weekends, I make sure to have a longer rest to recharge for the next week. I think taking regular breaks is really important."
            },
            {
              score: '6.0',
              answer: "I'm quite disciplined about this. During the work week, I take a brief 10-minute break every hour to stretch or walk around. This helps me stay focused. Then, on weekends, I ensure I get a proper rest to completely disconnect from work and relax."
            },
            {
              score: '6.5',
              answer: "I make it a point to take regular breaks. When I'm focused on a task, I usually follow a system where I work for about 50 minutes and then take a 10-minute break. This really helps my concentration. As for longer rests, I try to completely switch off from my studies during the weekends to avoid burnout."
            }
          ]
        },
        {
          question: 'What do you usually do when you are resting?',
          versions: [
            {
              score: '5.0',
              answer: "During my short breaks, I walk or listen to music. On long breaks, I watch a movie or read a book. It helps me relax."
            },
            {
              score: '5.5',
              answer: "For a short break, I usually get up and stretch, or maybe listen to a song. During longer rests, like on a weekend, I enjoy doing something I love, such as reading a novel or watching a couple of episodes of a TV show."
            },
            {
              score: '6.0',
              answer: "In my brief breaks, I like to step away from my desk, maybe grab a cup of tea or look out the window. For a proper rest, I prefer to do something completely different from my work, like going for a long walk in a park or spending time on my hobbies."
            },
            {
              score: '6.5',
              answer: "During my short study breaks, I try to do something non-digital, like stretching or just closing my eyes for a few minutes. When I have a longer period of rest, I immerse myself in activities that I find truly relaxing, such as playing the guitar or meeting up with friends. This helps me to properly recharge."
            }
          ]
        },
        {
          question: 'Do you take a nap when you are taking your rest?',
          versions: [
            {
              score: '5.0',
              answer: `Yes, I like to take a nap. After lunch, I sleep for about 20 minutes. It gives me energy for the afternoon.
              <br/><br/>
              No, I don't. If I sleep in the day, I feel more tired when I wake up. I just sit quietly to rest.`
            },
            {
              score: '5.5',
              answer: `Yes, I often take a short nap after lunch if I have time. A quick 20-minute nap really helps me feel more energetic for the rest of the day.
              <br/><br/>
              No, I'm not a fan of napping. I find that if I sleep during the day, I often wake up feeling groggy and even more tired than before.`
            },
            {
              score: '6.0',
              answer: `Yes, I'm a big believer in the power of a short nap. On weekends, or if my schedule allows, I'll take a 20 to 30-minute nap. I find it's a very effective way to boost my energy and improve my focus.
              <br/><br/>
              No, I avoid napping. It tends to mess up my sleep schedule at night. If I feel tired, I prefer to just rest my eyes or do some light stretching instead of actually sleeping.`
            },
            {
              score: '6.5',
              answer: `Absolutely. A short 'power nap' of about 20 minutes is a key part of my routine, especially on busy days. I find it's the perfect way to reset my brain and combat any afternoon sleepiness, making me much more productive.
              <br/><br/>
              No, napping doesn't really work for me. I find it disrupts my internal clock and makes it harder for me to fall asleep at night. I prefer to power through the day and get a full, solid night's sleep.`
            }
          ]
        },
        {
          question: 'How do you feel after taking a nap?',
          versions: [
            {
              score: '5.0',
              answer: "After a short nap, I feel refreshed and can focus better. But if I sleep too long, I feel a little dizzy."
            },
            {
              score: '5.5',
              answer: "Usually, I feel much better. A short nap makes me feel refreshed and more alert. However, if I accidentally sleep for too long, I can wake up feeling a bit disoriented."
            },
            {
              score: '6.0',
              answer: "After a well-timed, short nap, I feel significantly rejuvenated and my mind feels clearer. It's like a reset button for my brain. But I have to be careful not to oversleep, as that can have the opposite effect."
            },
            {
              score: '6.5',
              answer: "It makes a huge difference. A brief nap leaves me feeling recharged, both mentally and physically. I find my concentration improves dramatically afterwards, and I'm able to tackle the rest of my day with renewed energy. The key is to keep it short."
            }
          ]
        }
      ]
    },
    {
      id: 'p1-c8',
      title: 'Growing vegetables/fruits',
      category: '事件题',
      categoryClass: 'event-card',
      status: 'New',
      part1Questions: [
        'Are you interested in growing vegetables and fruits?',
        'Is growing vegetables popular in your country?',
        'Do many people grow vegetables in your city?',
        'Do you think it\'s easy to grow vegetables?',
        'Should schools teach students how to grow vegetables?',
      ],
      sampleAnswers: p1c8SampleAnswers,
    },
    {
      id: 'p1-c10',
      title: 'Going out',
      category: '事件题',
      categoryClass: 'event-card',
      status: 'New',
      part1Questions: [
        'Do you bring food or snacks with you when going out?',
        'Do you always take your mobile phone with you when going out?',
        'Do you often bring cash with you?',
        'How often do you use cash?',
      ],
      sampleAnswers: p1c10SampleAnswers,
    },
    {
      id: 'p1-c12',
      title: 'Doing something well',
      category: '事件题',
      categoryClass: 'event-card',
      status: 'New',
      part1Questions: [
        'Do you have an experience when you did something well?',
        'Do you have an experience when your teacher thought you did a good job?',
        'Do you often tell your friends when they do something well?',
      ],
      sampleAnswers: p1c12SampleAnswers,
    },
  ]
};