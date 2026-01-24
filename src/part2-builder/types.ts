export type BuildKitId = string;

export interface WordPool {
  id: string;
  title: string;
  options: string[];
}

export interface BlankSpec {
  id: string;
  label: string;
  poolId: string;
  placeholder: string;
}

export interface SentenceTemplate {
  id: string;
  label: string;
  text: string;
  blanks: BlankSpec[];
}

export interface SlotSpec {
  id: string;
  title: string;
  templates: SentenceTemplate[];
}

export interface SpeakingCardMeta {
  seasonTag?: string;
  cardTitle?: string;
  status?: 'New';
  part2Title?: string;
  part2Prompts?: string[];
  part3Questions?: string[];
}

export interface BuildKit {
  id: BuildKitId;
  title: string;
  prompt: string;
  pools: WordPool[];
  slots: SlotSpec[];
  card?: SpeakingCardMeta;
}
