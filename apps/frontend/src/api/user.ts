import { envBrowser } from '@/env.browser';
import { Configuration, UserServiceApi } from '@zyy/openapi/src/fetch/user/user';

const config = new Configuration({ basePath: envBrowser.basePath });

export const userApi = new UserServiceApi(config);
