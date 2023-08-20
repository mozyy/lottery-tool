import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { useState } from 'react';
import { lotteryServiceApi } from '../../api/lottery';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';

function LotteryList() {
  const login = useLogin();
  const [v, sv] = useState(0);

  const { data, result } = useSWR([lotteryServiceApi.lotteryServiceList]);

  if (result) {
    return result;
  }

  return (
    <div className='wrapper'>
      <CellGroup>
        {data.lotterys!.map((lottery) => (
          <Cell
            key={lottery.lottery?.id}
            title={lottery.lottery?.title}
            onClick={() => navigateTo({ url: `/lottery/lotteryDetail/index?id=${lottery.lottery?.id}` })}
            extra={<Right />}
          />
        ))}
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(LotteryList);
