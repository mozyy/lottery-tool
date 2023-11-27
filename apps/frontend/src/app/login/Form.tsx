'use client';

import { Button, Stack } from '@mui/material';
import { AuthToken } from '@zyy/common/src/model/authToken';
import { encryptPassword } from '@zyy/common/src/utils/crypto';
import { UserLoginMobileRequest } from '@zyy/openapi/src/fetch/user/user';
import {
  useForm,
} from 'react-hook-form';
import { userApi } from '../../api/user';
import ControllerText from '../../component/ControllerText';
import { useAuthToken } from '../../hooks/authToken';
import { useSWRMutation } from '../../hooks/swrMutation';

export default function Form() {
  const { control, handleSubmit } = useForm<UserLoginMobileRequest>();
  const { trigger } = useSWRMutation([userApi, 'userServiceLoginMobile']);
  const login = useAuthToken((s) => s.login);

  const onSubmit = async ({ password, ...rest }: UserLoginMobileRequest) => {
    const passwordNew = encryptPassword(password!);
    const res = await trigger([{ body: { ...rest, password: passwordNew } }]);
    const authToken = new AuthToken(res.token, res.user);
    login();
  };
  return (
    <Stack component="form" useFlexGap onSubmit={handleSubmit(onSubmit)} spacing={2} noValidate sx={{ mt: 3, width: '100%' }}>
      <ControllerText
        control={control}
        name="mobile"
        label="手机"
        rules={{ required: '手机不能为空', pattern: { value: /\d{11}/, message: '请输入11位手机' } }}
        fieldProps={{ fullWidth: true, autoFocus: true, type: 'tel' }}
      />
      <ControllerText
        control={control}
        name="password"
        label="密码"
        rules={{ required: '密码不能为空' }}
        fieldProps={{ fullWidth: true, type: 'password' }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>LOGIN</Button>
    </Stack>
  );
}
