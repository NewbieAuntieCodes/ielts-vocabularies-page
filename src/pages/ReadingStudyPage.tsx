import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { BackArrowIcon, CheckIcon, CopyIcon } from '../components/shared/Icons';
import {
    C11_T1_P1_CONTENT,
    C12_T1_P1_CONTENT,
    C11_READING_P1_VOCAB,
    C12_READING_P1_VOCAB,
    VocabItem,
} from '../data/reading-study';

type PassageId = 'C11-T1-P1' | 'C12-T1-P1';

const PASSAGES: Record<PassageId, {
    id: PassageId;
    title: string;
    contentHtml: string;
    vocab: VocabItem[];
}> = {
    'C11-T1-P1': {
        id: 'C11-T1-P1',
        title: 'Cambridge 11 · Test 1 · Passage 1',
        contentHtml: C11_T1_P1_CONTENT,
        vocab: C11_READING_P1_VOCAB,
    },
    'C12-T1-P1': {
        id: 'C12-T1-P1',
        title: 'Cambridge 12 · Test 1 · Passage 1',
        contentHtml: C12_T1_P1_CONTENT,
        vocab: C12_READING_P1_VOCAB,
    },
};

const ReadingStudyPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [copiedKey, setCopiedKey] = useState<string | null>(null);

    const passageId = (searchParams.get('id') as PassageId) || 'C11-T1-P1';
    const passage = PASSAGES[passageId] ?? PASSAGES['C11-T1-P1'];

    const vocabText = useMemo(() => {
        return passage.vocab.map((v) => {
            const meaning = v.explanation ? `${v.meaning}；${v.explanation}` : v.meaning;
            const example = (v.examples && v.examples.length > 0) ? `\n  e.g. ${v.examples[0]}` : '';
            return `- ${v.phrase}\n  ${meaning}${example}`;
        }).join('\n');
    }, [passage.vocab]);

    const handleCopy = async (text: string, key: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);
            window.setTimeout(() => setCopiedKey((prev) => (prev === key ? null : prev)), 1200);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopiedKey(key);
            window.setTimeout(() => setCopiedKey((prev) => (prev === key ? null : prev)), 1200);
        }
    };

    return (
        <PageContainer>
            <PageHeader>
                <BackButton
                    onClick={() => navigate({ pathname: '/reading', search: location.search })}
                    aria-label="返回阅读"
                >
                    <BackArrowIcon />
                    <span>返回</span>
                </BackButton>
                <h1>阅读原文（内容库）</h1>
            </PageHeader>

            <Controls>
                <label>
                    <span>选择文章</span>
                    <Select
                        value={passage.id}
                        onChange={(e) => {
                            const next = new URLSearchParams(searchParams);
                            next.set('id', e.target.value);
                            setSearchParams(next, { replace: true });
                        }}
                    >
                        {Object.values(PASSAGES).map((p) => (
                            <option key={p.id} value={p.id}>{p.title}</option>
                        ))}
                    </Select>
                </label>
                <div className="spacer" />
                <ActionButton type="button" onClick={() => handleCopy(vocabText, 'copy-vocab')}>
                    <IconWrap>{copiedKey === 'copy-vocab' ? <CheckIcon /> : <CopyIcon />}</IconWrap>
                    复制词汇
                </ActionButton>
            </Controls>

            <Grid>
                <Panel>
                    <PanelHeader>
                        <h3>{passage.title}</h3>
                        <span>Passage</span>
                    </PanelHeader>
                    <PassageContent dangerouslySetInnerHTML={{ __html: passage.contentHtml }} />
                </Panel>

                <Panel>
                    <PanelHeader>
                        <h3>Vocabulary</h3>
                        <span>{passage.vocab.length} 条</span>
                    </PanelHeader>
                    <VocabList>
                        {passage.vocab.map((v) => (
                            <VocabCard key={`${passage.id}:${v.phrase}`}>
                                <VocabTitle>{v.phrase}</VocabTitle>
                                <VocabMeaning>
                                    {v.meaning}
                                    {v.explanation ? `；${v.explanation}` : ''}
                                </VocabMeaning>
                                {v.examples && v.examples.length > 0 && (
                                    <VocabExample>{v.examples[0]}</VocabExample>
                                )}
                            </VocabCard>
                        ))}
                    </VocabList>
                </Panel>
            </Grid>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`;

const PageHeader = styled.header`
    position: relative;
    text-align: center;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.header};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        h1 {
            font-size: 1.4rem;
            margin: 0 3.5rem;
        }
    }
`;

const BackButton = styled.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.boxBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.header};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0.6rem;
        gap: 0;
        span {
            display: none;
        }
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 1.25rem;
    border-radius: 18px;
    background-color: ${({ theme }) => theme.colors.boxBg};
    padding: 0.85rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};

    label {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        span {
            font-size: 0.85rem;
            font-weight: 800;
            color: ${({ theme }) => theme.colors.label};
        }
    }

    .spacer {
        flex: 1;
    }
`;

const Select = styled.select`
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 0.55rem 0.75rem;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.header};
    outline: none;
`;

const ActionButton = styled.button`
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 800;
    padding: 0.6rem 0.9rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.label};
    display: flex;
    align-items: center;
    gap: 0.4rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.header};
    }
`;

const IconWrap = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 18px;
        height: 18px;
    }
`;

const Grid = styled.main`
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 1rem;
    align-items: start;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;

const Panel = styled.section`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 20px;
    box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};
    overflow: hidden;
`;

const PanelHeader = styled.header`
    padding: 0.9rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.header};
    }

    span {
        font-size: 0.85rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.label};
    }
`;

const PassageContent = styled.div`
    padding: 1rem 1.1rem 1.2rem 1.1rem;
    color: ${({ theme }) => theme.colors.header};
    line-height: 1.75;

    h2 {
        margin: 0 0 0.75rem 0;
        font-size: 1.4rem;
        font-weight: 900;
    }

    p {
        margin: 0 0 0.9rem 0;
        color: ${({ theme }) => theme.colors.label};
        font-size: 1rem;
    }
`;

const VocabList = styled.div`
    padding: 0.85rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const VocabCard = styled.div`
    background-color: ${({ theme }) => theme.colors.boxBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    padding: 0.75rem 0.85rem;
`;

const VocabTitle = styled.div`
    font-size: 1rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.header};
`;

const VocabMeaning = styled.div`
    margin-top: 0.25rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.label};
    line-height: 1.55;
`;

const VocabExample = styled.div`
    margin-top: 0.35rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.label};
    opacity: 0.9;
    line-height: 1.5;
`;

export default ReadingStudyPage;

