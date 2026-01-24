import { SubTopic } from './data-types';
import { getManyFromPool } from './pool/utils';

export const snacks: SubTopic = {
    id: 'snacks',
    title: 'Snacks 零食',
    type: '事物题',
    color: 'green',
    wordSections: [
        {
            title: '1. 零食种类 (Types of Snacks)',
            words: [
                ...getManyFromPool([
                    'biscuit', 'bread', 'cake', 'chip', 'cookie', 'gum', 'doughnut', 
                    'popcorn', 'pudding', 'ice cream', 'nut', 'peanut', 'yogurt', 
                    'energy bar', 'corn chips'
                ], 'basic'),
                ...getManyFromPool([
                    'cracker', 'lollipop', 'marshmallow', 'popsicle', 'seaweed', 
                    'beef jerky', 'pork jerky', 'jelly bean', 'walnut', 'almond', 
                    'cashew', 'hazelnut', 'macadamia', 'pistachio', 'trail mixes'
                ], 'advanced')
            ]
        },
        {
            title: '2. 描述与味道 (Flavor & Ingredients)',
            words: [
                ...getManyFromPool([
                    'sugar-free', 'artificial colour', 'artificial flavour', 'dried fruit'
                ], 'basic'),
                ...getManyFromPool([
                    'mint', 'oatmeal', 'refined sugar', 'snacker', 'plum'
                ], 'advanced')
            ]
        },
        {
            title: '3. 健康与习惯 (Health & Habits)',
            words: [
                ...getManyFromPool([
                    'maintain weight', 'blood sugar level', 'boost brainpower', 
                    'boost energy', 'prevent overeating'
                ], 'basic'),
                ...getManyFromPool([
                    'metabolism', 'hunger pang', 'lower cholesterol'
                ], 'advanced')
            ]
        }
    ]
};