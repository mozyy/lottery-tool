import { login } from '@tarojs/taro';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { userServiceApi } from '../api/user';
import { OauthToken, oauthTokenState } from '../store/atom';
import { useSetStateHandler } from './setState';
import { useSWRMutation } from './swrMutation';

export const useLoginHandler = () => {
  const setOauthTokenHandler = useSetRecoilState(oauthTokenState);
  const setOauthToken = useSetStateHandler(setOauthTokenHandler);
  const { trigger } = useSWRMutation([userServiceApi.userServiceLogin]);

  const loginHandler = useCallback(async () => {
    const { code } = await login();
    const res = await trigger([{ code }]);
    if (!res.token) {
      return Promise.reject(Error('no token!'));
    }
    const token = new OauthToken(res.token);
    setOauthToken(token);
    return token;
  }, [setOauthToken, trigger]);
  return loginHandler;
};
