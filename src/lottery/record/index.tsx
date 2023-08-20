import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup, Empty } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { useState } from 'react';
import { recordServiceApi } from '../../api/record';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';

function Record() {
  const login = useLogin();
  const [v, sv] = useState(0);

  const { data, result } = useSWR([recordServiceApi.recordServiceList]);
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
              onClick={() => navigateTo({ url: `/lottery/recordDetail/index?id=${record.record!.id}` })}
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
