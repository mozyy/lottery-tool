import { Box, Typography } from '@/mui/material';

export default function Footer() {
  return (
    <Box sx={{ flex: 'none', p: 2, textAlign: 'center' }}>
      <Typography variant="body2"> © 2021-2023 yyuck.com 版权所有</Typography>
      <Typography
        component="a"
        variant="body2"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        蜀ICP备2021007564号-2
      </Typography>
    </Box>
  );
}
