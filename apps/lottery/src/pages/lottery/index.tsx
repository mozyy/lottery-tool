import { Button, Form } from '@nutui/nutui-react-taro';
import { showToast, useRouter } from '@tarojs/taro';
import { LotteryLottery } from '@zyy/openapi/src/axios/lottery/lottery';
import { LotteryrecordCreateRequest, RecordNewRecordRemark } from '@zyy/openapi/src/axios/lottery/record';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useLogin } from '@zyy/weapp/src/hooks/login';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { lotteryServiceApi, recordServiceApi } from '../../api/lottery';
import Remark from './components/Remark';

/**
 * @route ?id=
 */
function Lottery() {
  const router = useRouter();
  const id = Number(router.params.id || 3);
  const login = useLogin();
  const { data, result } = useSWR([lotteryServiceApi.lotteryServiceGet, id]);
  const { trigger } = useSWRMutation([recordServiceApi.recordServiceCreate]);
  const [form] = Form.useForm();

  if (result) {
    return result;
  }

  const { lottery, items, remarks } = data.lottery as Required<LotteryLottery>;

  const submit = async (value) => {
    const recordRemarks:RecordNewRecordRemark[] = Object.values(value || {});

    const token = await login();
    const record: LotteryrecordCreateRequest = {
      record: {
        record: { lotteryId: id, userId: token.userId },
        recordRemarks,
      },
    };
    const res = await trigger([record]);
    showToast({ title: `抽中${res.record?.record?.itemId}` });
  };
  return (
    <div className='p-2'>
      <Form
        form={form}
        onFinish={submit}
        footer={
          <Button formType='submit'>提交</Button>
      }
      >
        <div>{lottery.title}</div>
        {items.map((item) => (<div>{item.name}</div>))}
        {remarks.map((remark, i) => (
          <Form.Item
            label={remark.name}
            key={remark.id}
            name={remark.name}
            required={remark.require}
            rules={[{ required: remark.require, message: `${remark.name}为必填` }]}
          >
            <Remark remark={remark} />
          </Form.Item>
        ))}
      </Form>
    </div>
  );
}

export default createErrorBoundary(Lottery);
