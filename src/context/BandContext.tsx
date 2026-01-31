import React, { createContext, useContext, useMemo, useState } from 'react';
import { CueCardData, SampleAnswerData } from '../types';
import { ALLOWED_BANDS } from '../utils/scoreBands';

export type SpeakingMode = 'teacher' | 'student';

interface BandContextValue {
    bandToShow: string;
    setBandToShow: (band: string) => void;
    speakingMode: SpeakingMode;
    setSpeakingMode: (mode: SpeakingMode) => void;
    getSampleAnswersForCard: (card: CueCardData) => SampleAnswerData[];
}

const BAND_STORAGE_KEY = 'ielts-speaking-band';
const MODE_STORAGE_KEY = 'ielts-speaking-mode';

const normalizeBand = (band?: string | null): string | null => {
    if (!band) return null;
    const normalized = band === '5' ? '5.0' : (band === '6' ? '6.0' : band);
    return ALLOWED_BANDS.includes(normalized) ? normalized : null;
};

const normalizeMode = (mode?: string | null): SpeakingMode | null => {
    if (!mode) return null;
    return mode === 'teacher' || mode === 'student' ? mode : null;
};

const BandContext = createContext<BandContextValue | null>(null);

export const BandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bandToShow, setBandToShowState] = useState<string>(() => {
        const stored = normalizeBand(localStorage.getItem(BAND_STORAGE_KEY));
        return stored || ALLOWED_BANDS[ALLOWED_BANDS.length - 1];
    });
    const [speakingMode, setSpeakingModeState] = useState<SpeakingMode>(() => {
        return normalizeMode(localStorage.getItem(MODE_STORAGE_KEY)) || 'teacher';
    });

    const setBandToShow = (band: string) => {
        const normalized = normalizeBand(band) || ALLOWED_BANDS[ALLOWED_BANDS.length - 1];
        setBandToShowState(normalized);
        localStorage.setItem(BAND_STORAGE_KEY, normalized);
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
        bandToShow,
        setBandToShow,
        speakingMode,
        setSpeakingMode,
        getSampleAnswersForCard,
    }), [bandToShow, speakingMode]);

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
