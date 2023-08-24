import merge from 'lodash/merge';

import health from './health.config';
import lottery from './lottery.config';

const app = process.env.TARO_APP_APP as keyof typeof apps;

const apps = {
  health,
  lottery,
};
const appConfig = apps[app];

const commonConfig = defineAppConfig({
  // renderer: 'skyline',
  // lazyCodeLoading: 'requiredComponents',
});
const config = merge(commonConfig, appConfig);
export default config;
