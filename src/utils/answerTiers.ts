export const ALLOWED_TIERS = ['1', '2', '3'] as const;

export type AnswerTier = typeof ALLOWED_TIERS[number];

const tierOrder: Record<AnswerTier, number> = {
    '1': 1,
    '2': 2,
    '3': 3,
};

export const formatTierLabel = (tier: AnswerTier): string => `${tier}档`;

export const tierFromScore = (score: string): AnswerTier => {
    const value = Number.parseFloat(score);
    if (!Number.isFinite(value)) return '2';
    if (value >= 6.5) return '3';
    if (value >= 5.5) return '2';
    return '1';
};

export const normalizeTier = (value?: string | null): AnswerTier | null => {
    if (!value) return null;
    const trimmed = value.trim().replace(/档$/, '');
    if (trimmed === '1' || trimmed === '2' || trimmed === '3') return trimmed;
    const numeric = Number.parseFloat(trimmed);
    if (!Number.isFinite(numeric)) return null;
    return tierFromScore(String(numeric));
};

export const filterAllowedTiers = (tiers: AnswerTier[]): AnswerTier[] => {
    const unique = new Set(tiers);
    return ALLOWED_TIERS.filter((tier) => unique.has(tier));
};

export const tierToTargetBand = (tier: AnswerTier): string => {
    if (tier === '1') return '5.0';
    if (tier === '2') return '5.5';
    return '6.5';
};

export const compareTier = (a: AnswerTier, b: AnswerTier): number => tierOrder[a] - tierOrder[b];

