import React from 'react';

import { IconButton, Typography, Stack } from '../../ui/components';
import { CloseIcon } from '../../ui/icons';
import styles from '../../ui/theme/theme.scss';


export const IconButtonDemo = () => (
  <Stack gap={2} className={styles.paper}>
    <Typography variant='h5'>IconButton</Typography>

    <Stack gap={1} direction='row'>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton disabled>
        <CloseIcon />
      </IconButton>
      <IconButton color='secondary'>
        <CloseIcon />
      </IconButton>
      <IconButton color='secondary' disabled>
        <CloseIcon />
      </IconButton>
      <IconButton color='error'>
        <CloseIcon />
      </IconButton>
      <IconButton color='error' disabled>
        <CloseIcon />
      </IconButton>
    </Stack>
        
    <Stack gap={1} direction='row'>
      <IconButton size='medium'>
        <CloseIcon />
      </IconButton>
      <IconButton size='medium' disabled>
        <CloseIcon />
      </IconButton>
      <IconButton size='medium' color='secondary'>
        <CloseIcon />
      </IconButton>
      <IconButton size='medium' color='secondary' disabled>
        <CloseIcon />
      </IconButton>
      <IconButton size='medium' color='error'>
        <CloseIcon />
      </IconButton>
      <IconButton size='medium' color='error' disabled>
        <CloseIcon />
      </IconButton>
    </Stack>

  </Stack>
);
