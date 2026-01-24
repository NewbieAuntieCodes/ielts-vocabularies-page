import React, { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Part2Builder from '../part2-builder/Part2Builder';
import { BUILD_KITS, getBuildKitById } from '../part2-builder/kits';
import { BuildKit } from '../part2-builder/types';
import { BackArrowIcon } from '../components/shared/Icons';

const Part2BuilderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const kitIdFromUrl = searchParams.get('kit');

  const initialKit = useMemo<BuildKit>(() => {
    return getBuildKitById(kitIdFromUrl) || BUILD_KITS[0];
  }, [kitIdFromUrl]);

  const [kit, setKit] = useState<BuildKit>(initialKit);

  useEffect(() => {
    setKit(initialKit);
  }, [initialKit]);

  const handleBack = () => {
    navigate({ pathname: '/speaking', search: location.search });
  };

  const handleSelectKit = (nextId: string) => {
    const nextKit = getBuildKitById(nextId);
    if (!nextKit) return;
    setKit(nextKit);
    const next = new URLSearchParams(searchParams);
    next.set('kit', nextId);
    setSearchParams(next, { replace: true });
  };

  return (
    <Page>
      <Header>
        <BackButton onClick={handleBack} aria-label="返回主页">
          <BackArrowIcon />
          <span>返回</span>
        </BackButton>
        <h1>Part 2 积木拼装（Demo）</h1>
      </Header>

      <Toolbar>
        <Label htmlFor="kit-select">选择题目</Label>
        <Select
          id="kit-select"
          value={kit.id}
          onChange={(e) => handleSelectKit(e.target.value)}
        >
          {BUILD_KITS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </Select>
        <Hint>不影响现有题库/Modal；这是独立试验页。</Hint>
      </Toolbar>

      <Part2Builder kit={kit} />
    </Page>
  );
};

const Page = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease;
`;

const Header = styled.header`
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.55rem;
    gap: 0;
    span {
      display: none;
    }
  }
`;

const Toolbar = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 0.85rem 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
`;

const Label = styled.label`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.header};
`;

const Select = styled.select`
  font-family: inherit;
  padding: 0.45rem 0.75rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.boxBg};
  color: ${({ theme }) => theme.colors.header};
  min-width: 320px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const Hint = styled.span`
  color: ${({ theme }) => theme.colors.label};
  font-weight: 700;
`;

export default Part2BuilderPage;
