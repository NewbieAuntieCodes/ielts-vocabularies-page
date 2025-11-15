export interface Word {
  word: string;
  phonetic: string;
  definition: string;
  example: string;
  emoji: string;
}

export interface WordSection {
  title: string;
  words: Word[];
}

export interface SubTopic {
  id: string;
  title: string;
  type: string;
  color: 'yellow' | 'blue' | 'green' | 'purple';
  words?: Word[];
  wordSections?: WordSection[];
  badge?: string;
  // FIX: Add optional 'isNew' property to allow its usage in SubTopic objects.
  isNew?: boolean;
}

export interface IeltsTopic {
  title: string;
  subTopics: SubTopic[];
}