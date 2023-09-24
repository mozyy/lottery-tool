// import { MDXRemote } from 'next-mdx-remote/rsc';
import { BlogServiceApi } from '@zyy/openapi/src/fetch/blog/blog';
import { marked } from 'marked';
import BlogComponent from '../BlogComponent';

export default async function Detail({ params: { id } }:{ params: { id:string } }) {
  const blogApi = new BlogServiceApi();
  const res = await blogApi.blogServiceGet({ id: Number(id) }, { cache: 'no-store' });
  const blog = res.blog!;
  // const MDX = await MDXRemote({ source: blog.markdown! });
  const markdown = marked(blog.markdown!);

  const viewBlog = { ...blog, markdown };

  return (
    <BlogComponent blog={viewBlog} />
  );
}
