import { Unstable_Grid2 as Grid } from '@mui/material';
import { PropsWithChildren } from 'react';

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
