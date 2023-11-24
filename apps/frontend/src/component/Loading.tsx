import { Box, Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function Loading({ children }:PropsWithChildren) {
  return (
    <Stack width="100%" height="100%" alignItems="center" justifyContent="center">
      <Box>loading</Box>
      {children}
    </Stack>
  );
}
