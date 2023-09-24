import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { useRouter, useShareAppMessage } from '@tarojs/taro';
import BottomButton from '@zyy/weapp/src/components/BottomButton';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { formatDate } from '@zyy/weapp/src/utils/date';
import { lotteryServiceApi, recordServiceApi } from '../../api/lottery';
import RecordItem from '../../components/RecordItem';
import { getLotteryTypeDesc, getLotteryTypeUnit } from '../../status/lottery';

function LotteryDetail() {
  const { id } = useRouter().params;

  const { data, result } = useSWR([lotteryServiceApi.lotteryServiceGet, Number(id)]);
  const { data: dataRecord } = useSWR(() => {
    const lotteryId = data?.lottery?.lottery?.id;
    if (!lotteryId) {
      return false;
    }
    return [recordServiceApi.recordServiceList, undefined, lotteryId];
  });

  useShareAppMessage(() => ({
    title: data?.lottery?.lottery?.title,
    path: `/pages/lottery/index?id=${id}`,
  }));

  if (result) {
    return result;
  }

  const { lottery, items, remarks } = data.lottery!;

  return (
    <div className="overflow-auto flex flex-col">
      <div className="flex-auto">
        <Cell title="标题" extra={lottery?.title} />
        <Cell title="类型" extra={getLotteryTypeDesc(lottery?.type)} />
        <Cell title="创建日期" extra={formatDate(lottery?.createdAt)} />
        <CellGroup title="选项">
          {items?.map((item) => <Cell title={item.name} extra={`${item.value}${getLotteryTypeUnit(lottery?.type)}`} key={item.id} />)}
        </CellGroup>
        {lottery?.remark && (
        <CellGroup title="备注">
          {remarks?.map((remark) => <Cell title={remark.name} extra={remark.require && '*'} key={remark.id} />)}
        </CellGroup>
        )}
        {!!dataRecord?.records?.length && (
        <CellGroup title="抽取列表">
          {dataRecord.records.map((record) => (
            <RecordItem record={record} key={record.record?.id} />
          ))}
        </CellGroup>
        )}
      </div>
      <BottomButton openType="share">分享</BottomButton>
    </div>
  );
}

export default createErrorBoundary(LotteryDetail);
