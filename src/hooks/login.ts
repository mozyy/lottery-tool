import { login } from '@tarojs/taro';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { userServiceApi } from '../api/user';
import { oauthTokenState } from '../store/atom';
import { useSetStateHandler } from './setState';

export const useLogin = () => {
  const setOauthInfoHandler = useSetRecoilState(oauthTokenState);
  const setOauthInfo = useSetStateHandler(setOauthInfoHandler);
  const loginHandler = useCallback(async () => {
    const { code } = await login();
    const res = await userServiceApi.userServiceLogin({ body: { code } });
    setOauthInfo(res.token!);
    return res;
  }, [setOauthInfo]);
  return loginHandler;
};
