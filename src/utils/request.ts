import { request } from '@tarojs/taro';
import { useRecoilState } from 'recoil';
import { Middleware, SWRHook } from 'swr';
import { config } from '../env';
import { type ConfigurationParameters } from '../openapi/lottery/lottery';
import { oauthTokenState } from '../store/atom';

export const fetcher:WindowOrWorkerGlobalScope['fetch'] = async (url, { body, ...params }) => {
  const resp = await request({
    ...params,
    data: body,
    url,
    fail(e) {
      console.log('onError3: ', params, e);
    },
  }).catch((err) => {
    console.log('onError2: ', params, err);
    return Promise.reject(err);
  });
  const res = {
    json: () => resp.data,
    text: () => resp.data,
    status: resp.statusCode,
    clone: () => ({ ...res }),
  };
  return res as any;
};

export const configParam: ConfigurationParameters = {
  fetchApi: fetcher,
  basePath: config.basePath,
  middleware: [{
    post: async (res) => {
      console.log('request: ', res.url, res.response);
      return res.response;
    },
    onError: async (res) => {
      console.log('onError: ', res.url, res.response);
      return res.response;
    },
  }],
};

export const swrMiddleware: Middleware = (useSWRNext:
SWRHook) => (swrKey, swrFetcher, swrConfig) => {
  const [oauthToken, setOauthToken] = useRecoilState(oauthTokenState);
  let key;
  if (typeof swrKey === 'function') {
    key = () => {
      const keyValue = swrKey();
      if (!keyValue) {
        return keyValue;
      }
      return [...keyValue, oauthToken];
    };
  } else if (Array.isArray(swrKey)) {
    key = [...swrKey, oauthToken];
  }
  const res = useSWRNext(key, swrFetcher, swrConfig);
  // TODO: clear oauth Token or refresh Token
  return res;
};
