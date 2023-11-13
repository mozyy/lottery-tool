import { Avatar as NutAvatar, AvatarProps as NutAvatarProps } from '@nutui/nutui-react-taro';
import { previewImage } from '@tarojs/taro';
import { getImage, getUrl } from '@zyy/common/src/utils/oss';
import { ossServiceApi } from '../../api/oss';
import { useSWR } from '../../hooks/swr';

export interface AvatarProps extends Partial<NutAvatarProps> {
  ossId: number | undefined
  preview?: boolean
}
export default function Avatar({ ossId, preview, ...props }:AvatarProps) {
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
          <span className="material-icons-outlined">
            account_circle
          </span>
      )}
        {...props}
      />
    );
  }
  const { oss } = data;
  return (
    <NutAvatar
      src={getImage(oss, { process: 'resize,w_120,h_120/quality,q_75' })}
      {...props}
      onClick={(e) => {
        if (props.onClick) {
          props.onClick(e);
        }
        if (preview) {
          const url = getUrl(oss);
          previewImage({ urls: [url], current: url });
          e.stopPropagation();
        }
      }}
    />
  );
}
