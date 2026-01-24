/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import IELTSListeningVocabApp from './src/App';
import './index.css';

// --- Rendering Logic for standalone preview ---
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<React.StrictMode><HashRouter><IELTSListeningVocabApp /></HashRouter></React.StrictMode>);
}
