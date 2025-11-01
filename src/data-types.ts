export interface Word {
  word: string;
  phonetic: string;
  definition: string;
  example: string;
  emoji: string;
}

export interface SubTopic {
  id: string;
  title: string;
  type: string;
  color: 'yellow' | 'blue' | 'green' | 'purple';
  words: Word[];
  isNew?: boolean;
}

export interface IeltsTopic {
  title: string;
  subTopics: SubTopic[];
}