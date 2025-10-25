export interface Word {
  word: string;
  phonetic: string;
  definition: string;
  example: string;
}

export interface SubTopic {
  id: string;
  title: string;
  type: string;
  color: 'yellow' | 'blue' | 'green' | 'purple';
  words: Word[];
}

export interface IeltsTopic {
  title: string;
  subTopics: SubTopic[];
}
