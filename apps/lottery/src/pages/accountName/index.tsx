import {
  Button,
  Form, Input,
} from '@nutui/nutui-react-taro';
import { FormInstance } from '@nutui/nutui-react-taro/dist/types/packages/form/types';
import { navigateBack } from '@tarojs/taro';
import { userServiceApi } from '@zyy/weapp/src/api/user';
import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import { useGetUserInfoByUserId } from '@zyy/weapp/src/hooks/getUserInfoByUserId';
import { useSWRMutation } from '@zyy/weapp/src/hooks/swrMutation';
import { useUserId } from '@zyy/weapp/src/hooks/userId';

function AccountName() {
  const userId = useUserId();
  const [form]: FormInstance[] = Form.useForm();
  const { data: dataInfo, mutate } = useGetUserInfoByUserId(userId);
  const { trigger } = useSWRMutation([userServiceApi.userServiceUpdateInfo]);
  const onSubmit = async (value: { name: string }) => {
    const info = {
      ...dataInfo?.info,
      name: value.name,
    };
    await trigger([dataInfo?.info?.id!, { info }]);
    mutate();
    navigateBack();
  };

  return (
    <div className="p-2">
      <Form
        form={form}
        onFinish={onSubmit}
        initialValues={{ name: dataInfo?.info?.name }}
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
