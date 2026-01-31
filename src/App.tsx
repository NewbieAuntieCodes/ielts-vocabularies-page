
import React from 'react';
import { styled, ThemeProvider } from 'styled-components';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SpeakingHomePage from './pages/SpeakingHomePage';
import QuestionBankPage from './pages/QuestionBankPage';
import TipsPage from './pages/TipsPage';
import AnalysisPage from './pages/AnalysisPage';
import ScoringPage from './pages/ScoringPage';
import VocabAppHostPage from './pages/VocabAppHostPage';
import InterviewVocabPage from './pages/InterviewVocabPage';
import Part2BuilderPage from './pages/Part2BuilderPage';
import ComingSoonPage from './pages/ComingSoonPage';
import ListeningVocabPage from './pages/ListeningVocabPage';

import { VocabularyProvider, useVocabulary } from './context/VocabularyContext';
import { BandProvider } from './context/BandContext';
import Toast from './components/Toast';
import VocabularyFab from './components/VocabularyFab';
import VocabularyModal from './components/VocabularyModal';
import SelectionAddButton from './components/SelectionAddButton';
import BandBar from './components/BandBar';

import { theme, GlobalStyles } from './theme';

const AppWrapper = styled.div`
    padding: 2rem;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1rem;
    }
`;

const VocabularyFeature: React.FC = () => {
    const {
        vocabulary,
        isVocabModalOpen,
        toastMessage,
        selectedWord,
        selectionPosition,
        setIsVocabModalOpen,
        handleAddWord,
        handleDeleteWord,
        handleClearVocabulary,
    } = useVocabulary();

    return (
        <>
            {selectedWord && selectionPosition && (
                <SelectionAddButton
                    position={selectionPosition}
                    onAdd={() => handleAddWord(selectedWord)}
                />
            )}
            <VocabularyFab count={vocabulary.length} onClick={() => setIsVocabModalOpen(true)} />
            {isVocabModalOpen && (
                <VocabularyModal
                    words={vocabulary}
                    onClose={() => setIsVocabModalOpen(false)}
                    onDelete={handleDeleteWord}
                    onClear={handleClearVocabulary}
                />
            )}
            <Toast message={toastMessage} />
        </>
    );
};

const MainShell: React.FC = () => (
    <>
        <AppWrapper>
            <BandBar />
            <Outlet />
        </AppWrapper>
        <VocabularyFeature />
    </>
);

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BandProvider>
                <VocabularyProvider>
                    <Routes>
                        {/* Hub */}
                        <Route path="/" element={<AppWrapper><HomePage /></AppWrapper>} />

                        {/* Listening / Reading / Writing */}
                        <Route path="/listening" element={<ListeningVocabPage />} />
                        <Route path="/reading" element={<AppWrapper><ComingSoonPage title="阅读 Reading" /></AppWrapper>} />
                        <Route path="/writing" element={<AppWrapper><ComingSoonPage title="写作 Writing" /></AppWrapper>} />

                        {/* Speaking vocab app */}
                        <Route path="/speaking/vocab" element={<VocabAppHostPage />} />
                        <Route path="/speaking/vocab/interview" element={<InterviewVocabPage />} />
                        <Route path="/vocab" element={<Navigate to="/speaking/vocab" replace />} />
                        <Route element={<MainShell />}>
                            {/* Speaking */}
                            <Route path="/speaking" element={<SpeakingHomePage />} />
                            <Route path="/speaking/bank" element={<QuestionBankPage />} />
                            <Route path="/speaking/tips" element={<TipsPage />} />
                            <Route path="/speaking/scoring" element={<ScoringPage />} />
                            <Route path="/speaking/builder/part2" element={<Part2BuilderPage />} />
                            <Route path="/speaking/analysis/:seasonId/:cardId" element={<AnalysisPage />} />
                            <Route path="/speaking/analysis/:cardId" element={<AnalysisPage />} />

                            {/* Backward-compatible routes (will be removed after refactor) */}
                            <Route path="/bank" element={<QuestionBankPage />} />
                            <Route path="/tips" element={<TipsPage />} />
                            <Route path="/scoring" element={<ScoringPage />} />
                            <Route path="/builder/part2" element={<Part2BuilderPage />} />
                            <Route path="/analysis/:seasonId/:cardId" element={<AnalysisPage />} />
                            <Route path="/analysis/:cardId" element={<AnalysisPage />} />
                        </Route>
                    </Routes>
                </VocabularyProvider>
            </BandProvider>
        </ThemeProvider>
    );
};

export default App;
