import { request } from '@tarojs/taro';
import { Configuration } from '../openapi/lottery/lottery';



export const fetcher:WindowOrWorkerGlobalScope['fetch'] = async (url, params) => {
  const resp  = await request({ ...params, url });
  return resp as any;
};

export const config = new Configuration({ fetchApi:fetcher, basePath: 'http://localhost:51051' });
