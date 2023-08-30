export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/account/index',
    'pages/lottery/index',
    'pages/lotteryDetail/index', // ?id=
    'pages/lotteryList/index',
    'pages/record/index',
    'pages/recordDetail/index', // ?id=
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    selectedColor: '#0064d2',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/images/extension_FILL0_wght400_GRAD0_opsz24.png',
        selectedIconPath: './assets/images/extension_FILL1_wght400_GRAD0_opsz24.png',
        text: '首页',
      }, {
        pagePath: 'pages/mine/index',
        iconPath: './assets/images/person_FILL0_wght400_GRAD0_opsz24.png',
        selectedIconPath: './assets/images/person_FILL1_wght400_GRAD0_opsz24.png',
        text: '我的',
      },
    ],
  },
  // entryPagePath: 'pages/index/index',
  // entryPagePath: 'pages/lottery/index',
  // entryPagePath: 'pages/mine/index',
});
