import { IeltsTopic, SubTopic } from './data-types';

const museum: SubTopic = {
    id: 'museum',
    title: 'Museum',
    type: '地点题',
    color: 'green',
    words: [
      { word: 'exhibition', phonetic: '/ˌeksɪˈbɪʃn/', definition: '展览会', example: 'The art exhibition attracted thousands of visitors.', emoji: 'https://em-content.zobj.net/source/apple/391/framed-picture_1f5bc-fe0f.png' },
      { word: 'gallery', phonetic: '/ˈɡæləri/', definition: '美术馆', example: 'We visited an art gallery downtown.', emoji: 'https://em-content.zobj.net/source/apple/391/artist-palette_1f3a8.png' },
      { word: 'artifact', phonetic: '/ˈɑːrtɪfækt/', definition: '手工艺品', example: 'These ancient artifacts are thousands of years old.', emoji: 'https://em-content.zobj.net/source/apple/391/amphora_1f3fa.png' },
      { word: 'cultural heritage', phonetic: '/ˈkʌltʃərəl ˈherɪtɪdʒ/', definition: '文化遗产', example: 'Museums help to preserve our cultural heritage.', emoji: 'https://em-content.zobj.net/source/apple/391/classical-building_1f3db-fe0f.png' },
      { word: 'aesthetics', phonetic: '/esˈθetɪks/', definition: '美学', example: 'The aesthetics of the painting are truly remarkable.', emoji: 'https://em-content.zobj.net/source/apple/391/sparkles_2728.png' },
      { word: 'artwork', phonetic: '/ˈɑːrtwɜːrk/', definition: '艺术品', example: 'The museum features artwork from various modern artists.', emoji: 'https://em-content.zobj.net/source/apple/391/framed-picture_1f5bc-fe0f.png' },
    ],
};

const crowdedPlace: SubTopic = {
    id: 'crowded-place',
    title: 'Crowded place',
    type: '地点题',
    color: 'green',
    words: [
      { word: 'bustling', phonetic: '/ˈbʌslɪŋ/', definition: '熙熙攘攘的', example: 'The market was bustling with shoppers.', emoji: 'https://em-content.zobj.net/source/apple/391/man-running_1f3c3-200d-2642-fe0f.png' },
      { word: 'vibrant', phonetic: '/ˈvaɪbrənt/', definition: '充满活力的', example: 'It\'s a vibrant city with a lively nightlife.', emoji: 'https://em-content.zobj.net/source/apple/391/party-popper_1f389.png' },
      { word: 'packed', phonetic: '/pækt/', definition: '拥挤的', example: 'The train was so packed I could barely move.', emoji: 'https://em-content.zobj.net/source/apple/391/family-man-woman-girl-boy_1f468-200d-1f469-200d-1f467-200d-1f466.png' },
      { word: 'throng', phonetic: '/θrɔːŋ/', definition: '人群', example: 'A throng of tourists gathered around the monument.', emoji: 'https://em-content.zobj.net/source/apple/391/busts-in-silhouette_1f465.png' },
      { word: 'hustle and bustle', phonetic: '/ˈhʌsl ænd ˈbʌsl/', definition: '熙熙攘攘', example: 'I love the hustle and bustle of the big city.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape_1f3d9-fe0f.png' },
    ],
};

const publicPlaces: SubTopic = {
    id: 'public-places',
    title: 'Public places',
    type: '地点题',
    color: 'green',
    words: [
      { word: 'amenities', phonetic: '/əˈmiːnətiz/', definition: '便利设施', example: 'The park has excellent amenities, like cafes and restrooms.', emoji: 'https://em-content.zobj.net/source/apple/391/restroom_1f6bb.png' },
      { word: 'accessible', phonetic: '/əkˈsesəbl/', definition: '可进入的', example: 'The library is accessible to people with disabilities.', emoji: 'https://em-content.zobj.net/source/apple/391/wheelchair-symbol_267f-fe0f.png' },
      { word: 'community', phonetic: '/kəˈmjuːnəti/', definition: '社区', example: 'The community center is a popular public place.', emoji: 'https://em-content.zobj.net/source/apple/391/houses_1f3d8-fe0f.png' },
      { word: 'recreational', phonetic: '/ˌrekriˈeɪʃənl/', definition: '娱乐的', example: 'The park offers many recreational facilities.', emoji: 'https://em-content.zobj.net/source/apple/391/soccer-ball_26bd.png' },
      { word: 'green spaces', phonetic: '/ɡriːn ˈspeɪsɪz/', definition: '绿地', example: 'Cities need more green spaces for people to relax.', emoji: 'https://em-content.zobj.net/source/apple/391/deciduous-tree_1f333.png' },
    ],
};

const city: SubTopic = {
    id: 'city',
    title: 'City',
    type: '地点题',
    color: 'green',
    isNew: false,
    words: [
      { word: 'skyscraper', phonetic: '/ˈskaɪˌskreɪpər/', definition: '摩天大楼', example: 'The skyline of New York is dominated by skyscrapers.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape_1f3d9-fe0f.png' },
      { word: 'infrastructure', phonetic: '/ˈɪnfrəˌstrʌktʃər/', definition: '基础设施', example: 'The city needs to invest more in its public infrastructure.', emoji: 'https://em-content.zobj.net/source/apple/391/building-construction_1f3d7-fe0f.png' },
      { word: 'skyline', phonetic: '/ˈskaɪlaɪn/', definition: '天际线', example: 'We admired the beautiful city skyline at sunset.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape-at-dusk_1f306.png' },
      { word: 'urban', phonetic: '/ˈɜːrbən/', definition: '都市的', example: 'Traffic congestion is a major problem in many urban areas.', emoji: 'https://em-content.zobj.net/source/apple/391/office-building_1f3e2.png' },
      { word: 'metropolis', phonetic: '/məˈtrɒpəlɪs/', definition: '大都市', example: 'Tokyo is a bustling metropolis with a huge population.', emoji: 'https://em-content.zobj.net/source/apple/391/night-with-stars_1f303.png' },
      { word: 'cosmopolitan', phonetic: '/ˌkɒzməˈpɒlɪtən/', definition: '国际化的', example: 'London is a very cosmopolitan city with a diverse population.', emoji: 'https://em-content.zobj.net/source/apple/391/globe-showing-europe-africa_1f30d.png' },
    ],
};

export const placesTopic: IeltsTopic = {
    title: '话题: 地点',
    subTopics: [
      museum,
      crowdedPlace,
      publicPlaces,
      city,
    ],
};