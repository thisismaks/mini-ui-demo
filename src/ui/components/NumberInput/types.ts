import { ReactNode } from 'react';

import { WrappedInputProps } from '../../types';


export interface NumberInputProps extends WrappedInputProps<'label'> {
  color?: 'primary' | 'secondary' | 'error'
  label?: ReactNode
}
