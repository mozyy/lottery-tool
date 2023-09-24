'use client';

import { BlogNewBlog, BlogNewBlogFromJSON } from '@zyy/openapi/src/fetch/blog/blog';
import Edit from '../Edit';
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
