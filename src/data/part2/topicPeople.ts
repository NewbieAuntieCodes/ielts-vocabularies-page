import { TopicData } from '../../types';

export const topicPeopleData: TopicData = {
    id: 'box-topic-people',
    title: '话题: 人物题',
    cards: [
        { 
          id: 'p2-c1', 
          title: '重要的好朋友',
          category: '人物题', 
          categoryClass: 'person-card', 
          status: 'New',
          part2Title: 'Describe a good friend who is important to you',
          part2Description: 'You should say:',
          part2Prompts: [
              'Who he/she is',
              'How/where you got to know him/her',
              'How long you have known each other',
              'And explain why he/she is important to you',
          ],
          part3Questions: [
              'How do children make friends at school?',
              'How do children make friends when they are not at school?',
              'Do you think it is better for children to have a few close friends or many casual friends?',
              "Do you think a child's relationship with friends can be replaced by that with other people, like parents or other family members?",
              'What are the differences between friends made inside and outside the workplace?',
              "Do you think it's possible for bosses and their employees to become friends?",
          ],
          sampleAnswers: [
            {
              question: "Part 2: Describe a good friend who is important to you",
              versions: [
                {
                    score: '5',
                    answer: [
                      "I want to talk about my good friend. Her name is Lin. She is my roommate at school. She is very tall and beautiful.",
                      "We met in the dormitory. At first, I was a little lonely. But she talked to me a lot. She made me feel happy.",
                      "We found out we both like to play the same games. She takes good care of me. She shares her snacks with me. When I am sad, she tells me jokes. She also helps me with my homework.",
                      "She is like a sister to me. She is very important. I hope our friendship will last forever."
                    ],
                },
                {
                    score: '5.5',
                    answer: [
                      "I would like to describe my best friend, Lin. We are university roommates. She is a tall and kind person, and she has a very warm smile.",
                      "We first met when we were assigned to the same dormitory room. I was a bit nervous and lonely at first, but she was very friendly and started conversations with me, which really helped me feel more comfortable and happy.",
                      "We soon discovered we share many hobbies, like playing online games. She is very caring. For instance, she often shares her snacks with me and always tries to cheer me up with jokes when I'm feeling down. She's also very helpful with academics; sometimes she explains difficult concepts to me.",
                      "To me, she's more than just a friend; she's like a sister. Her support means a lot to me, and that's why she is so important. I truly cherish our friendship and hope it lasts a lifetime."
                    ],
                },
                {
                    score: '6.5',
                    answer: [
                      "I'm going to talk about my closest friend, Lin, who has become an incredibly important person in my life. We're currently roommates at university. She has a wonderful personality—very outgoing and considerate, and she's also quite tall with a radiant smile that can instantly brighten your day.",
                      "Our friendship began in our dormitory. I remember feeling quite overwhelmed and lonely during the first few days of university, but Lin immediately made me feel at ease. She was proactive in starting conversations and including me in activities, which was a huge comfort.",
                      "We bonded quickly over shared interests, particularly our love for the same video games. What makes her such a great friend is her incredible kindness. She is always looking out for me, whether it's sharing her favorite snacks or telling me hilarious jokes to lift my spirits when I'm stressed. She is also my go-to person for academic help; she has a real talent for explaining complex topics in a simple way.",
                      "Honestly, our bond feels more like family than just friendship. She's the sister I never had, and her constant support and positive energy are invaluable to me. That's why she is so important, and I truly hope we'll be friends for the rest of our lives."
                    ],
                }
              ]
            },
            {
              question: "How do children make friends at school?",
              versions: [
                {
                    score: '5',
                    answer: "I think children make friends at school in class. They sit together and talk. They also make friends when they play games together, like basketball. They spend a lot of time together at school, so it is easy to make friends.",
                },
                {
                    score: '5.5',
                    answer: "In my opinion, children at school primarily make friends through shared activities. In the classroom, they become friends with their deskmates by talking and helping each other. During breaks, they form friendships on the playground while playing games like basketball. Because they spend so much time together, it's quite natural for them to connect.",
                },
                {
                    score: '6.5',
                    answer: "Children typically form friendships at school through a combination of proximity and shared interests. Initially, they might befriend the students they sit next to in class simply because they interact daily. However, more durable friendships are often forged during less structured times, such as recess or physical education classes. Activities like playing sports or working on group projects create common ground and allow children to discover classmates with similar personalities and hobbies, which is the foundation of a strong friendship.",
                }
              ]
            },
            {
                question: "How do children make friends when they are not at school?",
                versions: [{
                    score: '5',
                    answer: "Outside of school, children can make friends in their neighborhood. They can play together in the park. They can also make friends in hobby classes, like a piano class.",
                }]
            },
            {
                question: "Do you think it is better for children to have a few close friends or many casual friends?",
                versions: [{
                    score: '5',
                    answer: "I think it is better to have a few close friends. A close friend can help you when you are sad. You can tell them your secrets. This is better than having many friends you don't know well.",
                }]
            },
            {
                question: "Do you think a child's relationship with friends can be replaced by that with other people, like parents or other family members?",
                versions: [{
                    score: '5',
                    answer: "I think friends are different from family. Friends are the same age. You can share things with friends that you can't share with parents. So friends are very important and cannot be replaced.",
                }]
            },
            {
                question: "What are the differences between friends made inside and outside the workplace?",
                versions: [{
                    score: '5',
                    answer: "Friends at work talk about work. Friends outside work talk about hobbies, like movies or sports. The friendship outside work is usually more relaxed.",
                }]
            },
            {
                question: "Do you think it's possible for bosses and their employees to become friends?",
                versions: [{
                    score: '5',
                    answer: "I think it is possible, but it is difficult. The boss has power. This can make the friendship strange. For example, it is hard for other workers if the boss is friends with only one person.",
                }]
            }
          ],
        },
        {
          id: 'p2-c1-popular',
          title: '受欢迎的人',
          category: '人物题',
          categoryClass: 'person-card',
          status: 'New',
          part2Title: 'Describe a popular person',
          part2Description: 'You should say:',
          part2Prompts: [
              'Who this person is',
              'What kind of person he or she is',
              'When you see him/her normally',
              'And explain why you think this person is popular',
          ],
          part3Questions: [
              'Why are some students popular in school?',
              'Is it important for a teacher to be popular?',
              'Do you think good teachers are always popular among students?',
              'What are the qualities of being a good teacher?',
              'Is it easier to become popular nowadays?',
              'Why do people want to be popular?',
          ],
        },
        { 
          id: 'p2-c1-music', 
          title: '擅长音乐的朋友', 
          category: '人物题', 
          categoryClass: 'person-card', 
          status: 'New',
          part2Title: 'Describe a friend of yours who is a good musician',
          part2Description: 'You should say:',
          part2Prompts: [
              'Who this friend is',
              'What kind of music they play',
              'How often you see them play',
              'And explain why you think they are a good musician',
          ],
          part3Questions: [
              'What kind of music is popular in your country?',
              'Do you think it\'s important for schools to have music classes?',
              'Do you think technology has changed the way we listen to music?',
              'Is it better to learn music at a young age or as an adult?',
              'What are the benefits of being able to play a musical instrument?',
              'Do you think famous musicians have a responsibility to be good role models?',
          ],
          sampleAnswers: [
            {
              question: "Part 2: Describe a friend of yours who is a good musician",
              versions: [{
                score: '5',
                answer: [
                  "I'd like to talk about my good friend, Wang Lei. He is a very good musician. We have been friends for three years.",
                  "Wang Lei plays the guitar. He also writes his own songs. His songs are about daily life. I think they are very good.",
                  "I often see him play. He performs at school events. When we are with friends, he sometimes brings his guitar and plays for us. It is very nice.",
                  "I think he is a good musician because he plays with a lot of feeling. When you listen to his music, you can feel if he is happy or sad. He also practices every day. He works very hard."
                ],
              }]
            },
            {
              question: "What kind of music is popular in your country?",
              versions: [{
                score: '5',
                answer: "In my country, pop music is very popular, especially with young people. The songs are easy to sing. You can hear pop music everywhere, in shops and cafes.",
              }]
            },
            {
              question: "Do you think it's important for schools to have music classes?",
              versions: [{
                score: '5',
                answer: "Yes, I think it is important. Music classes can help students relax. It is a good break from study. Students can also learn to be creative.",
              }]
            },
            {
              question: "Do you think technology has changed the way we listen to music?",
              versions: [{
                score: '5',
                answer: "Yes, I think so. Now we use our phones to listen to music. We use apps. We can listen to any song we want, anytime. In the past, we had to buy CDs.",
              }]
            },
            {
              question: "Is it better to learn music at a young age or as an adult?",
              versions: [{
                score: '5',
                answer: "I think it is better to learn music when you are young. Children have more time to practice. It is also easier for them to learn new things. Adults are very busy.",
              }]
            },
            {
              question: "What are the benefits of being able to play a musical instrument?",
              versions: [{
                score: '5',
                answer: "Playing an instrument is good. It can make you more patient because you need to practice a lot. It is also a good way to show your feelings. For example, you can play a happy song when you feel happy.",
              }]
            },
            {
              question: "Do you think famous musicians have a responsibility to be good role models?",
              versions: [{
                score: '5',
                answer: "Yes, I think they should be good role models. Many young people like them and copy them. So, if a musician does good things, like helping people, their fans will learn from them.",
              }]
            }
          ],
        },
        {
          id: 'p2-c-creative-person',
          title: '钦佩的有创造力的人',
          category: '人物题',
          categoryClass: 'person-card',
          status: 'New',
          part2Title: 'Describe a creative person (e.g. an artist, a musician, an architect, etc.) you admire',
          part2Description: 'You should say:',
          part2Prompts: [
              'Who he/she is',
              'How you knew him/her',
              'What his/her greatest achievement is',
              'And explain why you think he/she is creative',
          ],
          part3Questions: [
              'Do you think children should learn to play musical instruments?',
              'How do artists acquire inspiration?',
              'Do you think pictures and videos in news reports are important?',
              'What can we do to help children keep creative?',
              'How does drawing help to enhance children\'s creativity?',
              'What kind of jobs require creativity?',
          ],
        },
        {
          id: 'p2-c1-family-business',
          title: '在家族企业工作的人',
          category: '人物题',
          categoryClass: 'person-card',
          status: 'New',
          part2Title: 'Describe a person you know who enjoys working for a family business (e.g. a shop, etc.)',
          part2Description: 'You should say:',
          part2Prompts: [
              'Who he/she is',
              'What the business is',
              'What his/her job is',
              'And explain why he/she enjoys working there',
          ],
          part3Questions: [
              'Would you like to start a family business?',
              'Would you like to work for a family business?',
              'Why do some people choose to start their own company?',
              'What are the advantages and disadvantages of family businesses?',
              'What family businesses do you know in your local area?',
              'What makes a successful family business?',
          ],
        },
        {
          id: 'p2-c-sportsperson',
          title: '钦佩的运动员',
          category: '人物题',
          categoryClass: 'person-card',
          status: 'New',
          part2Title: 'Describe a successful sportsperson you admire',
          part2Description: 'You should say:',
          part2Prompts: [
              'Who he/she is',
              'What you know about him/her',
              'What he/she is like in real life',
              'What achievement he/she has made',
              'And explain why you admire him/her',
          ],
          part3Questions: [
              'Should students have physical education and do sports at school?',
              'What qualities should an athlete have?',
              'Is talent important in sports?',
              'Is it easy to identify children\'s talents?',
              'What is the most popular sport in your country?',
              'Why are there so few top athletes?',
          ],
        },
    ]
};
