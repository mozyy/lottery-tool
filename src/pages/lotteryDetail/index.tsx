import { useRouter } from '@tarojs/taro';
import { lotteryServiceApi } from '../../api/lottery';
import { useSWR } from '../../hooks/swr';

export default function LotteryDetail() {
  const { id } = useRouter().params;

  const { data, result } = useSWR([lotteryServiceApi.lotteryServiceGet, Number(id)]);

  if (result) {
    return result;
  }

  return (
    <div className='wrapper'>
      {JSON.stringify(data, undefined, 2)}
    </div>
  );
}
