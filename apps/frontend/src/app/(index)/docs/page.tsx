import Link from 'next/link';
import { Unstable_Grid2 as Grid } from '@/mui/material';

export default function Docs() {
  return (
    <Grid container>
      <Grid xs={12}>
        <Link href="/docs/blog/blog">blog</Link>
        <br />
        <Link href="/docs/lottery/lottery">lottery</Link>
        <br />
        <Link href="/docs/lottery/record">record</Link>
      </Grid>
    </Grid>
  );
}
