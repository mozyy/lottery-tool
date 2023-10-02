import { Right } from '@nutui/icons-react';
import {
  Cell, CellGroup,
} from '@nutui/nutui-react-taro';
import { BaseEventOrig, Button, Navigator } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { UserNewUser } from '@zyy/openapi/src/axios/wx/user';
import { userServiceApi } from '@zyy/weapp/src/api/wx';
import Avatar from '@zyy/weapp/src/components/Avatar';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { useUploadOss } from '@zyy/weapp/src/hooks/uploadOss';
import { useUserId } from '@zyy/weapp/src/hooks/userId';

function Account() {
  const userId = useUserId();
  const { data, mutate } = useSWR([userServiceApi.userServiceGetByUserId, userId]);
  const { trigger } = useSWRMutation([userServiceApi.userServiceUpdate]);
  const uploadOss = useUploadOss();
  const toPage = (url: string) => () => {
    navigateTo({ url });
  };
  const onChooseAvatar = async (e: BaseEventOrig) => {
    const url = e.detail.avatarUrl;
    const resp = await uploadOss(url);
    const wxUser = data?.wxUser;
    const user:UserNewUser = {
      userId: wxUser?.userId,
      openid: wxUser?.openid,
      unionid: wxUser?.unionid,
      sessionKey: wxUser?.sessionKey,
      name: wxUser?.name,
      avatar: resp.id,
      mobile: wxUser?.mobile,
    };
    await trigger([data?.wxUser?.id!, { wxUser: user }]);
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
                <Avatar ossId={data?.wxUser?.avatar} size="large" />
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
                {data?.wxUser?.name}
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
