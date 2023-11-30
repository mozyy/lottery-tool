'use client';

import { Button, Stack } from '@mui/material';
import { encryptPassword } from '@zyy/common/src/utils/crypto';
import { UserLoginMobileRequest } from '@zyy/openapi/src/fetch/user/user';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  useForm,
} from 'react-hook-form';
import { blogApi } from '../../api/blog';
import { userApi } from '../../api/user';
import ControllerText from '../../component/ControllerText';
import Loading from '../../component/Loading';
import { envBrowser } from '../../env.browser';
import { useAuthToken } from '../../hooks/authToken';
import { useSWR } from '../../hooks/swr';
import { useSWRMutation } from '../../hooks/swrMutation';

export default function Form() {
  const { control, handleSubmit } = useForm<UserLoginMobileRequest>({
    defaultValues: {
      clientId: envBrowser.userClient,
    },
  });
  const { data } = useSWR([blogApi, 'blogServiceList']);
  const { trigger, isMutating } = useSWRMutation([userApi, 'userServiceLoginMobile']);
  const login = useAuthToken((s) => s.login);
  const logined = useAuthToken((s) => s.logined());
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectUri: any = searchParams.get('redirect_uri') || '/';

  if (logined) {
    router.push(redirectUri);
    return <Loading />;
  }

  const onSubmit = async ({ password, ...rest }: UserLoginMobileRequest) => {
    const passwordNew = encryptPassword(password!);
    const res = await trigger([{ body: { ...rest, password: passwordNew } }]);
    login(res);
    router.push(redirectUri);
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
      <Button type="submit" variant="contained" disabled={isMutating} sx={{ mt: 2 }}>LOGIN</Button>
    </Stack>
  );
}
