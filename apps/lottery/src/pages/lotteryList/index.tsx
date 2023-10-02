import { Right } from '@nutui/icons-react';
import { Cell, CellGroup, Empty } from '@nutui/nutui-react-taro';
import { Navigator } from '@tarojs/components';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useUserId } from '@zyy/weapp/src/hooks/userId';
import { formatDate } from '@zyy/weapp/src/utils/date';
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
          <Navigator key={lottery.lottery?.id} url={`/pages/lotteryDetail/index?id=${lottery.lottery?.id}`}>
            <Cell
              title={lottery.lottery?.title}
              description={formatDate(lottery.lottery?.createdAt, 'YYYY-MM-DD HH:mm 创建')}
              extra={<Right />}
            />
          </Navigator>
        ))}
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(LotteryList);
