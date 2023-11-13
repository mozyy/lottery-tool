import { PropsWithChildren } from 'react';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Box } from '@mui/material';
import Tabs from './Tabs';

export const metadata = {
  title: {
    template: '%s | OW',
    default: 'One Word',
  },
  description: 'json,json美化,json格式化,工具,测试,身份证,身份证生成,blog,博客',
};

export default async function Layout({ children }:PropsWithChildren) {
  return (
    <Box sx={{ display: 'flex', height: '100%', flexDirection: 'column' }} component="main">
      <Box sx={{
        p: 2, flex: 'auto',
      }}
      >
        {children}
      </Box>
      <Tabs />
    </Box>
  );
}
