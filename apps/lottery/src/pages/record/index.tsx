import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup, Empty } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { recordServiceApi } from '../../api/record';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';
import { useUserId } from '../../hooks/userId';

function Record() {
  const userId = useUserId();

  const { data, result } = useSWR([recordServiceApi.recordServiceList,
    undefined, undefined, userId]);
  if (result) {
    return result;
  }
  if (!data.records?.length) {
    return <Empty />;
  }

  return (
    <div>
      <CellGroup>
        {data.records.map((record) => {
          const item = record.lottery?.items?.find((i) => i.id === record.record?.itemId);
          return (
            <Cell
              key={record.record!.id}
              onClick={() => navigateTo({ url: `/pages/recordDetail/index?id=${record.record!.id}` })}
              title={record.lottery?.lottery?.title}
              description={item?.name}
              extra={<Right />}
            />
          );
        })}
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(Record);
