
import React, { useState, useEffect, useMemo } from 'react';
import { styled, keyframes, css } from 'styled-components';
import { Page } from '../types';
import { Word } from '../data-types';
import { useVocabData } from '../context/VocabDataContext';

const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;
const CheckIcon = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;

const getEmojiCharacter = (emoji: string): string => {
    if (emoji.startsWith('http')) {
        const match = emoji.match(/_([0-9a-fA-F\-]+)\.png$/);
        if (match && match[1]) {
            try {
                const codePoints = match[1].split('-').map(hex => parseInt(hex, 16));
                return String.fromCodePoint(...codePoints);
            } catch (e) { return '▫️'; }
        }
        return '▫️';
    }
    return emoji;
};

interface WordSelectionPageProps {
    topicId: string;
    navigateTo: (page: Page) => void;
    onStartActivity: (page: 'learn' | 'practice', words: Word[]) => void;
    onExitToQuestionBank?: () => void;
}

const WordSelectionPage: React.FC<WordSelectionPageProps> = ({
    topicId,
    navigateTo,
    onStartActivity,
    onExitToQuestionBank,
}) => {
    const { allSubTopics } = useVocabData();
    const topic = useMemo(
        () => allSubTopics.find((list) => list.id === topicId),
        [allSubTopics, topicId],
    );
    
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

    if (!topic) return null;

    const handleWordToggle = (word: Word) => {
        setSelectedWords(prev => 
            prev.find(w => w.word === word.word) 
                ? prev.filter(w => w.word !== word.word)
                : [...prev, word]
        );
    };

    const handleSelectAll = () => setSelectedWords(allWordsInTopic);
    const handleDeselectAll = () => setSelectedWords([]);
    
    // 按等级筛选逻辑
    const handleSelectBasic = () => {
        setSelectedWords(allWordsInTopic.filter(w => (w.level || 'basic') === 'basic'));
    };
    
    const handleSelectAdvanced = () => {
        setSelectedWords(allWordsInTopic.filter(w => w.level === 'advanced'));
    };

    const handleCopy = () => {
        if (selectedWords.length === 0) return;
        const selectedWordSet = new Set(selectedWords.map((word) => word.word));

        const formatWordLine = (word: Word): string => (
            `${word.word} ${word.phonetic} ${getEmojiCharacter(word.emoji)} ${word.definition}`
        );

        const splitByLevel = (words: Word[]): { basic: Word[]; advanced: Word[] } => {
            const basic: Word[] = [];
            const advanced: Word[] = [];

            for (const word of words) {
                if (word.level === 'advanced') {
                    advanced.push(word);
                    continue;
                }
                basic.push(word);
            }

            return { basic, advanced };
        };

        const outputLines: string[] = [topic.title, ''];

        const appendWordLines = (label: string, words: Word[]) => {
            if (words.length === 0) return;
            outputLines.push(label);
            outputLines.push(...words.map(formatWordLine));
            outputLines.push('');
        };

        const appendSection = (sectionTitle: string | null, words: Word[]) => {
            if (words.length === 0) return;

            const isBasicSection = sectionTitle?.includes('基础') && !sectionTitle?.includes('进阶');
            const isAdvancedSection = sectionTitle?.includes('进阶');

            if (isBasicSection) {
                appendWordLines('基础词汇：', words);
                return;
            }

            if (isAdvancedSection) {
                appendWordLines('进阶词汇：', words);
                return;
            }

            if (sectionTitle) {
                outputLines.push(sectionTitle);
            }

            const { basic, advanced } = splitByLevel(words);
            appendWordLines('基础词汇：', basic);
            appendWordLines('进阶词汇：', advanced);
        };

        if (topic.wordSections && topic.wordSections.length > 0) {
            for (const section of topic.wordSections) {
                const sectionWords = section.words.filter((word) => selectedWordSet.has(word.word));
                appendSection(section.title, sectionWords);
            }
        } else {
            const orderedSelectedWords = allWordsInTopic.filter((word) => selectedWordSet.has(word.word));
            appendSection(null, orderedSelectedWords);
        }

        while (outputLines.length > 0 && outputLines[outputLines.length - 1] === '') {
            outputLines.pop();
        }

        const textToCopy = outputLines.join('\n');

        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopyStatus('已复制！');
            setTimeout(() => setCopyStatus(''), 2000);
        });
    };

    const isAllSelected = selectedWords.length === allWordsInTopic.length;
    const isNoneSelected = selectedWords.length === 0;

    return (
        <PageContainer>
            <PageHeader>
                <BackButton onClick={() => (onExitToQuestionBank ? onExitToQuestionBank() : navigateTo('home'))}>
                    <BackArrowIcon />
                </BackButton>
                <h1>{topic.title}</h1>
            </PageHeader>
            <ContentContainer>
                <Controls>
                    <SelectInfo>
                        <strong>{selectedWords.length}</strong> / {allWordsInTopic.length} 词已选
                    </SelectInfo>
                    <ControlActions>
                        {copyStatus && <CopyStatus>{copyStatus}</CopyStatus>}
                        <ControlButton onClick={handleCopy} disabled={isNoneSelected}>复制笔记</ControlButton>
                        <ControlButton onClick={handleSelectBasic} $color="red">选基础</ControlButton>
                        <ControlButton onClick={handleSelectAdvanced} $color="blue">选进阶</ControlButton>
                        <ControlButton onClick={handleSelectAll} disabled={isAllSelected}>全选</ControlButton>
                        <ControlButton onClick={handleDeselectAll} disabled={isNoneSelected}>重置</ControlButton>
                    </ControlActions>
                </Controls>
                <WordListContainer>
                    {topic.wordSections && topic.wordSections.length > 0 ? (
                        topic.wordSections.map(section => (
                            <WordSection key={section.title}>
                                <SectionTitle>{section.title}</SectionTitle>
                                <WordGrid>
                                    {section.words.map(word => (
                                        <WordItem 
                                            key={word.word} 
                                            onClick={() => handleWordToggle(word)} 
                                            $isSelected={selectedWords.some(w => w.word === word.word)}
                                            $level={word.level || 'basic'}
                                        >
                                            <Emoji>
                                                {word.emoji.startsWith('http') ? <img src={word.emoji} alt="" /> : word.emoji}
                                            </Emoji>
                                            <WordInfo>
                                                <WordText $level={word.level || 'basic'}>{word.word}</WordText>
                                                <DefinitionText>{word.definition}</DefinitionText>
                                            </WordInfo>
                                            <Checkbox 
                                                $checked={selectedWords.some(w => w.word === word.word)}
                                                $level={word.level || 'basic'}
                                            >
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
                                <WordItem 
                                    key={word.word} 
                                    onClick={() => handleWordToggle(word)} 
                                    $isSelected={selectedWords.some(w => w.word === word.word)}
                                    $level={word.level || 'basic'}
                                >
                                    <Emoji>
                                        {word.emoji.startsWith('http') ? <img src={word.emoji} alt="" /> : word.emoji}
                                    </Emoji>
                                    <WordInfo>
                                        <WordText $level={word.level || 'basic'}>{word.word}</WordText>
                                        <DefinitionText>{word.definition}</DefinitionText>
                                    </WordInfo>
                                    <Checkbox 
                                        $checked={selectedWords.some(w => w.word === word.word)}
                                        $level={word.level || 'basic'}
                                    >
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
                    开始学习
                </ActionButton>
                <ActionButton 
                    $type="practice" 
                    disabled={isNoneSelected}
                    onClick={() => onStartActivity('practice', selectedWords)}
                >
                    开始练习
                </ActionButton>
            </Footer>
        </PageContainer>
    );
};

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const PageContainer = styled.div`
    animation: ${fadeIn} 0.5s ease;
    padding-bottom: 120px;
    max-width: 1200px;
    margin: 0 auto;
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
        font-size: 1.4rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.header};
    }
`;

const BackButton = styled.button`
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const ContentContainer = styled.div`
    background: ${({ theme }) => theme.colors.cardBg};
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.75rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    flex-wrap: wrap;
    gap: 0.75rem;
`;

const SelectInfo = styled.div`
    font-size: 0.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.label};
    strong { color: ${({ theme }) => theme.colors.primary}; font-size: 1rem; }
`;

const ControlActions = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
`;

const ControlButton = styled.button<{ $color?: 'red' | 'blue' }>`
    background: transparent;
    border: none;
    color: ${({ theme, $color, disabled }) => {
        if (disabled) return theme.colors.border;
        if ($color === 'red') return theme.colors.primaryRed;
        if ($color === 'blue') return theme.colors.primaryBlue;
        return theme.colors.primary;
    }};
    font-weight: 800;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover:not(:disabled) { opacity: 0.7; }
    &:disabled { color: ${({ theme }) => theme.colors.border}; cursor: not-allowed; }
`;

const CopyStatus = styled.span`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.learn};
    font-weight: 800;
`;

const WordListContainer = styled.div`
    max-height: 70vh;
    overflow-y: auto;
    padding: 0.4rem;
    &::-webkit-scrollbar { width: 4px; }
    &::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.colors.border}; border-radius: 10px; }
`;

const WordSection = styled.section`
    margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.75rem;
    font-weight: 900;
    margin: 0.5rem 0 0.6rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding-left: 0.2rem;
`;

const WordGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.5rem;
`;

const WordItem = styled.div<{$isSelected: boolean; $level: 'basic' | 'advanced'}>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.1s ease;
    height: 48px;

    // 根据 level 决定选中的边框和背景色
    ${({ $isSelected, $level, theme }) => {
        const color = $level === 'basic' ? theme.colors.primaryRed : theme.colors.primaryBlue;
        const bgColor = $level === 'basic' ? '#fff5f5' : '#eff6ff';
        
        return $isSelected ? css`
            border: 1.5px solid ${color};
            background-color: ${bgColor};
        ` : css`
            border: 1.5px solid ${theme.colors.border};
            background-color: ${theme.colors.cardBg};
        `;
    }}

    &:hover {
        border-color: ${({ $level, theme }) => $level === 'basic' ? theme.colors.primaryRed : theme.colors.primaryBlue}66;
    }
`;

const Emoji = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    img { height: 100%; width: 100%; object-fit: contain; }
`;

const WordInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
`;

const WordText = styled.span<{$level: 'basic' | 'advanced'}>`
    font-weight: 800;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    // 单词本身的颜色也根据 level 区分
    color: ${({ $level, theme }) => $level === 'basic' ? theme.colors.primaryRed : theme.colors.primaryBlue};
`;

const DefinitionText = styled.span`
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
`;

const Checkbox = styled.div<{$checked: boolean; $level: 'basic' | 'advanced'}>`
    width: 16px;
    height: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.1s;

    ${({ $checked, $level, theme }) => {
        const color = $level === 'basic' ? theme.colors.primaryRed : theme.colors.primaryBlue;
        return $checked ? css`
            border: 1.5px solid ${color};
            background-color: ${color};
            color: white;
        ` : css`
            border: 1.5px solid #D1D5DB;
            background-color: transparent;
        `;
    }}
`;

const Footer = styled.footer`
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 0.6rem 1.2rem;
    display: flex;
    gap: 0.8rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    z-index: 100;
`;

const ActionButton = styled.button<{$type: 'learn' | 'practice'}>`
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 800;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    color: white;
    background-color: ${({ theme, $type }) => theme.colors[$type]};

    &:hover:not(:disabled) { transform: translateY(-1px); filter: brightness(1.1); }
    &:disabled { background-color: ${({ theme }) => theme.colors.border}; color: ${({ theme }) => theme.colors.label}; cursor: not-allowed; }
`;

export default WordSelectionPage;
