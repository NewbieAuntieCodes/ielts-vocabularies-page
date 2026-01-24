import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

export const AnswersList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const QAWrapper = styled.div`
    animation: ${fadeIn} 0.4s ease-out;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`;

export const NoAnswerMessage = styled.p`
    color: ${({ theme }) => theme.colors.label};
    font-style: italic;
    margin: 0;
`;

export const AnswerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const CopyButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({ theme }) => theme.colors.boxBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    white-space: nowrap;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.header};
    }

    &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.placeText};
        border-color: ${({ theme }) => theme.colors.placeBg};
        background-color: ${({ theme }) => theme.colors.placeBg};

        svg {
            color: ${({ theme }) => theme.colors.placeText};
        }
    }
`;

export const ScoreSelector = styled.div`
    display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 1.5rem;
`;

export const ViewerTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const CopyAllButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({ theme }) => theme.colors.boxBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    white-space: nowrap;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.header};
    }

    &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.placeText};
        border-color: ${({ theme }) => theme.colors.placeBg};
        background-color: ${({ theme }) => theme.colors.placeBg};

        svg {
            color: ${({ theme }) => theme.colors.placeText};
        }
    }
`;

export const PinnedScore = styled.div<{ $warn?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.6rem 0.9rem;
    border-radius: 12px;
    background-color: ${({ theme, $warn }) => ($warn ? '#fff4e5' : theme.colors.boxBg)};
    border: 1px dashed ${({ theme, $warn }) => ($warn ? '#f2994a' : theme.colors.border)};
    color: ${({ theme }) => theme.colors.header};

    strong {
        font-size: 1rem;
    }
    small {
        color: ${({ theme }) => theme.colors.label};
    }
`;

export const ScoreButton = styled.button<{ $active: boolean }>`
    font-family: inherit; font-size: 0.9rem; font-weight: 600; padding: 0.5rem 1.2rem;
    border-radius: 9999px; border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme, $active }) => $active ? theme.colors.primaryOrange : 'transparent'};
    color: ${({ theme, $active }) => $active ? 'white' : theme.colors.label};
    cursor: pointer; transition: all 0.2s ease;
    &:hover {
        border-color: ${({ theme, $active }) => $active ? theme.colors.primaryOrange : theme.colors.header};
        color: ${({ theme, $active }) => $active ? 'white' : theme.colors.header};
    }
`;

export const AnswerQuestion = styled.p`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.header};
    margin: 0;
    line-height: 1.5;
    flex-grow: 1;
`;

export const WordPanel = styled.section`
    margin-top: 1rem;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
    overflow: hidden;
`;

export const WordPanelHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const WordPanelTitle = styled.h4`
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.header};
`;

export const WordPanelToggle = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({ theme }) => theme.colors.boxBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    padding: 0.35rem 0.75rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.header};
    }
`;

export const WordPanelBody = styled.div`
    padding: 1rem;
`;

export const WordCardsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;
