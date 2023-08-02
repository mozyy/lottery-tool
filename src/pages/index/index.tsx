import {
  Button, Col, Form, Input, Radio, Row, Switch,
} from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import { lotteryServiceApi } from '../../api/lottery';
import { useLogin } from '../../hooks/login';
import { useSWRMutation } from '../../hooks/swrMutation';
import {
  LotteryNewItem,

  LotteryNewLotteryInfo,
  LotteryNewRemark,
  LotteryType,
} from '../../openapi/lottery/lottery';
import Items from './components/Items';
import Remarks from './components/Remarks';

const getTypeDesc = (type:LotteryType) => ({
  [LotteryType.Number]: '个数',
  [LotteryType.Percent]: '几率',
}[type]);

interface Lottery extends LotteryNewLotteryInfo {
  items: LotteryNewItem[],
  remarks: LotteryNewRemark[]
}

const initState: Lottery = {
  title: '抽签',
  type: LotteryType.Number,
  remark: false,
  items: [{
    name: '选项一',
    value: 1,
  }],
  remarks: [],
};

export default function Index() {
  const [form] = Form.useForm();
  const login = useLogin();
  const { trigger } = useSWRMutation([lotteryServiceApi.lotteryServiceCreate]);
  const onSubmit = async (value:
  LotteryNewLotteryInfo & {
    items:LotteryNewItem[],
    remarks:LotteryNewRemark[]
  }) => {
    await login();
    const { items, remarks, ...lotteryInfo } = value;
    const lottery = { lottery: lotteryInfo, items, remarks };
    await trigger([{ lottery }]);

    Taro.showShareMenu({});
  };

  return (
    <div className='p-2 bg-gray-100 h-full box-border'>
      <Form
        form={form}
        onFinish={onSubmit}
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
