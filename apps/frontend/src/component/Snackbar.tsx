'use client';

import { useRecoilState } from 'recoil';
import {
  Snackbar as SnackbarMUI, Alert, SnackbarProps,
} from '@/mui/material';
import { snackbarState } from '@/store/snackbar';

export default function Snackbar() {
  const [state, setState] = useRecoilState(snackbarState);
  const {
    open, message, severity = 'info', snackbar, alert,
  } = state;
  const onClose:SnackbarProps['onClose'] = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (snackbar?.onClose) {
      snackbar.onClose(event, reason);
      return;
    }
    setState((v) => ({ ...v, open: false }));
  };
  const snackbarProps = {
    open,
    onClose,
    autoHideDuration: 5000,
    ...snackbar,
  };
  const alertProps = {
    children: message,
    severity,
    onClose: (event: React.SyntheticEvent) => onClose(event, 'clickaway'),
    ...alert,
  };
  return (
    <SnackbarMUI {...snackbarProps}>
      <Alert {...alertProps} />
    </SnackbarMUI>
  );
}
