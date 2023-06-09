import {
  Button,
  Col,
  Input, Row, Switch,
} from '@nutui/nutui-react-taro';
import { LotteryRemark } from '../../../../openapi/lottery/lottery';

export interface RemarksProps {
  value?: LotteryRemark[],
  onChange?:(value:LotteryRemark[]) => void
}

export default function Remarks({ value = [], onChange = () => {} }:RemarksProps) {
  console.log(value);

  const addArray = (i:number, v: LotteryRemark) => {
    const newArr = ([...value.slice(0, i), { ...value[i], ...v }, ...value.slice(i + 1)]);
    onChange(newArr);
  };
  const delArray = (i:number) => () => {
    const newArr = ([...value.slice(0, i), ...value.slice(i + 1)]);
    onChange(newArr);
  };
  const addItem = () => {
    const newArr = ([...value, { name: `备注${value.length + 1}`, require: true }]);
    onChange(newArr);
  };
  return (
    <div>
      {value.map((item, i) => (
        <div key={i}>
          <Row>
            <Col span={12}>
              <Input
                placeholder='备注名'
                value={item.name}
                onChange={(v) => addArray(i, { name: String(v) })}
              />
            </Col>
            <Col span={8}>
              <Switch
                checked={item.require}
                onChange={(v) => addArray(i, { require: v })}
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
