'use client';

import { useState } from 'react';
import Edit from './Edit';
import { useSetState } from '@/hooks/setState';
import { BlogNewBlogFromJSON } from '@/openapi/blog/blog';
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
