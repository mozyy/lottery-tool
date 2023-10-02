import {
  Button,
  Form, Input,
} from '@nutui/nutui-react-taro';
import { FormInstance } from '@nutui/nutui-react-taro/dist/types/packages/form/types';
import { navigateBack } from '@tarojs/taro';
import { UserNewUser } from '@zyy/openapi/src/axios/wx/user';
import { userServiceApi } from '@zyy/weapp/src/api/wx';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useSWR } from '@zyy/weapp/src/hooks/swr';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { useUserId } from '@zyy/weapp/src/hooks/userId';

function AccountName() {
  const userId = useUserId();
  const [form]: FormInstance[] = Form.useForm();
  const { data, mutate } = useSWR([userServiceApi.userServiceGetByUserId, userId]);
  const { trigger } = useSWRMutation([userServiceApi.userServiceUpdate]);
  const onSubmit = async (value: { name: string }) => {
    const wxUser = data?.wxUser;
    const user:UserNewUser = {
      userId: wxUser?.userId,
      openid: wxUser?.openid,
      unionid: wxUser?.unionid,
      sessionKey: wxUser?.sessionKey,
      name: value.name,
      avatar: wxUser?.avatar,
      mobile: wxUser?.mobile,
    };
    await trigger([data?.wxUser?.id!, { wxUser: user }]);
    mutate();
    navigateBack();
  };

  return (
    <div className="p-2">
      <Form
        form={form}
        onFinish={onSubmit}
        initialValues={{ name: data?.wxUser?.name }}
        footer={<Button formType="submit">提交</Button>}
      >
        <Form.Item label="昵称" name="name" rules={[{ required: true }]}>
          <Input type="nickname" placeholder="请输入昵称" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default createErrorBoundary(AccountName);
