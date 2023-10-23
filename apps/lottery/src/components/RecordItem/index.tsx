import { Right } from '@nutui/icons-react-taro';
import { Cell } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { RecordRecord } from '@zyy/openapi/src/axios/lottery/record';
import { userServiceApi } from '@zyy/weapp/src/api/wx';
import Avatar from '@zyy/weapp/src/components/Avatar';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { formatDate } from '@zyy/weapp/src/utils/date';
import { lotteryServiceApi } from '../../api/lottery';

export interface RecordItemProps {
  record: RecordRecord,
}

export default function RecordItem(props:RecordItemProps) {
  const { record: { record, recordRemarks } } = props;
  const { data: dataLottery } = useSWR([lotteryServiceApi.lotteryServiceGet, record?.lotteryId!]);
  const { data: dataUser } = useSWR([userServiceApi.userServiceGetByUserId, record?.userId!]);
  const item = dataLottery?.lottery?.items?.find((i) => i.id === record?.itemId);

  const getRemarkDesc = () => {
    if (!recordRemarks?.length) {
      return undefined;
    }
    const remark = recordRemarks[0];
    const value = `${dataLottery?.lottery?.remarks?.find((i) => i.id === remark.remarkId)?.name}: ${remark.value}`;
    return recordRemarks.length > 1 ? `${value} ...` : value;
  };

  return (
    <Cell
      title={item?.name}
      onClick={() => navigateTo({ url: `/pages/recordDetail/index?id=${record?.id}` })}
      description={(
        <div>
          {getRemarkDesc()}
          <div>{formatDate(record?.createdAt, 'YYYY-MM-DD HH:mm 创建')}</div>
        </div>
        )}
      extra={(
        <div className="flex items-center">
          <Avatar ossId={dataUser?.wxUser?.avatar} />
          <Right />
        </div>
        )}
    />
  );
}
