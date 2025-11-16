import React, { useState, useEffect, useMemo } from 'react';
import { styled, keyframes } from 'styled-components';
import { Page } from '../types';
import { allSubTopics, Word } from '../data';

const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;

const CheckIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;


interface WordSelectionPageProps {
    topicId: string;
    navigateTo: (page: Page) => void;
    onStartActivity: (page: 'learn' | 'practice', words: Word[]) => void;
}

const getEmojiCharacter = (emoji: string): string => {
    if (emoji.startsWith('http')) {
        // Extracts hex codepoints from URLs like:
        // .../partying-face_1f973.png -> 1f973
        // .../man-running_1f3c3-200d-2642-fe0f.png -> 1f3c3-200d-2642-fe0f
        const match = emoji.match(/_([0-9a-fA-F\-]+)\.png$/);
        if (match && match[1]) {
            try {
                const codePoints = match[1].split('-').map(hex => parseInt(hex, 16));
                return String.fromCodePoint(...codePoints);
            } catch (e) {
                console.error('Failed to parse emoji codepoint from URL:', emoji, e);
                return '▫️'; // Fallback for parsing errors
            }
        }
        return '▫️'; // Fallback for URLs without a parsable codepoint
    }
    return emoji; // It's already a unicode character
};

const WordSelectionPage: React.FC<WordSelectionPageProps> = ({ topicId, navigateTo, onStartActivity }) => {
    const topic = useMemo(() => allSubTopics.find(list => list.id === topicId), [topicId]);
    
    const allWordsInTopic = useMemo(() => {
        if (!topic) return [];
        if (topic.wordSections && topic.wordSections.length > 0) {
            return topic.wordSections.flatMap(section => section.words);
        }
        return topic.words || [];
    }, [topic]);
    
    const [selectedWords, setSelectedWords] = useState<Word[]>([]);
    const [copyStatus, setCopyStatus] = useState('');

    useEffect(() => {
        if (topic) {
            setSelectedWords(allWordsInTopic);
        }
    }, [topic, allWordsInTopic]);

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

    const handleSelectAll = () => setSelectedWords(allWordsInTopic);
    const handleDeselectAll = () => setSelectedWords([]);

    const handleCopy = () => {
        if (selectedWords.length === 0) return;
        
        const textToCopy = selectedWords
            .map(word => {
                const emojiChar = getEmojiCharacter(word.emoji);
                // Format: English Phonetic Icon Chinese
                return `${word.word} ${word.phonetic} ${emojiChar} ${word.definition}`;
            })
            .join('\n');

        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopyStatus('已复制！');
            setTimeout(() => setCopyStatus(''), 2000);
        }, () => {
            setCopyStatus('复制失败');
            setTimeout(() => setCopyStatus(''), 2000);
        });
    };

    const isAllSelected = selectedWords.length === allWordsInTopic.length;
    const isNoneSelected = selectedWords.length === 0;

    return (
        <PageContainer>
            <PageHeader>
                <BackButton onClick={() => navigateTo('home')} aria-label="返回主页">
                    <BackArrowIcon />
                </BackButton>
                <h1>{topic.title}</h1>
            </PageHeader>
            <ContentContainer>
                <Controls>
                    <p>{selectedWords.length} / {allWordsInTopic.length} 已选择</p>
                    <div>
                        {copyStatus && <CopyStatus>{copyStatus}</CopyStatus>}
                        <ControlButton onClick={handleCopy} disabled={isNoneSelected}>复制笔记</ControlButton>
                        <ControlButton onClick={handleSelectAll} disabled={isAllSelected}>全选</ControlButton>
                        <ControlButton onClick={handleDeselectAll} disabled={isNoneSelected}>全部取消</ControlButton>
                    </div>
                </Controls>
                <WordListContainer>
                    {topic.wordSections && topic.wordSections.length > 0 ? (
                        topic.wordSections.map(section => (
                            <WordSection key={section.title}>
                                <SectionTitle>{section.title}</SectionTitle>
                                <WordGrid>
                                    {section.words.map(word => (
                                        <WordItem key={word.word} onClick={() => handleWordToggle(word)} $isSelected={selectedWords.some(w => w.word === word.word)}>
                                            <Emoji>
                                                {word.emoji.startsWith('http') ? <img src={word.emoji} alt="" /> : word.emoji}
                                            </Emoji>
                                             <WordInfo>
                                                <WordText>{word.word}</WordText>
                                                <DefinitionText>{word.definition}</DefinitionText>
                                            </WordInfo>
                                            <Checkbox $checked={selectedWords.some(w => w.word === word.word)}>
                                                {selectedWords.some(w => w.word === word.word) && <CheckIcon />}
                                            </Checkbox>
                                        </WordItem>
                                    ))}
                                </WordGrid>
                            </WordSection>
                        ))
                    ) : (
                       <WordGrid>
                            {allWordsInTopic.map(word => (
                                <WordItem key={word.word} onClick={() => handleWordToggle(word)} $isSelected={selectedWords.some(w => w.word === word.word)}>
                                    <Emoji>
                                        {word.emoji.startsWith('http') ? <img src={word.emoji} alt="" /> : word.emoji}
                                    </Emoji>
                                     <WordInfo>
                                        <WordText>{word.word}</WordText>
                                        <DefinitionText>{word.definition}</DefinitionText>
                                    </WordInfo>
                                    <Checkbox $checked={selectedWords.some(w => w.word === word.word)}>
                                        {selectedWords.some(w => w.word === word.word) && <CheckIcon />}
                                    </Checkbox>
                                </WordItem>
                            ))}
                        </WordGrid>
                    )}
                </WordListContainer>
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
    animation: ${fadeIn} 0.5s ease;
    padding-bottom: 100px; /* Space for footer */
`;

const PageHeader = styled.header`
    position: relative;
    text-align: center;
    margin-bottom: 1.5rem;
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
    padding: 1.5rem;
    box-shadow: ${({ theme }) => theme.shadows.main};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1.5rem;
    }
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    flex-wrap: wrap;
    gap: 1rem;

    p {
        margin: 0;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.label};
    }
    div {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const ControlButton = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0;

    &:hover:not(:disabled) {
        text-decoration: underline;
    }
    &:disabled {
        color: ${({ theme }) => theme.colors.label};
        cursor: not-allowed;
        text-decoration: none;
    }
`;

const CopyStatus = styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.learn};
    font-weight: 600;
`;

const WordListContainer = styled.div`
    max-height: 60vh;
    overflow-y: auto;
    padding: 0.5rem;
`;

const WordSection = styled.section`
    &:not(:first-child) {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid ${({ theme }) => theme.colors.border};
    }
`;

const SectionTitle = styled.h3`
    color: ${({ theme }) => theme.colors.label};
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0.5rem 0.75rem;
`;

const WordGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.75rem;
`;

const WordItem = styled.div<{$isSelected: boolean}>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 0.75rem;
    border-radius: 12px;
    cursor: pointer;
    border: 2px solid ${({ theme, $isSelected }) => $isSelected ? theme.colors.primary : theme.colors.border};
    background-color: ${({ theme, $isSelected }) => $isSelected ? theme.colors.primaryLight : theme.colors.cardBg};
    transition: all 0.2s ease;
    box-shadow: ${({ theme, $isSelected }) => $isSelected ? 'none' : theme.shadows.subtle};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.main};
    }
`;

const Emoji = styled.div`
    font-size: 1.5rem;
    line-height: 1;
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
`;

const WordInfo = styled.div`
    flex-grow: 1;
    min-width: 0;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const Checkbox = styled.div<{$checked: boolean}>`
    width: 22px;
    height: 22px;
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
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
`;

const DefinitionText = styled.span`
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.8rem;
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