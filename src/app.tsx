import Taro from '@tarojs/taro';
import { PropsWithChildren, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import './app.scss';
import './theme.scss';
import { swrFetcher, swrMiddleware } from './utils/request';

const App = (props:PropsWithChildren) => {
  const { children } = props;
  const onlineRef = useRef(true);
  const visibleRef = useRef(true);

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
        Taro.onAppShow(appShow);

        const appHide = (res: Taro.onAppShow.CallbackResult) => {
          visibleRef.current = false;
        };
        Taro.onAppHide(appHide);
        return () => {
          Taro.onAppShow(appShow);
          Taro.onAppHide(appHide);
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
        {children}
      </RecoilRoot>
    </SWRConfig>
  );
};

export default App;
