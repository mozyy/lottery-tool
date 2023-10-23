import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { userServiceApi } from '@zyy/weapp/src/api/wx';
import Avatar from '@zyy/weapp/src/components/Avatar';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useLogin } from '@zyy/weapp/src/hooks/login';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useUserId } from '@zyy/weapp/src/hooks/userId';

function Mine() {
  const login = useLogin();
  const userId = useUserId();
  const { data } = useSWR([userServiceApi.userServiceGetByUserId, userId]);

  const toPage = (url: string) => async () => {
    await login();
    navigateTo({ url });
  };

  return (
    <div>
      <Cell
        className="m-0"
        align="center"
        title={(
          <div className="flex items-center">
            <Avatar
              ossId={data?.wxUser?.avatar}
              size="large"
              preview
            />
            <span className="ml-2">{data?.wxUser?.name || '用户名'}</span>
          </div>
          )}
        onClick={toPage('/pages/account/index')}
        radius={0}
        extra={<Right />}
      />
      <div className="p-2">
        <CellGroup>
          <Cell
            onClick={() => navigateTo({ url: '/pages/lotteryList/index' })}
            title="我的抽签"
            extra={<Right />}
          />
          <Cell
            onClick={() => navigateTo({ url: '/pages/recordList/index' })}
            title="我的记录"
            extra={<Right />}
          />
        </CellGroup>
      </div>
    </div>
  );
}

export default createErrorBoundary(Mine);
