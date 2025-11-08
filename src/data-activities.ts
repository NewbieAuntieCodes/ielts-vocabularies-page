import { IeltsTopic } from './data-types';
import { dailyRoutineChange } from './data-activities/daily-routine-change';
import { study } from './data-activities/study';
import { excitingActivity } from './data-activities/exciting-activity';
import { doingWell } from './data-activities/doing-well';
import { borrowing } from './data-activities/borrowing';
import { chatting } from './data-activities/chatting';
import { breakTopic } from './data-activities/break';
import { gardening } from './data-activities/gardening';
import { goodService } from './data-activities/good-service';

export const activitiesTopic: IeltsTopic = {
    title: '话题: 活动与爱好',
    subTopics: [
      dailyRoutineChange,
      study,
      excitingActivity,
      doingWell,
      borrowing,
      chatting,
      breakTopic,
      gardening,
      goodService,
    ],
};