import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import TopicContainer from '../components/TopicContainer';
import TopicModal from '../components/modals/TopicModal';
import { CueCardData } from '../types';
import { QUESTION_SEASONS, getSeasonById, loadSeason, QuestionSeason } from '../data/seasons';
import { BackArrowIcon } from '../components/shared/Icons';

const QuestionBankPage: React.FC = () => {
    const [activePage, setActivePage] = useState<'part1' | 'part2'>('part1');
    const [selectedCard, setSelectedCard] = useState<CueCardData | null>(null);
    const [seasonData, setSeasonData] = useState<QuestionSeason | null>(null);
    const [isSeasonLoading, setIsSeasonLoading] = useState(false);
    const [pendingScrollTopicId, setPendingScrollTopicId] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const season = getSeasonById(searchParams.get('season'));

    useEffect(() => {
        const state = location.state as { part?: 'part1' | 'part2', topicId?: string } | null;
        if (state?.part) {
            setActivePage(state.part);
        }
        if (state?.topicId) {
            setPendingScrollTopicId(state.topicId);
        }
    }, [location.state]);

    useEffect(() => {
        setSelectedCard(null);
    }, [season.id]);

    useEffect(() => {
        let cancelled = false;
        setIsSeasonLoading(true);
        setSeasonData(null);
        loadSeason(season.id)
            .then((data) => {
                if (cancelled) return;
                setSeasonData(data);
            })
            .finally(() => {
                if (!cancelled) setIsSeasonLoading(false);
            });
        return () => {
            cancelled = true;
        };
    }, [season.id]);

    useEffect(() => {
        if (!pendingScrollTopicId) return;
        if (!seasonData) return;

        const timer = window.setTimeout(() => {
            const element = document.getElementById(pendingScrollTopicId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setPendingScrollTopicId(null);
            }
        }, 100);

        return () => window.clearTimeout(timer);
    }, [activePage, pendingScrollTopicId, seasonData]);

    const handleCardClick = (card: CueCardData) => {
        setSelectedCard(card);
    };

    const handleOpenVocabTopic = (vocabTopicId: string) => {
        const next = new URLSearchParams(location.search);
        next.set('from', 'bank');
        next.set('topicId', vocabTopicId);
        const search = next.toString();
        navigate({ pathname: '/speaking/vocab', search: search ? `?${search}` : '' });
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <>
            <Header>
                <HeaderBackButton
                    onClick={() => {
                        const next = new URLSearchParams(location.search);
                        next.delete('from');
                        next.delete('topicId');
                        const search = next.toString();
                        navigate({ pathname: '/speaking', search: search ? `?${search}` : '' });
                    }}
                    aria-label="返回口语主页"
                >
                    <BackArrowIcon />
                    <span>返回</span>
                </HeaderBackButton>
                <h1>雅思口语 {season.label} 题库</h1>
                <SeasonNav aria-label="选择题库季">
                    {QUESTION_SEASONS.map((s) => (
                        <SeasonButton
                            key={s.id}
                            $active={season.id === s.id}
                            onClick={() => {
                                const next = new URLSearchParams(searchParams);
                                next.set('season', s.id);
                                setSearchParams(next, { replace: true });
                            }}
                        >
                            {s.label}
                        </SeasonButton>
                    ))}
                </SeasonNav>
                <Nav>
                    <NavButton 
                        $active={activePage === 'part1'}
                        onClick={() => setActivePage('part1')}>
                        Part1
                    </NavButton>
                    <NavButton 
                        $active={activePage === 'part2'}
                        onClick={() => setActivePage('part2')}>
                        Part2+3
                    </NavButton>
                </Nav>
            </Header>

            <div id="page-part1" className={activePage === 'part1' ? '' : 'hidden'}>
                {isSeasonLoading && (
                    <EmptyHint>正在加载该季 Part 1 题库…</EmptyHint>
                )}
                {!isSeasonLoading && seasonData?.part1?.length === 0 && (
                    <EmptyHint>该季 Part 1 题库暂未录入，你可以先添加话题/题目。</EmptyHint>
                )}
                {!isSeasonLoading && seasonData && (
                    <TopicContainer
                        key={`${season.id}-part1`}
                        initialTopics={seasonData.part1}
                        onCardClick={handleCardClick}
                        onOpenVocabTopic={handleOpenVocabTopic}
                    />
                )}
            </div>

            <div id="page-part2" className={activePage === 'part2' ? '' : 'hidden'}>
                {isSeasonLoading && (
                    <EmptyHint>正在加载该季 Part 2+3 题库…</EmptyHint>
                )}
                {!isSeasonLoading && seasonData?.part2?.length === 0 && (
                    <EmptyHint>该季 Part 2+3 题库暂未录入，你可以先添加话题/题目。</EmptyHint>
                )}
                {!isSeasonLoading && seasonData && (
                    <TopicContainer
                        key={`${season.id}-part2`}
                        initialTopics={seasonData.part2}
                        onCardClick={handleCardClick}
                        onOpenVocabTopic={handleOpenVocabTopic}
                    />
                )}
            </div>

            {selectedCard && (
                <TopicModal
                    card={selectedCard}
                    seasonId={season.id}
                    seasonTag={season.tag}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

// --- STYLED COMPONENTS ---
const Header = styled.header`
    text-align: center;
    margin-bottom: 3rem;
    position: relative;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.header};
        margin: 0 6rem; /* Avoids overlap with back button */
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 2rem;
        h1 {
            font-size: 1.5rem;
            margin: 0 3.5rem;
        }
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
`;

const SeasonNav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-top: 1.25rem;
`;

const SeasonButton = styled.button<{ $active?: boolean }>`
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 0.55rem 1.1rem;
    border-radius: 9999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.boxBg};
        color: ${({ theme }) => theme.colors.header};
    }
    ${({ $active, theme }) => $active && `
        background-color: ${theme.colors.primaryBlue};
        color: white;
        border-color: ${theme.colors.primaryBlue};
    `}
`;

const NavButton = styled.button<{ $active?: boolean }>`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.boxBg};
        color: ${({ theme }) => theme.colors.header};
    }
    ${({ $active, theme }) => $active && `
        background-color: ${theme.colors.header};
        color: white;
        border-color: ${theme.colors.header};
    `}
     @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
`;

const BackButton = styled.button`
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
    svg { width: 20px; height: 20px; }
    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.header};
    }
`;

const HeaderBackButton = styled(BackButton)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0.6rem;
        top: 0;
        transform: none;
        span { display: none; }
    }
`;

const EmptyHint = styled.p`
    max-width: 900px;
    margin: 0 auto 1rem auto;
    padding: 0.75rem 1rem;
    border-radius: 14px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.label};
    font-weight: 600;
`;

export default QuestionBankPage;
