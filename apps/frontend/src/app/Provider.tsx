'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

export default function Provider({ children }: PropsWithChildren) {
  return (
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
  );
}
