import { Right } from '@nutui/icons-react-taro';
import { Avatar, Cell, CellGroup } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { userServiceApi } from '../../api/wx';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';
import { useUserId } from '../../hooks/userId';

function Mine() {
  const login = useLogin();
  const userId = useUserId();
  const { data } = useSWR([userServiceApi.userServiceGet, userId!]);

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
            {data?.wxUser?.avatar ? (
              <Avatar src={data.wxUser.avatar} size='large' />
            ) : (
              <Avatar
                icon={(
                  <span className='material-icons-outlined'>
                    account_circle
                  </span>
                )}
                size='large'
              />
            )}
            <span className='ml-2'>{data?.wxUser?.name || '用户名'}</span>
          </div>
        )}
        onClick={toPage('/pages/account/index')}
        radius={0}
        extra={<Right />}
      />
      <div className='p-2'>
        <CellGroup>
          <Cell
            title='我的抽签'
            onClick={toPage('/pages/lotteryList/index')}
            extra={<Right />}
          />
          <Cell
            title='我的记录'
            onClick={toPage('/pages/record/index')}
            extra={<Right />}
          />
        </CellGroup>
      </div>
    </div>
  );
}

export default createErrorBoundary(Mine);
