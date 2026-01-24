
import React, { useState } from 'react';
import { styled, css } from 'styled-components';
import { useVocabData } from '../context/VocabDataContext';

interface HomePageProps {
    navigateToWordSelection: (topicId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToWordSelection }) => {
    const { ieltsTopics, filters } = useVocabData();
    const [activeFilterId, setActiveFilterId] = useState(filters?.defaultId || 'all');

    const filteredTopics = ieltsTopics
        .map((section) => {
            const filteredSubTopics = section.subTopics.filter((sub) =>
                filters ? filters.filterSubTopic(sub, activeFilterId) : true,
            );

            return {
                ...section,
                subTopics: filteredSubTopics,
            };
        })
        .filter((section) => section.subTopics.length > 0);

    return (
        <HomeContainer>
            {filters && filters.chips.length > 0 && (
                <FilterWrapper>
                    <FilterLabel>选择分类</FilterLabel>
                    <FilterBar>
                        {filters.chips.map((chip) => (
                            <FilterChip
                                key={chip.id}
                                $active={activeFilterId === chip.id}
                                $isEssential={chip.isEssential}
                                onClick={() => setActiveFilterId(chip.id)}
                            >
                                {chip.label}
                            </FilterChip>
                        ))}
                    </FilterBar>
                </FilterWrapper>
            )}

            {filteredTopics.map(section => (
                <SectionWrapper key={section.title}>
                    <SectionHeader>
                        <h2>{section.title}</h2>
                        <SectionBadge>{section.subTopics.length}</SectionBadge>
                    </SectionHeader>
                    <TopicsGrid $isPart1={section.section === 'Part 1'}>
                        {section.subTopics.map(subTopic => (
                            <SubTopicCard 
                                key={subTopic.id} 
                                onClick={() => {
                                    if ((subTopic.words || []).length > 0 || (subTopic.wordSections || []).length > 0) {
                                        navigateToWordSelection(subTopic.id);
                                    }
                                }} 
                                $color={subTopic.color}
                                $isEmpty={(subTopic.words || []).length === 0 && (subTopic.wordSections || []).length === 0}
                            >
                                <CardContent>
                                    <CardTitle>{subTopic.title}</CardTitle>
                                    <CardMeta>
                                        {((subTopic.words || []).length > 0 || (subTopic.wordSections || []).length > 0) ? (
                                            <WordCount $color={subTopic.color}>
                                                {subTopic.wordSections 
                                                    ? subTopic.wordSections.reduce((acc, s) => acc + s.words.length, 0)
                                                    : subTopic.words?.length} 词
                                            </WordCount>
                                        ) : (
                                            <DraftLabel>补充中</DraftLabel>
                                        )}
                                    </CardMeta>
                                </CardContent>
                                {subTopic.badge && <StatusBadge>{subTopic.badge}</StatusBadge>}
                            </SubTopicCard>
                        ))}
                    </TopicsGrid>
                </SectionWrapper>
            ))}
            
            {filteredTopics.length === 0 && (
                <EmptyState>
                    该分类下暂无对应话题数据。
                </EmptyState>
            )}
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    width: 100%;
    animation: fadeIn 0.5s ease;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 8rem;
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const FilterLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.label};
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

const FilterBar = styled.div`
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0.2rem 0;
    &::-webkit-scrollbar { display: none; }
`;

const FilterChip = styled.button<{ $active: boolean; $isEssential?: boolean }>`
    white-space: nowrap;
    padding: 0.4rem 1rem;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.border};
    background: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.cardBg};
    color: ${({ theme, $active }) => $active ? 'white' : theme.colors.text};

    ${({ $isEssential, $active, theme }) =>
        $isEssential &&
        !$active &&
        css`
            color: ${theme.colors.primaryRed};
            border-color: ${theme.colors.primaryRed}66;
            background: ${theme.colors.primaryRed}11;
        `}

    &:hover {
        border-color: ${({ theme, $isEssential }) => $isEssential ? theme.colors.primaryRed : theme.colors.primary};
    }
`;

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    
    h2 {
        margin: 0;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.header};
        font-weight: 800;
    }
`;

const SectionBadge = styled.span`
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 800;
`;

const TopicsGrid = styled.div<{ $isPart1?: boolean }>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${props => props.$isPart1 ? '130px' : '220px'}, 1fr));
    gap: 0.75rem;
`;

const SubTopicCard = styled.div<{ $color: string, $isEmpty?: boolean }>`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;
    padding: 0.8rem 1rem;
    cursor: ${props => props.$isEmpty ? 'default' : 'pointer'};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    
    opacity: ${props => props.$isEmpty ? 0.6 : 1};

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 20%;
        bottom: 20%;
        width: 3px;
        border-radius: 0 3px 3px 0;
        background-color: ${({ theme, $color }) => {
            switch ($color) {
                case 'yellow': return theme.colors.tagYellowText;
                case 'blue': return theme.colors.tagBlueText;
                case 'green': return theme.colors.tagGreenText;
                case 'purple': return theme.colors.tagPurpleText;
                default: return theme.colors.border;
            }
        }};
    }
    
    &:hover {
        ${props => !props.$isEmpty && css`
            transform: translateY(-2px);
            border-color: ${({ theme }) => theme.colors.primary}66;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        `}
    }

    @media (max-width: 480px) {
        min-height: 70px;
        padding: 0.6rem 0.8rem;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

const CardTitle = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.header};
    font-size: 0.95rem;
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const CardMeta = styled.div`
    display: flex;
    align-items: center;
`;

const WordCount = styled.span<{ $color: string }>`
    font-size: 0.7rem;
    font-weight: 800;
    padding: 1px 6px;
    border-radius: 6px;
    color: ${({ theme, $color }) => {
        switch ($color) {
            case 'yellow': return theme.colors.tagYellowText;
            case 'blue': return theme.colors.tagBlueText;
            case 'green': return theme.colors.tagGreenText;
            case 'purple': return theme.colors.tagPurpleText;
            default: return theme.colors.primary;
        }
    }};
    background-color: ${({ theme, $color }) => {
        switch ($color) {
            case 'yellow': return theme.colors.tagYellowBg;
            case 'blue': return theme.colors.tagBlueBg;
            case 'green': return theme.colors.tagGreenBg;
            case 'purple': return theme.colors.tagPurpleBg;
            default: return theme.colors.primaryLight;
        }
    }};
`;

const DraftLabel = styled.span`
    font-size: 0.65rem;
    color: ${({ theme }) => theme.colors.label};
    font-weight: 600;
`;

const StatusBadge = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: ${({ theme }) => theme.colors.primaryRed};
    color: white;
    padding: 0 4px;
    border-radius: 3px;
    font-size: 0.55rem;
    font-weight: 900;
`;

const EmptyState = styled.div`
    text-align: center;
    padding: 3rem 0;
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.9rem;
`;

export default HomePage;
