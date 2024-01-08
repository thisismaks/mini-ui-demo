import React, { useState } from 'react';

import { Radio, Typography, Stack } from '../../ui/components';
import styles from '../../ui/theme/theme.scss';


export const RadioDemo = () => {
  const [radioChecked, setRadioChecked] = useState(false);
    
  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>Radio</Typography>

      <Stack gap={1} direction='row'>
        <Radio checked={radioChecked} onChange={() => setRadioChecked(!radioChecked)} />
        <Radio checked={radioChecked} disabled />
        <Radio color='secondary' />
        <Radio color='secondary' disabled />
        <Radio size='medium' />
        <Radio size='medium' disabled />
        <Radio size='medium' color='secondary' />
        <Radio size='medium' color='secondary' disabled />
        <Radio color='error' />
        <Radio color='error' disabled />
        <Radio size='medium' color='error' />
        <Radio size='medium' color='error' disabled />
      </Stack>
    </Stack>
  );
};
