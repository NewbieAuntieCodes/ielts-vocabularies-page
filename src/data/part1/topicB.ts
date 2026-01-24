import { TopicData } from '../../types';

export const topicBData: TopicData = {
  id: 'box-part1-topic-b',
  title: '话题: 地点',
  cards: [
    { 
      id: 'p1-c4', 
      title: 'Museum', 
      category: '地点题', 
      categoryClass: 'place-card', 
      status: 'New',
      part1Questions: [
          'Do you think museums are important?',
          'Are there many museums in your hometown?',
          'Do you often visit a museum?',
          'When was the last time you visited a museum?',
      ],
      sampleAnswers: [
          {
            question: 'Do you think museums are important?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, I think museums are important. We can learn about history and art there. They show us old things. This helps us know about the past.
                <br/><br/>
                No, I don't think they are very important for everyone. For me, they are a bit boring. I prefer to learn about history from books or movies. It is more interesting.`
              },
              {
                score: '5.5',
                answer: `Yes, I believe museums are quite important. They are places where we can learn about history and art. By showing us artifacts from the past, they help us understand our culture better.
                <br/><br/>
                I'm not sure if they are essential for everyone. Personally, I find them a little bit boring. I find learning about history through documentaries or books more engaging.`
              },
              {
                score: '6.0',
                answer: `Absolutely. I think museums play a crucial role in society. They preserve our history and culture for future generations. Visiting a museum is an educational experience; it's a way to connect with the past and appreciate different forms of art.
                <br/><br/>
                Well, while I understand their value, I don't think they are crucial for every single person. Some people, including myself, find them a bit static. I personally get more out of learning history from interactive sources like documentaries, which I find more dynamic.`
              },
              {
                score: '6.5',
                answer: `Without a doubt. Museums are vital institutions for any society. They serve as guardians of our collective history and culture. More than just buildings with old objects, they provide a tangible connection to our past and inspire creativity and learning in people of all ages.
                <br/><br/>
                From a personal standpoint, while I respect their importance, I don't find them particularly engaging. I feel that modern media, such as well-made historical films or interactive websites, can often tell the stories of the past in a more compelling and accessible way.`
              }
            ]
          },
          {
            question: 'Are there many museums in your hometown?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, there are quite a few museums in my city. We have a big history museum, an art museum, and even a science museum. My city is a big one, so it has many places like these.
                <br/><br/>
                My hometown is small, so there are not many museums. We have one museum about our city's history. Big cities like Beijing have more museums.`
              },
              {
                score: '5.5',
                answer: `Yes, my city has several museums. There's a major history museum, a gallery for modern art, and a popular science museum for children. Since it's a large city, there are quite a few cultural attractions like these.
                <br/><br/>
                Not really, my hometown is quite small. We only have one local museum that focuses on the history of our town. You'd have to travel to a bigger city like Shanghai to find a wide variety of museums.`
              },
              {
                score: '6.0',
                answer: `Yes, my city is fortunate to have a good number of museums. The most prominent ones are the municipal history museum and a contemporary art gallery. We also have a fantastic science and technology museum that's very popular with families.
                <br/><br/>
                My hometown is a small town, so our options are limited. There's a charming little museum dedicated to our local history, but that's about it. For a wider selection, you would need to visit a major city.`
              },
              {
                score: '6.5',
                answer: `Yes, I'm happy to say my city has a rich selection of museums. We have the main municipal museum, which covers our city's history, a well-regarded art museum, and a very interactive science museum. There are also a few smaller, more specialized museums dotted around the city.
                <br/><br/>
                No, not at all. I come from a small town, and we only have one community museum. It's quite small and focuses on local heritage. It's nice, but it's nothing compared to the vast collections you'd find in a metropolitan area.`
              }
            ]
          },
          {
            question: 'Do you often visit a museum?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, I do. I am very interested in art, so I go to the art museum about once a month. They often have new exhibitions, so there is always something new to see.
                <br/><br/>
                I don't go to museums often. Maybe one or two times a year. I am busy with school. But I like it. I go with my family or friends. We can talk about the things we see.`
              },
              {
                score: '5.5',
                answer: `Yes, fairly often. I'm a big fan of art, so I try to visit the art museum whenever there's a new exhibition, which is probably every couple of months. It's a great way to spend a weekend afternoon.
                <br/><br/>
                Not very often, I'm afraid. I'm usually quite busy with my studies. I probably only manage to visit a museum once or twice a year, perhaps during a holiday with my family or friends.`
              },
              {
                score: '6.0',
                answer: `Yes, I visit museums quite regularly. As an art enthusiast, I make it a point to go to the art museum at least once a month, especially when they have a new temporary exhibition. I find it very inspiring.
                <br/><br/>
                I wish I could go more often, but my schedule is usually packed. I probably only get to a museum a couple of times a year. It's something I enjoy doing, but it's not a regular activity for me.`
              },
              {
                score: '6.5',
                answer: `I'd say I'm a frequent visitor. I'm particularly passionate about art, so I make a habit of visiting the local art gallery about once a month to see what's new. I find it's a wonderful way to relax and get inspired.
                <br/><br/>
                Honestly, I don't go as often as I'd like. With my busy work schedule, I find it hard to make time. I might visit a museum if there's a special exhibition that really interests me, but that's probably only once or twice a year.`
              }
            ]
          },
          { 
            question: 'When was the last time you visited a museum?',
            versions: [
              { 
                score: '5.0', 
                answer: "The last time was six months ago. I went to a history museum with my classmates. It was for school. We saw many old things and photos. It was interesting."
              },
              {
                score: '5.5',
                answer: "Let me think... The last time I visited a museum was about three months ago. I went to the city's science museum with my younger cousin. He really enjoyed the interactive displays."
              },
              {
                score: '6.0',
                answer: "The most recent visit was just last month, actually. I went to the contemporary art museum to see a special exhibition of a local photographer's work. It was really thought-provoking."
              },
              {
                score: '6.5',
                answer: "It was actually just a few weeks ago. I went to the provincial history museum with a friend who was visiting from out of town. We spent the whole afternoon there, and it was a great way to show him some of our local culture."
              }
            ]
          }
      ]
    },
    { 
      id: 'p1-c9', 
      title: 'Crowded place', 
      category: '地点题', 
      categoryClass: 'place-card', 
      status: 'New',
      part1Questions: [
          'Is the city where you live crowded?',
          'Is there a crowded place near where you live?',
          'Do you like crowded places?',
          'Do most people like crowded places?',
          'When was the last time you were in a crowded place?',
      ],
      sampleAnswers: [
          {
            question: 'Is the city where you live crowded?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, my city is crowded. The center of the city is very crowded. There are many people and cars. It is always busy because it is a big city.
                <br/><br/>
                No, not really. I live in a small town. It is usually very quiet. There are not many people on the streets, even in the center. It is a very peaceful place to live.`
              },
              {
                score: '5.5',
                answer: `Yes, my city can be very crowded, especially the city center. The subway during rush hour is always packed with people, and the main shopping streets are very busy on weekends.
                <br/><br/>
                Not really, my town is relatively quiet. It's not a big tourist destination, so the streets are usually quite calm. It only gets a little crowded during local festivals.`
              },
              {
                score: '6.0',
                answer: `Yes, absolutely. I live in a major city, so it's almost always crowded, particularly in the downtown areas. Public transportation during peak hours can be extremely packed, and the popular shopping districts are bustling with people, especially on weekends.
                <br/><br/>
                No, it's quite peaceful. I live in a smaller town, and it's generally not crowded at all. You can walk around freely without bumping into people. The only time it gets busy is during special market days.`
              },
              {
                score: '6.5',
                answer: `Yes, it's a bustling metropolis, so crowdedness is a daily reality. The central business district is constantly swarming with people, and the subway system during commute times is notoriously packed. You get used to it, but it can be overwhelming at times.
                <br/><br/>
                No, thankfully, it's not. I reside in a fairly small town where life moves at a slower pace. The streets are generally clear, and you rarely see large crowds. It's one of the things I appreciate about living here.`
              }
            ]
          },
          {
            question: 'Is there a crowded place near where you live?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, there is a shopping mall near my home. It is very crowded on weekends. Many people go there. It has many shops and restaurants.
                <br/><br/>
                No, not really. My neighborhood is a quiet residential area. There are no big shopping malls or busy markets. The nearest crowded place is the city center, which is about 30 minutes by bus.`
              },
              {
                score: '5.5',
                answer: `Yes, there's a big shopping mall just a 10-minute walk from my apartment. On weekends, it gets extremely crowded with families and young people. It has many shops, a cinema, and a food court.
                <br/><br/>
                No, my neighborhood is very quiet. It's mainly a residential area. The nearest crowded place would be the main train station, but that's a few kilometers away from my house.`
              },
              {
                score: '6.0',
                answer: `Yes, there's a very popular shopping complex not far from my home. It's a major hub for the area, so it's always packed on weekends. People go there for shopping, dining, and entertainment.
                <br/><br/>
                No, the area where I live is quite peaceful and residential. There aren't any major commercial centers or attractions nearby that would draw large crowds. The closest busy spot is probably the downtown market, which is about a 20-minute bus ride away.`
              },
              {
                score: '6.5',
                answer: `Indeed, there is. A large shopping mall, which is a major attraction in our district, is located just down the road from my place. It becomes incredibly congested on weekends and public holidays, as it's the go-to destination for shopping and entertainment for many people.
                <br/><br/>
                No, not really. I live in a quiet suburban neighborhood. The environment is very tranquil, and there are no places that attract large crowds. You'd have to drive for about 15 minutes to reach the nearest bustling commercial street.`
              }
            ]
          },
          {
            question: 'Do you like crowded places?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, sometimes I do. I like the energy of crowded places like a market or a concert. It makes me feel excited. It's fun to see so many people having a good time together.
                <br/><br/>
                No, I don't like crowded places. They are too noisy for me. I don't like the subway when it is full of people. I like quiet places. I can relax in quiet places.`
              },
              {
                score: '5.5',
                answer: `It depends on the place and my mood. Sometimes, I enjoy the lively atmosphere of a crowded market or a concert. It feels energetic. But other times, like when I'm commuting, I really dislike being in a crowd.
                <br/><br/>
                Generally, no. I find crowded places to be too noisy and stressful. I prefer quiet environments where I can relax and have my own space, like a park or a quiet cafe.`
              },
              {
                score: '6.0',
                answer: `I have mixed feelings about them. On one hand, I enjoy the vibrant energy of a place like a night market or a music festival. But on the other hand, being stuck in a crowded subway car is one of my least favorite things. So, it really depends on the context.
                <br/><br/>
                No, I'm not a fan of crowded places at all. I find them quite overwhelming and chaotic. I much prefer calm and open spaces where I don't have to navigate through a sea of people.`
              },
              {
                score: '6.5',
                answer: `My opinion is quite divided. I can appreciate the buzzing atmosphere of certain crowded places, like a lively festival or a bustling street market; there's a certain energy that can be quite exciting. However, I generally avoid crowds in my daily life, as I find them draining.
                <br/><br/>
                No, I strongly dislike them. I'm a person who values peace and personal space, and crowded environments make me feel anxious and claustrophobic. I'll always opt for a quiet park over a packed shopping mall.`
              }
            ]
          },
          {
            question: 'Do most people like crowded places?',
            versions: [
              {
                score: '5.0',
                answer: `I think many young people like them. They can go shopping or eat food in crowded places. These places are fun and not boring.
                <br/><br/>
                I don't think so. I think it depends on the person's age and personality. Many older people prefer quiet places. And some people, like me, just feel stressed in a crowd.`
              },
              {
                score: '5.5',
                answer: `I think it depends. Many young people seem to enjoy crowded places like shopping malls and concerts because they are exciting. But I think older people often prefer quieter places to relax.
                <br/><br/>
                I don't believe so. While some people might enjoy the excitement, I think many people find crowds stressful. It's probably a matter of personal preference and what you're used to.`
              },
              {
                score: '6.0',
                answer: `It's hard to generalize, but I'd say many people are drawn to the energy of crowded places. These places are often centers of activity, with lots of things to see and do. However, I think an equal number of people probably prefer to avoid them for the sake of peace and quiet.
                <br/><br/>
                I doubt it. While popular places are crowded for a reason, I think people tolerate the crowds to enjoy the activity, rather than enjoying the crowd itself. I believe most people would prefer the same experience with fewer people around if they could.`
              },
              {
                score: '6.5',
                answer: `I believe it's a split preference. Many people, especially younger generations, thrive on the social energy and excitement found in bustling places. They see them as hubs of opportunity and entertainment. Conversely, many others find such environments stressful and prefer tranquility.
                <br/><br/>
                I would argue that most people don't actively like the crowd itself, but they are drawn to what the crowded place offers, whether it's a popular restaurant, a concert, or a major shopping center. The crowd is often just an unavoidable side effect of a popular attraction.`
              }
            ]
          },
          { 
            question: 'When was the last time you were in a crowded place?',
            versions: [
              {
                score: '5.0', 
                answer: "Last weekend, I went to a shopping mall. It was very crowded. I went there to buy a gift for my friend. It was hard to walk because there were so many people."
              },
              {
                score: '5.5',
                answer: "It was just last weekend. I went to a concert with my friends. The venue was completely packed with thousands of people. It was loud and energetic, a really amazing experience."
              },
              {
                score: '6.0',
                answer: "The most recent time was probably two weeks ago. I had to take the subway during the evening rush hour. The train car was so full that we were standing shoulder to shoulder. It was not a pleasant experience."
              },
              {
                score: '6.5',
                answer: "Let me recall... It was during the last national holiday, about a month ago. I visited a famous tourist spot in my city, and it was absolutely swarming with people. It was almost impossible to walk around freely."
              }
            ]
          }
      ]
    },
    { 
      id: 'p1-c15', 
      title: 'Public places', 
      category: '地点题', 
      categoryClass: 'place-card', 
      status: 'New',
      part1Questions: [
          'Have you ever talked with someone you don\'t know in public places?',
          'Do you wear headphones in public places?',
          'Would you like to see more public places near where you live?',
          'Do you often go to public places with your friends?',
      ],
      sampleAnswers: [
          {
            question: 'Have you ever talked with someone you don\'t know in public places?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, sometimes. For example, if I am waiting in a line, I might start a small conversation with the person next to me about the weather. It's a nice way to pass the time.
                <br/><br/>
                No, not often. I am a little shy. I don't talk to people I don't know. Sometimes people ask me the way. I help them. But we don't talk for a long time.`
              },
              {
                score: '5.5',
                answer: `Yes, I have. Sometimes if I'm waiting in a queue, I might have a short chat with the person next to me, maybe about how long we've been waiting. It's just a simple way to be friendly.
                <br/><br/>
                Not very often. I'm generally a bit reserved. I might respond if someone asks me for directions, but I don't usually start conversations with strangers.`
              },
              {
                score: '6.0',
                answer: `Yes, occasionally. I'm quite open to having a brief chat with strangers in public, for instance, if we're both waiting for a bus. I think a small, friendly interaction can brighten up the day.
                <br/><br/>
                I rarely do. I tend to keep to myself in public places. While I'm happy to help if someone needs directions, I'm not the type of person to initiate a conversation with someone I don't know.`
              },
              {
                score: '6.5',
                answer: `Yes, it happens from time to time. I'm not shy about striking up a conversation with a stranger if the situation feels right, like commenting on a cute dog in the park. I find those small moments of connection with others quite pleasant.
                <br/><br/>
                Generally, no. I respect people's privacy and tend to be in my own world when I'm out. I'll certainly be polite and helpful if approached, but I wouldn't initiate a chat with a stranger myself.`
              }
            ]
          },
          {
            question: 'Do you wear headphones in public places?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, I wear headphones on the bus. I listen to music. It is relaxing. It makes the bus ride better. I don't hear the noise outside.
                <br/><br/>
                No, I usually don't. I like to be aware of my surroundings. I like to hear the sounds of the city. Also, I think it's safer not to wear headphones when I am walking on the street.`
              },
              {
                score: '5.5',
                answer: `Yes, I almost always wear headphones when I'm on public transport. I listen to music or podcasts. It helps me relax and makes the journey more enjoyable.
                <br/><br/>
                No, I prefer not to. I like to be aware of what's happening around me for safety reasons. Also, I enjoy listening to the sounds of the city.`
              },
              {
                score: '6.0',
                answer: `Yes, frequently. Especially during my commute, I use headphones to listen to podcasts. It's a great way to make use of the travel time and learn something new.
                <br/><br/>
                Not usually. I find it a bit isolating. I prefer to be present and observe my surroundings. I feel more connected to the world around me when I'm not wearing headphones.`
              },
              {
                score: '6.5',
                answer: `Absolutely. Headphones are an essential item for me whenever I'm on the move, particularly on the subway. It allows me to create my own personal space and enjoy my favorite music, which makes my commute much more pleasant.
                <br/><br/>
                No, I make a conscious choice not to. I believe it's important to maintain situational awareness, especially in a busy city. Plus, I find that not wearing headphones makes me feel more open to the world and the people around me.`
              }
            ]
          },
          {
            question: 'Would you like to see more public places near where you live?',
            versions: [
              {
                score: '5.0',
                answer: `Yes, I want more parks near my home. A park is a good place to relax or walk. Now, the park is far from my house.
                <br/><br/>
                No, I think there are enough public places. We have a small park and a library nearby. My neighborhood is not very big, so I think what we have now is good enough for the residents.`
              },
              {
                score: '5.5',
                answer: `Yes, I would. I wish there was a bigger park near my home. A nice green space would be great for jogging or just relaxing on the weekend. The current park is very small.
                <br/><br/>
                No, I'm quite happy with the public places we have. There's a library and a nice park within walking distance. For a residential area, I think it's sufficient.`
              },
              {
                score: '6.0',
                answer: `Yes, definitely. I think my neighborhood would greatly benefit from having more public facilities, like a community sports center or a larger park. It would provide more recreational options for residents.
                <br/><br/>
                I think the current provision is adequate. We have a library and a couple of small parks, which serve the community well. I don't think we need more at the moment.`
              },
              {
                score: '6.5',
                answer: `Yes, absolutely. While we have some green spaces, I believe our community would be much improved by having more versatile public areas, like a well-equipped public square or a dedicated sports park. Such places encourage community interaction and healthier lifestyles.
                <br/><br/>
                I feel the number of public places is just right for my area. We have a well-maintained park and a public library which are never too crowded. I value the quiet character of my neighborhood and wouldn't want it to change.`
              }
            ]
          },
          {
            question: 'Do you often go to public places with your friends?',
            versions: [
              {
                score: '5.0',
                answer: `Yes. I meet my friends in public places. We go to cafes or shopping malls. These places are easy to go to. In summer, we go to the park.
                <br/><br/>
                No, not very often. My friends and I prefer to go to each other's homes. It's more comfortable and private. We can cook together or watch a movie without being disturbed.`
              },
              {
                score: '5.5',
                answer: `Yes, that's where we usually meet. We often go to cafes, cinemas, or shopping malls because they are convenient and have a lot of things to do. In the summer, we might go to a public park for a picnic.
                <br/><br/>
                Not that often. My friends and I usually prefer to hang out at one of our homes. It's more private and comfortable, and we can chat without being disturbed.`
              },
              {
                score: '6.0',
                answer: `Yes, public places are our primary meeting spots. We're big fans of trying new cafes or restaurants. We also enjoy going to parks or the cinema. It's just easier to meet somewhere central than to travel to each other's homes.
                <br/><br/>
                We tend to alternate. While we do go out to cafes sometimes, we also really enjoy just relaxing at someone's apartment. It's more casual, and we don't have to worry about finding a table or the place being too noisy.`
              },
              {
                score: '6.5',
                answer: `Yes, that's the standard for us. We almost always meet up in public venues. Whether it's a trendy cafe, a bustling shopping mall, or a quiet park, these places offer a neutral and convenient setting for everyone to get together.
                <br/><br/>
                Not so much anymore. While we used to go out a lot, nowadays we find more comfort in visiting each other's homes. It allows for deeper conversations in a more relaxed environment, and it's also more budget-friendly.`
              }
            ]
          }
      ]
    },
  ]
};