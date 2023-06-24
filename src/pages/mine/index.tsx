import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { atom, useRecoilState } from 'recoil';
// import { useEnv, useModal, useNavigationBar, useToast } from 'taro-hooks';
import { lotteryServiceApi } from '../../api/lottery';
import { Configuration } from '../../openapi/lottery/lottery';
import { UserServiceApi } from '../../openapi/lottery/user';


const state = atom({
  key: '11112',
  default: 0,
});

const Index = () => {
  const [v, st ] = useRecoilState(state);
  const login =  async () => {
    console.log(2222);
    const { code } = await Taro.login();
    console.log(1111);
    console.log(code);
    const config = new Configuration({ fetchApi:(url, params) => {
      Taro.request({ ...params, url });
    }, basePath: 'http://localhost:51051' });
    const user = new UserServiceApi(config);
    const res = user.userServiceLogin({ body:{ code } });
    const resp = new Response();
    console.log(res);
  };
  const get = () => {
    lotteryServiceApi.lotteryServiceList({});
  };

  return (
    <View className='wrapper'>

      <Button className='button' onClick={login}>
        登录
      </Button>
      <Button className='button' onClick={get}>
        get
      </Button>

    </View>
  );
};

export default Index;
