import Link from 'next/link';
import {
  Box, Card, CardHeader, Unstable_Grid2 as Grid,
} from '@/mui/material';

export default function Tool() {
  return (
    <Box>
      <Grid container>
        <Grid xs={12}>
          <Link href="/tool/id-card">
            <Card>
              <CardHeader title="测试身份证生成" />
            </Card>
          </Link>
        </Grid>
        <Grid xs={12}>
          <Link href="/tool/json">
            <Card>
              <CardHeader title="JSON工具" />
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
