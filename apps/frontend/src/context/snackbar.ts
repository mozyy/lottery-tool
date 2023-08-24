'use client';

import { createContext } from 'react';
import { SetAllState } from '@/hooks/setState';
import { SnackbarProps } from '@/mui/material';

export const SnackbarSetAllStateContext = createContext<SetAllState<SnackbarProps>>(() => {});
