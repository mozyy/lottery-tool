import { atom } from 'recoil';
import { AlertProps, SnackbarProps } from '@/mui/material';

export interface Snackbar {
  open?: SnackbarProps['open']
  message?: AlertProps['children']
  severity?: AlertProps['severity']
  snackbar?: Omit<SnackbarProps, 'message'>
  alert?: Omit<AlertProps, 'onClose'>
}

export const snackbarState = atom<Snackbar>({
  key: 'snackbarState',
  default: {},
});
