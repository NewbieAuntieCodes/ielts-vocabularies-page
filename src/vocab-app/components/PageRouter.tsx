import React from 'react';
import HomePage from '../pages/HomePage';
import LearnPage from '../pages/LearnPage';
import PracticePage from '../pages/PracticePage';
import MyWordsPage from '../pages/MyWordsPage';
import WordSelectionPage from '../pages/WordSelectionPage';
import { Page } from '../types';
import { Word } from '../data-types';

interface PageRouterProps {
    page: Page;
    navigateTo: (page: Page) => void;
    navigateToWordSelection: (topicId: string) => void;
    onStartActivity: (page: 'learn' | 'practice', words: Word[]) => void;
    activeTopicId: string | null;
    activityWords: Word[] | null;
    onExitToQuestionBank?: () => void;
    vocabulary: string[];
    handleAddWord: (word: string) => void;
    handleDeleteWord: (word: string) => void;
    handleClearVocabulary: () => void;
    cleanWord: (text: string) => string | null;
}

const PageRouter: React.FC<PageRouterProps> = ({ 
    page, 
    navigateTo, 
    navigateToWordSelection,
    onStartActivity,
    activeTopicId,
    activityWords,
    onExitToQuestionBank,
    vocabulary,
    handleDeleteWord,
    handleClearVocabulary
}) => {
    switch (page) {
        case 'word-selection':
            if (!activeTopicId) {
                return <HomePage navigateToWordSelection={navigateToWordSelection} />;
            }
            return <WordSelectionPage
                        topicId={activeTopicId!}
                        navigateTo={navigateTo}
                        onStartActivity={onStartActivity}
                        onExitToQuestionBank={onExitToQuestionBank}
                    />;
        case 'learn':
            if (!activeTopicId) {
                return <HomePage navigateToWordSelection={navigateToWordSelection} />;
            }
            if (!activityWords) {
                return <WordSelectionPage
                            topicId={activeTopicId}
                            navigateTo={navigateTo}
                            onStartActivity={onStartActivity}
                            onExitToQuestionBank={onExitToQuestionBank}
                        />;
            }
            return <LearnPage 
                        topicId={activeTopicId!} 
                        words={activityWords!}
                        navigateTo={navigateTo}
                        onExitToQuestionBank={onExitToQuestionBank}
                    />;
        case 'practice':
            if (!activeTopicId) {
                return <HomePage navigateToWordSelection={navigateToWordSelection} />;
            }
            if (!activityWords) {
                return <WordSelectionPage
                            topicId={activeTopicId}
                            navigateTo={navigateTo}
                            onStartActivity={onStartActivity}
                            onExitToQuestionBank={onExitToQuestionBank}
                        />;
            }
            return <PracticePage
                        topicId={activeTopicId!}
                        words={activityWords!}
                        navigateTo={navigateTo}
                        onExitToQuestionBank={onExitToQuestionBank}
                    />;
        case 'my-words':
            return <MyWordsPage 
                        navigateTo={navigateTo} 
                        words={vocabulary}
                        onDelete={handleDeleteWord}
                        onClear={handleClearVocabulary}
                    />;
        case 'home':
        default:
            return <HomePage navigateToWordSelection={navigateToWordSelection} />;
    }
};

export default PageRouter;
