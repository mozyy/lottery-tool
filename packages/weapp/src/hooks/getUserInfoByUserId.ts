import { userServiceApi } from '../api/user';
import { useSWR } from './swr';

export const useGetUserInfoByUserId = (userId?: string) => {
  const { data: dataUser } = useSWR(() => {
    if (!userId) {
      return false;
    }
    return [userServiceApi.userServiceGet, userId];
  });
  return useSWR(() => {
    if (!dataUser?.user?.infoId) {
      return false;
    }
    return [userServiceApi.userServiceGetInfo, dataUser.user.infoId];
  });
};
