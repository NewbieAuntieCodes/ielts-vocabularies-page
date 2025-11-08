import { IeltsTopic, SubTopic } from './data-types';

const advertisement: SubTopic = {
    id: 'advertisement',
    title: 'Advertisement',
    type: '事物题',
    color: 'purple',
    words: [
      { word: 'commercial', phonetic: '/kəˈmɜːrʃl/', definition: '商业广告', example: 'I saw a commercial for a new car on TV.', emoji: 'https://em-content.zobj.net/source/apple/391/television_1f4fa.png' },
      { word: 'persuasive', phonetic: '/pərˈsweɪsɪv/', definition: '有说服力的', example: 'Advertisements use persuasive language to attract customers.', emoji: 'https://em-content.zobj.net/source/apple/391/light-bulb_1f4a1.png' },
      { word: 'brand', phonetic: '/brænd/', definition: '品牌', example: 'Nike is a well-known brand.', emoji: 'https://em-content.zobj.net/source/apple/391/trade-mark_2122-fe0f.png' },
      { word: 'target audience', phonetic: '/ˈtɑːrɡɪt ˈɔːdiəns/', definition: '目标受众', example: 'The ad was designed for a young target audience.', emoji: 'https://em-content.zobj.net/source/apple/391/direct-hit_1f3af.png' },
      { word: 'billboard', phonetic: '/ˈbɪlbɔːrd/', definition: '广告牌', example: 'There was a huge billboard advertising the new movie on the highway.', emoji: 'https://em-content.zobj.net/source/apple/391/cityscape_1f3d9-fe0f.png' },
      { word: 'poster', phonetic: '/ˈpoʊstər/', definition: '海报', example: 'She put up a poster of her favorite band on her bedroom wall.', emoji: 'https://em-content.zobj.net/source/apple/391/framed-picture_1f5bc-fe0f.png' },
      { word: 'slogan', phonetic: '/ˈsloʊɡən/', definition: '口号；标语', example: 'Nike\'s slogan "Just Do It" is known worldwide.', emoji: 'https://em-content.zobj.net/source/apple/391/megaphone_1f4e3.png' },
      { word: 'eye-catching', phonetic: '/ˈaɪˌkætʃɪŋ/', definition: '引人注目的', example: 'The advertisement had an eye-catching design with bright colors.', emoji: 'https://em-content.zobj.net/source/apple/391/eyes_1f440.png' },
      { word: 'misleading', phonetic: '/mɪsˈliːdɪŋ/', definition: '误导性的', example: 'Some critics argue that the advertisement is misleading to consumers.', emoji: 'https://em-content.zobj.net/source/apple/391/lying-face_1f925.png' },
      { word: 'annoying', phonetic: '/əˈnɔɪɪŋ/', definition: '烦人的', example: 'Pop-up ads on websites can be very annoying.', emoji: 'https://em-content.zobj.net/source/apple/391/angry-face_1f620.png' },
      { word: 'draw attention', phonetic: '/drɔː əˈtenʃn/', definition: '吸引注意力', example: 'A good advertisement should draw people’s attention immediately.', emoji: 'https://em-content.zobj.net/source/apple/391/sparkles_2728.png' },
      { word: 'brand awareness', phonetic: '/brænd əˈwernəs/', definition: '品牌知名度', example: 'The campaign was successful in raising brand awareness.', emoji: 'https://em-content.zobj.net/source/apple/391/chart-increasing_1f4c8.png' },
      { word: 'promote products', phonetic: '/prəˈmoʊt ˈprɒdʌkts/', definition: '推广产品', example: 'Companies use social media to promote their new products.', emoji: 'https://em-content.zobj.net/source/apple/391/loudspeaker_1f4e2.png' },
    ],
};

const rules: SubTopic = {
    id: 'rules',
    title: 'Rules',
    type: '事物题',
    color: 'purple',
    words: [
      { word: 'regulation', phonetic: '/ˌreɡjuˈleɪʃn/', definition: '规章', example: 'There are strict safety regulations in this factory.', emoji: 'https://em-content.zobj.net/source/apple/391/scroll_1f4dc.png' },
      { word: 'policy', phonetic: '/ˈpɑːləsi/', definition: '政策', example: 'The company has a no-smoking policy.', emoji: 'https://em-content.zobj.net/source/apple/391/page-facing-up_1f4c4.png' },
      { word: 'comply with', phonetic: '/kəmˈplaɪ wɪθ/', definition: '遵守', example: 'You must comply with the rules.', emoji: 'https://em-content.zobj.net/source/apple/391/check-mark-button_2705.png' },
      { word: 'enforce', phonetic: '/ɪnˈfɔːrs/', definition: '执行', example: 'The police are there to enforce the law.', emoji: 'https://em-content.zobj.net/source/apple/391/police-officer_1f46e.png' },
      { word: 'benefit', phonetic: '/ˈbenɪfɪt/', definition: '益处；好处', example: 'Following the rules has many benefits for society.', emoji: 'https://em-content.zobj.net/source/apple/391/thumbs-up_1f44d.png' },
      { word: 'dedicated', phonetic: '/ˈdedɪkeɪtɪd/', definition: '专注的；献身的', example: 'He is dedicated to upholding the rules.', emoji: 'https://em-content.zobj.net/source/apple/391/direct-hit_1f3af.png' },
      { word: 'follow the rules', phonetic: '/ˈfɒloʊ ðə ruːlz/', definition: '遵守规则', example: 'It\'s important to follow the rules in a game.', emoji: 'https://em-content.zobj.net/source/apple/391/check-mark-button_2705.png' },
      { word: 'break the rules', phonetic: '/breɪk ðə ruːlz/', definition: '违反规则', example: 'You will be punished if you break the rules.', emoji: 'https://em-content.zobj.net/source/apple/391/prohibited_1f6ab.png' },
      { word: 'respect', phonetic: '/rɪˈspekt/', definition: '尊重', example: 'We should respect the school rules.', emoji: 'https://em-content.zobj.net/source/apple/391/folded-hands_1f64f.png' },
      { word: 'traffic rules', phonetic: '/ˈtræfɪk ruːlz/', definition: '交通规则', example: 'Following traffic rules can prevent accidents.', emoji: 'https://em-content.zobj.net/source/apple/391/vertical-traffic-light_1f6a6.png' },
      { word: 'public rules', phonetic: '/ˈpʌblɪk ruːlz/', definition: '公共规则', example: 'In public places, we should follow public rules like keeping quiet.', emoji: 'https://em-content.zobj.net/source/apple/391/shushing-face_1f92b.png' },
      { word: 'no littering', phonetic: '/noʊ ˈlɪtərɪŋ/', definition: '禁止乱扔垃圾', example: 'The sign says "no littering" in the park.', emoji: 'https://em-content.zobj.net/source/apple/391/litter-in-bin-sign_1f6ae.png' },
      { word: 'reasonable', phonetic: '/ˈriːznəbl/', definition: '合理的', example: 'The school rules are quite reasonable.', emoji: 'https://em-content.zobj.net/source/apple/391/thinking-face_1f914.png' },
      { word: 'annoying', phonetic: '/əˈnɔɪɪŋ/', definition: '烦人的', example: 'Some rules can be really annoying and unnecessary.', emoji: 'https://em-content.zobj.net/source/apple/391/angry-face_1f620.png' },
      { word: 'strict', phonetic: '/strɪkt/', definition: '严格的', example: 'Our school has very strict rules about punctuality.', emoji: 'https://em-content.zobj.net/source/apple/391/man-judge_1f468-200d-2696-fe0f.png' },
      { word: 'school discipline', phonetic: '/skuːl ˈdɪsəplɪn/', definition: '校纪', example: 'Good school discipline is important for a positive learning environment.', emoji: 'https://em-content.zobj.net/source/apple/391/school_1f3eb.png' },
      { word: 'behave well', phonetic: '/bɪˈheɪv wel/', definition: '表现良好', example: 'Students are expected to behave well in the classroom.', emoji: 'https://em-content.zobj.net/source/apple/391/smiling-face-with-halo_1f607.png' },
      { word: 'misbehave', phonetic: '/ˌmɪsbɪˈheɪv/', definition: '行为不端', example: 'If you misbehave, you might get detention.', emoji: 'https://em-content.zobj.net/source/apple/391/smiling-face-with-horns_1f608.png' },
      { word: 'wear school uniform', phonetic: '/wer skuːl ˈjuːnɪfɔːrm/', definition: '穿校服', example: 'All students are required to wear a school uniform.', emoji: 'https://em-content.zobj.net/source/apple/391/t-shirt_1f455.png' },
      { word: 'no phones in class', phonetic: '/noʊ foʊnz ɪn klæs/', definition: '课上不准用手机', example: 'A common rule is "no phones in class" to help students focus.', emoji: 'https://em-content.zobj.net/source/apple/391/no-mobile-phones_1f4f5.png' },
      { word: 'detention', phonetic: '/dɪˈtenʃn/', definition: '留校察看', example: 'He got detention for being late to class.', emoji: 'https://em-content.zobj.net/source/apple/391/hourglass-not-done_23f3.png' },
      { word: 'warning', phonetic: '/ˈwɔːrnɪŋ/', definition: '警告', example: 'The teacher gave him a final warning before taking action.', emoji: 'https://em-content.zobj.net/source/apple/391/warning_26a0-fe0f.png' },
      { word: 'punishment', phonetic: '/ˈpʌnɪʃmənt/', definition: '惩罚', example: 'The punishment for cheating on the exam is severe.', emoji: 'https://em-content.zobj.net/source/apple/391/prohibited_1f6ab.png' },
      { word: 'get into trouble', phonetic: '/ɡet ˈɪntu ˈtrʌbl/', definition: '惹上麻烦', example: 'If you don\'t follow the rules, you will get into trouble.', emoji: 'https://em-content.zobj.net/source/apple/391/worried-face_1f61f.png' },
      { word: 'fair', phonetic: '/fer/', definition: '公平的', example: 'The rules should be fair to all students.', emoji: 'https://em-content.zobj.net/source/apple/391/balance-scale_2696-fe0f.png' },
      { word: 'unfair', phonetic: '/ʌnˈfer/', definition: '不公平的', example: 'He felt the punishment was unfair.', emoji: 'https://em-content.zobj.net/source/apple/391/pouting-face_1f621.png' },
    ],
};

const shoes: SubTopic = {
    id: 'shoes',
    title: 'Shoes',
    type: '事物题',
    color: 'purple',
    words: [
      { word: 'footwear', phonetic: '/ˈfʊtwɛər/', definition: '鞋类', example: 'The store sells a wide range of footwear.', emoji: 'https://em-content.zobj.net/source/apple/391/running-shoe_1f45f.png' },
      { word: 'comfortable', phonetic: '/ˈkʌmfərtəbl/', definition: '舒适的', example: 'These shoes are very comfortable to walk in.', emoji: 'https://em-content.zobj.net/source/apple/391/relieved-face_1f60c.png' },
      { word: 'durable', phonetic: '/ˈdʊrəbl/', definition: '耐用的', example: 'I need a pair of durable boots for hiking.', emoji: 'https://em-content.zobj.net/source/apple/391/flexed-biceps_1f4aa.png' },
      { word: 'fashionable', phonetic: '/ˈfæʃənəbl/', definition: '时尚的', example: 'She always wears fashionable shoes.', emoji: 'https://em-content.zobj.net/source/apple/391/high-heeled-shoe_1f462.png' },
    ],
};

const plants: SubTopic = {
    id: 'plants',
    title: 'Plants',
    type: '事物题',
    color: 'purple',
    words: [
      { word: 'blossom', phonetic: '/ˈblɑːsəm/', definition: '花', example: 'The cherry trees are in full blossom.', emoji: 'https://em-content.zobj.net/source/apple/391/cherry-blossom_1f338.png' },
      { word: 'botany', phonetic: '/ˈbɑːtəni/', definition: '植物学', example: 'Botany is the scientific study of plants.', emoji: 'https://em-content.zobj.net/source/apple/391/microscope_1f52c.png' },
      { word: 'seed', phonetic: '/siːd/', definition: '种子', example: 'Plant a seed and watch it grow.', emoji: 'https://em-content.zobj.net/source/apple/391/seedling_1f331.png' },
      { word: 'root', phonetic: '/ruːt/', definition: '根', example: 'The roots of the tree go deep into the ground.', emoji: 'https://em-content.zobj.net/source/apple/391/potted-plant_1fab4.png' },
      { word: 'stem', phonetic: '/stem/', definition: '茎', example: 'The stem supports the leaves and flowers.', emoji: 'https://em-content.zobj.net/source/apple/391/herb_1f33f.png' },
      { word: 'petal', phonetic: '/ˈpetl/', definition: '花瓣', example: 'The rose has beautiful red petals.', emoji: 'https://em-content.zobj.net/source/apple/391/rose_1f940.png' },
      { word: 'fragrance', phonetic: '/ˈfreɪɡrəns/', definition: '香味', example: 'I love the fragrance of fresh flowers.', emoji: 'https://em-content.zobj.net/source/apple/391/nose_1f443.png' },
      { word: 'bloom', phonetic: '/bluːm/', definition: '开花', example: 'The flowers will bloom in the spring.', emoji: 'https://em-content.zobj.net/source/apple/391/blossom_1f33c.png' },
    ],
};

export const thingsTopic: IeltsTopic = {
    title: '话题: 事物',
    subTopics: [
      advertisement,
      rules,
      shoes,
      plants,
    ],
};