import React from 'react';
import { useSearchParams } from 'react-router-dom';
import VocabApp from '../vocab-app/App';
import { VocabDataProvider } from '../vocab-app/context/VocabDataContext';
import { interviewVocabData } from '../vocab-app/data-sources/interview';

const InterviewVocabPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const topicId = searchParams.get('topicId');

    return (
        <VocabDataProvider data={interviewVocabData}>
            <VocabApp initialTopicId={topicId} />
        </VocabDataProvider>
    );
};

export default InterviewVocabPage;

