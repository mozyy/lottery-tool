import Link from 'next/link';
import Image from 'next/image';
import { BlogBlog } from '../../../openapi/blog/blog';
import FeauterCard from '../../../component/FeauterCard';
import {
  ArrowForwardIos, Favorite, Share,
} from '@/mui/icons-material';
import {
  Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,
} from '@/mui/material';

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
