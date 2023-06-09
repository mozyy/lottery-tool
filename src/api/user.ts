import { config } from '../env';
import { Configuration, UserServiceApiFactory } from '../openapi/lottery/user';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const userServiceApi = UserServiceApiFactory(conf, config.basePath, axiosInstance);
