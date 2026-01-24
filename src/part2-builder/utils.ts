import { BuildKit, SentenceTemplate } from './types';

export const replaceAll = (source: string, search: string, replacement: string): string =>
  source.split(search).join(replacement);

export const renderSentence = (
  template: SentenceTemplate,
  selections: Record<string, string | undefined>,
): string => {
  let result = template.text;
  template.blanks.forEach((blank) => {
    const value = selections[blank.id];
    result = replaceAll(result, blank.placeholder, value && value.trim() ? value : '___');
  });
  return result;
};

const randomFrom = (items: string[]): string | undefined => {
  if (!items || items.length === 0) return undefined;
  return items[Math.floor(Math.random() * items.length)];
};

export const buildInitialState = (kit: BuildKit) => {
  const selectedTemplateBySlot: Record<string, string> = {};
  const selections: Record<string, string | undefined> = {};

  kit.slots.forEach((slot) => {
    const firstTemplate = slot.templates[0];
    selectedTemplateBySlot[slot.id] = firstTemplate.id;
    firstTemplate.blanks.forEach((blank) => {
      selections[blank.id] = undefined;
    });
  });

  return { selectedTemplateBySlot, selections };
};

export const fillRandomSelections = (
  kit: BuildKit,
  selectedTemplateBySlot: Record<string, string>,
  currentSelections: Record<string, string | undefined>,
): Record<string, string | undefined> => {
  const poolsById = new Map(kit.pools.map((p) => [p.id, p]));
  const next: Record<string, string | undefined> = { ...currentSelections };

  kit.slots.forEach((slot) => {
    const templateId = selectedTemplateBySlot[slot.id] || slot.templates[0]?.id;
    const template = slot.templates.find((t) => t.id === templateId) || slot.templates[0];
    if (!template) return;

    template.blanks.forEach((blank) => {
      if (next[blank.id]) return;
      const pool = poolsById.get(blank.poolId);
      if (!pool) return;
      next[blank.id] = randomFrom(pool.options);
    });
  });

  return next;
};

