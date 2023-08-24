import { getServerSession } from 'next-auth/next';
import { PropsWithChildren } from 'react';
import { Box, Unstable_Grid2 as Grid, Typography } from '@/mui/material';

export const metadata = {
  title: 'blog',
};

export default function Layout({ children }:PropsWithChildren) {
  return (
    <Grid container justifyContent="center" flex="auto">
      <Grid xs={12} container lg={10} flexDirection="column">
        {children}
      </Grid>
    </Grid>
  );
}
