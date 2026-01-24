
export interface Word {
  word: string;
  phonetic: string;
  definition: string;
  example: string;
  emoji: string;
  level?: 'basic' | 'advanced'; // 新增：难度等级，决定视觉颜色
}

export interface WordSection {
  title: string;
  words: Word[];
}

export type SectionType = 'Part 1' | 'Part 2 & 3' | 'High Frequency' | 'Common';

export interface SubTopic {
  id: string;
  title: string;
  type: string;
  color: 'yellow' | 'blue' | 'green' | 'purple';
  section?: SectionType; 
  words?: Word[];
  wordSections?: WordSection[];
  badge?: string;
  isNew?: boolean;
  seasons?: string[]; 
}

export interface IeltsTopic {
  title: string;
  section: SectionType;
  subTopics: SubTopic[];
}
