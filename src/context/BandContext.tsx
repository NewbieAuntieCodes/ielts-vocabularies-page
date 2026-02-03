import React, { createContext, useContext, useMemo, useState } from 'react';
import { CueCardData, SampleAnswerData } from '../types';
import { ALLOWED_TIERS, AnswerTier, normalizeTier } from '../utils/answerTiers';

export type SpeakingMode = 'teacher' | 'student';

interface BandContextValue {
    tierToShow: AnswerTier;
    setTierToShow: (tier: AnswerTier) => void;
    speakingMode: SpeakingMode;
    setSpeakingMode: (mode: SpeakingMode) => void;
    getSampleAnswersForCard: (card: CueCardData) => SampleAnswerData[];
}

const TIER_STORAGE_KEY = 'ielts-speaking-tier';
const MODE_STORAGE_KEY = 'ielts-speaking-mode';

const normalizeMode = (mode?: string | null): SpeakingMode | null => {
    if (!mode) return null;
    return mode === 'teacher' || mode === 'student' ? mode : null;
};

const BandContext = createContext<BandContextValue | null>(null);

export const BandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tierToShow, setTierToShowState] = useState<AnswerTier>(() => {
        const stored = normalizeTier(localStorage.getItem(TIER_STORAGE_KEY));
        return stored || ALLOWED_TIERS[ALLOWED_TIERS.length - 1];
    });
    const [speakingMode, setSpeakingModeState] = useState<SpeakingMode>(() => {
        return normalizeMode(localStorage.getItem(MODE_STORAGE_KEY)) || 'teacher';
    });

    const setTierToShow = (tier: AnswerTier) => {
        const normalized = normalizeTier(tier) || ALLOWED_TIERS[ALLOWED_TIERS.length - 1];
        setTierToShowState(normalized);
        localStorage.setItem(TIER_STORAGE_KEY, normalized);
    };

    const setSpeakingMode = (mode: SpeakingMode) => {
        const normalized = normalizeMode(mode) || 'teacher';
        setSpeakingModeState(normalized);
        localStorage.setItem(MODE_STORAGE_KEY, normalized);
    };

    const getSampleAnswersForCard = (card: CueCardData): SampleAnswerData[] => {
        return card.sampleAnswers || [];
    };

    const value = useMemo<BandContextValue>(() => ({
        tierToShow,
        setTierToShow,
        speakingMode,
        setSpeakingMode,
        getSampleAnswersForCard,
    }), [tierToShow, speakingMode]);

    return (
        <BandContext.Provider value={value}>
            {children}
        </BandContext.Provider>
    );
};

export const useBandContext = (): BandContextValue => {
    const ctx = useContext(BandContext);
    if (!ctx) {
        throw new Error('useBandContext must be used within BandProvider');
    }
    return ctx;
};
