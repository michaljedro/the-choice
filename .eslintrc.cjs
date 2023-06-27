module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
      },
    ],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'always'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'react/no-unescaped-entities': 'off',
  },
};
