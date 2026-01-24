
import { IeltsTopic } from './data-types';
import { dailyRoutineChange } from './data-activities/daily-routine-change';
import { excitingActivity } from './data-activities/exciting-activity';
import { doingWell } from './data-activities/doing-well';
import { borrowing } from './data-activities/borrowing';
import { gardening } from './data-activities/gardening';
import { goodService } from './data-activities/good-service';
import { unusualMeal } from './data-activities/unusual-meal';

export const activitiesTopic: IeltsTopic = {
    title: '话题: 活动与爱好',
    section: 'Part 1',
    subTopics: [
      dailyRoutineChange,
      excitingActivity,
      doingWell,
      borrowing,
      gardening,
      goodService,
      unusualMeal,
    ],
};
