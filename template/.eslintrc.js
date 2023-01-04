module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: ['@react-native-community'],
  plugins: ['jest'],
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['off'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'react-hooks/exhaustive-deps': 'off',
    'no-extra-semi': ['off'],
    'dot-notation': ['off'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}