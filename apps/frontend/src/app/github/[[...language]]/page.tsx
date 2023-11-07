import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export default async function Index({ language }:any) {
  console.log(1111, language);
  const repos = await fetch(`https://api.github.com/search/repositories?q=stars:>1000${language ? ` language:${encodeURIComponent(language)}` : ''}&sort=stars&per_page=42&page=1`, {
    next: { revalidate: 60 * 60 },
  })
    .then((resp) => resp.json());
  return (repos.items.map((item:any, i:number) => (
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
  ))
  );
}
