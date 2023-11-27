import { ConfigurationParameters } from '@zyy/openapi/src/fetch/user/user';
import { Middleware, SWRHook } from 'swr';
import { useAuthToken } from '../hooks/authToken';

export const swrFetcher = async (key, extraArg = { arg: [] }) => {
  const [, obj, method, ...params] = key;
  const res = await obj[method](...params, ...extraArg.arg);
  return res;
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
  if (res.error) {
    switch (res.error.response?.status) {
      case 401:
        logout();
        break;
      default:
        // eslint-disable-next-line no-case-declarations
        let message = res.error.response?.headers['grpc-message'];
        if (message) {
          message = decodeURIComponent(message);
        } else {
          message = res.error.message;
        }
        console.error('error: ', message, res);
    }
  }

  return res;
};

export const configurationParameters:ConfigurationParameters = {
  accessToken: () => useAuthToken.getState().authToken?.userId || '',
};
