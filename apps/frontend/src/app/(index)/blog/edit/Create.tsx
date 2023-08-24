'use client';

import { useSetState } from '@/hooks/setState';
import { useSnackbar } from '@/hooks/snackbar';
import { BlogNewBlogFromJSON } from 'openapi/dist/fetch/blog/blog';
import Edit from './Edit';

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
