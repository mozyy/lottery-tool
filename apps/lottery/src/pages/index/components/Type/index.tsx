import {
    Button,
    Col,
    Input, Row,
} from '@nutui/nutui-react-taro';
import { LotteryItem } from 'openapi/dist/axios/lottery/lottery';

export interface TypeProps {
  value?: LotteryItem[],
  onChange?:(value:LotteryItem[]) => void
}

export default function Type({ value = [], onChange = () => {} }:TypeProps) {
  console.log(value);

  const addArray = (i:number, v: LotteryItem) => {
    const newArr = ([...value.slice(0, i), { ...value[i], ...v }, ...value.slice(i + 1)]);
    onChange(newArr);
  };
  const delArray = (i:number) => () => {
    const newArr = ([...value.slice(0, i), ...value.slice(i + 1)]);
    onChange(newArr);
  };
  const changeHandler = () => {

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
            <Col span={8}>
              <Input
                placeholder='数量'
                value={String(item.value)}
                onChange={(v) => addArray(i, { value: Number(v) })}
              />
            </Col>
            <Col span={4}>
              <div className='at-col at-col-2' onClick={delArray(i)}>X</div>
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
