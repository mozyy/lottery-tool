import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { recordServiceApi } from '../../api/lottery';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';
import { getLotteryTypeDesc } from '../../status/lottery';
import { formatDate } from '../../utils/date';

// ?id=
function RecordDetail() {
  const { id } = useRouter().params;
  const { data, result } = useSWR([recordServiceApi.recordServiceGet, Number(id)]);
  if (result) {
    return result;
  }

  const { record, lottery: lotteryInfo, recordRemarks } = data.record!;
  const { lottery, items, remarks } = lotteryInfo!;
  const item = items?.find((i) => i.id === record?.itemId);
  const remarkInfos = recordRemarks?.map((recordRemark) => {
    const remark = remarks?.find((r) => r.id === recordRemark.remarkId);
    if (!remark) {
      return undefined;
    }
    return { remark, recordRemark };
  }).filter(Boolean);

  return (
    <div className='overflow-auto'>
      <Cell title='标题' extra={lottery?.title} />
      <Cell title='类型' extra={getLotteryTypeDesc(lottery?.type)} />
      <Cell title='创建日期' extra={formatDate(lottery?.createdAt)} />
      <Cell title='结果' extra={item?.name} />
      {!!remarkInfos?.length && (
      <CellGroup title='备注'>
        {remarkInfos?.map((remarkInfo) => (
          <Cell
            title={remarkInfo?.remark.name}
            extra={remarkInfo?.recordRemark.value}
            key={remarkInfo?.recordRemark.id}
          />
        ))}
      </CellGroup>
      )}
    </div>
  );
}

export default createErrorBoundary(RecordDetail);
