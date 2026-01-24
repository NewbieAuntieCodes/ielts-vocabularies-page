
import { IeltsTopic, SubTopic } from './data-types';
import { museum } from './data-museum';

const cityAndCrowdedPlace: SubTopic = {
    id: 'city-crowded-place',
    title: 'City & Crowded place',
    type: '地点题',
    color: 'green',
    wordSections: [
        {
            title: '基础词汇',
            words: [
              { word: 'crowded', phonetic: '/ˈkraʊdɪd/', definition: '拥挤的', example: 'The mall was very crowded on Saturday.', emoji: 'https://em-content.zobj.net/source/apple/391/busts-in-silhouette_1f465.png' },
              { word: 'packed', phonetic: '/pækt/', definition: '拥挤不堪的', example: 'The train was so packed I could barely move.', emoji: 'https://em-content.zobj.net/source/apple/391/family-man-woman-girl-boy_1f468-200d-1f469-200d-1f467-200d-1f466.png' },
              { word: 'busy', phonetic: '/ˈbɪzi/', definition: '忙碌的；热闹的', example: 'The main street is always busy during lunchtime.', emoji: 'https://em-content.zobj.net/source/apple/391/man-running_1f3c3-200d-2642-fe0f.png' },
              { word: 'noisy', phonetic: '/ˈnɔɪzi/', definition: '嘈杂的', example: 'The restaurant was too noisy for a quiet conversation.', emoji: 'https://em-content.zobj.net/source/apple/391/speaker-high-volume_1f50a.png' },
              { word: 'lively', phonetic: '/ˈlaɪvli/', definition: '活泼的；热闹的', example: 'The streets were lively with music and laughter.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-dancing_1f483.png' },
              { word: 'a crowd of people', phonetic: '/ə kraʊd əv ˈpiːpl/', definition: '一群人', example: 'A crowd of people gathered to watch the street performance.', emoji: 'https://em-content.zobj.net/source/apple/391/busts-in-silhouette_1f465.png' },
              { word: 'skyscraper', phonetic: '/ˈskaɪˌskreɪpər/', definition: '摩天大楼', example: 'The skyline of New York is dominated by skyscrapers.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape_1f3d9-fe0f.png' },
              { word: 'skyline', phonetic: '/ˈskaɪlaɪn/', definition: '天际线', example: 'We admired the beautiful city skyline at sunset.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape-at-dusk_1f306.png' },
              { word: 'urban', phonetic: '/ˈɜːrbən/', definition: '都市的', example: 'Traffic congestion is a major problem in many urban areas.', emoji: 'https://em-content.zobj.net/source/apple/391/office-building_1f3e2.png' },
              { word: 'downtown', phonetic: '/ˈdaʊntaʊn/', definition: '市中心', example: 'The main shopping district is in downtown.', emoji: '🏙️' },
              { word: 'suburb', phonetic: '/ˈsʌbɜːrb/', definition: '郊区', example: 'Many people commute from the suburbs to work in the city.', emoji: '🏡' },
              { word: 'traffic', phonetic: '/ˈtræfɪk/', definition: '交通', example: 'The traffic is always heavy during rush hour.', emoji: '🚗' },
              { word: 'subway', phonetic: '/ˈsʌbweɪ/', definition: '地铁', example: 'Taking the subway is the fastest way to get around the city.', emoji: '🚇' },
              { word: 'landmark', phonetic: '/ˈlændmɑːrk/', definition: '地标', example: 'The Eiffel Tower is a famous landmark in Paris.', emoji: '🗼' },
              { word: 'resident', phonetic: '/ˈrezɪdənt/', definition: '居民', example: 'The city has over a million residents.', emoji: '🧑‍🤝‍🧑' },
              { word: 'pollution', phonetic: '/pəˈluːʃn/', definition: '污染', example: 'Air pollution is a serious issue in many big cities.', emoji: '🌫️' },
            ]
        },
        {
            title: '进阶词汇',
            words: [
              { word: 'bustling', phonetic: '/ˈbʌslɪŋ/', definition: '熙熙攘攘的', example: 'The market was bustling with shoppers.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape_1f3d9-fe0f.png' },
              { word: 'vibrant', phonetic: '/ˈvaɪbrənt/', definition: '充满活力的', example: 'It\'s a vibrant city with a lively nightlife.', emoji: 'https://em-content.zobj.net/source/apple/391/party-popper_1f389.png' },
              { word: 'hustle and bustle', phonetic: '/ˈhʌsl ænd ˈbʌsl/', definition: '熙熙攘攘', example: 'I love the hustle and bustle of the big city.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape_1f3d9-fe0f.png' },
              { word: 'overwhelming', phonetic: '/ˌoʊvərˈwelmɪŋ/', definition: '令人不知所措的', example: 'The noise and the number of people were overwhelming.', emoji: 'https://em-content.zobj.net/source/apple/391/face-with-spiral-eyes_1f635-200d-1f4ab.png' },
              { word: 'teeming with', phonetic: '/ˈtiːmɪŋ wɪθ/', definition: '充满', example: 'The streets were teeming with tourists.', emoji: 'https://em-content.zobj.net/source/apple/391/tropical-fish_1f420.png' },
              { word: 'congested', phonetic: '/kənˈdʒestɪd/', definition: '拥堵的', example: 'The roads are always congested during rush hour.', emoji: 'https://em-content.zobj.net/source/apple/391/oncoming-automobile_1f698.png' },
              { word: 'infrastructure', phonetic: '/ˈɪnfrəˌstrʌktʃər/', definition: '基础设施', example: 'The city needs to invest more in its public infrastructure.', emoji: 'https://em-content.zobj.net/source/apple/391/building-construction_1f3d7-fe0f.png' },
              { word: 'metropolis', phonetic: '/məˈtrɒpəlɪs/', definition: '大都市', example: 'Tokyo is a bustling metropolis with a huge population.', emoji: 'https://em-content.zobj.net/source/apple/391/night-with-stars_1f303.png' },
              { word: 'cosmopolitan', phonetic: '/ˌkɒzməˈpɒlɪtən/', definition: '国际化的', example: 'London is a very cosmopolitan city with a diverse population.', emoji: 'https://em-content.zobj.net/source/apple/391/globe-showing-europe-africa_1f30d.png' },
              { word: 'urbanization', phonetic: '/ˌɜːrbənaɪˈzeɪʃn/', definition: '城市化', example: 'Rapid urbanization has led to many social and environmental challenges.', emoji: '📈' },
              { word: 'megacity', phonetic: '/ˈmeɡəsɪti/', definition: '特大城市', example: 'A megacity is a city with a population of over ten million people.', emoji: '🤯' },
            ]
        }
    ],
};

const publicPlaces: SubTopic = {
    id: 'public-places',
    title: 'Public places',
    type: '地点题',
    color: 'green',
    wordSections: [
        {
            title: '基础词汇',
            words: [
                { word: 'amenities', phonetic: '/əˈmiːnətiz/', definition: '便利设施', example: 'The park has excellent amenities, like cafes and restrooms.', emoji: 'https://em-content.zobj.net/source/apple/391/restroom_1f6bb.png' },
                { word: 'accessible', phonetic: '/əkˈsesəbl/', definition: '可进入的', example: 'The library is accessible to people with disabilities.', emoji: '♿️' },
                { word: 'community', phonetic: '/kəˈmjuːnəti/', definition: '社区', example: 'The community center is a popular public place.', emoji: 'https://em-content.zobj.net/source/apple/391/houses_1f3d8-fe0f.png' },
                { word: 'recreational', phonetic: '/ˌrekriˈeɪʃənl/', definition: '娱乐的', example: 'The park offers many recreational facilities.', emoji: 'https://em-content.zobj.net/source/apple/391/soccer-ball_26bd.png' },
                { word: 'green spaces', phonetic: '/ɡriːn ˈspeɪsɪz/', definition: '绿地', example: 'Cities need more green spaces for people to relax.', emoji: 'https://em-content.zobj.net/source/apple/391/deciduous-tree_1f333.png' },
                { word: 'park', phonetic: '/pɑːrk/', definition: '公园', example: 'We often go for a walk in the local park.', emoji: 'https://em-content.zobj.net/source/apple/391/national-park_1f3de-fe0f.png' },
                { word: 'library', phonetic: '/ˈlaɪbreri/', definition: '图书馆', example: 'I borrowed three books from the library yesterday.', emoji: 'https://em-content.zobj.net/source/apple/391/books_1f4da.png' },
                { word: 'square', phonetic: '/skwer/', definition: '广场', example: 'People gathered in the main square for the concert.', emoji: 'https://em-content.zobj.net/source/apple/391/fountain_26f2.png' },
                { word: 'public transport', phonetic: '/ˈpʌblɪk ˈtrænspɔːrt/', definition: '公共交通', example: 'Using public transport is better for the environment.', emoji: 'https://em-content.zobj.net/source/apple/391/bus_1f68c.png' },
            ]
        },
        {
            title: '进阶词汇',
            words: [
                { word: 'civic', phonetic: '/ˈsɪvɪk/', definition: '公民的；市民的', example: 'It is our civic duty to keep public places clean.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape_1f3d9-fe0f.png' },
                { word: 'venue', phonetic: '/ˈvenjuː/', definition: '场所', example: 'The park is a popular venue for outdoor events.', emoji: 'https://em-content.zobj.net/source/apple/391/round-pushpin_1f4cd.png' },
                { word: 'pedestrian area', phonetic: '/pəˈdestriən ˈeriə/', definition: '步行区', example: 'The city center has a large pedestrian area.', emoji: 'https://em-content.zobj.net/source/apple/391/person-walking_1f6b6.png' },
                { word: 'well-maintained', phonetic: '/ˌwel meɪnˈteɪnd/', definition: '维护良好的', example: 'The public gardens are always well-maintained.', emoji: '✨' },
                { word: 'public realm', phonetic: '/ˈpʌblɪk relm/', definition: '公共领域', example: 'Improvements to the public realm can enhance community life.', emoji: 'https://em-content.zobj.net/source/apple/391/people-holding-hands_1f9d1-200d-1f91d-200d-1f9d1.png' },
            ]
        }
    ]
};

export const placesTopic: IeltsTopic = {
    title: '话题: 地点',
    section: 'Part 1',
    subTopics: [
      museum,
      cityAndCrowdedPlace,
      publicPlaces,
    ],
};
