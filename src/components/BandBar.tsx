import React from 'react';
import { styled } from 'styled-components';
import { useBandContext } from '../context/BandContext';
import { ALLOWED_TIERS, AnswerTier, formatTierLabel } from '../utils/answerTiers';

const BandBar: React.FC = () => {
    const {
        tierToShow,
        setTierToShow,
        speakingMode,
        setSpeakingMode,
    } = useBandContext();

    return (
        <Bar>
            <Field>
                <Label>模式</Label>
                <ModeToggle role="group" aria-label="口语模式">
                    <ModeButton
                        type="button"
                        $active={speakingMode === 'teacher'}
                        onClick={() => setSpeakingMode('teacher')}
                    >
                        老师
                    </ModeButton>
                    <ModeButton
                        type="button"
                        $active={speakingMode === 'student'}
                        onClick={() => setSpeakingMode('student')}
                    >
                        学生
                    </ModeButton>
                </ModeToggle>
                <Hint>{speakingMode === 'teacher' ? 'P2+P3 默认一起显示' : 'P2 / P3 分开显示'}</Hint>
            </Field>

            <Field>
                <Label htmlFor="tier-select">范文档位</Label>
                <Select
                    id="tier-select"
                    value={tierToShow}
                    onChange={(e) => setTierToShow(e.target.value as AnswerTier)}
                >
                    {ALLOWED_TIERS.map((tier) => (
                        <option key={tier} value={tier}>
                            {formatTierLabel(tier)}
                        </option>
                    ))}
                </Select>
                <Hint>已保存在浏览器</Hint>
            </Field>
        </Bar>
    );
};

const Bar = styled.section`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    padding: 0.9rem 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
`;

const Field = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const Label = styled.label`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.header};
`;

const Select = styled.select`
    font-family: inherit;
    padding: 0.45rem 0.75rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.boxBg};
    color: ${({ theme }) => theme.colors.header};
    min-width: 140px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }
`;

const ModeToggle = styled.div`
    display: inline-flex;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.boxBg};
`;

const ModeButton = styled.button<{ $active?: boolean }>`
    appearance: none;
    border: none;
    background: transparent;
    padding: 0.45rem 0.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.header};
    }

    ${({ $active, theme }) =>
        $active &&
        `
        background-color: ${theme.colors.primaryBlue};
        color: white;
    `}
`;

const Hint = styled.span`
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.9rem;
`;

export default BandBar;
