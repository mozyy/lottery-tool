import {
  ActionSheet,
  Button, Col, Form, Input, Row, Switch,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import { useState } from 'react';
import { useSetState } from '../../hooks/setState';
import {
  LotteryItem, LotteryNewLottery, LotteryRemark, LotteryType,
} from '../../openapi/lottery/lottery';

const getTypeDesc = (type:LotteryType) => ({
  [LotteryType.Number]: '个数',
  [LotteryType.Percent]: '几率',
}[type]);

const initState:Required<Omit<LotteryNewLottery, 'userId' | 'items' | 'remarks'>> = {
  title: '',
  type: LotteryType.Number,
  remark: false,
  // startDate: '2023/05/23',
  // startTime: '20:20',
};

const initItem:LotteryItem = {
  name: '',
  value: 1,
};

const initRemark:LotteryRemark = {
  name: '',
  require: true,
};

const Index = () => {
  const [state, setState] = useSetState(initState);
  const [items, setItems] = useState([initItem]);
  const [remarks, setRemarks] = useState([initRemark]);
  const [open, setOpen] = useState(false);
  // TODO: add userInfo
  const userId = 'userId';
  const [form] = Form.useForm();
  const onSubmit = async () => {
    console.log(state, items, remarks);
    const lottery:Required<LotteryNewLottery> = {
      ...state, items, remarks, userId,
    };
    // const resp = await lotteryServiceApi.lotteryServiceCreate({ body:{ lottery } });
    await new Promise((resolve, reject) => { setTimeout(resolve, 1000); });

    Taro.showShareMenu({});
  };
  const onReset = () => {
    setState(initState);
    setItems([initItem]);
    setRemarks([initRemark]);
  };
  const setTypeHandler = (type: LotteryType) => () => {
    setState({ type });
    setOpen(false);
  };
  const addArray = <T, B>(i:number,
    handler:React.Dispatch<React.SetStateAction<T[]>>) => (v:Partial<T>) => {
      handler((p) => ([...p.slice(0, i), { ...p[i], ...v }, ...p.slice(i + 1)]));
    };
  const delArray = <T, B>(i:number, handler:React.Dispatch<React.SetStateAction<T[]>>) => () => {
    handler((p) => ([...p.slice(0, i), ...p.slice(i + 1)]));
  };

  return (
    <View className='p-2 bg-gray-100 h-full box-border'>
      <Form
        form={form}
        onFinish={console.log}
        footer={(
          <Row>
            <Col span={12}><Button formType='submit' >提交</Button></Col>
            <Col span={12}><Button formType='reset'>重署</Button></Col>
          </Row>
      )}
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <Form.Item label='名称' name='title'>
          <Input
            placeholder='请输入主题名称'
          />
        </Form.Item>
        <Form.Item label='抽取方式' name='type' onClick={() => setOpen(true)}>
          <View>{getTypeDesc(state.type)}</View>
        </Form.Item>
        <ActionSheet
          visible={open}
          title='选择抽取方式'
          onCancel={() => setOpen(false)}
          options={Object.values(LotteryType)
            .map((type) => ({ name: getTypeDesc(type) }))}
          onSelect={(item) => {
            console.log(item);
            // setTypeHandler(item)
          }}
        />
        <Form.Item label='选项' name='items'>
          {items.map((item, i) => (
            <Form.Item label={`选项${i + 1}`} key={i} name='items'>
              <Row>
                <Col span={12}>
                  <Input
                    placeholder='选项名'
                    value={item.name}
                    onChange={(v) => addArray(i, setItems)({ name: String(v) })}
                  />
                </Col>
                <Col span={8}>
                  <Input
                    placeholder='数量'
                    value={String(item.value)}
                    onChange={(v) => addArray(i, setItems)({ value: Number(v) })}
                  />
                </Col>
                <Col span={4}>
                  <View className='at-col at-col-2' onClick={delArray(i, setItems)}>X</View>
                </Col>
              </Row>
            </Form.Item>
          ))}
        </Form.Item>
        <Button
          size='small'
          onClick={() => setItems([...items, initItem])}
        >
          添加选项
        </Button>
        <Form.Item label='备注'>
          <Switch checked={state.remark} onChange={setState('remark')} />
        </Form.Item>
        {state.remark && remarks.map((remark, i) => (
          <View className='at-row  at-row__align--center' key={i}>
            <View className='at-col at-col-2'>{`备注${i + 1}`}</View>
            <View className='at-col at-col-5'>
              <Input
                name='name'
                type='text'
                placeholder='请输入选项名称'
                value={remark.name}
                onChange={(v) => addArray(i, setRemarks)({ name: String(v) })}
              />
            </View>
            <View className='at-col at-col-4'>
              <Switch
                checked={remark.require}
                onChange={(v) => addArray(i, setRemarks)({ require: v })}
              />
            </View>
            <View className='at-col at-col-2' onClick={delArray(i, setRemarks)}>X</View>
          </View>
        ))}
        {state.remark && (
        <Button
          size='small'
          onClick={() => setRemarks([...remarks, initRemark])}
        >
          添加
        </Button>
        )}
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
        <Button formType='submit'>提交</Button>
        <Button formType='reset'>重置</Button>
      </Form>
    </View>
  );
};

export default Index;
