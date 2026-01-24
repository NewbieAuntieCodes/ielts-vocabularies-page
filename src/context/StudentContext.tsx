
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CueCardData, SampleAnswerData, StudentProfile } from '../types';
import { getStudentList, getStudentProfile } from '../data/students';
import { readStudentPreferences, saveStudentPreferences } from '../utils/indexedDb';
import { ALLOWED_BANDS } from '../utils/scoreBands';

interface StudentContextValue {
    student: StudentProfile;
    studentId: string;
    bandToShow: string;
    isLoading: boolean;
    studentList: { id: string; name: string; status?: StudentProfile['status'] }[];
    setStudentId: (id: string) => void;
    setBandToShow: (band: string) => void;
    getSampleAnswersForCard: (card: CueCardData) => SampleAnswerData[];
}

const StudentContext = createContext<StudentContextValue | null>(null);

const parseStudentFromSearch = (search: string): string | null => {
    if (!search) return null;
    const params = new URLSearchParams(search.startsWith('?') ? search.substring(1) : search);
    return params.get('student');
};

const normalizeBand = (band?: string | null): string | null => {
    if (!band) return null;
    return ALLOWED_BANDS.includes(band) ? band : null;
};

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const [studentId, setStudentId] = useState(() => {
        const hash = window.location.hash;
        const queryIndex = hash.indexOf('?');
        const search = queryIndex >= 0 ? hash.substring(queryIndex) : '';
        return parseStudentFromSearch(search) || 'common';
    });
    const [bandOverride, setBandOverride] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const idFromSearch = parseStudentFromSearch(location.search);
        if (idFromSearch && idFromSearch !== studentId) {
            setStudentId(idFromSearch);
        }
    }, [location.search, studentId]);

    useEffect(() => {
        let isCancelled = false;
        setIsLoading(true);
        readStudentPreferences(studentId).then((prefs) => {
            if (isCancelled) return;
            const lockedBand = normalizeBand(getStudentProfile(studentId).lockedBand);
            setBandOverride(lockedBand ? null : normalizeBand(prefs?.bandToShow));
        }).finally(() => {
            if (!isCancelled) setIsLoading(false);
        });
        return () => {
            isCancelled = true;
        };
    }, [studentId]);

    const student = useMemo<StudentProfile>(() => getStudentProfile(studentId), [studentId]);
    const lockedBand = normalizeBand(student.lockedBand);
    const defaultBandForStudent =
        lockedBand || normalizeBand(student.bandToShow) || ALLOWED_BANDS[ALLOWED_BANDS.length - 1];
    const bandToShow = lockedBand || normalizeBand(bandOverride) || defaultBandForStudent;

    const handleSetBand = (band: string) => {
        if (lockedBand) return;
        const normalizedBand = normalizeBand(band) || defaultBandForStudent;
        setBandOverride(normalizedBand);
        saveStudentPreferences({ studentId, bandToShow: normalizedBand });
    };

    const handleSetStudent = (id: string) => {
        setStudentId(id);
        setBandOverride(null);
        const [hashPath, hashQuery = ''] = window.location.hash.split('?');
        const params = new URLSearchParams(hashQuery);
        params.set('student', id);
        window.location.hash = `${hashPath}?${params.toString()}`;
    };

    const getSampleAnswersForCard = (card: CueCardData): SampleAnswerData[] => {
        // FIX: Explicitly type base as SampleAnswerData[] to resolve unknown[] inference error.
        const base: SampleAnswerData[] = card.sampleAnswers || [];
        // FIX: Explicitly type overrides to ensure it's recognized as SampleAnswerData[] instead of unknown[].
        const overrides: SampleAnswerData[] = student.customAnswers?.[card.id] || [];
        if (overrides.length === 0) {
            return base;
        }

        // FIX: Explicitly type the Map to ensure its values are recognized as SampleAnswerData.
        const overrideMap = new Map<string, SampleAnswerData>(overrides.map((item) => [item.question, item]));
        // FIX: Explicitly type merged as SampleAnswerData[] to ensure correct return type and avoid inference issues.
        const merged: SampleAnswerData[] = base.map((item) => overrideMap.get(item.question) || item);

        overrides.forEach((item) => {
            const exists = base.some((baseItem) => baseItem.question === item.question);
            if (!exists) merged.push(item);
        });

        return merged;
    };

    const value: StudentContextValue = {
        student,
        studentId,
        bandToShow,
        isLoading,
        studentList: getStudentList(),
        setStudentId: handleSetStudent,
        setBandToShow: handleSetBand,
        getSampleAnswersForCard,
    };

    return (
        <StudentContext.Provider value={value}>
            {children}
        </StudentContext.Provider>
    );
};

export const useStudentContext = (): StudentContextValue => {
    const ctx = useContext(StudentContext);
    if (!ctx) {
        throw new Error('useStudentContext must be used within StudentProvider');
    }
    return ctx;
};
