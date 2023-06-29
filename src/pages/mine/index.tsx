import { Button, View } from '@tarojs/components';
import { atom, useRecoilValue } from 'recoil';
// import { useEnv, useModal, useNavigationBar, useToast } from 'taro-hooks';
import { useState } from 'react';
import useSWR, { Fetcher, SWRResponse } from 'swr';
import { lotteryServiceApi } from '../../api/lottery';
import { useLogin } from '../../hooks/login';
import { oauthTokenState } from '../../store/atom';

const state = atom({
  key: '11112',
  default: 0,
});

type Param<S extends Record<string, (...args)=>any> = any,
M extends keyof S = any, H extends S[M] = any, P extends Parameters<H> = any> = [S, M, P];

async function fetcher<T, K extends Array<any>>(
  [service, method, params]: K,
) {
  return service[method](params) as T;
}

type Fet<S extends Record<string, (...args)=>any> = any, M extends keyof S = any,
 H extends S[M] = any, P extends Parameters<H> = any> = Fetcher<ReturnType<S[M]>, [S, M, P]>;

function useSww<
  S,
  M extends keyof S,
  H extends S[M],
  P extends H extends (
    any:any)=> Promise<any> ? Parameters<H> : never,
  T extends H extends (any:any)=> Promise<infer U> ? U : never,
>(
  key: [S, M, P[0]],
):SWRResponse<T> {
  const [service, method, params] = key;
  const handler = service[method] as H;
  if (typeof handler === 'function') {
    return handler(params);
  }
  throw Error();
}

const lotteryServiceList = lotteryServiceApi.lotteryServiceList.bind(lotteryServiceApi);

const Index = () => {
  const oauthInfo = useRecoilValue(oauthTokenState);
  const login = useLogin();
  const [v, sv] = useState(0);

  const me = useSww(
    [lotteryServiceApi, 'lotteryServiceList', {}],
    fetcher,
  );
  const { data, error } = useSWR(
    [lotteryServiceApi, 'lotteryServiceList', {}],
    fetcher,
  );
  console.log(2222223, data);

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
