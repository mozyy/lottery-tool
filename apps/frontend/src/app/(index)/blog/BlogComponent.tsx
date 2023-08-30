// import { MDXRemote } from 'next-mdx-remote/rsc';
import { BlogBlog } from '@zyy/openapi/dist/fetch/blog/blog';
import Image from 'next/image';
import { Box, Unstable_Grid2 as Grid, Typography } from '@/mui/material';

export default function BlogComponent({ blog }:{ blog: BlogBlog }) {
  return (
    <Grid container spacing={{ xs: 2, lg: 4 }}>
      <Grid xs={12}>
        <Typography variant="h4">{blog.title}</Typography>
        <Typography>{`${blog.author}  ${blog.createdAt?.toLocaleDateString()}`}</Typography>
      </Grid>
      <Grid xs={12}>
        <Image
          src={blog.image!}
          width={820}
          height={547}
          priority
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="blog"
        />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ minHeight: 56 }} dangerouslySetInnerHTML={{ __html: blog.markdown || '' }} />
      </Grid>
    </Grid>
  );
}
