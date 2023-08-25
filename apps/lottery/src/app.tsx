import Taro, {
  useError, useLaunch,
  useUnhandledRejection,
} from '@tarojs/taro';
import { PropsWithChildren, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import './appnutui';
// import './app.nutui.scss';
import './app.scss';
import { useLogin } from './hooks/login';
import './tailwind';
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
        Taro?.onAppShow(appShow);

        const appHide = (res: Taro.onAppShow.CallbackResult) => {
          visibleRef.current = false;
        };
        Taro?.onAppHide(appHide);
        return () => {
          Taro?.onAppShow(appShow);
          Taro?.onAppHide(appHide);
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
        Taro.onNetworkStatusChange(networkStatusChange);
        return () => {
          Taro.offNetworkStatusChange(networkStatusChange);
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