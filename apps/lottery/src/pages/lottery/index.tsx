import { Button, Form } from '@nutui/nutui-react-taro';
import { showToast, useRouter } from '@tarojs/taro';
import { LotteryrecordCreateRequest, RecordNewRecordRemark } from '@zyy/openapi/src/axios/lottery/record';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useAuthToken } from '@zyy/weapp/src/hooks/authToken';
import { useLogin } from '@zyy/weapp/src/hooks/login';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { error } from '@zyy/weapp/src/utils/log';
import { useRef } from 'react';
import { lotteryServiceApi, recordServiceApi } from '../../api/lottery';
import Turntable, { TurntableRef } from '../../components/Turntable';
import { TurntableItem } from '../../components/Turntable/types';
import Remark from './components/Remark';

/**
 * @route ?id=
 */
function Lottery() {
  const router = useRouter();
  const id = Number(router.params.id || 1);
  const login = useLogin();
  const { data, result } = useSWR([lotteryServiceApi.lotteryServiceGet, id]);
  const { trigger } = useSWRMutation([recordServiceApi.recordServiceCreate]);
  const [form] = Form.useForm();
  const turntableRef = useRef<TurntableRef>(null);

  if (result) {
    return result;
  }

  const { lottery, items, remarks } = data.lottery!;

  const submit = async (value) => {
    const turntable = turntableRef.current;
    if (!turntable) {
      showToast({ title: '转盘初始化失败', icon: 'error' });
      error('转盘初始化失败');
      return;
    }
    const recordRemarks:RecordNewRecordRemark[] = Object.values(value || {});
    await login();
    const record: LotteryrecordCreateRequest = {
      record: {
        record: { lotteryId: id, userId: useAuthToken.getState().jwt?.sub },
        recordRemarks,
      },
    };
    const res = await trigger([record]);
    const index = items!.findIndex((item) => item.id === res.record?.record?.itemId);
    await turntable.turn(index);
    showToast({ title: `抽中: ${items![index].name}` });
  };
  return (
    <div className="p-2">
      <Form
        form={form}
        onFinish={submit}
        footer={
          <Button formType="submit">提交</Button>
      }
      >
        <div>{lottery?.title}</div>
        <Turntable className="h-[700px] w-[700px]" items={items as TurntableItem[]} ref={turntableRef} />
        {remarks?.map((remark) => (
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
