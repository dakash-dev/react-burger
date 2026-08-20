import path from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import cssModulesPlugin from 'eslint-plugin-css-modules';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// Вычисление резервного пути (Fallback) для старых версий Node.js
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig([
  // 1. Глобальные исключения для линтера
  {
    ignores: [
      '*.config.*',
      '**/*.d.ts',
      'dist',
      'node_modules',
      'package*.json',
      'public',
      'storybook-static',
    ],
  },
  // 2. Базовые глобальные пресеты плагинов
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  // 3. Общие правила для ВСЕХ файлов проекта (.js, .jsx, .ts, .tsx)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'css-modules': cssModulesPlugin,
      perfectionist,
      react,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
    },
    rules: {
      'import/order': 'off',
      'css-modules/no-undef-class': 'error',
      'css-modules/no-unused-class': 'warn',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'unused-imports/no-unused-imports': 'error',
      // Настройка сортировки импортов (Perfectionist)
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          groups: [
            'value-builtin',
            'value-external',
            'value-internal',
            ['value-parent', 'value-sibling'],
            [
              'type-import',
              'type-internal',
              'type-parent',
              'type-sibling',
              'type-index',
            ],
            'ts-equals-import',
            'side-effect-style',
            'style',
          ],
          internalPattern: [
            '^/',
            '@/',
            '^@components/',
            '^@contexts/',
            '^@hocs/',
            '^@hooks/',
            '^@pages/',
            '^@services/',
            '^@utils/',
          ],
          customGroups: {
            value: {
              'base-components': ['/*/*/[!-]*/*.*'],
              'compound-components': ['/*/*/*-*/*.*'],
            },
          },
          newlinesBetween: 'always',
        },
      ],
    },
    settings: {
      'css-modules': {
        camelCase: 'true',
        filetypes: {
          '.css': 'postcss',
          '.module.css': 'postcss',
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
  // 4. Правила, специфичные ТОЛЬКО для старого JavaScript-кода (.js, .jsx)
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'no-unused-vars': 'off',
      'import/no-unresolved': 'off', // ГАРАНТИРОВАННО ОТКЛЮЧАЕМ ДЛЯ JS
      'import/no-unused-modules': 'off', // ГАРАНТИРОВАННО ОТКЛЮЧАЕМ ДЛЯ JS
      'unused-imports/no-unused-vars': 'error',
    },
  },
  // 5. Строгая проверка типов ТОЛЬКО для новых файлов TypeScript (.ts, .tsx)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
        tsconfigRootDir: import.meta.dirname ?? __dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // Подмешиваем правила TypeChecked
      ...tseslint.configs.recommendedTypeChecked?.rules,
      ...tseslint.configs.stylisticTypeChecked?.rules,
      // Кастомные правила TypeScript
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: false,
          ignoreProperties: false,
        },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],

      // Контроль неиспользуемых переменных и импортов в TS
      '@typescript-eslint/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_[a-zA-Z0-9_]*$',
          caughtErrorsIgnorePattern: '^_[a-zA-Z0-9_]*$',
          vars: 'all',
          varsIgnorePattern: '^_[a-zA-Z0-9_]*$',
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
  // 6. Форматирование кода через Prettier (в самом конце)
  eslintPluginPrettierRecommended,
]);
