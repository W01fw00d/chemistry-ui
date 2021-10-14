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
  plugins: ['react'],
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'off',
    // TODO: investigate and remove all rules from first to this one
    'max-len': ['error', { code: 100 }],
    'no-return-assign': ['warn'],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': ['warn'],
  },
};
