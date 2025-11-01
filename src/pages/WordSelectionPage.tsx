import React, { useState, useEffect, useMemo } from 'react';
import { styled, keyframes } from 'styled-components';
import { Page } from '../types';
import { allSubTopics, Word } from '../data';

const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;

const CheckIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;


interface WordSelectionPageProps {
    topicId: string;
    navigateTo: (page: Page) => void;
    onStartActivity: (page: 'learn' | 'practice', words: Word[]) => void;
}

const WordSelectionPage: React.FC<WordSelectionPageProps> = ({ topicId, navigateTo, onStartActivity }) => {
    const topic = useMemo(() => allSubTopics.find(list => list.id === topicId), [topicId]);
    const [selectedWords, setSelectedWords] = useState<Word[]>([]);

    useEffect(() => {
        if (topic) {
            setSelectedWords(topic.words);
        }
    }, [topic]);

    if (!topic) {
        return (
            <PageContainer>
                <p>主题未找到！</p>
                <button onClick={() => navigateTo('home')}>返回主页</button>
            </PageContainer>
        );
    }

    const handleWordToggle = (word: Word) => {
        setSelectedWords(prev => 
            prev.find(w => w.word === word.word) 
                ? prev.filter(w => w.word !== word.word)
                : [...prev, word]
        );
    };

    const handleSelectAll = () => setSelectedWords(topic.words);
    const handleDeselectAll = () => setSelectedWords([]);

    const isAllSelected = selectedWords.length === topic.words.length;
    const isNoneSelected = selectedWords.length === 0;

    return (
        <PageContainer>
            <PageHeader>
                <BackButton onClick={() => navigateTo('home')} aria-label="返回主页">
                    <BackArrowIcon />
                </BackButton>
                <h1>选择单词</h1>
            </PageHeader>
            <ContentContainer>
                <TopicTitle>{topic.title}</TopicTitle>
                <Controls>
                    <p>{selectedWords.length} / {topic.words.length} 已选择</p>
                    <div>
                        <ControlButton onClick={handleSelectAll} disabled={isAllSelected}>全选</ControlButton>
                        <ControlButton onClick={handleDeselectAll} disabled={isNoneSelected}>全部取消</ControlButton>
                    </div>
                </Controls>
                <WordList>
                    {topic.words.map(word => (
                        <WordItem key={word.word} onClick={() => handleWordToggle(word)} $isSelected={selectedWords.some(w => w.word === word.word)}>
                            <Checkbox $checked={selectedWords.some(w => w.word === word.word)}>
                                {selectedWords.some(w => w.word === word.word) && <CheckIcon />}
                            </Checkbox>
                            <Emoji>
                                {word.emoji.startsWith('http') ? <img src={word.emoji} alt="" /> : word.emoji}
                            </Emoji>
                            <WordText>{word.word}</WordText>
                            <DefinitionText>{word.definition}</DefinitionText>
                        </WordItem>
                    ))}
                </WordList>
            </ContentContainer>
            <Footer>
                <ActionButton 
                    $type="learn" 
                    disabled={isNoneSelected}
                    onClick={() => onStartActivity('learn', selectedWords)}
                >
                    开始学习 ({selectedWords.length})
                </ActionButton>
                <ActionButton 
                    $type="practice" 
                    disabled={isNoneSelected}
                    onClick={() => onStartActivity('practice', selectedWords)}
                >
                    开始练习 ({selectedWords.length})
                </ActionButton>
            </Footer>
        </PageContainer>
    );
};

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const PageContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    animation: ${fadeIn} 0.5s ease;
    padding-bottom: 100px; /* Space for footer */
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

const ContentContainer = styled.div`
    background: ${({ theme }) => theme.colors.cardBg};
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 2rem;
    box-shadow: ${({ theme }) => theme.shadows.main};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1.5rem;
    }
`;

const TopicTitle = styled.h2`
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.header};
    margin: 0 0 1.5rem 0;
    text-align: center;
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    p {
        margin: 0;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.label};
    }
    div {
        display: flex;
        gap: 0.75rem;
    }
`;

const ControlButton = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover:not(:disabled) {
        text-decoration: underline;
    }
    &:disabled {
        color: ${({ theme }) => theme.colors.label};
        cursor: not-allowed;
        text-decoration: none;
    }
`;

const WordList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    max-height: 50vh;
    overflow-y: auto;
    padding: 0.5rem;
`;

const WordItem = styled.div<{$isSelected: boolean}>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 1.25rem 1rem 1rem;
    border-radius: 16px;
    cursor: pointer;
    border: 2px solid ${({ theme, $isSelected }) => $isSelected ? theme.colors.primary : theme.colors.border};
    background-color: ${({ theme, $isSelected }) => $isSelected ? theme.colors.primaryLight : theme.colors.cardBg};
    transition: all 0.2s ease;
    text-align: center;
    box-shadow: ${({ theme }) => theme.shadows.subtle};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.main};
    }
`;

const Emoji = styled.div`
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 0.75rem;
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

const Checkbox = styled.div<{$checked: boolean}>`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid ${({ theme, $checked }) => $checked ? theme.colors.primary : '#D1D5DB'};
    background-color: ${({ theme, $checked }) => $checked ? theme.colors.primary : theme.colors.cardBg};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s ease;
`;

const WordText = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.header};
    font-size: 1.1rem;
`;

const DefinitionText = styled.span`
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.9rem;
    white-space: normal;
    min-height: 2.2em;
`;

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    z-index: 100;
`;

const ActionButton = styled.button<{$type: 'learn' | 'practice'}>`
    flex-grow: 1;
    max-width: 300px;
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem 2rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    color: white;
    background-color: ${({ theme, $type }) => theme.colors[$type]};
    box-shadow: 0 4px 10px ${({ theme, $type }) => `${theme.colors[$type]}4D`};

    &:hover:not(:disabled) {
        transform: scale(1.03);
        box-shadow: 0 6px 15px ${({ theme, $type }) => `${theme.colors[$type]}66`};
    }
    
    &:disabled {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.label};
        cursor: not-allowed;
        box-shadow: none;
    }
`;


export default WordSelectionPage;