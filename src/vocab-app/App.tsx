import React, { useEffect, useState } from 'react';
import { styled, ThemeProvider } from 'styled-components';
import { Page } from './types';
import Toast from './components/Toast';
import VocabularyFab from './components/VocabularyFab';
import SelectionAddButton from './components/SelectionAddButton';
import PageRouter from './components/PageRouter';
import { Word } from './data-types';

import { theme, GlobalStyles } from './theme';
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

const App: React.FC<{
    initialTopicId?: string | null;
    onExitToQuestionBank?: () => void;
}> = ({ initialTopicId, onExitToQuestionBank }) => {
    const [page, setPage] = useState<Page>('home');
    const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
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

    // 核心修复：监听入口参数变化
    useEffect(() => {
        if (initialTopicId) {
            // 如果指定了话题 ID，进入选词页
            setActiveTopicId(initialTopicId);
            setPage('word-selection');
        } else {
            // 如果没有 ID（点击外部单词汇总进入），强制回到主页并清理状态
            setPage('home');
            setActiveTopicId(null);
            setActivityWords(null);
        }
    }, [initialTopicId]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppWrapper>
                <PageRouter 
                    page={page}
                    navigateTo={navigateTo}
                    navigateToWordSelection={navigateToWordSelection}
                    onStartActivity={handleStartActivity}
                    activeTopicId={activeTopicId}
                    activityWords={activityWords}
                    onExitToQuestionBank={onExitToQuestionBank}
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
        </ThemeProvider>
    );
};

export default App;
