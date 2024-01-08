import React, { useRef, useState } from 'react';

import { FormControlLabel, Switch, Typography, Stack } from '../../ui/components';
import styles from '../../ui/theme/theme.scss';


export const SwitchDemo = () => {
  const ref = useRef(null);
  const [checked, setChecked] = useState(false);
  
  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>Switch</Typography>

      <Stack gap={1} direction='row'>
        <Switch ref={ref} checked={checked} onChange={() => setChecked(!checked)} />
        <Switch disabled />
      </Stack>
      <Stack gap={1} direction='row'>
        <Switch color='secondary' checked={!checked} onChange={() => setChecked(!checked)} />
        <Switch color='secondary' disabled />
      </Stack>
      <Stack gap={1} direction='row'>
        <Switch size='medium' />
        <Switch size='medium' disabled />
      </Stack>
      <Stack gap={1} direction='row'>
        <Switch size='medium' color='secondary' />
        <Switch size='medium' color='secondary' disabled />
      </Stack>
      <Stack gap={1} direction='row'>
        <Switch color='error' />
        <Switch color='error' disabled />
      </Stack>
      <Stack gap={1} direction='row'>
        <FormControlLabel control={<Switch color='error' />} label='Ошибка' />
        <Switch size='medium' color='error' disabled />
      </Stack>
    </Stack>
  );
};
