import { Close } from '@nutui/icons-react-taro';
import {
  Button,
  Col,
  Input, Row, Switch,
} from '@nutui/nutui-react-taro';
import { LotteryNewRemark, LotteryRemark } from '../../../../openapi/lottery/lottery';

export interface RemarksProps {
  value?: LotteryNewRemark[],
  onChange?:(value:LotteryNewRemark[]) => void
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
            <Col span={4} className='text-center'>
              <Close onClick={delArray(i)} />
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
