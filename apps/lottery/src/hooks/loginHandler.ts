import { login } from '@tarojs/taro';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { userServiceApi } from '../api/wx';
import { OauthToken, oauthTokenState, setOauthToken } from '../store/atom';
import { useSWRMutation } from './swrMutation';

export const useLoginHandler = () => {
  const setOauthTokenHandler = useSetRecoilState(oauthTokenState);
  const { trigger } = useSWRMutation([userServiceApi.userServiceLogin]);

  const loginHandler = useCallback(async () => {
    const { code } = await login();
    const res = await trigger([{ code }]);
    if (!res.token || !res.user) {
      return Promise.reject(Error('no token!'));
    }
    const token = new OauthToken(res.token, res.user);
    setOauthTokenHandler(token);
    setOauthToken(token);
    return token;
  }, [setOauthTokenHandler, trigger]);
  return loginHandler;
};
