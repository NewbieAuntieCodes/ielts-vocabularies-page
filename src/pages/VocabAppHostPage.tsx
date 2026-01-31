import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import VocabApp from '../vocab-app/App';
import { VocabDataProvider } from '../vocab-app/context/VocabDataContext';
import { speakingVocabData } from '../vocab-app/data-sources/speaking';

const VocabAppHostPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const topicId = searchParams.get('topicId');
  const from = searchParams.get('from');

  const handleExitToQuestionBank = () => {
    const next = new URLSearchParams(location.search);
    next.delete('from');
    next.delete('topicId');
    const search = next.toString();
    navigate({ pathname: '/speaking/bank', search: search ? `?${search}` : '' }, { replace: true });
  };

  const shouldReturnToQuestionBank = from === 'bank';

  return (
    <VocabDataProvider data={speakingVocabData}>
      <VocabApp
        initialTopicId={topicId}
        onExitToQuestionBank={shouldReturnToQuestionBank ? handleExitToQuestionBank : undefined}
      />
    </VocabDataProvider>
  );
};

export default VocabAppHostPage;
