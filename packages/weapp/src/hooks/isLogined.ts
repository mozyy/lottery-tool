import { useRecoilValue } from 'recoil';
import { authTokenState } from '../store/atom';

export const useIsLogined = () => {
  const oauthToken = useRecoilValue(authTokenState);
  return !!oauthToken;
};
