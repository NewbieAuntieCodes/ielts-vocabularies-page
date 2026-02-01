import { SubTopic } from '../data-types';
import { getManyFromPool } from '../pool/utils';

const SEASON = '2025年 5-8月';

export const studyWork: SubTopic = {
    id: 'p1-study-work',
    title: 'Study or work',
    type: '基础题',
    color: 'blue',
    badge: '必考',
    seasons: [SEASON],
    wordSections: [
        {
            title: '学习类 (Study)',
            words: [
                ...getManyFromPool([
                    'major in',
                    'assignment',
                    'course',
                    'subject',
                    'score',
                    'university',
                    'major',
                    'freshman',
                    'sophomore',
                    'junior',
                    'senior',
                    'undergraduate',
                    'boarding school',
                    'elementary school',
                    'secondary school',
                    'optional course',
                ], 'basic'),
                ...getManyFromPool([
                    'curriculum',
                    'tutorial',
                    'overwhelming',
                    'postgraduate',
                    'graduate school',
                    'PhD student',
                    'college entrance exam',
                    'compulsory course',
                    'extracurricular activities',
                    'exam-oriented education',
                    'nine-year compulsory education',
                    'further study abroad',
                    'rote learning',
                    'straight-A student',
                ], 'advanced'),
            ]
        },
        {
            title: '工作类 (Work)',
            words: [
                ...getManyFromPool([
                    'occupation',
                    'colleague',
                    'coworker',
                    'workload',
                    'department',
                    'employee',
                    'employer',
                    'position',
                    'promotion',
                    'résumé',
                    'salary',
                    'decent',
                    'well-paid',
                    'well-paid job',
                    'business trip',
                    'in charge of',
                    'earn a living',
                ], 'basic'),
                ...getManyFromPool([
                    'rewarding',
                    'commute',
                    'promising',
                    'company culture',
                    'flexible working hours',
                    'bring home the bacon',
                    'give me a decent salary',
                    'pay me well',
                    'make one\'s bread',
                    'multinational corporation',
                ], 'advanced'),
            ]
        }
    ]
};

export const hometown: SubTopic = {
    id: 'p1-hometown',
    title: 'Hometown',
    type: '基础题',
    color: 'green',
    badge: '必考',
    seasons: [SEASON],
    wordSections: [
        {
            title: '位置与类型',
            words: [
                { word: 'birthplace', level: 'basic', phonetic: '/ˈbɜːrθpleɪs/', definition: '出生地', example: 'Beijing is my birthplace and I grew up there.', emoji: '🏠' },
                { word: 'province', level: 'basic', phonetic: '/ˈprɑːvɪns/', definition: '省', example: 'My hometown is in Jiangsu Province.', emoji: '🗺️' },
                { word: 'city', level: 'basic', phonetic: '/ˈsɪti/', definition: '城市', example: 'It is a small city, but it has everything I need.', emoji: '🏙️' },
                { word: 'town', level: 'basic', phonetic: '/taʊn/', definition: '小镇', example: 'It is a quiet town where people know each other.', emoji: '🏘️' },
                { word: 'be located in', level: 'advanced', phonetic: '/bi loʊˈkeɪtɪd ɪn/', definition: '位于', example: 'My hometown is located in the southeast of China.', emoji: '📍' },
                { word: 'be situated in', level: 'advanced', phonetic: '/bi ˈsɪtʃueɪtɪd ɪn/', definition: '坐落于', example: 'It is situated in a valley near a river.', emoji: '📌' },
                { word: 'capital city', level: 'advanced', phonetic: '/ˈkæpɪtl ˈsɪti/', definition: '首都', example: 'The capital city usually offers better education and medical services.', emoji: '🏛️' },
                { word: 'coastal city', level: 'advanced', phonetic: '/ˈkoʊstl ˈsɪti/', definition: '沿海城市', example: 'It is a coastal city, so seafood is fresh and the air feels humid.', emoji: '🌊' },
                { word: 'inland city', level: 'advanced', phonetic: '/ˈɪnlænd ˈsɪti/', definition: '内陆城市', example: 'It is an inland city, so we have to travel far to see the ocean.', emoji: '🗺️' },
                { word: 'industrial city', level: 'advanced', phonetic: '/ɪnˈdʌstriəl ˈsɪti/', definition: '工业城市', example: 'It used to be an industrial city with many factories.', emoji: '🏭' },
                { word: 'tourist city', level: 'advanced', phonetic: '/ˈtʊrɪst ˈsɪti/', definition: '旅游城市', example: 'It is a tourist city, so there are lots of hotels and souvenir shops.', emoji: '📸' },
                { word: 'agricultural city', level: 'advanced', phonetic: '/ˌæɡrɪˈkʌltʃərəl ˈsɪti/', definition: '农业城市', example: 'It is an agricultural city surrounded by farmland.', emoji: '🌾' },
                { word: 'metropolis', level: 'advanced', phonetic: '/məˈtrɑːpəlɪs/', definition: '大都市', example: 'My hometown has transformed into a bustling metropolis.', emoji: '🌃' },
                { word: 'metropolitan city', level: 'advanced', phonetic: '/ˌmetrəˈpɑːlɪtən ˈsɪti/', definition: '大都市', example: 'Living in a metropolitan city means more job opportunities but also more stress.', emoji: '🌆' },
                { word: 'backwater', level: 'advanced', phonetic: '/ˈbækˌwɔːtər/', definition: '偏僻落后的地方', example: 'Some people may call it a backwater, but I enjoy the peaceful lifestyle.', emoji: '🌾' },
            ]
        },
        {
            title: '自然与环境',
            words: [
                { word: 'scenery', level: 'basic', phonetic: '/ˈsiːnəri/', definition: '风景', example: 'The scenery in my hometown is breathtaking.', emoji: '🏔️' },
                { word: 'landscape', level: 'basic', phonetic: '/ˈlændskeɪp/', definition: '地貌；景观', example: 'The landscape is a mix of mountains and rivers.', emoji: '🏞️' },
                { word: 'climate', level: 'basic', phonetic: '/ˈklaɪmət/', definition: '气候', example: 'The climate is mild, so it is comfortable to live there.', emoji: '🌤️' },
                { word: 'weather', level: 'basic', phonetic: '/ˈweðər/', definition: '天气', example: 'The weather can be unpredictable in spring.', emoji: '🌦️' },
                { word: 'air pollution', level: 'advanced', phonetic: '/er pəˈluːʃn/', definition: '空气污染', example: 'Air pollution can be a problem in winter when there is little wind.', emoji: '🌫️' },
            ]
        },
        {
            title: '生活与配套',
            words: [
                { word: 'residents', level: 'basic', phonetic: '/ˈrezɪdənts/', definition: '居民', example: 'The local residents are very friendly and welcoming.', emoji: '🧑‍🤝‍🧑' },
                { word: 'facility', level: 'basic', phonetic: '/fəˈsɪləti/', definition: '设施', example: 'The city has good public facilities like parks and libraries.', emoji: '🏗️' },
                { word: 'basic infrastructure', level: 'advanced', phonetic: '/ˈbeɪsɪk ˈɪnfrəˌstrʌktʃər/', definition: '基础设施', example: 'The basic infrastructure has improved a lot, like roads and public transport.', emoji: '🛣️' },
                { word: 'public transportation', level: 'advanced', phonetic: '/ˈpʌblɪk ˌtrænspɔːrˈteɪʃn/', definition: '公共交通', example: 'Public transportation is convenient, so I rarely drive.', emoji: '🚌' },
                { word: 'shopping mall', level: 'advanced', phonetic: '/ˈʃɑːpɪŋ mɔːl/', definition: '购物中心', example: 'There is a huge shopping mall near my home.', emoji: '🛍️' },
                { word: 'sports facility', level: 'advanced', phonetic: '/spɔːrts fəˈsɪləti/', definition: '体育设施', example: 'The city has great sports facilities like stadiums and swimming pools.', emoji: '🏟️' },
                { word: 'entertainment place', level: 'advanced', phonetic: '/ˌentərˈteɪnmənt pleɪs/', definition: '娱乐场所', example: 'There are many entertainment places, like cinemas, cafés, and karaoke bars.', emoji: '🎭' },
                { word: 'night life', level: 'advanced', phonetic: '/naɪt laɪf/', definition: '夜生活', example: 'The night life is lively on weekends, especially around the downtown area.', emoji: '🌙' },
                { word: 'local snack', level: 'advanced', phonetic: '/ˈloʊkl snæk/', definition: '当地小吃', example: 'My favorite local snack is sold at a small night market.', emoji: '🥟' },
                { word: 'local delicacy', level: 'advanced', phonetic: '/ˈloʊkl ˈdelɪkəsi/', definition: '当地美食', example: 'You must try the local delicacy when you visit.', emoji: '🍲' },
                { word: 'cultural diversity', level: 'advanced', phonetic: '/ˈkʌltʃərəl daɪˈvɜːrsəti/', definition: '文化多样性', example: 'I love the cultural diversity because people from different places live there.', emoji: '🌍' },
                { word: 'historical', level: 'basic', phonetic: '/hɪˈstɔːrɪkl/', definition: '历史悠久的', example: 'There are many historical buildings in the city center.', emoji: '🏛️' },
                { word: 'historical site', level: 'advanced', phonetic: '/hɪˈstɔːrɪkl saɪt/', definition: '历史遗址；名胜古迹', example: 'There are several historical sites that attract tourists every year.', emoji: '🏛️' },
                { word: 'skyscraper', level: 'basic', phonetic: '/ˈskaɪˌskreɪpər/', definition: '摩天大楼', example: 'There are a few skyscrapers in the new district.', emoji: '🏙️' },
                { word: 'tower block', level: 'advanced', phonetic: '/ˈtaʊər blɑːk/', definition: '高层住宅楼', example: 'Many people live in tower blocks in the new district.', emoji: '🏢' },
                { word: 'life expense', level: 'advanced', phonetic: '/laɪf ɪkˈspens/', definition: '生活开销', example: 'The life expense is much lower than in first-tier cities.', emoji: '💰' },
                { word: 'sentimental value', level: 'advanced', phonetic: '/ˌsentɪˈmentl ˈvæljuː/', definition: '情感价值', example: 'This old park has great sentimental value to me.', emoji: '💖' },
            ]
        },
        {
            title: '特点与问题',
            words: [
                { word: 'urbanization', level: 'advanced', phonetic: '/ˌɜːrbənaɪˈzeɪʃn/', definition: '城市化', example: 'The town has seen rapid urbanization in recent years.', emoji: '🏙️' },
                { word: 'pace of life', level: 'advanced', phonetic: '/peɪs əv laɪf/', definition: '生活节奏', example: 'I prefer the slow pace of life in my hometown.', emoji: '⏳' },
                { word: 'dynamic', level: 'advanced', phonetic: '/daɪˈnæmɪk/', definition: '充满活力的；充满变化的', example: 'It is a dynamic place with lots of young people and new businesses.', emoji: '⚡️' },
                { word: 'vibrant', level: 'advanced', phonetic: '/ˈvaɪbrənt/', definition: '充满活力的', example: 'The city center is vibrant, especially at night.', emoji: '🔥' },
                { word: 'well-known', level: 'advanced', phonetic: '/ˌwelˈnoʊn/', definition: '知名的', example: 'My hometown is well-known for its street food.', emoji: '⭐️' },
                { word: 'be famous for', level: 'advanced', phonetic: '/bi ˈfeɪməs fɔːr/', definition: '以…闻名', example: 'My hometown is famous for its spicy noodles.', emoji: '🏆' },
                { word: 'be noted for', level: 'advanced', phonetic: '/bi ˈnoʊtɪd fɔːr/', definition: '因…著称', example: 'The area is noted for its beautiful natural scenery.', emoji: '📝' },
                { word: 'population density', level: 'advanced', phonetic: '/ˌpɑːpjəˈleɪʃn ˈdensəti/', definition: '人口密度', example: 'The population density is high in the city center.', emoji: '📊' },
                { word: 'overcrowded', level: 'advanced', phonetic: '/ˌoʊvərˈkraʊdɪd/', definition: '人满为患的', example: 'Some areas can get overcrowded during public holidays.', emoji: '👥' },
                { word: 'heavy traffic', level: 'advanced', phonetic: '/ˈhevi ˈtræfɪk/', definition: '交通繁忙', example: 'There is heavy traffic during morning and evening rush hours.', emoji: '🚦' },
                { word: 'bumper-to-bumper traffic', level: 'advanced', phonetic: '/ˌbʌmpər tə ˈbʌmpər ˈtræfɪk/', definition: '车挨车的交通拥堵', example: 'At rush hour, it is bumper-to-bumper traffic on the main road.', emoji: '🚗' },
                { word: 'traffic congestion', level: 'advanced', phonetic: '/ˈtræfɪk kənˈdʒestʃən/', definition: '交通拥堵', example: 'Traffic congestion is getting worse year by year.', emoji: '🚧' },
                { word: 'traffic jam', level: 'advanced', phonetic: '/ˈtræfɪk dʒæm/', definition: '交通堵塞', example: 'I got stuck in a traffic jam on my way to the office.', emoji: '🚙' },
            ]
        }
    ]
};

export const accommodation: SubTopic = {
    id: 'p1-accommodation',
    title: 'Accommodation',
    type: '基础题',
    color: 'yellow',
    badge: '必考',
    seasons: [SEASON],
    wordSections: [
        {
            title: '住所类型',
            words: [
                { word: 'house', level: 'basic', phonetic: '/haʊs/', definition: '房子', example: 'I grew up in a small house in the suburbs.', emoji: '🏠' },
                { word: 'apartment', level: 'basic', phonetic: '/əˈpɑːrtmənt/', definition: '公寓', example: 'I live in a small apartment in the city center.', emoji: '🏢' },
                { word: 'flat', level: 'basic', phonetic: '/flæt/', definition: '公寓（英式用法）', example: 'I rent a flat near my workplace.', emoji: '🏠' },
                { word: 'condo', level: 'advanced', phonetic: '/ˈkɑːndoʊ/', definition: '公寓（常指带物业/社区设施的公寓）', example: 'My cousin lives in a condo with a gym and a pool.', emoji: '🏢' },
                { word: 'dorm', level: 'basic', phonetic: '/dɔːrm/', definition: '宿舍', example: 'I lived in a dorm during my first year at university.', emoji: '🏫' },
                { word: 'apartment block', level: 'advanced', phonetic: '/əˈpɑːrtmənt blɑːk/', definition: '公寓楼', example: 'I live in an apartment block with a security guard.', emoji: '🏬' },
                { word: 'rented accommodation', level: 'advanced', phonetic: '/ˈrentɪd əˌkɑːməˈdeɪʃn/', definition: '租赁住所', example: 'I prefer rented accommodation because it is more flexible.', emoji: '🔑' },
            ]
        },
        {
            title: '房间与空间',
            words: [
                { word: 'balcony', level: 'basic', phonetic: '/ˈbælkəni/', definition: '阳台', example: 'I enjoy having coffee on the balcony.', emoji: '🌅' },
                { word: 'attic', level: 'advanced', phonetic: '/ˈætɪk/', definition: '阁楼', example: 'We use the attic to store old boxes.', emoji: '🧳' },
                { word: 'basement', level: 'basic', phonetic: '/ˈbeɪsmənt/', definition: '地下室', example: 'There is a basement where we keep tools.', emoji: '🧱' },
                { word: 'bedroom', level: 'basic', phonetic: '/ˈbedruːm/', definition: '卧室', example: 'My bedroom is small but cosy.', emoji: '🛏️' },
                { word: 'kitchen', level: 'basic', phonetic: '/ˈkɪtʃən/', definition: '厨房', example: 'The kitchen is clean and practical.', emoji: '🍳' },
                { word: 'dining room', level: 'basic', phonetic: '/ˈdaɪnɪŋ ruːm/', definition: '餐厅', example: 'We have dinner together in the dining room.', emoji: '🍽️' },
                { word: 'living room', level: 'basic', phonetic: '/ˈlɪvɪŋ ruːm/', definition: '客厅', example: 'I spend most of my time in the living room.', emoji: '🛋️' },
                { word: 'guest room', level: 'basic', phonetic: '/ɡest ruːm/', definition: '客房', example: 'We turned the guest room into a small office.', emoji: '🛌' },
                { word: 'study', level: 'basic', phonetic: '/ˈstʌdi/', definition: '书房', example: 'I use the study as a quiet place to work.', emoji: '📚' },
                { word: 'restroom', level: 'basic', phonetic: '/ˈrestˌruːm/', definition: '洗手间', example: 'There is a restroom on each floor.', emoji: '🚻' },
                { word: 'courtyard', level: 'advanced', phonetic: '/ˈkɔːrtjɑːrd/', definition: '庭院', example: 'There is a quiet courtyard in the middle of the building.', emoji: '🏡' },
                { word: 'lobby', level: 'basic', phonetic: '/ˈlɑːbi/', definition: '大厅', example: 'There is a security desk in the lobby.', emoji: '🏢' },
                { word: 'garage', level: 'basic', phonetic: '/ɡəˈrɑːʒ/', definition: '车库', example: 'My parents park the car in the garage.', emoji: '🚗' },
                { word: 'garden', level: 'basic', phonetic: '/ˈɡɑːrdn/', definition: '花园', example: 'We have a small garden with roses.', emoji: '🌷' },
                { word: 'closet', level: 'basic', phonetic: '/ˈklɑːzɪt/', definition: '衣柜', example: 'I keep my coats in the closet.', emoji: '👗' },
            ]
        },
        {
            title: '家具与家电',
            words: [
                { word: 'appliance', level: 'basic', phonetic: '/əˈplaɪəns/', definition: '家用电器', example: 'The landlord provided basic appliances like a fridge and a washing machine.', emoji: '🔌' },
                { word: 'cooker', level: 'basic', phonetic: '/ˈkʊkər/', definition: '炉子；灶具', example: 'The cooker is brand new, so cooking is easy.', emoji: '🍳' },
                { word: 'bookcase', level: 'basic', phonetic: '/ˈbʊkkeɪs/', definition: '书柜', example: 'I put my novels on a wooden bookcase.', emoji: '📚' },
                { word: 'cupboard', level: 'basic', phonetic: '/ˈkʌbərd/', definition: '橱柜；碗柜', example: 'I keep plates and cups in the cupboard.', emoji: '🗄️' },
                { word: 'drawer', level: 'basic', phonetic: '/drɔːr/', definition: '抽屉', example: 'I keep my documents in the top drawer.', emoji: '🗄️' },
                { word: 'handle', level: 'basic', phonetic: '/ˈhændl/', definition: '把手', example: 'The door handle is loose, so I need to fix it.', emoji: '🚪' },
                { word: 'ornament', level: 'advanced', phonetic: '/ˈɔːrnəmənt/', definition: '装饰品', example: 'I bought a few ornaments to make the room feel warmer.', emoji: '🧸' },
            ]
        },
        {
            title: '设施、装修与管理',
            words: [
                { word: 'elevator', level: 'basic', phonetic: '/ˈelɪveɪtər/', definition: '电梯', example: 'The building has an elevator, so carrying groceries is easy.', emoji: '🛗' },
                { word: 'heating', level: 'basic', phonetic: '/ˈhiːtɪŋ/', definition: '供暖', example: 'The heating works well even in winter.', emoji: '🔥' },
                { word: 'radiator', level: 'advanced', phonetic: '/ˈreɪdieɪtər/', definition: '暖气片', example: 'We dry towels on the radiator in winter.', emoji: '♨️' },
                { word: 'central heating', level: 'advanced', phonetic: '/ˈsentrəl ˈhiːtɪŋ/', definition: '中央供暖', example: 'Central heating keeps the whole apartment warm.', emoji: '♨️' },
                { word: 'ventilation system', level: 'advanced', phonetic: '/ˌventɪˈleɪʃn ˈsɪstəm/', definition: '通风系统', example: 'A good ventilation system keeps the room fresh.', emoji: '💨' },
                { word: 'amenities', level: 'advanced', phonetic: '/əˈmiːnətiz/', definition: '生活设施', example: 'The building has great amenities like a gym and a pool.', emoji: '🏪' },
                { word: 'mod cons', level: 'advanced', phonetic: '/mɑːd kɑːnz/', definition: '现代化便利设施', example: 'The flat has all the mod cons, like a washing machine and fast Wi-Fi.', emoji: '📱' },
                { word: 'neighborhood', level: 'basic', phonetic: '/ˈneɪbərhʊd/', definition: '街区/邻里', example: 'It is a safe and quiet neighborhood.', emoji: '🏡' },
                { word: 'spacious', level: 'advanced', phonetic: '/ˈspeɪʃəs/', definition: '宽敞的', example: 'The living room is very bright and spacious.', emoji: '↔️' },
                { word: 'comfy', level: 'basic', phonetic: '/ˈkʌmfi/', definition: '舒服的（口语）', example: 'The sofa is really comfy.', emoji: '😌' },
                { word: 'cozy', level: 'basic', phonetic: '/ˈkoʊzi/', definition: '舒适的', example: 'My bedroom is very cozy and warm.', emoji: '🛋️' },
                { word: 'cosy', level: 'basic', phonetic: '/ˈkoʊzi/', definition: '舒适温馨的（英式拼写）', example: 'My flat feels cosy in the evening.', emoji: '🕯️' },
                { word: 'well-decorated', level: 'advanced', phonetic: '/wel ˈdekəreɪtɪd/', definition: '装修精美的', example: 'Her flat is stylish and well-decorated.', emoji: '🖼️' },
                { word: 'decoration', level: 'basic', phonetic: '/ˌdekəˈreɪʃn/', definition: '装饰；装修', example: 'The decoration is simple but modern.', emoji: '🎨' },
                { word: 'decoration style', level: 'advanced', phonetic: '/ˌdekəˈreɪʃn staɪl/', definition: '装修风格', example: 'I like a minimalist decoration style.', emoji: '🎨' },
                { word: 'well-lit', level: 'advanced', phonetic: '/wel lɪt/', definition: '采光良好的', example: 'I prefer a well-lit room with large windows.', emoji: '☀️' },
                { word: 'cluttered', level: 'advanced', phonetic: '/ˈklʌtərd/', definition: '凌乱的', example: 'My desk is always cluttered with books.', emoji: '📦' },
                { word: 'property management', level: 'advanced', phonetic: '/ˈprɑːpərti ˈmænɪdʒmənt/', definition: '物业管理', example: 'Property management is responsible for security and maintenance.', emoji: '🛎️' },
                { word: 'address', level: 'basic', phonetic: '/əˈdres/', definition: '地址', example: 'I wrote my address on the rental contract.', emoji: '📍' },
            ]
        }
    ]
};

export const areaYouLiveIn: SubTopic = {
    id: 'p1-area-live-in',
    title: 'The area you live in',
    type: '基础题',
    color: 'purple',
    badge: '必考',
    seasons: [SEASON],
    wordSections: [
        {
            title: '社区概况',
            words: [
                { word: 'residential', level: 'basic', phonetic: '/ˌrezɪˈdenʃl/', definition: '住宅区的', example: 'I live in a quiet residential area.', emoji: '🏘️' },
                { word: 'convenient', level: 'basic', phonetic: '/kənˈviːniənt/', definition: '方便的', example: 'The area is very convenient for shopping.', emoji: '🛒' },
                { word: 'surroundings', level: 'basic', phonetic: '/səˈraʊndɪŋz/', definition: '周边环境', example: 'The natural surroundings are quite beautiful.', emoji: '🌳' },
                { word: 'lively', level: 'basic', phonetic: '/ˈlaɪvli/', definition: '热闹的', example: 'The area becomes quite lively at night.', emoji: '✨' },
            ]
        },
        {
            title: '交通与设施',
            words: [
                { word: 'public transport', level: 'basic', phonetic: '/ˈpʌblɪk ˈtrænspɔːrt/', definition: '公共交通', example: 'The area has excellent public transport links.', emoji: '🚌' },
                { word: 'within walking distance', level: 'advanced', phonetic: '/wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/', definition: '在步行距离内', example: 'The supermarket is within walking distance.', emoji: '🚶' },
                { word: 'greenery', level: 'advanced', phonetic: '/ˈɡriːnəri/', definition: '绿色植物/绿化', example: 'There is a lot of greenery in our neighborhood.', emoji: '🌿' },
                { word: 'vibrant', level: 'advanced', phonetic: '/ˈvaɪbrənt/', definition: '充满活力的', example: 'It is a vibrant community with many young people.', emoji: '🔥' },
                { word: 'isolated', level: 'advanced', phonetic: '/ˈaɪsəleɪtɪd/', definition: '偏僻的', example: 'The area is a bit isolated from the city center.', emoji: '📍' },
            ]
        }
    ]
};
