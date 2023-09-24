import { Canvas } from '@tarojs/components';
import { RecordRecord } from '@zyy/openapi/src/axios/lottery/record';
import { userServiceApi } from '@zyy/weapp/src/api/wx';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { lotteryServiceApi } from '../../api/lottery';

export interface RecordItemProps {
  record: RecordRecord,
}

/**
 * @props @type {RecordItemProps}
 */
export default function Turntable(props:RecordItemProps) {
  const { record: { record, recordRemarks } } = props;
  const { data: dataLottery } = useSWR([lotteryServiceApi.lotteryServiceGet, record?.lotteryId!]);
  const { data: dataUser } = useSWR([userServiceApi.userServiceGetByUserId, record?.userId!]);
  const item = dataLottery?.lottery?.items?.find((i) => i.id === record?.itemId);

  const remarkValue = (() => {
    if (!recordRemarks?.length) {
      return undefined;
    }
    const remark = recordRemarks[0];
    const value = `${dataLottery?.lottery?.remarks?.find((i) => i.id === remark.remarkId)}: ${remark.value}`;
    return recordRemarks.length > 1 ? `${value} ...` : value;
  })();

  return (
    <div>
      <Canvas disableScroll />
    </div>
  );
}
