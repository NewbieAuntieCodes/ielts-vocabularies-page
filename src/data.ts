import { IeltsTopic, SubTopic } from './data-types';
import { peopleTopic } from './data-people';
import { placesTopic } from './data-places';
import { activitiesTopic } from './data-activities';
import { thingsTopic } from './data-things';

// Re-export types so they can be imported from this file, maintaining the original API
export * from './data-types';

export const ieltsTopics: IeltsTopic[] = [
    peopleTopic,
    placesTopic,
    activitiesTopic,
    thingsTopic,
];

export const allSubTopics: (SubTopic & { description?: string; illustration?: any; theme?: string })[] = ieltsTopics.flatMap(topic => topic.subTopics);
