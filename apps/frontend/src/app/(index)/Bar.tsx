'use client';

import {
  AccountCircle, Menu as MenuIcon, MoreVert, Notifications,
} from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box, IconButton,
  Tab,
  Tabs, Toolbar, Typography,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Bar() {
  const [tab, setTab] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const value = ['/', '/blog', '/tool'].indexOf(pathname);
    if (value >= 0) {
      setTab(value);
    }
  }, [pathname]);

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton sx={{ mr: 2 }} aria-label="打开菜单" edge="start" size="large" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }} variant="h6">
            One-Word
          </Typography>
          <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="nav tabs example"
          >
            <Tab LinkComponent={Link} label="首页" href="/" />
            <Tab LinkComponent={Link} label="博客" href="/blog" />
            <Tab LinkComponent={Link} label="工具" href="/tool" />
            <Tab LinkComponent={Link} label="文档" href="/docs" />
          </Tabs>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <IconButton color="inherit" size="large">
              <Badge badgeContent={68} color="secondary" aria-label="通知">
                <Notifications />
              </Badge>
            </IconButton>
            <Link href="/login">
              <IconButton color="inherit" size="large" edge="end" aria-label="我的">
                <AccountCircle />
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton color="inherit" size="large" aria-label="更多">
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
