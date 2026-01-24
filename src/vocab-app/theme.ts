
import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        bg: '#f8fafc',
        cardBg: '#FFFFFF',
        columnBg: '#f1f5f9',
        boxBg: '#f1f5f9',
        text: '#475569',
        header: '#1e293b',
        border: '#e2e8f0',
        label: '#64748b',
        
        // Brand & Accent Colors
        primary: '#4f46e5', // Indigo 600
        primaryLight: '#eef2ff',
        primaryBlue: '#3b82f6',
        primaryOrange: '#f59e0b',

        // Section specific colors
        learn: '#10b981', // Emerald 500
        practice: '#f59e0b', // Amber 500
        games: '#f43f5e', // Rose 500
        myWords: '#6366f1', // Indigo 500

        // Status colors
        primaryRed: '#ef4444',
        newTag: '#ef4444',

        // Tag Colors
        tagYellowText: '#b45309',
        tagYellowBg: '#fef3c7',
        tagGreenText: '#047857',
        tagGreenBg: '#d1fae5',
        tagBlueText: '#1d4ed8',
        tagBlueBg: '#dbeafe',
        tagPurpleText: '#7e22ce',
        tagPurpleBg: '#f3e8ff',
        
        newBadgeText: '#9a3412',
        newBadgeBg: '#ffedd5',

        // Compatibility colors
        highlightBg: '#eff6ff',
        highlightBorder: '#bfdbfe',
    },
    fonts: {
        body: "'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    },
    shadows: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        main: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        large: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    breakpoints: {
        mobile: '768px',
    }
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #f8fafc;
        color: #475569;
        margin: 0;
        font-family: ${({ theme }: { theme: any }) => theme.fonts.body};
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
