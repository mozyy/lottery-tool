import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, DialogProps,
} from '@/mui/material';

export interface AlertProps {
  open: DialogProps['open']
  onClose: NonNullable<DialogProps['onClose']>
  title?: React.ReactNode
  content: React.ReactNode
  cancelText?: React.ReactNode
  showCancel?: boolean
  confirmText?: React.ReactNode
  onSubmit?: () =>void
}

export default function Alerts(props:AlertProps) {
  const {
    open,
    onClose,
    title = '提示',
    content,
    showCancel = true,
    cancelText = '取消',
    confirmText = '确定',
    onSubmit = () => onClose({}, 'backdropClick'),
  } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {showCancel && <Button onClick={() => onClose({}, 'escapeKeyDown')}>{cancelText}</Button>}
        <Button onClick={onSubmit} autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
