'use client';

import { useSetState } from '@/hooks/setState';
import { BlogNewBlog, BlogNewBlogFromJSON } from 'openapi/dist/fetch/blog/blog';
import Edit from '../Edit';

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
