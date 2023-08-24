module.exports = {
  extends: ["plugin:import/recommended","airbnb", "airbnb-typescript", "next"],
  rules: {
    // 'linebreak-style': 0,
    // // '@typescript-eslint/dot-notation': 0,
    // 'react/prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
    
    // 'no-bitwise': 0,
    // 'import/prefer-default-export': 0,
    // 'no-underscore-dangle': 0,
    // '@typescript-eslint/naming-convention': 0,
    // "react/jsx-uses-react": "off",
    // "react/react-in-jsx-scope": "off",
    // "no-nested-ternary": 'off',
    // "react/no-array-index-key": 'off',
    // "react/jsx-fragments": 'off',
    // // "no-console": 'off',
    "@typescript-eslint/no-unused-vars": "warn",
    "import/prefer-default-export": "off",
    // "react/function-component-definition": [
    //   "warn",
    //   { namedComponents: "arrow-function" },
    // ],
  //   "sort-imports": ["error",{
  //     memberSyntaxSortOrder:["none"],
  //   }
  // ],
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "@/*",
            group: "external",
          },
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*"]
      }
    ],
    "react-hooks/exhaustive-deps": 'error',
    "react/require-default-props": 'off',
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
