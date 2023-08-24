import FeauterCard from '@/component/FeauterCard';
import {
  Unstable_Grid2 as Grid,
  Box, Typography,
} from '@/mui/material';

export default async function Index() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 1 }}>
        One Word, One World.
      </Typography>
      <Grid container spacing={{ xs: 2, lg: 4 }} justifyContent="center">
        <Grid xs={12} sm={6} lg={5}>
          <FeauterCard
            title="博客"
            href="/blog"
            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=820&h=547&fit=crop"
            content="用文字点亮思想，用灵感点燃对知识的渴望"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={5}>
          <FeauterCard
            title="工具"
            href="/tool"
            image="https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=820&h=547&fit=crop"
            content="解放创造力，工作添便利"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={5}>
          <FeauterCard
            title="开源排行"
            href="/github"
            image="https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=820&h=547&fit=crop"
            content="揭示优秀的精华，掌握最新的趋势"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={5}>
          <FeauterCard
            title="文档"
            href="/docs"
            image="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=820&h=547&fit=crop"
            content="打破信息壁垒，实现知识共享"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
