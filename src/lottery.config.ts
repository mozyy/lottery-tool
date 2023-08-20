export default defineAppConfig({
  pages: [
    'lottery/index/index',
    'lottery/mine/index',
    'lottery/lottery/index',
    'lottery/lotteryDetail/index', // ?id=
    'lottery/lotteryList/index',
    'lottery/record/index',
    'lottery/recordDetail/index', // ?id=
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
        pagePath: 'lottery/index/index',
        text: '首页',
      }, {
        pagePath: 'lottery/mine/index',
        text: '我的',
      },
    ],
  },
  // entryPagePath: 'lottery/index/index',
  // entryPagePath: 'lottery/lottery/index',
  // entryPagePath: 'lottery/mine/index',
});
