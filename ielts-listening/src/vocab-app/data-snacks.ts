
import { SubTopic } from './data-types';

export const snacks: SubTopic = {
    id: 'snacks',
    title: 'Snacks 零食',
    type: '事物题',
    color: 'green',
    wordSections: [
        {
            title: '1. 零食种类 (Types of Snacks)',
            words: [
                // 基础词 (Basic)
                { word: 'biscuit', level: 'basic', phonetic: '/ˈbɪskɪt/', definition: '饼干', example: 'I like to have a biscuit with my tea.', emoji: '🍪' },
                { word: 'bread', level: 'basic', phonetic: '/bred/', definition: '面包', example: 'Freshly baked bread smells wonderful.', emoji: '🍞' },
                { word: 'cake', level: 'basic', phonetic: '/keɪk/', definition: '蛋糕', example: 'We had a chocolate cake for her birthday.', emoji: '🎂' },
                { word: 'chip', level: 'basic', phonetic: '/tʃɪp/', definition: '炸薯条', example: 'A bag of potato chips is a common snack.', emoji: '🍟' },
                { word: 'cookie', level: 'basic', phonetic: '/ˈkʊki/', definition: '曲奇饼', example: 'My grandmother makes the best oatmeal cookies.', emoji: '🍪' },
                { word: 'gum', level: 'basic', phonetic: '/ɡʌm/', definition: '口香糖', example: 'Chewing gum can help some people focus.', emoji: '🍬' },
                { word: 'doughnut', level: 'basic', phonetic: '/ˈdoʊnʌt/', definition: '炸甜甜圈', example: 'I grabbed a glazed doughnut on my way to work.', emoji: '🍩' },
                { word: 'popcorn', level: 'basic', phonetic: '/ˈpɑːpkɔːrn/', definition: '爆米花', example: 'Popcorn is the classic snack for watching movies.', emoji: ' popcorn ' },
                { word: 'pudding', level: 'basic', phonetic: '/ˈpʊdɪŋ/', definition: '布丁', example: 'Chocolate pudding is a simple and sweet dessert.', emoji: '🍮' },
                { word: 'ice cream', level: 'basic', phonetic: '/aɪs kriːm/', definition: '冰激凌', example: 'Vanilla ice cream is my favorite flavor.', emoji: '🍨' },
                { word: 'nut', level: 'basic', phonetic: '/nʌt/', definition: '坚果', example: 'Nuts are a very healthy source of energy.', emoji: '🥜' },
                { word: 'peanut', level: 'basic', phonetic: '/ˈpiːnʌt/', definition: '花生', example: 'I like roasted peanuts with a little salt.', emoji: '🥜' },
                { word: 'yogurt', level: 'basic', phonetic: '/ˈjoʊɡərt/', definition: '酸奶', example: 'I often have yogurt with some fruit as a snack.', emoji: '🥛' },
                { word: 'energy bar', level: 'basic', phonetic: '/ˈenərdʒi bɑːr/', definition: '能量棒', example: 'I always keep an energy bar in my gym bag.', emoji: '🍫' },
                { word: 'corn chips', level: 'basic', phonetic: '/kɔːrn tʃɪps/', definition: '玉米片', example: 'Corn chips are delicious with salsa dip.', emoji: '🌽' },
                // 进阶词 (Advanced)
                { word: 'cracker', level: 'advanced', phonetic: '/ˈkrækər/', definition: '薄脆饼干', example: 'Cheese and crackers are a great light snack.', emoji: '🍘' },
                { word: 'lollipop', level: 'advanced', phonetic: '/ˈlɑːlipɑːp/', definition: '棒棒糖', example: 'The child was happily licking a large lollipop.', emoji: '🍭' },
                { word: 'marshmallow', level: 'advanced', phonetic: '/ˈmɑːrʃmeloʊ/', definition: '棉花软糖', example: 'We roasted marshmallows over the campfire.', emoji: '🍡' },
                { word: 'popsicle', level: 'advanced', phonetic: '/ˈpɑːpsɪkl/', definition: '冰棒', example: 'It was so hot that we all wanted a fruit popsicle.', emoji: '🍦' },
                { word: 'seaweed', level: 'advanced', phonetic: '/ˈsiːwiːd/', definition: '海草', example: 'Dried seaweed is a healthy, crunchy snack.', emoji: '🌿' },
                { word: 'beef jerky', level: 'advanced', phonetic: '/biːf ˈdʒɜːrki/', definition: '牛肉干', example: 'Beef jerky is high in protein and easy to carry.', emoji: '🥩' },
                { word: 'pork jerky', level: 'advanced', phonetic: '/pɔːrk ˈdʒɜːrki/', definition: '猪肉干', example: 'Pork jerky is a popular snack in many Asian countries.', emoji: '🥓' },
                { word: 'jelly bean', level: 'advanced', phonetic: '/ˈdʒeli biːn/', definition: '软心豆粒糖', example: 'Jelly beans come in many different fruit flavors.', emoji: '🍬' },
                { word: 'walnut', level: 'advanced', phonetic: '/ˈwɔːlnʌt/', definition: '核桃', example: 'Walnuts are shaped like a tiny brain.', emoji: '🌰' },
                { word: 'almond', level: 'advanced', phonetic: '/ˈɑːmənd/', definition: '杏仁', example: 'Almonds are great for your heart health.', emoji: '🥜' },
                { word: 'cashew', level: 'advanced', phonetic: '/ˈkæʃuː/', definition: '腰果', example: 'Cashews are creamy and very satisfying.', emoji: '🥜' },
                { word: 'hazelnut', level: 'advanced', phonetic: '/ˈheɪzlnʌt/', definition: '榛子', example: 'Hazelnuts go very well with chocolate.', emoji: '🌰' },
                { word: 'macadamia', level: 'advanced', phonetic: '/ˌmækəˈdeɪmiə/', definition: '澳洲坚果', example: 'Macadamia nuts are known for their buttery taste.', emoji: '🌰' },
                { word: 'pistachio', level: 'advanced', phonetic: '/pɪˈstæʃioʊ/', definition: '开心果', example: 'Pistachios are fun to crack open and eat.', emoji: '🥜' },
                { word: 'trail mixes', level: 'advanced', phonetic: '/treɪl mɪksɪz/', definition: '混合型坚果', example: 'Trail mixes usually contain nuts, seeds, and dried fruit.', emoji: '🎒' },
            ]
        },
        {
            title: '2. 描述与味道 (Flavor & Ingredients)',
            words: [
                // 基础词 (Basic)
                { word: 'sugar-free', level: 'basic', phonetic: '/ˈʃʊɡər friː/', definition: '无糖的', example: 'I prefer sugar-free gum to protect my teeth.', emoji: '🚫' },
                { word: 'artificial colour', level: 'basic', phonetic: '/ˌɑːrtɪˈfɪʃl ˈkʌlər/', definition: '人造色素', example: 'Many bright candies contain artificial colour.', emoji: '🎨' },
                { word: 'artificial flavour', level: 'basic', phonetic: '/ˌɑːrtɪˈfɪʃl ˈfleɪvər/', definition: '人造香料', example: 'This snack uses artificial flavour to mimic real fruit.', emoji: '🧪' },
                { word: 'dried fruit', level: 'basic', phonetic: '/draɪd fruːt/', definition: '干果', example: 'Dried fruits like raisins are naturally sweet.', emoji: '🍇' },
                // 进阶词 (Advanced)
                { word: 'mint', level: 'advanced', phonetic: '/mɪnt/', definition: '薄荷', example: 'Mint chocolate has a very cooling taste.', emoji: '🌿' },
                { word: 'oatmeal', level: 'advanced', phonetic: '/ˈoʊtmiːl/', definition: '燕麦片', example: 'Oatmeal cookies are often seen as a healthier choice.', emoji: '🥣' },
                { word: 'refined sugar', level: 'advanced', phonetic: '/rɪˈfaɪnd ˈʃʊɡər/', definition: '精制糖', example: 'Eating too much refined sugar can be bad for your health.', emoji: '🍬' },
                { word: 'snacker', level: 'advanced', phonetic: '/ˈsnækər/', definition: '在正餐之间吃小吃的人', example: 'I am a heavy snacker when I am studying late.', emoji: '😋' },
                { word: 'plum', level: 'advanced', phonetic: '/plʌm/', definition: '李子；梅子', example: 'Sour plums are a very refreshing snack.', emoji: '🍑' },
            ]
        },
        {
            title: '3. 健康与习惯 (Health & Habits)',
            words: [
                // 基础词 (Basic)
                { word: 'maintain weight', level: 'basic', phonetic: '/meɪnˈteɪn weɪt/', definition: '保持体重', example: 'Healthy snacking can help you maintain weight.', emoji: '⚖️' },
                { word: 'blood sugar level', level: 'basic', phonetic: '/blʌd ˈʃʊɡər ˈlevl/', definition: '血糖水平', example: 'It is important to keep your blood sugar level stable.', emoji: '🩸' },
                { word: 'boost brainpower', level: 'basic', phonetic: '/buːst ˈbreɪnˌpaʊər/', definition: '提高智力', example: 'Some nuts are believed to help boost brainpower.', emoji: '🧠' },
                { word: 'boost energy', level: 'basic', phonetic: '/buːst ˈenərdʒi/', definition: '提升能量', example: 'A quick snack can help boost energy in the afternoon.', emoji: '⚡' },
                { word: 'prevent overeating', level: 'basic', phonetic: '/prɪˈvent ˌoʊvərˈiːtɪŋ/', definition: '防止暴饮暴食', example: 'Having small snacks can prevent overeating during dinner.', emoji: '🚫' },
                // 进阶词 (Advanced)
                { word: 'metabolism', level: 'advanced', phonetic: '/məˈtæbəlɪzəm/', definition: '新陈代谢', example: 'Regular exercise can help speed up your metabolism.', emoji: '🔥' },
                { word: 'hunger pang', level: 'advanced', phonetic: '/ˈhʌŋɡər pæŋ/', definition: '阵发饥饿感', example: 'I had a hunger pang right before the meeting started.', emoji: '😫' },
                { word: 'lower cholesterol', level: 'advanced', phonetic: '/ˈloʊər kəˈlestərɔːl/', definition: '降低胆固醇', example: 'A diet rich in fiber can help lower cholesterol.', emoji: '❤️' },
            ]
        }
    ]
};
