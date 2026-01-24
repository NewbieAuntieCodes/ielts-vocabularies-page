import React from 'react';
import { styled, ThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import VocabApp from './vocab-app/App';
import { VocabularyProvider } from './context/VocabularyContext';
import { theme, GlobalStyles } from './theme';

const AppWrapper = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.bg};
`;

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <VocabularyProvider>
                <AppWrapper>
                    <Routes>
                        {/* 将根路径直接指向词汇应用 */}
                        <Route path="/" element={<VocabApp />} />
                        {/* 兼容旧路径或重定向 */}
                        <Route path="/vocab" element={<Navigate to="/" replace />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </AppWrapper>
            </VocabularyProvider>
        </ThemeProvider>
    );
};

export default App;