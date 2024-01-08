import React, { ChangeEvent, useState } from 'react';

import styles from './styles.scss';
import { FormControlLabel, Radio, RadioGroup, Typography, Stack } from '../../ui/components';


export const StyledRadioGroupDemo = () => {
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
      <Typography variant='h5'>StyledRadioGroup</Typography>

      <Stack gap={1}>
        <RadioGroup
          exclusive
          value={selected}
          onChange={handleRadioGroupChange}
          className={styles.radioGroupRoot}
        >
          <FormControlLabel
            className={'123' === selected ? styles.radioGroupCheckedRow : styles.radioGroupRow}
            value="123"
            control={<Radio />}
            // eslint-disable-next-line max-len
            label='Лэйбл первой опции'
          />
          <FormControlLabel
            className={'456' === selected ? styles.radioGroupCheckedRow : styles.radioGroupRow}
            value="456"
            control={<Radio />}
            label='Лэйбл второй опции'
          />
          <FormControlLabel
            className={'789' === selected ? styles.radioGroupCheckedRow : styles.radioGroupRow}
            value="789"
            control={<Radio />}
            label='Лэйбл третьей опции'
          />
        </RadioGroup>
      </Stack>

      <Stack gap={1}>
        <RadioGroup
          disabled
          value={multiSelect}
          onChange={handleRadioGroupMultiChange}
          className={styles.radioGroupRoot}
        >
          <FormControlLabel
            className={multiSelect.includes('123') ? styles.radioGroupCheckedRow : styles.radioGroupRow}
            value="123"
            control={<Radio />}
            // eslint-disable-next-line max-len
            label='Лэйбл первой опции'
          />
          <FormControlLabel
            className={multiSelect.includes('456') ? styles.radioGroupCheckedRow : styles.radioGroupRow}
            value="456"
            control={<Radio />}
            label='Лэйбл второй опции'
          />
          <FormControlLabel
            className={multiSelect.includes('789') ? styles.radioGroupCheckedRow : styles.radioGroupRow}
            value="789"
            control={<Radio />}
            label='Лэйбл третьей опции'
          />
        </RadioGroup>
      </Stack>


    </Stack>
  );
};
