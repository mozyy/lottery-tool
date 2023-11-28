import { Configuration, UserServiceApi } from '@zyy/openapi/src/fetch/user/user';
import { configurationParameters } from '../utils/request';

const config = new Configuration(configurationParameters);

export const userApi = new UserServiceApi(config);
