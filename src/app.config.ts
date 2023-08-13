import health from './health.config';
import lottery from './lottery.config';

const app = process.env.TARO_APP_APP as keyof typeof apps;

const apps = {
  health,
  lottery,
};

export default apps[app];
