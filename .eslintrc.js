module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    "plugin:react-hooks/recommended",
  ],
  rules: {
    'linebreak-style': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    // 'react/function-component-definition': ['error', { "namedComponents": "arrow-function" }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
