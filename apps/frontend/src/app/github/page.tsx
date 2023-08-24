import Link from 'next/link';
import qs from 'qs';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {
  Unstable_Grid2 as Grid,
  Box, Typography, AppBar, IconButton, Tabs, Toolbar, Tab, Badge, Card,
  CardHeader, Avatar, CardContent, CardActions, Button, CardActionArea,
} from '@/mui/material';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const labels = [
  '', 'JavaScript', 'Rust', 'TypeScript', 'Go', 'Vue', 'Python', 'Java', 'C++', 'C', 'PHP', 'C#', 'Swift',
];

export default async function Index({ searchParams }:{ searchParams:{ label: string } }) {
  const { label = '' } = searchParams;
  const value = labels.indexOf(label);
  const repos = await fetch(`https://api.github.com/search/repositories?q=stars:>1000${label ? ` language:${label}` : ''}&sort=stars&per_page=42&page=1`, {
    next: { revalidate: 24 * 60 * 60 },
  })
    .then((resp) => resp.json());
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
            {labels.map((item) => (<Tab LinkComponent={Link} key={item} label={item || 'ALL'} href={`/github${qs.stringify({ label: item }, { addQueryPrefix: true })}`} />))}
          </Tabs>
        </Grid>
        <Grid xs={12} lg={10} spacing={2} container>
          {repos.items.map((item:any, i:number) => (
            <Grid xs={12} sm={6} lg={4} key={item.id}>
              <Card>
                <CardActionArea LinkComponent={Link} href={item.html_url} target="_blank">
                  <CardHeader
                    avatar={(
                      <Avatar aria-label={item.owner.login} src={item.owner.avatar_url} />
                    )}
                    title={`${i + 1} ${item.name}`}
                    subheader={item.full_name}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        mb: 1,
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        textOverflow: 'ellipsis',
                        height: '3em',
                      }}
                      title={item.description}
                    >
                      {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ⭐
                      {item.stargazers_count}
                      {' '}
                      ✨
                      {item.forks_count}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span title={dayjs(item.pushed_at).locale('zh-cn').format('lll')}>{`last commit: ${dayjs(item.pushed_at).fromNow(true)} ago`}</span>
                      <span>{item.language}</span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
