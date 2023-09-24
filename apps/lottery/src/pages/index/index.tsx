import {
  Button, Col, Form, FormItem, Input, Radio, Row, Switch,
} from '@nutui/nutui-react-taro';
import { FormInstance } from '@nutui/nutui-react-taro/dist/types/packages/form/types';
import { useShareAppMessage } from '@tarojs/taro';
import {
  LotteryNewItem,

  LotteryNewLotteryInfo,
  LotteryNewRemark,
  LotterylotteryCreateResponse,
  LotterylotteryType,
} from '@zyy/openapi/src/axios/lottery/lottery';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useLogin } from '@zyy/weapp/src/hooks/login';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { useRef } from 'react';
import { lotteryServiceApi } from '../../api/lottery';
import { getLotteryTypeDesc } from '../../status/lottery';
import Items from './components/Items';
import Remarks from './components/Remarks';

interface Lottery extends LotteryNewLotteryInfo {
  items: LotteryNewItem[],
  remarks: LotteryNewRemark[]
}

const initState: Lottery = {
  title: '抽签',
  type: LotterylotteryType.Number,
  remark: false,
  items: [{
    name: '选项一',
    value: 1,
  }],
  remarks: [],
};

function Index() {
  const [form]: FormInstance[] = Form.useForm();
  const login = useLogin();
  const { trigger } = useSWRMutation([lotteryServiceApi.lotteryServiceCreate]);
  const submitRef = useRef<Promise<LotterylotteryCreateResponse> | null>(null);
  const itemsRef = useRef<FormItem>(null);
  const onSubmit = async (value:
  LotteryNewLotteryInfo & {
    items:LotteryNewItem[],
    remarks:LotteryNewRemark[]
  }) => {
    submitRef.current = (async () => {
      const token = await login();
      const { items, remarks, ...lotteryInfo } = value;
      const lottery = { lottery: { ...lotteryInfo, userId: token.userId }, items, remarks };
      return trigger([{ lottery }]);
    })();
  };
  const onFinishFailed = () => {
    submitRef.current = null;
  };

  useShareAppMessage(async (res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      await new Promise((r) => setTimeout(r, 100));
      if (!submitRef.current) {
        return Promise.reject('cancel');
      }
      const resp = await submitRef.current;
      return {
        title: resp?.lottery?.lottery?.title,
        path: `/pages/lottery/index?id=${resp?.lottery?.lottery?.id}`,
      };
    }
    return {};
  });

  return (
    <div className="p-2">
      <Form
        form={form}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        initialValues={initState}
        footer={(
          <Row>
            <Col span={12}><Button openType="share" formType="submit">提交</Button></Col>
            <Col span={12}><Button formType="reset">重署</Button></Col>
          </Row>
      )}
      >
        <Form.Item label="名称" name="title" rules={[{ required: true }]}>
          <Input
            placeholder="请输入主题名称"
          />
        </Form.Item>
        <Form.Item label="抽取方式" name="type" rules={[{ required: true }]}>
          <Radio.Group direction="horizontal" onChange={() => itemsRef.current?.onStoreChange('update')}>
            {Object.values(LotterylotteryType).map((type) => (
              <Radio value={type} key={type}>{getLotteryTypeDesc(type)}</Radio>))}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="选项" name="items" ref={itemsRef}>
          <Items form={form} />
        </Form.Item>
        <Form.Item label="填写备注" name="remark">
          <Switch />
        </Form.Item>
        <Form.Item label="备注项" name="remarks">
          <Remarks />
        </Form.Item>
        {/* 时间:
        <div className='at-row  at-row__align--center' >
            <div className='at-col at-col-4'>开始时间</div>
            <div className='at-col at-col-5'>
              <Picker mode='date' value={state.startDate}
              onChange={e=>setState({ startDate: e.detail.value })}>
              {state.startDate}
              </Picker>
            </div>
            <div className='at-col at-col-3'>
              <Picker mode='time' value={state.startTime}
              onChange={e=>setState({ startTime: e.detail.value })}>
              {state.startTime}
              </Picker>
            </div>
          </div> */}
      </Form>
    </div>
  );
}
export default createErrorBoundary(Index);
