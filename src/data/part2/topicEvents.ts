import { TopicData } from '../../types';
import { p2_c_apology } from './events/p2-c-apology';
import { p2_c_broke_something } from './events/p2-c-broke-something';
import { p2_c_daily_routine } from './events/p2-c-daily-routine';
import { p2_c_decision_help } from './events/p2-c-decision-help';
import { p2_c_dinner } from './events/p2-c-dinner';
import { p2_c_exciting_activity } from './events/p2-c-exciting-activity';
import { p2_c_foreign_language } from './events/p2-c-foreign-language';
import { p2_c_good_habit } from './events/p2-c-good-habit';
import { p2_c_good_service } from './events/p2-c-good-service';
import { p2_c_long_journey } from './events/p2-c-long-journey';
import { p2_c_lost_way } from './events/p2-c-lost-way';
import { p2_c_power_off } from './events/p2-c-power-off';
import { p2_c_social_media } from './events/p2-c-social-media';
import { p2_c_unusual_meal } from './events/p2-c-unusual-meal';
import { p2_c_wait_special } from './events/p2-c-wait-special';

export const topicEventsData: TopicData = {
    id: 'box-topic-events',
    title: '话题: 事件题',
    cards: [
        p2_c_exciting_activity,
        p2_c_daily_routine,
        p2_c_unusual_meal,
        p2_c_decision_help,
        p2_c_wait_special,
        p2_c_good_service,
        p2_c_foreign_language,
        p2_c_social_media,
        p2_c_broke_something,
        p2_c_apology,
        p2_c_good_habit,
        p2_c_power_off,
        p2_c_lost_way,
        p2_c_dinner,
        p2_c_long_journey,
    ]
};
