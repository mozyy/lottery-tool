'use client';

import { useState } from 'react';
import Edit from '../Edit';
import { BlogNewBlog, BlogNewBlogFromJSON } from '@/openapi/blog/blog';
import { useSetState } from '@/hooks/setState';

export default function Update({ id }:{ id:string }) {
  const [blog, setBlog] = useSetState(BlogNewBlogFromJSON({}));

  const onSubmit = (value:BlogNewBlog) => {
    console.log(111, value);
    setBlog(value);
  };

  return (
    <Edit blog={blog} onSubmit={onSubmit} setBlog={setBlog} />
  );
}
