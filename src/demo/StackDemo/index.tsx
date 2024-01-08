import React, { useState } from 'react';

import { FormControlLabel, Radio, RadioGroup, Typography, Stack } from '../../ui/components';
import { StackProps } from '../../ui/components/Stack/types';
import styles from '../../ui/theme/theme.scss';


export const StackDemo = () => {
  const [gap, setGap] = useState<StackProps['gap']>(1);
  const [direction, setDirection] = useState<StackProps['direction']>('row');
  const [alignItems, setAlignItems] = useState<StackProps['alignItems']>('center');
  const [justifyContent, setJustifyContent] = useState<StackProps['justifyContent']>('center');

  return (
    <Stack gap={2}>
      <Typography variant='h5'>Stack</Typography>
      <Stack
        gap={gap}
        direction={direction}
        alignItems={alignItems}
        justifyContent={justifyContent}
        style={{ minHeight: 240 }}
      >
        <div className={styles.paper}>Item 1</div>
        <div className={styles.paper}>Item 2</div>
        <div className={styles.paper}>Item 3</div>
      </Stack>
      <Stack alignItems='flex-start' className={styles.paper}>
        <Typography>direction</Typography>
        <RadioGroup
          exclusive
          value={direction}
          onChange={(e) => setDirection(e.target.value as StackProps['direction'])}
        >
          <FormControlLabel value="row" label='row' control={<Radio />} />
          <FormControlLabel value="row-reverse" label='row-reverse' control={<Radio />} />
          <FormControlLabel value="column" label='column' control={<Radio />} />
          <FormControlLabel value="column-reverse" label='column-reverse' control={<Radio />} />
        </RadioGroup>
        <Typography>alignItems</Typography>
        <RadioGroup
          exclusive
          value={alignItems}
          onChange={(e) => setAlignItems(e.target.value as StackProps['alignItems'])}
        >
          <FormControlLabel value="flex-start" label='flex-start' control={<Radio />} />
          <FormControlLabel value="center" label='center' control={<Radio />} />
          <FormControlLabel value="flex-end" label='flex-end' control={<Radio />} />
          <FormControlLabel value="stretch" label='stretch' control={<Radio />} />
          <FormControlLabel value="baseline" label='baseline' control={<Radio />} />
        </RadioGroup>
        <Typography>justifyContent</Typography>
        <RadioGroup
          exclusive
          value={justifyContent}
          onChange={(e) => setJustifyContent(e.target.value as StackProps['justifyContent'])}
        >
          <FormControlLabel value="flex-start" label='flex-start' control={<Radio />} />
          <FormControlLabel value="center" label='center' control={<Radio />} />
          <FormControlLabel value="flex-end" label='flex-end' control={<Radio />} />
          <FormControlLabel value="space-between" label='space-between' control={<Radio />} />
          <FormControlLabel value="space-around" label='space-around' control={<Radio />} />
          <FormControlLabel value="space-evenly" label='space-evenly' control={<Radio />} />
        </RadioGroup>
        <Typography>gap</Typography>
        <RadioGroup
          exclusive
          value={gap}
          onChange={(e) => setGap(Number(e.target.value) as StackProps['gap'])}
        >
          <FormControlLabel value={0} label='0' control={<Radio />} />
          <FormControlLabel value={0.5} label='0.5' control={<Radio />} />
          <FormControlLabel value={1} label='1' control={<Radio />} />
          <FormControlLabel value={2} label='2' control={<Radio />} />
          <FormControlLabel value={3} label='3' control={<Radio />} />
          <FormControlLabel value={4} label='4' control={<Radio />} />
          <FormControlLabel value={8} label='8' control={<Radio />} />
          <FormControlLabel value={12} label='12' control={<Radio />} />
        </RadioGroup>
      </Stack>
    </Stack>
  );
};
