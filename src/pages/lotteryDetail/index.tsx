import { Empty } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { useState } from 'react';
import { lotteryServiceApi } from '../../api/lottery';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';

export default function LotteryDetail() {
  const login = useLogin();
  const [v, sv] = useState(0);
  const { id } = useRouter().params;

  const { data } = useSWR([lotteryServiceApi.lotteryServiceGet, Number(id)]);

  if (!data) {
    return <Empty />;
  }

  return (
    <div className='wrapper'>
      {JSON.stringify(data, undefined, 2)}
    </div>
  );
}
