'use client';

import { Button, Stack } from '@mui/material';
import {
  SubmitHandler, useForm,
} from 'react-hook-form';
import ControllerCheckbox from '../../component/ControllerCheckbox';

export default function Form() {
  const { control, handleSubmit } = useForm({ defaultValues: { info: true, friend: false } });
  const onSubmit:SubmitHandler<any> = (data) => {
    console.log(111, data);
  };
  return (
    <Stack component="form" useFlexGap onSubmit={handleSubmit(onSubmit)} spacing={2} noValidate sx={{ mt: 3, width: '100%' }}>
      <ControllerCheckbox
        control={control}
        name="info"
        label="个人信息"
        fieldProps={{ disabled: true }}
      />
      <ControllerCheckbox
        control={control}
        name="friend"
        label="朋友关系"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>AUTH</Button>
    </Stack>
  );
}
