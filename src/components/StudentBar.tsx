import React, { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { useStudentContext } from '../context/StudentContext';
import { ALLOWED_BANDS } from '../utils/scoreBands';
import { StudentProfile } from '../types';

const StudentBar: React.FC = () => {
    const {
        student,
        studentId,
        studentList,
        bandToShow,
        setStudentId,
        setBandToShow,
        isLoading,
    } = useStudentContext();

    const [statusFilter, setStatusFilter] = useState<Exclude<StudentProfile['status'], undefined>>('in_class');
    const isBandLocked = !!student.lockedBand;
    const bandHint = isBandLocked
        ? `该学生固定 ${bandToShow} 分`
        : (isLoading ? '同步首选项…' : '已保存在浏览器 (IndexedDB)');

    const visibleStudents = useMemo(() => {
        const common = studentList.find((s) => s.id === 'common') || null;
        const others = studentList.filter(
            (s) => s.id !== 'common' && s.status === statusFilter,
        );
        return common ? [common, ...others] : others;
    }, [studentList, statusFilter]);

    useEffect(() => {
        if (!visibleStudents.some((s) => s.id === studentId) && visibleStudents.length > 0) {
            setStudentId(visibleStudents[0].id);
        }
    }, [setStudentId, studentId, visibleStudents]);

    return (
        <Bar>
            <Field>
                <Label htmlFor="student-select">学生</Label>
                <StatusToggle role="group" aria-label="学生分组">
                    <StatusButton
                        type="button"
                        $active={statusFilter === 'in_class'}
                        onClick={() => setStatusFilter('in_class')}
                    >
                        正在上课
                    </StatusButton>
                    <StatusButton
                        type="button"
                        $active={statusFilter === 'completed'}
                        onClick={() => setStatusFilter('completed')}
                    >
                        已完课
                    </StatusButton>
                </StatusToggle>
                <Select
                    id="student-select"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                >
                    {visibleStudents.map((s) => (
                        <option key={s.id} value={s.id}>
                            {s.name}
                        </option>
                    ))}
                </Select>
            </Field>

            <Divider />

            <Field>
                <Label htmlFor="band-select">范文分段</Label>
                <Select
                    id="band-select"
                    value={bandToShow}
                    onChange={(e) => setBandToShow(e.target.value)}
                    disabled={isBandLocked}
                >
                    {ALLOWED_BANDS.map((band) => (
                        <option key={band} value={band}>
                            {band}
                        </option>
                    ))}
                </Select>
                <Hint>{bandHint}</Hint>
            </Field>

            {student.notes && <Note>{student.notes}</Note>}
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

const StatusToggle = styled.div`
    display: inline-flex;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.boxBg};
`;

const StatusButton = styled.button<{ $active?: boolean }>`
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

const Divider = styled.div`
    width: 1px;
    height: 28px;
    background-color: ${({ theme }) => theme.colors.border};
`;

const Hint = styled.span`
    color: ${({ theme }) => theme.colors.label};
    font-size: 0.9rem;
`;

const Note = styled.span`
    color: ${({ theme }) => theme.colors.primaryOrange};
    font-weight: 600;
`;

export default StudentBar;
