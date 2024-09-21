import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['canvas'], // Exclut 'canvas' du bundle
    },
  },
});
