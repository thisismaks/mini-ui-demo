import React, { useState } from 'react';

import { IconButton, OutlinedInput, Typography, Stack } from '../../ui/components';
import { CloseIcon } from '../../ui/icons';
import styles from '../../ui/theme/theme.scss';


export const OutlinedInputDemo = () => {
  const [inputValue, setInputValue] = useState('1111 2222 3333');
    
  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>OutlinedInput</Typography>

      <Stack gap={1} direction='row'>
        <OutlinedInput
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          endAdornment={<div>123</div>}
        />
        <OutlinedInput
          value={inputValue}
          disabled
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
      </Stack>

      <Stack gap={1} direction='row'>
        <OutlinedInput
          value={inputValue}
          color="secondary"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <OutlinedInput
          value={inputValue}
          color="secondary"
          disabled
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
      </Stack>

      <Stack gap={1} direction='row'>
        <OutlinedInput
          endAdornment={
            <IconButton color='error' edge='end' onClick={() => setInputValue('')}>
              <CloseIcon />
            </IconButton>
          }
          value={inputValue}
          color="error"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <OutlinedInput
          value={inputValue}
          color="error"
          disabled
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
      </Stack>

      <OutlinedInput
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
    </Stack>
  );
};
