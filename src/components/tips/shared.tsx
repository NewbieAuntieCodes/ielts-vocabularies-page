import React from 'react';
import { styled } from 'styled-components';
import { PromptIcon, LightbulbIcon } from '../shared/Icons';

// --- DATA & CONFIG ---

export interface AnswerPart {
    type: string;
    text: string;
}

export const highlightColors: { [key: string]: { bg: string, text: string } } = {
    who: { bg: 'rgba(26, 188, 156, 0.2)', text: '#117a65' },
    what: { bg: 'rgba(52, 152, 219, 0.2)', text: '#1d6a9f' },
    where: { bg: 'rgba(46, 204, 113, 0.2)', text: '#18894b' },
    when: { bg: 'rgba(243, 156, 18, 0.2)', text: '#b47a00' },
    why: { bg: 'rgba(155, 89, 182, 0.2)', text: '#6d3a82' },
    whyNot: { bg: 'rgba(231, 76, 60, 0.2)', text: '#a43328' },
    how: { bg: 'rgba(230, 126, 34, 0.2)', text: '#a05716' },
    point: { bg: 'rgba(52, 152, 219, 0.2)', text: '#1d6a9f' },
    reason: { bg: 'rgba(230, 126, 34, 0.2)', text: '#a05716' },
    example: { bg: 'rgba(39, 174, 96, 0.2)', text: '#1e8449' },
    introduction: { bg: 'rgba(52, 152, 219, 0.2)', text: '#1d6a9f' },
    body1: { bg: 'rgba(230, 126, 34, 0.2)', text: '#a05716' },
    body2: { bg: 'rgba(39, 174, 96, 0.2)', text: '#1e8449' },
    conclusion: { bg: 'rgba(155, 89, 182, 0.2)', text: '#6d3a82' },
};

export const idToPromptType: {[key: string]: string} = {
    what: 'what', where: 'where', when: 'when',
    why: 'why', 'why-not': 'whyNot', how: 'how', who: 'who',
    point: 'point', point2: 'point', reason: 'reason', example: 'example'
};

// --- REUSABLE COMPONENTS ---

interface Prompt {
    id: string;
    title: string;
    text: string;
    keywords: string[];
}

export const PromptCard: React.FC<{prompt: Prompt}> = ({ prompt }) => (
    <PromptCardV2 type={idToPromptType[prompt.id]}>
        <PromptHeader>
            <PromptIcon type={prompt.id} />
            <strong>{prompt.title}</strong>
        </PromptHeader>
        <p>{prompt.text}</p>
        <PromptKeywords>
            {prompt.keywords.map(kw => <code key={kw}>{kw}</code>)}
        </PromptKeywords>
    </PromptCardV2>
);

// --- SHARED STYLED COMPONENTS ---

export const IntroSection = styled.section`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryBlue}, #2e6ab8);
    color: white;
    padding: 2rem;
    border-radius: 16px;
    margin-bottom: 2.5rem;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);

    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.75rem;
        font-weight: 700;
    }
    p {
        margin: 0;
        font-size: 1.1rem;
        opacity: 0.9;
        line-height: 1.7;
        max-width: 80ch;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1.5rem;
        h3 { font-size: 1.5rem; }
        p { font-size: 1rem; }
    }
`;

export const GuideContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1.5rem;
    }
`;

export const StepHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const StepNumber = styled.span`
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.25rem;
    flex-shrink: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 32px; height: 32px; font-size: 1rem;
    }
`;

export const StepTitle = styled.h4`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.header};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.25rem;
    }
`;

export const FlowQuestion = styled.p`
    background-color: ${({ theme }) => theme.colors.boxBg};
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.header};
    margin: 1rem 0 0 0;
    border-left: 5px solid ${({ theme }) => theme.colors.primaryBlue};
`;

export const StepDescription = styled.p`
    color: ${({ theme }) => theme.colors.label};
    font-size: 1.1rem;
    margin: 0 0 1.5rem 0;
    padding-left: calc(40px + 1rem);
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-left: 0;
        font-size: 1rem;
    }
`;

export const StepDivider = styled.hr`
    border: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
    margin: 2.5rem 0;
`;

export const PromptsGridV2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: calc(40px + 1rem);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-left: 0;
    }
`;

const PromptCardV2 = styled.div<{ type: string }>`
    background-color: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-left-width: 5px;
    border-radius: 12px;
    padding: 1rem;
    border-left-color: ${({ theme, type }) => theme.colors[type as keyof typeof theme.colors] || theme.colors.what};

    svg {
      color: ${({ theme, type }) => theme.colors[type as keyof typeof theme.colors] || theme.colors.what};
    }
`;

const PromptHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    svg {
        width: 20px;
        height: 20px;
    }
    strong {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.header};
        font-size: 1.1rem;
    }
`;

const PromptKeywords = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    code {
        background-color: ${({ theme }) => theme.colors.cardBg};
        border-radius: 6px;
        padding: 0.3rem 0.7rem;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.text};
        border: 1px solid ${({ theme }) => theme.colors.border};
    }
`;

export const FinalAnswerBox = styled.div`
    background-color: ${({ theme }) => theme.colors.highlightBg};
    padding: 1.5rem;
    border-radius: 12px;
    line-height: 1.8;
    color: #34495e;
    font-size: 1.1rem;
    margin-top: 1.5rem;

    p {
        margin: 0 0 1em 0;
        &:last-child {
            margin-bottom: 0;
        }
    }

     @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

export const Highlight = styled.span<{ type: string }>`
    background-color: ${({ type }) => highlightColors[idToPromptType[type] || type]?.bg || 'transparent'};
    font-weight: 500;
    color: ${({ type }) => highlightColors[idToPromptType[type] || type]?.text || 'inherit'};
    border-radius: 3px;
    padding: 0.1em 0;
`;

export const AnswerLegend = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
    padding-left: 1rem;
`;

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
`;

export const LegendColorBox = styled.span<{ type: string }>`
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: ${({ type }) => highlightColors[idToPromptType[type] || type]?.bg?.replace('0.2', '0.4') || 'transparent'};
`;

export const ImportantNote = styled.section`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-left: 4px solid ${({ theme }) => theme.colors.primaryOrange};
    border-radius: 16px;
    padding: 1.5rem;
    margin: 2.5rem auto 0 auto;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};

    svg {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        color: ${({ theme }) => theme.colors.primaryOrange};
        margin-top: 3px;
    }

    p {
        margin: 0;
        line-height: 1.7;
        color: ${({ theme }) => theme.colors.text};
        font-size: 1rem;

        strong {
            font-weight: 600;
            color: ${({ theme }) => theme.colors.header};
        }
    }
`;
