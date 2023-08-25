import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup, Empty } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { lotteryServiceApi } from '../../api/lottery';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';
import { useUserId } from '../../hooks/userId';

function LotteryList() {
  const userId = useUserId();

  const { data, result } = useSWR([lotteryServiceApi.lotteryServiceList,
    undefined, userId]);

  if (result) {
    return result;
  }

  if (!data.lotterys?.length) {
    return <Empty />;
  }

  return (
    <div>
      <CellGroup>
        {data.lotterys.map((lottery) => (
          <Cell
            key={lottery.lottery?.id}
            title={lottery.lottery?.title}
            onClick={() => navigateTo({ url: `/pages/lotteryDetail/index?id=${lottery.lottery?.id}` })}
            extra={<Right />}
          />
        ))}
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(LotteryList);
