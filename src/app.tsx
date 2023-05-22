import { Component, PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';
import './theme.scss';
import './app.scss';

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
    <RecoilRoot>
      {this.props.children}
    </RecoilRoot>
    );
  }
}

export default App;
