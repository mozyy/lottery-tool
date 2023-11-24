import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ flex: 'none', p: 2, textAlign: 'center' }}>
      <Typography variant="body2"> © 2021-2024 zuoyinyun.com 版权所有</Typography>
      <Typography
        component="a"
        variant="body2"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        蜀ICP备2023017132号-1
      </Typography>
    </Box>
  );
}
