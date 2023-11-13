'use client';

import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const tabs = [
  { label: '首页', icon: <HomeIcon />, href: '' },
  { label: '知识库', icon: <HistoryEduIcon />, href: 'know' },
  { label: '我的', icon: <PersonIcon />, href: 'mine' },
];

export default function Tabs() {
  const segment = useSelectedLayoutSegment();
  const value = tabs.findIndex((tab) => tab.href.includes(segment || ''));

  return (
    <Paper elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
      >
        {tabs.map((tab) => (
          <BottomNavigationAction
            key={tab.label}
            LinkComponent={Link}
            label={tab.label}
            icon={tab.icon}
            href={`/health/${tab.href}`}
            {...{ replace: true }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
