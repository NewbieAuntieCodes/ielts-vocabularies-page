import React from 'react';
import VocabApp from '../vocab-app/App';
import { VocabDataProvider } from '../vocab-app/context/VocabDataContext';
import { listeningVocabData } from '../vocab-app/data-sources/listening';

const ListeningVocabPage: React.FC = () => {
    return (
        <VocabDataProvider data={listeningVocabData}>
            <VocabApp />
        </VocabDataProvider>
    );
};

export default ListeningVocabPage;

