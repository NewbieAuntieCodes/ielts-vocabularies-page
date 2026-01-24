import React from 'react';
import { styled, css } from 'styled-components';
import { ieltsTopics } from '../data';

interface HomePageProps {
    navigateToWordSelection: (topicId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToWordSelection }) => {
    return (
        <HomeContainer>
            <WelcomeBanner>
                <h1>雅思听力场景词汇</h1>
                <p>听力提分的关键在于对场景词的快速反应与拼写准确性</p>
            </WelcomeBanner>

            {ieltsTopics.map(section => (
                <SectionWrapper key={section.title}>
                    <SectionHeader>
                        <h2>{section.title}</h2>
                        <SectionBadge>{section.subTopics.length} 个分类</SectionBadge>
                    </SectionHeader>
                    <TopicsGrid>
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
                                            <DraftLabel>完善中</DraftLabel>
                                        )}
                                    </CardMeta>
                                </CardContent>
                                {subTopic.badge && <StatusBadge>{subTopic.badge}</StatusBadge>}
                            </SubTopicCard>
                        ))}
                    </TopicsGrid>
                </SectionWrapper>
            ))}
            
            <FooterTip>
                提示：在练习模式中使用“听音辨词”可以极大地提升听力反应速度。
            </FooterTip>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    width: 100%;
    animation: fadeIn 0.5s ease;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 8rem;
    max-width: 1000px;
    margin: 0 auto;
`;

const WelcomeBanner = styled.header`
    text-align: left;
    padding: 2rem 0;
    
    h1 {
        font-size: 2.5rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.header};
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.label};
    }

    @media (max-width: 768px) {
        text-align: center;
        h1 { font-size: 1.8rem; }
    }
`;

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    h2 {
        margin: 0;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.header};
        font-weight: 800;
    }
`;

const SectionBadge = styled.span`
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 800;
`;

const TopicsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
`;

const SubTopicCard = styled.div<{ $color: string, $isEmpty?: boolean }>`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    padding: 1.25rem;
    cursor: ${props => props.$isEmpty ? 'default' : 'pointer'};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    
    opacity: ${props => props.$isEmpty ? 0.6 : 1};

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 6px;
        border-radius: 16px 0 0 16px;
        background-color: ${({ theme, $color }) => {
            switch ($color) {
                case 'yellow': return theme.colors.tagYellowText;
                case 'blue': return theme.colors.tagBlueText;
                case 'green': return theme.colors.tagGreenText;
                case 'purple': return theme.colors.tagPurpleText;
                default: return theme.colors.primary;
            }
        }};
    }
    
    &:hover {
        ${props => !props.$isEmpty && css`
            transform: translateY(-4px);
            border-color: ${({ theme }) => theme.colors.primary}44;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
        `}
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-left: 0.5rem;
`;

const CardTitle = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.header};
    font-size: 1.1rem;
    line-height: 1.4;
`;

const CardMeta = styled.div`
    display: flex;
    align-items: center;
`;

const WordCount = styled.span<{ $color: string }>`
    font-size: 0.75rem;
    font-weight: 800;
    padding: 2px 8px;
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
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.label};
    font-weight: 600;
`;

const StatusBadge = styled.span`
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: ${({ theme }) => theme.colors.highlightBg};
    color: ${({ theme }) => theme.colors.primaryBlue};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.65rem;
    font-weight: 800;
    border: 1px solid ${({ theme }) => theme.colors.highlightBorder};
`;

const FooterTip = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.9rem;
    padding: 2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default HomePage;