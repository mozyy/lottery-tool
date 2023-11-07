import {
  Box,
  Unstable_Grid2 as Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import qs from 'qs';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const labels = [
  '', 'JavaScript', 'Rust', 'TypeScript', 'Go', 'Vue', 'Python', 'Java', 'C++', 'C', 'PHP', 'C#', 'Swift',
];

export default async function Index(props: any) {
  const value = labels.indexOf('');
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        github rank
      </Typography>
      <Grid container spacing={{ xs: 2, lg: 4 }} justifyContent="center">
        <Grid xs={12}>
          <Tabs
            value={value}
            // textColor="inherit"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
          >
            {labels.map((item) => (
              <Tab
                LinkComponent={Link}
                key={item}
                label={item || 'ALL'}
                href={`/github${qs.stringify({ label: item }, { addQueryPrefix: true })}`}
                {...{ replace: true }}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid xs={12} lg={10} spacing={2} container>
          {props.children}
        </Grid>
      </Grid>
    </Box>
  );
}
