import { config } from '../env';
import { Configuration, LotteryServiceApi } from '../openapi/lottery/lottery';
import { fetcher } from '../utils/request';

const conf = new Configuration({ fetchApi: fetcher, basePath: config.basePath });

export const lotteryServiceApi = new LotteryServiceApi(conf);
