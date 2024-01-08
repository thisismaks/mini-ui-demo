import React from 'react';

import { Typography, Stack } from '../../ui/components';
import styles from '../../ui/theme/theme.scss';


export const TypographyDemo = () => (
  <Stack gap={2} className={styles.paper}>
    <Typography variant='h5'>Typography</Typography>
        
    <Stack gap={1}>
      <Typography variant="h1" gutterBottom>
                h1. Heading
      </Typography>
      <Typography variant="h2">
                h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
                h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom align='right'>
                h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom >
                h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
                h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom noWrap>
                subtitle2 noWrap Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom align='justify'>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" gutterBottom>
                button text
      </Typography>
      <Typography variant="caption" gutterBottom>
                caption text
      </Typography>
    </Stack>
  </Stack>
);
