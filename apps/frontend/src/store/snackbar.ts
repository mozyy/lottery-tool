import { AlertProps, SnackbarProps } from '@mui/material';
import { atom } from 'recoil';

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
