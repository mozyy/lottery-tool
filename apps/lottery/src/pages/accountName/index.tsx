import {
  Button,
  Form, Input,
} from '@nutui/nutui-react-taro';
import { FormInstance } from '@nutui/nutui-react-taro/dist/types/packages/form/types';
import { userServiceApi } from '../../api/wx';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';
import { useSWRMutation } from '../../hooks/swrMutation';
import { useUserId } from '../../hooks/userId';

function AccountName() {
  const userId = useUserId();
  const [form]: FormInstance[] = Form.useForm();
  const { data, mutate } = useSWR([userServiceApi.userServiceGetByUserId, userId]);
  const { trigger } = useSWRMutation([userServiceApi.userServiceUpdate]);
  const onSubmit = async (value: { name: string }) => {
    await trigger([userId, { wxUser: { ...data?.wxUser, ...value } }]);
    mutate();
  };

  return (
    <div className='p-2'>
      <Form
        form={form}
        onFinish={onSubmit}
        initialValues={{ name: data?.wxUser?.name }}
        footer={<Button formType='submit'>提交</Button>}
      >
        <Form.Item label='昵称' name='name' rules={[{ required: true }]}>
          <Input type='nickname' placeholder='请输入昵称' />
        </Form.Item>
      </Form>
    </div>
  );
}

export default createErrorBoundary(AccountName);
