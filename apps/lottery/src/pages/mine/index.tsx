import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useLogin } from '../../hooks/login';

function Mine() {
  const login = useLogin();
  const toPage = (url: string) => async () => {
    await login();
    navigateTo({ url });
  };

  return (
    <div className='p-2 bg-gray-100 h-full box-border'>
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
  );
}

export default createErrorBoundary(Mine);
