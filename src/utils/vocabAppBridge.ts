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
): string | null => {
  const direct = SPEAKING_CARD_TITLE_TO_VOCAB_TOPIC_ID[title];
  if (direct) return direct;

  // Fallback: try a simple lookup by normalized title.
  const normalized = title.trim().toLowerCase();
  for (const topic of vocabTopicsById.values()) {
    const topicTitle = topic.title.trim().toLowerCase();
    if (topicTitle === normalized) return topic.id;
  }
  return null;
};

export const getVocabCountForTopicId = (topicId: string): number =>
  vocabCountByTopicId.get(topicId) || 0;

