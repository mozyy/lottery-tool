export default {
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/lottery/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      }, {
        pagePath: 'pages/mine/index',
        text: '我的',
      },
    ],
  },
  entryPagePath: 'pages/lottery/index',
};
