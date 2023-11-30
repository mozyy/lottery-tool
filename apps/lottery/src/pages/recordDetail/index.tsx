import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { formatDate } from '@zyy/common/src/utils/date';
import Avatar from '@zyy/weapp/src/components/Avatar';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useGetUserInfoByUserId } from '@zyy/weapp/src/hooks/getUserInfoByUserId';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { lotteryServiceApi, recordServiceApi } from '../../api/lottery';
import { getLotteryTypeDesc } from '../../status/lottery';

// ?id=
function RecordDetail() {
  const { id } = useRouter().params;
  const { data: dataReocrd } = useSWR([recordServiceApi.recordServiceGet, Number(id)]);
  const { data: dataLottery, result } = useSWR(() => {
    if (!dataReocrd?.record?.record?.lotteryId) {
      return false;
    }
    return [lotteryServiceApi.lotteryServiceGet, dataReocrd.record.record.lotteryId];
  });
  const { data: dataUserInfo } = useGetUserInfoByUserId(dataReocrd?.record?.record?.userId);
  if (result) {
    return result;
  }

  const { record, recordRemarks } = dataReocrd!.record!;
  const { lottery, items, remarks } = dataLottery.lottery!;
  const item = items?.find((i) => i.id === record?.itemId);
  const remarkInfos = recordRemarks?.map((recordRemark) => {
    const remark = remarks?.find((r) => r.id === recordRemark.remarkId);
    if (!remark) {
      return undefined;
    }
    return { remark, recordRemark };
  }).filter(Boolean);

  return (
    <div className="overflow-auto">
      <Cell title="标题" extra={lottery?.title} />
      <Cell title="类型" extra={getLotteryTypeDesc(lottery?.type)} />
      <Cell title="结果" extra={item?.name} />
      <Cell title="用户名" extra={dataUserInfo?.info?.name} />
      <Cell title="用户头像" extra={<Avatar ossId={dataUserInfo?.info?.avatar} />} />
      {!!remarkInfos?.length && (
      <CellGroup title="备注">
        {remarkInfos?.map((remarkInfo) => (
          <Cell
            title={remarkInfo?.remark.name}
            extra={remarkInfo?.recordRemark.value}
            key={remarkInfo?.recordRemark.id}
          />
        ))}
      </CellGroup>
      )}
      <Cell title="创建日期" extra={formatDate(record?.createdAt)} />
    </div>
  );
}

export default createErrorBoundary(RecordDetail);
