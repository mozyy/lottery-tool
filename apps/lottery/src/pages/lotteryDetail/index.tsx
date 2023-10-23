import { Addfollow, HeartFill, Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { navigateTo, useRouter, useShareAppMessage } from '@tarojs/taro';
import BottomButton from '@zyy/weapp/src/components/BottomButton';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { useUserId } from '@zyy/weapp/src/hooks/userId';
import { authTokenState } from '@zyy/weapp/src/store/atom';
import { formatDate } from '@zyy/weapp/src/utils/date';
import { useRecoilValue } from 'recoil';
import { useSWRConfig } from 'swr';
import { favoriteServiceApi, lotteryServiceApi, recordServiceApi } from '../../api/lottery';
import RecordItem from '../../components/RecordItem';
import { getLotteryTypeDesc, getLotteryTypeUnit } from '../../status/lottery';

function LotteryDetail() {
  const lotteryId = Number(useRouter().params.id);
  const userId = useUserId();

  const { data, result } = useSWR([lotteryServiceApi.lotteryServiceGet, lotteryId]);
  const {
    data: dataFavorite,
    mutate: mutateFavorite,
  } = useSWR([favoriteServiceApi.favoriteServiceGetByLotteryId, lotteryId]);
  // const { mutate: mutateList } = useSWR(() => [favoriteServiceApi.favoriteServiceList, userId]);
  const oauthToken = useRecoilValue(authTokenState);
  const { mutate } = useSWRConfig();
  const { trigger: triggerCreate } = useSWRMutation([favoriteServiceApi.favoriteServiceCreate]);
  const { trigger: triggerDelete } = useSWRMutation([favoriteServiceApi.favoriteServiceDelete]);
  const { data: dataRecord } = useSWR([recordServiceApi.recordServiceList, undefined, lotteryId]);

  useShareAppMessage(() => ({
    title: data?.lottery?.lottery?.title,
    path: `/pages/lottery/index?id=${lotteryId}`,
  }));

  if (result) {
    return result;
  }

  const { lottery, items, remarks } = data.lottery!;

  const followed = !!dataFavorite?.favorite;

  const followHandler = async () => {
    if (followed) {
      await triggerDelete([dataFavorite.favorite?.id!]);
    } else {
      await triggerCreate([{ favorite: { lotteryId, userId } }]);
    }
    mutateFavorite();
    mutate([oauthToken, favoriteServiceApi.favoriteServiceList, userId]);
  };

  return (
    <div className="overflow-auto flex flex-col h-full">
      <div className="flex-auto p-2">
        <CellGroup>
          <Cell title="标题" extra={lottery?.title} />
          <Cell title="类型" extra={getLotteryTypeDesc(lottery?.type)} />
          <Cell title="创建日期" extra={formatDate(lottery?.createdAt)} />
        </CellGroup>
        <CellGroup title="选项">
          {items?.map((item) => <Cell title={item.name} extra={`${item.value}${getLotteryTypeUnit(lottery?.type)}`} key={item.id} />)}
        </CellGroup>
        {lottery?.remark && (
        <CellGroup title="备注">
          {remarks?.map((remark) => <Cell title={remark.name} extra={remark.require ? '必填' : '非必填'} key={remark.id} />)}
        </CellGroup>
        )}
        {!!dataRecord?.records?.length && (
        <CellGroup title="抽取列表">
          {dataRecord.records.map((record) => (
            <RecordItem record={record} key={record.record?.id} />
          ))}
        </CellGroup>
        )}
        <CellGroup>
          <Cell
            title="收藏"
            onClick={followHandler}
            extra={followed ? <HeartFill className="text-red-500" /> : <Addfollow />}
          />
          <Cell
            title="新建"
            onClick={() => navigateTo({ url: `/pages/lotteryCreate/index?id=${lotteryId}` })}
            extra={<Right />}
          />
        </CellGroup>
      </div>
      <BottomButton openType="share">分享</BottomButton>
    </div>
  );
}

export default createErrorBoundary(LotteryDetail);
