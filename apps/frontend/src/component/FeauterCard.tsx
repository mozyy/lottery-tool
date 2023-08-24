import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowForwardIos, Favorite, Share,
} from '@/mui/icons-material';
import {
  Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,
} from '@/mui/material';

interface FeauterCardProps {
  title: string,
  href: string,
  image: string,
  content: string,
}
export default function FeauterCard({
  title, href, image, content,
}:FeauterCardProps) {
  return (
    <Card>
      <CardHeader title={(
        <Typography
          variant="h5"
          sx={{ ':not(:hover)': { textDecorationLine: 'none' } }}
          component={Link}
          href={href as any}
        >
          {title}
        </Typography>
      )}
      />
      <Link href={href as any}>
        <CardMedia>
          <Image
            src={image}
            width={820}
            height={547}
            priority
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt={title}
          />
        </CardMedia>
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="收藏">
          <Favorite />
        </IconButton>
        <IconButton aria-label="分享">
          <Share />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton aria-label="更多" LinkComponent={Link} href={href}>
          <ArrowForwardIos />
        </IconButton>
      </CardActions>
    </Card>
  );
}
