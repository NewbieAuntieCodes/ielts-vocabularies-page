import { CueCardData } from '../types';
import { DEFAULT_SEASON_ID, loadSeason, SeasonId } from './seasons';

const buildKey = (seasonId: SeasonId, cardId: string) => `${seasonId}:${cardId}`;

const seasonIndexCache = new Map<SeasonId, Promise<Map<string, CueCardData>>>();

const buildSeasonIndex = async (seasonId: SeasonId): Promise<Map<string, CueCardData>> => {
    const season = await loadSeason(seasonId);
    const map = new Map<string, CueCardData>();
    season.part1.forEach((topic) => {
        topic.cards.forEach((card) => map.set(card.id, card));
    });
    season.part2.forEach((topic) => {
        topic.cards.forEach((card) => map.set(card.id, card));
    });
    return map;
};

const getSeasonIndex = (seasonId: SeasonId): Promise<Map<string, CueCardData>> => {
    const resolved = seasonId || DEFAULT_SEASON_ID;
    const cached = seasonIndexCache.get(resolved);
    if (cached) return cached;
    const promise = buildSeasonIndex(resolved);
    seasonIndexCache.set(resolved, promise);
    return promise;
};

export const getCardById = async (
    cardId: string,
    seasonId: SeasonId = DEFAULT_SEASON_ID,
): Promise<CueCardData | undefined> => {
    const index = await getSeasonIndex(seasonId);
    return index.get(cardId);
};

export const getCardKey = (card: CueCardData): string =>
    buildKey((card.seasonId as SeasonId) || DEFAULT_SEASON_ID, card.id);
