import { useAuthToken } from './authToken';

export const useUserId = () => {
  const oauthToken = useAuthToken((s) => s.authToken);
  return oauthToken?.userId!;
};
