import { ConfigurationParameters } from '@zyy/openapi/src/fetch/user/user';
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
  const setOauthToken = useAuthToken((s) => s.logout);
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
        setOauthToken();
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
  accessToken: () => useAuthToken.getState().authToken?.userId || '',
};
