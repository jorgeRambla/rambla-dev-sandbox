import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/projects/the-great-counter/',
  plugins: [react()],
});
