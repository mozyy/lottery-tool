import { PropsWithChildren } from 'react';
import Provider from './Provider';
import './globals.css';
import Footer from './Footer';
import { CssBaseline, Box, Typography } from '@/mui/material';
import Snackbar from '@/component/Snackbar';

// export const runtime = 'edge';

export const metadata = {
  title: 'One-Word',
  description: 'One word, One world.',
};

export default function RootLayout({ children }:PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <CssBaseline enableColorScheme />
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flex: 'auto' }}>
              {children}
            </Box>
            <Footer />
          </Box>
          <Snackbar />
        </Provider>
      </body>
    </html>
  );
}
