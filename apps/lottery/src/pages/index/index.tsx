import {
  Button, Col, Form, FormItem, Input, Radio, Row, Switch,
} from '@nutui/nutui-react-taro';
import { FormInstance } from '@nutui/nutui-react-taro/dist/types/packages/form/types';
import { useRouter, useShareAppMessage } from '@tarojs/taro';
import {
  LotteryNewItem,

  LotteryNewLotteryInfo,
  LotteryNewRemark,
  LotterylotteryCreateResponse,
  LotterylotteryType,
} from '@zyy/openapi/src/axios/lottery/lottery';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useLogin } from '@zyy/weapp/src/hooks/login';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { useMemo, useRef } from 'react';
import { lotteryServiceApi } from '../../api/lottery';
import { TurntableRef } from '../../components/TurntableCanvas';
import { getLotteryTypeDesc } from '../../status/lottery';
import Items from './components/Items';
import Remarks from './components/Remarks';
import Turntable from './components/Turntable';

interface Lottery extends LotteryNewLotteryInfo {
  items: LotteryNewItem[],
  remarks: LotteryNewRemark[]
}

/**
 * 创建抽签
 * @route id?=
 */
function Index() {
  const [form]: FormInstance[] = Form.useForm();
  const login = useLogin();
  const { id } = useRouter().params;
  const { data } = useSWR(() => !!id && [lotteryServiceApi.lotteryServiceGet, Number(id)]);
  const { trigger } = useSWRMutation([lotteryServiceApi.lotteryServiceCreate]);
  const submitRef = useRef<Promise<LotterylotteryCreateResponse> | null>(null);
  const itemsRef = useRef<FormItem>(null);
  const turntableRef = useRef<TurntableRef>(null);
  const initState: Lottery = useMemo(() => {
    let state;
    if (!data?.lottery) {
      state = {
        title: '抽奖',
        type: LotterylotteryType.Number,
        remark: false,
        items: [{
          name: '',
          value: 1,
        }],
        remarks: [],
      };
    } else {
      const { lottery, items, remarks } = data.lottery;
      state = {
        title: lottery?.title,
        type: lottery?.type || LotterylotteryType.Number,
        remark: lottery?.remark,
        items: items?.map((i) => ({ name: i.name, value: i.value })) || [],
        remarks: remarks?.map((i) => ({ name: i.name, require: i.require })) || [],
      };
    }
    // TODO: 不应使用getInternal 来hack
    const { setInitialValues } = form.getInternal('NUT_FORM_INTERNAL');
    setInitialValues(state, true);
    return state;
  }, [data, form]);
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
      await new Promise((r) => { setTimeout(r, 100); });
      if (!submitRef.current) {
        return Promise.reject(Error('cancel'));
      }
      const resp = await submitRef.current;
      let imageUrl;
      if (turntableRef.current) {
        const url = await turntableRef.current.getImagePath();
        imageUrl = url;
      }
      return {
        title: resp?.lottery?.lottery?.title,
        path: `/pages/lottery/index?id=${resp?.lottery?.lottery?.id}`,
        imageUrl,
      };
    }
    return {};
  });
  const validatorItems: any = async (rule, value: LotteryNewItem[]) => {
    for (let i = 0; i < value.length; i += 1) {
      const item = value[i];
      if (!item.name) {
        return Promise.reject(Error(`选项${i + 1}名称不能为空`));
      }
      if (!item.value) {
        return Promise.reject(Error(`选项${i + 1}值不能为空`));
      }
    }
    return true;
  };

  return (
    <div className="p-2">
      <Form
        divider
        form={form}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        initialValues={initState}
        footer={(
          <Row gutter={8}>
            <Col span={12}><Button block formType="reset">重署</Button></Col>
            <Col span={12}><Button block type="primary" openType="share" formType="submit">提交</Button></Col>
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
        <Form.Item label="选项" name="items" ref={itemsRef} rules={[{ required: true, validator: validatorItems }]}>
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
        <Form.Item label="预览" name="items">
          <Turntable ref={turntableRef} />
        </Form.Item>
      </Form>
    </div>
  );
}
export default createErrorBoundary(Index);
