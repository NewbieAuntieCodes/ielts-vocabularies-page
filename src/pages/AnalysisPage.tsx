
import React, { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BackArrowIcon } from '../components/shared/Icons';
import SampleAnswerViewer from '../components/shared/SampleAnswerViewer';
import AIEvaluator from '../components/shared/AIEvaluator';
import { getSeasonById, loadSeason, QuestionSeason } from '../data/seasons';
import { useBandContext } from '../context/BandContext';
import { CueCardData } from '../types';

const AnalysisPage: React.FC = () => {
    const { seasonId, cardId } = useParams<{ seasonId?: string; cardId: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const { bandToShow, getSampleAnswersForCard } = useBandContext();
    const season = getSeasonById(seasonId);
    const [seasonData, setSeasonData] = useState<QuestionSeason | null>(null);
    const [card, setCard] = useState<CueCardData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'sample' | 'ai'>('sample');

    useEffect(() => {
        if (!cardId) {
            setSeasonData(null);
            setCard(null);
            return;
        }

        let cancelled = false;
        setIsLoading(true);
        setSeasonData(null);
        setCard(null);

        loadSeason(season.id)
            .then((loadedSeason) => {
                if (cancelled) return;
                setSeasonData(loadedSeason);
                const allCards = [
                    ...loadedSeason.part1.flatMap((topic) => topic.cards),
                    ...loadedSeason.part2.flatMap((topic) => topic.cards),
                ];
                const found = allCards.find((c) => c.id === cardId) || null;
                setCard(found);
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [cardId, season.id]);

    const buildBankSearch = () => {
        const params = new URLSearchParams(location.search);
        params.set('season', season.id);
        const next = params.toString();
        return next ? `?${next}` : '';
    };

    const handleBackToBank = () => {
        if (card && seasonData) {
            let topicId: string | null = null;
            let part: 'part1' | 'part2' = 'part1';
            
            for (const topic of seasonData.part2) {
                if (topic.cards.some(c => c.id === card.id)) {
                    topicId = topic.id;
                    part = 'part2';
                    break;
                }
            }
            if (!topicId) {
                for (const topic of seasonData.part1) {
                    if (topic.cards.some(c => c.id === card.id)) {
                        topicId = topic.id;
                        part = 'part1';
                        break;
                    }
                }
            }
            navigate({ pathname: '/speaking/bank', search: buildBankSearch() }, { state: { part, topicId } });
        } else {
            navigate({ pathname: '/speaking/bank', search: buildBankSearch() });
        }
    };

    if (isLoading) {
        return (
            <PageContainer>
                <PageHeader>
                    <BackButton onClick={() => navigate({ pathname: '/speaking/bank', search: buildBankSearch() })} aria-label="返回题库">
                        <BackArrowIcon />
                        <span>返回题库</span>
                    </BackButton>
                    <h1>加载中…</h1>
                </PageHeader>
            </PageContainer>
        );
    }

    if (!card) {
        return (
            <PageContainer>
                 <PageHeader>
                    <BackButton onClick={() => navigate({ pathname: '/speaking/bank', search: buildBankSearch() })} aria-label="返回题库">
                        <BackArrowIcon />
                        <span>返回题库</span>
                    </BackButton>
                    <h1>错误</h1>
                </PageHeader>
                <p>未找到对应的题库卡片。</p>
            </PageContainer>
        );
    }

    const sampleAnswersAll = card ? getSampleAnswersForCard(card) : [];
    const isPart2Card = !!card?.part2Title;
    const sampleAnswers = isPart2Card ? sampleAnswersAll.slice(1) : sampleAnswersAll;
    const totalQuestions = sampleAnswers.length;

    const getQuestionNumbering = (index: number, question: string) => {
        if (isPart2Card) {
            return `${index + 1}. ${question}`;
        }
        if (question.startsWith('Part 2')) {
            return question;
        }
        return `${index + 1}. ${question}`;
    };

    return (
        <PageContainer>
            <PageHeader>
                <BackButton onClick={handleBackToBank} aria-label="返回题库">
                    <BackArrowIcon />
                    <span>返回题库</span>
                </BackButton>
                <h1>{card.title}{isPart2Card ? ' - Part 3 精讲' : ''}</h1>
            </PageHeader>

            <TabNav>
                <TabButton $active={activeTab === 'sample'} onClick={() => setActiveTab('sample')}>范文解析</TabButton>
                <TabButton $active={activeTab === 'ai'} onClick={() => setActiveTab('ai')}>AI 练习评测</TabButton>
            </TabNav>

            <main>
                {activeTab === 'sample' ? (
                    <AnswerContent>
                         <AnswerContentHeader>
                            <h4>{isPart2Card ? 'Part 3 范文精讲' : '范文精讲'}</h4>
                        </AnswerContentHeader>
                        {sampleAnswers.length > 0 ? (
                            <SampleAnswerViewer 
                                sampleAnswers={sampleAnswers}
                                totalQuestions={totalQuestions}
                                questionNumbering={getQuestionNumbering}
                                lockedScore={bandToShow}
                            />
                        ) : (
                            <p>暂无范文解析。</p>
                        )}
                    </AnswerContent>
                ) : (
                    <AIContent>
                        <AnswerContentHeader>
                            <h4>AI 模拟对话评测</h4>
                            <small>基于 Google Gemini 高级模型提供个性化反馈</small>
                        </AnswerContentHeader>
                        <AIEvaluator 
                            question={isPart2Card ? (card.part2Title || card.title) : (card.part1Questions?.[0] || card.title)} 
                            targetBand={bandToShow}
                        />
                    </AIContent>
                )}
            </main>
        </PageContainer>
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
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.header};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 2rem;
        h1 {
            font-size: 1.5rem;
            margin: 0 3.5rem;
        }
    }
`;

const TabNav = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TabButton = styled.button<{ $active: boolean }>`
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 3px solid ${({ $active, theme }) => $active ? theme.colors.primaryBlue : 'transparent'};
    color: ${({ $active, theme }) => $active ? theme.colors.header : theme.colors.label};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1rem;

    &:hover {
        color: ${({ theme }) => theme.colors.header};
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
    font-weight: 600;
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

const AnswerContent = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1rem;
    }
`;

const AIContent = styled(AnswerContent)`
    border-color: ${({ theme }) => theme.colors.primaryBlue};
    background: linear-gradient(to bottom, #ffffff, #f9faff);
`;

const AnswerContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    gap: 0.25rem;

    h4 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.primaryBlue};
    }
    small {
        color: ${({ theme }) => theme.colors.label};
        font-weight: 500;
    }
`;

export default AnalysisPage;
