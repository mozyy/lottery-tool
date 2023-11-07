'use client';

import { SnackbarProps } from '@mui/material';
import { createContext } from 'react';
import { SetAllState } from '@/hooks/setState';

export const SnackbarSetAllStateContext = createContext<SetAllState<SnackbarProps>>(() => {});
