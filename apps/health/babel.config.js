// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true
      },
    ],
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/icons-react-taro",
        "libraryDirectory": "dist/es/icons",
        // "style": 'css',
        "camel2DashComponentName": false
      },
      'nutui-react-taro'
    ]
  ],
};
