'use client';

import { Box, Button, Stack } from '@mui/material';

export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void }) {
  return (
    <Stack>
      <Box>some error</Box>
      <Button onClick={reset}>try again</Button>
    </Stack>
  );
}
