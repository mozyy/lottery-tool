import { Configuration, UserServiceApiFactory } from '@zyy/openapi/dist/axios/wx/user';
import { basePath } from '../env';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const userServiceApi = UserServiceApiFactory(conf, basePath, axiosInstance);
