import React, { useState, useEffect, useMemo } from 'react';
import { SampleAnswerData } from '../../types';
import { CheckIcon, CopyIcon } from './Icons';
import AnalyzedText from './AnalyzedText';
import AnalysisDetailCard from './AnalysisDetailCard';
import { AnswerTier, compareTier, filterAllowedTiers, formatTierLabel, tierFromScore } from '../../utils/answerTiers';
import {
    AnswersList,
    QAWrapper,
    NoAnswerMessage,
    AnswerHeader,
    CopyButton,
    ScoreSelector,
    ScoreButton,
    PinnedScore,
    AnswerQuestion,
    ViewerTopBar,
    CopyAllButton,
    WordPanel,
    WordPanelHeader,
    WordPanelTitle,
    WordPanelToggle,
    WordPanelBody,
    WordCardsList,
} from './SampleAnswerViewer.styles';

interface SampleAnswerViewerProps {
    sampleAnswers: SampleAnswerData[];
    totalQuestions: number; // This prop is no longer used but kept for compatibility
    initialTier?: AnswerTier;
    lockedTier?: AnswerTier;
    questionNumbering?: (index: number, question: string) => string;
}

const SampleAnswerViewer: React.FC<SampleAnswerViewerProps> = ({
    sampleAnswers,
    initialTier = '3',
    lockedTier,
    questionNumbering
}) => {
    const [selectedTier, setSelectedTier] = useState<AnswerTier>(lockedTier || initialTier);
    const [copyStatus, setCopyStatus] = useState<{ [key: number]: 'idle' | 'copied' }>({});
    const [copyAllStatus, setCopyAllStatus] = useState<'idle' | 'copied'>('idle');
    const [wordPanelOpen, setWordPanelOpen] = useState<Record<number, boolean>>({});

    const hasSampleAnswers = sampleAnswers && sampleAnswers.length > 0;

    const availableTiers: AnswerTier[] = useMemo(() => {
        if (!hasSampleAnswers) return [];
        const all = sampleAnswers.flatMap((qa) => qa.versions.map((v) => tierFromScore(v.score)));
        return filterAllowedTiers(all);
    }, [hasSampleAnswers, sampleAnswers]);

    const availableTiersKey = availableTiers.join('|');

    useEffect(() => {
        const preferred = lockedTier || initialTier;
        const nextTier = availableTiers.includes(preferred)
            ? preferred
            : (availableTiers[availableTiers.length - 1] || preferred);
        setSelectedTier(nextTier);
    }, [lockedTier, initialTier, availableTiersKey]);
    
    useEffect(() => {
        setCopyStatus({});
        setWordPanelOpen({});
        setCopyAllStatus('idle');
    }, [selectedTier]);

    const currentTier = lockedTier
        ? (availableTiers.includes(lockedTier) ? lockedTier : selectedTier)
        : selectedTier;
    const isUsingFallback = !!lockedTier && !availableTiers.includes(lockedTier);

    const hasPerQuestionFallback = useMemo(() => {
        return sampleAnswers.some((qa) => !qa.versions.some((v) => tierFromScore(v.score) === currentTier));
    }, [currentTier, sampleAnswers]);

    const pickVersionForQA = (qa: SampleAnswerData) => {
        if (!qa.versions?.length) return null;

        const versionsByTier = qa.versions.map((v) => ({
            ...v,
            _tier: tierFromScore(v.score),
            _scoreValue: Number.parseFloat(v.score),
        }));

        const sortedTiers = [...new Set(versionsByTier.map((v) => v._tier))].sort(compareTier);
        const desiredIndex = sortedTiers.indexOf(currentTier);

        let chosenTier: AnswerTier | null = null;
        if (desiredIndex >= 0) {
            chosenTier = sortedTiers[desiredIndex];
        } else {
            // Prefer the closest lower tier; if none, pick the lowest available.
            const lower = sortedTiers.filter((t) => compareTier(t, currentTier) < 0).sort(compareTier);
            chosenTier = lower.length ? lower[lower.length - 1] : sortedTiers[0];
        }

        const candidates = versionsByTier.filter((v) => v._tier === chosenTier);
        candidates.sort((a, b) => (Number.isFinite(b._scoreValue) ? b._scoreValue : 0) - (Number.isFinite(a._scoreValue) ? a._scoreValue : 0));
        return candidates[0] || null;
    };

    const handleCopy = (qa: SampleAnswerData, index: number) => {
        const version = pickVersionForQA(qa);
        if (!version || !version.answer) return;
    
        const questionText = questionNumbering
            ? questionNumbering(index, qa.question)
            : `${index + 1}. ${qa.question}`;
    
        let answerText = '';
        const answerString = Array.isArray(version.answer) ? version.answer.join(' ') : version.answer;
    
        const preRegex = /(\((?:Point|Reason|Example|Contrast|Conclusion)\))/i;
        const hasPreMarkers = /\((?:Point|Reason|Example|Contrast|Conclusion)\)/i.test(answerString);
    
        if (hasPreMarkers) {
            const rawParts = answerString.split(preRegex);
            const structuredParts: { type: string, text: string }[] = [];
            let tempText = '';
            let tempType = 'Point';
    
            for (const rawPart of rawParts) {
                if (!rawPart) continue;
                const markerMatch = rawPart.match(preRegex);
                if (markerMatch) {
                    if (tempText.trim()) {
                        structuredParts.push({ type: tempType, text: tempText.trim().replace(/<[^>]+>/g, '') });
                    }
                    tempType = markerMatch[0].replace(/[()]/g, '');
                    tempText = '';
                } else {
                    tempText += rawPart;
                }
            }
            if (tempText.trim()) {
                structuredParts.push({ type: tempType, text: tempText.trim().replace(/<[^>]+>/g, '') });
            }
            answerText = structuredParts.map(part => `${part.type.charAt(0)}: ${part.text}`).join('\n\n');
        } else {
            const paragraphs = answerString.split(/<br\s*\/?>\s*<br\s*\/?>/gi);
            answerText = paragraphs.map(p => p.replace(/<[^>]+>/g, "").trim()).join('\n\n');
        }
    
        const textToCopy = `**${questionText}**\n\n${answerText}`;
    
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopyStatus(prev => ({ ...prev, [index]: 'copied' }));
            setTimeout(() => setCopyStatus(prev => ({ ...prev, [index]: 'idle' })), 2000);
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    };

    const handleCopyAll = () => {
        if (!hasSampleAnswers) return;

        const allText = sampleAnswers
            .map((qa, index) => {
                const version = pickVersionForQA(qa);
                if (!version || !version.answer) return '';

                const questionText = questionNumbering
                    ? questionNumbering(index, qa.question)
                    : `${index + 1}. ${qa.question}`;

                let answerText = '';
                const answerString = Array.isArray(version.answer) ? version.answer.join(' ') : version.answer;

                const preRegex = /(\((?:Point|Reason|Example|Contrast|Conclusion)\))/i;
                const hasPreMarkers = /\((?:Point|Reason|Example|Contrast|Conclusion)\)/i.test(answerString);

                if (hasPreMarkers) {
                    const rawParts = answerString.split(preRegex);
                    const structuredParts: { type: string; text: string }[] = [];
                    let tempText = '';
                    let tempType = 'Point';

                    for (const rawPart of rawParts) {
                        if (!rawPart) continue;
                        const markerMatch = rawPart.match(preRegex);
                        if (markerMatch) {
                            if (tempText.trim()) {
                                structuredParts.push({
                                    type: tempType,
                                    text: tempText.trim().replace(/<[^>]+>/g, ''),
                                });
                            }
                            tempType = markerMatch[0].replace(/[()]/g, '');
                            tempText = '';
                        } else {
                            tempText += rawPart;
                        }
                    }
                    if (tempText.trim()) {
                        structuredParts.push({
                            type: tempType,
                            text: tempText.trim().replace(/<[^>]+>/g, ''),
                        });
                    }
                    answerText = structuredParts.map((part) => `${part.type.charAt(0)}: ${part.text}`).join('\n\n');
                } else {
                    const paragraphs = answerString.split(/<br\s*\/?>\s*<br\s*\/?>/gi);
                    answerText = paragraphs.map((p) => p.replace(/<[^>]+>/g, '').trim()).join('\n\n');
                }

                return `**${questionText}**\n\n${answerText}`;
            })
            .filter(Boolean)
            .join('\n\n\n');

        if (!allText) return;

        navigator.clipboard.writeText(allText).then(() => {
            setCopyAllStatus('copied');
            setTimeout(() => setCopyAllStatus('idle'), 2000);
        }).catch(err => {
            console.error("Could not copy all text: ", err);
        });
    };
    
    if (!hasSampleAnswers) {
        return <p style={{ marginTop: '1rem', color: '#8899a6' }}>暂无范文解析。</p>;
    }

        return (
        <>
            <ViewerTopBar>
                <ScoreSelector>
                    {lockedTier ? (
                        <PinnedScore $warn={isUsingFallback}>
                            <div>范文档位</div>
                            <strong>{formatTierLabel(currentTier)}</strong>
                            {isUsingFallback && (
                                <small>原配置 {formatTierLabel(lockedTier)} 无对应范文，已使用可用档位。</small>
                            )}
                            {hasPerQuestionFallback && (
                                <small>部分小问无该档位范文，已自动使用更接近的版本。</small>
                            )}
                            {!isUsingFallback && !hasPerQuestionFallback && <small>如需切换，请在顶部「范文档位」修改。</small>}
                        </PinnedScore>
                    ) : (
                        availableTiers.map((tier) => (
                            <ScoreButton key={tier} $active={tier === currentTier} onClick={() => setSelectedTier(tier)}>
                                {formatTierLabel(tier)}
                            </ScoreButton>
                        ))
                    )}
                </ScoreSelector>

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
            </ViewerTopBar>

            <AnswersList>
                {sampleAnswers.map((qa, index) => {
                    const version = pickVersionForQA(qa);
                    if (!version) {
                        return (
                            <QAWrapper key={index}>
                                <AnswerHeader>
                                    <AnswerQuestion>
                                        {questionNumbering ? questionNumbering(index, qa.question) : `${index + 1}. ${qa.question}`}
                                    </AnswerQuestion>
                                </AnswerHeader>
                                <NoAnswerMessage>暂无范文解析。</NoAnswerMessage>
                            </QAWrapper>
                        );
                    }
                    const wordCards = version?.analysis
                        ? version.analysis.filter((item) => item.type === 'vocab' || item.type === 'phrase')
                        : [];
                    const isWordPanelOpen = !!wordPanelOpen[index];
                    return (
                        <QAWrapper key={index}>
                            <AnswerHeader>
                                <AnswerQuestion>
                                    {questionNumbering ? questionNumbering(index, qa.question) : `${index + 1}. ${qa.question}`}
                                </AnswerQuestion>
                                <CopyButton onClick={() => handleCopy(qa, index)} disabled={copyStatus[index] === 'copied'} aria-label="复制范文">
                                    {copyStatus[index] === 'copied' ? (
                                        <>
                                            <CheckIcon />
                                            <span>已复制</span>
                                        </>
                                    ) : (
                                        <>
                                            <CopyIcon />
                                            <span>复制</span>
                                        </>
                                    )}
                                </CopyButton>
                            </AnswerHeader>
                            {version ? (
                               <>
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
                               </>
                            ) : (
                               <NoAnswerMessage>暂无此分数段范文。</NoAnswerMessage>
                            )}
                        </QAWrapper>
                    );
                })}
            </AnswersList>
        </>
    );
};

export default SampleAnswerViewer;
