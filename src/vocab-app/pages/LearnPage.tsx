import React, { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import { Page } from '../types';
import { SubTopic, Word } from '../data-types';
import { speak } from '../utils/speech';
import { useVocabData } from '../context/VocabDataContext';

const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;
const PrevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
const NextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;
const SpeakerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>;

// --- Learning Step Component ---
const LearnStep: React.FC<{ 
    topic: SubTopic, 
    onComplete: () => void,
    currentIndex: number,
    // FIX: The type of `setCurrentIndex` should be `React.Dispatch<React.SetStateAction<number>>`
    // to allow passing updater functions.
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}> = ({ topic, onComplete, currentIndex, setCurrentIndex }) => {

    // Handle case where words array is empty
    if (topic.words.length === 0) {
        return (
            <StepContainer>
                <p>没有选择单词！</p>
                <CompleteButton onClick={onComplete}>返回</CompleteButton>
            </StepContainer>
        )
    }
    
    const currentWord = topic.words[currentIndex];

    useEffect(() => {
        // A small delay for UI transition and voice readiness
        const timeoutId = setTimeout(() => speak(currentWord.word), 100);
        
        return () => {
            clearTimeout(timeoutId);
            // Stop any speech when the component unmounts or the word changes
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, [currentWord]);


    const handleNext = () => setCurrentIndex(i => Math.min(i + 1, topic.words.length - 1));
    const handlePrev = () => setCurrentIndex(i => Math.max(i - 1, 0));
    
    return (
        <StepContainer>
            <Flashcard>
                <EmojiDisplay>
                    {currentWord.emoji.startsWith('http') ? <img src={currentWord.emoji} alt="" /> : currentWord.emoji}
                </EmojiDisplay>
                <WordDetails>
                    <WordRow>
                        <WordText>{currentWord.word}</WordText>
                        <SpeakButton onClick={() => speak(currentWord.word)} aria-label={`Listen to ${currentWord.word}`}>
                            <SpeakerIcon />
                        </SpeakButton>
                    </WordRow>
                    <PhoneticText>{currentWord.phonetic}</PhoneticText>
                    <DefinitionText>{currentWord.definition}</DefinitionText>
                    <ExampleText>"{currentWord.example}"</ExampleText>
                </WordDetails>
            </Flashcard>
            <FlashcardNav>
                <NavButton onClick={handlePrev} disabled={currentIndex === 0}><PrevIcon/></NavButton>
                <ProgressText>{currentIndex + 1} / {topic.words.length}</ProgressText>
                <NavButton onClick={handleNext} disabled={currentIndex === topic.words.length - 1}><NextIcon/></NavButton>
            </FlashcardNav>
             <CompleteButton onClick={onComplete}>
                我学完了
            </CompleteButton>
        </StepContainer>
    );
};

// --- Main Topic Page Component ---
const LearnPage: React.FC<{
    topicId: string;
    words: Word[];
    navigateTo: (page: Page) => void;
    onExitToQuestionBank?: () => void;
}> = ({ topicId, words, navigateTo, onExitToQuestionBank }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { allSubTopics } = useVocabData();
    const originalTopic = allSubTopics.find((list) => list.id === topicId);

    if (!originalTopic) {
        return (
            <PageContainer>
                <p>主题未找到！</p>
                <button onClick={() => navigateTo('home')}>返回主页</button>
            </PageContainer>
        );
    }

    const activityTopic: SubTopic = { ...originalTopic, words };

    const handleComplete = () => {
        if (words && words.length > 0) {
            navigateTo('practice');
        } else {
            navigateTo('home');
        }
    };
    
    return (
        <PageContainer>
            <PageHeader>
                <BackButton
                    onClick={() => (onExitToQuestionBank ? onExitToQuestionBank() : navigateTo('home'))}
                    aria-label="返回题库"
                >
                    <BackArrowIcon />
                </BackButton>
                <h1>{activityTopic.title}</h1>
            </PageHeader>
             <LearnLayout>
                <main>
                    <LearnStep 
                        topic={activityTopic} 
                        onComplete={handleComplete} 
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                </main>
            </LearnLayout>
        </PageContainer>
    );
};

// --- STYLED COMPONENTS ---

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const PageContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    animation: ${fadeIn} 0.5s ease;
`;

const PageHeader = styled.header`
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.header};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        h1 { font-size: 1.75rem; }
    }
`;

const BackButton = styled.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: ${({ theme }) => theme.shadows.subtle};

    &:hover {
        background-color: ${({ theme }) => theme.colors.boxBg};
        color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-50%) scale(1.05);
        box-shadow: ${({ theme }) => theme.shadows.main};
    }
`;

const LearnLayout = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 1rem;

    main {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;


const StepContainer = styled.div`
    animation: ${fadeIn} 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

// Learn Step Styles
const Flashcard = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 24px;
    box-shadow: ${({ theme }) => theme.shadows.main};
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    max-width: 560px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const EmojiDisplay = styled.div`
    font-size: 5rem;
    text-align: center;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.columnBg};
    line-height: 1;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
`;

const WordDetails = styled.div`
    padding: 2rem;
    text-align: center;
    flex-grow: 1;
`;

const WordRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.25rem;
`;

const SpeakButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.label};
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, color 0.2s;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.boxBg};
        color: ${({ theme }) => theme.colors.primary};
    }

    svg {
        width: 28px;
        height: 28px;
    }
`;

const WordText = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
`;

const PhoneticText = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.label};
    margin: 0 0 1.5rem 0;
`;

const DefinitionText = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 1rem 0;
`;

const ExampleText = styled.p`
    font-size: 1.15rem;
    color: ${({ theme }) => theme.colors.text};
    font-style: italic;
    line-height: 1.5;
    margin: 1.25rem 0 0;
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme.colors.highlightBg};
    border: 1px solid ${({ theme }) => theme.colors.highlightBorder};
    border-radius: 14px;
`;

const FlashcardNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
`;

const NavButton = styled.button`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.boxBg};
        transform: scale(1.05);
    }
    &:disabled {
        color: ${({ theme }) => theme.colors.label};
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

const ProgressText = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.label};
    width: 80px;
    text-align: center;
`;

const CompleteButton = styled.button<{ $themeColor?: 'learn' | 'games' | 'practice' }>`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem 2rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background-color: ${({ theme, $themeColor = 'learn' }) => theme.colors[$themeColor]};
    color: white;
    box-shadow: 0 4px 10px ${({ theme, $themeColor = 'learn' }) => `${theme.colors[$themeColor]}4D`};
    margin-top: 2rem;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 15px ${({ theme, $themeColor = 'learn' }) => `${theme.colors[$themeColor]}66`};
    }
`;

export default LearnPage;
