import { login } from '@tarojs/taro';
import { AuthToken } from '@zyy/common/src/model/authToken';
import { useCallback } from 'react';
import { userServiceApi } from '../api/wx';
import { setOauthToken } from '../store/atom';
import { useAuthToken } from './authToken';
import { useSWRMutation } from './swrMutation';

export const useLoginHandler = () => {
  const setOauthTokenHandler = useAuthToken((s) => s.login);
  const { trigger } = useSWRMutation([userServiceApi.userServiceLogin]);

  const loginHandler = useCallback(async () => {
    const { code } = await login();
    const res = await trigger([{ code }]);
    if (!res.token || !res.user) {
      return Promise.reject(Error('no token!'));
    }
    const token = new AuthToken(res.token, res.user);
    setOauthTokenHandler(token);
    setOauthToken(token);
    return token;
  }, [setOauthTokenHandler, trigger]);
  return loginHandler;
};
