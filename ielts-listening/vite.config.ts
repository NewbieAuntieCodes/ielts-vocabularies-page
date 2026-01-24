import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    // NOTE: Avoid port 5000 on macOS (often occupied by AirTunes/Control Center).
    port: 53128,
    strictPort: true,
  },
  preview: {
    port: 53128,
    strictPort: true,
  },
})
