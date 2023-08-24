import { Configuration, RecordServiceApiFactory } from 'openapi/dist/axios/lottery/record';
import { config } from '../env';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const recordServiceApi = RecordServiceApiFactory(conf, config.basePath, axiosInstance);
