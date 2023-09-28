import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { Snackbar, snackbarState } from '@/store/snackbar';

export const useSnackbar = () => {
  const snackbar = useSetRecoilState(snackbarState);
  const open = useCallback((props: Snackbar) => {
    snackbar({ open: true, ...props });
  }, [snackbar]);
  return open;
};
