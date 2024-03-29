module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'sort-destructure-keys', 'sort-keys-fix', 'unused-imports'],
  rules: {
    'import/no-extraneous-dependencies': 'off', // TODO: Issue #54
    'max-len': ['error', { code: 100 }],
    'no-return-assign': ['warn'],
    'react/forbid-prop-types': 'off', // TODO: Issue #55
    'react/jsx-props-no-spreading': 'off', // TODO: Issue #55
    'react/jsx-sort-default-props': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': ['warn'],
    'sort-destructure-keys/sort-destructure-keys': ['warn', { caseSensitive: false }],
    'sort-keys-fix/sort-keys-fix': ['warn', 'asc', { caseSensitive: false, natural: true }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
