import { Configuration, LotteryServiceApiFactory } from '@zyy/openapi/dist/axios/lottery/lottery';
import { RecordServiceApiFactory } from '@zyy/openapi/dist/axios/lottery/record';
import { basePath } from '../env';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const lotteryServiceApi = LotteryServiceApiFactory(conf, basePath, axiosInstance);

export const recordServiceApi = RecordServiceApiFactory(conf, basePath, axiosInstance);
