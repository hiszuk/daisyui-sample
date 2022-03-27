module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'google',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    semi: ['off', 'always'],
    'object-curly-spacing': ['error', 'always'],
    indent: ['error', 2],
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    'no-unused-vars': [1],
    'react/prop-types': ['off'],
  },
}
