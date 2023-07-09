import { config } from '../env';
import { Configuration, RecordServiceApiFactory } from '../openapi/lottery/record';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const recordServiceApi = RecordServiceApiFactory(conf, config.basePath, axiosInstance);
