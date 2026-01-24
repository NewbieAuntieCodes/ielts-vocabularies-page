import { styled, keyframes } from 'styled-components';

const slideIn = keyframes`from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;
const slideInMobile = keyframes`from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;
const fadeInItem = keyframes`from { opacity: 0; } to { opacity: 1; }`;

export const ModalContainerP1 = styled.div`
    background-color: #f0f3f8;
    border-radius: 24px;
    width: 90%;
    max-width: 800px;
    height: 90vh;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: ${slideIn} 0.3s ease-out;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        max-width: 100vw;
        height: 100%;
        max-height: 100vh;
        border-radius: 0;
        animation: ${slideInMobile} 0.35s ease-out;
    }
`;

export const ModalHeaderP1 = styled.header`
    background: linear-gradient(135deg, #4a90e2, #2e6ab8);
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 1rem;
    .modal-header-content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex-grow: 1;
        min-width: 0;
    }
    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1rem;
        gap: 0.75rem;
        h2 { font-size: 1.25rem; }
    }
`;

export const ModalBackButtonP1 = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    margin: -0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg { 
        display: block; 
        width: 28px;
        height: 28px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        opacity: 1;
    }
`;

export const ModalHeaderTag = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.8;
`;

export const ModalNewTagP1 = styled.span`
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    align-self: flex-start;
    margin-left: auto;
    flex-shrink: 0;
`;

export const ModalCloseButtonP1 = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    margin: -0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
    opacity: 0.8;
    svg { display: block; }
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        opacity: 1;
    }
`;

export const ModalContentP1 = styled.main`
    padding: 1.5rem;
    overflow-y: auto;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.cardBg};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1rem;
    }
`;

export const QuestionsSectionP1 = styled.section`
    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        padding-left: 0.5rem;
        border-left: 4px solid ${({ theme }) => theme.colors.primaryBlue};
    }
    ol { margin: 0; padding-left: 1.5rem; }
    li { margin-bottom: 0.75rem; line-height: 1.6; color: ${({ theme }) => theme.colors.text}; }
`;

export const ModalFooterP1 = styled.footer`
    padding: 0.75rem 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    flex-shrink: 0;
    background-color: #f0f3f8;
    text-align: center;
`;

export const SupplementaryAction = styled.button`
  background: none; border: none; color: #1da1f2; font-weight: 600;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

export const ScoreNavContainer = styled.div`
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    text-align: center;
    h4 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.label};
    }
`;

export const ScoreHint = styled.p`
    margin: 0.75rem 0 0;
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.95rem;
`;

export const ScoreNavButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const ScoreNavButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

    &:hover {
        background-color: #e88f33;
        transform: translateY(-2px);
    }
`;

export const ScoreSelector = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 1.5rem;
`;

export const ScoreButtonsWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

export const ScoreBadge = styled.div<{ $warn?: boolean }>`
    display: inline-flex;
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

export const AnswersList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const QAWrapper = styled.div`
    animation: ${fadeInItem} 0.4s ease-out;
`;

export const AnswerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
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

export const CopyButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: transparent;
    border: none;
    border-radius: 9999px;
    padding: 0.3rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover:not(:disabled) {
        color: ${({ theme }) => theme.colors.header};
        background-color: ${({ theme }) => theme.colors.boxBg};
    }

    &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.placeText};
    }
`;
