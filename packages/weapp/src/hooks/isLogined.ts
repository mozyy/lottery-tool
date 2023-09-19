import { useRecoilValue } from 'recoil';
import { oauthTokenState } from '../store/atom';

export const useIsLogined = () => {
  const oauthToken = useRecoilValue(oauthTokenState);
  return !!oauthToken;
};
