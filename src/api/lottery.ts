import { LotteryServiceApi } from '../openapi/lottery/lottery';
import { config } from '../utils/request';

export const lotteryServiceApi = new LotteryServiceApi(config);
