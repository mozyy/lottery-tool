import { useRouter } from '@tarojs/taro';
import { lotteryServiceApi } from '../../api/lottery';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';

function LotteryDetail() {
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

export default createErrorBoundary(LotteryDetail);
