export default {
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/lottery/index',
    'pages/lotteryDetail/index', // ?id=
    'pages/lotteryList/index',
    'pages/record/index',
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
  // entryPagePath: 'pages/index/index',
  entryPagePath: 'pages/lottery/index',
  // entryPagePath: 'pages/mine/index',
};
