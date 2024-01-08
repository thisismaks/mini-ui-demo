import React from 'react';

import { Typography, Alert, Stack } from '../../ui/components';
import styles from '../../ui/theme/theme.scss';


export const AlertDemo = () => (
  <Stack gap={2} className={styles.paper}>
    <Typography variant='h5'>Alert</Typography>
    <Alert severity='error'>This is an error alert — check it out!</Alert>
    <Alert severity='warning' onClose={() => {}}>This is a warning alert — check it out!</Alert>
    <Alert severity='success' onClose={() => {}}>This is an info alert — check it out!</Alert>
    <Alert severity='info' onClose={() => {}}>This is a success alert — check it out!</Alert>
  </Stack>
);
