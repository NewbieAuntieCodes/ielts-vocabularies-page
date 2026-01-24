import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BackArrowIcon } from '../components/shared/Icons';
import Part1Tips from '../components/tips/Part1Tips';
import Part2Tips from '../components/tips/Part2Tips';
import Part3Tips from '../components/tips/Part3Tips';

const TipsPage: React.FC = () => {
    const navigate = useNavigate();
    type ActivePart = 'part1' | 'part2' | 'part3';
    const [activePart, setActivePart] = useState<ActivePart>('part1');

    return (
        <PageContainer>
            <PageHeader>
                <BackButton onClick={() => navigate('/')} aria-label="返回主页">
                    <BackArrowIcon />
                    <span>返回主页</span>
                </BackButton>
                <h1>雅思口语回答技巧</h1>
            </PageHeader>
            
            <PartNavigation>
                <PartNavButton $active={activePart === 'part1'} onClick={() => setActivePart('part1')}>
                    Part 1 技巧
                </PartNavButton>
                <PartNavButton $active={activePart === 'part2'} onClick={() => setActivePart('part2')}>
                    Part 2 技巧
                </PartNavButton>
                <PartNavButton $active={activePart === 'part3'} onClick={() => setActivePart('part3')}>
                    Part 3 技巧
                </PartNavButton>
            </PartNavigation>

            <main>
                <ContentWrapper>
                    {activePart === 'part1' && <Part1Tips />}
                    {activePart === 'part2' && <Part2Tips />}
                    {activePart === 'part3' && <Part3Tips />}
                </ContentWrapper>
            </main>
        </PageContainer>
    );
};

// Styled Components

const PageContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`;

const ContentWrapper = styled.div`
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
            margin: 0 3.5rem; /* Space for back button */
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

const PartNavigation = styled.nav`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.boxBg};
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
`;

const PartNavButton = styled.button<{ $active: boolean }>`
    flex: 1;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1rem;
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

export default TipsPage;