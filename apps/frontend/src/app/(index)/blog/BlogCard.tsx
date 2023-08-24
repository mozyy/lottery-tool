import { BlogBlog } from 'openapi/dist/fetch/blog/blog';
import FeauterCard from '../../../component/FeauterCard';

interface BlogCardProps {
  blog: BlogBlog
}
export default function BlogCard({
  blog,
}:BlogCardProps) {
  return (
    <FeauterCard
      title={blog.title || ''}
      href={`/blog/${blog.id}`}
      image={blog.image || ''}
      content={blog.summary || ''}
    />
  );
}
