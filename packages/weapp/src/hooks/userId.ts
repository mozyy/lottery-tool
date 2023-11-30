import { useAuthToken } from './authToken';

export const useUserId = () => {
  const jwt = useAuthToken((s) => s.jwt);
  return jwt?.sub!;
};
