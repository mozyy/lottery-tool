import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { authTokenState } from '../store/atom';
import { useLoginHandler } from './loginHandler';

export const useLogin = () => {
  const oauthToken = useRecoilValue(authTokenState);
  const loginHandler = useLoginHandler();
  const login = useCallback(async () => {
    if (oauthToken) {
      return oauthToken;
    }
    return loginHandler();
  }, [loginHandler, oauthToken]);
  return login;
};
