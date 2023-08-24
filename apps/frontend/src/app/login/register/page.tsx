'use client';

import Link from 'next/link';
import {
  FormEvent, FormEventHandler, useEffect, useState,
} from 'react';
import { signIn, useSession } from 'next-auth/react';
import { Box, Button, TextField } from '@/mui/material';

export default function Register() {
  const onSubmit = async (e:FormEvent) => {
    e.preventDefault();
    const res = await signIn();
    console.log(2222, res);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField label="Mobile" />
      <TextField label="Password" type="password" />
      <Button type="submit">register</Button>
    </Box>
  );
}
