import { useRecoilValue } from 'recoil';
import { authTokenState } from '../store/atom';

export const useUserId = () => {
  const oauthToken = useRecoilValue(authTokenState);
  return oauthToken?.userId!;
};
