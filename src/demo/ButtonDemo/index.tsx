import React, { useRef } from 'react';

import { Button, Typography, Stack } from '../../ui/components';
import { CloseIcon } from '../../ui/icons';
import styles from '../../ui/theme/theme.scss';


export const ButtonDemo = () => {
  const ref = useRef(null);
  
  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>Button</Typography>

      <Stack gap={1} direction='row'>
        <Button startIcon={<CloseIcon />} ref={ref} variant='outlined'>Outlined primary</Button>
        <Button
          startIcon={<CloseIcon />}
          endIcon={<CloseIcon />}
          variant='outlined'
          disabled
        >
              Outlined primary disabled
        </Button>
      </Stack>
      <Stack gap={1} direction='row'>
        <Button variant='outlined' color='secondary'>Outlined secondary</Button>
        <Button variant='outlined' color='secondary' disabled>Outlined secondary disabled</Button>
      </Stack>
      <Stack gap={1} direction='row'>
        <Button variant='outlined' color='error'>Outlined error</Button>
        <Button variant='outlined' color='error' disabled>Outlined error disabled</Button>
      </Stack>

      <Stack gap={1} direction='row'>
        <Button variant='contained'>Contained primary</Button>
        <Button variant='contained' disabled>Contained primary disabled</Button>
      </Stack>
      <Stack gap={1} direction='row'>
        <Button variant='contained' color='secondary'>Contained secondary</Button>
        <Button variant='contained' color='secondary' disabled>Contained secondary disabled</Button>
      </Stack>
      <Stack gap={1} direction='row'>
        <Button variant='contained' color='error'>Contained error</Button>
        <Button variant='contained' color='error' disabled>Contained error disabled</Button>
      </Stack>
    </Stack>
  );
};
