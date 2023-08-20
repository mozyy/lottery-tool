import { CellGroup } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { recordServiceApi } from '../../api/record';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';

// ?id=
function RecordDetail() {
  const { id } = useRouter().params;
  const { data, result } = useSWR([recordServiceApi.recordServiceGet, Number(id)]);
  if (result) {
    return result;
  }

  return (
    <div className='wrapper'>
      <CellGroup>
        {JSON.stringify(data.record)}
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(RecordDetail);
