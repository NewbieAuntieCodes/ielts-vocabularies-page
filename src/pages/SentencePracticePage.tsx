import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackArrowIcon, CheckIcon, CopyIcon } from '../components/shared/Icons';
import { travelSentencePractice } from '../data/sentence-structures/travel';
import { SentencePracticeItem, SentencePracticeSection } from '../data/sentence-structures/types';

const SentencePracticePage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showChinese, setShowChinese] = useState(true);
    const [showNotes, setShowNotes] = useState(true);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleBack = () => {
        navigate({ pathname: '/speaking', search: location.search });
    };

    const handleCopy = async (text: string, id: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            window.setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 1200);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopiedId(id);
            window.setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 1200);
        }
    };

    const allText = useMemo(() => {
        const lines: string[] = [];
        lines.push(travelSentencePractice.title);
        if (travelSentencePractice.subtitle) lines.push(travelSentencePractice.subtitle);
        lines.push('');
        for (const section of travelSentencePractice.sections) {
            lines.push(section.title);
            if (section.description) lines.push(section.description);
            for (const item of section.items) {
                lines.push(`- ${item.en}`);
                if (showChinese && item.zh) lines.push(`  ${item.zh}`);
                if (showNotes && item.note) lines.push(`  Note: ${item.note}`);
            }
            lines.push('');
        }
        return lines.join('\n').trim();
    }, [showChinese, showNotes]);

    return (
        <PageContainer>
            <PageHeader>
                <BackButton onClick={handleBack} aria-label="返回口语主页">
                    <BackArrowIcon />
                    <span>返回</span>
                </BackButton>
                <h1>{travelSentencePractice.title}</h1>
            </PageHeader>

            {travelSentencePractice.subtitle && (
                <Subtitle>{travelSentencePractice.subtitle}</Subtitle>
            )}

            <Toolbar aria-label="练习工具栏">
                <ToggleButton
                    type="button"
                    $active={showChinese}
                    onClick={() => setShowChinese((v) => !v)}
                >
                    {showChinese ? '中文提示：开' : '中文提示：关'}
                </ToggleButton>
                <ToggleButton
                    type="button"
                    $active={showNotes}
                    onClick={() => setShowNotes((v) => !v)}
                >
                    {showNotes ? '备注：开' : '备注：关'}
                </ToggleButton>
                <Spacer />
                <ActionButton
                    type="button"
                    onClick={() => handleCopy(allText, 'copy-all')}
                >
                    <IconWrap>{copiedId === 'copy-all' ? <CheckIcon /> : <CopyIcon />}</IconWrap>
                    复制全部
                </ActionButton>
            </Toolbar>

            <Sections>
                {travelSentencePractice.sections.map((section) => (
                    <SectionCard key={section.id}>
                        <SectionHeader>
                            <h2>{section.title}</h2>
                            {section.description && <p>{section.description}</p>}
                        </SectionHeader>
                        <ItemList>
                            {section.items.map((item) => (
                                <SentenceItemRow
                                    key={item.id}
                                    item={item}
                                    section={section}
                                    showChinese={showChinese}
                                    showNotes={showNotes}
                                    copiedId={copiedId}
                                    onCopy={(text) => handleCopy(text, `${section.id}:${item.id}`)}
                                />
                            ))}
                        </ItemList>
                    </SectionCard>
                ))}
            </Sections>
        </PageContainer>
    );
};

const SentenceItemRow: React.FC<{
    item: SentencePracticeItem;
    section: SentencePracticeSection;
    showChinese: boolean;
    showNotes: boolean;
    copiedId: string | null;
    onCopy: (text: string) => void;
}> = ({ item, section, showChinese, showNotes, copiedId, onCopy }) => {
    const id = `${section.id}:${item.id}`;
    const copyText = [
        item.en,
        showChinese && item.zh ? item.zh : null,
        showNotes && item.note ? `Note: ${item.note}` : null,
    ].filter(Boolean).join('\n');

    return (
        <Item>
            <ItemMain>
                <EnText>{item.en}</EnText>
                {showChinese && item.zh && <ZhText>{item.zh}</ZhText>}
                {showNotes && item.note && <NoteText>{item.note}</NoteText>}
            </ItemMain>
            <CopyButton type="button" onClick={() => onCopy(copyText)} aria-label="复制该条句型">
                <IconWrap>{copiedId === id ? <CheckIcon /> : <CopyIcon />}</IconWrap>
            </CopyButton>
        </Item>
    );
};

const PageContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`;

const PageHeader = styled.header`
    position: relative;
    text-align: center;
    margin-bottom: 1rem;
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

const Subtitle = styled.p`
    margin: 0 0 1.75rem 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.label};
    line-height: 1.6;
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

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.boxBg};
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Spacer = styled.div`
    flex: 1;
`;

const ToggleButton = styled.button<{ $active?: boolean }>`
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 0.65rem 0.9rem;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${({ $active, theme }) => $active ? theme.colors.primaryBlue : 'transparent'};
    color: ${({ $active, theme }) => $active ? 'white' : theme.colors.label};

    &:hover:not(:disabled) {
        color: ${({ $active, theme }) => $active ? 'white' : theme.colors.header};
    }
`;

const ActionButton = styled.button`
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 0.65rem 0.9rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 999px;
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

const Sections = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SectionCard = styled.section`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};
    padding: 1.25rem 1.25rem;
`;

const SectionHeader = styled.header`
    margin-bottom: 0.75rem;

    h2 {
        margin: 0 0 0.25rem 0;
        font-size: 1.2rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.header};
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.label};
        line-height: 1.6;
    }
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const Item = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    padding: 0.75rem 0.75rem;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.boxBg};
`;

const ItemMain = styled.div`
    flex: 1;
    min-width: 0;
`;

const EnText = styled.div`
    font-size: 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.header};
    line-height: 1.55;
`;

const ZhText = styled.div`
    margin-top: 0.3rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.label};
    line-height: 1.55;
`;

const NoteText = styled.div`
    margin-top: 0.3rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.label};
    opacity: 0.85;
    line-height: 1.5;
`;

const CopyButton = styled.button`
    flex-shrink: 0;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    cursor: pointer;
    padding: 0.55rem;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.label};
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.06);
        color: ${({ theme }) => theme.colors.header};
    }
`;

export default SentencePracticePage;

