import { AlertProps, SnackbarProps } from '@mui/material';
import { create } from 'zustand';

export interface Snackbar {
  isOpened?: SnackbarProps['open']
  message?: AlertProps['children']
  severity?: AlertProps['severity']
  snackbar?: Omit<SnackbarProps, 'message'>
  alert?: Omit<AlertProps, 'onClose'>
}

export const useSnackbar = create<{
  snackbar: Snackbar,
  open:(props: Snackbar)=>void
}>((set) => ({
      snackbar: {} as Snackbar,
      open: (props: Snackbar) => set((state) => ({
        snackbar: { ...state.snackbar, isOpened: true, ...props },
      })),
    }));
