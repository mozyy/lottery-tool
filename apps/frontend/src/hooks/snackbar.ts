import { useCallback, useContext } from 'react';
import { useSetRecoilState } from 'recoil';
import { SnackbarSetAllStateContext } from '@/context/snackbar';
import { Snackbar, snackbarState } from '@/store/snackbar';
import { SnackbarProps } from '@/mui/material';

export const useSnackbar = () => {
  const snackbar = useSetRecoilState(snackbarState);
  const open = useCallback((props: Snackbar) => {
    snackbar({ open: true, ...props });
  }, [snackbar]);
  return open;
};
