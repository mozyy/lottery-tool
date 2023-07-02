import { Button, View } from '@tarojs/components';
import { useState } from 'react';
import { lotteryServiceApi } from '../../api/lottery';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';

const Index = () => {
  const login = useLogin();
  const [v, sv] = useState(0);

  const me = useSWR([lotteryServiceApi.lotteryServiceGet, 1]);
  console.log(1111, me.data);

  return (
    <View className='wrapper'>

      <Button className='button' onClick={login}>
        登录
      </Button>
      <Button className='button'>
        get
      </Button>
      <Button className='button' onClick={() => sv(v + 1)}>
        +1
      </Button>
    </View>
  );
};

export default Index;
