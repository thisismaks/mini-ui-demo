import React, { useState } from 'react';

import { NumberInput, Typography, Stack } from 'ui/components';
import styles from 'ui/theme/theme.scss';


export const NumberInputDemo = () => {
  const [value, setValue] = useState(0);
  
  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>NumberInput</Typography>
        
      <Stack gap={1} direction='row'>
        <NumberInput label='мин' min={0} max={9} />
        <NumberInput disabled />
      </Stack>

      <Stack gap={1} direction='row'>
        <NumberInput
          color="secondary"
          label='мин'
          value={value}
          onChange={(e) => setValue(+e.currentTarget.value)}
        />
        <NumberInput
          color="secondary"
          label='мин'
          value={value}
          onChange={(e) => setValue(+e.currentTarget.value)} disabled
        />
      </Stack>

      <Stack gap={1} direction='row'>
        <NumberInput
          className={styles.numberClass}
          color="error"
          min={-2}
          max={9}
          step={2}
          value={value}
          onChange={(e) => setValue(+e.currentTarget.value)}
        />
        <NumberInput
          color="error"
          min={-2}
          max={9}
          step={2}
          value={value}
          onChange={(e) => setValue(+e.currentTarget.value)}
          disabled
        />
      </Stack>
    </Stack>
  );
};
