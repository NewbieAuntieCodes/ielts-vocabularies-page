import { allSubTopics } from '../vocab-app/data';

type VocabSubTopic = {
  id: string;
  title: string;
  words?: Array<unknown>;
  wordSections?: Array<{ words: Array<unknown> }>;
};

const countTopicWords = (topic: VocabSubTopic) => {
  if (topic.wordSections && topic.wordSections.length > 0) {
    return topic.wordSections.reduce(
      (sum, section) => sum + (section.words?.length || 0),
      0,
    );
  }
  return topic.words?.length || 0;
};

const vocabTopicsById = new Map<string, VocabSubTopic>(
  (allSubTopics as unknown as VocabSubTopic[]).map((t) => [t.id, t]),
);

const vocabCountByTopicId = new Map<string, number>(
  (allSubTopics as unknown as VocabSubTopic[]).map((t) => [t.id, countTopicWords(t)]),
);

const SPEAKING_CARD_ID_TO_VOCAB_TOPIC_ID: Record<string, string> = {
  'p1-c1': 'friends',
  'p1-c2': 'sharing',
  'p1-c3': 'break',
  'p1-c4': 'museum',
  'p1-c5': 'advertisement',
  'p1-c6': 'borrowing',
  'p1-c7': 'chatting',
  'p1-c8': 'veg-fruits',
  'p1-c9': 'city-crowded-place',
  'p1-c10': 'going-out',
  'p1-c11': 'old-people',
  'p1-c12': 'doing-well',
  'p1-c13': 'shoes',
  'p1-c14': 'rules',
  'p1-c15': 'public-places',
  'p1-c16': 'plants',
};

const P1_5_8_CARD_ID_ALIASES: Record<string, string> = {
  'p1-58-thank-you': 'saying-thank-you',
  'p1-58-texting': 'texting-messages',
  'p1-58-making-lists': 'making-a-list',
  'p1-58-housekeeping': 'housekeeping-cooking',
  'p1-58-outer-space': 'outer-space-stars',
};

const SPEAKING_CARD_TITLE_TO_VOCAB_TOPIC_ID: Record<string, string> = {
  Friends: 'friends',
  Sharing: 'sharing',
  'Having a break': 'break',
  Museum: 'museum',
  Advertisement: 'advertisement',
  'Borrowing/lending': 'borrowing',
  Chatting: 'chatting',
  'Going out': 'going-out',
  Shoes: 'shoes',
  Rules: 'rules',
  'Crowded place': 'city-crowded-place',
  'Public places': 'public-places',
  Plants: 'plants',
  'Growing vegetables/fruits': 'veg-fruits',
  'Staying with old people': 'old-people',
  'Doing something well': 'doing-well',
};

export const getVocabTopicIdForSpeakingCardTitle = (
  title: string,
  cardId?: string | null,
): string | null => {
  const normalizedCardId = (cardId || '').trim();
  if (normalizedCardId && vocabTopicsById.has(normalizedCardId)) return normalizedCardId;

  const mappedByCardId = SPEAKING_CARD_ID_TO_VOCAB_TOPIC_ID[normalizedCardId];
  if (mappedByCardId && vocabTopicsById.has(mappedByCardId)) return mappedByCardId;

  const mappedByCardIdAlias = P1_5_8_CARD_ID_ALIASES[normalizedCardId];
  if (mappedByCardIdAlias && vocabTopicsById.has(mappedByCardIdAlias)) return mappedByCardIdAlias;

  if (normalizedCardId.startsWith('p1-58-')) {
    const derived = normalizedCardId.replace(/^p1-58-/, '');
    if (vocabTopicsById.has(derived)) return derived;
  }

  const direct = SPEAKING_CARD_TITLE_TO_VOCAB_TOPIC_ID[title];
  if (direct && vocabTopicsById.has(direct)) return direct;

  // Fallback: try a simple lookup by normalized title.
  const normalized = title.trim().toLowerCase();
  for (const topic of vocabTopicsById.values()) {
    const topicTitle = topic.title.trim().toLowerCase();
    if (topicTitle === normalized) return topic.id;
    if (topicTitle.startsWith(`${normalized} `)) return topic.id;
  }
  return null;
};

export const getVocabCountForTopicId = (topicId: string): number =>
  vocabCountByTopicId.get(topicId) || 0;
