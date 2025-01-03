import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  
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
