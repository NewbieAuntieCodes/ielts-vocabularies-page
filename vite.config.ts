import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/ielts-vocabularies-page/',
    server: {
        // NOTE: Avoid port 5000 on macOS (often occupied by AirTunes/Control Center).
        port: 53127,
        strictPort: false,
    },
    preview: {
        port: 53127,
        strictPort: false,
    },
});
