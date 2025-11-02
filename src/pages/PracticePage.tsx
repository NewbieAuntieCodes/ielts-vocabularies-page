import React, { useState, useEffect, useCallback } from 'react';
import { styled, keyframes, css } from 'styled-components';
import { Page } from '../types';
import { allSubTopics, SubTopic, Word } from '../data';
import { speak } from '../utils/speech';

type GameMode = 'zh-to-en' | 'en-to-zh' | 'listening';

// --- ICONS ---
const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;
const SpeakerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>;
const TranslateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/><path d="M12 5V3M5 5.5V3H3m18 18v-2.5m-3.5 2.5h2.5v-2.5M12 19v2m-1.5-11-5-5m0 5 5-5"/></svg>;
const SoundIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>;

// --- HELPER FUNCTIONS ---
const shuffleArray = <T,>(array: T[]): T[] => array.sort(() => Math.random() - 0.5);
const generateUID = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

interface Question {
    word: Word;
    options: string[];
    prompt: string;
    answer: string;
    uid: string;
    isRetry?: boolean;
}

const createGameQuestions = (topic: SubTopic, mode: GameMode): Question[] => {
    // Need at least 4 words to generate 3 incorrect options.
    if (topic.words.length < 4 && (mode === 'en-to-zh' || mode === 'zh-to-en')) {
        return [];
    }
    const shuffledWords = shuffleArray([...topic.words]);
    
    return shuffledWords.map(correctWord => {
        const otherWords = topic.words.filter(w => w.word !== correctWord.word);
        const numOptions = Math.min(3, otherWords.length);
        const incorrectOptionsPool = shuffleArray(otherWords).slice(0, numOptions);

        let options: string[] = [];
        let prompt: string = '';
        let answer: string = '';

        switch (mode) {
            case 'zh-to-en':
                prompt = correctWord.definition;
                answer = correctWord.word;
                options = shuffleArray([
                    correctWord.word, 
                    ...incorrectOptionsPool.map(w => w.word)
                ]);
                break;
            
            case 'en-to-zh':
                prompt = correctWord.word;
                answer = correctWord.definition;
                options = shuffleArray([
                    correctWord.definition,
                    ...incorrectOptionsPool.map(w => w.definition)
                ]);
                break;

            case 'listening':
                prompt = correctWord.word; // This is for speaking
                answer = correctWord.word;
                options = shuffleArray([
                    correctWord.word,
                    ...incorrectOptionsPool.map(w => w.word)
                ]);
                break;
        }

        return {
            word: correctWord,
            options,
            prompt,
            answer,
            uid: generateUID(),
        };
    });
};

interface GameProps {
    topic: SubTopic;
    gameMode: GameMode;
    onGameChange: (mode: GameMode) => void;
}

const Game: React.FC<GameProps> = ({ topic, gameMode, onGameChange }) => {
    const [questionQueue, setQuestionQueue] = useState<Question[]>([]);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);

    const resetGame = useCallback(() => {
        const newQuestions = createGameQuestions(topic, gameMode);
        setQuestionQueue(newQuestions);
        setTotalQuestions(newQuestions.length);
        setSelectedOption(null);
        setIsCorrect(null);
        setScore(0);
    }, [topic, gameMode]);

    useEffect(() => {
        resetGame();
    }, [resetGame]);

    const currentQuestion = questionQueue[0];
    
    useEffect(() => {
        if (gameMode === 'listening' && currentQuestion) {
            speak(currentQuestion.prompt);
        }
    }, [currentQuestion, gameMode]);
    
    const handleOptionClick = (option: string) => {
        if (selectedOption) return;

        const correct = option === currentQuestion.answer;
        setSelectedOption(option);
        setIsCorrect(correct);

        setTimeout(() => {
            if (correct) {
                if (!currentQuestion.isRetry) {
                    setScore(s => s + 1);
                }
                setQuestionQueue(q => q.slice(1));
            } else {
                setQuestionQueue(q => {
                    if (q.length <= 1) {
                        return [...q]; 
                    }
                    const queue = [...q];
                    const failedQuestion = queue.shift()!;
                    failedQuestion.isRetry = true;
                    queue.splice(1, 0, failedQuestion);
                    return queue;
                });
            }
            setSelectedOption(null);
            setIsCorrect(null);
        }, 300);
    };

    if (topic.words.length === 0) {
        return <GameCard><p>请至少选择一个单词开始练习！</p></GameCard>
    }
    if (totalQuestions === 0 && (gameMode === 'en-to-zh' || gameMode === 'zh-to-en')) {
         return <GameCard><p>当前模式至少需要4个单词才能开始练习！</p></GameCard>
    }

    if (!currentQuestion) {
        return (
            <ResultsContainer>
                <h2>练习完成!</h2>
                <ResultsActions>
                    <GameButton onClick={resetGame}>再玩一次</GameButton>
                    <GameButton onClick={() => onGameChange(gameMode === 'listening' ? 'zh-to-en' : 'listening')} $secondary>
                        {gameMode === 'listening' ? '挑战中选英' : '挑战听力'}
                    </GameButton>
                </ResultsActions>
            </ResultsContainer>
        );
    }
    
    const getButtonState = (option: string) => {
        if (!selectedOption) return 'default';
        if (option === currentQuestion.answer) return 'correct';
        if (option === selectedOption) return 'incorrect';
        return 'disabled';
    };
    
    const progress = totalQuestions > 0 ? ((totalQuestions - questionQueue.length) / totalQuestions) * 100 : 0;

    return (
        <GameCard>
             <ProgressBarContainer>
                <ProgressBar style={{ width: `${progress}%` }} />
            </ProgressBarContainer>

            {gameMode === 'listening' ? (
                <ListenPromptContainer>
                    <ListenButton onClick={() => speak(currentQuestion.prompt)} aria-label="Play sound">
                        <SpeakerIcon />
                    </ListenButton>
                </ListenPromptContainer>
            ) : (
                <QuestionPrompt>
                    {gameMode === 'zh-to-en' && currentQuestion.word.emoji && (
                        <EmojiPrompt>
                            {currentQuestion.word.emoji.startsWith('http') ? <img src={currentQuestion.word.emoji} alt="" /> : currentQuestion.word.emoji}
                        </EmojiPrompt>
                    )}
                    <span>{currentQuestion.prompt}</span>
                </QuestionPrompt>
            )}

            <OptionsGrid $isLongText={gameMode === 'en-to-zh'}>
                {currentQuestion.options.map(option => {
                    let wordObject: Word | undefined;
                    // Only find the word object (to show emoji) in en-to-zh mode,
                    // where options are Chinese definitions.
                    if (gameMode === 'en-to-zh') {
                        wordObject = topic.words.find(w => w.definition === option);
                    }
                    return (
                        <OptionButton 
                            key={option} 
                            onClick={() => handleOptionClick(option)}
                            disabled={!!selectedOption}
                            $state={getButtonState(option)}
                        >
                            {wordObject && (
                                <EmojiOption>
                                    {wordObject.emoji.startsWith('http') ? <img src={wordObject.emoji} alt="" /> : wordObject.emoji}
                                </EmojiOption>
                            )}
                            <span>{option}</span>
                        </OptionButton>
                    )
                })}
            </OptionsGrid>
        </GameCard>
    );
};


const PracticePage: React.FC<{ topicId: string, words: Word[], navigateTo: (page: Page) => void }> = ({ topicId, words, navigateTo }) => {
    const [gameMode, setGameMode] = useState<GameMode>('en-to-zh');
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
                    <TabButton $active={gameMode === 'en-to-zh'} onClick={() => setGameMode('en-to-zh')}>
                        <TranslateIcon /> 英选中
                    </TabButton>
                    <TabButton $active={gameMode === 'zh-to-en'} onClick={() => setGameMode('zh-to-en')}>
                        <TranslateIcon /> 中选英
                    </TabButton>
                    <TabButton $active={gameMode === 'listening'} onClick={() => setGameMode('listening')}>
                        <SoundIcon /> 听音辨词
                    </TabButton>
                </GameTabs>

                <Game key={`${gameMode}-${topicId}-${words.map(w => w.word).join('')}`} topic={activityTopic} gameMode={gameMode} onGameChange={setGameMode} />
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
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e2e8f0;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: #a799ff;
        transform: translateY(-50%) scale(1.05);
    }
`;

const GameTabs = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
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
    border: 1px solid ${({ theme, $active }) => $active ? theme.colors.practice : 'rgba(255, 255, 255, 0.2)'};
    background-color: ${({ theme, $active }) => $active ? theme.colors.practice : 'rgba(255, 255, 255, 0.1)'};
    backdrop-filter: blur(5px);
    color: ${({ $active }) => $active ? 'white' : '#f1f5f9'};

    &:hover {
        transform: translateY(-2px);
    }
`;

const GameCard = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    border-radius: 24px;
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
    background-color: rgba(255, 255, 255, 0.1);
`;

const ProgressBar = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.practice};
    transition: width 0.3s ease;
`;

const EmojiPrompt = styled.div`
    font-size: 4rem;
    line-height: 1;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`;

const QuestionPrompt = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.header};
    text-align: center;

     @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.5rem;
        min-height: 150px;
    }
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
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #a799ff;
    transition: all 0.2s ease;
    
    &:hover {
        transform: scale(1.1);
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

const OptionsGrid = styled.div<{ $isLongText?: boolean }>`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: ${({ $isLongText }) => $isLongText ? '100%' : '500px'};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        ${({ $isLongText }) => $isLongText && 'gap: 0.75rem;'}
    }
`;

const EmojiOption = styled.div`
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 0.25rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
`;

const OptionButton = styled.button<{ $state: 'default' | 'correct' | 'incorrect' | 'disabled' }>`
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: #f1f5f9;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.4;
    gap: 0.5rem;

    &:not(:disabled):hover {
        border-color: rgba(255, 171, 0, 0.7);
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffc966;
    }
    
    ${({ $state, theme }) => {
        switch ($state) {
            case 'correct':
                return css`
                    background-color: rgba(0, 196, 154, 0.25);
                    border-color: ${theme.colors.learn};
                    color: ${theme.colors.learn};
                    transform: scale(1.05);
                `;
            case 'incorrect':
                return css`
                    background-color: rgba(231, 76, 60, 0.25);
                    border-color: ${theme.colors.primaryRed};
                    color: ${theme.colors.primaryRed};
                `;
            case 'disabled':
                return css`
                    opacity: 0.6;
                    cursor: not-allowed;
                `;
            default:
                return '';
        }
    }}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
        padding: 1rem;
        min-height: 100px;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1rem;

        ${EmojiOption} {
            font-size: 2rem;
            margin-bottom: 0;
            height: 2rem;
            width: 2rem;
            flex-shrink: 0;
        }
    }
`;

const ResultsContainer = styled.div`
    text-align: center;
    padding: 4rem 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    animation: ${popIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    h2 { font-size: 2rem; color: ${({ theme }) => theme.colors.header}; margin: 0 0 2rem 0; }
`;

const ResultsActions = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`;

const GameButton = styled.button<{ $secondary?: boolean }>`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem 2rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid ${({ theme, $secondary }) => $secondary ? 'rgba(255,255,255,0.2)' : 'transparent'};
    background-color: ${({ theme, $secondary }) => $secondary ? 'rgba(255, 255, 255, 0.1)' : theme.colors.practice};
    color: ${({ theme, $secondary }) => $secondary ? theme.colors.header : 'white'};
    
    &:hover {
        transform: scale(1.05);
    }
`;

export default PracticePage;