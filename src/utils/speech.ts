// src/utils/speech.ts

let voices: SpeechSynthesisVoice[] = [];

/**
 * Loads and caches the available speech synthesis voices from the browser.
 * This function is called initially and whenever the voices change.
 */
const loadVoices = () => {
    voices = window.speechSynthesis.getVoices();
};

// Attempt to load voices immediately
if ('speechSynthesis' in window) {
    loadVoices();
    // The 'voiceschanged' event is fired when the list of voices has been loaded.
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
}


/**
 * Speaks the given text using the best available voice.
 * It prioritizes high-quality voices common on iOS, Android, and desktop.
 * @param {string} text The text to be spoken.
 */
export const speak = (text: string) => {
    if (!('speechSynthesis' in window) || !text) {
        console.warn('Speech synthesis not supported or no text provided.');
        return;
    }
    // Cancel any ongoing speech to prevent overlap
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // If voices are not loaded yet, try loading them again.
    // This is a fallback for browsers that load voices lazily.
    if (voices.length === 0) {
        loadVoices();
    }

    // A prioritized list of high-quality voice names across different platforms.
    const preferredVoiceNames = [
        'Samantha',                 // High-quality voice on iOS/macOS
        'Google UK English Female', // High-quality voice on Android/Chrome
        'Google US English',        // Another high-quality Google voice
        'Daniel',                   // High-quality UK voice on iOS/macOS
        'Microsoft Zira - English (United States)', // Common on Windows
        'Karen',                    // High-quality Australian voice on iOS/macOS
    ];

    let selectedVoice = voices.find(voice => preferredVoiceNames.includes(voice.name));
    
    // Fallback logic to find the best available English voice if preferred ones aren't found.
    if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en-US') && voice.default);
    }
    if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en-GB') && voice.name.includes('Google'));
    }
    if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en-US') && voice.name.includes('Google'));
    }
    if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en-GB'));
    }
    if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en-US'));
    }

    utterance.voice = selectedVoice || null;
    utterance.lang = selectedVoice ? selectedVoice.lang : 'en-US';
    utterance.rate = 0.9; // Slightly slower for clarity
    
    window.speechSynthesis.speak(utterance);
};
