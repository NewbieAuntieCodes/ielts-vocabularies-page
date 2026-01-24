import React, { useState, useEffect, useMemo } from 'react';
import { SampleAnswerData } from '../../types';
import { CheckIcon, CopyIcon } from './Icons';
import AnalyzedText from './AnalyzedText';
import AnalysisDetailCard from './AnalysisDetailCard';
import { filterAllowedBands } from '../../utils/scoreBands';
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
    initialScore?: string;
    lockedScore?: string;
    questionNumbering?: (index: number, question: string) => string;
}

const SampleAnswerViewer: React.FC<SampleAnswerViewerProps> = ({
    sampleAnswers,
    initialScore = '6.5',
    lockedScore,
    questionNumbering
}) => {
    const [selectedScore, setSelectedScore] = useState(lockedScore || initialScore);
    const [copyStatus, setCopyStatus] = useState<{ [key: number]: 'idle' | 'copied' }>({});
    const [copyAllStatus, setCopyAllStatus] = useState<'idle' | 'copied'>('idle');
    const [wordPanelOpen, setWordPanelOpen] = useState<Record<number, boolean>>({});

    const hasSampleAnswers = sampleAnswers && sampleAnswers.length > 0;

    const availableScores: string[] = useMemo(() => {
        if (!hasSampleAnswers) return [];
        const all = sampleAnswers.flatMap(qa => qa.versions.map(v => v.score));
        return filterAllowedBands(all);
    }, [hasSampleAnswers, sampleAnswers]);

    const availableScoresKey = availableScores.join('|');

    useEffect(() => {
        const preferred = lockedScore || initialScore;
        const nextScore = availableScores.includes(preferred)
            ? preferred
            : (availableScores[0] || preferred);
        setSelectedScore(nextScore);
    }, [lockedScore, initialScore, availableScoresKey]);
    
    useEffect(() => {
        setCopyStatus({});
        setWordPanelOpen({});
        setCopyAllStatus('idle');
    }, [selectedScore]);

    const currentScore = lockedScore
        ? (availableScores.includes(lockedScore) ? lockedScore : selectedScore)
        : selectedScore;
    const isUsingFallback = !!lockedScore && !availableScores.includes(lockedScore);

    const handleCopy = (qa: SampleAnswerData, index: number) => {
        const version = qa.versions.find(v => v.score === currentScore);
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
                const version = qa.versions.find((v) => v.score === currentScore);
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
                    {lockedScore ? (
                        <PinnedScore $warn={isUsingFallback}>
                            <div>范文分段</div>
                            <strong>{currentScore} 分</strong>
                            {isUsingFallback && (
                                <small>原配置 {lockedScore} 无对应范文，已使用可用分段。</small>
                            )}
                            {!isUsingFallback && <small>如需切换，请在顶部学生栏修改分段。</small>}
                        </PinnedScore>
                    ) : (
                        availableScores.map(score => (
                            <ScoreButton key={score} $active={score === currentScore} onClick={() => setSelectedScore(score)}>
                                {score}分
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
                    const version = qa.versions.find(v => v.score === currentScore);
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
