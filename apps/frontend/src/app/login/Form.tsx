'use client';

import { Button, Stack } from '@mui/material';
import { encryptPassword } from '@zyy/common/src/utils/crypto';
import { UserServiceLoginMobileRequest } from '@zyy/openapi/src/fetch/user/user';
import {
  useForm,
} from 'react-hook-form';
import useSWR from 'swr';
import { blogApi } from '../../api/blog';
import { userApi } from '../../api/user';
import ControllerText from '../../component/ControllerText';

export default function Form() {
  const { control, handleSubmit } = useForm<UserServiceLoginMobileRequest>();
  const { data } = useSWR('blogServiceList', () => blogApi.blogServiceList());
  console.log(123, data);
  const onSubmit = async ({ password, ...rest }: UserServiceLoginMobileRequest) => {
    const passwordNew = encryptPassword(password!);
    console.log(111, rest, password);
    userApi.userServiceLoginMobile({ ...rest, password: passwordNew });
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
