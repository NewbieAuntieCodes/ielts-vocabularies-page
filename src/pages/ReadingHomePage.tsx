import React from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackArrowIcon } from '../components/shared/Icons';

const ReadingHomePage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Page>
            <Header>
                <BackButton
                    onClick={() => navigate({ pathname: '/', search: location.search })}
                    aria-label="返回总页面"
                >
                    <BackArrowIcon />
                    <span>返回</span>
                </BackButton>
                <h1>阅读 Reading</h1>
            </Header>

            <Card>
                <p>阅读模块正在整理中。你可以先使用原文内容库。</p>
                <ButtonRow>
                    <ActionButton
                        type="button"
                        onClick={() => navigate({ pathname: '/reading/study', search: location.search })}
                    >
                        打开阅读原文内容库
                    </ActionButton>
                </ButtonRow>
            </Card>
        </Page>
    );
};

const Page = styled.div`
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`;

const Header = styled.header`
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
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
            font-size: 1.5rem;
            margin: 0 3.5rem;
        }
    }
`;

const BackButton = styled.button`
    position: absolute;
    top: 50%;
    left: 0;
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
`;

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
    color: ${({ theme }) => theme.colors.label};
    line-height: 1.7;
`;

const ButtonRow = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
`;

const ActionButton = styled.button`
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 800;
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: white;

    &:hover {
        filter: brightness(0.95);
    }
`;

export default ReadingHomePage;

