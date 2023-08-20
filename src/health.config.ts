export default defineAppConfig({
  pages: [
    'health/index/index',
    'health/mine/index',
    'health/lottery/index',
    'health/lotteryDetail/index', // ?id=
    'health/lotteryList/index',
    'health/record/index',
    'health/recordDetail/index', // ?id=
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
        pagePath: 'health/index/index',
        text: '首页',
      }, {
        pagePath: 'health/mine/index',
        text: '我的',
      },
    ],
  },
  // entryPagePath: 'pages/index/index',
  entryPagePath: 'pages/lottery/index',
  // entryPagePath: 'pages/mine/index',
});
