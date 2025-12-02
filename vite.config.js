import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
    build: {
    outDir: 'dist',
    },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/main.scss";`
      }
    }
  }
});
