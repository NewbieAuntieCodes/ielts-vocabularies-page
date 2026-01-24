import React from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const BookIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
    </svg>
);

const MicIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" />
        <path d="M19 11a7 7 0 0 1-14 0" />
        <path d="M12 19v3" />
        <path d="M8 22h8" />
    </svg>
);

const HeadphonesIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
    </svg>
);

const PencilIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
);

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Page>
            <Header>
                <h1>IELTS 全科练习</h1>
                <p>听力 / 口语 / 阅读 / 写作</p>
            </Header>

            <Cards>
                <Card
                    onClick={() => navigate({ pathname: '/listening', search: location.search })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                        (e.key === 'Enter' || e.key === ' ') &&
                        navigate({ pathname: '/listening', search: location.search })
                    }
                >
                    <Icon>
                        <HeadphonesIcon />
                    </Icon>
                    <h2>听力 Listening</h2>
                    <p>场景词汇（Learn / Practice）</p>
                </Card>

                <Card
                    onClick={() => navigate({ pathname: '/speaking', search: location.search })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                        (e.key === 'Enter' || e.key === ' ') &&
                        navigate({ pathname: '/speaking', search: location.search })
                    }
                >
                    <Icon>
                        <MicIcon />
                    </Icon>
                    <h2>口语 Speaking</h2>
                    <p>题库 + 词汇联动（单词本共用）</p>
                </Card>

                <Card
                    onClick={() => navigate({ pathname: '/reading', search: location.search })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                        (e.key === 'Enter' || e.key === ' ') &&
                        navigate({ pathname: '/reading', search: location.search })
                    }
                >
                    <Icon>
                        <BookIcon />
                    </Icon>
                    <h2>阅读 Reading</h2>
                    <p>词汇（开发中）</p>
                </Card>

                <Card
                    onClick={() => navigate({ pathname: '/writing', search: location.search })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                        (e.key === 'Enter' || e.key === ' ') &&
                        navigate({ pathname: '/writing', search: location.search })
                    }
                >
                    <Icon>
                        <PencilIcon />
                    </Icon>
                    <h2>写作 Writing</h2>
                    <p>词汇（开发中）</p>
                </Card>
            </Cards>
        </Page>
    );
};

const Page = styled.div`
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    animation: fadeIn 0.5s ease;
`;

const Header = styled.header`
    margin-bottom: 2.5rem;

    h1 {
        font-size: 2.75rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.header};
        margin: 0 0 0.5rem 0;
    }

    p {
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.label};
        margin: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
    }
`;

const Cards = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 22px;
    padding: 2rem;
    text-align: left;
    box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }

    h2 {
        font-size: 1.4rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.header};
        margin: 0;
    }

    p {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.label};
        line-height: 1.6;
        margin: 0;
    }
`;

const Icon = styled.div`
    width: 44px;
    height: 44px;
    color: ${({ theme }) => theme.colors.primaryBlue};
`;

export default HomePage;

