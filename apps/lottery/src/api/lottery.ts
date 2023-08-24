import { Configuration, LotteryServiceApiFactory } from 'openapi/axios/lottery/lottery';
import { config } from '../env';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const lotteryServiceApi = LotteryServiceApiFactory(conf, config.basePath, axiosInstance);
