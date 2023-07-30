import {
  Input
} from '@nutui/nutui-react-taro';
import { LotteryRemark } from '../../../../openapi/lottery/lottery';
import { RecordNewRecordRemark } from '../../../../openapi/lottery/record';

export interface RemarksProps {
  remark: LotteryRemark,
  value?: RecordNewRecordRemark,
  onChange?:(value?:RecordNewRecordRemark) => void
}

export default function Remark({ remark, value = {remarkId:remark.id}, onChange = () => {} }:RemarksProps) {
  console.log(value);

  return (
    <Input placeholder='请输入' value={value.value} onChange={e=>onChange(e?{...value,value: e}:undefined)} />
  );
}
