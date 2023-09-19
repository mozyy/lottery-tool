import AppComponent from '@zyy/weapp/src/app';
import { PropsWithChildren } from 'react';
import './app.scss';

function App(props:PropsWithChildren) {
  const { children } = props;
  return <AppComponent>{children as any}</AppComponent>;
}

export default App;
