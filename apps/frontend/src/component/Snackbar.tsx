'use client';

import {
  Alert,
  Snackbar as SnackbarMUI,
  SnackbarProps,
} from '@mui/material';
import { useSnackbar } from '@/hooks/snackbar';

export default function Snackbar() {
  const state = useSnackbar((s) => s.snackbar);
  const setState = useSnackbar((s) => s.open);
  const {
    isOpened, message, severity = 'info', snackbar, alert,
  } = state;
  const onClose:SnackbarProps['onClose'] = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (snackbar?.onClose) {
      snackbar.onClose(event, reason);
      return;
    }
    setState({ isOpened: false });
  };
  const snackbarProps = {
    open: isOpened,
    onClose,
    autoHideDuration: 5000,
    ...snackbar,
  };
  const alertProps = {
    children: message,
    severity,
    onClose: (event: React.SyntheticEvent) => onClose(event, 'escapeKeyDown'),
    ...alert,
  };
  return (
    <SnackbarMUI {...snackbarProps}>
      <Alert {...alertProps} />
    </SnackbarMUI>
  );
}
