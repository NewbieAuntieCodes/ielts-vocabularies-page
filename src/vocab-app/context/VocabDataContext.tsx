import React, { createContext, useContext, ReactNode } from 'react';
import { IeltsTopic, SubTopic } from '../data-types';

export type VocabFilterChip = {
    id: string;
    label: string;
    isEssential?: boolean;
};

export type VocabFilterConfig = {
    defaultId: string;
    chips: VocabFilterChip[];
    filterSubTopic: (subTopic: SubTopic, filterId: string) => boolean;
};

export type VocabData = {
    id: string;
    title?: string;
    ieltsTopics: IeltsTopic[];
    allSubTopics: (SubTopic & { description?: string; illustration?: any; theme?: string })[];
    filters?: VocabFilterConfig;
};

const VocabDataContext = createContext<VocabData | null>(null);

export const VocabDataProvider: React.FC<{ data: VocabData; children: ReactNode }> = ({
    data,
    children,
}) => <VocabDataContext.Provider value={data}>{children}</VocabDataContext.Provider>;

export const useVocabData = (): VocabData => {
    const context = useContext(VocabDataContext);
    if (!context) {
        throw new Error('useVocabData must be used within a VocabDataProvider');
    }
    return context;
};

