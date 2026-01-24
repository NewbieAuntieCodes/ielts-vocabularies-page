import React from 'react';
import { styled } from 'styled-components';
import { AnalysisData } from '../../types';

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const AnalyzedText: React.FC<{ answer: string | string[]; analysis: AnalysisData[] }> = ({ answer, analysis }) => {
    const analysisMap = new Map<string, AnalysisData>();
    if (analysis && analysis.length > 0) {
        analysis.forEach(item => analysisMap.set(item.text, item));
    }

    const renderParagraphContent = (paragraph: string) => {
        if (!analysis || analysis.length === 0) {
            return <>{paragraph}</>;
        }
        
        const regex = new RegExp(`(${analysis.map(item => escapeRegExp(item.text)).join('|')})`, 'g');
        const parts = paragraph.split(regex).filter(part => part);
        
        return parts.map((part, index) => {
            const analysisItem = analysisMap.get(part);
            if (analysisItem) {
                return <Highlight key={index} type={analysisItem.type}>{part}</Highlight>;
            }
            return <span key={index}>{part}</span>;
        });
    };
    
    const answerString = Array.isArray(answer) ? answer.join('<br/><br/>') : answer;
    const preRegex = /(\((?:Point|Reason|Example|Contrast|Conclusion)\))/i;
    const hasPreMarkers = /\((?:Point|Reason|Example|Contrast|Conclusion)\)/i.test(answerString);

    if (hasPreMarkers) {
        const rawParts = answerString.split(preRegex);
        const structuredParts: { type: string; text: string }[] = [];
        let tempText = '';
        let tempType = 'point'; // Default for any text before the first marker

        for (const rawPart of rawParts) {
            if (!rawPart) continue;

            const markerMatch = rawPart.match(preRegex);
            if (markerMatch) {
                // We found a marker. The text accumulated so far belongs to the previous type.
                if (tempText.trim()) {
                    structuredParts.push({ type: tempType, text: tempText.trim() });
                }
                // Update the type for the next block of text.
                tempType = markerMatch[0].replace(/[()]/g, '').toLowerCase();
                tempText = ''; // Reset text
            } else {
                // This is a text part. Accumulate it.
                tempText += rawPart;
            }
        }
        // Add the last part
        if (tempText.trim()) {
            structuredParts.push({ type: tempType, text: tempText.trim() });
        }
        
        if (structuredParts.length > 0) {
            return (
                <AnalyzedAnswerContainer>
                    {structuredParts.map((part, index) => (
                        <p key={index}>
                            <PREInitial type={part.type}>{part.type.charAt(0).toUpperCase()}:</PREInitial>
                            {renderParagraphContent(part.text)}
                        </p>
                    ))}
                </AnalyzedAnswerContainer>
            );
        }
    }
    
    // Fallback for regular text (with or without <br> tags)
    const paragraphs: string[] = (Array.isArray(answer)
        ? answer
        : answer.split(/<br\s*\/?>\s*<br\s*\/?>/gi))
        .map(p => p.trim()).filter(Boolean);

    return (
        <AnalyzedAnswerContainer>
            {paragraphs.map((p, i) => <p key={i}>{renderParagraphContent(p)}</p>)}
        </AnalyzedAnswerContainer>
    );
};

export const Highlight = styled.span<{ type: AnalysisData['type'] }>`
    background-color: ${({ theme, type }) => theme.colors[`analysis${type.charAt(0).toUpperCase() + type.slice(1)}Bg` as keyof typeof theme.colors]};
    border-bottom: 2px solid ${({ theme, type }) => theme.colors[`analysis${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof typeof theme.colors]};
    border-radius: 3px 3px 0 0;
    padding: 0.1em 0.2em;
    font-weight: 500;
`;

const AnalyzedAnswerContainer = styled.div`
    line-height: 1.8;
    color: #34495e;

    p {
        margin: 0 0 1em 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const PREInitial = styled.span<{ type: string }>`
    font-weight: 700;
    color: ${({ theme, type }) => theme.colors[type as keyof typeof theme.colors] || theme.colors.point};
    margin-right: 0.5em;
`;

export default AnalyzedText;