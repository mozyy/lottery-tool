import {
  ActionSheet,
  Button, Form, Input, Switch,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import { useState } from 'react';
import { useSetState } from '../../hooks/setState';
import {
  LotteryItem, LotteryNewLottery, LotteryRemark, LotteryType,
} from '../../openapi/lottery/lottery';
import styles from './index.module.scss';

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
    <View className={styles.root}>
      <Form
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <Input
          name='title'
          title='主题名称'
          type='text'
          placeholder='请输入主题名称'
          value={state.title}
          onChange={setState('title')}
        />
        <View onClick={() => setOpen(true)}>
          <Input
            name='title'
            title='抽取方式'
            type='text'
            placeholder='请输入主题名称'
            value={getTypeDesc(state.type)}
            className={styles.prevent}
            onChange={() => setState({ type: state.type })}
          >
            &gt;
          </Input>
        </View>
        {open}
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
        选项:
        {items.map((item, i) => (
          <View className='at-row  at-row__align--center' key={i}>
            <View className='at-col at-col-2'>{`选项${i + 1}`}</View>
            <View className='at-col at-col-5'>
              <Input
                name='title'
                type='text'
                placeholder='请输入选项名称'
                value={item.name}
                onChange={(v) => addArray(i, setItems)({ name: String(v) })}
              />
            </View>
            <View className='at-col at-col-4'>
              <Input
                name='value'
                type='digit'
                placeholder='请输入数量'
                value={String(item.value)}
                onChange={(v) => addArray(i, setItems)({ value: Number(v) })}
                key={i}
              />
            </View>
            <View className='at-col at-col-2' onClick={delArray(i, setItems)}>X</View>
          </View>
        ))}
        <Button
          className={styles.add}
          size='small'
          onClick={() => setItems([...items, initItem])}
        >
          添加
        </Button>
        <Switch title='抽签备注' checked={state.remark} onChange={setState('remark')} />
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
                title='必填'
                checked={remark.require}
                onChange={(v) => addArray(i, setRemarks)({ require: v })}
              />
            </View>
            <View className='at-col at-col-2' onClick={delArray(i, setRemarks)}>X</View>
          </View>
        ))}
        {state.remark && (
        <Button
          className={styles.add}
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
