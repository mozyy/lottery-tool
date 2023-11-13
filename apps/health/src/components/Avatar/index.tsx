import { Avatar as NutAvatar, AvatarProps as NutAvatarProps } from '@nutui/nutui-react-taro';
import { getUrl } from '@zyy/common/src/utils/oss';
import { ossServiceApi } from '../../api/oss';
import { useSWR } from '../../hooks/swr';

export interface AvatarProps extends Partial<NutAvatarProps> {
  ossId: number | undefined
}
export default function Avatar({ ossId, ...props }:AvatarProps) {
  const { data } = useSWR(() => {
    if (!ossId) {
      return false;
    }
    return [ossServiceApi.ossServiceGet, ossId];
  });
  if (!data || !data.oss) {
    return (
      <NutAvatar
        icon={(
          <span className='material-icons-outlined'>
            account_circle
          </span>
      )}
        {...props}
      />
    );
  }
  return <NutAvatar src={getUrl(data.oss)} {...props} />;
}
