import { Right } from '@nutui/icons-react-taro';
import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { navigateTo } from '@tarojs/taro';
import { useState } from 'react';
import { recordServiceApi } from '../../api/record';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';

export default function Record() {
  const login = useLogin();
  const [v, sv] = useState(0);

  const { data, result } = useSWR([recordServiceApi.recordServiceList]);
  if (result) {
    return result;
  }

  return (
    <div className='wrapper'>
      <CellGroup>
        {data.records!.map((record) => {
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
