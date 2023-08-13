import { Right } from '@nutui/icons-react-taro';
import { Button, Cell, CellGroup } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { useState } from 'react';
import { lotteryServiceApi } from '../../api/lottery';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';

export default function Index() {
  const login = useLogin();
  const [v, sv] = useState(0);

  const me = useSWR([lotteryServiceApi.lotteryServiceGet, 1]);
  console.log(1111, me.data);
  const toPage = (url: string) => async () => {
    await login();
    navigateTo({ url });
  };

  return (
    <div className='wrapper'>

      <Button className='button' onClick={login}>
        登录
      </Button>
      <Button className='button'>
        get
      </Button>
      <CellGroup>
        <Cell
          title='我的抽签'
          onClick={toPage('/lottery/lotteryList/index')}
          extra={<Right />}
        />
        <Cell
          title='我的记录'
          onClick={toPage('/lottery/record/index')}
          extra={<Right />}
        />
      </CellGroup>
    </div>
  );
}
