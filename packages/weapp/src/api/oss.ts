import { Configuration, OssServiceApiFactory } from '@zyy/openapi/src/axios/oss/oss';
import { basePath } from '../env';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const ossServiceApi = OssServiceApiFactory(conf, basePath, axiosInstance);
