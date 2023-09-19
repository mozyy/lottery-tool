import {
  offNetworkStatusChange,
  onAppHide,
  onAppShow,
  onNetworkStatusChange,
  useError, useLaunch,
  useUnhandledRejection,
} from '@tarojs/taro';
import { PropsWithChildren, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { useLogin } from './hooks/login';
import { swrFetcher, swrMiddleware } from './utils/request';

function Login() {
  const login = useLogin();
  useLaunch(login);
  return null;
}

function App(props:PropsWithChildren) {
  const { children } = props;
  const onlineRef = useRef(true);
  const visibleRef = useRef(true);

  useError((error) => {
    console.log(123, error);
  });
  useUnhandledRejection((res) => {
    console.log(res.reason, res.promise);
  });

  return (
    <SWRConfig value={{
      use: [swrMiddleware],
      fetcher: swrFetcher,
      provider: () => new Map(),
      isOnline() {
        return onlineRef.current;
      },
      isVisible() {
        return visibleRef.current;
      },
      initFocus(callback) {
        /* 向状态 provider 注册侦听器 */
        const appShow = (res: Taro.onAppShow.CallbackResult) => {
          visibleRef.current = true;
          callback();
        };
        onAppShow(appShow);

        const appHide = (res: Taro.onAppShow.CallbackResult) => {
          visibleRef.current = false;
        };
        onAppHide(appHide);
        return () => {
          onAppShow(appShow);
          onAppHide(appHide);
        };
      },
      initReconnect(callback) {
        /* 向状态 provider 注册侦听器 */
        const networkStatusChange = (res: Taro.onNetworkStatusChange.CallbackResult) => {
          onlineRef.current = res.isConnected;
          if (res.isConnected) {
            callback();
          }
        };
        onNetworkStatusChange(networkStatusChange);
        return () => {
          offNetworkStatusChange(networkStatusChange);
        };
      },
    }}
    >
      <RecoilRoot>
        <Login />
        {children}
      </RecoilRoot>
    </SWRConfig>
  );
}

export default App;
