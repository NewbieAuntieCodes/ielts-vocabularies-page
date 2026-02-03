import React, { useState, useEffect } from 'react';
import { CueCardData, SampleAnswerData } from '../../types';
import { BackArrowIcon, CopyIcon, CheckIcon } from '../shared/Icons';
import AnalyzedText from '../shared/AnalyzedText';
import AnalysisDetailCard from '../shared/AnalysisDetailCard';
import { useBandContext } from '../../context/BandContext';
import { AnswerTier, compareTier, filterAllowedTiers, formatTierLabel, tierFromScore } from '../../utils/answerTiers';
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
    const { tierToShow, getSampleAnswersForCard } = useBandContext();
    const sampleAnswers = getSampleAnswersForCard(card);
    const hasSampleAnswers = sampleAnswers && sampleAnswers.length > 0;
    const resolvedSeasonTag =
        seasonTag ||
        (seasonId ? `【${seasonId}】` : '') ||
        (card.seasonId ? `【${card.seasonId}】` : '') ||
        `【${DEFAULT_SEASON_ID}】`;
    
    const availableTiers: AnswerTier[] = hasSampleAnswers
        ? filterAllowedTiers(sampleAnswers.flatMap((qa) => qa.versions.map((v) => tierFromScore(v.score))))
        : [];
    const availableTiersKey = availableTiers.join('|');
    const fallbackTier = availableTiers.includes(tierToShow)
        ? tierToShow
        : (availableTiers[availableTiers.length - 1] || tierToShow);

    const [showAnswersView, setShowAnswersView] = useState(false);
    const [selectedTier, setSelectedTier] = useState<AnswerTier>(fallbackTier);
    const [copyStatus, setCopyStatus] = useState<{[key: number]: 'idle' | 'copied'}>({});
    const [copyAllStatus, setCopyAllStatus] = useState<'idle' | 'copied'>('idle');
    const [wordPanelOpen, setWordPanelOpen] = useState<Record<number, boolean>>({});

    useEffect(() => {
        // Reset view when card changes
        setShowAnswersView(false);
    }, [card.id]);

    useEffect(() => {
        // When band preference or card changes, reset selected score
        setSelectedTier(fallbackTier);
        setCopyStatus({});
        setCopyAllStatus('idle');
    }, [fallbackTier, card.id, availableTiersKey]);

    useEffect(() => {
        // When score changes, reset all copy statuses
        setCopyStatus({});
        setCopyAllStatus('idle');
        setWordPanelOpen({});
    }, [selectedTier]);

    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const usingFallback = !availableTiers.includes(tierToShow);

    const handleShowAnswers = (score: string) => {
        setSelectedTier(score as AnswerTier);
        setShowAnswersView(true);
    };

    const pickVersionForQA = (qa: SampleAnswerData) => {
        if (!qa.versions?.length) return null;

        const versionsByTier = qa.versions.map((v) => ({
            ...v,
            _tier: tierFromScore(v.score),
            _scoreValue: Number.parseFloat(v.score),
        }));

        const sortedTiers = [...new Set(versionsByTier.map((v) => v._tier))].sort(compareTier);
        const desiredIndex = sortedTiers.indexOf(selectedTier);

        let chosenTier: AnswerTier | null = null;
        if (desiredIndex >= 0) {
            chosenTier = sortedTiers[desiredIndex];
        } else {
            const lower = sortedTiers.filter((t) => compareTier(t, selectedTier) < 0).sort(compareTier);
            chosenTier = lower.length ? lower[lower.length - 1] : sortedTiers[0];
        }

        const candidates = versionsByTier.filter((v) => v._tier === chosenTier);
        candidates.sort((a, b) => (Number.isFinite(b._scoreValue) ? b._scoreValue : 0) - (Number.isFinite(a._scoreValue) ? a._scoreValue : 0));
        return candidates[0] || null;
    };

    const handleCopy = (qa: SampleAnswerData, index: number) => {
        const version = pickVersionForQA(qa);
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
            const version = pickVersionForQA(qa);
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

                    {hasSampleAnswers && availableTiers.length > 0 && (
                        <ScoreNavContainer>
                            <h4>范文档位：{formatTierLabel(selectedTier)}</h4>
                            <ScoreNavButtons>
                                <ScoreNavButton onClick={() => handleShowAnswers(selectedTier)}>
                                    查看{formatTierLabel(selectedTier)}范文
                                </ScoreNavButton>
                            </ScoreNavButtons>
                            {usingFallback && (
                                <ScoreHint>未找到 {formatTierLabel(tierToShow)} 范文，已展示 {formatTierLabel(selectedTier)} 版本。</ScoreHint>
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
                            <span>范文档位</span>
                            <strong>{formatTierLabel(selectedTier)}</strong>
                            {usingFallback ? (
                                <small>原配置 {formatTierLabel(tierToShow)} 无范文，已展示 {formatTierLabel(selectedTier)}。</small>
                            ) : (
                                <small>分段来自顶部选择。</small>
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
                        const version = pickVersionForQA(qa);
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
