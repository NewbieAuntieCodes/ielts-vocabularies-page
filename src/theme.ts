// The 'styled-components' module must be imported for type augmentation to work.
// FIX: Added a side-effect import for 'styled-components' to allow module augmentation to work correctly.
import 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        bg: 'transparent',
        cardBg: '#FFFFFF',
        columnBg: '#F0F3F9',
        boxBg: '#F1F3F5',
        text: '#4F5A77',
        header: '#1B264F',
        border: '#EAEBEE',
        label: '#8A9BAB',
        
        // Brand & Accent Colors
        primary: '#6D55FF', // Indigo
        primaryLight: '#F3F0FF',
        primaryBlue: '#3498db',
        primaryOrange: '#e67e22',

        // Section specific colors
        learn: '#00C49A', // Green
        practice: '#FFAB00', // Amber
        games: '#F52F70', // Pink/Magenta
        myWords: '#6D55FF', // Indigo

        // Status colors
        primaryRed: '#e74c3c',
        newTag: '#e74c3c',

        // Tag Colors
        tagYellowText: '#D68400',
        tagYellowBg: '#FFFBE6',
        tagGreenText: '#1D8A5A',
        tagGreenBg: '#E9F9F2',
        tagBlueText: '#3478C2',
        tagBlueBg: '#EBF3FB',
        tagPurpleText: '#7B4DAB',
        tagPurpleBg: '#F5F0FA',
        
        newBadgeText: '#C55A11',
        newBadgeBg: '#FDEBDD',

        // Compatibility colors from old theme
        highlightBg: '#e9f2ff',
        // FIX: Added missing '#' to the hex color value.
        highlightBorder: '#c7dfff',
    },
    fonts: {
        body: "'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    },
    shadows: {
        subtle: '0 2px 4px rgba(77, 91, 158, 0.04)',
        main: '0 4px 6px rgba(0,0,0,0.04), 0 10px 20px rgba(77, 91, 158, 0.07)',
    },
    breakpoints: {
        mobile: '768px',
    }
};

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: linear-gradient(to bottom right, #f0f3ff, #ffffff);
        background-attachment: fixed;
        color: ${({ theme }) => theme.colors.text};
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.body};
        font-size: 16px;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .hidden {
        display: none;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from { transform: translateY(-30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideInMobile {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;