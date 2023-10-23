import { Right } from '@nutui/icons-react-taro';
import {
  Cell, CellGroup, Empty,
} from '@nutui/nutui-react-taro';
import { Navigator } from '@tarojs/components';
import {
  navigateTo,
  stopPullDownRefresh,
  usePullDownRefresh,
} from '@tarojs/taro';
import { LotteryLotteryInfo } from '@zyy/openapi/src/axios/lottery/lottery';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useUserId } from '@zyy/weapp/src/hooks/userId';
import { favoriteServiceApi, templateServiceApi } from '../../api/lottery';

function Item({ lottery }:{ lottery?:LotteryLotteryInfo }) {
  return (
    <Cell
      onClick={() => navigateTo({ url: `/pages/lotteryCreate/index?id=${lottery?.id}` })}
      title={lottery?.title}
      extra={<Right />}
    />
  );
}

function Index() {
  const userId = useUserId();
  const {
    data: dataFavorite,
    mutate: mutateFavorite,
  } = useSWR([favoriteServiceApi.favoriteServiceList, userId]);
  const {
    data: dataTemplate, mutate: mutateTemplate,
    result,
  } = useSWR([templateServiceApi.templateServiceList]);

  usePullDownRefresh(async () => {
    await Promise.all([mutateFavorite(), mutateTemplate()]);
    stopPullDownRefresh();
  });

  // useTabItemTap(() => {
  //   startPullDownRefresh();
  // });

  if (result) {
    return result;
  }

  return (
    <div className="p-2 h-full box-border">
      <Navigator className="text-right text-primary" url="/pages/lotteryCreate/index">空白抽签</Navigator>
      <CellGroup title="我的收藏">
        {dataFavorite?.favorites?.length
          ? dataFavorite?.favorites?.map((item) => (
            <Item key={item.favorite?.id} lottery={item.lottery?.lottery} />
          ))
          : <Empty description="暂无收藏" />}
      </CellGroup>
      <CellGroup title="推荐模板">
        {dataTemplate.templates?.map((item) => (
          <Item key={item.template?.id} lottery={item.lottery?.lottery} />
        ))}
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(Index);
