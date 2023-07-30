import { Cell, CellGroup, Empty } from '@nutui/nutui-react-taro';
import { useState } from 'react';
import { recordServiceApi } from '../../api/record';
import { useLogin } from '../../hooks/login';
import { useSWR } from '../../hooks/swr';

export default function Record() {
  const login = useLogin();
  const [v, sv] = useState(0);

  const {data} = useSWR([recordServiceApi.recordServiceList]);
  if(!data) {
    return <Empty />
  }

  return (
    <div className='wrapper'>
      <CellGroup>
        {data.records!.map(record => (
        <Cell key={record.record!.id} title={record.record!.itemId}/>
        ))}
        </CellGroup>      
    </div>
  );
}
