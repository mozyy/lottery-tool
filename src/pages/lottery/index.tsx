import { Button, Form, Input } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { lotteryServiceApi } from '../../api/lottery';
import { recordServiceApi } from '../../api/record';
import { useSWR } from '../../hooks/swr';
import { useSWRMutation } from '../../hooks/swrMutation';
import { RecordCreateRequest } from '../../openapi/lottery/record';

/**
 * @route ?id=
 */
export default function Lottery() {
  const router = useRouter();
  const id = Number(router.params.id);
  const { data } = useSWR([lotteryServiceApi.lotteryServiceGet, id]);
  const { trigger } = useSWRMutation([recordServiceApi.recordServiceCreate]);
  const [form] = Form.useForm();

  if (!data) {
    return null;
  }
  const lottery = data.lottery!;

  const submit = async () => {
    const remarks:string[] = [];
    if (lottery.remark) {
      const value = await form.submit();
      console.log(value);
      remarks.push(value);
    }
    const record: RecordCreateRequest = { record: { lotteryId: id } };
    const res = await trigger([record]);
  };
  return (
    <div className='p-2 bg-gray-100 h-full box-border'>
      <div>{lottery.title}</div>
      {lottery.remark && (
      <Form form={form}>
        {lottery.remarks?.map((remark, i) => (
          <Form.Item
            label={remark.name}
            key={i}
            name={String(i)}
            rules={[{ required: remark.require }]}
          >
            <Input placeholder='请输入' />
          </Form.Item>
        ))}
      </Form>
      )}
      <Button onClick={submit}>提交</Button>
    </div>
  );
}
