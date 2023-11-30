import { Empty } from '@nutui/nutui-react-taro';
import { ConfigurationParameters } from '@zyy/openapi/src/axios/lottery/lottery';
import axios from 'axios';
import { Middleware, SWRHook } from 'swr';
import { useAuthToken } from '../hooks/authToken';

export const swrFetcher = async (key, extraArg = { arg: [] }) => {
  // eslint-disable-next-line prefer-const
  let [, service, ...params] = key;
  const res = await service(...params, ...extraArg.arg);
  return res.data;
};

export const swrMiddleware: Middleware = (useSWRNext:
SWRHook) => (swrKey, swrFetcherd, swrConfig) => {
  const oauthToken = useAuthToken((s) => s.authToken);
  const logout = useAuthToken((s) => s.logout);
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
  let result;
  if (res.error) {
    //
    switch (res.error.response?.status) {
      case 401:
        logout();
        break;
      default:
    }
    let message = res.error?.response?.headers['grpc-message'];
    if (message) {
      message = decodeURIComponent(message);
      result = <Empty status="error" description={message} />;
    } else {
      result = <Empty status="network" />;
    }
  }
  if (!res.data) {
    result = <Empty />;
  }

  return { ...res, result };
};

export const configurationParameters:ConfigurationParameters = {
};

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthToken.getState().authToken?.accessToken;
  if (!config.headers.Authorization && accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
axiosInstance.interceptors.response.use((response) => {
  // eslint-disable-next-line no-console
  console.log('[API]:', response.config.url, response.config.data, response.data);
  return response;
}, (error) => {
  const message = error?.response?.headers['grpc-message'];
  // eslint-disable-next-line no-console
  console.warn('[API]:', decodeURIComponent(message), error);
  return Promise.reject(error);
});
