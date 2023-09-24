'use client';

import { BlogNewBlogFromJSON } from '@zyy/openapi/src/fetch/blog/blog';
import Edit from './Edit';
import { useSetState } from '@/hooks/setState';
import { useSnackbar } from '@/hooks/snackbar';

export default function Create() {
  const [blog, setBlog] = useSetState(BlogNewBlogFromJSON({}));
  const snackbar = useSnackbar();

  const onSubmit = () => {
    console.log(111, blog);
    snackbar({ message: 'ttt' });
  };

  return (
    <Edit blog={blog} setBlog={setBlog} onSubmit={onSubmit} />
  );
}
