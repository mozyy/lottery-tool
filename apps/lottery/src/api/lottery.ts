import { Configuration, LotteryServiceApiFactory } from '@zyy/openapi/src/axios/lottery/lottery';
import { RecordServiceApiFactory } from '@zyy/openapi/src/axios/lottery/record';
import { basePath } from '@zyy/weapp/src/env';
import { axiosInstance, configurationParameters } from '@zyy/weapp/src/utils/request';

const conf = new Configuration(configurationParameters);

export const lotteryServiceApi = LotteryServiceApiFactory(conf, basePath, axiosInstance);

export const recordServiceApi = RecordServiceApiFactory(conf, basePath, axiosInstance);
