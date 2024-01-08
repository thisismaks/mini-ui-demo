import { ReactNode } from 'react';

import { WrappedInputProps } from '../../types';


export interface OutlinedInputProps extends WrappedInputProps<'label'> {
  color?: 'primary' | 'secondary' | 'error'
  fullWidth?: boolean
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}
