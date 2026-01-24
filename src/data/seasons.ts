import { TopicData } from '../types';

// 显式导入各季度的元数据
import meta_2025_05_08 from './seasons/2025-05-08/meta';
import meta_2025_09_12 from './seasons/2025-09-12/meta';
import meta_2026_01_04 from './seasons/2026-01-04/meta';

export type SeasonId = string;

export interface QuestionSeasonSummary {
  id: SeasonId;
  label: string;
  tag: string;
}

export interface QuestionSeason extends QuestionSeasonSummary {
  part1: TopicData[];
  part2: TopicData[];
}

export const DEFAULT_SEASON_ID: SeasonId = '2025-09-12';

// 模拟 import.meta.glob 的结构
const seasonMetaModules = {
  './seasons/2025-05-08/meta.ts': { default: meta_2025_05_08 },
  './seasons/2025-09-12/meta.ts': { default: meta_2025_09_12 },
  './seasons/2026-01-04/meta.ts': { default: meta_2026_01_04 },
};

export const QUESTION_SEASONS: QuestionSeasonSummary[] = Object.values(
  seasonMetaModules,
)
  .map((module: any) => module.default)
  .sort((a, b) => a.id.localeCompare(b.id));

const seasonsById = new Map<SeasonId, QuestionSeasonSummary>(
  QUESTION_SEASONS.map((season) => [season.id, season]),
);

export const isSeasonId = (value: string): value is SeasonId =>
  seasonsById.has(value);

export const getSeasonById = (value?: string | null): QuestionSeasonSummary => {
  if (value && isSeasonId(value)) {
    return seasonsById.get(value)!;
  }
  return seasonsById.get(DEFAULT_SEASON_ID) || {
    id: DEFAULT_SEASON_ID,
    label: DEFAULT_SEASON_ID,
    tag: `【${DEFAULT_SEASON_ID}】`,
  };
};

const attachSeasonId = (seasonId: SeasonId, topics: TopicData[]): TopicData[] =>
  topics.map((topic) => ({
    ...topic,
    cards: topic.cards.map((card) => ({ ...card, seasonId })),
  }));

// 显式定义各个季度的 Part1 和 Part2 加载器
const part1Modules: Record<string, () => Promise<{ default: TopicData[] }>> = {
  './seasons/2025-05-08/part1.ts': () => import('./seasons/2025-05-08/part1'),
  './seasons/2025-09-12/part1.ts': () => import('./seasons/2025-09-12/part1'),
  './seasons/2026-01-04/part1.ts': () => import('./seasons/2026-01-04/part1'),
};

const part2Modules: Record<string, () => Promise<{ default: TopicData[] }>> = {
  './seasons/2025-05-08/part2.ts': () => import('./seasons/2025-05-08/part2'),
  './seasons/2025-09-12/part2.ts': () => import('./seasons/2025-09-12/part2'),
  './seasons/2026-01-04/part2.ts': () => import('./seasons/2026-01-04/part2'),
};

const loadTopics = async (
  seasonId: SeasonId,
  modules: Record<string, () => Promise<{ default: TopicData[] }>>,
  partFileName: 'part1.ts' | 'part2.ts',
): Promise<TopicData[]> => {
  const path = `./seasons/${seasonId}/${partFileName}`;
  const loader = modules[path];
  if (!loader) return [];
  const module = await loader();
  return module.default;
};

const seasonCache = new Map<SeasonId, Promise<QuestionSeason>>();

export const loadSeason = async (seasonId: SeasonId): Promise<QuestionSeason> => {
  const resolved = getSeasonById(seasonId);
  const resolvedId = resolved.id;

  const existing = seasonCache.get(resolvedId);
  if (existing) return existing;

  const promise = Promise.all([
    loadTopics(resolvedId, part1Modules, 'part1.ts'),
    loadTopics(resolvedId, part2Modules, 'part2.ts'),
  ]).then(([part1, part2]) => ({
    ...resolved,
    part1: attachSeasonId(resolvedId, part1),
    part2: attachSeasonId(resolvedId, part2),
  }));

  seasonCache.set(resolvedId, promise);
  return promise;
};