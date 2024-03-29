import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { Navigator } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { userServiceApi } from '../../api/wx';
import Avatar from '../../components/Avatar';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';
import { useUserId } from '../../hooks/userId';

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
        className='m-0'
        align='center'
        title={(
          <div className='flex items-center'>
            <Avatar ossId={data?.wxUser?.avatar} size='large' />
            <span className='ml-2'>{data?.wxUser?.name || '用户名'}</span>
          </div>
        )}
        onClick={toPage('/pages/account/index')}
        radius={0}
        extra={<Right />}
      />
      <div className='p-2'>
        <CellGroup>
          <Navigator url='/pages/lotteryList/index'>
            <Cell
              title='我的抽签'
              extra={<Right />}
            />
          </Navigator>
          <Navigator url='/pages/recordList/index'>
            <Cell
              title='我的记录'
              extra={<Right />}
            />
          </Navigator>
        </CellGroup>
      </div>
    </div>
  );
}

export default createErrorBoundary(Mine);
