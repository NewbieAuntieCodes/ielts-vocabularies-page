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
      { word: 'restoration', phonetic: '/ˌrestəˈreɪʃn/', definition: '修复；恢复', example: 'The restoration of the ancient painting took years of careful work.', emoji: 'https://em-content.zobj.net/source/apple/391/hammer-and-wrench_1f6e0-fe0f.png' },
      { word: 'collection', phonetic: '/kəˈlekʃn/', definition: '收藏品', example: 'The museum has an impressive collection of Roman sculptures.', emoji: 'https://em-content.zobj.net/source/apple/391/card-file-box_1f5c3-fe0f.png' },
      { word: 'display', phonetic: '/dɪˈspleɪ/', definition: '陈列；展览', example: 'The artifacts are on display in the main hall.', emoji: 'https://em-content.zobj.net/source/apple/391/eyes_1f440.png' },
      { word: 'sculpture', phonetic: '/ˈskʌlptʃər/', definition: '雕塑', example: 'We admired the beautiful marble sculpture in the gallery.', emoji: 'https://em-content.zobj.net/source/apple/391/moai_1f5ff.png' },
      { word: 'masterpiece', phonetic: '/ˈmæstərpiːs/', definition: '杰作', example: 'The Mona Lisa is considered a masterpiece of Renaissance art.', emoji: 'https://em-content.zobj.net/source/apple/391/glowing-star_1f31f.png' },
      { word: 'abstract', phonetic: '/ˈæbstrækt/', definition: '抽象的', example: 'I enjoy abstract art because it allows for personal interpretation.', emoji: 'https://em-content.zobj.net/source/apple/391/cyclone_1f300.png' },
      { word: 'realism', phonetic: '/ˈriːəlɪzəm/', definition: '现实主义', example: 'The artist is known for his incredible realism and attention to detail.', emoji: 'https://em-content.zobj.net/source/apple/391/camera_1f4f7.png' },
      { word: 'contemporary art', phonetic: '/kənˈtempəreri ɑːrt/', definition: '当代艺术', example: 'The gallery specializes in contemporary art from the 21st century.', emoji: 'https://em-content.zobj.net/source/apple/391/light-bulb_1f4a1.png' },
      { word: 'archaeology', phonetic: '/ˌɑːrkiˈɒlədʒi/', definition: '考古学', example: 'Archaeology helps us understand ancient civilizations by studying their artifacts.', emoji: 'https://em-content.zobj.net/source/apple/391/bone_1f9b4.png' },
      { word: 'preservation', phonetic: '/ˌprezərˈveɪʃn/', definition: '保存；保护', example: 'The preservation of historical documents is crucial for future generations.', emoji: 'https://em-content.zobj.net/source/apple/391/shield_1f6e1-fe0f.png' },
      { word: 'historical site', phonetic: '/hɪˈstɔːrɪkl saɪt/', definition: '历史遗迹', example: 'The Great Wall of China is a famous historical site.', emoji: 'https://em-content.zobj.net/source/apple/391/castle_1f3f0.png' },
      { word: 'educational', phonetic: '/ˌedʒuˈkeɪʃənl/', definition: '有教育意义的', example: 'Visiting a museum can be a fun and educational experience for children.', emoji: 'https://em-content.zobj.net/source/apple/391/books_1f4da.png' },
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
      { word: 'hustle and bustle', phonetic: '/ˈhʌsl ænd ˈbʌsl/', definition: '熙熙攘攘', example: 'I love the hustle and bustle of the big city.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape_1f3d9-fe0f.png' },
      { word: 'noisy', phonetic: '/ˈnɔɪzi/', definition: '嘈杂的', example: 'The restaurant was too noisy for a quiet conversation.', emoji: 'https://em-content.zobj.net/source/apple/391/speaker-high-volume_1f50a.png' },
      { word: 'lively', phonetic: '/ˈlaɪvli/', definition: '活泼的；热闹的', example: 'The streets were lively with music and laughter.', emoji: 'https://em-content.zobj.net/source/apple/391/woman-dancing_1f483.png' },
      { word: 'a crowd of people', phonetic: '/ə kraʊd əv ˈpiːpl/', definition: '一群人', example: 'A crowd of people gathered to watch the street performance.', emoji: 'https://em-content.zobj.net/source/apple/391/busts-in-silhouette_1f465.png' },
      { word: 'overwhelming', phonetic: '/ˌoʊvərˈwelmɪŋ/', definition: '令人不知所措的', example: 'The noise and the number of people were overwhelming.', emoji: 'https://em-content.zobj.net/source/apple/391/face-with-spiral-eyes_1f635-200d-1f4ab.png' },
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
