import React from 'react';
import { styled } from 'styled-components';
import { AnalysisData } from '../../types';
import { useVocabulary } from '../../context/VocabularyContext';
import { AddIcon, AnalysisIcon } from './Icons';

export const AnalysisDetailCard: React.FC<{ item: AnalysisData; }> = ({ item }) => {
    const { handleAddWord, cleanWord } = useVocabulary();
    const handleAddClick = () => {
        const wordToAdd = cleanWord(item.text);
        if (wordToAdd) {
            handleAddWord(wordToAdd);
        }
    };
    return (
        <AnalysisCardWrapper type={item.type}>
            <AnalysisCardHeader>
                <AnalysisIcon type={item.type} />
                <AnalysisCardText>{item.text}</AnalysisCardText>
                {(item.type === 'vocab' || item.type === 'phrase') && (
                    <AddButton onClick={handleAddClick} aria-label={`添加到单词本 ${item.text}`}>
                        <AddIcon />
                    </AddButton>
                )}
            </AnalysisCardHeader>
            <AnalysisCardExplanation>{item.explanation}</AnalysisCardExplanation>
        </AnalysisCardWrapper>
    );
};

const AnalysisCardWrapper = styled.div<{ type: AnalysisData['type'] }>`
    background-color: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-left: 4px solid ${({ theme, type }) => theme.colors[`analysis${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof typeof theme.colors]};
    border-radius: 8px;
    padding: 0.75rem 1rem;
`;

const AnalysisCardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
`;

const AnalysisCardText = styled.div`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.header};
    font-size: 1rem;
`;

const AnalysisCardExplanation = styled.div`
    font-size: 0.95rem;
    color: #34495e;
    line-height: 1.6;
    padding-left: calc(20px + 0.75rem);
    white-space: pre-line;
    word-break: break-word;
`;

const AddButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: auto;
    padding: 0.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.label};
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.highlightBg};
        color: ${({ theme }) => theme.colors.primaryBlue};
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;

export const AnalysisDetailsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default AnalysisDetailCard;
