import { useCallback } from 'react';
import { useAuthToken } from './authToken';
import { useLoginHandler } from './loginHandler';

export const useLogin = () => {
  const oauthToken = useAuthToken((s) => s.authToken);
  const loginHandler = useLoginHandler();
  const login = useCallback(async () => {
    if (oauthToken) {
      return oauthToken;
    }
    return loginHandler();
  }, [loginHandler, oauthToken]);
  return login;
};
