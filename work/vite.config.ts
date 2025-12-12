import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  // Base path for GitHub Pages deployment
  // Change to '/' if deploying to custom domain or root
  base: '/guofsyrians-slider/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
