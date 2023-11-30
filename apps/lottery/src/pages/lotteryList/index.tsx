import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup, Empty } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { formatDate } from '@zyy/common/src/utils/date';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useUserId } from '@zyy/weapp/src/hooks/userId';
import { lotteryServiceApi } from '../../api/lottery';

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
            description={formatDate(lottery.lottery?.createdAt, 'YYYY-MM-DD HH:mm 创建')}
            extra={<Right />}
          />
        ))}
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(LotteryList);
