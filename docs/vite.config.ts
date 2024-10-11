import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: 'https://pallassystems.github.io/website-core/',
  resolve: {
    alias: [
      {
        find: '@pallassystems/website-core/website.css',
        replacement: path.resolve(__dirname, '../dist/website.css'),
      },
      {
        find: '@pallassystems/website-core',
        replacement: path.resolve(__dirname, '../src/'),
      },
    ],
  },
});
