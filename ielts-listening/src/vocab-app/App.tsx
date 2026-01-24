
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Page } from './types';
import Toast from './components/Toast';
import VocabularyFab from './components/VocabularyFab';
import SelectionAddButton from './components/SelectionAddButton';
import PageRouter from './components/PageRouter';
import { Word } from './data';

import { useVocabulary } from './hooks/useVocabulary';

const AppWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    background-color: transparent;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1rem;
    }
`;

// FIX: Added interface for App props to receive configuration from host pages.
interface VocabAppProps {
    initialTopicId?: string | null;
    onExitToQuestionBank?: () => void;
}

const App: React.FC<VocabAppProps> = ({ initialTopicId, onExitToQuestionBank }) => {
    // FIX: Use initialTopicId if provided to set default page.
    const [page, setPage] = useState<Page>(initialTopicId ? 'word-selection' : 'home');
    const [activeTopicId, setActiveTopicId] = useState<string | null>(initialTopicId || null);
    const [activityWords, setActivityWords] = useState<Word[] | null>(null);

    const {
        vocabulary,
        toastMessage,
        selectedWord,
        selectionPosition,
        handleAddWord,
        handleDeleteWord,
        handleClearVocabulary,
        cleanWord,
    } = useVocabulary();
    
    const navigateTo = (targetPage: Page) => {
        window.scrollTo(0, 0);
        // FIX: If exiting from home, call the exit callback if provided.
        if (targetPage === 'home' && onExitToQuestionBank) {
            onExitToQuestionBank();
            return;
        }
        setPage(targetPage);
         if (targetPage === 'home') {
            setActiveTopicId(null);
            setActivityWords(null);
        }
    };

    const navigateToWordSelection = (topicId: string) => {
        window.scrollTo(0, 0);
        setActiveTopicId(topicId);
        setPage('word-selection');
    };
    
    const handleStartActivity = (activityPage: 'learn' | 'practice', words: Word[]) => {
        window.scrollTo(0, 0);
        setActivityWords(words);
        setPage(activityPage);
    };

    return (
        <>
            <AppWrapper>
                <PageRouter 
                    page={page}
                    navigateTo={navigateTo}
                    navigateToWordSelection={navigateToWordSelection}
                    onStartActivity={handleStartActivity}
                    activeTopicId={activeTopicId}
                    activityWords={activityWords}
                    vocabulary={vocabulary}
                    handleAddWord={handleAddWord}
                    handleDeleteWord={handleDeleteWord}
                    handleClearVocabulary={handleClearVocabulary}
                    cleanWord={cleanWord}
                />
            </AppWrapper>

            {selectedWord && selectionPosition && (
                <SelectionAddButton
                    position={selectionPosition}
                    onAdd={() => handleAddWord(selectedWord)}
                />
            )}
            <VocabularyFab count={vocabulary.length} navigateTo={navigateTo} />
            <Toast message={toastMessage} />
        </>
    );
};

export default App;
