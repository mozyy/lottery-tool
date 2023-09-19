import { CellGroup, Empty } from '@nutui/nutui-react-taro';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useUserId } from '@zyy/weapp/src/hooks/userId';
import { recordServiceApi } from '../../api/lottery';
import RecordItem from '../../components/RecordItem';

function RecordList() {
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
        {data.records.map((record) => <RecordItem key={record.record!.id} record={record} />)}
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(RecordList);
