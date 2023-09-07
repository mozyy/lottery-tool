import { useRecoilValue } from 'recoil';
import { oauthTokenState } from '../store/atom';

export const useUserId = () => {
  const oauthToken = useRecoilValue(oauthTokenState);
  return oauthToken?.userId!;
};
