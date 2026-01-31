import { VocabData } from '../context/VocabDataContext';
import { interviewTopic } from '../data-interview';

export const interviewIeltsTopics: VocabData['ieltsTopics'] = [interviewTopic];

export const interviewAllSubTopics: VocabData['allSubTopics'] = interviewIeltsTopics.flatMap(
    (topic) => topic.subTopics,
);

export const interviewVocabData: VocabData = {
    id: 'interview',
    title: '面试口语词汇',
    ieltsTopics: interviewIeltsTopics,
    allSubTopics: interviewAllSubTopics,
};

