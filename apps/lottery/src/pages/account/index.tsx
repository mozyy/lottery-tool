import { Right } from '@nutui/icons-react-taro';
import {
  Cell, CellGroup,
} from '@nutui/nutui-react-taro';
import { BaseEventOrig, Button, Navigator } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { userServiceApi } from '@zyy/weapp/src/api/user';
import Avatar from '@zyy/weapp/src/components/Avatar';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useGetUserInfoByUserId } from '@zyy/weapp/src/hooks/getUserInfoByUserId';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { useUploadOss } from '@zyy/weapp/src/hooks/uploadOss';
import { useUserId } from '@zyy/weapp/src/hooks/userId';

function Account() {
  const userId = useUserId();
  const { data: dataInfo, mutate } = useGetUserInfoByUserId(userId);
  const { trigger } = useSWRMutation([userServiceApi.userServiceUpdateInfo]);
  const uploadOss = useUploadOss();
  const toPage = (url: string) => () => {
    navigateTo({ url });
  };
  const onChooseAvatar = async (e: BaseEventOrig) => {
    const url = e.detail.avatarUrl;
    const resp = await uploadOss(url);
    const info = {
      ...dataInfo?.info,
      avatar: resp.id,
    };
    await trigger([dataInfo?.info?.id!, { info }]);
    mutate();
  };

  return (
    <div className="p-2">
      <CellGroup>
        <Button className="after:content-none" openType="chooseAvatar" onChooseAvatar={onChooseAvatar}>
          <Cell
            title={<span className="text-left">头像</span>}
            align="center"
            extra={(
              <div className="flex items-center">
                <Avatar ossId={dataInfo?.info?.avatar} size="large" />
                <Right />
              </div>
          )}
          />
        </Button>
        <Navigator url="/pages/accountName/index">
          <Cell
            title="名字"
            extra={(
              <div className="flex items-center">
                {dataInfo?.info?.name}
                <Right />
              </div>
            )}
          />
        </Navigator>
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(Account);
