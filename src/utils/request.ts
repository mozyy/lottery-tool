import axios from 'axios';
import { useRecoilState } from 'recoil';
import { Middleware, SWRHook } from 'swr';
import { ConfigurationParameters } from '../openapi/lottery/lottery';
import { getAccessToken, oauthTokenState } from '../store/atom';

export const swrFetcher = async (key, extraArg = { arg: [] }) => {
  // eslint-disable-next-line prefer-const
  let [token, service, ...params] = key;
  const res = await service(...params, ...extraArg.arg);
  return res.data;
};

export const swrMiddleware: Middleware = (useSWRNext:
SWRHook) => (swrKey, swrFetcherd, swrConfig) => {
  const [oauthToken, setOauthToken] = useRecoilState(oauthTokenState);
  let key;
  if (typeof swrKey === 'function') {
    key = () => {
      const keyValue = swrKey();
      if (!keyValue) {
        return keyValue;
      }
      return [oauthToken, ...keyValue];
    };
  } else if (Array.isArray(swrKey)) {
    key = [oauthToken, ...swrKey];
  } else {
    throw Error('not support');
  }
  const res = useSWRNext(key, swrFetcherd, swrConfig);
  // TODO: clear oauth Token or refresh Token
  if (res.error) {
    //
    console.warn(res.error);
  }
  return res;
};

export const configurationParameters:ConfigurationParameters = {
  accessToken: getAccessToken,
};

export const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((response) => {
  console.log('[API]:', response.config.url, response.request, response.data);
  return response;
}, (error) => {
  console.log('[API]:', error);
  return Promise.reject(error);
});
