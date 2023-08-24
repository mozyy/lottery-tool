import { Box, Button, ButtonBase } from '@/mui/material';

export default function Upload() {
  return (
    <ButtonBase component="label">
      Upload
      <input hidden accept="image/*" multiple type="file" />
    </ButtonBase>
  );
}
