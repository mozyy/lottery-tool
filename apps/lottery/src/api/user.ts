import { Configuration, UserServiceApiFactory } from 'openapi/axios/wx/user';
import { config } from '../env';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const userServiceApi = UserServiceApiFactory(conf, config.basePath, axiosInstance);
