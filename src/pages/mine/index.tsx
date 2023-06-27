import { Button, View } from '@tarojs/components';
import { atom, useRecoilValue } from 'recoil';
// import { useEnv, useModal, useNavigationBar, useToast } from 'taro-hooks';
import { useState } from 'react';
import useSWR from 'swr';
import { lotteryServiceApi } from '../../api/lottery';
import { useLogin } from '../../hooks/login';
import { oauthTokenState } from '../../store/atom';

const state = atom({
  key: '11112',
  default: 0,
});

const lotteryServiceList = lotteryServiceApi.lotteryServiceList.bind(lotteryServiceApi);

function Index() {
  const oauthInfo = useRecoilValue(oauthTokenState);
  const login = useLogin();
  const [v, sv] = useState(0);

  const { data, mutate } = useSWR(
    [lotteryServiceList, {}, oauthInfo],
    ([api, params, token]) => {
      console.log(111, token);
      return api(params);
    },
  );
  console.log(222222, data);

  return (
    <View className='wrapper'>

      <Button className='button' onClick={login}>
        登录
      </Button>
      <Button className='button' onClick={mutate}>
        get
      </Button>
      <Button className='button' onClick={() => sv(v + 1)}>
        +1
      </Button>
    </View>
  );
}

export default Index;
