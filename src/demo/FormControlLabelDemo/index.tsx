import React from 'react';

import { FormControlLabel, Radio, Switch, Typography, Stack } from '../../ui/components';
import styles from '../../ui/theme/theme.scss';


export const FormControlDemo = () => (
  <Stack gap={2} className={styles.paper}>
    <Typography variant='h5'>FormControlDemo</Typography>

    <Stack gap={1} direction='row'>
      <FormControlLabel
        control={<Radio />}
        label='Это моя кнопка'
        labelPlacement='start'
      />
      <FormControlLabel
        control={<Radio />}
        label='Это моя кнопка'
        labelPlacement='top'
      />
      <FormControlLabel
        control={<Radio />}
        label='Это моя кнопка'
        labelPlacement='end'
      />
      <FormControlLabel
        control={<Radio />}
        label='Это моя кнопка'
        labelPlacement='bottom'
      />
    </Stack>

    <Stack gap={1} direction='row'>
      <FormControlLabel
        control={<Switch />}
        label='Это моя кнопка'
        labelPlacement='start'
      />
      <FormControlLabel
        control={<Switch />}
        label='Это моя кнопка'
        labelPlacement='top'
      />
      <FormControlLabel
        control={<Switch />}
        label='Это моя кнопка'
        labelPlacement='end'
      />
      <FormControlLabel
        control={<Switch />}
        label='Это моя кнопка'
        labelPlacement='bottom'
      />
    </Stack>
  </Stack>
);
