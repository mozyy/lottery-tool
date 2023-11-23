import { useAuthToken } from './authToken';

export const useIsLogined = () => {
  const oauthToken = useAuthToken((s) => s.authToken);
  return !!oauthToken;
};
