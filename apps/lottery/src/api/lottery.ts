import { Configuration, LotteryServiceApiFactory } from '@zyy/openapi/dist/axios/lottery/lottery';
import { RecordServiceApiFactory } from '@zyy/openapi/dist/axios/lottery/record';
import { config } from '../env';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const lotteryServiceApi = LotteryServiceApiFactory(conf, config.basePath, axiosInstance);

export const recordServiceApi = RecordServiceApiFactory(conf, config.basePath, axiosInstance);
