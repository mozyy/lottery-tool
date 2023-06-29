module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'taro/react',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/function-component-definition': ['error', { "namedComponents": "arrow-function" }]
  },
  parserOptions: {
    project: './tsconfig.json'
  }
};
