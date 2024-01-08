import React, { MouseEvent, useState } from 'react';

import { ToggleButton, ToggleButtonGroup, Typography, Stack } from '../../ui/components';
import styles from '../../ui/theme/theme.scss';


export const ToggleButtonGroupDemo = () => {
  const [selected, setSelected] = useState('123');
  const [multiSelect, setMultiSelect] = useState(['123']);
    
  const handleToggleButtonChange = (e: MouseEvent<HTMLElement>, value: any) => {
    setSelected(value);
  };

  const handleToggleButtonMultiChange = (e: MouseEvent<HTMLElement>, value: any) => {
    setMultiSelect(value);
  };
  
  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>ToggleButtonGroup</Typography>

      <Stack gap={1} direction='row'>
        <ToggleButtonGroup exclusive value={selected} onChange={handleToggleButtonChange}>
          <ToggleButton value="123">123</ToggleButton>
          <ToggleButton value="456">456</ToggleButton>
          <ToggleButton value="789">789</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup disabled exclusive value={selected} onChange={handleToggleButtonChange}>
          <ToggleButton value="123">123</ToggleButton>
          <ToggleButton value="456">456</ToggleButton>
          <ToggleButton value="789">789</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack gap={1} direction='row'>
        <ToggleButtonGroup
          color='primary'
          fullWidth
          exclusive
          value={selected}
          onChange={handleToggleButtonChange}
        >
          <ToggleButton value="123">123</ToggleButton>
          <ToggleButton value="456">456</ToggleButton>
          <ToggleButton value="789">789</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          disabled
          exclusive
          fullWidth
          color='primary'
          value={selected}
          onChange={handleToggleButtonChange}
        >
          <ToggleButton value="123">123</ToggleButton>
          <ToggleButton value="456">456</ToggleButton>
          <ToggleButton value="789">789</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack gap={1} direction='row'>
        <ToggleButtonGroup
          color='secondary'
          exclusive
          value={selected}
          onChange={handleToggleButtonChange}
        >
          <ToggleButton value="123">123</ToggleButton>
          <ToggleButton value="456">456</ToggleButton>
          <ToggleButton value="789">789</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color='secondary'
          disabled
          exclusive
          value={selected}
          onChange={handleToggleButtonChange}
        >
          <ToggleButton value="123">123</ToggleButton>
          <ToggleButton value="456">456</ToggleButton>
          <ToggleButton value="789">789</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack gap={1} direction='row'>
        <ToggleButtonGroup value={multiSelect} onChange={handleToggleButtonMultiChange}>
          <ToggleButton value="123">Кнопка один</ToggleButton>
          <ToggleButton value="456">Кнопка два</ToggleButton>
          <ToggleButton value="789">Кнопка три</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup disabled value={multiSelect} onChange={handleToggleButtonMultiChange}>
          <ToggleButton value="123">Кнопка один</ToggleButton>
          <ToggleButton value="456">Кнопка два</ToggleButton>
          <ToggleButton value="789">Кнопка три</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
