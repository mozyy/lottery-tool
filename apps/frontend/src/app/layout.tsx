import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import Provider from './Provider';
import ThemeRegistry from './ThemeRegistry';
import Snackbar from '@/component/Snackbar';
import './globals.css';

// export const runtime = 'edge';

export const metadata = {
  title: 'One-Word',
  description: 'One word, One world.',
};

export default function RootLayout({ children }:PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <Provider>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Box sx={{ flex: 'auto' }}>
                {children}
              </Box>
              {/* <Footer /> */}
            </Box>
            <Snackbar />
          </Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
