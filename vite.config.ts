import react from '@vitejs/plugin-react';
import { checker } from 'vite-plugin-checker';
import readableClassnames from 'vite-plugin-readable-classnames';
import sassDts from 'vite-plugin-sass-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "src/**/*.{ts,tsx,js,jsx}"',
        useFlatConfig: true,
      },
    }),
    react(),
    readableClassnames(),
    sassDts({
      enabledMode: ['development'],
      esmExport: true,
    }),
    tsconfigPaths(),
  ],
  base: '',
  test: {
    globals: true, // (опционально) позволяет использовать describe, test без импорта
    environment: 'jsdom',
    // setupFiles: ['./vitest-setup.js'],
    setupFiles: './src/setupTests.ts', // файл предварительной настройки
  },
  server: {
    open: true,
  },
});
