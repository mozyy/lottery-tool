import { Close } from '@nutui/icons-react';
import {
  Button,
  Col,
  Input, Row,
} from '@nutui/nutui-react-taro';
import { FormInstance } from '@nutui/nutui-react-taro/dist/types/packages/form/types';
import { LotteryItem, LotteryNewItem } from '@zyy/openapi/src/axios/lottery/lottery';
import { getLotteryTypeUnit } from '../../../../status/lottery';

export interface ItemsProps {
  value?: LotteryNewItem[],
  onChange?:(value:LotteryNewItem[]) => void
  form: FormInstance
}

export default function Items({ value = [], onChange = () => {}, form }:ItemsProps) {
  const addArray = (i:number, v: LotteryItem) => {
    const newArr = ([...value.slice(0, i), { ...value[i], ...v }, ...value.slice(i + 1)]);
    onChange(newArr);
  };
  const delArray = (i:number) => () => {
    const newArr = ([...value.slice(0, i), ...value.slice(i + 1)]);
    onChange(newArr);
  };

  const addItem = () => {
    const newArr = ([...value, { name: `选项${value.length + 1}`, value: 1 }]);
    onChange(newArr);
  };
  return (
    <div>
      {value.map((item, i) => (
        <div key={i}>
          <Row>
            <Col span={12}>
              <Input
                placeholder='选项名'
                value={item.name}
                onChange={(v) => addArray(i, { name: String(v) })}
              />
            </Col>
            <Col span={8} className='flex'>
              <Input
                placeholder='数量'
                value={String(item.value)}
                onChange={(v) => addArray(i, { value: Number(v) })}
              />
              <span className='text-gray-400'>{getLotteryTypeUnit(form.getFieldValue('type'))}</span>
            </Col>
            <Col span={4} className='text-center'>
              <Close onClick={delArray(i)} className='text-[22px] align-middle' />
            </Col>
          </Row>
        </div>
      ))}
      <Button
        size='small'
        onClick={addItem}
      >
        添加选项
      </Button>
    </div>
  );
}
