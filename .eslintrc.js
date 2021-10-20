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
    'import/extensions': 'warn',
    'import/no-extraneous-dependencies': 'off', // TODO: remove after fixing code
    'max-len': ['error', { code: 100 }],
    'no-return-assign': ['warn'],
    'no-unused-vars': 'off', // TODO: remove after fixing code?
    'prefer-promise-reject-errors': ['off'],
    'react/forbid-prop-types': 'off', // TODO: remove after fixing code
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': 'off', // TODO: remove after fixing code
    'react/jsx-sort-default-props': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/no-array-index-key': 'off', // TODO: remove after fixing code
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
