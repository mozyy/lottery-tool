import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { oauthTokenState } from '../store/atom';
import { useLoginHandler } from './loginHandler';

export const useLogin = () => {
  const oauthToken = useRecoilValue(oauthTokenState);
  const loginHandler = useLoginHandler();
  const login = useCallback(async () => {
    if (oauthToken) {
      return oauthToken;
    }
    return loginHandler();
  }, [loginHandler, oauthToken]);
  return login;
};
