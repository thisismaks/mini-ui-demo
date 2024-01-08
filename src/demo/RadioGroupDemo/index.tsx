import React, { ChangeEvent, useState } from 'react';

import { FormControlLabel, Radio, RadioGroup, Typography, Stack } from '../../ui/components';
import styles from '../../ui/theme/theme.scss';


export const RadioGroupDemo = () => {
  const [selected, setSelected] = useState('123');
  const [multiSelect, setMultiSelect] = useState(['123']);
    
  const handleRadioGroupChange = (_: ChangeEvent<HTMLInputElement>, value: any) => {
    setSelected(value);
  };

  const handleRadioGroupMultiChange = (_: ChangeEvent<HTMLInputElement>, value: any) => {
    setMultiSelect(value);
  };
    
  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>RadioGroup</Typography>

      <Stack gap={1}>
        <Typography>exclusive</Typography>
        <RadioGroup exclusive value={selected} onChange={handleRadioGroupChange}>
          <FormControlLabel value="123" control={<Radio />} label={123} />
          <FormControlLabel value="456" control={<Radio />} label={456} />
          <FormControlLabel value="789" control={<Radio />} label={789} />
        </RadioGroup>
        <RadioGroup disabled exclusive value={selected} onChange={handleRadioGroupChange}>
          <FormControlLabel value="123" control={<Radio />} label={123} />
          <FormControlLabel value="456" control={<Radio />} label={456} />
          <FormControlLabel value="789" control={<Radio />} label={789} />
        </RadioGroup>
      </Stack>

      <Stack gap={1}>
        <Typography>multiSelect</Typography>
        <RadioGroup value={multiSelect} onChange={handleRadioGroupMultiChange}>
          <FormControlLabel value="123" control={<Radio />} label={123} />
          <FormControlLabel value="456" control={<Radio />} label={456} />
          <FormControlLabel value="789" control={<Radio />} label={789} />
        </RadioGroup>
        <RadioGroup disabled value={multiSelect} onChange={handleRadioGroupMultiChange}>
          <FormControlLabel value="123" control={<Radio />} label={123} />
          <FormControlLabel value="456" control={<Radio />} label={456} />
          <FormControlLabel value="789" control={<Radio />} label={789} />
        </RadioGroup>
      </Stack>

    </Stack>
  );
};
