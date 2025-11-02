import React from 'react';
import { styled } from 'styled-components';
import { ieltsTopics } from '../data';

const PlusIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const EditIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;

interface HomePageProps {
    navigateToWordSelection: (topicId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToWordSelection }) => {
    return (
        <HomeContainer>
            <TopicsGrid>
                {ieltsTopics.map(category => (
                    <TopicColumn key={category.title}>
                        <ColumnHeader>
                            <span>{category.title}</span>
                            <HeaderActions>
                                <ActionButton aria-label="Add new topic"><PlusIcon /></ActionButton>
                                <ActionButton aria-label="Edit topic"><EditIcon /></ActionButton>
                            </HeaderActions>
                        </ColumnHeader>
                        <SubTopicList>
                            {category.subTopics.map(subTopic => (
                                <SubTopicCard key={subTopic.id} onClick={() => navigateToWordSelection(subTopic.id)} $color={subTopic.color}>
                                    <CardBody>
                                        <Tag $color={subTopic.color}>{subTopic.type}</Tag>
                                        <CardTitle>{subTopic.title}</CardTitle>
                                    </CardBody>
                                    {subTopic.isNew && <NewBadge>New</NewBadge>}
                                </SubTopicCard>
                            ))}
                        </SubTopicList>
                    </TopicColumn>
                ))}
            </TopicsGrid>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    width: 100%;
    animation: fadeIn 0.5s ease;
`;

const TopicsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    align-items: flex-start;
`;

const TopicColumn = styled.section`
    background-color: ${({ theme }) => theme.colors.columnBg};
    border-radius: 16px;
    padding: 0.75rem;
`;

const ColumnHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
`;

const HeaderActions = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.label};
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover {
        color: ${({ theme }) => theme.colors.header};
    }
`;

const SubTopicList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const SubTopicCard = styled.div<{ $color: 'yellow' | 'blue' | 'green' | 'purple' }>`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 12px;
    padding: 0.75rem 1rem 0.75rem 1.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 6px;
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
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.07);
    }
`;

const CardBody = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const CardTitle = styled.span`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`;

const Tag = styled.span<{ $color: 'yellow' | 'blue' | 'green' | 'purple' }>`
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;

    ${({ theme, $color }) => {
        switch ($color) {
            case 'yellow':
                return `background-color: ${theme.colors.tagYellowBg}; color: ${theme.colors.tagYellowText};`;
            case 'blue':
                return `background-color: ${theme.colors.tagBlueBg}; color: ${theme.colors.tagBlueText};`;
            case 'green':
                return `background-color: ${theme.colors.tagGreenBg}; color: ${theme.colors.tagGreenText};`;
            case 'purple':
                return `background-color: ${theme.colors.tagPurpleBg}; color: ${theme.colors.tagPurpleText};`;
        }
    }}
`;

const NewBadge = styled.span`
    background-color: ${({ theme }) => theme.colors.newBadgeBg};
    color: ${({ theme }) => theme.colors.newBadgeText};
    padding: 0.15rem 0.5rem;
    border-radius: 99px;
    font-size: 0.7rem;
    font-weight: 700;
`;

export default HomePage;