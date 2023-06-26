import { request } from '@tarojs/taro';
import { config } from '../env';
import { ConfigurationParameters } from '../openapi/lottery/lottery';



export const fetcher:WindowOrWorkerGlobalScope['fetch'] = async (url, { body, ...params }) => {
  const resp  = await request({ ...params, data: body, url, fail(e) {
    console.log('onError3: ', params, e);
  } }).catch(err => {
    console.log('onError2: ', params, err);
    return Promise.reject(err);
  });
  const res = {
    json:() => resp.data, 
    text:() => resp.data,
    status: resp.statusCode,
  };
  return res as any;
};
export const configParam: ConfigurationParameters = { 
  fetchApi:fetcher, 
  basePath: config.basePath, 
  middleware: [{ 
    post: async (res) => {
      console.log('request: ', res.url, res.response);
      return res.response;
    },
    onError:async (res) => {
      console.log('onError: ', res.url, res.response);
      return res.response;
    },
  }],
};
