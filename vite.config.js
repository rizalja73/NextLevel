// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',
  server: {
    open: true,
    port: 5173,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
