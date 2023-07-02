import { config } from '../env';
import { Configuration, LotteryServiceApiFactory } from '../openapi/lottery/lottery';
import { axiosInstance, configurationParameters } from '../utils/request';

const conf = new Configuration(configurationParameters);

export const lotteryServiceApi = LotteryServiceApiFactory(conf, config.basePath, axiosInstance);
