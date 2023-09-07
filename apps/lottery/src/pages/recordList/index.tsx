import { CellGroup, Empty } from '@nutui/nutui-react-taro';
import { recordServiceApi } from '../../api/lottery';
import RecordItem from '../../components/RecordItem';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';
import { useUserId } from '../../hooks/userId';

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
