import { login } from '@tarojs/taro';
import { useCallback } from 'react';
import { userServiceApi } from '../api/user';
import { clientId } from '../env';
import { useAuthToken } from './authToken';
import { useSWRMutation } from './swrMutation';

export const useLoginHandler = () => {
  const setOauthTokenHandler = useAuthToken((s) => s.login);
  const { trigger } = useSWRMutation([userServiceApi.userServiceLoginWeixin]);

  const loginHandler = useCallback(async () => {
    const { code } = await login();
    const res = await trigger([{ code, clientId }]);
    if (!res) {
      return Promise.reject(Error('no token!'));
    }
    setOauthTokenHandler(res);
    return res;
  }, [setOauthTokenHandler, trigger]);
  return loginHandler;
};
