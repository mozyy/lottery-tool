'use client';

import {
  BlogNewBlog,
} from '@zyy/openapi/src/fetch/blog/blog';
import {
  ChangeEvent,
  useState,
} from 'react';
import BlogComponent from '../BlogComponent';
import Gallery from '@/component/Gallery';
import { SetState } from '@/hooks/setState';
import {
  Box, Button, Unstable_Grid2 as Grid, TextField, Typography,
} from '@/mui/material';

interface EditProps {
  blog:BlogNewBlog
  setBlog: SetState<BlogNewBlog>
  onSubmit:(blog:BlogNewBlog) => void
}

export default function Edit({ blog, setBlog, onSubmit }:EditProps) {
  const [gallery, setGallery] = useState(false);
  const getFieldProps = (label: string, key: keyof BlogNewBlog) => ({
    label,
    fullWidth: true,
    value: blog[key],
    onChange: (e:ChangeEvent<HTMLInputElement>) => setBlog({ [key]: e.target.value }),
  });

  console.log(1111111111);

  return (
    <Box flex="auto" display="flex" flexDirection="column">
      <Box sx={{ textAlign: 'right', mb: 1 }}>
        <Button variant="contained" onClick={() => onSubmit(blog)}>submit </Button>
      </Box>
      <Button variant="contained" onClick={() => setGallery(true)}>Gallery</Button>
      <Gallery open={gallery} onClose={() => setGallery(false)} />
      <Grid container spacing={{ xs: 2, lg: 4 }}>
        <Grid container xs={12} md={6}>
          <Grid xs={12}>
            <Typography>编辑</Typography>
          </Grid>
          <Grid xs={12} sm={8}>
            <TextField {...getFieldProps('标题', 'title')} />
          </Grid>
          <Grid xs={12} sm={4}>
            <TextField {...getFieldProps('作者', 'author')} />
          </Grid>
          <Grid xs={12}>
            <TextField {...getFieldProps('图片', 'image')} />
          </Grid>
          <Grid xs={12}>
            <TextField multiline {...getFieldProps('简介', 'summary')} />
          </Grid>
          <Grid xs={12}>
            <TextField multiline minRows={3} {...getFieldProps('内容', 'markdown')} />
          </Grid>
        </Grid>
        <Grid xs={12} md={6}>
          <Typography>预览</Typography>
          <BlogComponent blog={blog} />
        </Grid>
      </Grid>
    </Box>
  );
}
