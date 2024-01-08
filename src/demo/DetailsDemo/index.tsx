import React, { useState } from 'react';

import { Details, Typography, Stack } from '../../ui/components';
import { ChevronDownIcon } from '../../ui/icons';
import styles from '../../ui/theme/theme.scss';


export const DetailsDemo = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Stack gap={2} className={styles.paper}>
      <Typography variant='h5'>Details</Typography>

      <Details expandIcon={<ChevronDownIcon />}>
        <div>Заоголовок</div>
        <Typography variant='h2'>Содержание</Typography>
      </Details>

      <Details expandIcon={<ChevronDownIcon />}>
        <div>Заоголовок</div>
        <Typography variant='h2'>Содержание</Typography>
      </Details>

      <Details
        expanded={expanded}
        expandIcon={<ChevronDownIcon />}
        onToggle={(e) => setExpanded((e.target as HTMLDetailsElement).open)}
      >
        <div>Заоголовок</div>
        <Typography variant='h2'>Содержание</Typography>
      </Details>
    </Stack>
  );
};
