'use client';

import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { AdapterDayjs, LocalizationProvider } from '@/mui/x-date-pickers';
import { ThemeProvider, createTheme } from '@/mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0064d2',
    },
    secondary: {
      main: '#1cb0f6',
    },
  },
});

export default function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SWRConfig
          value={{
            suspense: true,
          }}
        >
          <RecoilRoot>
            {children}
          </RecoilRoot>
        </SWRConfig>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
