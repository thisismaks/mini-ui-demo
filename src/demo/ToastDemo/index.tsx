import React from 'react';

import { Button, Typography, Stack, Alert } from '../../ui/components';
import { useToastContext } from '../../ui/components/Toast/сontext';
import styles from '../../ui/theme/theme.scss';


export const ToastDemo = () => {
  const { addToast, delToast } = useToastContext();

  const addManualToast = () => {
    const toastId = addToast(<Alert onClose={() => delToast(toastId)}>Manual toast!</Alert>, -1);
  };

  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>Toast</Typography>
      <Stack gap={1} direction="row">
        <Button onClick={() => addToast(<Alert>Toast!</Alert>)}>Add toast</Button>
        <Button onClick={() => addManualToast()}>Add manual close toast</Button>
      </Stack>
    </Stack>
  );
};
