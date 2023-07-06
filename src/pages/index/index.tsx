import {
  Button, Col, Form, Input, Radio, Row, Switch,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import { useState } from 'react';
import { useSetState } from '../../hooks/setState';
import {
  LotteryItem,
  LotteryNewLottery, LotteryRemark, LotteryType,
} from '../../openapi/lottery/lottery';
import Items from './components/Items';
import Remarks from './components/Remarks';

const getTypeDesc = (type:LotteryType) => ({
  [LotteryType.Number]: '个数',
  [LotteryType.Percent]: '几率',
}[type]);

const initItem:LotteryItem = {
  name: '选项1',
  value: 1,
};

const initRemark:LotteryRemark = {
  name: '',
  require: true,
};

const initState:Required<Omit<LotteryNewLottery, 'userId'>> = {
  title: '11111',
  type: LotteryType.Number,
  items: [initItem],
  remark: false,
  remarks: [],
  // startDate: '2023/05/23',
  // startTime: '20:20',
};

const Index = () => {
  const [state, setState] = useSetState(initState);
  const [items, setItems] = useState([initItem]);
  const [remarks, setRemarks] = useState([initRemark]);
  const [open, setOpen] = useState(false);
  // TODO: add userInfo
  const userId = 'userId';
  const [form] = Form.useForm();
  const onSubmit = async (value) => {
    console.log(value);
    const lottery:Required<LotteryNewLottery> = {
      ...state, items, remarks, userId,
    };
    // const resp = await lotteryServiceApi.lotteryServiceCreate({ body:{ lottery } });
    await new Promise((resolve, reject) => { setTimeout(resolve, 1000); });

    Taro.showShareMenu({});
  };

  return (
    <View className='p-2 bg-gray-100 h-full box-border'>
      <Form
        form={form}
        onFinish={console.log}
        onFinishFailed={console.warn}
        initialValues={initState}
        footer={(
          <Row>
            <Col span={12}><Button formType='submit'>提交</Button></Col>
            <Col span={12}><Button formType='reset'>重署</Button></Col>
          </Row>
      )}
      >
        <Form.Item label='名称' name='title' rules={[{ required: true }]}>
          <Input
            placeholder='请输入主题名称'
          />
        </Form.Item>
        <Form.Item label='抽取方式' name='type' rules={[{ required: true }]}>
          <Radio.Group>
            {Object.values(LotteryType).map((type) => (
              <Radio value={type} key={type}>{getTypeDesc(type)}</Radio>))}
          </Radio.Group>
        </Form.Item>
        <Form.Item label='选项' name='items'>
          <Items />
        </Form.Item>
        <Form.Item label='填写备注' name='remark'>
          <Switch />
        </Form.Item>
        <Form.Item label='备注项' name='remarks'>
          <Remarks />
        </Form.Item>
        {/* 时间:
        <View className='at-row  at-row__align--center' >
            <View className='at-col at-col-4'>开始时间</View>
            <View className='at-col at-col-5'>
              <Picker mode='date' value={state.startDate}
              onChange={e=>setState({ startDate: e.detail.value })}>
              {state.startDate}
              </Picker>
            </View>
            <View className='at-col at-col-3'>
              <Picker mode='time' value={state.startTime}
              onChange={e=>setState({ startTime: e.detail.value })}>
              {state.startTime}
              </Picker>
            </View>
          </View> */}
      </Form>
    </View>
  );
};

export default Index;
