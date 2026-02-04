import React, { useState, useEffect, useMemo } from 'react';
import { SampleAnswerData } from '../../types';
import { CheckIcon, CopyIcon, PrevIcon, NextIcon } from './Icons';
import AnalyzedText from './AnalyzedText';
import { AnswerTier, compareTier, filterAllowedTiers, formatTierLabel, tierFromScore } from '../../utils/answerTiers';
import {
    AnswersList,
    QAWrapper,
    NoAnswerMessage,
    AnswerHeader,
    AnswerActions,
    CopyButton,
    ScoreSelector,
    ScoreButton,
    PinnedScore,
    AnswerQuestion,
    ViewerTopBar,
    CopyAllButton,
    VersionNav,
    VersionNavButton,
    VersionNavLabel,
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
    const [variantIndexByQuestion, setVariantIndexByQuestion] = useState<Record<number, number>>({});

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
        setCopyAllStatus('idle');
        setVariantIndexByQuestion({});
    }, [selectedTier]);

    const currentTier = lockedTier
        ? (availableTiers.includes(lockedTier) ? lockedTier : selectedTier)
        : selectedTier;
    const isUsingFallback = !!lockedTier && !availableTiers.includes(lockedTier);

    const hasPerQuestionFallback = useMemo(() => {
        return sampleAnswers.some((qa) => !qa.versions.some((v) => tierFromScore(v.score) === currentTier));
    }, [currentTier, sampleAnswers]);

    const pickVersionForQA = (qa: SampleAnswerData, qaIndex: number) => {
        if (!qa.versions?.length) return null;

        const versionsByTier = qa.versions.map((v, originalIndex) => ({
            ...v,
            _tier: tierFromScore(v.score),
            _scoreValue: Number.parseFloat(v.score),
            _originalIndex: originalIndex,
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

        const candidates = versionsByTier
            .filter((v) => v._tier === chosenTier)
            .slice()
            .sort((a, b) => {
                const aScore = Number.isFinite(a._scoreValue) ? a._scoreValue : 0;
                const bScore = Number.isFinite(b._scoreValue) ? b._scoreValue : 0;
                if (bScore !== aScore) return bScore - aScore;
                return a._originalIndex - b._originalIndex;
            });

        if (!candidates.length) return null;

        const desiredVariantIndex = variantIndexByQuestion[qaIndex] || 0;
        const safeIndex = ((desiredVariantIndex % candidates.length) + candidates.length) % candidates.length;
        return candidates[safeIndex] || candidates[0] || null;
    };

    const handleCopy = (qa: SampleAnswerData, index: number) => {
        const version = pickVersionForQA(qa, index);
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
                const version = pickVersionForQA(qa, index);
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
                    const version = pickVersionForQA(qa, index);
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

                    const candidatesForTier = qa.versions
                        .map((v, originalIndex) => ({
                            ...v,
                            _tier: tierFromScore(v.score),
                            _scoreValue: Number.parseFloat(v.score),
                            _originalIndex: originalIndex,
                        }))
                        .filter((v) => v._tier === tierFromScore(version.score))
                        .sort((a, b) => {
                            const aScore = Number.isFinite(a._scoreValue) ? a._scoreValue : 0;
                            const bScore = Number.isFinite(b._scoreValue) ? b._scoreValue : 0;
                            if (bScore !== aScore) return bScore - aScore;
                            return a._originalIndex - b._originalIndex;
                        });

                    const variantCount = candidatesForTier.length;
                    const activeVariantIndex = variantCount
                        ? ((variantIndexByQuestion[index] || 0) % variantCount + variantCount) % variantCount
                        : 0;

                    return (
                        <QAWrapper key={index}>
                            <AnswerHeader>
                                <AnswerQuestion>
                                    {questionNumbering ? questionNumbering(index, qa.question) : `${index + 1}. ${qa.question}`}
                                </AnswerQuestion>
                                <AnswerActions>
                                    {variantCount > 1 && (
                                        <VersionNav aria-label="范文版本切换">
                                            <VersionNavButton
                                                type="button"
                                                onClick={() =>
                                                    setVariantIndexByQuestion((prev) => ({
                                                        ...prev,
                                                        [index]: activeVariantIndex - 1,
                                                    }))
                                                }
                                                aria-label="上一版本"
                                            >
                                                <PrevIcon />
                                            </VersionNavButton>
                                            <VersionNavLabel>
                                                版本 {activeVariantIndex + 1}/{variantCount}
                                            </VersionNavLabel>
                                            <VersionNavButton
                                                type="button"
                                                onClick={() =>
                                                    setVariantIndexByQuestion((prev) => ({
                                                        ...prev,
                                                        [index]: activeVariantIndex + 1,
                                                    }))
                                                }
                                                aria-label="下一版本"
                                            >
                                                <NextIcon />
                                            </VersionNavButton>
                                        </VersionNav>
                                    )}
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
                                </AnswerActions>
                            </AnswerHeader>
                            {version ? (
                               <>
                                   <AnalyzedText answer={version.answer} analysis={version.analysis || []} />
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
