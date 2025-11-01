import { IeltsTopic } from './data-types';
import { dailyRoutineChange } from './data-activities/daily-routine-change';
import { study } from './data-activities/study';
import { excitingActivity } from './data-activities/exciting-activity';
import { doingWell } from './data-activities/doing-well';
import { sharing } from './data-activities/sharing';
import { borrowing } from './data-activities/borrowing';
import { chatting } from './data-activities/chatting';
import { breakTopic } from './data-activities/break';
import { gardening } from './data-activities/gardening';

export const activitiesTopic: IeltsTopic = {
    title: '话题: 活动与爱好',
    subTopics: [
      dailyRoutineChange,
      study,
      excitingActivity,
      doingWell,
      sharing,
      borrowing,
      chatting,
      breakTopic,
      gardening,
    ],
};
