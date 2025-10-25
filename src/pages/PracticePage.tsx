import React, { useState, useEffect, useCallback } from 'react';
import { styled, keyframes, css } from 'styled-components';
import { Page } from '../types';
import { allSubTopics, SubTopic, Word } from '../data';

type GameMode = 'image' | 'listening';

const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;
const SpeakerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>;
const ImageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
const SoundIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>;


const shuffleArray = <T,>(array: T[]): T[] => array.sort(() => Math.random() - 0.5);

interface Question {
    word: Word;
    options: string[];
}

const createGameQuestions = (topic: SubTopic): Question[] => {
    const shuffledWords = shuffleArray([...topic.words]);
    return shuffledWords.map(correctWord => {
        const otherWords = topic.words.filter(w => w.word !== correctWord.word);
        const numOptions = Math.min(3, otherWords.length); // Ensure we don't need more options than available words
        const incorrectOptions = shuffleArray(otherWords).slice(0, numOptions).map(w => w.word);
        const options = shuffleArray([correctWord.word, ...incorrectOptions]);
        return {
            word: correctWord,
            options,
        };
    });
};

const speak = (text: string) => {
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported.');
        return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
};


interface GameProps {
    topic: SubTopic;
    gameMode: GameMode;
    onGameChange: (mode: GameMode) => void;
}

const Game: React.FC<GameProps> = ({ topic, gameMode, onGameChange }) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const resetGame = useCallback(() => {
        if (topic.words.length > 0) {
            setQuestions(createGameQuestions(topic));
        } else {
            setQuestions([]);
        }
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsCorrect(null);
        setScore(0);
        setIsFinished(false);
    }, [topic]);

    useEffect(() => {
        resetGame();
    }, [resetGame]);

    useEffect(() => {
        if (gameMode === 'listening' && questions.length > 0 && !isFinished) {
            speak(questions[currentIndex].word.word);
        }
    }, [currentIndex, questions, gameMode, isFinished]);
    
    const handleOptionClick = (option: string) => {
        if (selectedOption) return;

        const correct = option === questions[currentIndex].word.word;
        setSelectedOption(option);
        setIsCorrect(correct);
        if (correct) {
            setScore(s => s + 1);
        }

        setTimeout(() => {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(i => i + 1);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                setIsFinished(true);
            }
        }, 500);
    };

    if (topic.words.length === 0) {
        return <GameCard><p>请至少选择一个单词开始练习！</p></GameCard>
    }

    if (questions.length === 0) {
        return <GameCard><p>正在加载游戏...</p></GameCard>;
    }

    if (isFinished) {
        return (
            <ResultsContainer>
                <h2>练习完成!</h2>
                <p>你的得分是:</p>
                <ScoreText>{score} / {questions.length}</ScoreText>
                <ResultsActions>
                    <GameButton onClick={resetGame}>再玩一次</GameButton>
                    <GameButton onClick={() => onGameChange(gameMode === 'image' ? 'listening' : 'image')} $secondary>
                        {gameMode === 'image' ? '挑战听力' : '挑战识图'}
                    </GameButton>
                </ResultsActions>
            </ResultsContainer>
        );
    }
    
    const currentQuestion = questions[currentIndex];

    const getButtonState = (option: string) => {
        if (!selectedOption) return 'default';
        if (option === currentQuestion.word.word) return 'correct';
        if (option === selectedOption) return 'incorrect';
        return 'disabled';
    };

    return (
        <GameCard>
             <ProgressBarContainer>
                <ProgressBar style={{ width: `${((currentIndex) / questions.length) * 100}%` }} />
            </ProgressBarContainer>

            {gameMode === 'image' ? (
                 <QuestionPrompt>{currentQuestion.word.definition}</QuestionPrompt>
            ) : (
                <ListenPromptContainer>
                    <ListenButton onClick={() => speak(currentQuestion.word.word)} aria-label="Play sound">
                        <SpeakerIcon />
                    </ListenButton>
                </ListenPromptContainer>
            )}

            <OptionsGrid>
                {currentQuestion.options.map(option => (
                    <OptionButton 
                        key={option} 
                        onClick={() => handleOptionClick(option)}
                        disabled={!!selectedOption}
                        $state={getButtonState(option)}
                    >
                        {option}
                    </OptionButton>
                ))}
            </OptionsGrid>
        </GameCard>
    );
};


const PracticePage: React.FC<{ topicId: string, words: Word[], navigateTo: (page: Page) => void }> = ({ topicId, words, navigateTo }) => {
    const [gameMode, setGameMode] = useState<GameMode>('listening');
    const originalTopic = allSubTopics.find(list => list.id === topicId);

    if (!originalTopic) {
        return (
            <PageContainer>
                <p>主题未找到！</p>
                <button onClick={() => navigateTo('home')}>返回主页</button>
            </PageContainer>
        );
    }
    
    const activityTopic: SubTopic = { ...originalTopic, words };

    return (
        <PageContainer>
            <PageHeader>
                 <BackButton onClick={() => navigateTo('home')} aria-label="返回主页">
                    <BackArrowIcon />
                </BackButton>
                <h1>{activityTopic.title}</h1>
            </PageHeader>
            <main>
                <GameTabs>
                    <TabButton $active={gameMode === 'image'} onClick={() => setGameMode('image')}>
                        <ImageIcon /> 看词识义
                    </TabButton>
                    <TabButton $active={gameMode === 'listening'} onClick={() => setGameMode('listening')}>
                        <SoundIcon /> 听音辨词
                    </TabButton>
                </GameTabs>

                <Game key={`${gameMode}-${topicId}`} topic={activityTopic} gameMode={gameMode} onGameChange={setGameMode} />
            </main>
        </PageContainer>
    );
};

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const popIn = keyframes`
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
`;

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

const GameTabs = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const TabButton = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid ${({ theme, $active }) => $active ? 'transparent' : theme.colors.border};
    background-color: ${({ theme, $active }) => $active ? theme.colors.practice : theme.colors.cardBg};
    color: ${({ theme, $active }) => $active ? 'white' : theme.colors.header};

    &:hover {
        transform: translateY(-2px);
    }
`;

const GameCard = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 24px;
    box-shadow: ${({ theme }) => theme.shadows.main};
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    min-height: 450px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1.5rem;
        min-height: 400px;
    }
`;

const ProgressBarContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.boxBg};
`;

const ProgressBar = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.practice};
    transition: width 0.3s ease;
`;

const QuestionPrompt = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.header};
    text-align: center;
`;

const ListenPromptContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

const ListenButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border: none;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.2s ease;
    
    &:hover {
        transform: scale(1.1);
        background-color: #E2DFFF;
    }
`;

const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: 500px;
`;

const OptionButton = styled.button<{ $state: 'default' | 'correct' | 'incorrect' | 'disabled' }>`
    font-family: inherit;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1.25rem;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.header};
    
    &:not(:disabled):hover {
        border-color: ${({ theme }) => theme.colors.practice};
        color: ${({ theme }) => theme.colors.practice};
    }
    
    ${({ $state, theme }) => {
        switch ($state) {
            case 'correct':
                return css`
                    background-color: #E6F8F2;
                    border-color: ${theme.colors.learn};
                    color: ${theme.colors.learn};
                    transform: scale(1.05);
                `;
            case 'incorrect':
                return css`
                    background-color: #FDF2F2;
                    border-color: ${theme.colors.primaryRed};
                    color: ${theme.colors.primaryRed};
                `;
            case 'disabled':
                return css`
                    opacity: 0.5;
                    cursor: not-allowed;
                `;
            default:
                return '';
        }
    }}
`;

const ResultsContainer = styled.div`
    text-align: center;
    padding: 4rem 2rem;
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.main};
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    animation: ${popIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    h2 { font-size: 2rem; color: ${({ theme }) => theme.colors.header}; margin: 0 0 0.5rem 0; }
    p { font-size: 1.1rem; color: ${({ theme }) => theme.colors.label}; max-width: 40ch; margin: 0 auto 1rem auto; }
`;

const ScoreText = styled.div`
    font-size: 3.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.practice};
    margin-bottom: 2rem;
`;

const ResultsActions = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const GameButton = styled.button<{ $secondary?: boolean }>`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem 2rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background-color: ${({ theme, $secondary }) => $secondary ? theme.colors.boxBg : theme.colors.practice};
    color: ${({ theme, $secondary }) => $secondary ? theme.colors.header : 'white'};
    
    &:hover {
        transform: scale(1.05);
    }
`;

export default PracticePage;