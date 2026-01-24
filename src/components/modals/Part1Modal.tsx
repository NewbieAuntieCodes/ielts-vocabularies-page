import React, { useState, useEffect } from 'react';
import { CueCardData, SampleAnswerData } from '../../types';
import { BackArrowIcon, CopyIcon, CheckIcon } from '../shared/Icons';
import AnalyzedText from '../shared/AnalyzedText';
import AnalysisDetailCard from '../shared/AnalysisDetailCard';
import { useStudentContext } from '../../context/StudentContext';
import { filterAllowedBands } from '../../utils/scoreBands';
import { DEFAULT_SEASON_ID, SeasonId } from '../../data/seasons';
import {
    ModalContainerP1,
    ModalHeaderP1,
    ModalBackButtonP1,
    ModalHeaderTag,
    ModalNewTagP1,
    ModalCloseButtonP1,
    ModalContentP1,
    QuestionsSectionP1,
    ModalFooterP1,
    SupplementaryAction,
    ScoreNavContainer,
    ScoreNavButtons,
    ScoreNavButton,
    ScoreHint,
    ScoreSelector,
    ScoreButtonsWrapper,
    ScoreBadge,
    CopyAllButton,
    AnswersList,
    QAWrapper,
    AnswerHeader,
    AnswerQuestion,
    CopyButton,
    WordPanel,
    WordPanelHeader,
    WordPanelTitle,
    WordPanelToggle,
    WordPanelBody,
    WordCardsList,
} from './part1/styles';

interface Part1ModalProps {
    card: CueCardData;
    seasonId?: SeasonId;
    seasonTag?: string;
    onClose: () => void;
}

const Part1Modal: React.FC<Part1ModalProps> = ({ card, onClose, seasonId, seasonTag }) => {
    const { bandToShow, getSampleAnswersForCard } = useStudentContext();
    const sampleAnswers = getSampleAnswersForCard(card);
    const hasSampleAnswers = sampleAnswers && sampleAnswers.length > 0;
    const resolvedSeasonTag =
        seasonTag ||
        (seasonId ? `【${seasonId}】` : '') ||
        (card.seasonId ? `【${card.seasonId}】` : '') ||
        `【${DEFAULT_SEASON_ID}】`;
    
    const availableScores: string[] = hasSampleAnswers
        ? filterAllowedBands(sampleAnswers.flatMap(qa => qa.versions.map(v => v.score)))
        : [];
    const availableScoresKey = availableScores.join('|');
    const fallbackScore = availableScores.includes(bandToShow)
        ? bandToShow
        : (availableScores[0] || bandToShow);

    const [showAnswersView, setShowAnswersView] = useState(false);
    const [selectedScore, setSelectedScore] = useState(fallbackScore);
    const [copyStatus, setCopyStatus] = useState<{[key: number]: 'idle' | 'copied'}>({});
    const [copyAllStatus, setCopyAllStatus] = useState<'idle' | 'copied'>('idle');
    const [wordPanelOpen, setWordPanelOpen] = useState<Record<number, boolean>>({});

    useEffect(() => {
        // Reset view when card changes
        setShowAnswersView(false);
    }, [card.id]);

    useEffect(() => {
        // When band preference or card changes, reset selected score
        setSelectedScore(fallbackScore);
        setCopyStatus({});
        setCopyAllStatus('idle');
    }, [fallbackScore, card.id, availableScoresKey]);

    useEffect(() => {
        // When score changes, reset all copy statuses
        setCopyStatus({});
        setCopyAllStatus('idle');
        setWordPanelOpen({});
    }, [selectedScore]);

    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const usingFallback = !availableScores.includes(bandToShow);

    const handleShowAnswers = (score: string) => {
        setSelectedScore(score);
        setShowAnswersView(true);
    };

    const handleCopy = (qa: SampleAnswerData, index: number) => {
        const version = qa.versions.find(v => v.score === selectedScore);
        if (!version) return;

        const questionText = `${index + 1}. ${qa.question}`;
        
        let answerText = '';
        if (Array.isArray(version.answer)) {
            answerText = version.answer.join('\n\n');
        } else {
            const paragraphs = version.answer.split(/<br\s*\/?>\s*<br\s*\/?>/gi);
            answerText = paragraphs.map(p => p.replace(/<\/?[^>]+(>|$)/g, "").trim()).join('\n\n');
        }
    
        const textToCopy = `**${questionText}**\n\n${answerText}`;
    
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopyStatus(prev => ({ ...prev, [index]: 'copied' }));
            setTimeout(() => setCopyStatus(prev => ({...prev, [index]: 'idle'})), 2000);
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    };
    
    const handleCopyAll = () => {
        if (!sampleAnswers || sampleAnswers.length === 0) return;

        const allText = sampleAnswers.map((qa, index) => {
            const version = qa.versions.find(v => v.score === selectedScore);
            if (!version) return '';

            const questionText = `${index + 1}. ${qa.question}`;
            
            let answerText = '';
            if (Array.isArray(version.answer)) {
                answerText = version.answer.join('\n\n');
            } else {
                const paragraphs = version.answer.split(/<br\s*\/?>\s*<br\s*\/?>/gi);
                answerText = paragraphs.map(p => p.replace(/<\/?[^>]+(>|$)/g, "").trim()).join('\n\n');
            }
        
            return `**${questionText}**\n\n${answerText}`;
        }).filter(Boolean).join('\n\n\n');

        if (allText) {
            navigator.clipboard.writeText(allText).then(() => {
                setCopyAllStatus('copied');
                setTimeout(() => setCopyAllStatus('idle'), 2000);
            }).catch(err => {
                console.error("Could not copy all text: ", err);
            });
        }
    };

    // View 1: Question List
    if (!showAnswersView) {
        return (
            <ModalContainerP1 onClick={handleModalContentClick}>
                <ModalHeaderP1>
                    <div className="modal-header-content">
                        <ModalHeaderTag>{resolvedSeasonTag}</ModalHeaderTag>
                        <h2 id="modal-title-p1">{card.title}</h2>
                    </div>
                    {card.status === 'New' && <ModalNewTagP1>新题</ModalNewTagP1>}
                    <ModalCloseButtonP1 onClick={onClose} aria-label="关闭">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </ModalCloseButtonP1>
                </ModalHeaderP1>
                <ModalContentP1>
                    <QuestionsSectionP1>
                        <h3>问题列表</h3>
                        <ol>
                            {card.part1Questions?.map((q, index) => <li key={index}>{q}</li>)}
                        </ol>
                    </QuestionsSectionP1>

                    {hasSampleAnswers && availableScores.length > 0 && (
                        <ScoreNavContainer>
                            <h4>范文分段：{selectedScore}分</h4>
                            <ScoreNavButtons>
                                <ScoreNavButton onClick={() => handleShowAnswers(selectedScore)}>
                                    查看{selectedScore}分范文
                                </ScoreNavButton>
                            </ScoreNavButtons>
                            {usingFallback && (
                                <ScoreHint>未找到 {bandToShow} 分范文，已展示 {selectedScore} 分版本。</ScoreHint>
                            )}
                        </ScoreNavContainer>
                    )}
                </ModalContentP1>
                <ModalFooterP1>
                    <SupplementaryAction>我要补充</SupplementaryAction>
                </ModalFooterP1>
            </ModalContainerP1>
        );
    }

    // View 2: Detailed Answers
    return (
        <ModalContainerP1 onClick={handleModalContentClick}>
            <ModalHeaderP1>
                <ModalBackButtonP1 onClick={() => setShowAnswersView(false)} aria-label="返回问题列表">
                     <BackArrowIcon />
                </ModalBackButtonP1>
                <div className="modal-header-content">
                     <ModalHeaderTag>{resolvedSeasonTag}</ModalHeaderTag>
                     <h2 id="modal-title-p1">{card.title}</h2>
                </div>
                 {card.status === 'New' && <ModalNewTagP1>新题</ModalNewTagP1>}
                <ModalCloseButtonP1 onClick={onClose} aria-label="关闭">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </ModalCloseButtonP1>
            </ModalHeaderP1>
            <ModalContentP1>
                <ScoreSelector>
                    <ScoreButtonsWrapper>
                        <ScoreBadge $warn={usingFallback}>
                            <span>范文分段</span>
                            <strong>{selectedScore} 分</strong>
                            {usingFallback ? (
                                <small>原配置 {bandToShow} 无范文，已展示 {selectedScore} 分。</small>
                            ) : (
                                <small>分段来自学生配置。</small>
                            )}
                        </ScoreBadge>
                    </ScoreButtonsWrapper>
                    <CopyAllButton onClick={handleCopyAll} disabled={copyAllStatus === 'copied'}>
                        {copyAllStatus === 'copied' ? (
                            <>
                                <CheckIcon />
                                <span>已复制</span>
                            </>
                        ) : (
                            <>
                                <CopyIcon />
                                <span>复制整页</span>
                            </>
                        )}
                    </CopyAllButton>
                </ScoreSelector>

                <AnswersList>
                    {sampleAnswers.map((qa, index) => {
                        const version = qa.versions.find(v => v.score === selectedScore);
                        if (!version) return null;
                        const wordCards = (version.analysis || []).filter(
                            (item) => item.type === 'vocab' || item.type === 'phrase',
                        );
                        const isWordPanelOpen = !!wordPanelOpen[index];

                        return (
                            <QAWrapper key={index}>
                                <AnswerHeader>
                                    <AnswerQuestion>{`${index + 1}. ${qa.question}`}</AnswerQuestion>
                                    <CopyButton onClick={() => handleCopy(qa, index)} disabled={copyStatus[index] === 'copied'}>
                                        {copyStatus[index] === 'copied' ? <CheckIcon /> : <CopyIcon />}
                                    </CopyButton>
                                </AnswerHeader>
                                <AnalyzedText answer={version.answer} analysis={version.analysis || []} />
                                {wordCards.length > 0 && (
                                    <WordPanel aria-label="单词卡">
                                        <WordPanelHeader>
                                            <WordPanelTitle>单词卡</WordPanelTitle>
                                            <WordPanelToggle
                                                type="button"
                                                onClick={() =>
                                                    setWordPanelOpen((prev) => ({
                                                        ...prev,
                                                        [index]: !prev[index],
                                                    }))
                                                }
                                            >
                                                {isWordPanelOpen ? '收起' : `展开（${wordCards.length}）`}
                                            </WordPanelToggle>
                                        </WordPanelHeader>
                                        {isWordPanelOpen && (
                                            <WordPanelBody>
                                                <WordCardsList>
                                                    {wordCards.map((item, idx) => (
                                                        <AnalysisDetailCard key={idx} item={item} />
                                                    ))}
                                                </WordCardsList>
                                            </WordPanelBody>
                                        )}
                                    </WordPanel>
                                )}
                            </QAWrapper>
                        )
                    })}
                </AnswersList>

            </ModalContentP1>
             <ModalFooterP1>
                <SupplementaryAction>我要补充</SupplementaryAction>
            </ModalFooterP1>
        </ModalContainerP1>
    );
};

export default Part1Modal;
